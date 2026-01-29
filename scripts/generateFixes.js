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

// Fixed character prompts based on exact book descriptions
const characters = [
  {
    id: 'darrow-gold',
    name: 'Darrow (Gold)',
    prompt: 'Handsome young man with golden hair and golden eyes, tall and muscular warrior physique, strong masculine jaw, slightly menacing determined expression, wearing elegant black and gold armor, scarred face marking him as Peerless Scarred, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style, full head in frame'
  },
  {
    id: 'matteo',
    name: 'Matteo',
    prompt: 'Single tall elegant Pink man, refined features, graceful posture, light pink-tinted skin and hair, wearing formal servant attire with pink accents, cultured tutor appearance, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style, full head in frame, one person only'
  },
  {
    id: 'mustang',
    name: 'Virginia au Augustus (Mustang)',
    prompt: 'Beautiful young woman with flowing golden blonde hair, intelligent fierce golden eyes, wild untamed spirit, normal human ears, wearing elegant gold and white clothing, daughter of nobility with wild streak, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style, full head in frame, human features'
  },
  {
    id: 'cassius',
    name: 'Cassius au Bellona',
    prompt: 'Extremely handsome young Caucasian man with golden blonde hair, golden eyes, charming smile, tall athletic swordsman build, aristocratic features, wearing elegant Gold noble attire in white and gold, charismatic and confident expression, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style, full head in frame'
  },
  {
    id: 'leanna',
    name: 'Leanna',
    prompt: 'Tall quiet young woman with red hair and red eyes, gentle reserved features, resembles her mother, wearing simple Red caste mining colony clothing, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style, full head in frame'
  },
  {
    id: 'mickey',
    name: 'Mickey the Carver',
    prompt: 'Thin artistic man with black hair, Violet color caste with violet eyes, genius eccentric appearance, twelve fingers visible on his hands, wearing elaborate violet-accented artistic clothing, biological artist and surgeon aesthetic, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style, full head in frame'
  },
  {
    id: 'nero-augustus',
    name: 'Nero au Augustus',
    prompt: 'Imposing Gold nobleman in his fifties, cold imperious expression, golden hair graying at temples, scar on cheekbone marking him as Peerless Scarred, wearing regal black and gold ArchGovernor armor and cape, powerful intimidating presence, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style, full head and face completely in frame'
  },
  {
    id: 'quinn',
    name: 'Quinn',
    prompt: 'Athletic young Gold woman with golden blonde hair, golden eyes, fast runner physique, playful mischievous expression, wearing Gold Institute uniform in gold and red colors, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style, full head in frame'
  },
  {
    id: 'roque',
    name: 'Roque au Fabii',
    prompt: 'Handsome young Gold man with golden blonde hair, golden eyes, thoughtful poetic expression, elegant refined features, wearing Gold Institute uniform, philosopher and poet aesthetic, intellectual appearance, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style, full head and face completely in frame'
  },
  {
    id: 'sevro',
    name: 'Sevro au Barca',
    prompt: 'Small wiry young Gold man with wild golden blonde mohawk hairstyle, feral intense golden eyes, wolf-like wild appearance, wearing wolf pelts and rugged clothing, smallest Gold at the Institute but fierce, goblin-like mischievous expression, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style, full head in frame'
  },
  {
    id: 'ugly-dan',
    name: 'Ugly Dan',
    prompt: 'Grizzled Gray military soldier with gray hair and gray eyes, scarred weathered face, one mechanical replacement arm, wearing gray military uniform and armor, tough veteran soldier appearance, cruel expression, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style, full head in frame'
  },
  // Also generate the missing characters
  {
    id: 'titus',
    name: 'Titus au Ladros',
    prompt: 'Massive intimidating young Gold man, brutal features, golden hair, wearing Gold Institute uniform, aggressive violent expression, large muscular build, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style, full head in frame'
  },
  {
    id: 'vixus',
    name: 'Vixus',
    prompt: 'Gold man with dead hawk-like golden eyes, sharp predatory features, golden hair, wearing Gold Institute uniform, cruel cold expression, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style, full head in frame'
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
  console.log('Regenerating fixed character images...');
  console.log(`Generating ${characters.length} images\n`);

  const results = [];

  for (const character of characters) {
    const result = await generateImage(character);
    results.push(result);
    // Wait between requests to avoid rate limiting
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
