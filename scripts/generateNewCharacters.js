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

// New characters from books 3-6 (Morning Star, Iron Gold, Dark Age, Light Bringer)
const characters = [
  // === OBSIDIANS ===
  {
    id: 'ragnar',
    name: 'Ragnar Volarus',
    prompt: 'Massive Obsidian warrior prince, nearly seven feet tall with colossal muscular build, tattooed pale face weathered like rhinoceros hide from arctic winds, white beard braided into four strands, shaved head with white tail braided with red ribbons, deep black eyes, nearly forty years old, wearing fur and primitive armor, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
  {
    id: 'sefi',
    name: 'Sefi the Quiet',
    prompt: 'Obsidian warrior queen woman, severe crow-angled face with small close-set eyes, thin purple lips permanently pursed, white hair shaved on left side with blue wing tattoo and astral runes on skull, long braid falling to waist on right, pale unscarred skin, single iron bar through nose, broad bony shoulders, subdued sleepy grandeur, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
  {
    id: 'alia',
    name: 'Alia Snowsparrow',
    prompt: 'Ancient colossal Obsidian queen woman, white hair, pale arctic skin, regal tyrannical bearing, traditional tribal facial markings, mother of warriors, devout fierce expression, wearing arctic queen furs and jewelry, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
  {
    id: 'volga',
    name: 'Volga Fjorgan',
    prompt: 'Young Obsidian woman, small for her kind at six and a half feet, lean stunted build, sloping cheekbones visible without wind calluses, broad shoulders, puppy-like eager expression despite intimidating size, daughter of Ragnar, white hair, pale skin, damaged teeth from poor dental work, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
  {
    id: 'volsung-fa',
    name: 'Volsung Fa',
    prompt: 'Massive ancient Obsidian warlord called the Allfather, legendary warrior from beyond the Kuiper Belt, white-gray hair, pale arctic skin, terrifying presence, god-claimant bearing, tribal markings of conquest, wearing primitive but magnificent armor adorned with trophies, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
  {
    id: 'valdir',
    name: 'Valdir the Unshorn',
    prompt: 'Obsidian warlord wearing hydra skull helmet with hollow black eyes, black mohawk running to tailbone sewn with trophies, former slaveknight, fierce brutal expression, massive warrior build, called Sky Bastard by Golds, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
  {
    id: 'wulfgar',
    name: 'Wulfgar the Whitetooth',
    prompt: 'Obsidian warrior ArchWarden, white flowing hair over shoulders, wearing sky-blue Warden cape over armor, dignified conflicted expression, massive build, Republic commander bearing, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },

  // === GRAYS ===
  {
    id: 'holiday',
    name: 'Holiday ti Nakamura',
    prompt: 'Female Gray soldier, wide face covered in freckles, flat smashed nose, dark gray narrow eyes, scar-notched eyebrow, ashen mohawk hairstyle, strong military bearing, South Pacific heritage tan skin, wearing gray military tactical armor, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
  {
    id: 'trigg',
    name: 'Trigg ti Nakamura',
    prompt: 'Male Gray soldier with open boyish face, lopsided charming smile, two gold teardrop tattoos under right eye, less intimidating than his sister, South Pacific heritage, wearing gray special operations tactical gear, devoted earnest expression, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
  {
    id: 'ephraim',
    name: 'Ephraim ti Horn',
    prompt: 'Middle-aged Gray man, world-weary haunted expression, former special operations soldier turned master thief, worn cynical appearance, short cropped gray-black hair, dark circles under eyes from substance abuse, lean athletic build showing hard living, wearing worn civilian thief attire, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },

  // === REDS ===
  {
    id: 'lyria',
    name: 'Lyria of Lagalos',
    prompt: 'Young Red woman refugee, big red-tinged eyes with fierce defiant expression, small petite stature, rusty red hair worn long, red-tinged skin, determined survivor bearing despite youth, calloused hands from labor, wearing simple worn utilitarian clothing, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
  {
    id: 'rhonna',
    name: 'Rhonna of Lykos',
    prompt: "Young Red woman soldier, buzzed head, flat nose, very short stature, headstrong fierce expression, Howler lancer, Darrow's niece, red-tinged skin and features, wearing military tactical gear, determined fighter look, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text"
  },

  // === GOLD PROTAGONISTS/ALLIES ===
  {
    id: 'alexandar',
    name: 'Alexandar au Arcos',
    prompt: 'Young male Gold warrior, blade-thin athletic build, long white-blond hair, fair golden skin, smirking confident expression, grandson of Lorn au Arcos, prodigious skill evident in bearing, wearing elegant Gold military armor, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
  {
    id: 'thraxa',
    name: 'Thraxa au Telemanus',
    prompt: 'Female Gold warrior called The Hammer, mid-thirties, stout powerful build with thighs thick as drums, wild gold hair garlanded with white feathers, metal prosthetic left arm from Sun Industries, boisterous fierce expression, wearing heavy Gold warrior armor, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
  {
    id: 'pax-augustus',
    name: 'Pax Augustus',
    prompt: 'Young Gold boy, son of Darrow and Mustang, tall for his age, golden hair like his mother, precocious serious demeanor beyond his years, heir to legendary parents, wearing refined Gold youth attire, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
  {
    id: 'electra',
    name: 'Electra au Barca',
    prompt: 'Young Gold girl, daughter of Sevro and Victra, dour fierce expression like her father, hatchet-faced, silent and serious, savage ferocity visible in eyes, wild dark hair, wearing Gold youth combat training attire, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },

  // === GOLD ANTAGONISTS ===
  {
    id: 'apollonius',
    name: 'Apollonius au Valii-Rath',
    prompt: 'The Minotaur, massive Gold man taller and thicker than most, buckwheat honey colored skin, angelic beauty shaded with evil intent, full sensuous cruel lips, sleepy-lidded eyes with thick gold lashes, long waves of dark golden hair, theatrical grandiloquent bearing, rippling muscles, wearing magnificent ornate Gold armor, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
  {
    id: 'atlas',
    name: 'Atlas au Raa',
    prompt: 'The Fear Knight, tall slender Gold man, pale face with gently slanting eyes, lithe dangerous build, cold calculating neutral expression that inspires dread, wearing gray armor styled with moth motif, pale mask of office nearby, carrying long black hasta blade, psychological terror expert bearing, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
  {
    id: 'atalantia',
    name: 'Atalantia au Grimmus',
    prompt: 'Female Gold Dictator, regal serpentine presence, daughter of the Ash Lord, predatory calculating eyes, asp jewelry motif, sitting on black chair of office, powerful deadly warrior bearing, dark commanding beauty, wearing dark elegant Gold armor with asp decorations, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
  {
    id: 'ajax',
    name: 'Ajax au Grimmus',
    prompt: 'Young male Gold warrior called The Storm Knight, son of Aja and Atlas, powerful war engine build, narrow slitted ambitious eyes, Iron Leopards commander, seeking glory and paternal approval, wearing ornate Gold military armor with storm motifs, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
  {
    id: 'lysander-adult',
    name: 'Lysander au Lune (Adult)',
    prompt: 'Adult male Gold, heir of Silenius, grandson of Octavia, handsome refined features, intelligent calculating eyes, wearing elegant white and gold clothing befitting Lune heritage, political schemer appearance mixed with warrior bearing, golden hair, regal posture, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },

  // === RIM GOLDS ===
  {
    id: 'romulus',
    name: 'Romulus au Raa',
    prompt: 'Lord of the Dust, Rim Gold Sovereign, high cheekbones with long jaw, sensual lips with two scars, dark gold hair streaked with gray tied in simple bun with black wood stick, missing right arm never replaced, moon pale skin, humble powerful bearing sitting at foot of throne, intensity like cold stone in still water, wearing austere Rim Gold robes, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
  {
    id: 'dido',
    name: 'Dido au Raa',
    prompt: 'Female Rim Gold, wife of Romulus, commanding fierce presence, mother of seven, originally from Venus, armored commander bearing, stalks into rooms with intention of tearing them down, protective fierce mother look, wearing Rim Gold armor with commanding cape, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
  {
    id: 'diomedes',
    name: 'Diomedes au Raa',
    prompt: 'Olympic Knight of the Rim, male Gold with intensely raw pure bearing undimmed by compromise, dark hair worn loose falling around shoulders, dark quiet eyes without evil or malice, noble presence that makes others feel small, wearing gray scorosuit with storm cloak that mutates in color, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
  {
    id: 'seraphina',
    name: 'Seraphina au Raa',
    prompt: 'Young female Rim Gold warrior called Little Hawk, daughter of Romulus and Dido, athletic fierce build, adventurous determined spirit, dark hair typical of Rim Golds, wearing Rim Gold warrior armor, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
  {
    id: 'kalindora',
    name: 'Kalindora au San',
    prompt: 'The Love Knight female Gold, Olympic Knight, aunt to Alexandar, lips with two scars but full capable only of whispers, small sharp nose, defining eclipse-like golden eyes with every gradient of gold spiraling toward pupils, elegant warrior bearing, wearing Olympic Knight armor, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },

  // === BLUES ===
  {
    id: 'orion',
    name: 'Orion xe Aquarii',
    prompt: 'Female Blue naval commander, curmudgeonly ornery expression, blue-tinged skin and hair, parrot companion, hands-on-hips confident posture, legendary ship captain bearing, wearing blue naval commander uniform, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
  {
    id: 'pytha',
    name: 'Pytha',
    prompt: 'Female Blue pilot, bald head, barefoot, thin grasshopper-like limbs, wearing gray cotton pants and old sweatshirt, carrying plastic dinosaur mug, Martian origins, loyal caring expression, casual comfortable appearance, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },

  // === SILVER ===
  {
    id: 'quicksilver',
    name: 'Regulus ag Sun (Quicksilver)',
    prompt: 'Male Silver industrialist, richest man in the Republic, silver-gray hair, silver-tinted skin, calculating intelligent eyes, immaculate wealthy businessman appearance, shrewd expression, everything about him shiny sparse silver and white, wearing expensive silver-accented business attire, Red Rising sci-fi fantasy style, dramatic lighting, dark atmospheric background, digital art portrait, single person only, no text'
  },
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
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function generateImage(character) {
  const filepath = path.join(outputDir, `${character.id}.png`);

  // Skip if image already exists
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
  console.log('Starting new character image generation (Books 3-6)...');
  console.log(`Processing ${characters.length} characters\n`);

  const results = [];

  for (const character of characters) {
    const result = await generateImage(character);
    results.push(result);

    // Wait 2 seconds between requests to avoid rate limits
    if (!result.skipped) {
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  // Summary
  console.log('\n--- Generation Complete ---');
  const successes = results.filter(r => r.success && !r.skipped);
  const skipped = results.filter(r => r.skipped);
  const failures = results.filter(r => !r.success);

  console.log(`✓ Generated: ${successes.length}`);
  console.log(`⏭ Skipped (existing): ${skipped.length}`);
  console.log(`✗ Failed: ${failures.length}`);

  if (failures.length > 0) {
    console.log('\nFailed characters:');
    failures.forEach(f => console.log(`  - ${f.character}: ${f.error}`));
  }
}

main();
