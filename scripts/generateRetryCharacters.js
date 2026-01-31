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

// Retry characters with modified prompts (safer wording)
const characters = [
  {
    id: 'sefi',
    name: 'Sefi the Quiet',
    prompt: 'Noble warrior queen with severe angular face, small close-set dark eyes, thin lips, asymmetrical white hair with one side shaved showing blue tribal tattoo and runes, long braid on the other side, pale porcelain skin, iron jewelry through nose, broad shoulders, dignified regal bearing, wearing arctic fur and armor, fantasy warrior queen style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
  {
    id: 'thraxa',
    name: 'Thraxa au Telemanus',
    prompt: 'Strong powerful female warrior in her thirties, athletic muscular build, wild golden hair decorated with white feathers, confident fierce smile, prosthetic metal arm, wearing heavy ornate golden armor, warrior bearing, fantasy knight style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
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
  console.log('Retrying failed character images...\n');

  for (const character of characters) {
    await generateImage(character);
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  console.log('\nDone!');
}

main();
