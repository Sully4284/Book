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
    id: 'mickey',
    name: 'Mickey the Carver',
    prompt: 'Portrait of a single white man with a thin angular face and slicked back dark black hair, violet purple eyes, mysterious secretive expression, wearing a sleek fitted purple suit with a black tie that has subtle glimmering purple patterns, pale skin, enigmatic and slightly unsettling vibe, shadowy aesthetic, Red Rising sci-fi fantasy style, dramatic moody lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style, head and shoulders portrait, full head visible, no text, no watermarks, no face markings, single person only, human features'
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
  console.log('Regenerating Mickey (sleeker and more mysterious)...\n');

  for (const character of characters) {
    await generateImage(character);
  }

  console.log('\nDone!');
}

main();
