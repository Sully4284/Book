import type { Book, Character, FamilyGroup } from '../types';

// Iron Gold chapters - Note: Uses multi-POV format
// Book structure: Prologue "The Fury" + 65 chapters across 3 parts
const chapters = [
  { number: 0, title: 'Prologue: The Fury' },
  // Part I: Wind (Chapters 1-21)
  { number: 1, title: 'Darrow' },
  { number: 2, title: 'Darrow' },
  { number: 3, title: 'Darrow' },
  { number: 4, title: 'Lyria' },
  { number: 5, title: 'Lyria' },
  { number: 6, title: 'Ephraim' },
  { number: 7, title: 'Ephraim' },
  { number: 8, title: 'Lysander' },
  { number: 9, title: 'Lysander' },
  { number: 10, title: 'Darrow' },
  { number: 11, title: 'Darrow' },
  { number: 12, title: 'Lyria' },
  { number: 13, title: 'Lyria' },
  { number: 14, title: 'Ephraim' },
  { number: 15, title: 'Lysander' },
  { number: 16, title: 'Darrow' },
  { number: 17, title: 'Lyria' },
  { number: 18, title: 'Ephraim' },
  { number: 19, title: 'Ephraim' },
  { number: 20, title: 'Lysander' },
  { number: 21, title: 'Darrow' },
  // Part II: Shadow (Chapters 22-39)
  { number: 22, title: 'Lysander' },
  { number: 23, title: 'Lyria' },
  { number: 24, title: 'Ephraim' },
  { number: 25, title: 'Lysander' },
  { number: 26, title: 'Lysander' },
  { number: 27, title: 'Darrow' },
  { number: 28, title: 'Darrow' },
  { number: 29, title: 'Lyria' },
  { number: 30, title: 'Darrow' },
  { number: 31, title: 'Ephraim' },
  { number: 32, title: 'Lysander' },
  { number: 33, title: 'Lysander' },
  { number: 34, title: 'Darrow' },
  { number: 35, title: 'Lyria' },
  { number: 36, title: 'Lysander' },
  { number: 37, title: 'Lysander' },
  { number: 38, title: 'Lysander' },
  { number: 39, title: 'Ephraim' },
  // Part III: Dust (Chapters 40-65)
  { number: 40, title: 'Lysander' },
  { number: 41, title: 'Lysander' },
  { number: 42, title: 'Ephraim' },
  { number: 43, title: 'Lyria' },
  { number: 44, title: 'Lyria' },
  { number: 45, title: 'Darrow' },
  { number: 46, title: 'Darrow' },
  { number: 47, title: 'Lysander' },
  { number: 48, title: 'Lysander' },
  { number: 49, title: 'Lyria' },
  { number: 50, title: 'Lyria' },
  { number: 51, title: 'Ephraim' },
  { number: 52, title: 'Darrow' },
  { number: 53, title: 'Darrow' },
  { number: 54, title: 'Darrow' },
  { number: 55, title: 'Lysander' },
  { number: 56, title: 'Lysander' },
  { number: 57, title: 'Ephraim' },
  { number: 58, title: 'Ephraim' },
  { number: 59, title: 'Lyria' },
  { number: 60, title: 'Darrow' },
  { number: 61, title: 'Lysander' },
  { number: 62, title: 'Lysander' },
  { number: 63, title: 'Lysander' },
  { number: 64, title: 'Ephraim' },
  { number: 65, title: 'Darrow' },
];

