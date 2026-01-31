import type { Book, Character, FamilyGroup } from '../types';

// Light Bringer chapters - Multi-POV format
const chapters = [
  { number: 0, title: 'Prologue' },
  // Part I: Circus
  { number: 1, title: 'Darrow: Castaway' },
  { number: 2, title: 'Darrow: The Book' },
  { number: 3, title: 'Darrow: Revenants' },
  { number: 4, title: 'Darrow: The Sordid Affair' },
  { number: 5, title: 'Lysander: Games' },
  { number: 6, title: 'Darrow: Mortal Concerns' },
  { number: 7, title: 'Lysander: The Ally Idiot' },
  { number: 8, title: 'Darrow: The Hanging Coliseum' },
  { number: 9, title: 'Darrow: Shit Escalates' },
  { number: 10, title: 'Lysander: Iron Fist' },
  { number: 11, title: 'Darrow: Inheritance' },
  // Part II: Rampart
  { number: 12, title: 'Lyria: Truffle Pig' },
  { number: 13, title: "Lyria: The Rose's Game" },
  { number: 14, title: 'Virginia: The Armor of Love' },
  { number: 15, title: 'Lysander: Earth' },
  { number: 16, title: 'Lysander: The Two Hundred' },
  { number: 17, title: 'Lysander: Mars Must Fall' },
  { number: 18, title: 'Virginia: The Returned' },
  { number: 19, title: 'Virginia: Rising Dirge' },
  { number: 20, title: 'Virginia: Nucleus' },
  { number: 21, title: 'Virginia: Petard' },
  { number: 22, title: 'Lysander: Iron, Death, Gold' },
  { number: 23, title: 'Virginia: Grim Glory' },
  { number: 24, title: 'Lysander: Drop Shock' },
  { number: 25, title: 'Virginia: War Prism' },
  { number: 26, title: 'Virginia: Labyrinth' },
  { number: 27, title: 'Virginia: A Good Death' },
  { number: 28, title: 'Lysander: War Engine' },
  { number: 29, title: 'Virginia: Pity Them' },
  { number: 30, title: 'Lysander: Edge of Glory' },
  { number: 31, title: 'Virginia: Détente' },
  { number: 32, title: 'Virginia: Parley' },
  { number: 33, title: 'Lysander: Master of the Spoils' },
  { number: 34, title: 'Virginia: Remember Earth' },
  { number: 35, title: 'Darrow: Winds of Duty' },
  { number: 36, title: 'Lysander: Jurisdiction' },
  // Part III: Tempest
  { number: 37, title: 'Darrow: Cacophony' },
  { number: 38, title: 'Darrow: Tabula Rasa' },
  { number: 39, title: 'Darrow: Under the Golden Gaze' },
  { number: 40, title: 'Lyria: Departure' },
  { number: 41, title: 'Darrow: To the Stars' },
  { number: 42, title: 'Lyria: Rat in the Machine' },
  { number: 43, title: 'Lysander: Fragment of Immensity' },
  { number: 44, title: 'Lysander: Grapes and Iron' },
  { number: 45, title: 'Lysander: Allfather' },
  { number: 46, title: 'Darrow: The Sun Is Down' },
  { number: 47, title: 'Lysander: The Bringer of Darkness' },
  { number: 48, title: 'Darrow: The Tickler' },
  { number: 49, title: 'Lysander: Vae Victis' },
  { number: 50, title: 'Lysander: Heavy Is the Head' },
  { number: 51, title: 'Darrow: Midnight Lands' },
  { number: 52, title: 'Darrow: Sungrave' },
  { number: 53, title: 'Darrow: Eyes of Stone' },
  { number: 54, title: 'Darrow: Pella! Pella! Pella!' },
  { number: 55, title: 'Darrow: Demigod' },
  { number: 56, title: 'Darrow: Dust Mice' },
  { number: 57, title: 'Lyria: Lamps in the Storm' },
  { number: 58, title: 'Lyria: Europa' },
  { number: 59, title: 'Darrow: Athena' },
  { number: 60, title: 'Darrow: The Weight of Guilt' },
  { number: 61, title: 'Darrow: The Three Masters' },
  { number: 62, title: "Darrow: The Tyrants' Debris" },
  { number: 63, title: 'Lyria: Mashed Taters' },
  { number: 64, title: 'Lysander: The Noble Lie' },
  { number: 65, title: 'Lyria: Into the Maelstrom' },
  { number: 66, title: 'Lyria: The Fall of Heraklion' },
  { number: 67, title: 'Lyria: Volga' },
  { number: 68, title: 'Lyria: The King and His Court' },
  { number: 69, title: 'Lyria: Hour of Hunger' },
  { number: 70, title: 'Lyria: Passage of the Stains' },
  { number: 71, title: 'Darrow: Ashvar' },
  { number: 72, title: 'Darrow: Full-Metal Panoply' },
  { number: 73, title: 'Darrow: The Breath of Stone' },
  { number: 74, title: 'Darrow: The Hunt' },
  { number: 75, title: 'Lyria: Prove It' },
  { number: 76, title: 'Darrow: By the Laws of the Ice' },
  // Part IV: Brothers
  { number: 77, title: 'Darrow: Old Stoneside' },
  { number: 78, title: 'Darrow: The Monster in the Storm' },
  { number: 79, title: 'Lysander: Teeth of Civilization' },
  { number: 80, title: 'Darrow: Stirring Stuff' },
  { number: 81, title: 'Lysander: Parting of the Shadow' },
  { number: 82, title: 'Darrow: Civil Discourse' },
  { number: 83, title: 'Lysander: A Way Out' },
  { number: 84, title: 'Lysander: Hangar 17B' },
  { number: 85, title: 'Darrow: Dusk and Dawn' },
  { number: 86, title: 'Darrow: Nivalnight' },
  { number: 87, title: 'Darrow: Casus Belli' },
  { number: 88, title: 'Lysander: The Sack of Demeter' },
  { number: 89, title: 'Darrow: The Only Path' },
];

