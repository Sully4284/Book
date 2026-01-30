import type { Book, Character, FamilyGroup } from '../types';

// Golden Son chapters based on table of contents
const chapters = [
  { number: 0, title: 'Prologue' },
  // Part I: Bow (Chapters 1-11)
  { number: 1, title: 'Warlords' },
  { number: 2, title: 'The Breach' },
  { number: 3, title: 'Blood and Piss' },
  { number: 4, title: 'Fallen' },
  { number: 5, title: 'Abandoned' },
  { number: 6, title: 'Icarus' },
  { number: 7, title: 'The Afterbirth' },
  { number: 8, title: 'Scepter & Sword' },
  { number: 9, title: 'The Darkness' },
  { number: 10, title: 'Broken' },
  { number: 11, title: 'Red' },
  // Part II: Break (Chapters 12-24)
  { number: 12, title: 'Blood for Blood' },
  { number: 13, title: 'Mad Dogs' },
  { number: 14, title: 'The Sovereign' },
  { number: 15, title: 'Truth' },
  { number: 16, title: 'The Game' },
  { number: 17, title: 'What the Storm Brings' },
  { number: 18, title: 'Bloodstains' },
  { number: 19, title: 'Stork' },
  { number: 20, title: 'Helldiver' },
  { number: 21, title: 'Stains' },
  { number: 22, title: 'Fire Blossom' },
  { number: 23, title: 'Trust' },
  { number: 24, title: 'Bacon and Eggs' },
  // Part III: Conquer (Chapters 25-39)
  { number: 25, title: 'Praetors' },
  { number: 26, title: 'Puppet Master' },
  { number: 27, title: 'Jelly Beans' },
  { number: 28, title: 'The Stormsons' },
  { number: 29, title: "Old Man's Wrath" },
  { number: 30, title: 'Gathering Storm' },
  { number: 31, title: 'Coup' },
  { number: 32, title: 'Die Young' },
  { number: 33, title: 'A Dance' },
  { number: 34, title: 'Blood Brothers' },
  { number: 35, title: 'Teatime' },
  { number: 36, title: 'Lord of War' },
  { number: 37, title: 'War' },
  { number: 38, title: 'The Iron Rain' },
  { number: 39, title: 'At the Wall' },
  // Part IV: Ruin (Chapters 40-51)
  { number: 40, title: 'Mud' },
  { number: 41, title: 'Achilles' },
  { number: 42, title: 'Death of a Gold' },
  { number: 43, title: 'The Sea' },
  { number: 44, title: 'The Poet' },
  { number: 45, title: 'Gifts' },
  { number: 46, title: 'Brotherhood' },
  { number: 47, title: 'Free' },
  { number: 48, title: 'The Magistrate' },
  { number: 49, title: 'Why We Sing' },
  { number: 50, title: 'The Deep' },
  { number: 51, title: 'Golden Son' },
];

