import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // Set your API key as environment variable
});

// Character data with visual descriptions for image generation
const characters = [
  // Skip darrow-red, darrow-gold, and mustang - already have images
  {
    id: 'eo',
    name: 'Eo',
    prompt: 'Young woman with red hair, delicate features, fierce determined eyes, wearing simple rustic clothing, underground mining colony aesthetic, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'kieran',
    name: 'Kieran',
    prompt: 'Young man with red hair, rugged miner features, strong jaw, wearing simple work clothes, underground mining colony aesthetic, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'leanna',
    name: 'Leanna',
    prompt: 'Tall quiet young woman with red hair, gentle features like her mother, wearing simple mining colony clothes, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'mother-darrow',
    name: 'Deanna',
    prompt: 'Middle-aged woman with red hair showing gray streaks, weathered but strong features, eyes that have seen hardship, wearing simple mining colony clothes, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'father-darrow',
    name: 'Dale',
    prompt: 'Middle-aged man with red hair, strong noble features despite poverty, defiant eyes, wearing simple miner clothes, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'narol',
    name: 'Uncle Narol',
    prompt: 'Older man with red hair going gray, weathered alcoholic features hiding sharp intelligence, secret rebel, wearing worn mining clothes, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'dio',
    name: 'Dio',
    prompt: 'Young woman who looks like Eo, red hair, delicate features, sad eyes, wearing simple mining colony dress, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'loran',
    name: 'Loran',
    prompt: 'Young man with red hair, miner build, cousin of Darrow, wearing work clothes, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'dancer',
    name: 'Dancer',
    prompt: 'Powerful man in his forties with red hair, former helldiver, scarred neck from pitviper venom, crippled left arm and leg, intense rebel leader eyes, wearing dark utilitarian clothes, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'harmony',
    name: 'Harmony',
    prompt: 'Fierce woman with red hair, half her face scarred from steam burn, beautiful on unscarred side, cold angry eyes full of rage, wearing dark rebel clothing, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'mickey',
    name: 'Mickey the Carver',
    prompt: 'Thin man with black hair and twelve fingers, Violet color caste, artistic genius appearance, unsettling but brilliant eyes, wearing elaborate violet-accented clothing, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'evey',
    name: 'Evey',
    prompt: 'Beautiful young Pink woman with white eagle wings carved into her back, sad quiet expression, delicate features, wearing elegant but modest clothing in pink tones, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'matteo',
    name: 'Matteo',
    prompt: 'Tall refined Pink man, elegant and proper, former pleasure slave now cultural tutor, sophisticated appearance, wearing refined clothing in pink tones, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'nero-augustus',
    name: 'Nero au Augustus',
    prompt: 'Imposing Gold nobleman in his fifties, ArchGovernor of Mars, cold imperious expression, scar on cheekbone marking him Peerless Scarred, golden hair, wearing regal black and gold armor and cape, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'octavia-lune',
    name: 'Octavia au Lune',
    prompt: 'Ageless Gold woman, the Sovereign ruler of the Society, crescent scar on right cheekbone, golden hair, regal and terrifying beauty, wearing imperial white and gold robes, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'fitchner',
    name: 'Fitchner au Barca',
    prompt: 'Scraggly unkempt Gold man, different from pristine peers, wild hair, dark humor in his eyes, Proctor of House Mars, wearing less formal Gold attire, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'cassius',
    name: 'Cassius au Bellona',
    prompt: 'Extremely handsome young Gold man, charismatic smile, golden hair, athletic build, skilled duelist, wearing elegant gold and white Institute uniform with sword, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'julian',
    name: 'Julian au Bellona',
    prompt: 'Handsome young Gold man, twin of Cassius but gentler features, kind scholarly eyes, golden hair, wearing Gold Institute uniform, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'sevro',
    name: 'Sevro au Barca',
    prompt: 'Small feral Gold man, wild eyes, wolf-like appearance, wearing wolf skins over torn Institute uniform, goblin-like fierce expression, dark hair unlike most Golds, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'roque',
    name: 'Roque au Fabii',
    prompt: 'Elegant young Gold man, poet and philosopher, thoughtful refined features, golden hair, intellectual appearance, wearing elegant Institute uniform, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'quinn',
    name: 'Quinn',
    prompt: 'Athletic young Gold woman, fastest runner in House Mars, playful mischievous expression, golden hair, wearing Institute athletic uniform, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'lea',
    name: 'Lea',
    prompt: 'Meek young Gold woman, quiet follower, gentle features, golden hair, wearing simple Institute uniform, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'pax',
    name: 'Pax au Telemanus',
    prompt: 'Massive young Gold man, incredibly strong giant build, loyal friendly expression despite intimidating size, golden hair, wearing stretched Institute uniform, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'titus',
    name: 'Titus au Ladros',
    prompt: 'Brutal massive Gold man, savage cruel features, hidden Red origins, intimidating violent appearance, wearing blood-stained Institute uniform, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'antonia',
    name: 'Antonia au Severus',
    prompt: 'Tall manipulative Gold woman, beautiful but cold calculating eyes, political schemer appearance, golden hair, wearing elegant Institute uniform, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'jackal',
    name: 'Adrius au Augustus (The Jackal)',
    prompt: 'Cunning young Gold man, son of ArchGovernor, intelligent ruthless eyes, unsettling smile hiding cruelty, golden hair, lean predatory build, wearing dark elegant clothing, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'vixus',
    name: 'Vixus',
    prompt: 'Gold man with dead hawk-like eyes, takes pleasure in violence, cruel sharp features, menacing appearance, wearing Institute uniform, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'ugly-dan',
    name: 'Ugly Dan',
    prompt: 'Gray soldier captain, replacement mechanical arm, cruel scarred face, contemptuous expression, wearing gray military uniform with armor, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  },
  {
    id: 'podginus',
    name: 'Timony cu Podginus',
    prompt: 'Small Copper bureaucrat man, copper-colored hair, condescending pompous expression, wearing formal Copper administrative robes, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, detailed fantasy game character art style'
  }
];

const outputDir = path.join(__dirname, '../public/images/characters');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Download image from URL
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
      fs.unlink(filepath, () => {}); // Delete partial file
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
  console.log('Starting character image generation...');
  console.log(`Generating ${characters.length} images\n`);

  const results = [];

  // Generate images one at a time to avoid rate limits
  for (const character of characters) {
    const result = await generateImage(character);
    results.push(result);

    // Wait 2 seconds between requests to avoid rate limits
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  // Summary
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