const characters: Character[] = [
  // ========== MAIN POV CHARACTERS ==========
  {
    id: 'darrow',
    name: 'Darrow of Lykos',
    aliases: ['The Reaper', 'ArchImperator'],
    color: 'Gold',
    house: 'Augustus',
    firstAppearance: 0,
    relationships: [
      { targetId: 'mustang', type: 'spouse', revealedAtChapter: 0 },
      { targetId: 'sevro', type: 'friend', revealedAtChapter: 0 },
      { targetId: 'pax-augustus', type: 'parent', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'ArchImperator of the Solar Republic. Ten years after the Rising, leads the Free Legions against Mercury.',
        status: 'alive',
        additionalDetails: 'Husband to Virginia, father to Pax. The war against the Society Remnant continues.',
      },
      {
        chapter: 3,
        description: 'Defies the Senate by continuing the Mercury campaign. The Republic grows tired of war.',
        status: 'alive',
      },
      {
        chapter: 16,
        description: 'Returns to Luna to face the Senate. Discovers the political situation has deteriorated.',
        status: 'alive',
      },
      {
        chapter: 21,
        description: 'Releases Apollonius au Valii-Rath from Deepgrave prison to use against the Ash Lord.',
        status: 'alive',
        additionalDetails: 'A desperate gambit that may cost him everything.',
      },
      {
        chapter: 45,
        description: 'Returns to Mercury with a small force. Discovers the Ash Lord is already dying from poison.',
        status: 'alive',
      },
      {
        chapter: 54,
        description: 'The peace talks were a trap. Atalantia has been commanding Society forces all along.',
        status: 'alive',
        additionalDetails: 'The Republic fleet is ambushed. Massive casualties.',
      },
      {
        chapter: 65,
        description: 'Trapped on Mercury as Atalantia springs her trap. The war has turned against the Republic.',
        status: 'alive',
        additionalDetails: 'His son Pax has been kidnapped by the Syndicate.',
      },
    ],
  },
  {
    id: 'lysander',
    name: 'Lysander au Lune',
    aliases: ['The Heir of Silenius', 'Regulus au Janus'],
    color: 'Gold',
    house: 'Lune',
    firstAppearance: 8,
    relationships: [
      { targetId: 'cassius', type: 'ally', revealedAtChapter: 8 },
      { targetId: 'octavia', type: 'grandparent', revealedAtChapter: 8 },
      { targetId: 'seraphina', type: 'ally', revealedAtChapter: 22 },
    ],
    progressiveInfo: [
      {
        chapter: 8,
        description: 'Living in exile for ten years with Cassius aboard the Archimedes. Uses the alias Regulus au Janus.',
        status: 'alive',
        additionalDetails: 'Rescues Seraphina au Raa from Ascomanni raiders in the Gulf.',
      },
      {
        chapter: 9,
        description: 'Taken to Io to meet Romulus au Raa, the Lord of the Dust and Sovereign of the Rim.',
        status: 'alive',
      },
      {
        chapter: 22,
        description: 'Seraphina reveals she has evidence that Darrow destroyed the Ganymede Docks.',
        status: 'alive',
        additionalDetails: 'The destruction killed thousands and debris fell on Ganymede cities.',
      },
      {
        chapter: 32,
        description: 'Romulus is put on trial for treason. Confesses he knew about the docks to prevent war.',
        status: 'alive',
      },
      {
        chapter: 37,
        description: 'Cassius is challenged to a duel by Seraphina. He refuses to fight seriously.',
        status: 'alive',
      },
      {
        chapter: 38,
        description: 'Cassius is killed by Seraphina when he refuses to defend himself. Sacrifices himself for Lysander.',
        status: 'alive',
        additionalDetails: 'Lysander mourns his mentor and adoptive father figure.',
      },
      {
        chapter: 41,
        description: 'Dido agrees to send Lysander to find Atlas au Raa and forge an alliance with the Rim.',
        status: 'alive',
      },
      {
        chapter: 63,
        description: 'Returns to the Core. Meets Atalantia and begins his path back to Gold politics.',
        status: 'alive',
        additionalDetails: 'The Heir of Silenius emerges from exile.',
      },
    ],
    progressiveNames: [
      { chapter: 8, name: 'Regulus au Janus' },
      { chapter: 38, name: 'Lysander au Lune' },
    ],
  },
  {
    id: 'lyria',
    name: 'Lyria of Lagalos',
    aliases: ['Gamma Red'],
    color: 'Red',
    firstAppearance: 4,
    relationships: [
      { targetId: 'liam', type: 'ally', revealedAtChapter: 4 },
      { targetId: 'kavax', type: 'ally', revealedAtChapter: 12 },
    ],
    progressiveInfo: [
      {
        chapter: 4,
        description: 'A Gamma Red living in Camp 121 on Mars. Her family was killed by Red Hand terrorists.',
        status: 'alive',
        additionalDetails: 'Only she and her nephew Liam survived the massacre. Liam is blind.',
      },
      {
        chapter: 12,
        description: 'Offered a job by the Telemanus family in Hyperion. Becomes caretaker to their fox Sophocles.',
        status: 'alive',
      },
      {
        chapter: 23,
        description: 'Witnesses the kidnapping of Pax Augustus and Electra Barca from the Telemanus estate.',
        status: 'alive',
        additionalDetails: 'Knocked unconscious during the attack.',
      },
      {
        chapter: 35,
        description: 'Interrogated by the Sovereign\'s agents. Proves her innocence using an Oracle creature.',
        status: 'alive',
      },
      {
        chapter: 50,
        description: 'Discovers she was implanted with a parasite that allowed the Syndicate to spy through her.',
        status: 'alive',
        additionalDetails: 'She was an unwitting tool of the kidnappers.',
      },
      {
        chapter: 59,
        description: 'The parasite reveals visions of the Syndicate Queen. Lyria begins to understand the conspiracy.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'ephraim',
    name: 'Ephraim ti Horn',
    aliases: [],
    color: 'Gray',
    firstAppearance: 6,
    relationships: [
      { targetId: 'trigg', type: 'spouse', revealedAtChapter: 7 },
      { targetId: 'volga', type: 'friend', revealedAtChapter: 19 },
      { targetId: 'holiday', type: 'ally', revealedAtChapter: 44 },
    ],
    progressiveInfo: [
      {
        chapter: 6,
        description: 'A Gray freelance thief working in Hyperion. Former Son of Ares, now a drug-addicted criminal.',
        status: 'alive',
        additionalDetails: 'His husband Trigg was killed during the Rising. He never recovered.',
      },
      {
        chapter: 14,
        description: 'Hired by the Duke of Hands for a job. The Syndicate wants him to kidnap children.',
        status: 'alive',
      },
      {
        chapter: 24,
        description: 'Leads the kidnapping of Pax Augustus and Electra Barca from the Telemanus estate.',
        status: 'alive',
        additionalDetails: 'Does not know who hired him or why.',
      },
      {
        chapter: 39,
        description: 'Delivers the children to the Syndicate. The Duke has his team member Cyra killed.',
        status: 'alive',
        additionalDetails: 'Cyra was a spy for the Syndicate. Gorgo throws her off the highrise.',
      },
      {
        chapter: 51,
        description: 'Volga confronts him about selling children. She leaves him in disgust.',
        status: 'alive',
      },
      {
        chapter: 64,
        description: 'Realizes the full horror of what he has done. The children will be used to break the Republic.',
        status: 'alive',
        additionalDetails: 'Holiday is his sister-in-law (Trigg\'s sister). Agrees to help rescue the children.',
      },
    ],
  },

  // ========== REPUBLIC LEADERSHIP ==========
  {
    id: 'mustang',
    name: 'Virginia au Augustus',
    aliases: ['Mustang', 'The Sovereign'],
    color: 'Gold',
    house: 'Augustus',
    firstAppearance: 0,
    relationships: [
      { targetId: 'darrow', type: 'spouse', revealedAtChapter: 0 },
      { targetId: 'pax-augustus', type: 'parent', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Sovereign of the Solar Republic. Struggling to hold the Republic together as the war drags on.',
        status: 'alive',
      },
      {
        chapter: 16,
        description: 'Faces opposition from the Senate. The Vox Populi faction demands Darrow be recalled.',
        status: 'alive',
      },
      {
        chapter: 23,
        description: 'Her son Pax is kidnapped from the Telemanus estate by Syndicate operatives.',
        status: 'alive',
        additionalDetails: 'A mother\'s worst nightmare realized.',
      },
    ],
  },
  {
    id: 'sevro',
    name: 'Sevro au Barca',
    aliases: ['The Goblin', 'Imperator'],
    color: 'Gold',
    house: 'Barca',
    firstAppearance: 0,
    relationships: [
      { targetId: 'darrow', type: 'friend', revealedAtChapter: 0 },
      { targetId: 'victra', type: 'spouse', revealedAtChapter: 0 },
      { targetId: 'electra', type: 'parent', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Imperator of the Republic and leader of the Howlers. Still Darrow\'s most trusted ally.',
        status: 'alive',
      },
      {
        chapter: 23,
        description: 'His daughter Electra is kidnapped along with Pax. Sevro is devastated.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'victra',
    name: 'Victra au Barca',
    aliases: ['The Julii Fury'],
    color: 'Gold',
    house: 'Barca',
    firstAppearance: 0,
    relationships: [
      { targetId: 'sevro', type: 'spouse', revealedAtChapter: 0 },
      { targetId: 'electra', type: 'parent', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Wife of Sevro, mother to Electra. A fierce warrior and powerful political figure.',
        status: 'alive',
      },
      {
        chapter: 23,
        description: 'Shot during the kidnapping of the children. Fights to the last despite the sedative gas.',
        status: 'alive',
        additionalDetails: 'Survives but is severely wounded.',
      },
    ],
  },
  {
    id: 'pax-augustus',
    name: 'Pax Augustus',
    aliases: ['The Heir'],
    color: 'Gold',
    house: 'Augustus',
    firstAppearance: 0,
    relationships: [
      { targetId: 'darrow', type: 'parent', revealedAtChapter: 0 },
      { targetId: 'mustang', type: 'parent', revealedAtChapter: 0 },
      { targetId: 'electra', type: 'friend', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Son of Darrow and Virginia. Named after Pax au Telemanus. A young Gold raised in the Republic.',
        status: 'alive',
      },
      {
        chapter: 23,
        description: 'Kidnapped from the Telemanus estate along with Electra by Syndicate operatives.',
        status: 'alive',
        additionalDetails: 'Taken as leverage against his parents.',
      },
    ],
  },
  {
    id: 'electra',
    name: 'Electra au Barca',
    aliases: [],
    color: 'Gold',
    house: 'Barca',
    firstAppearance: 0,
    relationships: [
      { targetId: 'sevro', type: 'parent', revealedAtChapter: 0 },
      { targetId: 'victra', type: 'parent', revealedAtChapter: 0 },
      { targetId: 'pax-augustus', type: 'friend', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Daughter of Sevro and Victra. A fierce young Gold who takes after her parents.',
        status: 'alive',
      },
      {
        chapter: 23,
        description: 'Kidnapped alongside Pax by the Syndicate.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'dancer',
    name: 'Dancer',
    aliases: ['Senator O\'Faran'],
    color: 'Red',
    firstAppearance: 16,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 16 },
    ],
    progressiveInfo: [
      {
        chapter: 16,
        description: 'Now a Senator in the Republic. Tribune of the Red bloc. Former Sons of Ares leader.',
        status: 'alive',
        additionalDetails: 'Advocates for ending the war and focusing on rebuilding.',
      },
    ],
  },
  {
    id: 'kavax',
    name: 'Kavax au Telemanus',
    aliases: ['The Giant'],
    color: 'Gold',
    house: 'Telemanus',
    firstAppearance: 12,
    relationships: [
      { targetId: 'niobe', type: 'spouse', revealedAtChapter: 0 },
      { targetId: 'daxo', type: 'parent', revealedAtChapter: 12 },
      { targetId: 'thraxa', type: 'parent', revealedAtChapter: 0 },
      { targetId: 'mustang', type: 'ally', revealedAtChapter: 12 },
    ],
    progressiveInfo: [
      {
        chapter: 12,
        description: 'Patriarch of House Telemanus. His estate is where the children are kidnapped from.',
        status: 'alive',
        additionalDetails: 'Known for cutting off Atalantia au Grimmus\'s leg in battle.',
      },
      {
        chapter: 23,
        description: 'Shot during the kidnapping. His family guards are overwhelmed by the attack.',
        status: 'alive',
        additionalDetails: 'Lyria believes he was killed, but he survives.',
      },
    ],
  },
  {
    id: 'daxo',
    name: 'Daxo au Telemanus',
    aliases: ['Senator Daxo'],
    color: 'Gold',
    house: 'Telemanus',
    firstAppearance: 16,
    relationships: [
      { targetId: 'kavax', type: 'parent', revealedAtChapter: 16 },
      { targetId: 'mustang', type: 'ally', revealedAtChapter: 16 },
    ],
    progressiveInfo: [
      {
        chapter: 16,
        description: 'Senator in the Republic. Still 7\'4" tall. A voice of moderation in political debates.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'holiday',
    name: 'Holiday ti Nakamura',
    aliases: ['The Gray'],
    color: 'Gray',
    firstAppearance: 44,
    relationships: [
      { targetId: 'trigg', type: 'sibling', revealedAtChapter: 44 },
      { targetId: 'ephraim', type: 'ally', revealedAtChapter: 44 },
      { targetId: 'mustang', type: 'ally', revealedAtChapter: 44 },
    ],
    progressiveInfo: [
      {
        chapter: 44,
        description: 'Dux of the Sovereign\'s Lionguard. Her brother Trigg was married to Ephraim.',
        status: 'alive',
        additionalDetails: 'Discovers her brother-in-law is the man who kidnapped the children.',
      },
    ],
  },
  {
    id: 'theodora',
    name: 'Theodora',
    aliases: ['The Spymaster'],
    color: 'Pink',
    firstAppearance: 35,
    relationships: [
      { targetId: 'mustang', type: 'ally', revealedAtChapter: 35 },
    ],
    progressiveInfo: [
      {
        chapter: 35,
        description: 'Serves as the Sovereign\'s spymaster. Helped Darrow get into Deepgrave to release Apollonius.',
        status: 'alive',
        additionalDetails: 'Preserved Oracle creatures against orders to protect the Sovereign\'s family.',
      },
    ],
  },
  {
    id: 'wulfgar',
    name: 'Wulfgar',
    aliases: ['The Whitetooth', 'ArchWarden'],
    color: 'Obsidian',
    firstAppearance: 3,
    relationships: [
      { targetId: 'mustang', type: 'ally', revealedAtChapter: 3 },
    ],
    progressiveInfo: [
      {
        chapter: 3,
        description: 'ArchWarden of the Republic. A respected Obsidian warrior who carries the legacy of Ragnar.',
        status: 'alive',
      },
      {
        chapter: 11,
        description: 'Comes to arrest Darrow on Senate orders. Killed in the fight when a stun round pushes him into Darrow\'s blade.',
        status: 'dead',
        additionalDetails: 'His death shatters the Republic - he was a hero to the Obsidians. A symbol of their bridge to the Republic.',
      },
    ],
  },

  // ========== THE RIM ==========
  {
    id: 'romulus',
    name: 'Romulus au Raa',
    aliases: ['The Moon Lord', 'Lord of the Dust'],
    color: 'Gold',
    house: 'Raa',
    firstAppearance: 9,
    relationships: [
      { targetId: 'dido', type: 'spouse', revealedAtChapter: 9 },
      { targetId: 'seraphina', type: 'parent', revealedAtChapter: 9 },
      { targetId: 'diomedes', type: 'parent', revealedAtChapter: 9 },
      { targetId: 'marius', type: 'parent', revealedAtChapter: 9 },
      { targetId: 'atlas', type: 'sibling', revealedAtChapter: 9 },
    ],
    progressiveInfo: [
      {
        chapter: 9,
        description: 'Sovereign of the Rim Dominion. Lost his right arm, son Aeneas, and one eye at the Battle of Ilium.',
        status: 'alive',
        additionalDetails: 'Commands profound respect. Brother to Atlas au Raa (the Fear Knight).',
      },
      {
        chapter: 33,
        description: 'Confesses at trial that he knew Darrow destroyed the docks and conspired to hide it.',
        status: 'alive',
        additionalDetails: 'Accepts responsibility knowing it means death.',
      },
      {
        chapter: 40,
        description: 'Executed by exposure on Io\'s frozen surface. Walks naked toward the Dragon Tomb.',
        status: 'dead',
        additionalDetails: 'Dies seeking to reach Akari au Raa\'s tomb. Only four Raa have ever reached it.',
      },
    ],
  },
  {
    id: 'dido',
    name: 'Dido au Raa',
    aliases: ['Dido au Saud'],
    color: 'Gold',
    house: 'Raa',
    firstAppearance: 9,
    relationships: [
      { targetId: 'romulus', type: 'spouse', revealedAtChapter: 9 },
      { targetId: 'seraphina', type: 'parent', revealedAtChapter: 9 },
      { targetId: 'diomedes', type: 'parent', revealedAtChapter: 9 },
      { targetId: 'marius', type: 'parent', revealedAtChapter: 9 },
    ],
    progressiveInfo: [
      {
        chapter: 9,
        description: 'Wife of Romulus. Born Dido au Saud, originally from Venus. Pushes for war against the Republic.',
        status: 'alive',
        additionalDetails: 'Venusian by birth. Mother to Seraphina, Diomedes, and Marius.',
      },
      {
        chapter: 33,
        description: 'Horrified when Romulus confesses - she only sought to remove him from power, not have him executed.',
        status: 'alive',
      },
      {
        chapter: 41,
        description: 'Accepts Lysander\'s offer to send him to find Atlas au Raa and forge an alliance.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'seraphina',
    name: 'Seraphina au Raa',
    aliases: ['Little Hawk'],
    color: 'Gold',
    house: 'Raa',
    firstAppearance: 8,
    relationships: [
      { targetId: 'romulus', type: 'parent', revealedAtChapter: 8 },
      { targetId: 'dido', type: 'parent', revealedAtChapter: 8 },
      { targetId: 'diomedes', type: 'sibling', revealedAtChapter: 8 },
      { targetId: 'marius', type: 'sibling', revealedAtChapter: 9 },
      { targetId: 'lysander', type: 'ally', revealedAtChapter: 8 },
    ],
    progressiveInfo: [
      {
        chapter: 8,
        description: 'Daughter of Romulus and Dido. Found near death after Ascomanni attack. Was gathering evidence about the docks.',
        status: 'alive',
      },
      {
        chapter: 26,
        description: 'Shares holographic evidence proving Darrow destroyed the Ganymede Docks.',
        status: 'alive',
      },
      {
        chapter: 37,
        description: 'Ordered by Dido to duel Cassius after he defeats other Raa relatives.',
        status: 'alive',
        additionalDetails: 'A Shadowfall shade, she is smoother than even Darrow or Aja.',
      },
    ],
  },
  {
    id: 'diomedes',
    name: 'Diomedes au Raa',
    aliases: ['The Storm Knight'],
    color: 'Gold',
    house: 'Raa',
    firstAppearance: 9,
    relationships: [
      { targetId: 'romulus', type: 'parent', revealedAtChapter: 9 },
      { targetId: 'dido', type: 'parent', revealedAtChapter: 9 },
      { targetId: 'seraphina', type: 'sibling', revealedAtChapter: 9 },
      { targetId: 'marius', type: 'sibling', revealedAtChapter: 9 },
    ],
    progressiveInfo: [
      {
        chapter: 9,
        description: 'Olympic Knight and blademaster. Studied under Lorn au Arcos. Known as a stormson of Arcos.',
        status: 'alive',
        additionalDetails: 'Son of Romulus and Dido. Brother to Seraphina and Marius.',
      },
      {
        chapter: 33,
        description: 'Devastated by his father\'s confession. Watches helplessly as Romulus is sentenced to death.',
        status: 'alive',
      },
      {
        chapter: 36,
        description: 'Tries to stop Dido\'s bloodfeud duels against Cassius, defending his cousin Bellerephon.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'marius',
    name: 'Marius au Raa',
    aliases: ['The Quaestor'],
    color: 'Gold',
    house: 'Raa',
    firstAppearance: 9,
    relationships: [
      { targetId: 'romulus', type: 'parent', revealedAtChapter: 9 },
      { targetId: 'dido', type: 'parent', revealedAtChapter: 9 },
      { targetId: 'seraphina', type: 'sibling', revealedAtChapter: 9 },
      { targetId: 'diomedes', type: 'sibling', revealedAtChapter: 9 },
    ],
    progressiveInfo: [
      {
        chapter: 9,
        description: 'Quaestor and son of Romulus and Dido. Studied at the Politico Academy on Luna as a hostage.',
        status: 'alive',
        additionalDetails: 'Described as having an anemic quality and small brown splotches on his neck. Known as misshapen.',
      },
    ],
  },
  {
    id: 'cassius',
    name: 'Cassius au Bellona',
    aliases: ['The Morning Knight', 'Regulus au Janus'],
    color: 'Gold',
    house: 'Bellona',
    firstAppearance: 8,
    relationships: [
      { targetId: 'lysander', type: 'ally', revealedAtChapter: 8 },
    ],
    progressiveInfo: [
      {
        chapter: 8,
        description: 'Living in exile for a decade with Lysander on the Archimedes. Uses the alias Regulus au Janus.',
        status: 'alive',
        additionalDetails: 'Chose exile over continuing the cycle of violence. Guardian to Lysander.',
      },
      {
        chapter: 36,
        description: 'Challenged to bloodfeud duels by Dido\'s relatives. Defeats Bellerephon (son of Atlas au Raa) and multiple other Raa cousins.',
        status: 'alive',
        additionalDetails: 'Wins against Bellerephon, Fabera, and Bellagra despite being wounded.',
      },
      {
        chapter: 37,
        description: 'Seraphina is ordered to duel him. Exhausted from previous fights, Cassius cannot defeat her.',
        status: 'alive',
      },
      {
        chapter: 38,
        description: 'Lysander reveals his true identity to stop the duel before Seraphina can kill Cassius. Cassius dies from his wounds.',
        status: 'dead',
        additionalDetails: 'His death motivates Lysander to emerge from hiding and reclaim his heritage.',
      },
    ],
  },

  // ========== SOCIETY REMNANT ==========
  {
    id: 'ash-lord',
    name: 'Magnus au Grimmus',
    aliases: ['The Ash Lord'],
    color: 'Gold',
    house: 'Grimmus',
    firstAppearance: 0,
    relationships: [
      { targetId: 'atalantia', type: 'parent', revealedAtChapter: 0 },
      { targetId: 'lysander', type: 'ally', revealedAtChapter: 8 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Former ArchImperator to Octavia. Lysander\'s godfather. Commands Society Remnant forces on Mercury.',
        status: 'alive',
      },
      {
        chapter: 45,
        description: 'Discovered to be a dying husk. Reveals that Atalantia has been commanding Society forces. Taunts Darrow about his kidnapped son.',
        status: 'alive',
        additionalDetails: 'Barely a third of the man remains - emaciated, skeletal.',
      },
      {
        chapter: 46,
        description: 'Takes poison to deny Darrow information about Pax. Burned alive by Apollonius while the poison takes effect.',
        status: 'dead',
        additionalDetails: 'Darrow, Sevro, and Apollonius watch him burn. The war continues.',
      },
    ],
  },
  {
    id: 'atalantia',
    name: 'Atalantia au Grimmus',
    aliases: ['The Last Fury'],
    color: 'Gold',
    house: 'Grimmus',
    firstAppearance: 34,
    relationships: [
      { targetId: 'ash-lord', type: 'parent', revealedAtChapter: 34 },
    ],
    progressiveInfo: [
      {
        chapter: 34,
        description: 'Revealed to be the true commander of Society forces. Has been leading from the shadows.',
        status: 'alive',
        additionalDetails: 'The last surviving Fury after Aja\'s death.',
      },
      {
        chapter: 54,
        description: 'Springs her trap on the Republic fleet. The peace talks were her deception.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'apollonius',
    name: 'Apollonius au Valii-Rath',
    aliases: ['The Minotaur'],
    color: 'Gold',
    house: 'Valii-Rath',
    firstAppearance: 21,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 21 },
      { targetId: 'tharsus', type: 'sibling', revealedAtChapter: 21 },
    ],
    progressiveInfo: [
      {
        chapter: 21,
        description: 'Released from Deepgrave prison by Darrow. Spent six years in solitary, remaking himself.',
        status: 'alive',
        additionalDetails: 'Eloquent, narcissistic, extremely dangerous. Has an explosive in his brain as insurance.',
      },
      {
        chapter: 46,
        description: 'Burns the Ash Lord alive using antibacterial spray and a candle, taking satisfaction in his revenge.',
        status: 'alive',
        additionalDetails: 'Brother Tharsus now controls their house and provides intelligence to Darrow.',
      },
    ],
  },
  {
    id: 'atlas',
    name: 'Atlas au Raa',
    aliases: ['The Fear Knight', 'The Abomination'],
    color: 'Gold',
    house: 'Raa',
    firstAppearance: 9,
    relationships: [
      { targetId: 'romulus', type: 'sibling', revealedAtChapter: 9 },
    ],
    progressiveInfo: [
      {
        chapter: 9,
        description: 'Romulus\'s exiled brother. Known as the Fear Knight. Father of Bellerephon.',
        status: 'alive',
        additionalDetails: 'Left the Rim under mysterious circumstances. Now in the Core with the Society.',
      },
    ],
  },

  // ========== THE SYNDICATE ==========
  {
    id: 'duke-of-hands',
    name: 'The Duke of Hands',
    aliases: [],
    color: 'Pink',
    firstAppearance: 14,
    relationships: [
      { targetId: 'ephraim', type: 'ally', revealedAtChapter: 14 },
    ],
    progressiveInfo: [
      {
        chapter: 14,
        description: 'A Pink crimelord in the Syndicate. Carries a white cane topped with an octopus head.',
        status: 'alive',
        additionalDetails: 'Hires Ephraim for the kidnapping job.',
      },
      {
        chapter: 42,
        description: 'Takes delivery of the kidnapped children. Has Ephraim\'s accomplices murdered.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'syndicate-queen',
    name: 'The Queen',
    aliases: ['The Syndicate Queen'],
    color: 'Pink',
    firstAppearance: 39,
    relationships: [
      { targetId: 'duke-of-hands', type: 'ally', revealedAtChapter: 39 },
    ],
    progressiveInfo: [
      {
        chapter: 39,
        description: 'The mysterious leader of the Syndicate. Rose to power after the Society fell.',
        status: 'alive',
        additionalDetails: 'Her identity remains unknown. Commands absolute fear.',
      },
    ],
  },
  {
    id: 'volga',
    name: 'Volga Fjorgan',
    aliases: [],
    color: 'Obsidian',
    firstAppearance: 19,
    relationships: [
      { targetId: 'ephraim', type: 'friend', revealedAtChapter: 19 },
    ],
    progressiveInfo: [
      {
        chapter: 19,
        description: 'A young Obsidian woman who works with Ephraim. Huge and pale with white hair.',
        status: 'alive',
        additionalDetails: 'Born in a Society breeding program but deemed defective.',
      },
      {
        chapter: 24,
        description: 'Participates in the kidnapping despite her moral qualms.',
        status: 'alive',
      },
      {
        chapter: 51,
        description: 'Confronts Ephraim about his callousness. Leaves him in disgust.',
        status: 'alive',
        additionalDetails: '"I did it for you... You\'re my family." She calls him a monster.',
      },
    ],
  },

  // ========== OTHER CHARACTERS ==========
  {
    id: 'liam',
    name: 'Liam',
    aliases: [],
    color: 'Red',
    firstAppearance: 4,
    relationships: [
      { targetId: 'lyria', type: 'ally', revealedAtChapter: 4 },
    ],
    progressiveInfo: [
      {
        chapter: 4,
        description: 'Lyria\'s young nephew, the only other survivor of their family\'s massacre. Born blind.',
        status: 'alive',
        additionalDetails: 'Kavax declares him a knight for his bravery.',
      },
      {
        chapter: 35,
        description: 'Lyria negotiates to have his eyesight restored in exchange for her testimony.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'trigg',
    name: 'Trigg ti Nakamura',
    aliases: [],
    color: 'Gray',
    firstAppearance: 7,
    relationships: [
      { targetId: 'ephraim', type: 'spouse', revealedAtChapter: 7 },
      { targetId: 'holiday', type: 'sibling', revealedAtChapter: 44 },
    ],
    progressiveInfo: [
      {
        chapter: 7,
        description: 'Ephraim\'s deceased husband. Died during the Rising. His death broke Ephraim.',
        status: 'dead',
      },
    ],
  },
  {
    id: 'quicksilver',
    name: 'Regulus ag Sun',
    aliases: ['Quicksilver'],
    color: 'Silver',
    firstAppearance: 17,
    relationships: [
      { targetId: 'mustang', type: 'ally', revealedAtChapter: 17 },
    ],
    progressiveInfo: [
      {
        chapter: 17,
        description: 'The wealthiest man in the Republic. Hosts extravagant parties for the elite.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'pytha',
    name: 'Pytha',
    aliases: [],
    color: 'Blue',
    firstAppearance: 8,
    relationships: [
      { targetId: 'cassius', type: 'ally', revealedAtChapter: 8 },
      { targetId: 'lysander', type: 'ally', revealedAtChapter: 8 },
    ],
    progressiveInfo: [
      {
        chapter: 8,
        description: 'Blue pilot and companion to Cassius and Lysander aboard the Archimedes.',
        status: 'alive',
        additionalDetails: 'Has traveled with them during their decade of exile.',
      },
    ],
  },
  {
    id: 'alexandar',
    name: 'Alexandar au Arcos',
    aliases: ['The Griffin'],
    color: 'Gold',
    house: 'Arcos',
    firstAppearance: 1,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 1 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'Eldest grandson of Lorn au Arcos. Darrow\'s archLancer. A smirking prodigy with long white-blond hair.',
        status: 'alive',
        additionalDetails: 'Blade-thin and fair-skinned. Has his grandfather\'s talent with a razor.',
      },
    ],
  },
  {
    id: 'rhonna',
    name: 'Rhonna',
    aliases: [],
    color: 'Red',
    firstAppearance: 1,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 1 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'Niece of Darrow. Serves as one of his lancers in the Mercury campaign.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'thraxa',
    name: 'Thraxa au Telemanus',
    aliases: [],
    color: 'Gold',
    house: 'Telemanus',
    firstAppearance: 0,
    relationships: [
      { targetId: 'kavax', type: 'parent', revealedAtChapter: 0 },
      { targetId: 'niobe', type: 'parent', revealedAtChapter: 0 },
      { targetId: 'daxo', type: 'sibling', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Daughter of Kavax and Niobe au Telemanus.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'niobe',
    name: 'Niobe au Telemanus',
    aliases: [],
    color: 'Gold',
    house: 'Telemanus',
    firstAppearance: 0,
    relationships: [
      { targetId: 'kavax', type: 'spouse', revealedAtChapter: 0 },
      { targetId: 'daxo', type: 'parent', revealedAtChapter: 0 },
      { targetId: 'thraxa', type: 'parent', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Wife to Kavax. A serene woman with tribal tattoos of her Pacific Islander ancestors.',
        status: 'alive',
        additionalDetails: 'Has untamable graying hair and skin the color of cherrywood.',
      },
    ],
  },
  {
    id: 'sefi',
    name: 'Sefi the Quiet',
    aliases: ['Queen of the Valkyrie'],
    color: 'Obsidian',
    firstAppearance: 0,
    relationships: [],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Queen of the Valkyrie and sister to Ragnar. Leader of the Obsidian people.',
        status: 'alive',
      },
    ],
  },
];

// Family groupings for Iron Gold
export const ironGoldFamilyGroups: FamilyGroup[] = [
  {
    id: 'republic-leadership',
    name: 'Republic Leadership',
    members: ['mustang', 'darrow', 'pax-augustus', 'dancer', 'daxo', 'theodora'],
  },
  {
    id: 'house-barca',
    name: 'House Barca',
    members: ['sevro', 'victra', 'electra'],
  },
  {
    id: 'house-telemanus',
    name: 'House Telemanus',
    members: ['kavax', 'niobe', 'daxo', 'thraxa'],
  },
  {
    id: 'house-raa',
    name: 'House Raa',
    members: ['romulus', 'dido', 'seraphina', 'diomedes', 'marius', 'atlas'],
  },
  {
    id: 'house-lune',
    name: 'House Lune (Exiles)',
    members: ['lysander', 'cassius', 'pytha'],
  },
  {
    id: 'society-remnant',
    name: 'Society Remnant',
    members: ['ash-lord', 'atalantia', 'apollonius'],
  },
  {
    id: 'the-syndicate',
    name: 'The Syndicate',
    members: ['syndicate-queen', 'duke-of-hands'],
  },
  {
    id: 'howlers',
    name: 'The Howlers',
    members: ['sevro', 'holiday', 'alexandar', 'rhonna'],
  },
  {
    id: 'ephraims-crew',
    name: "Ephraim's Crew",
    members: ['ephraim', 'volga', 'trigg'],
  },
  {
    id: 'lyrias-family',
    name: "Lyria's Family",
    members: ['lyria', 'liam'],
  },
];

export const ironGoldBook: Book = {
  id: 'iron-gold',
  title: 'Iron Gold',
  author: 'Pierce Brown',
  chapters,
  characters,
};