const characters: Character[] = [
  // ========== NEW CHARACTERS IN GOLDEN SON ==========

  // HOUSE BELLONA - NEW MEMBERS
  {
    id: 'karnus',
    name: 'Karnus au Bellona',
    aliases: ['Goliath', 'The Breaker'],
    color: 'Gold',
    house: 'Bellona',
    firstAppearance: 1,
    relationships: [
      { targetId: 'cassius', type: 'sibling', revealedAtChapter: 1 },
      { targetId: 'julian', type: 'sibling', revealedAtChapter: 1 },
      { targetId: 'tiberius-bellona', type: 'parent', revealedAtChapter: 1 },
      { targetId: 'julia-bellona', type: 'parent', revealedAtChapter: 1 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'Eldest son of House Bellona. Towers over other Golds like an Obsidian. Known as "Goliath" for his monstrous size and brutality.',
        status: 'alive',
        additionalDetails: 'Sent to the Academy by his mother Julia to hunt Darrow as revenge for Julian\'s death.',
      },
      {
        chapter: 3,
        description: 'Ambushes Darrow in the Academy garden with seven Bellona relatives. Beats and humiliates him, shaving his hair and urinating on him.',
        status: 'alive',
        additionalDetails: 'His fine list for murder stretches longer than an arm. Killed Claudius au Augustus by breaking his spine over his knee.',
      },
      {
        chapter: 42,
        description: 'Confronts Darrow during the Lion\'s Rain battle. Wounds Darrow severely but is ultimately defeated.',
        status: 'dead',
        additionalDetails: 'Stabbed through the chest and decapitated by Darrow in combat.',
      },
    ],
  },
  {
    id: 'tiberius-bellona',
    name: 'Tiberius au Bellona',
    aliases: ['Imperator Bellona'],
    color: 'Gold',
    house: 'Bellona',
    firstAppearance: 1,
    relationships: [
      { targetId: 'julia-bellona', type: 'spouse', revealedAtChapter: 1 },
      { targetId: 'cassius', type: 'parent', revealedAtChapter: 1 },
      { targetId: 'julian', type: 'parent', revealedAtChapter: 1 },
      { targetId: 'karnus', type: 'parent', revealedAtChapter: 1 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'Head of House Bellona and Imperator of the Sixth Fleet. Father to Cassius, Julian, Karnus, and six other children.',
        status: 'alive',
      },
      {
        chapter: 37,
        description: 'Commands House Bellona\'s forces during the Martian Civil War.',
        status: 'alive',
      },
      {
        chapter: 42,
        description: 'Killed during the Lion\'s Rain battle. His head is later mounted on a pike in Agea.',
        status: 'dead',
      },
    ],
  },
  {
    id: 'julia-bellona',
    name: 'Julia au Bellona',
    aliases: ['The Bellona Matriarch'],
    color: 'Gold',
    house: 'Bellona',
    firstAppearance: 3,
    relationships: [
      { targetId: 'tiberius-bellona', type: 'spouse', revealedAtChapter: 3 },
      { targetId: 'cassius', type: 'parent', revealedAtChapter: 3 },
      { targetId: 'julian', type: 'parent', revealedAtChapter: 3 },
      { targetId: 'karnus', type: 'parent', revealedAtChapter: 3 },
    ],
    progressiveInfo: [
      {
        chapter: 3,
        description: 'Matriarch of House Bellona. Every night she sits at the family table with an empty silver tray, demanding Darrow\'s heart.',
        status: 'alive',
        additionalDetails: 'The driving force behind Bellona\'s vendetta against Darrow for killing Julian.',
      },
      {
        chapter: 33,
        description: 'Breaks duel protocol to save Cassius during his fight with Darrow, triggering the Gala Massacre and the Martian Civil War.',
        status: 'alive',
      },
      {
        chapter: 51,
        description: 'One of only two Bellona survivors after Octavia orders the massacre of House Bellona.',
        status: 'alive',
        additionalDetails: 'Spared along with Cassius as part of the Sovereign\'s deal with the Jackal.',
      },
    ],
  },

  // THE SOVEREIGN'S COURT
  {
    id: 'octavia',
    name: 'Octavia au Lune',
    aliases: ['The Sovereign', 'Grandmother'],
    color: 'Gold',
    house: 'Lune',
    firstAppearance: 14,
    relationships: [
      { targetId: 'lysander', type: 'grandparent', revealedAtChapter: 14 },
      { targetId: 'aja', type: 'ally', revealedAtChapter: 14 },
      { targetId: 'moira', type: 'ally', revealedAtChapter: 14 },
    ],
    progressiveInfo: [
      {
        chapter: 14,
        description: 'The Sovereign - ruler of the entire Society. Over 100 years old but maintains an ageless face through rejuvenation therapy.',
        status: 'alive',
        additionalDetails: 'Overthrew her tyrannical father to claim the throne. Commands the Furies.',
      },
      {
        chapter: 33,
        description: 'Manipulates the conflict between Augustus and Bellona from behind the scenes. Orders the Gala Massacre.',
        status: 'alive',
      },
      {
        chapter: 51,
        description: 'Makes a deal with the Jackal to eliminate both Augustus and Bellona threats. Orders the massacre of House Bellona except Cassius and Julia.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'lysander',
    name: 'Lysander au Lune',
    aliases: ['The Heir'],
    color: 'Gold',
    house: 'Lune',
    firstAppearance: 14,
    relationships: [
      { targetId: 'octavia', type: 'grandparent', revealedAtChapter: 14 },
      { targetId: 'lorn', type: 'grandparent', revealedAtChapter: 14 },
    ],
    progressiveInfo: [
      {
        chapter: 14,
        description: 'Young heir to House Lune and grandson of the Sovereign. About 10 years old. Has extraordinarily bright golden eyes.',
        status: 'alive',
        additionalDetails: 'Being groomed by Octavia. Taught the Mind\'s Eye technique. Observant and calculating beyond his years.',
      },
    ],
  },
  {
    id: 'aja',
    name: 'Aja au Grimmus',
    aliases: ['The Protean Knight', 'The Fury'],
    color: 'Gold',
    house: 'Grimmus',
    firstAppearance: 14,
    relationships: [
      { targetId: 'octavia', type: 'ally', revealedAtChapter: 14 },
      { targetId: 'moira', type: 'sibling', revealedAtChapter: 14 },
      { targetId: 'lorn', type: 'mentor', revealedAtChapter: 20 },
    ],
    progressiveInfo: [
      {
        chapter: 14,
        description: 'The Sovereign\'s chief bodyguard and Dux. Olympic Knight known as the Protean Knight. One of the three Furies.',
        status: 'alive',
        additionalDetails: 'Largest and darkest of the Fury sisters. Extremely muscular - built like a tank. Former pupil of Lorn au Arcos.',
      },
      {
        chapter: 33,
        description: 'Grievously wounds Quinn during the Gala Massacre, devastating Roque and Sevro.',
        status: 'alive',
      },
      {
        chapter: 47,
        description: 'Defeats Darrow in combat during the Triumph betrayal, but Fitchner (Ares) rescues him before she can finish.',
        status: 'alive',
        additionalDetails: 'Considered nearly impossible to defeat in single combat.',
      },
    ],
  },
  {
    id: 'moira',
    name: 'Moira au Grimmus',
    aliases: ['The Politico Fury'],
    color: 'Gold',
    house: 'Grimmus',
    firstAppearance: 14,
    relationships: [
      { targetId: 'octavia', type: 'ally', revealedAtChapter: 14 },
      { targetId: 'aja', type: 'sibling', revealedAtChapter: 14 },
    ],
    progressiveInfo: [
      {
        chapter: 14,
        description: 'The Sovereign\'s Chief Politico and one of the three Furies. Described as a "puffy pastry of a woman" - the smartest of the three sisters.',
        status: 'alive',
        additionalDetails: 'Oversees Society Intelligence Bureau databases. Manages psychological profiles on key individuals.',
      },
    ],
  },

  // HOUSE ARCOS
  {
    id: 'lorn',
    name: 'Lorn au Arcos',
    aliases: ['The Rage Knight', 'Old Man'],
    color: 'Gold',
    house: 'Arcos',
    firstAppearance: 20,
    relationships: [
      { targetId: 'lysander', type: 'grandparent', revealedAtChapter: 20 },
      { targetId: 'darrow', type: 'mentor', revealedAtChapter: 20 },
      { targetId: 'aja', type: 'mentor', revealedAtChapter: 20 },
    ],
    progressiveInfo: [
      {
        chapter: 20,
        description: 'Former Rage Knight (Olympic Knight) and the greatest razormaster in all the worlds. Head of House Arcos. Lives in retirement on Europa.',
        status: 'alive',
        additionalDetails: 'Grizzled older man with grey hair and beard. Thick hands marred with scars. Taught both Aja and Darrow the Willow Way.',
      },
      {
        chapter: 29,
        description: 'Darrow forcefully recruits him back into the conflict. Reluctantly allies with the rebellion.',
        status: 'alive',
      },
      {
        chapter: 32,
        description: 'Executes Tactus au Rath for breaking his oath and attempting to rape a Pink.',
        status: 'alive',
      },
      {
        chapter: 47,
        description: 'Killed at Darrow\'s Triumph by Lilath and the Jackal. Murdered without getting to defend himself - his fingers cut off with a pulseDagger.',
        status: 'dead',
        additionalDetails: 'A tragic end for the legendary warrior who deserved to die with a blade in his hand.',
      },
    ],
  },

  // HOUSE TELEMANUS
  {
    id: 'kavax',
    name: 'Kavax au Telemanus',
    aliases: ['The Giant'],
    color: 'Gold',
    house: 'Telemanus',
    firstAppearance: 25,
    relationships: [
      { targetId: 'daxo', type: 'parent', revealedAtChapter: 25 },
      { targetId: 'pax', type: 'parent', revealedAtChapter: 25 },
      { targetId: 'mustang', type: 'ally', revealedAtChapter: 25 },
    ],
    progressiveInfo: [
      {
        chapter: 25,
        description: 'Patriarch of House Telemanus. Gigantic even for a Gold with a red beard. Wields a blade as big as Darrow.',
        status: 'alive',
        additionalDetails: 'Eccentric and boisterous. Known for his close relationship with Sophocles, the family pet fox.',
      },
      {
        chapter: 37,
        description: 'Brings House Telemanus\'s military might to support Darrow and Nero against the Bellona.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'daxo',
    name: 'Daxo au Telemanus',
    aliases: ['The Heir of Telemanus'],
    color: 'Gold',
    house: 'Telemanus',
    firstAppearance: 25,
    relationships: [
      { targetId: 'kavax', type: 'parent', revealedAtChapter: 25 },
      { targetId: 'pax', type: 'sibling', revealedAtChapter: 25 },
    ],
    progressiveInfo: [
      {
        chapter: 25,
        description: 'Heir and eldest son of Kavax. 7\'4" tall but thinner than his brother Pax. Serves as Praetor for House Augustus.',
        status: 'alive',
        additionalDetails: 'Collects exotic weapons. Well-read in classical literature including Milton. More intellectual than his brother.',
      },
    ],
  },

  // HOUSE JULII
  {
    id: 'victra',
    name: 'Victra au Julii',
    aliases: ['The Julii Lancer'],
    color: 'Gold',
    house: 'Julii',
    firstAppearance: 1,
    relationships: [
      { targetId: 'antonia', type: 'sibling', revealedAtChapter: 1, description: 'Half-sister' },
      { targetId: 'agrippina', type: 'parent', revealedAtChapter: 1 },
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 1 },
      { targetId: 'sevro', type: 'friend', revealedAtChapter: 30 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'Lancer of House Augustus and half-sister to Antonia. Heavy, deeply set eyes and a wide, sensual mouth. Resembles her mother Agrippina.',
        status: 'alive',
        additionalDetails: 'Tall and athletic. Striking rather than conventionally beautiful. Impetuous and cruel, but loyal.',
      },
      {
        chapter: 37,
        description: 'Convinces her mother Agrippina to switch sides during the Lion\'s Rain, becoming critical to victory against the Bellona.',
        status: 'alive',
      },
      {
        chapter: 47,
        description: 'Shot in the back by her half-sister Antonia during the Triumph betrayal.',
        status: 'alive',
        additionalDetails: 'Survives the assassination attempt despite severe injuries.',
      },
    ],
  },
  {
    id: 'agrippina',
    name: 'Agrippina au Julii',
    aliases: ['The Julii Matriarch'],
    color: 'Gold',
    house: 'Julii',
    firstAppearance: 36,
    relationships: [
      { targetId: 'victra', type: 'parent', revealedAtChapter: 36 },
      { targetId: 'antonia', type: 'parent', revealedAtChapter: 36 },
    ],
    progressiveInfo: [
      {
        chapter: 36,
        description: 'Head of House Julii and mother to Victra and Antonia. Known as a schemer who cares about money above all. Skeletal and gaunt appearance.',
        status: 'alive',
        additionalDetails: 'Taught Victra how to blockade a planet with asteroids and gravity haulers.',
      },
      {
        chapter: 37,
        description: 'Convinced by Victra to betray the Bellona during the Lion\'s Rain. Unloads 200+ leechCraft into the Bellona fleet\'s core.',
        status: 'alive',
      },
      {
        chapter: 47,
        description: 'Shot in the head by her own daughter Antonia during the Jackal\'s betrayal at Darrow\'s Triumph.',
        status: 'dead',
      },
    ],
  },

  // HOUSE AUGUSTUS - NEW MEMBERS
  {
    id: 'pliny',
    name: 'Pliny au Velocitor',
    aliases: ['The Politico'],
    color: 'Gold',
    house: 'Augustus',
    firstAppearance: 4,
    relationships: [
      { targetId: 'nero-augustus', type: 'ally', revealedAtChapter: 4 },
      { targetId: 'darrow', type: 'rival', revealedAtChapter: 4 },
    ],
    progressiveInfo: [
      {
        chapter: 4,
        description: 'Chief Politico of House Augustus. Slender with skin as smooth as a Pink. Golden coiled and scented hair. Wears muted lipstick.',
        status: 'alive',
        additionalDetails: 'No Peerless scar - never went to the Institute. Constantly schemes against Darrow to increase his own power.',
      },
      {
        chapter: 31,
        description: 'Betrays Nero and Adrius to the Sovereign Octavia, helping arrange their capture at Ganymede.',
        status: 'alive',
      },
      {
        chapter: 47,
        description: 'After Darrow humiliates him publicly by slapping him twice, his own retinue of Peerless Scarred kill him.',
        status: 'dead',
      },
    ],
  },
  {
    id: 'leto',
    name: 'Leto au Augustus',
    aliases: ['The Adopted Heir'],
    color: 'Gold',
    house: 'Augustus',
    firstAppearance: 4,
    relationships: [
      { targetId: 'nero-augustus', type: 'ally', revealedAtChapter: 4, description: 'Adopted ward' },
      { targetId: 'darrow', type: 'friend', revealedAtChapter: 4 },
    ],
    progressiveInfo: [
      {
        chapter: 4,
        description: 'Bright lancer ten years Darrow\'s senior with braided hair and a half-moon grin. A poet with the razor - compared to a younger Lorn au Arcos.',
        status: 'alive',
        additionalDetails: 'Likely would have inherited Augustus\'s estate instead of Mustang or the Jackal.',
      },
      {
        chapter: 33,
        description: 'Killed by Karnus au Bellona during the Gala Massacre. One of the first casualties of the civil war.',
        status: 'dead',
      },
    ],
  },

  // DARROW'S HOUSEHOLD
  {
    id: 'theodora',
    name: 'Theodora',
    aliases: ['The Rose'],
    color: 'Pink',
    firstAppearance: 1,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 1 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'Darrow\'s personal steward and social advisor. A former Rose courtesan well past prime age. Graceful and composed.',
        status: 'alive',
        additionalDetails: 'Has heard many secrets over the years. Serves as Darrow\'s guide to Gold customs and etiquette.',
      },
      {
        chapter: 2,
        description: 'When Karnus rams Darrow\'s ship, Theodora\'s leg is shattered. Darrow carries her to his escape craft, showing unusual compassion for a Pink.',
        status: 'alive',
      },
    ],
  },

  // ========== RETURNING CHARACTERS FROM RED RISING ==========
  // These characters appeared in book 1 but have updated info for Golden Son

  {
    id: 'darrow',
    name: 'Darrow',
    aliases: ['The Reaper', 'Darrow au Andromedus', 'Praetor Darrow'],
    color: 'Red',
    house: 'Augustus',
    firstAppearance: 0,
    relationships: [
      { targetId: 'mustang', type: 'ally', revealedAtChapter: 0 },
      { targetId: 'sevro', type: 'friend', revealedAtChapter: 0 },
      { targetId: 'roque', type: 'friend', revealedAtChapter: 0 },
      { targetId: 'victra', type: 'ally', revealedAtChapter: 1 },
      { targetId: 'lorn', type: 'mentor', revealedAtChapter: 20 },
      { targetId: 'tactus', type: 'ally', revealedAtChapter: 1 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Now 20 years old. A lancer of House Augustus competing at the Academy. Two years have passed since the Institute.',
        status: 'alive',
        additionalDetails: 'Tall and broad-shouldered. Long hair and Golden eyes. Uniform all sable. Still carries the weight of Eo\'s death.',
      },
      {
        chapter: 2,
        description: 'Almost wins the Academy war game but Karnus rams his flagship, killing 833 crew members. The Proctors prevent his revenge.',
        status: 'alive',
      },
      {
        chapter: 3,
        description: 'Ambushed and beaten by seven Bellona in the Academy garden. Hair shaved off. Humiliated but not broken.',
        status: 'alive',
      },
      {
        chapter: 5,
        description: 'Augustus announces he\'s selling Darrow\'s contract. Without the ArchGovernor\'s protection, Darrow is marked for death.',
        status: 'alive',
      },
      {
        chapter: 20,
        description: 'Seeks out Lorn au Arcos on Europa to learn proper swordsmanship and recruit the legendary warrior.',
        status: 'alive',
      },
      {
        chapter: 33,
        description: 'Duels Cassius at the Gala. The fight triggers the massacre and civil war when Julia Bellona intervenes.',
        status: 'alive',
      },
      {
        chapter: 42,
        description: 'Kills Karnus au Bellona in single combat during the Lion\'s Rain. Decapitates his longtime enemy.',
        status: 'alive',
      },
      {
        chapter: 47,
        description: 'Betrayed by the Jackal at his Triumph. Nearly killed by Aja but saved by Fitchner, who reveals himself as Ares.',
        status: 'alive',
      },
      {
        chapter: 51,
        description: 'Captured and enslaved in the deep mines. Stripped of everything but not his will to fight.',
        status: 'alive',
        additionalDetails: 'The book ends with Darrow as a slave, but his spirit remains unbroken.',
      },
    ],
  },
  {
    id: 'sevro',
    name: 'Sevro au Barca',
    aliases: ['Goblin', 'The Howler'],
    color: 'Gold',
    house: 'Barca',
    firstAppearance: 0,
    relationships: [
      { targetId: 'darrow', type: 'friend', revealedAtChapter: 0 },
      { targetId: 'fitchner', type: 'parent', revealedAtChapter: 0 },
      { targetId: 'victra', type: 'friend', revealedAtChapter: 30 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Lead Howler and Darrow\'s most loyal friend. Has been stationed on Pluto, growing stranger and more lonely.',
        status: 'alive',
        additionalDetails: 'Still sends perverted unicorn holograms and pun videos.',
      },
      {
        chapter: 33,
        description: 'Devastated when Aja grievously wounds Quinn during the Gala Massacre.',
        status: 'alive',
      },
      {
        chapter: 47,
        description: 'Witnesses his father Fitchner reveal himself as Ares before Fitchner is killed.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'roque',
    name: 'Roque au Fabii',
    aliases: ['The Poet'],
    color: 'Gold',
    house: 'Fabii',
    firstAppearance: 1,
    relationships: [
      { targetId: 'darrow', type: 'friend', revealedAtChapter: 1 },
      { targetId: 'quinn', type: 'lover', revealedAtChapter: 1 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'Darrow\'s close friend and strategic advisor. A prodigy at space warfare. Soft face, long hair. Finds poetry in the motion of ships.',
        status: 'alive',
      },
      {
        chapter: 33,
        description: 'Watches helplessly as Aja mortally wounds Quinn, the woman he loves. This tragedy begins to change him.',
        status: 'alive',
        additionalDetails: 'The loss of Quinn plants seeds of bitterness that will grow.',
      },
    ],
  },
  {
    id: 'tactus',
    name: 'Tactus au Rath',
    aliases: ['The Rake'],
    color: 'Gold',
    house: 'Rath',
    firstAppearance: 1,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 1 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'Rangy and careless lancer of House Augustus. Dangerous frame. Addicted to stims and demonDust. Lives fast.',
        status: 'alive',
        additionalDetails: 'Abandoned Darrow in the escape pod when Karnus rammed the ship.',
      },
      {
        chapter: 32,
        description: 'Breaks his oath to Darrow by attempting to rape a Pink. Executed by Lorn au Arcos as punishment.',
        status: 'dead',
        additionalDetails: 'Despite his flaws, his death weighs on Darrow. Tactus was beginning to change.',
      },
    ],
  },
  {
    id: 'quinn',
    name: 'Quinn',
    color: 'Gold',
    firstAppearance: 1,
    relationships: [
      { targetId: 'roque', type: 'lover', revealedAtChapter: 1 },
      { targetId: 'darrow', type: 'friend', revealedAtChapter: 1 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'A Gold from Ganymede. Close to Roque. One of Darrow\'s trusted allies from the Institute.',
        status: 'alive',
      },
      {
        chapter: 33,
        description: 'Mortally wounded by Aja au Grimmus during the Gala Massacre. Her death devastates Roque and Sevro.',
        status: 'dead',
        additionalDetails: 'Aja\'s blade cuts through her with brutal efficiency.',
      },
    ],
  },
  {
    id: 'mustang',
    name: 'Virginia au Augustus',
    aliases: ['Mustang'],
    color: 'Gold',
    house: 'Augustus',
    firstAppearance: 0,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 0 },
      { targetId: 'nero-augustus', type: 'parent', revealedAtChapter: 0 },
      { targetId: 'jackal', type: 'sibling', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Darrow gave her a horse-crested gold ring as a parting gift. She gave him a razor. They haven\'t spoken since he left for the Academy.',
        status: 'alive',
        additionalDetails: 'Now at the Sovereign\'s court on Luna, away from her father.',
      },
      {
        chapter: 15,
        description: 'Reunites with Darrow at the Summit on Luna. Their relationship remains complicated by politics and secrets.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'jackal',
    name: 'Adrius au Augustus',
    aliases: ['The Jackal'],
    color: 'Gold',
    house: 'Augustus',
    firstAppearance: 4,
    relationships: [
      { targetId: 'nero-augustus', type: 'parent', revealedAtChapter: 4 },
      { targetId: 'mustang', type: 'sibling', revealedAtChapter: 4 },
      { targetId: 'octavia', type: 'ally', revealedAtChapter: 47 },
    ],
    progressiveInfo: [
      {
        chapter: 4,
        description: 'Twin brother to Mustang and son of Nero Augustus. Brilliant but sociopathic. Orchestrated Claudius\'s death through Karnus.',
        status: 'alive',
      },
      {
        chapter: 47,
        description: 'Betrays everyone at Darrow\'s Triumph. Reveals his alliance with the Sovereign. Has Lorn killed and attempts to kill Darrow.',
        status: 'alive',
        additionalDetails: 'His deal with Octavia gives him power while eliminating his rivals.',
      },
    ],
  },
  {
    id: 'nero-augustus',
    name: 'Nero au Augustus',
    aliases: ['The ArchGovernor', 'The Lion of Mars'],
    color: 'Gold',
    house: 'Augustus',
    firstAppearance: 0,
    relationships: [
      { targetId: 'mustang', type: 'parent', revealedAtChapter: 0 },
      { targetId: 'jackal', type: 'parent', revealedAtChapter: 0 },
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'ArchGovernor of Mars. Cold, calculating ruler who sees Darrow as both an asset and a liability.',
        status: 'alive',
        additionalDetails: 'Motto: "Hic sunt leones" - Here be lions.',
      },
      {
        chapter: 4,
        description: 'Plans to use suicide bombers among Reds to combat the Sons of Ares - willing to kill thousands for political stability.',
        status: 'alive',
      },
      {
        chapter: 5,
        description: 'Announces he\'s selling Darrow\'s contract, abandoning his former prize to the Bellona vendetta.',
        status: 'alive',
      },
      {
        chapter: 47,
        description: 'Betrayed by his own son the Jackal. Captured and presumably killed in the aftermath.',
        status: 'dead',
        additionalDetails: 'The Lion of Mars falls to his own blood.',
      },
    ],
  },
  {
    id: 'cassius',
    name: 'Cassius au Bellona',
    aliases: ['The Morning Knight'],
    color: 'Gold',
    house: 'Bellona',
    firstAppearance: 0,
    relationships: [
      { targetId: 'darrow', type: 'enemy', revealedAtChapter: 0 },
      { targetId: 'julian', type: 'sibling', revealedAtChapter: 0 },
      { targetId: 'karnus', type: 'sibling', revealedAtChapter: 0 },
      { targetId: 'julia-bellona', type: 'parent', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Heir to House Bellona. Once Darrow\'s friend, now his blood enemy after learning Darrow killed Julian in the Passage.',
        status: 'alive',
      },
      {
        chapter: 33,
        description: 'Duels Darrow at the Gala. The fight is interrupted when his mother Julia breaks protocol to save him.',
        status: 'alive',
      },
      {
        chapter: 51,
        description: 'One of only two Bellona survivors after the Sovereign orders the massacre of his family.',
        status: 'alive',
        additionalDetails: 'Spared as part of the Jackal\'s deal with Octavia.',
      },
    ],
  },
  {
    id: 'fitchner',
    name: 'Fitchner au Barca',
    aliases: ['Proctor Mars'],
    color: 'Gold',
    house: 'Barca',
    firstAppearance: 0,
    relationships: [
      { targetId: 'sevro', type: 'parent', revealedAtChapter: 0 },
      // These alliances are only revealed when Fitchner reveals himself as Ares
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 47 },
      { targetId: 'dancer', type: 'ally', revealedAtChapter: 47 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Former Proctor Mars and father of Sevro. Now working in some capacity for the Society.',
        status: 'alive',
      },
      {
        chapter: 47,
        description: 'Reveals himself as ARES - the leader of the Sons of Ares rebellion. Saves Darrow from Aja but is killed in the escape.',
        status: 'dead',
        additionalDetails: 'The terrorist leader was a Gold all along - Sevro\'s own father. Ares.',
      },
    ],
  },
  {
    id: 'antonia',
    name: 'Antonia au Severus-Julii',
    aliases: ['The Snake'],
    color: 'Gold',
    house: 'Julii',
    firstAppearance: 1,
    relationships: [
      { targetId: 'victra', type: 'sibling', revealedAtChapter: 1, description: 'Half-sister' },
      { targetId: 'agrippina', type: 'parent', revealedAtChapter: 1 },
      { targetId: 'jackal', type: 'ally', revealedAtChapter: 47 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'Half-sister to Victra and daughter of Agrippina. Treacherous and ambitious.',
        status: 'alive',
      },
      {
        chapter: 47,
        description: 'Shoots her own mother Agrippina in the head and her sister Victra in the back during the Jackal\'s betrayal.',
        status: 'alive',
        additionalDetails: 'Allies with the Jackal, proving her treacherous nature from the Institute was no act.',
      },
    ],
  },
  {
    id: 'dancer',
    name: 'Dancer',
    color: 'Red',
    firstAppearance: 11,
    relationships: [
      { targetId: 'darrow', type: 'mentor', revealedAtChapter: 11 },
      { targetId: 'fitchner', type: 'ally', revealedAtChapter: 47 },
    ],
    progressiveInfo: [
      {
        chapter: 11,
        description: 'Darrow finally reconnects with Dancer after years of silence. The Sons of Ares have been watching and waiting.',
        status: 'alive',
        additionalDetails: 'Lieutenant to Ares (Fitchner). The true identity of Ares has been kept from most Sons.',
      },
    ],
  },
];

