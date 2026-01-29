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
    id: 'sevro',
    name: 'Sevro au Barca',
    prompt: 'Portrait of a stocky Caucasian white young man around 18-20 years old with spiky dirty blonde hair styled in an undercut mohawk, intense golden amber eyes, sharp angular features, mischievous dangerous smirk, broad shoulders and muscular stocky build, wearing dark clothing with wolf fur collar, scrappy wild appearance, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style, head and shoulders portrait, full head visible, no text, no watermarks, single person only, no piercings, no earrings, normal human ears, human features'
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
  console.log('Regenerating Sevro (matching other character styles)...\n');

  for (const character of characters) {
    await generateImage(character);
  }

  console.log('\nDone!');
}

main();
