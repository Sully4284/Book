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
    prompt: 'Portrait of a single white man with a thin face and dark black hair, violet purple eyes, wearing a sleek modern purple suit with a black tie that has subtle glimmering purple patterns, clean shaven, artistic intelligent expression, pale skin, sophisticated appearance, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style, head and shoulders portrait, full head visible, no text, no watermarks, no face markings, single person only, human features'
  },
  {
    id: 'matteo',
    name: 'Matteo',
    prompt: 'Portrait of a single tall elegant man with light pink tinted hair and soft pink eyes, refined graceful handsome features, cultured sophisticated expression, wearing formal high-end pink and white servant attire with elegant details, Pink color caste aesthetic, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style, head and shoulders portrait, full head visible, no text, no watermarks, single person only, human features, clean face'
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
  console.log('Regenerating fixed character images (Round 3)...');
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
