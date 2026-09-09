#!/usr/bin/env node
/**
 * Regenerate every character portrait in ONE locked visual style, with canon-accurate
 * caste colours and separate "era" portraits for characters who age across the series.
 *
 * Usage:
 *   OPENAI_API_KEY=sk-... node scripts/generatePortraits.mjs                 # everything
 *   OPENAI_API_KEY=sk-... node scripts/generatePortraits.mjs --only darrow-veteran,mustang-sovereign
 *   node scripts/generatePortraits.mjs --dry-run                              # print prompts only
 *   node scripts/generatePortraits.mjs --list                                 # list portrait ids
 *
 * Output: public/images/characters/<id>.png (existing files are overwritten).
 * After a run the script prints the `eras` snippet to paste into src/utils/characterImages.ts.
 *
 * Why the old set looked inconsistent: every prompt ended in the same generic suffix but
 * described backgrounds, framing and lighting differently, and about half ignored the
 * Society's colour rules (brown-haired Golds, grey-eyed Sovereign, jet-black Obsidian).
 * Here the framing, backdrop, lighting and palette are fixed once and the caste rules are
 * appended automatically, so the only thing that varies between portraits is the person.
 */
import OpenAI from 'openai';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '../public/images/characters');
const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const LIST = args.includes('--list');
const only = (args.find((a) => a.startsWith('--only')) || '').split('=')[1];
const ONLY = only ? new Set(only.split(',')) : null;

// ---------------------------------------------------------------------------
// The one style every portrait shares. Change it here and nowhere else.
// ---------------------------------------------------------------------------
const STYLE =
  'Painted cinematic character portrait, head and shoulders, subject centred and facing ' +
  'three-quarters toward the viewer, eyes level with the upper third of the frame. Plain ' +
  'dark charcoal studio backdrop with a soft vignette, no scenery, no props. One warm key ' +
  'light from the upper left with a faint cool rim light on the opposite shoulder. Muted, ' +
  'slightly desaturated palette with fine oil-paint brush texture, realistic anatomy, ' +
  'no exaggerated glossiness. Square 1:1. No text, no watermark, no border.';

// Canon colour rules for each caste of the Society. Appended to every prompt.
const CASTE = {
  Red: 'a Red of the Society: rust-red hair and red irises, small wiry frame, pale skin from a life underground',
  Gold: 'a Gold of the Society: hair the colour of true gold and irises the colour of gold, tall, symmetrical, striking features',
  Gray: 'a Gray of the Society: ash-gray hair, gray irises, lean disciplined military build',
  Obsidian: 'an Obsidian of the Society: towering, heavily muscled, pale ashen skin, black irises, black hair unless noted, tribal ink',
  Pink: 'a Pink of the Society: rose-pink irises, soft flawless features, delicate build',
  Violet: 'a Violet of the Society: violet irises and violet-tinted hair, slender artistic hands',
  Blue: 'a Blue of the Society: pale blue irises and blue-tinted hair, thin frame, faint data-implant marks at the temples',
  Silver: 'a Silver of the Society: silver irises and silver hair, sharp well-fed features',
  Copper: 'a Copper of the Society: copper-coloured hair and irises, bureaucratic bearing',
  Green: 'a Green of the Society: green irises and green-tinted hair, screen-pale complexion',
  Yellow: 'a Yellow of the Society: yellow irises and pale yellow hair, clinical calm expression',
  Orange: 'an Orange of the Society: orange irises and orange-tinted hair, engineer\'s hands',
  Brown: 'a Brown of the Society: brown irises and brown hair, servant\'s plain bearing',
  White: 'a White of the Society: white irises and white hair, serene priestly bearing',
};

const SCAR = 'a thin duelling scar on the right cheekbone marking a Peerless Scarred';

