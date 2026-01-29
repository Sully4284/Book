import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // Set your API key as environment variable
});

// Retry characters with safer prompts
const characters = [
  {
    id: 'dancer',
    name: 'Dancer',
    prompt: 'Powerful man in his forties with red hair, former worker, intense rebel leader eyes, wearing dark utilitarian clothes, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'harmony',
    name: 'Harmony',
    prompt: 'Fierce woman with red hair, determined warrior expression, wearing dark rebel clothing, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'mickey',
    name: 'Mickey the Carver',
    prompt: 'Thin artistic man with black hair, Violet color caste, genius appearance, brilliant eyes, wearing elaborate violet-accented clothing, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'nero-augustus',
    name: 'Nero au Augustus',
    prompt: 'Imposing Gold nobleman in his fifties, ArchGovernor, cold imperious expression, golden hair, wearing regal black and gold armor and cape, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'fitchner',
    name: 'Fitchner au Barca',
    prompt: 'Rugged unkempt Gold man, wild hair, dark humor in his eyes, wearing less formal Gold attire, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'julian',
    name: 'Julian au Bellona',
    prompt: 'Handsome young Gold man, gentle kind features, scholarly eyes, golden hair, wearing Gold Institute uniform, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'lea',
    name: 'Lea',
    prompt: 'Quiet young Gold woman, gentle features, golden hair, wearing simple Institute uniform, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'pax',
    name: 'Pax au Telemanus',
    prompt: 'Very tall muscular young Gold man, friendly loyal expression, golden hair, wearing Institute uniform, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'titus',
    name: 'Titus au Ladros',
    prompt: 'Large intimidating Gold man, intense features, wearing Institute uniform, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'vixus',
    name: 'Vixus',
    prompt: 'Gold man with sharp hawk-like eyes, intense expression, wearing Institute uniform, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
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
  console.log('Retrying failed character images...');
  console.log(`Generating ${characters.length} images\n`);

  const results = [];

  for (const character of characters) {
    const result = await generateImage(character);
    results.push(result);
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  console.log('\n--- Retry Complete ---');
  const successes = results.filter(r => r.success);
  const failures = results.filter(r => !r.success);

  console.log(`✓ Success: ${successes.length}`);
  console.log(`✗ Failed: ${failures.length}`);

  if (failures.length > 0) {
    console.log('\nStill failing:');
    failures.forEach(f => console.log(`  - ${f.character}: ${f.error}`));
  }
}

main();
