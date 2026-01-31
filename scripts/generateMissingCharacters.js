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

// Missing characters that need images
const characters = [
  {
    id: 'liam',
    name: 'Liam',
    prompt: 'Young Red boy around 8 years old, rusty red hair, red-tinged eyes that were damaged and healed, innocent childlike face despite hardship, nephew of Lyria, refugee survivor, wearing simple worn clothing, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
  {
    id: 'niobe',
    name: 'Niobe au Telemanus',
    prompt: 'Noble Gold woman in her fifties, wife of Kavax, graceful elegant bearing, warm maternal expression, golden hair with silver streaks, wearing refined Gold noblewoman attire, mother of Daxo and Thraxa, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
  {
    id: 'marius',
    name: 'Marius au Raa',
    prompt: 'Ugly Gold man in mid-twenties, crisp dark goatee, close-cropped dark hair, mismatched intelligent eyes, knobby spindly joints, overgrown forehead and jaw, anemic rabbit-like pale skin, small brown splotches on neck, spider-like calculating appearance, wearing Rim Gold formal attire, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
  {
    id: 'ash-lord',
    name: 'Magnus au Grimmus (Ash Lord)',
    prompt: 'Elderly Gold warlord in his seventies, white-gray hair, cold ruthless calculating eyes, emaciated dying skeletal appearance from poison, once powerful now withered, father of Aja, destroyer of Rhea, wearing dark ornate Gold military regalia, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
  {
    id: 'duke-of-hands',
    name: 'The Duke of Hands',
    prompt: 'Male Pink crime lord, refined beautiful Pink features with sinister edge, carrying white cane topped with octopus head, pink-tinted elegant appearance, Syndicate aesthetic, decadent crimelord bearing, wearing expensive dark suit with pink accents, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
  {
    id: 'syndicate-queen',
    name: 'The Syndicate Queen',
    prompt: 'Mysterious Pink woman, shadowy powerful presence, beautiful Pink features partially obscured, criminal queen commanding fear, elegant yet dangerous, wearing dark luxurious clothing, identity partially hidden, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
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
  const filepath = path.join(outputDir, `${character.id}.png`);

  if (fs.existsSync(filepath)) {
    console.log(`⏭ Skipping ${character.name} - image already exists`);
    return { success: true, character: character.name, skipped: true };
  }

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
    await downloadImage(imageUrl, filepath);
    console.log(`✓ Saved ${character.name} to ${filepath}`);

    return { success: true, character: character.name };
  } catch (error) {
    console.error(`✗ Failed to generate ${character.name}:`, error.message);
    return { success: false, character: character.name, error: error.message };
  }
}

async function main() {
  console.log('Generating missing character images...\n');

  for (const character of characters) {
    await generateImage(character);
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  console.log('\nDone!');
}

main();
