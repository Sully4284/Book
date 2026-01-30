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

// New Golden Son characters with visual descriptions
// IMPORTANT RULES TO AVOID COMMON MISTAKES:
// - Single person only, NO multiple people
// - NO text, letters, or words in the image
// - NO piercings, jewelry on face
// - Human features only (no fantasy creatures)
// - Consistent art style with existing characters
const characters = [
  {
    id: 'karnus',
    name: 'Karnus au Bellona',
    prompt: 'Single portrait of a massive hulking Gold warrior man, towers over others like a giant, extremely broad shoulders twice normal width, thick curly golden hair (Bellona family trait), dimpled chin, muscled forearms like carved river wood, brutal intelligent eyes, laughing cruel mouth, wearing dark battle armor, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text, no piercings'
  },
  {
    id: 'tiberius-bellona',
    name: 'Tiberius au Bellona',
    prompt: 'Single portrait of a distinguished older Gold nobleman in his fifties, thick curly golden hair (Bellona family trait), military commander bearing, stern imperious expression, wearing ornate admiral uniform with blue and silver Bellona house colors, eagle insignia, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text, no piercings'
  },
  {
    id: 'julia-bellona',
    name: 'Julia au Bellona',
    prompt: 'Single portrait of a fierce Gold matriarch woman, thick curly golden hair (Bellona family trait), emotional intensity in her eyes, grief and vengeance etched in features, wearing elegant dark gown with blue and silver Bellona house colors, regal but dangerous presence, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text, no piercings'
  },
  {
    id: 'octavia',
    name: 'Octavia au Lune',
    prompt: 'Single portrait of an ageless Gold woman sovereign ruler over 100 years old, hair streaked with grey, blue tendrils visible in corners of eyes from rejuvenation therapy, regal composed bearing, projects both kindly grandmother and ruthless tyrant, wearing imperial white and gold robes with crescent moon sigil, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text, no piercings'
  },
  {
    id: 'lysander',
    name: 'Lysander au Lune',
    prompt: 'Single portrait of a young Gold boy around 10 years old, long golden hair, extraordinarily bright golden eyes like crystals, lean build, observant calculating expression beyond his years, heir to empire, wearing fine white and gold clothing befitting royalty, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text, no piercings'
  },
  {
    id: 'aja',
    name: 'Aja au Grimmus',
    prompt: 'Single portrait of an extremely muscular dark-skinned Gold warrior woman, largest of three sisters, built like a tank, powerful intimidating presence, Olympic Knight, former pupil of legendary swordsman, wearing black and gold armor with Protean Knight insignia, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text, no piercings'
  },
  {
    id: 'moira',
    name: 'Moira au Grimmus',
    prompt: 'Single portrait of a softer Gold woman described as puffy pastry appearance, sweet but sinister smile, political advisor rather than warrior, the smartest of three sisters, intelligent calculating eyes, wearing elegant robes befitting a chief politico, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text, no piercings'
  },
  {
    id: 'lorn',
    name: 'Lorn au Arcos',
    prompt: 'Single portrait of a grizzled older Gold warrior man, grey hair and beard, thick hands marred with scars and wrinkles, weathered battle-hardened appearance, greatest swordsman in all the worlds, cynical philosophical demeanor, retired Rage Knight, wearing simple but quality clothing, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text, no piercings'
  },
  {
    id: 'kavax',
    name: 'Kavax au Telemanus',
    prompt: 'Single portrait of a gigantic Gold warrior man even larger than normal Golds, prominent red beard, eccentric boisterous expression, wields enormous weapons, Pacific Islander features, larger than life personality showing in his smile, wearing ornate armor, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text, no piercings'
  },
  {
    id: 'daxo',
    name: 'Daxo au Telemanus',
    prompt: 'Single portrait of an extremely tall Gold man 7 feet 4 inches, thinner build than his giant family, intellectual appearance, collects exotic weapons, well-read scholarly demeanor despite warrior heritage, wearing refined armor with Telemanus house markings, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text, no piercings'
  },
  {
    id: 'victra',
    name: 'Victra au Julii',
    prompt: 'Single portrait of a tall athletic Gold woman, heavy deeply set eyes, wide sensual mouth with lips shaped to purr insults, striking rather than conventionally beautiful, impetuous and cruel expression, warrior build, wearing sleek dark armor, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text, no piercings'
  },
  {
    id: 'agrippina',
    name: 'Agrippina au Julii',
    prompt: 'Single portrait of a skeletal gaunt Gold matriarch woman, scheming calculating expression, money-focused sharp eyes, older appearance worn by ambition, wearing expensive but severe dark clothing with Julii house colors, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text, no piercings'
  },
  {
    id: 'pliny',
    name: 'Pliny au Velocitor',
    prompt: 'Single portrait of a slender Gold man with skin smooth as silk, golden coiled scented hair, glittering peacock-like eyelashes, thin lips with muted lipstick, muscular but facile body in too-tight embroidered silk tunic, vain effeminate appearance, no Peerless Scar on face, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text, no piercings'
  },
  {
    id: 'leto',
    name: 'Leto au Augustus',
    prompt: 'Single portrait of a bright Gold warrior man in his early thirties, braided hair, warm half-moon grin, poet with the razor appearance, noble bearing, wearing refined Augustus house armor in black and gold, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text, no piercings'
  },
  {
    id: 'theodora',
    name: 'Theodora',
    prompt: 'Single portrait of an older Pink woman past prime courtesan age, graceful composed demeanor, former Rose of exceptional beauty now mature, wise knowing eyes that have heard many secrets, wearing elegant but modest pink-toned clothing, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text, no piercings'
  }
];

const outputDir = path.join(__dirname, '..', 'public', 'images', 'characters');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

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

  // Skip if image already exists
  if (fs.existsSync(filepath)) {
    console.log(`Skipping ${character.name} - image already exists`);
    return;
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
    console.log(`Successfully generated and saved image for ${character.name}`);

    // Wait between requests to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 2000));
  } catch (error) {
    console.error(`Error generating image for ${character.name}:`, error.message);
  }
}

async function main() {
  console.log('Starting Golden Son character image generation...');
  console.log(`Output directory: ${outputDir}`);

  for (const character of characters) {
    await generateImage(character);
  }

  console.log('Done!');
}

main();
