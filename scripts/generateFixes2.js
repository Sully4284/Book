import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Round 2 fixes - corrected prompts
const characters = [
  {
    id: 'darrow-gold',
    name: 'Darrow (Gold)',
    prompt: 'Portrait of a handsome young man with golden blonde hair and golden eyes, strong masculine jaw, intense determined warrior expression, wearing elegant black and gold armor, scar on cheekbone, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style, head and shoulders portrait with full head visible in frame, no cropping'
  },
  {
    id: 'mickey',
    name: 'Mickey the Carver',
    prompt: 'Portrait of a thin eccentric man with black hair and violet eyes, artistic genius appearance, pale skin, wearing elaborate violet and purple artistic clothing, Violet color caste aesthetic, biological artist surgeon, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style, head and shoulders portrait, single person'
  },
  {
    id: 'matteo',
    name: 'Matteo',
    prompt: 'Portrait of a single tall elegant man with pink-tinted hair and pink eyes, refined graceful features, cultured sophisticated appearance, wearing formal pink and white servant attire, Pink color caste tutor aesthetic, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style, head and shoulders portrait, one person only'
  },
  {
    id: 'quinn',
    name: 'Quinn',
    prompt: 'Portrait of a single athletic young Gold woman with golden blonde hair and golden eyes, fast runner physique, playful confident smile, wearing gold and red Institute uniform, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style, head and shoulders portrait, one person only'
  },
  {
    id: 'sevro',
    name: 'Sevro au Barca',
    prompt: 'Portrait of a small scrappy young man with wild golden blonde hair in a mohawk style, intense feral golden eyes, mischievous goblin-like grin, wearing rough clothing with wolf fur trim, the smallest Gold at the Institute but fierce and cunning, human male with wild untamed appearance, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style, head and shoulders portrait'
  }
];

const outputDir = path.join(__dirname, '../public/images/characters');

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function generateImage(character) {
  console.log(`Generating image for ${character.name}...`);

  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: character.prompt,
      n: 1,
      size: "1024x1024",
      quality: "standard"
    });

    const imageUrl = response.data[0].url;
    const filepath = path.join(outputDir, `${character.id}.png`);

    await downloadImage(imageUrl, filepath);
    console.log(`✓ Saved ${character.name} to ${filepath}`);

    return { success: true, character: character.name };
  } catch (error) {
    console.error(`✗ Failed to generate ${character.name}:`, error.message);
    return { success: false, character: character.name, error: error.message };
  }
}

async function main() {
  console.log('Regenerating fixed character images (Round 2)...');
  console.log(`Generating ${characters.length} images\n`);

  const results = [];

  for (const character of characters) {
    const result = await generateImage(character);
    results.push(result);
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  console.log('\n--- Generation Complete ---');
  const successes = results.filter(r => r.success);
  const failures = results.filter(r => !r.success);

  console.log(`✓ Success: ${successes.length}`);
  console.log(`✗ Failed: ${failures.length}`);

  if (failures.length > 0) {
    console.log('\nFailed characters:');
    failures.forEach(f => console.log(`  - ${f.character}: ${f.error}`));
  }
}

main();