// Family groupings for Golden Son
export const goldenSonFamilyGroups: FamilyGroup[] = [
  {
    id: 'house-augustus',
    name: 'House Augustus',
    members: ['darrow', 'nero-augustus', 'mustang', 'jackal', 'pliny', 'leto'],
  },
  {
    id: 'house-bellona',
    name: 'House Bellona',
    members: ['cassius', 'karnus', 'tiberius-bellona', 'julia-bellona'],
  },
  {
    id: 'sovereign-court',
    name: "The Sovereign's Court",
    members: ['octavia', 'lysander', 'aja', 'moira'],
  },
  {
    id: 'house-telemanus',
    name: 'House Telemanus',
    members: ['kavax', 'daxo'],
  },
  {
    id: 'house-julii',
    name: 'House Julii',
    members: ['victra', 'agrippina', 'antonia'],
  },
  {
    id: 'house-arcos',
    name: 'House Arcos',
    members: ['lorn'],
  },
  {
    id: 'sons-of-ares',
    name: 'Sons of Ares',
    members: ['dancer', 'fitchner'],
  },
  {
    id: 'howlers',
    name: 'The Howlers',
    members: ['sevro', 'tactus', 'roque', 'quinn'],
  },
  {
    id: 'darrow-household',
    name: "Darrow's Household",
    members: ['theodora'],
  },
];

export const goldenSonBook: Book = {
  id: 'golden-son',
  title: 'Golden Son',
  author: 'Pierce Brown',
  chapters,
  characters,
};