const characters: Character[] = [
  // ========== MAIN POV CHARACTERS ==========
  {
    id: 'darrow',
    name: 'Darrow of Lykos',
    aliases: ['The Reaper', 'The Light Bringer'],
    color: 'Gold',
    house: 'Augustus',
    firstAppearance: 0,
    relationships: [
      { targetId: 'mustang', type: 'spouse', revealedAtChapter: 0 },
      { targetId: 'sevro', type: 'friend', revealedAtChapter: 0 },
      { targetId: 'cassius', type: 'ally', revealedAtChapter: 3 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Marooned on a trash moon near the sun after escaping Mercury. Repairs the Archimedes.',
        status: 'alive',
        additionalDetails: 'Has been stranded for weeks waiting for Cassius to return with helium.',
      },
      {
        chapter: 3,
        description: 'Reunites with Cassius who brings supplies. They plan to return to the war.',
        status: 'alive',
        additionalDetails: 'Cassius reveals he is alive. They forge an unlikely alliance.',
      },
      {
        chapter: 35,
        description: 'Returns to the solar system. Learns the situation has grown desperate.',
        status: 'alive',
      },
      {
        chapter: 46,
        description: 'Makes contact with the Obsidian resistance. Plans to unite the enemies of the Society.',
        status: 'alive',
      },
      {
        chapter: 59,
        description: 'Forges alliance with Athena and the Daughters of Athena underground network.',
        status: 'alive',
      },
      {
        chapter: 76,
        description: 'Confronts Volsung Fá. Fights for the future of the Obsidians.',
        status: 'alive',
      },
      {
        chapter: 89,
        description: 'Sets in motion the final plan to defeat the Society. The only path forward.',
        status: 'alive',
      },
    ],
    progressiveNames: [
      { chapter: 0, name: 'Darrow / Castaway' },
      { chapter: 35, name: 'Darrow / The Reaper' },
      { chapter: 89, name: 'Darrow / The Light Bringer' },
    ],
  },
  {
    id: 'lysander',
    name: 'Lysander au Lune',
    aliases: ['The Lightbringer', 'Heir of Silenius', 'The Morning Star'],
    color: 'Gold',
    house: 'Lune',
    firstAppearance: 5,
    relationships: [
      { targetId: 'atalantia', type: 'enemy', revealedAtChapter: 50 },
      { targetId: 'ajax', type: 'rival', revealedAtChapter: 5 },
      { targetId: 'diomedes', type: 'ally', revealedAtChapter: 45 },
    ],
    progressiveInfo: [
      {
        chapter: 5,
        description: 'Commands Society forces in the war against the Republic. His Triumph is interrupted.',
        status: 'alive',
      },
      {
        chapter: 16,
        description: 'Addresses the Two Hundred Gold families. Seeks to unite Gold against the Republic.',
        status: 'alive',
      },
      {
        chapter: 33,
        description: 'Master of the spoils. Growing power makes enemies among his own side.',
        status: 'alive',
      },
      {
        chapter: 45,
        description: 'Meets Volsung Fá, the Allfather of the Obsidians. Seeks alliance against common enemies.',
        status: 'alive',
      },
      {
        chapter: 50,
        description: 'Realizes Atalantia will never cede power. Heavy is the head that wears the crown.',
        status: 'alive',
        additionalDetails: 'The alliance with Atalantia begins to fracture.',
      },
      {
        chapter: 64,
        description: 'The Noble Lie - Lysander wrestles with the philosophical foundations of Gold rule.',
        status: 'alive',
      },
      {
        chapter: 79,
        description: 'Confronts the teeth of civilization - the hard truths about Gold rule.',
        status: 'alive',
      },
      {
        chapter: 88,
        description: 'The Sack of Demeter - major battle that shifts the war. Lysander\'s position weakens.',
        status: 'alive',
        additionalDetails: 'The war turns against the Society as Diomedes and others question their path.',
      },
    ],
  },
  {
    id: 'mustang',
    name: 'Virginia au Augustus',
    aliases: ['Mustang', 'The Sovereign'],
    color: 'Gold',
    house: 'Augustus',
    firstAppearance: 14,
    relationships: [
      { targetId: 'darrow', type: 'spouse', revealedAtChapter: 14 },
      { targetId: 'pax-augustus', type: 'parent', revealedAtChapter: 14 },
    ],
    progressiveInfo: [
      {
        chapter: 14,
        description: 'The Armor of Love - fights to protect her son and the Republic.',
        status: 'alive',
      },
      {
        chapter: 18,
        description: 'The Returned - reunites with allies she thought lost.',
        status: 'alive',
      },
      {
        chapter: 25,
        description: 'War Prism - sees the war from all angles, makes difficult choices.',
        status: 'alive',
      },
      {
        chapter: 32,
        description: 'Parley - attempts diplomatic solutions to end the war.',
        status: 'alive',
      },
      {
        chapter: 34,
        description: 'Remember Earth - the birthplace of humanity becomes central to the conflict.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'lyria',
    name: 'Lyria of Lagalos',
    aliases: ['Gamma', 'The Red'],
    color: 'Red',
    firstAppearance: 12,
    relationships: [
      { targetId: 'volga', type: 'ally', revealedAtChapter: 67 },
      { targetId: 'mustang', type: 'ally', revealedAtChapter: 12 },
    ],
    progressiveInfo: [
      {
        chapter: 12,
        description: 'Truffle Pig - Lyria searches for the truth about the conspiracy.',
        status: 'alive',
      },
      {
        chapter: 40,
        description: 'Departure - leaves on a mission crucial to the war effort.',
        status: 'alive',
      },
      {
        chapter: 58,
        description: 'Europa - travels to Jupiter\'s moon on her quest.',
        status: 'alive',
      },
      {
        chapter: 66,
        description: 'The Fall of Heraklion - witnesses major destruction.',
        status: 'alive',
      },
      {
        chapter: 67,
        description: 'Reunites with Volga. Their friendship transcends Color.',
        status: 'alive',
      },
      {
        chapter: 75,
        description: 'Prove It - Lyria must demonstrate her worth and loyalty.',
        status: 'alive',
      },
    ],
  },

  // ========== MAJOR CHARACTERS ==========
  {
    id: 'cassius',
    name: 'Cassius au Bellona',
    aliases: ['The Morning Knight'],
    color: 'Gold',
    house: 'Bellona',
    firstAppearance: 3,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 3 },
    ],
    progressiveInfo: [
      {
        chapter: 3,
        description: 'Alive! Returns to Darrow with supplies. They forge an alliance.',
        status: 'alive',
        additionalDetails: 'Survived the Rim. Ready to fight for the right side.',
      },
      {
        chapter: 35,
        description: 'Joins Darrow\'s mission to turn the tide of the war.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'sevro',
    name: 'Sevro au Barca',
    aliases: ['The Goblin'],
    color: 'Gold',
    house: 'Barca',
    firstAppearance: 14,
    relationships: [
      { targetId: 'darrow', type: 'friend', revealedAtChapter: 0 },
      { targetId: 'victra', type: 'spouse', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 14,
        description: 'Recovering from his torture by Atlas. Still traumatized but fighting alongside Virginia.',
        status: 'alive',
        additionalDetails: 'Sevro is on Luna/Mars with Virginia, not stranded with Darrow.',
      },
      {
        chapter: 35,
        description: 'Reunites with Darrow when he returns from his exile.',
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
    firstAppearance: 14,
    relationships: [
      { targetId: 'sevro', type: 'spouse', revealedAtChapter: 0 },
      { targetId: 'electra', type: 'parent', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 14,
        description: 'Fighting to protect her family and the Republic. Supporting Virginia\'s war effort.',
        status: 'alive',
        additionalDetails: 'Victra commands forces and seeks vengeance for the losses suffered in Dark Age.',
      },
    ],
  },
  {
    id: 'atalantia',
    name: 'Atalantia au Grimmus',
    aliases: ['The Dictator', 'Atalantia the Cruel'],
    color: 'Gold',
    house: 'Grimmus',
    firstAppearance: 5,
    relationships: [
      { targetId: 'lysander', type: 'rival', revealedAtChapter: 50 },
      { targetId: 'atlas', type: 'ally', revealedAtChapter: 5 },
      { targetId: 'ajax', type: 'parent', revealedAtChapter: 5 },
    ],
    progressiveInfo: [
      {
        chapter: 5,
        description: 'Dictator of the Society. Struggles to maintain control over Lysander.',
        status: 'alive',
        additionalDetails: 'Mother of Ajax. Commands the Society forces against the Republic.',
      },
      {
        chapter: 50,
        description: 'Her alliance with Lysander begins to fracture. Power struggle intensifies.',
        status: 'alive',
      },
      {
        chapter: 88,
        description: 'The Sack of Demeter - Atalantia\'s forces suffer a major setback.',
        status: 'alive',
        additionalDetails: 'The war turns against the Society as alliances shift.',
      },
    ],
  },
  {
    id: 'ajax',
    name: 'Ajax au Grimmus',
    aliases: ['The Storm Knight'],
    color: 'Gold',
    house: 'Grimmus',
    firstAppearance: 5,
    relationships: [
      { targetId: 'atalantia', type: 'ally', revealedAtChapter: 5 },
      { targetId: 'lysander', type: 'rival', revealedAtChapter: 5 },
    ],
    progressiveInfo: [
      {
        chapter: 5,
        description: 'Competes with Lysander for glory and Atalantia\'s favor.',
        status: 'alive',
      },
      {
        chapter: 55,
        description: 'Killed by Darrow in combat. His death marks a major turning point.',
        status: 'dead',
        additionalDetails: 'Darrow defeats Ajax in the climactic battle, ending the Storm Knight.',
      },
    ],
  },
  {
    id: 'atlas',
    name: 'Atlas au Raa',
    aliases: ['The Fear Knight'],
    color: 'Gold',
    house: 'Raa',
    firstAppearance: 5,
    relationships: [
      { targetId: 'atalantia', type: 'ally', revealedAtChapter: 5 },
    ],
    progressiveInfo: [
      {
        chapter: 5,
        description: 'The Fear Knight continues his psychological warfare operations.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'apollonius',
    name: 'Apollonius au Valii-Rath',
    aliases: ['The Minotaur', 'The Poet of Deimos'],
    color: 'Gold',
    house: 'Valii-Rath',
    firstAppearance: 0,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 0 },
      { targetId: 'cassius', type: 'ally', revealedAtChapter: 3 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Stranded with Darrow on the trash moon. The magnificent Minotaur proves a valuable ally.',
        status: 'alive',
        additionalDetails: 'Apollonius provides both combat prowess and theatrical flair to the survivors.',
      },
      {
        chapter: 35,
        description: 'Joins Darrow and Cassius in their return to the war.',
        status: 'alive',
      },
      {
        chapter: 89,
        description: 'Plays a crucial role in the final confrontations. His ambitions remain unpredictable.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'diomedes',
    name: 'Diomedes au Raa',
    aliases: ['The Storm Knight', 'Heir of Romulus'],
    color: 'Gold',
    house: 'Raa',
    firstAppearance: 45,
    relationships: [
      { targetId: 'lysander', type: 'ally', revealedAtChapter: 45 },
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 89 },
    ],
    progressiveInfo: [
      {
        chapter: 45,
        description: 'The Rim\'s greatest warrior plays a crucial role in the shifting alliances.',
        status: 'alive',
      },
      {
        chapter: 79,
        description: 'Witnesses the teeth of civilization - the brutal realities of the war.',
        status: 'alive',
      },
      {
        chapter: 89,
        description: 'Ultimately breaks from Lysander and the Society. Joins Darrow\'s cause.',
        status: 'alive',
        additionalDetails: 'Diomedes chooses to ally with Darrow after seeing the truth of Gold tyranny.',
      },
    ],
  },
  {
    id: 'volga',
    name: 'Volga Fjorgan',
    aliases: ['Daughter of Ragnar', 'Granddaughter of the Allfather'],
    color: 'Obsidian',
    firstAppearance: 40,
    relationships: [
      { targetId: 'lyria', type: 'ally', revealedAtChapter: 67 },
      { targetId: 'volsung-fa', type: 'ally', revealedAtChapter: 45 },
    ],
    progressiveInfo: [
      {
        chapter: 40,
        description: 'Volga\'s journey among the Ascomanni continues. She struggles with her identity.',
        status: 'alive',
        additionalDetails: 'As Ragnar\'s daughter and Volsung Fá\'s granddaughter, she is caught between worlds.',
      },
      {
        chapter: 67,
        description: 'Reunites with Lyria. Their friendship transcends Color and faction.',
        status: 'alive',
      },
      {
        chapter: 76,
        description: 'Witnesses Darrow defeat her grandfather Volsung Fá. Must choose her path forward.',
        status: 'alive',
        additionalDetails: 'Volga\'s choice following Fá\'s death shapes the future of the Obsidians.',
      },
    ],
  },
  {
    id: 'volsung-fa',
    name: 'Volsung Fá',
    aliases: ['The Allfather'],
    color: 'Obsidian',
    firstAppearance: 45,
    relationships: [
      { targetId: 'volga', type: 'grandparent', revealedAtChapter: 45 },
    ],
    progressiveInfo: [
      {
        chapter: 45,
        description: 'The Allfather of the Obsidians. Lysander seeks alliance with him.',
        status: 'alive',
        additionalDetails: 'Leader of the Ascomanni. Grandfather of Volga through his son Ragnar.',
      },
      {
        chapter: 76,
        description: 'Killed by Darrow in single combat according to Obsidian law.',
        status: 'dead',
        additionalDetails: 'Darrow challenges and defeats Volsung Fá by the laws of the ice, ending his reign as Allfather.',
      },
    ],
  },
  {
    id: 'thraxa',
    name: 'Thraxa au Telemanus',
    aliases: ['The Hammer'],
    color: 'Gold',
    house: 'Telemanus',
    firstAppearance: 0,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Stranded with Darrow\'s survivors on the trash moon.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'pax-augustus',
    name: 'Pax Augustus',
    aliases: [],
    color: 'Gold',
    house: 'Augustus',
    firstAppearance: 14,
    relationships: [
      { targetId: 'darrow', type: 'parent', revealedAtChapter: 14 },
      { targetId: 'mustang', type: 'parent', revealedAtChapter: 14 },
    ],
    progressiveInfo: [
      {
        chapter: 14,
        description: 'Safe but the war threatens everything his parents have built.',
        status: 'alive',
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
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Escaped with Pax and Volga after Ephraim\'s sacrifice in Dark Age.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'kavax',
    name: 'Kavax au Telemanus',
    aliases: ['The Giant'],
    color: 'Gold',
    house: 'Telemanus',
    firstAppearance: 0,
    relationships: [
      { targetId: 'thraxa', type: 'parent', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'The Telemanus patriarch continues to support the Republic.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'pytha',
    name: 'Pytha',
    aliases: [],
    color: 'Blue',
    firstAppearance: 3,
    relationships: [
      { targetId: 'cassius', type: 'ally', revealedAtChapter: 3 },
    ],
    progressiveInfo: [
      {
        chapter: 3,
        description: 'Blue pilot who helped Cassius survive. Loyal companion.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'aurae',
    name: 'Aurae',
    aliases: [],
    color: 'Pink',
    firstAppearance: 3,
    relationships: [
      { targetId: 'cassius', type: 'ally', revealedAtChapter: 3 },
    ],
    progressiveInfo: [
      {
        chapter: 3,
        description: 'Pink companion who helped Cassius during his exile. Left Darrow a book.',
        status: 'alive',
      },
    ],
  },
];

// Family groupings for Light Bringer
export const lightBringerFamilyGroups: FamilyGroup[] = [
  {
    id: 'house-augustus',
    name: 'House Augustus',
    members: ['mustang', 'darrow', 'pax-augustus'],
  },
  {
    id: 'house-barca',
    name: 'House Barca',
    members: ['sevro', 'victra', 'electra'],
  },
  {
    id: 'house-telemanus',
    name: 'House Telemanus',
    members: ['kavax', 'thraxa'],
  },
  {
    id: 'society-command',
    name: 'Society Command',
    members: ['atalantia', 'lysander', 'ajax', 'atlas'],
  },
  {
    id: 'darrows-crew',
    name: "Darrow's Alliance",
    members: ['darrow', 'cassius', 'apollonius', 'thraxa', 'pytha', 'aurae'],
  },
  {
    id: 'rim-forces',
    name: 'Rim Dominion',
    members: ['diomedes'],
  },
  {
    id: 'obsidian-forces',
    name: 'Obsidian Forces',
    members: ['volsung-fa', 'volga'],
  },
  {
    id: 'red-allies',
    name: 'Red Allies',
    members: ['lyria', 'volga'],
  },
];

export const lightBringerBook: Book = {
  id: 'light-bringer',
  title: 'Light Bringer',
  author: 'Pierce Brown',
  chapters,
  characters,
};
