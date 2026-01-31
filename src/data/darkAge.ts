import type { Book, Character, FamilyGroup } from '../types';

// Dark Age chapters - Multi-POV format (Darrow, Lysander, Virginia, Ephraim, Lyria)
const chapters = [
  { number: 0, title: 'Prologue' },
  // Part I: Tyrants
  { number: 1, title: 'Darrow: Till the Vale' },
  { number: 2, title: 'Lysander: Annihilo' },
  { number: 3, title: 'Darrow: Storm God' },
  { number: 4, title: 'Lysander: Ajax, Son of Aja' },
  { number: 5, title: 'Darrow: Voyager Cloak' },
  { number: 6, title: 'Lysander: Carnivores' },
  { number: 7, title: 'Darrow: The Calm' },
  { number: 8, title: 'Lysander: The Machine' },
  { number: 9, title: 'Darrow: Angelia' },
  { number: 10, title: 'Lysander: The Ash Rain' },
  { number: 11, title: 'Darrow: Red Reach' },
  { number: 12, title: 'Lysander: White Golems' },
  { number: 13, title: 'Darrow: Plains of Caduceus' },
  { number: 14, title: 'Lysander: Into the Storm' },
  { number: 15, title: 'Darrow: Tyche' },
  { number: 16, title: 'Lysander: Rider of the Storm' },
  { number: 17, title: 'Darrow: Heliopolis' },
  // Part II: Wolves
  { number: 18, title: 'Virginia: Sovereign' },
  { number: 19, title: 'Virginia: Stiletto' },
  { number: 20, title: 'Virginia: Politicos' },
  { number: 21, title: 'Ephraim: Mauler, Brawler' },
  { number: 22, title: 'Ephraim: Unshorn' },
  { number: 23, title: 'Ephraim: Queen' },
  { number: 24, title: 'Ephraim: Skuggi' },
  { number: 25, title: 'Virginia: Oligarchs' },
  { number: 26, title: "Virginia: The Goblin's Prey" },
  { number: 27, title: 'Virginia: Pack' },
  { number: 28, title: 'Ephraim: Karachi' },
  { number: 29, title: 'Virginia: The Dust of Reverie' },
  { number: 30, title: 'Virginia: Ocular Sphere' },
  { number: 31, title: 'Virginia: Day of Red Doves' },
  // Part III: Shadows
  { number: 32, title: 'Darrow: In Wake' },
  { number: 33, title: "Darrow: The Devil's Deal" },
  { number: 34, title: 'Lysander: Shadows of War' },
  { number: 35, title: 'Darrow: Endure' },
  { number: 36, title: 'Lyria: Victim' },
  { number: 37, title: 'Ephraim: Heart of Venus' },
  { number: 38, title: 'Lysander: The Horizon' },
  { number: 39, title: "Lysander: The Mind's Eye" },
  { number: 40, title: 'Ephraim: Kjrdakan' },
  { number: 41, title: 'Ephraim: Obsidian Rising' },
  { number: 42, title: 'Lysander: A Chorus Upon the Pale' },
  { number: 43, title: 'Lysander: The Enemy' },
  { number: 44, title: 'Ephraim: Hunt of the Last Light' },
  { number: 45, title: 'Ephraim: Fall of Mars' },
  { number: 46, title: 'Ephraim: Whirlpool' },
  // Part IV: Darkness
  { number: 47, title: 'Lyria: They Are Sleeping' },
  { number: 48, title: 'Lyria: Monsters' },
  { number: 49, title: 'Lyria: Run' },
  { number: 50, title: 'Lyria: Parasite' },
  { number: 51, title: 'Lyria: Jade Witch' },
  { number: 52, title: 'Ephraim: Pale Rain' },
  { number: 53, title: 'Virginia: Pandemonium' },
  { number: 54, title: 'Virginia: Justice of the Meek' },
  { number: 55, title: 'Virginia: The Wolf and the Mother' },
  { number: 56, title: 'Virginia: A Maze with No Center' },
  { number: 57, title: 'Virginia: Black Cathedral' },
  { number: 58, title: "Darrow: Sevro's Palace" },
  { number: 59, title: 'Lysander: The Impaler' },
  { number: 60, title: 'Lysander: Pup One' },
  { number: 61, title: 'Darrow: Hero of Tyche' },
  { number: 62, title: 'Lysander: The Warlord and the Libertine' },
  { number: 63, title: 'Darrow: Unremarkable' },
  { number: 64, title: 'Lysander: To Master a Maker' },
  { number: 65, title: 'Lyria: Ulysses' },
  { number: 66, title: "Lyria: The Julii's Bill" },
  { number: 67, title: 'Lyria: Numb' },
  { number: 68, title: 'Lyria: Shh' },
  { number: 69, title: 'Lyria: The Childwives' },
  { number: 70, title: 'Lyria: Thunder Bottle' },
  { number: 71, title: 'Ephraim: From the Static' },
  { number: 72, title: 'Lyria: One Last Tooth' },
  { number: 73, title: 'Lyria: At Last, She Screams' },
  { number: 74, title: 'Ephraim: Ash Rain' },
  { number: 75, title: 'Ephraim: Grarnir' },
  { number: 76, title: 'Ephraim: He Who Walks the Void' },
  { number: 77, title: 'Ephraim: Worthy' },
  // Part V: Brothers
  { number: 78, title: 'Lysander: A Visitor' },
  { number: 79, title: 'Darrow: Bad Blood' },
  { number: 80, title: 'Lysander: Heir of Arcos' },
  { number: 81, title: 'Darrow: Dark Age' },
  { number: 82, title: 'Lysander: This Summons Legions' },
  { number: 83, title: 'Darrow: Hazard Bedlam' },
  { number: 84, title: 'Darrow: Meat Straw' },
  { number: 85, title: 'Lysander: Lune Invictus' },
  { number: 86, title: "Darrow: Legion's End" },
  { number: 87, title: 'Lysander: Ghost' },
  { number: 88, title: 'Lyria: Mercury Has Fallen' },
  { number: 89, title: 'Lysander: Triumph of the Long Night' },
  { number: 90, title: 'Lysander: The Love Knight' },
  { number: 91, title: 'Virginia: Salvation or Vengeance' },
  { number: 92, title: 'Lysander: Graveyard of Tyrants' },
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
        description: 'Trapped on Mercury after the Iron Gold cliffhanger. Leads a desperate defense against Atalantia.',
        status: 'alive',
      },
      {
        chapter: 17,
        description: 'Besieged in Heliopolis. His army is slowly being destroyed by Atalantia\'s forces.',
        status: 'alive',
      },
      {
        chapter: 33,
        description: 'Makes a devil\'s deal with Apollonius to survive. The Republic forces face annihilation.',
        status: 'alive',
      },
      {
        chapter: 58,
        description: 'Sevro is captured and tortured by Atlas and the Fear Knight\'s Gorgons.',
        status: 'alive',
        additionalDetails: 'Darrow is devastated by his friend\'s capture.',
      },
      {
        chapter: 81,
        description: 'Launches a desperate attempt to rescue Sevro and break out of Mercury.',
        status: 'alive',
      },
      {
        chapter: 86,
        description: 'The evacuation fails. Most of the Free Legions are destroyed. Darrow escapes with survivors.',
        status: 'alive',
        additionalDetails: 'Mercury has fallen. The Republic is shattered.',
      },
    ],
  },
  {
    id: 'lysander',
    name: 'Lysander au Lune',
    aliases: ['The Heir of Silenius', 'The Mind\'s Eye'],
    color: 'Gold',
    house: 'Lune',
    firstAppearance: 2,
    relationships: [
      { targetId: 'atalantia', type: 'ally', revealedAtChapter: 2 },
      { targetId: 'ajax', type: 'ally', revealedAtChapter: 4 },
      { targetId: 'kalindora', type: 'ally', revealedAtChapter: 90 },
    ],
    progressiveInfo: [
      {
        chapter: 2,
        description: 'Returns from the Rim to join Atalantia\'s campaign against Darrow on Mercury.',
        status: 'alive',
      },
      {
        chapter: 39,
        description: 'Develops the Mind\'s Eye technique - using his grandmother\'s teachings to achieve combat clarity.',
        status: 'alive',
        additionalDetails: 'Becomes a deadlier warrior through mental discipline.',
      },
      {
        chapter: 60,
        description: 'Kills Alexandar au Arcos in single combat. Stabs him through the heart during their duel.',
        status: 'alive',
        additionalDetails: 'A pivotal moment in his transformation. He chooses power over honor.',
      },
      {
        chapter: 80,
        description: 'Defeats Darrow\'s niece Rhonna in combat. Beats her face in brutally.',
        status: 'alive',
      },
      {
        chapter: 89,
        description: 'Commands the Society forces in the Triumph of the Long Night. Mercury has fallen.',
        status: 'alive',
      },
      {
        chapter: 90,
        description: 'Kalindora, the Love Knight, reveals her feelings for him. They begin a relationship.',
        status: 'alive',
      },
      {
        chapter: 92,
        description: 'Stands in the graveyard of tyrants. The heir has become a monster.',
        status: 'alive',
      },
    ],
    progressiveNames: [
      { chapter: 2, name: 'Lysander au Lune' },
      { chapter: 39, name: "Lysander / The Mind's Eye" },
    ],
  },
  {
    id: 'mustang',
    name: 'Virginia au Augustus',
    aliases: ['Mustang', 'The Sovereign'],
    color: 'Gold',
    house: 'Augustus',
    firstAppearance: 18,
    relationships: [
      { targetId: 'darrow', type: 'spouse', revealedAtChapter: 18 },
      { targetId: 'pax-augustus', type: 'parent', revealedAtChapter: 18 },
      { targetId: 'sevro', type: 'ally', revealedAtChapter: 18 },
    ],
    progressiveInfo: [
      {
        chapter: 18,
        description: 'Desperately trying to hold the Republic together while Darrow is trapped on Mercury.',
        status: 'alive',
      },
      {
        chapter: 31,
        description: 'The Day of Red Doves - a coup attempt nearly destroys the Republic government.',
        status: 'alive',
        additionalDetails: 'Dancer is killed in the attack. The Senate is in chaos.',
      },
      {
        chapter: 53,
        description: 'Mars faces invasion from multiple fronts. Virginia leads the defense.',
        status: 'alive',
      },
      {
        chapter: 57,
        description: 'Discovers the conspiracy runs deeper than she imagined. The Syndicate and Society work together.',
        status: 'alive',
      },
      {
        chapter: 91,
        description: 'With Mercury fallen, Virginia faces an impossible choice - salvation or vengeance.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'ephraim',
    name: 'Ephraim ti Horn',
    aliases: ['The Gray'],
    color: 'Gray',
    firstAppearance: 21,
    relationships: [
      { targetId: 'volga', type: 'ally', revealedAtChapter: 21 },
      { targetId: 'pax-augustus', type: 'ally', revealedAtChapter: 65 },
      { targetId: 'electra', type: 'ally', revealedAtChapter: 65 },
    ],
    progressiveInfo: [
      {
        chapter: 21,
        description: 'Tries to rescue the kidnapped children from the Obsidian Ascomanni.',
        status: 'alive',
      },
      {
        chapter: 37,
        description: 'Infiltrates Volsung Fá\'s camp to find Pax and Electra.',
        status: 'alive',
      },
      {
        chapter: 41,
        description: 'Witnesses the Obsidian Rising - Sefi\'s murder by Volsung Fá.',
        status: 'alive',
        additionalDetails: 'Fá is revealed to be Ragnar and Sefi\'s father.',
      },
      {
        chapter: 52,
        description: 'Leads the children through the pale rain of burning ships as Mars is invaded.',
        status: 'alive',
      },
      {
        chapter: 71,
        description: 'Cornered by Fá\'s forces. Makes a last stand to protect the children.',
        status: 'alive',
      },
      {
        chapter: 77,
        description: 'Killed by Volsung Fá while protecting Pax, Electra, and Volga. Dies a hero\'s death.',
        status: 'dead',
        additionalDetails: 'His sacrifice saves the children. He proves himself worthy in the end.',
      },
    ],
  },
  {
    id: 'lyria',
    name: 'Lyria of Lagalos',
    aliases: ['Gamma', 'The Red'],
    color: 'Red',
    firstAppearance: 36,
    relationships: [
      { targetId: 'victra', type: 'ally', revealedAtChapter: 66 },
      { targetId: 'volga', type: 'ally', revealedAtChapter: 88 },
    ],
    progressiveInfo: [
      {
        chapter: 36,
        description: 'Captured by Harmony and the Red Hand on Mars.',
        status: 'alive',
      },
      {
        chapter: 50,
        description: 'The parasite in her head activates. She sees through the eyes of others.',
        status: 'alive',
        additionalDetails: 'The parasite was implanted by Figment to spy on the Telemanus family.',
      },
      {
        chapter: 65,
        description: 'Meets Victra\'s son Ulysses. Discovers the Red Hand killed him.',
        status: 'alive',
      },
      {
        chapter: 66,
        description: 'Victra arrives with the Julii fleet. Harmony\'s forces are destroyed.',
        status: 'alive',
      },
      {
        chapter: 73,
        description: 'Escapes the Red Hand with Victra\'s help. Volga saves them.',
        status: 'alive',
      },
      {
        chapter: 88,
        description: 'Witnesses Mercury\'s fall from orbit. The war has changed everything.',
        status: 'alive',
      },
    ],
  },

  // ========== MAJOR CHARACTERS ==========
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
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Fighting alongside Darrow on Mercury. Still the most loyal Howler.',
        status: 'alive',
      },
      {
        chapter: 58,
        description: 'Captured by Atlas au Raa\'s Gorgons. Tortured for information.',
        status: 'alive',
        additionalDetails: 'Subjected to horrific torture but refuses to break.',
      },
      {
        chapter: 86,
        description: 'Rescued during the evacuation. Traumatized but alive.',
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
    firstAppearance: 53,
    relationships: [
      { targetId: 'sevro', type: 'spouse', revealedAtChapter: 53 },
      { targetId: 'lyria', type: 'ally', revealedAtChapter: 66 },
    ],
    progressiveInfo: [
      {
        chapter: 53,
        description: 'Leads the Julii fleet to Mars to rescue her children.',
        status: 'alive',
      },
      {
        chapter: 66,
        description: 'Destroys Harmony and the Red Hand. Kills Harmony personally.',
        status: 'alive',
        additionalDetails: 'Vengeance for the murder of her son Ulysses.',
      },
    ],
  },
  {
    id: 'atalantia',
    name: 'Atalantia au Grimmus',
    aliases: ['The Dictator', 'The Last Fury'],
    color: 'Gold',
    house: 'Grimmus',
    firstAppearance: 2,
    relationships: [
      { targetId: 'lysander', type: 'ally', revealedAtChapter: 2 },
      { targetId: 'atlas', type: 'ally', revealedAtChapter: 2 },
    ],
    progressiveInfo: [
      {
        chapter: 2,
        description: 'Dictator of the Society Remnant. Commands the siege of Mercury.',
        status: 'alive',
      },
      {
        chapter: 89,
        description: 'Triumphant over Darrow. Mercury has fallen. The Society is resurgent.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'ajax',
    name: 'Ajax au Grimmus',
    aliases: ['The Storm Knight'],
    color: 'Gold',
    house: 'Grimmus',
    firstAppearance: 4,
    relationships: [
      { targetId: 'atalantia', type: 'ally', revealedAtChapter: 4 },
      { targetId: 'atlas', type: 'parent', revealedAtChapter: 4 },
    ],
    progressiveInfo: [
      {
        chapter: 4,
        description: 'Son of Aja and Atlas. Legate of the Iron Leopards. A war engine.',
        status: 'alive',
        additionalDetails: 'Seeks to prove himself to his distant father.',
      },
    ],
  },
  {
    id: 'atlas',
    name: 'Atlas au Raa',
    aliases: ['The Fear Knight', 'The Abomination'],
    color: 'Gold',
    house: 'Raa',
    firstAppearance: 24,
    relationships: [
      { targetId: 'ajax', type: 'parent', revealedAtChapter: 4 },
      { targetId: 'atalantia', type: 'ally', revealedAtChapter: 24 },
    ],
    progressiveInfo: [
      {
        chapter: 24,
        description: 'The Fear Knight leads his Gorgons. Master torturer and psychologist.',
        status: 'alive',
      },
      {
        chapter: 58,
        description: 'Captures and tortures Sevro. Uses skuggi techniques to break his mind.',
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
    firstAppearance: 33,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 33 },
    ],
    progressiveInfo: [
      {
        chapter: 33,
        description: 'Darrow makes a deal with the Minotaur. Apollonius wants to be king.',
        status: 'alive',
      },
      {
        chapter: 62,
        description: 'Proves his worth in battle. A magnificent, terrible warrior.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'alexandar',
    name: 'Alexandar au Arcos',
    aliases: ['Pup One', 'The Griffin'],
    color: 'Gold',
    house: 'Arcos',
    firstAppearance: 0,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 0 },
      { targetId: 'rhonna', type: 'ally', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Darrow\'s archLancer. Grandson of Lorn au Arcos. Fighting on Mercury.',
        status: 'alive',
      },
      {
        chapter: 60,
        description: 'Killed by Lysander au Lune in single combat. Stabbed through the heart during their duel.',
        status: 'dead',
        additionalDetails: 'His death devastates Darrow and the Republic forces. The heir of Arcos fell to treachery.',
      },
    ],
  },
  {
    id: 'rhonna',
    name: 'Rhonna of Lykos',
    aliases: ['Pup Two'],
    color: 'Red',
    firstAppearance: 0,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 0 },
      { targetId: 'alexandar', type: 'ally', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Darrow\'s niece. Howler lancer fighting alongside Alexandar on Mercury.',
        status: 'alive',
      },
      {
        chapter: 80,
        description: 'Defeated by Lysander. Her face beaten in brutally after Alexandar\'s death.',
        status: 'alive',
        additionalDetails: 'Lost in the fall of Heliopolis.',
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
        description: 'Praetor of the Free Legions. Kavax\'s daughter. Fights with a warhammer.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'kalindora',
    name: 'Kalindora au San',
    aliases: ['The Love Knight'],
    color: 'Gold',
    house: 'San',
    firstAppearance: 2,
    relationships: [
      { targetId: 'lysander', type: 'lover', revealedAtChapter: 90 },
      { targetId: 'alexandar', type: 'ally', revealedAtChapter: 2 },
    ],
    progressiveInfo: [
      {
        chapter: 2,
        description: 'Olympic Knight fighting for the Society. Aunt to Alexandar au Arcos.',
        status: 'alive',
      },
      {
        chapter: 60,
        description: 'Present when Lysander kills her nephew Alexandar. A devastating loss.',
        status: 'alive',
      },
      {
        chapter: 90,
        description: 'Reveals her feelings for Lysander. They begin a relationship.',
        status: 'alive',
        additionalDetails: 'Wounded by Darrow\'s poisoned blade. Her fate uncertain.',
      },
    ],
  },
  {
    id: 'sefi',
    name: 'Sefi the Quiet',
    aliases: ['Queen of the Obsidian'],
    color: 'Obsidian',
    firstAppearance: 23,
    relationships: [
      { targetId: 'volsung-fa', type: 'parent', revealedAtChapter: 41 },
      { targetId: 'valdir', type: 'lover', revealedAtChapter: 22 },
    ],
    progressiveInfo: [
      {
        chapter: 23,
        description: 'Queen of the Obsidian. Leads her people from the polar north of Mars.',
        status: 'alive',
      },
      {
        chapter: 41,
        description: 'Murdered by Volsung Fá, who is revealed to be her father. The Obsidian Rising begins.',
        status: 'dead',
        additionalDetails: 'Fá takes control of the Obsidian forces and turns them against the Republic.',
      },
    ],
  },
  {
    id: 'volsung-fa',
    name: 'Volsung Fá',
    aliases: ['The Allfather', 'King of the Obsidian'],
    color: 'Obsidian',
    firstAppearance: 40,
    relationships: [
      { targetId: 'sefi', type: 'parent', revealedAtChapter: 41 },
      { targetId: 'volga', type: 'grandparent', revealedAtChapter: 40 },
      // Note: Also father of Ragnar Volarus (deceased), making Volga his granddaughter
    ],
    progressiveInfo: [
      {
        chapter: 40,
        description: 'The legendary Obsidian warlord from beyond the Kuiper Belt. Father of Ragnar and Sefi.',
        status: 'alive',
        additionalDetails: 'Volga is his granddaughter through Ragnar. Leads the Ascomanni.',
      },
      {
        chapter: 41,
        description: 'Kills his daughter Sefi and takes control of the Obsidians.',
        status: 'alive',
      },
      {
        chapter: 77,
        description: 'Kills Ephraim ti Horn. The Allfather is unstoppable.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'volga',
    name: 'Volga Fjorgan',
    aliases: ['Daughter of Ragnar', 'The Pale Daughter'],
    color: 'Obsidian',
    firstAppearance: 21,
    relationships: [
      { targetId: 'ephraim', type: 'ally', revealedAtChapter: 21 },
      { targetId: 'volsung-fa', type: 'grandparent', revealedAtChapter: 40 },
      { targetId: 'sefi', type: 'ally', revealedAtChapter: 40 }, // Sefi is her aunt (Ragnar's sister)
    ],
    progressiveInfo: [
      {
        chapter: 21,
        description: 'Reunites with Ephraim to rescue the children from the Obsidians.',
        status: 'alive',
      },
      {
        chapter: 40,
        description: 'Discovers she is the daughter of Ragnar Volarus and granddaughter of Volsung Fá.',
        status: 'alive',
        additionalDetails: 'Her parentage makes her a potential heir to the Obsidian throne.',
      },
      {
        chapter: 73,
        description: 'Saves Lyria and Victra. Proves her loyalty to her friends over her blood.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'dancer',
    name: 'Dancer',
    aliases: ['Senator O\'Faran'],
    color: 'Red',
    firstAppearance: 20,
    relationships: [
      { targetId: 'mustang', type: 'ally', revealedAtChapter: 20 },
    ],
    progressiveInfo: [
      {
        chapter: 20,
        description: 'Senator and Tribune of the Red bloc. Works to hold the Republic together.',
        status: 'alive',
      },
      {
        chapter: 31,
        description: 'Killed in the Day of Red Doves terrorist attack.',
        status: 'dead',
        additionalDetails: 'His death devastates the Republic. A hero of the Rising is gone.',
      },
    ],
  },
  {
    id: 'daxo',
    name: 'Daxo au Telemanus',
    aliases: ['Senator Daxo'],
    color: 'Gold',
    house: 'Telemanus',
    firstAppearance: 20,
    relationships: [
      { targetId: 'mustang', type: 'ally', revealedAtChapter: 20 },
    ],
    progressiveInfo: [
      {
        chapter: 20,
        description: 'Senator of the Republic. Works with Virginia to maintain order.',
        status: 'alive',
      },
      {
        chapter: 31,
        description: 'Killed by Lilath au Faran during the Day of Red Doves.',
        status: 'dead',
      },
    ],
  },
  {
    id: 'harmony',
    name: 'Harmony',
    aliases: ['The Red Hand'],
    color: 'Red',
    firstAppearance: 36,
    relationships: [
      { targetId: 'lyria', type: 'enemy', revealedAtChapter: 36 },
    ],
    progressiveInfo: [
      {
        chapter: 36,
        description: 'Leader of the Red Hand terrorist organization. Captures Lyria.',
        status: 'alive',
      },
      {
        chapter: 65,
        description: 'Killed Ulysses, Victra\'s infant son, to hurt the "bloodydamn Golds."',
        status: 'alive',
      },
      {
        chapter: 66,
        description: 'Killed by Victra in vengeance for Ulysses.',
        status: 'dead',
      },
    ],
  },
  {
    id: 'orion',
    name: 'Orion xe Aquarii',
    aliases: ['Navarch'],
    color: 'Blue',
    firstAppearance: 0,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Navarch of the Republic. Commands the fleet operations on Mercury.',
        status: 'alive',
      },
      {
        chapter: 86,
        description: 'Killed during Operation Tartarus - the final evacuation of Mercury.',
        status: 'dead',
        additionalDetails: 'One of the greatest naval commanders in Republic history.',
      },
    ],
  },
  {
    id: 'harnassus',
    name: 'Cadus Harnassus',
    aliases: ['The Orange'],
    color: 'Orange',
    firstAppearance: 0,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Imperator of the Republic. Darrow\'s second-in-command. An Orange engineer.',
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
    firstAppearance: 65,
    relationships: [
      { targetId: 'darrow', type: 'parent', revealedAtChapter: 0 },
      { targetId: 'mustang', type: 'parent', revealedAtChapter: 0 },
      { targetId: 'ephraim', type: 'ally', revealedAtChapter: 65 },
    ],
    progressiveInfo: [
      {
        chapter: 65,
        description: 'Still held captive by the Obsidians. Ephraim works to free him.',
        status: 'alive',
      },
      {
        chapter: 77,
        description: 'Saved by Ephraim\'s sacrifice. Escapes with Volga and Electra.',
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
    firstAppearance: 65,
    relationships: [
      { targetId: 'sevro', type: 'parent', revealedAtChapter: 0 },
      { targetId: 'victra', type: 'parent', revealedAtChapter: 0 },
      { targetId: 'pax-augustus', type: 'friend', revealedAtChapter: 65 },
    ],
    progressiveInfo: [
      {
        chapter: 65,
        description: 'Captive with Pax. Shows fierce spirit like her parents.',
        status: 'alive',
      },
      {
        chapter: 77,
        description: 'Escapes with Pax and Volga after Ephraim\'s sacrifice.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'diomedes',
    name: 'Diomedes au Raa',
    aliases: ['The Storm Knight of the Rim', 'Diomedes the Stoic'],
    color: 'Gold',
    house: 'Raa',
    firstAppearance: 78,
    relationships: [
      { targetId: 'atlas', type: 'ally', revealedAtChapter: 78 },
    ],
    progressiveInfo: [
      {
        chapter: 78,
        description: 'Arrives at Mercury with the Rim fleet. The alliance with the Society is sealed.',
        status: 'alive',
        additionalDetails: 'A formidable warrior and nephew to Atlas au Raa.',
      },
    ],
  },
];

// Family groupings for Dark Age
export const darkAgeFamilyGroups: FamilyGroup[] = [
  {
    id: 'republic-leadership',
    name: 'Republic Leadership',
    members: ['mustang', 'darrow', 'sevro', 'victra', 'dancer', 'orion', 'harnassus'],
  },
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
    members: ['thraxa', 'daxo'],
  },
  {
    id: 'society-command',
    name: 'Society Command',
    members: ['atalantia', 'lysander', 'ajax', 'atlas', 'apollonius'],
  },
  {
    id: 'howlers',
    name: 'The Howlers',
    members: ['sevro', 'alexandar', 'rhonna', 'thraxa'],
  },
  {
    id: 'obsidian-alliance',
    name: 'Obsidian Forces',
    members: ['sefi', 'volsung-fa', 'volga'],
  },
  {
    id: 'rim-forces',
    name: 'Rim Dominion',
    members: ['diomedes', 'atlas'],
  },
  {
    id: 'rescue-team',
    name: 'Rescue Team',
    members: ['ephraim', 'volga', 'pax-augustus', 'electra'],
  },
  {
    id: 'lyrias-allies',
    name: "Lyria's Allies",
    members: ['lyria', 'victra', 'volga'],
  },
];

export const darkAgeBook: Book = {
  id: 'dark-age',
  title: 'Dark Age',
  author: 'Pierce Brown',
  chapters,
  characters,
};
