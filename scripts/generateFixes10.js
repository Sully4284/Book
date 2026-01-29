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
    prompt: 'Digital art portrait of a young man around 18-20 years old with spiky dirty blonde hair styled in an undercut mohawk, intense golden amber eyes, sharp angular features, mischievous dangerous smirk, wearing a dark wolf fur cloak over his shoulders, scrappy wild appearance but fully human, stylized fantasy character art similar to anime-influenced Western art, dramatic lighting with dark background, head and shoulders composition, full head in frame, single person, no text, no piercings, no earrings, normal human ears'
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
  console.log('Regenerating Sevro (fan art inspired style)...\n');

  for (const character of characters) {
    await generateImage(character);
  }

  console.log('\nDone!');
}

main();
