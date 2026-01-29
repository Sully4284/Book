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

/*
 * CHECKLIST FOR ALL IMAGES:
 * 1. No text/watermarks on images
 * 2. Only ONE person per image
 * 3. Human features only (no pointy ears, extra hands, animal features)
 * 4. Full head in frame (no cropping at top)
 * 5. No weird lines/marks on faces
 * 6. Clean professional portrait style
 */

const characters = [
  {
    id: 'mustang',
    name: 'Virginia au Augustus (Mustang)',
    prompt: 'Portrait of a single young teenage girl around 17 years old with flowing golden blonde hair, intelligent fierce golden eyes, youthful face with wild untamed spirit, wearing elegant gold and white clothing, daughter of nobility with rebellious streak, beautiful but young looking, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style, head and shoulders portrait, full head visible, no text, no watermarks, single person only, human features, normal human ears'
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
  console.log('Regenerating Mustang (younger, 17 years old)...\n');

  for (const character of characters) {
    await generateImage(character);
  }

  console.log('\nDone!');
}

main();