// ---------------------------------------------------------------------------
// Portraits. `id` becomes the file name. Characters who age get several entries;
// `eras` says which books should use that file (paste-ready for characterImages.ts).
// ---------------------------------------------------------------------------
const portraits = [
  // ===== Darrow: three eras =====
  { id: 'darrow-red', character: 'darrow', caste: 'Red', desc: 'Sixteen-year-old Helldiver of Lykos, lean, soot on his neck, defiant grief in his eyes, worn mining coverall with a frayed red scarf' },
  { id: 'darrow-gold', character: 'darrow', caste: 'Gold', desc: `Darrow au Andromedus at eighteen to twenty-three, freshly Carved into a Gold, hard jaw, ${SCAR}, close-cropped golden hair, black-and-gold Institute tunic, a wolf's stillness` },
  { id: 'darrow-veteran', character: 'darrow', caste: 'Gold', eras: ['iron-gold', 'dark-age', 'light-bringer'], desc: `Darrow in his mid-thirties as the Reaper of the Republic, weathered and scarred, short beard flecked with early gray, ${SCAR} and older battle scars, tired eyes that have seen a decade of war, dark Republic field uniform` },

  // ===== Mustang / Virginia: two eras =====
  { id: 'mustang', character: 'mustang', caste: 'Gold', desc: `Virginia au Augustus at seventeen to twenty-three, golden-brown hair tied back, keen amused intelligence, ${SCAR}, athletic, plain Institute jacket` },
  { id: 'mustang-sovereign', character: 'mustang', caste: 'Gold', eras: ['iron-gold', 'dark-age', 'light-bringer'], desc: `Virginia au Augustus in her mid-thirties as Sovereign of the Republic, hair swept up formally, ${SCAR}, composed and weary authority, high-collared white-and-gold state dress` },

  // ===== Sevro: two eras =====
  { id: 'sevro', character: 'sevro', caste: 'Gold', desc: 'Sevro au Barca at seventeen, undersized and feral for a Gold, plain almost ugly face, ragged dark-gold mohawk, wolf-pelt over a torn Institute tunic, wicked grin' },
  { id: 'sevro-veteran', character: 'sevro', caste: 'Gold', eras: ['iron-gold', 'dark-age', 'light-bringer'], desc: 'Sevro au Barca in his mid-thirties, shaved sides and a short mohawk, scarred, goatee, a manic tired grin, battered Howler combat jacket with a wolf-head pin' },

  // ===== Cassius: two eras =====
  { id: 'cassius', character: 'cassius', caste: 'Gold', desc: 'Cassius au Bellona at seventeen, classically handsome, loose golden curls, easy charming smile, immaculate white-and-gold Institute uniform' },
  { id: 'cassius-veteran', character: 'cassius', caste: 'Gold', eras: ['iron-gold', 'dark-age', 'light-bringer'], desc: 'Cassius au Bellona in his mid-thirties, still handsome but weathered, golden curls shorter, trimmed beard, melancholy in the eyes, a lonely exile\'s worn travelling coat' },

  // ===== Victra: two eras =====
  { id: 'victra', character: 'victra', caste: 'Gold', desc: 'Victra au Julii in her mid-twenties, very tall and statuesque, sharp cheekbones, golden hair cut to the jaw, sardonic half-smile, sleek dark Julii military dress' },
  { id: 'victra-veteran', character: 'victra', caste: 'Gold', eras: ['iron-gold', 'dark-age', 'light-bringer'], desc: 'Victra au Julii in her late thirties, imposing and severe, golden hair pulled back hard, faint lines at the eyes, dark Julii house colours with a Republic sigil' },

  // ===== Lysander: two eras =====
  { id: 'lysander', character: 'lysander', caste: 'Gold', desc: 'Lysander au Lune as a solemn ten-year-old boy, neat golden hair, watchful too-old eyes, pale formal Lune tunic' },
  { id: 'lysander-adult', character: 'lysander', caste: 'Gold', eras: ['iron-gold', 'dark-age', 'light-bringer'], desc: 'Lysander au Lune at twenty, slender and elegant, fine features, golden hair worn long to the collar, a diplomat\'s guarded calm, simple grey exile\'s tunic' },

  // ===== Reds =====
  { id: 'eo', character: 'eo', caste: 'Red', desc: 'Eo of Lykos, sixteen, small and slight, wild rust-red hair, a dreamer\'s bright fearless eyes, simple homespun dress' },
  { id: 'kieran', character: 'kieran', caste: 'Red', desc: 'Kieran, Darrow\'s older brother, nineteen, broader and steadier than Darrow, cautious eyes, mining coverall' },
  { id: 'leanna', character: 'leanna', caste: 'Red', desc: 'Leanna, Darrow\'s sister, tall and quiet, rust-red hair braided, gentle guarded face, Webbery worker\'s smock' },
  { id: 'mother-darrow', character: 'mother-darrow', caste: 'Red', desc: 'Deanna, Darrow\'s mother, in her forties, rust-red hair streaked gray, thin from a hard life, iron-strong steady gaze' },
  { id: 'father-darrow', character: 'father-darrow', caste: 'Red', desc: 'Dale, Darrow\'s father, mid-thirties, dancer\'s lean grace, calm defiant eyes, mining coverall with a red scarf' },
  { id: 'narol', character: 'narol', caste: 'Red', desc: 'Uncle Narol, fifties, rust-red hair going gray, drink-reddened weathered face hiding sharp intelligence' },
  { id: 'dio', character: 'dio', caste: 'Red', desc: 'Dio, Eo\'s sister, looks like Eo but softer and sadder, rust-red hair, homespun dress' },
  { id: 'loran', character: 'loran', caste: 'Red', desc: 'Loran, Darrow\'s cousin and Dio\'s husband, young miner, rust-red hair, open friendly face' },
  { id: 'dancer', character: 'dancer', caste: 'Red', desc: 'Dancer, forties, former Helldiver, handsome ruined face, neck scarred by pitviper venom, left arm hanging crippled, revolutionary\'s intensity' },
  { id: 'harmony', character: 'harmony', caste: 'Red', desc: 'Harmony, thirties, one half of her face beautiful and the other half melted by an old steam burn, cold furious eyes' },
  { id: 'lyria', character: 'lyria', caste: 'Red', desc: 'Lyria of Lagalos, eighteen, small and underfed, rust-red hair chopped short, stubborn suspicious eyes, drab camp clothing' },
  { id: 'rhonna', character: 'rhonna', caste: 'Red', desc: 'Rhonna, Darrow\'s niece, late teens, rust-red hair, eager fierce face, Republic recruit fatigues' },
  { id: 'liam', character: 'liam', caste: 'Red', desc: 'Liam, Lyria\'s young nephew, a small boy of about six, rust-red hair, wide frightened eyes' },

  // ===== Golds: House Augustus & allies =====
  { id: 'nero-augustus', character: 'nero-augustus', caste: 'Gold', desc: `Nero au Augustus, ArchGovernor of Mars, fifties, hawkish severe face, ${SCAR}, close-cut golden hair going pale, black-and-gold state robes, cold command` },
  { id: 'jackal', character: 'jackal', caste: 'Gold', desc: 'Adrius au Augustus, the Jackal, seventeen to twenty-three, slight and boyish, thin clever face, small unsettling smile, neat golden hair, immaculate dark suit' },
  { id: 'leto', character: 'leto', caste: 'Gold', desc: 'Leto au Augustus, Nero\'s adopted heir, twenties, noble open face, golden hair, Augustus green-and-gold uniform' },
  { id: 'pliny', character: 'pliny', caste: 'Gold', desc: 'Pliny au Velocitor, Nero\'s Politico, forties, sleek and well-fed, oiled golden hair, thin knowing smile, rich courtier\'s robes' },
  { id: 'pax', character: 'pax', caste: 'Gold', desc: 'Pax au Telemanus, seventeen, enormous even for a Gold, huge jovial face, wild golden hair, booming friendliness, Institute tunic straining at the shoulders' },
  { id: 'kavax', character: 'kavax', caste: 'Gold', desc: 'Kavax au Telemanus, fifties, bear-like and vast, thick golden beard, warm booming face, a small red fox on his shoulder, Telemanus red-and-gold' },
  { id: 'niobe', character: 'niobe', caste: 'Gold', desc: 'Niobe au Telemanus, fifties, tall and stately, golden hair braided with red, calm watchful eyes' },
  { id: 'daxo', character: 'daxo', caste: 'Gold', desc: 'Daxo au Telemanus, twenties, very tall and lean, elegant clever face, golden hair worn long, mild dangerous smile' },
  { id: 'thraxa', character: 'thraxa', caste: 'Gold', desc: 'Thraxa au Telemanus, thirties, broad-shouldered and cheerful, golden hair in a warrior\'s braid, one metal prosthetic arm' },
  { id: 'lorn', character: 'lorn', caste: 'Gold', desc: `Lorn au Arcos, the Rage Knight, seventies, white-gold hair and beard, deeply lined severe face, ${SCAR}, plain gray robes over old armour` },
  { id: 'alexandar', character: 'alexandar', caste: 'Gold', desc: 'Alexandar au Arcos, twenty, tall and golden-perfect, proud eager face, Lorn\'s grandson, Howler combat jacket' },
  { id: 'roque', character: 'roque', caste: 'Gold', desc: 'Roque au Fabii, the Poet, seventeen to twenty-three, slender and pale, fine melancholy features, long golden hair, quiet thoughtful eyes' },
  { id: 'quinn', character: 'quinn', caste: 'Gold', desc: 'Quinn, seventeen, lithe runner\'s build, golden hair cut short, quick warm smile, Institute tunic' },
  { id: 'lea', character: 'lea', caste: 'Gold', desc: 'Lea, sixteen, small and gentle-faced, golden hair, frightened kind eyes, Institute tunic' },
  { id: 'julian', character: 'julian', caste: 'Gold', desc: 'Julian au Bellona, sixteen, Cassius\'s softer twin, golden curls, gentle scholarly face, Institute tunic' },
  { id: 'tactus', character: 'tactus', caste: 'Gold', desc: 'Tactus au Rath, twenties, lean and rakish, golden hair, cruel amused mouth, restless eyes, Howler jacket' },
  { id: 'titus', character: 'titus', caste: 'Gold', desc: 'Titus au Ladros, seventeen, huge and brutish, heavy jaw, golden hair, bullying sneer, torn Institute tunic' },
  { id: 'antonia', character: 'antonia', caste: 'Gold', desc: 'Antonia au Severus-Julii, seventeen to twenties, cruelly beautiful, sleek golden hair, contemptuous cold eyes' },
  { id: 'vixus', character: 'vixus', caste: 'Gold', desc: 'Vixus au Sarna, seventeen, thin sly face, golden hair, shifty eyes, Institute tunic' },
  { id: 'fitchner', character: 'fitchner', caste: 'Gold', desc: 'Fitchner au Barca, forties, scruffy and paunchy for a Gold, unkempt golden hair, gum-chewing smirk, rumpled Proctor\'s uniform' },
  { id: 'agrippina', character: 'agrippina', caste: 'Gold', desc: 'Agrippina au Julii, fifties, coldly beautiful matriarch, golden hair in a severe coil, calculating eyes, black Julii silks' },
  { id: 'theodora', character: 'theodora', caste: 'Pink', desc: 'Theodora, fifties, dignified former Pink courtesan, silver-streaked hair worn up, rose irises, shrewd loyal face, plain steward\'s dress' },
  { id: 'pax-augustus', character: 'pax-augustus', caste: 'Gold', desc: 'Pax au Augustus, ten, Darrow and Virginia\'s son, serious clever face, golden hair, his mother\'s watchful eyes' },
  { id: 'electra', character: 'electra', caste: 'Gold', desc: 'Electra au Barca, ten, Sevro and Victra\'s daughter, fierce scowl, golden hair, unnervingly cold stare' },

  // ===== Golds: Bellona, Lune, Society =====
  { id: 'karnus', character: 'karnus', caste: 'Gold', desc: 'Karnus au Bellona, thirties, massive and brutal, heavy brow, golden hair cropped, savage eager grin, Bellona blue-and-silver armour' },
  { id: 'tiberius-bellona', character: 'tiberius-bellona', caste: 'Gold', desc: `Tiberius au Bellona, Imperator, sixties, hard aging warrior, golden hair gone pale, ${SCAR}, grim face, Bellona armour` },
  { id: 'julia-bellona', character: 'julia-bellona', caste: 'Gold', desc: 'Julia au Bellona, fifties, elegant and vengeful matriarch, golden hair coiled, cold grief hardened into hate' },
  { id: 'octavia-lune', character: 'octavia', caste: 'Gold', desc: 'Octavia au Lune, the Sovereign, sixties but ageless, silver-gold hair, a crescent scar on the right cheekbone, terrifying serene authority, white-and-gold imperial robes' },
  { id: 'aja', character: 'aja', caste: 'Gold', desc: 'Aja au Grimmus, thirties, tall and powerfully built, dark skin, shaved head, golden irises, lethal stillness, black Olympic Knight armour' },
  { id: 'moira', character: 'moira', caste: 'Gold', desc: 'Moira au Grimmus, thirties, Aja\'s sister, sharp intelligent face, golden hair cropped, Society uniform' },
  { id: 'ash-lord', character: 'ash-lord', caste: 'Gold', desc: 'Magnus au Grimmus, the Ash Lord, seventies, gaunt and terrible, pale golden hair, deeply lined face, eyes like cooling embers, black ceremonial armour' },
  { id: 'atalantia', character: 'atalantia', caste: 'Gold', desc: 'Atalantia au Grimmus, forties, dark-skinned and magnificently cruel, golden irises, elaborate golden braids, Dictator\'s black-and-gold' },
  { id: 'ajax', character: 'ajax', caste: 'Gold', desc: 'Ajax au Grimmus, twenties, huge and beautiful, dark skin, golden irises, arrogant hungry smile, Storm Knight armour' },
  { id: 'apollonius', character: 'apollonius', caste: 'Gold', desc: 'Apollonius au Valii-Rath, thirties, theatrically gorgeous, long golden hair, wolfish grin, flamboyant dark armour with a rose' },
  { id: 'atlas', character: 'atlas', caste: 'Gold', desc: 'Atlas au Raa, the Fear Knight, fifties, lean and quiet, close-cropped golden hair, calm empty eyes, plain dark field armour' },
  { id: 'kalindora', character: 'kalindora', caste: 'Gold', desc: 'Kalindora au San, forties, the Love Knight, elegant weary face, golden hair, gentle sad eyes, white Olympic Knight armour' },

  // ===== Rim Golds =====
  { id: 'romulus', character: 'romulus', caste: 'Gold', desc: 'Romulus au Raa, Sovereign of the Rim, fifties, austere and scarred, golden hair cropped, missing one hand, plain gray Rim robes' },
  { id: 'dido', character: 'dido', caste: 'Gold', desc: 'Dido au Raa, fifties, fierce and regal, sun-weathered face, golden hair in Rim braids, Venusian warrior\'s bearing' },
  { id: 'seraphina', character: 'seraphina', caste: 'Gold', desc: 'Seraphina au Raa, twenties, hard and beautiful, golden hair shorn close, hunter\'s intensity, spare Rim flight suit' },
  { id: 'diomedes', character: 'diomedes', caste: 'Gold', desc: 'Diomedes au Raa, thirties, the Storm Knight of the Rim, enormous and grave, golden hair long and braided, gentle stoic face, Rim armour' },
  { id: 'marius', character: 'marius', caste: 'Gold', desc: 'Marius au Raa, twenties, proud handsome Rim heir, golden hair, stiff formal bearing' },

  // ===== Obsidians =====
  { id: 'ragnar', character: 'ragnar', caste: 'Obsidian', desc: 'Ragnar Volarus, the Shield of Tinos, over seven feet tall, pale ashen skin, long black hair, black eyes, gentle sorrow in a killer\'s face, tribal scarification' },
  { id: 'sefi', character: 'sefi', caste: 'Obsidian', desc: 'Sefi the Quiet, thirties, towering and silent, pale ashen skin, black eyes, long braids, blue tribal ink, Valkyrie war-queen bearing' },
  { id: 'alia', character: 'alia', caste: 'Obsidian', desc: 'Alia Snowsparrow, sixties, Obsidian matriarch, pale ashen skin, white hair, black eyes, hard cunning face, furs and bone ornaments' },
  { id: 'volga', character: 'volga', caste: 'Obsidian', desc: 'Volga Fjorgan, twenties, very tall and strong, pale ashen skin, black eyes, gentle uncertain expression, blond-white hair tied back, city clothes that don\'t fit' },
  { id: 'volsung-fa', character: 'volsung-fa', caste: 'Obsidian', desc: 'Volsung Fá, ancient and monstrous Obsidian warlord, pale scarred skin, white beard and hair, black eyes, crown of bone, ferocious presence' },
  { id: 'valdir', character: 'valdir', caste: 'Obsidian', desc: 'Valdir, thirties, Obsidian warrior, pale ashen skin, black eyes, long dark braids, hard loyal face' },
  { id: 'wulfgar', character: 'wulfgar', caste: 'Obsidian', desc: 'Wulfgar, forties, Obsidian ArchWarden of the Republic, pale ashen skin, black eyes, gray-streaked braids, steady honourable face, Republic uniform' },

  // ===== Grays =====
  { id: 'holiday', character: 'holiday', caste: 'Gray', desc: 'Holiday ti Nakamura, thirties, compact and hard, ash-gray hair cropped, gray eyes, dry unimpressed expression, Republic Gray fatigues' },
  { id: 'trigg', character: 'trigg', caste: 'Gray', desc: 'Trigg ti Nakamura, twenties, wiry and quick, ash-gray hair, gray eyes, easy soldier\'s grin' },
  { id: 'ephraim', character: 'ephraim', caste: 'Gray', desc: 'Ephraim ti Horn, forties, lean cynical thief, ash-gray hair, gray eyes, stubble, exhausted clever face, sleek dark civilian jacket' },
  { id: 'ugly-dan', character: 'ugly-dan', caste: 'Gray', desc: 'Ugly Dan, forties, Gray mine security, ash-gray hair, gray eyes, pockmarked brutal face' },

  // ===== Other Colors =====
  { id: 'mickey', character: 'mickey', caste: 'Violet', desc: 'Mickey the Carver, forties, thin and strange, violet irises, black hair with violet sheen, delicate twelve-fingered hands, unsettling brilliance' },
  { id: 'evey', character: 'evey', caste: 'Pink', desc: 'Evey, twenties, luminous fragile beauty, rose irises, soft hair, feathered white wings carved into her back visible over one shoulder' },
  { id: 'matteo', character: 'matteo', caste: 'Pink', desc: 'Matteo, thirties, refined and patient Pink tutor, rose irises, immaculate grooming, elegant modest clothing' },
  { id: 'orion', character: 'orion', caste: 'Blue', desc: 'Orion xe Aquarii, thirties, Blue fleet commander, pale blue irises, blue-tinted hair shaved close, data implants at the temples, cold brilliant intensity' },
  { id: 'pytha', character: 'pytha', caste: 'Blue', desc: 'Pytha, forties, quiet Blue pilot, pale blue irises, blue-tinted hair, calm patient face, worn flight jacket' },
  { id: 'quicksilver', character: 'quicksilver', caste: 'Silver', desc: 'Regulus ag Sun, Quicksilver, fifties, the richest man alive, silver hair and irises, plump and shrewd, expensive understated suit' },
  { id: 'podginus', character: 'podginus', caste: 'Copper', desc: 'Timony cu Podginus, forties, fussy Copper mine magistrate, copper hair and irises, soft self-important face' },
  { id: 'duke-of-hands', character: 'duke-of-hands', caste: 'Pink', desc: 'The Duke of Hands, Syndicate lieutenant, forties, cruel elegant face, rose irises, jewelled fingers' },
  { id: 'syndicate-queen', character: 'syndicate-queen', caste: 'Gold', desc: 'The Syndicate Queen, thirties, masked crime lord, half her face hidden by an ornate mask, golden irises, dark sleek clothing' },
  { id: 'lilath', character: 'lilath', caste: 'Gold', desc: 'Lilath au Faran, twenties, the Jackal\'s Bonerider lieutenant, gaunt cruel face, golden hair, dead-eyed loyalty' },
  { id: 'harnassus', character: 'harnassus', caste: 'Orange', desc: 'Harnassus, fifties, Orange Republic engineer-officer, orange irises, gray-orange hair, tough practical face' },
  { id: 'aurae', character: 'aurae', caste: 'Pink', desc: 'Aurae, thirties, serene enigmatic Pink, rose irises, dark hair, ageless calm, simple robes' },
];

