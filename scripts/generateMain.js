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

const characters = [
  {
    id: 'darrow-red',
    name: 'Darrow (Red)',
    prompt: 'Young man with red hair and red eyes, rugged handsome features, intense determined gaze, wearing worn mining work clothes, underground helldiver miner aesthetic, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'darrow-gold',
    name: 'Darrow (Gold)',
    prompt: 'Young man with golden hair and golden eyes, handsome chiseled features, fierce warrior gaze, wearing elegant black and gold armor with red cape, transformed into a Gold noble warrior, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'mustang',
    name: 'Virginia au Augustus (Mustang)',
    prompt: 'Beautiful young Gold woman with flowing golden hair, intelligent fierce eyes, wild spirit, wearing elegant gold and white Institute uniform, daughter of ArchGovernor, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
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
  console.log('Generating main character images...\n');

  for (const character of characters) {
    await generateImage(character);
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  console.log('\nDone!');
}

main();