// ---------------------------------------------------------------------------
function buildPrompt(p) {
  return `${p.desc}. The subject is ${CASTE[p.caste]}. ${STYLE}`;
}

if (LIST) {
  portraits.forEach((p) => console.log(p.id.padEnd(22), p.character.padEnd(18), p.caste));
  process.exit(0);
}

const selected = ONLY ? portraits.filter((p) => ONLY.has(p.id)) : portraits;
if (ONLY && selected.length !== ONLY.size) {
  const known = new Set(portraits.map((p) => p.id));
  console.error('Unknown ids:', [...ONLY].filter((id) => !known.has(id)).join(', '));
  process.exit(1);
}

if (DRY_RUN) {
  selected.forEach((p) => console.log(`\n### ${p.id}\n${buildPrompt(p)}`));
  printErasSnippet();
  process.exit(0);
}

if (!process.env.OPENAI_API_KEY) {
  console.error('Set OPENAI_API_KEY (or use --dry-run).');
  process.exit(1);
}
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
fs.mkdirSync(OUT_DIR, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const failures = [];
for (const p of selected) {
  const file = path.join(OUT_DIR, `${p.id}.png`);
  process.stdout.write(`Generating ${p.id} ... `);
  try {
    const res = await openai.images.generate({
      model: 'dall-e-3',
      prompt: buildPrompt(p),
      n: 1,
      size: '1024x1024',
      quality: 'hd',
      style: 'natural', // less of the glossy hyper-render look than 'vivid'
      response_format: 'b64_json',
    });
    fs.writeFileSync(file, Buffer.from(res.data[0].b64_json, 'base64'));
    console.log('saved');
  } catch (err) {
    console.log('FAILED');
    failures.push(`${p.id}: ${err.message}`);
  }
  await sleep(1500); // stay under the images rate limit
}

if (failures.length) console.error('\nFailures:\n' + failures.join('\n'));
printErasSnippet();

function printErasSnippet() {
  const byChar = {};
  portraits.filter((p) => p.eras).forEach((p) => {
    (byChar[p.character] ||= []).push(p);
  });
  console.log('\n// ---- paste into src/utils/characterImages.ts (eras) ----');
  for (const [character, list] of Object.entries(byChar)) {
    for (const p of list) {
      console.log(`// ${character}: eras: { ${p.eras.map((b) => `'${b}': img('${p.id}')`).join(', ')} }`);
    }
  }
}
