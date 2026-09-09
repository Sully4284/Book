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
        description: 'Family dinner at Silene Manor. Learns Dancer has called an emergency Senate session over his conduct on Mercury.',
        status: 'alive',
      },
      {
        chapter: 16,
        description: 'Voted out of high command by the Senate (ch 11). Holed up in his Hyperion tower with the Howlers as an arrest warrant is prepared; Sefi and the Obsidians leave him; he plans to break Apollonius out of Deepgrave.',
        status: 'alive',
      },
      {
        chapter: 21,
        description: 'Wulfgar and the Wardens come to arrest him at Silene Manor. In the fight Darrow accidentally kills Wulfgar and flees Luna as a fugitive.',
        status: 'alive',
        additionalDetails: 'Wulfgar\'s death turns the Obsidians and much of the Republic against him.',
      },
      {
        chapter: 28,
        description: 'Breaks into Deepgrave and frees Apollonius au Valii-Rath to use against the Ash Lord.',
        status: 'alive',
      },
      {
        chapter: 45,
        description: 'Lands on Venus with Apollonius and the Howlers and captures Tharsus au Valii-Rath at his island villa to get the codes to reach the Ash Lord.',
        status: 'alive',
      },
      {
        chapter: 54,
        description: 'Leads the Howlers in the assault on the Ash Lord\'s Venus fortress through the aftermath of a nuclear strike.',
        status: 'alive',
      },
      {
        chapter: 60,
        description: 'Reaches the Ash Lord — a dying husk. Learns Atalantia has commanded Society forces all along and that the peace talks were her ruse to ambush the Republic fleet over Mercury. The Ash Lord takes poison; Apollonius burns him.',
        status: 'alive',
      },
      {
        chapter: 65,
        description: 'Leaves the Ash Lord\'s fortress on Venus hollowed out. Sends Sevro home on the Nessus to find the children while he goes to Mercury to save his stranded army; releases Apollonius to take Venus.',
        status: 'alive',
        additionalDetails: 'The Ash Lord told him (ch 60) that Pax and Electra have been taken; Sevro leaves him in fury.',
      },
    ],
  },
  {
    id: 'lysander',
    name: 'Lysander au Lune',
    aliases: ['Heir of Silenius', 'Castor au Janus'],
    color: 'Gold',
    house: 'Lune',
    firstAppearance: 8,
    relationships: [
      { targetId: 'cassius', type: 'mentor', revealedAtChapter: 8 },
      { targetId: 'seraphina', type: 'ally', revealedAtChapter: 20 },
    ],
    progressiveInfo: [
      {
        chapter: 8,
        description: 'Living in exile for ten years with Cassius aboard the Archimedes under the alias Castor au Janus.',
        status: 'alive',
        additionalDetails: 'Finds a naked, tortured Gold woman aboard a derelict ship infested with Ascomanni; she is not named until ch 20.',
      },
      {
        chapter: 9,
        description: 'Fights his way off the Ascomanni-held ship with the rescued girl and Cassius.',
        status: 'alive',
      },
      {
        chapter: 20,
        description: 'Captured by Rim commandos led by Diomedes and Seraphina au Raa; held for the voyage to Io.',
        status: 'alive',
      },
      {
        chapter: 22,
        description: 'Flown across Io after weeks of captivity; Pandora has been interrogating him about a datacube Seraphina supposedly carried.',
        status: 'alive',
      },
      {
        chapter: 25,
        description: 'Brought before Romulus au Raa, Sovereign of the Rim, at his Io fortress; Seraphina tells Romulus she went into the Gulf for "the truth of what happened to our docks."',
        status: 'alive',
      },
      {
        chapter: 38,
        description: 'Dido reveals the contents of the Archimedes\' safe exposes Cassius as a Bellona; the Raa invoke a bloodfeud and Seraphina volunteers to fight him.',
        status: 'alive',
        additionalDetails: 'The destruction killed thousands and debris fell on Ganymede cities.',
      },
      {
        chapter: 41,
        description: 'After Cassius defeats a string of Raa duelists (ch 40), Seraphina disarms and mortally wounds him. Lysander stops the duel by revealing his true name.',
        status: 'alive',
      },
      {
        chapter: 47,
        description: 'Cassius, dying, asks "what have you done?"; Lysander opens the safe and Seraphina\'s holo of Darrow destroying the docks is shown to the Rim.',
        status: 'alive',
        additionalDetails: 'Lysander mourns his mentor and adoptive father figure.',
      },
      {
        chapter: 61,
        description: 'At Romulus\'s trial before the Moon Lords, Dido charges him with negligence; Romulus confesses he knew Darrow destroyed the docks and is charged with arch treason.',
        status: 'alive',
      },
      {
        chapter: 63,
        description: 'After Romulus\'s execution, asks Dido to let him join her war and serve as her envoy to the Core; she accepts. He has not yet left Io by book\'s end and meets no one from the Society in this book.',
        status: 'alive',
      },
    ],
    progressiveNames: [
      { chapter: 8, name: 'Castor au Janus' },
      { chapter: 41, name: 'Lysander au Lune' },
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
        description: 'A Gamma Red from the mine of Lagalos living in Assimilation Camp 121 on Mars with her father, sister and nephews. Resented as a "pet of the Golds."',
        status: 'alive',
        additionalDetails: 'Her nephew Liam was born blind.',
      },
      {
        chapter: 13,
        description: 'The Red Hand massacres Camp 121; Lyria escapes with only her blind nephew Liam.',
        status: 'alive',
      },
      {
        chapter: 17,
        description: 'Kavax au Telemanus arrives with relief; his fox Sophocles "chooses" her and Kavax takes her and Liam to Luna.',
        status: 'alive',
      },
      {
        chapter: 23,
        description: 'Working as Sophocles\'s keeper in the Telemanus household on Luna; Liam is at the Citadel school.',
        status: 'alive',
      },
      {
        chapter: 35,
        description: 'Aboard the Telemanus shuttle after Quicksilver\'s banquet when it is gassed and brought down — the kidnapping of Pax and Electra.',
        status: 'alive',
        additionalDetails: 'Paralyzed by anacene gas; Ephraim finds her among the servants in the wreck.',
      },
      {
        chapter: 44,
        description: 'Flees after being blamed for the attack and is arrested by Holiday ti Nakamura as a witness; Victra tries to seize her.',
        status: 'alive',
      },
      {
        chapter: 50,
        description: 'Questioned by Daxo, Theodora and Holiday (ch 49), then by the Sovereign herself; identifies "Philippe," the man who befriended her, revealing the kidnapper is Ephraim — Holiday\'s brother-in-law.',
        status: 'alive',
        additionalDetails: 'She was an unwitting tool of the kidnappers.',
      },
      {
        chapter: 59,
        description: 'The children are recovered. Lyria bargains with the Sovereign for Liam\'s care and the restoration of his eyesight.',
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
      { targetId: 'trigg', type: 'lover', revealedAtChapter: 14 },
      { targetId: 'volga', type: 'friend', revealedAtChapter: 6 },
      { targetId: 'holiday', type: 'ally', revealedAtChapter: 14 },
    ],
    progressiveInfo: [
      {
        chapter: 6,
        description: 'A Gray freelance thief working in Hyperion. Former Son of Ares, now a drug-addicted criminal.',
        status: 'alive',
        additionalDetails: 'His fiancé was killed during the Rising (named as Trigg in ch 14). He never recovered.',
      },
      {
        chapter: 14,
        description: 'Holiday visits on Trigg\'s birthday; the two trade bitter words about the Republic.',
        status: 'alive',
      },
      {
        chapter: 18,
        description: 'Summoned by the Duke of Hands, a Syndicate lord, who offers him the Queen\'s Kiss and a job he cannot refuse.',
        status: 'alive',
      },
      {
        chapter: 39,
        description: 'His crew downs the Telemanus shuttle over Hyperion with gas and a gravity trap and takes Pax and Electra; Dano is killed.',
        status: 'alive',
        additionalDetails: 'Does not know who hired him or why.',
      },
      {
        chapter: 42,
        description: 'Delivers the children to the Syndicate. The Duke has his team member Cyra killed.',
        status: 'alive',
        additionalDetails: 'Cyra was a spy for the Syndicate. Gorgo throws her off the highrise.',
      },
      {
        chapter: 51,
        description: 'Volga confronts him over his drug use and callousness; Holiday and the Republic then capture him. The Sovereign makes him a deal: lead them to the Syndicate base or Volga dies.',
        status: 'alive',
      },
      {
        chapter: 64,
        description: 'Wounded and flying Pax and Electra to safety after freeing them from the Syndicate (ch 57–58). The Syndicate Queen seizes remote control of the ship; he blows the engines to crash it rather than be taken back.',
        status: 'alive',
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
    firstAppearance: 1,
    relationships: [
      { targetId: 'darrow', type: 'spouse', revealedAtChapter: 0 },
      { targetId: 'pax-augustus', type: 'parent', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'Sovereign of the Solar Republic. Struggling to hold the Republic together as the war drags on.',
        status: 'alive',
      },
      {
        chapter: 11,
        description: 'Loses the Senate vote as the Vox Populi strips Darrow of command; later (ch 21) she orders Wulfgar to arrest her own husband.',
        status: 'alive',
      },
      {
        chapter: 35,
        description: 'Her son Pax is kidnapped from the Telemanus shuttle over Hyperion by Syndicate operatives.',
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
        chapter: 60,
        description: 'Learns from the dying Ash Lord that Electra and Pax have been taken; he is with Darrow on Venus and cannot reach her.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'victra',
    name: 'Victra au Barca',
    aliases: ['Lady Julii'],
    color: 'Gold',
    house: 'Barca',
    firstAppearance: 2,
    relationships: [
      { targetId: 'sevro', type: 'spouse', revealedAtChapter: 0 },
      { targetId: 'electra', type: 'parent', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 2,
        description: 'Wife of Sevro, mother to Electra. A fierce warrior and powerful political figure.',
        status: 'alive',
      },
      {
        chapter: 35,
        description: 'Present, pregnant, at Quicksilver\'s banquet the night of the kidnapping; afterwards hunts Lyria and the kidnappers in fury, clashing with Holiday and Virginia.',
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
    firstAppearance: 2,
    relationships: [
      { targetId: 'darrow', type: 'parent', revealedAtChapter: 0 },
      { targetId: 'mustang', type: 'parent', revealedAtChapter: 0 },
      { targetId: 'electra', type: 'friend', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 2,
        description: 'Son of Darrow and Virginia. Named after Pax au Telemanus. A young Gold raised in the Republic.',
        status: 'alive',
      },
      {
        chapter: 35,
        description: 'Kidnapped with Electra when the Telemanus shuttle is downed over Hyperion by Ephraim\'s Syndicate-hired crew.',
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
    firstAppearance: 2,
    relationships: [
      { targetId: 'sevro', type: 'parent', revealedAtChapter: 0 },
      { targetId: 'victra', type: 'parent', revealedAtChapter: 0 },
      { targetId: 'pax-augustus', type: 'friend', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 2,
        description: 'Daughter of Sevro and Victra. A fierce young Gold who takes after her parents.',
        status: 'alive',
      },
      {
        chapter: 35,
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
    firstAppearance: 2,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 2 },
    ],
    progressiveInfo: [
      {
        chapter: 2,
        description: 'Senator O\'Faran, leader of the Vox Populi bloc in the Senate. Darrow\'s old mentor and former Sons of Ares leader; now his chief political opponent.',
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
    firstAppearance: 2,
    relationships: [
      { targetId: 'niobe', type: 'spouse', revealedAtChapter: 2 },
      { targetId: 'daxo', type: 'parent', revealedAtChapter: 2 },
      { targetId: 'thraxa', type: 'parent', revealedAtChapter: 1 },
      { targetId: 'mustang', type: 'ally', revealedAtChapter: 2 },
    ],
    progressiveInfo: [
      {
        chapter: 2,
        description: 'Patriarch of House Telemanus; Praetor, "Eaglebreaker." Hosts Darrow\'s family at Silene Manor.',
        status: 'alive',
        additionalDetails: 'His daughter Thraxa lost her left arm to Atalantia au Grimmus\'s razor.',
      },
      {
        chapter: 35,
        description: 'Aboard the downed shuttle, fights the gas drone until he is the last to fall; shot by Volga during the boarding.',
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
    firstAppearance: 3,
    relationships: [
      { targetId: 'kavax', type: 'parent', revealedAtChapter: 3 },
      { targetId: 'mustang', type: 'ally', revealedAtChapter: 3 },
    ],
    progressiveInfo: [
      {
        chapter: 3,
        description: 'Senator and Mustang\'s closest political ally; bald, with golden angels tattooed on his scalp; sketches angels at dinner.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'holiday',
    name: 'Holiday ti Nakamura',
    aliases: ['The Howler'],
    color: 'Gray',
    firstAppearance: 1,
    relationships: [
      { targetId: 'trigg', type: 'sibling', revealedAtChapter: 14 },
      { targetId: 'ephraim', type: 'ally', revealedAtChapter: 14 },
      { targetId: 'mustang', type: 'ally', revealedAtChapter: 1 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'Howler and head of Darrow\'s bodyguard on Mercury.',
        status: 'alive',
      },
      {
        chapter: 14,
        description: 'Visits Ephraim, her dead brother Trigg\'s fiancé, on Trigg\'s birthday.',
        status: 'alive',
      },
      {
        chapter: 44,
        description: 'Now "special envoy of the Sovereign"; arrests Lyria as a witness.',
        status: 'alive',
      },
      {
        chapter: 50,
        description: 'Discovers her brother-in-law is the man who kidnapped the children.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'theodora',
    name: 'Theodora',
    aliases: ['The Spymaster'],
    color: 'Pink',
    firstAppearance: 49,
    relationships: [
      { targetId: 'mustang', type: 'ally', revealedAtChapter: 49 },
    ],
    progressiveInfo: [
      {
        chapter: 49,
        description: 'Serves as the Sovereign\'s spymaster. Helped Darrow get into Deepgrave to release Apollonius.',
        status: 'alive',
        additionalDetails: 'Elderly Pink; sits on Lyria\'s interrogation with Daxo and Holiday.',
      },
    ],
  },
  {
    id: 'wulfgar',
    name: 'Wulfgar',
    aliases: ['The Whitetooth', 'ArchWarden'],
    color: 'Obsidian',
    firstAppearance: 1,
    relationships: [
      { targetId: 'mustang', type: 'ally', revealedAtChapter: 3 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'ArchWarden of the Republic. A respected Obsidian warrior who carries the legacy of Ragnar.',
        status: 'alive',
      },
      {
        chapter: 21,
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
    firstAppearance: 25,
    relationships: [
      { targetId: 'dido', type: 'spouse', revealedAtChapter: 26 },
      { targetId: 'seraphina', type: 'parent', revealedAtChapter: 25 },
      { targetId: 'diomedes', type: 'parent', revealedAtChapter: 25 },
      { targetId: 'marius', type: 'parent', revealedAtChapter: 25 },
    ],
    progressiveInfo: [
      {
        chapter: 25,
        description: 'Sovereign of the Rim Dominion. Lost his right arm, son Aeneas, and one eye at the Battle of Ilium.',
        status: 'alive',
        additionalDetails: 'Commands profound respect even from his captors.',
      },
      {
        chapter: 26,
        description: 'Deposed and seized in a coup led by his wife Dido, who wants war with the Republic.',
        status: 'alive',
      },
      {
        chapter: 61,
        description: 'Confesses at trial that he knew Darrow destroyed the docks and conspired to hide it.',
        status: 'alive',
        additionalDetails: 'Accepts responsibility knowing it means death.',
      },
      {
        chapter: 62,
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
    firstAppearance: 26,
    relationships: [
      { targetId: 'romulus', type: 'spouse', revealedAtChapter: 26 },
      { targetId: 'seraphina', type: 'parent', revealedAtChapter: 26 },
      { targetId: 'diomedes', type: 'parent', revealedAtChapter: 26 },
      { targetId: 'marius', type: 'parent', revealedAtChapter: 26 },
    ],
    progressiveInfo: [
      {
        chapter: 26,
        description: 'Wife of Romulus, born Dido au Saud of Venus, mother of seven. Leads a coup against her husband to drag the Rim into war with the Republic.',
        status: 'alive',
        additionalDetails: 'Venusian by birth. Seven children, including Seraphina, Diomedes and Marius.',
      },
      {
        chapter: 61,
        description: 'Horrified when Romulus confesses - she only sought to remove him from power, not have him executed.',
        status: 'alive',
      },
      {
        chapter: 63,
        description: 'Grieving Romulus, accepts Lysander\'s offer to serve as her envoy to the Core.',
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
      { targetId: 'romulus', type: 'parent', revealedAtChapter: 25 },
      { targetId: 'dido', type: 'parent', revealedAtChapter: 26 },
      { targetId: 'diomedes', type: 'sibling', revealedAtChapter: 20 },
      { targetId: 'marius', type: 'sibling', revealedAtChapter: 20 },
      { targetId: 'lysander', type: 'ally', revealedAtChapter: 8 },
    ],
    progressiveInfo: [
      {
        chapter: 8,
        description: 'A Gold woman found naked and tortured on an Ascomanni-held derelict; refuses to give her name.',
        status: 'alive',
      },
      {
        chapter: 41,
        description: 'Volunteers (ch 38) and then duels the exhausted Cassius, disarming and mortally wounding him before Lysander\'s revelation halts the fight.',
        status: 'alive',
        additionalDetails: 'Fights in the Rim\'s Shadowfall style: "Not as fast as Darrow, not as strong as Aja, but smoother than either."',
      },
      {
        chapter: 47,
        description: 'Her holodrop, recovered from the Archimedes\' safe, is played for the Rim: proof the Reaper destroyed the Ganymede Docks.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'diomedes',
    name: 'Diomedes au Raa',
    aliases: ['The Storm Knight'],
    color: 'Gold',
    house: 'Raa',
    firstAppearance: 20,
    relationships: [
      { targetId: 'romulus', type: 'parent', revealedAtChapter: 25 },
      { targetId: 'dido', type: 'parent', revealedAtChapter: 26 },
      { targetId: 'seraphina', type: 'sibling', revealedAtChapter: 20 },
      { targetId: 'marius', type: 'sibling', revealedAtChapter: 20 },
    ],
    progressiveInfo: [
      {
        chapter: 20,
        description: 'The Rim\'s Storm Knight, an Olympic Knight; "the Sword of Io," one of six blademasters left in the Rim. Trained with the Arcos on Europa and became a "stormson."',
        status: 'alive',
        additionalDetails: 'Son of Romulus and Dido. Brother to Seraphina and Marius.',
      },
      {
        chapter: 26,
        description: 'Draws on his cousin Bellerephon and Dido\'s men to defend his father during the coup, until Dido calls a halt.',
        status: 'alive',
      },
      {
        chapter: 61,
        description: 'Devastated by his father\'s confession. Watches helplessly as Romulus is sentenced to death.',
        status: 'alive',
      },
      {
        chapter: 62,
        description: 'Watches his father walk to the Dragon Tomb.',
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
    firstAppearance: 20,
    relationships: [
      { targetId: 'romulus', type: 'parent', revealedAtChapter: 25 },
      { targetId: 'dido', type: 'parent', revealedAtChapter: 26 },
      { targetId: 'seraphina', type: 'sibling', revealedAtChapter: 20 },
      { targetId: 'diomedes', type: 'sibling', revealedAtChapter: 20 },
    ],
    progressiveInfo: [
      {
        chapter: 20,
        description: 'Marius au Raa, son of Romulus and Dido, brother of Seraphina and Diomedes.',
        status: 'alive',
      },
      {
        chapter: 25,
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
      { targetId: 'lysander', type: 'mentor', revealedAtChapter: 8 },
    ],
    progressiveInfo: [
      {
        chapter: 8,
        description: 'Living in exile for a decade with Lysander on the Archimedes. Uses the alias Regulus au Janus.',
        status: 'alive',
        additionalDetails: 'Chose exile over continuing the cycle of violence. Guardian to Lysander.',
      },
      {
        chapter: 40,
        description: 'Fights the Raa bloodfeud duels before the Moon Lords: defeats Bellerephon (son of Atlas au Raa, a Shadowfall "shade"), Fabera and Bellagra despite mounting wounds.',
        status: 'alive',
        additionalDetails: 'Wins against Bellerephon, Fabera, and Bellagra despite being wounded.',
      },
      {
        chapter: 41,
        description: 'Seraphina steps forward to duel him. Exhausted from previous fights, Cassius cannot defeat her.',
        status: 'alive',
      },
      {
        chapter: 47,
        description: 'Collapses from his wounds after Lysander\'s revelation; asks "what have you done?" and is carried off by Diomedes\'s Olympic Knights. Lysander later speaks of him as dead.',
        status: 'unknown',
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
      { targetId: 'lysander', type: 'mentor', revealedAtChapter: 8 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Former ArchImperator to Octavia. Lysander\'s godfather. Commands Society Remnant forces on Mercury.',
        status: 'alive',
      },
      {
        chapter: 60,
        description: 'Discovered to be a dying husk. Reveals that Atalantia has been commanding Society forces. Taunts Darrow about his kidnapped son. Takes poison to deny Darrow information about Pax. Burned alive by Apollonius while the poison takes effect.',
        status: 'dead',
        additionalDetails: 'Barely a third of the man remains - emaciated, skeletal. Darrow, Sevro, and Apollonius watch him burn. The war continues.',
      },
    ],
  },
  {
    id: 'atalantia',
    name: 'Atalantia au Grimmus',
    aliases: ['The Last Fury'],
    color: 'Gold',
    house: 'Grimmus',
    firstAppearance: 1,
    relationships: [
      { targetId: 'ash-lord', type: 'parent', revealedAtChapter: 5 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'Daughter of the Ash Lord, "the Last Fury." Took Thraxa au Telemanus\'s arm.',
        status: 'alive',
      },
      {
        chapter: 60,
        description: 'Revealed to be the true commander of Society forces. Has been leading from the shadows.',
        status: 'alive',
        additionalDetails: 'The last surviving Fury after Aja\'s death.',
      },
      {
        chapter: 65,
        description: 'Her fleet is believed to be falling on the half-strength Republic fleet over Mercury; the attack itself is not shown.',
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
    firstAppearance: 28,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 28 },
    ],
    progressiveInfo: [
      {
        chapter: 28,
        description: 'Released from Deepgrave prison by Darrow. Spent six years in solitary, remaking himself.',
        status: 'alive',
        additionalDetails: 'Eloquent, narcissistic, extremely dangerous. Has an explosive in his brain as insurance.',
      },
      {
        chapter: 46,
        description: 'Learns his brother Tharsus sold him out; cuts off Tharsus\'s ear when they capture him on Venus.',
        status: 'alive',
      },
      {
        chapter: 60,
        description: 'Burns the Ash Lord alive using antibacterial spray and a candle, taking satisfaction in his revenge.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'atlas',
    name: 'Atlas au Raa',
    aliases: ['The Fear Knight'],
    color: 'Gold',
    house: 'Raa',
    firstAppearance: 38,
    relationships: [],
    progressiveInfo: [
      {
        chapter: 38,
        description: 'Father of Bellerephon au Raa. Named only in passing in this book.',
        status: 'alive',
        additionalDetails: 'The "Fear Knight" is invoked as a bogeyman in the Senate (ch 11). His history is not given in Iron Gold.',
      },
    ],
  },

  // ========== THE SYNDICATE ==========
  {
    id: 'duke-of-hands',
    name: 'The Duke of Hands',
    aliases: [],
    color: 'Pink',
    firstAppearance: 18,
    relationships: [
      { targetId: 'ephraim', type: 'ally', revealedAtChapter: 18 },
    ],
    progressiveInfo: [
      {
        chapter: 18,
        description: 'A Pink crimelord in the Syndicate. Carries an ivory cane with an onyx octopus handle.',
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
    firstAppearance: 18,
    relationships: [
      { targetId: 'duke-of-hands', type: 'ally', revealedAtChapter: 18 },
    ],
    progressiveInfo: [
      {
        chapter: 18,
        description: 'The mysterious leader of the Syndicate. Rose to power after the Society fell.',
        status: 'alive',
        additionalDetails: 'Her identity remains unknown. Commands absolute fear.',
      },
      {
        chapter: 50,
        description: 'The Sovereign explains the Syndicate: a woman who united and purged Luna\'s gangs after the fall; the octopus is her symbol.',
        status: 'alive',
      },
      {
        chapter: 64,
        description: 'Speaks to Ephraim as a rasping disembodied head and seizes control of his ship.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'volga',
    name: 'Volga Fjorgan',
    aliases: [],
    color: 'Obsidian',
    firstAppearance: 6,
    relationships: [
      { targetId: 'ephraim', type: 'friend', revealedAtChapter: 6 },
    ],
    progressiveInfo: [
      {
        chapter: 6,
        description: 'A young Obsidian woman who works with Ephraim. Huge and pale with white hair.',
        status: 'alive',
        additionalDetails: 'Born in a Society breeding program but deemed defective.',
      },
      {
        chapter: 39,
        description: 'Participates in the kidnapping despite her moral qualms.',
        status: 'alive',
      },
      {
        chapter: 42,
        description: 'Wrestled down by Syndicate Obsidians at the hand-off but released; watches Cyra murdered.',
        status: 'alive',
      },
      {
        chapter: 51,
        description: 'Confronts Ephraim about his zoladone and his cruelty ("If I was not a weapon..."); she is then taken by the Republic as the hostage guaranteeing Ephraim\'s cooperation.',
        status: 'alive',
        additionalDetails: 'Tells him she did the job to have his back, "like you have mine."',
      },
    ],
  },

  // ========== OTHER CHARACTERS ==========
  {
    id: 'liam',
    name: 'Liam',
    aliases: [],
    color: 'Red',
    firstAppearance: 5,
    relationships: [
      { targetId: 'lyria', type: 'ally', revealedAtChapter: 5 },
    ],
    progressiveInfo: [
      {
        chapter: 5,
        description: 'Lyria\'s little nephew, blind from birth and her favorite.',
        status: 'alive',
      },
      {
        chapter: 13,
        description: 'The only other survivor, along with Lyria, of the Red Hand\'s massacre of Camp 121.',
        status: 'alive',
      },
      {
        chapter: 17,
        description: 'Kavax declares him a knight for his bravery.',
        status: 'alive',
      },
      {
        chapter: 23,
        description: 'Enrolled at the Citadel school on Luna by Kavax.',
        status: 'alive',
      },
      {
        chapter: 59,
        description: 'Lyria bargains with the Sovereign for Liam\'s care and the restoration of his eyesight.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'trigg',
    name: 'Trigg ti Nakamura',
    aliases: [],
    color: 'Gray',
    firstAppearance: 14,
    relationships: [
      { targetId: 'ephraim', type: 'lover', revealedAtChapter: 14 },
      { targetId: 'holiday', type: 'sibling', revealedAtChapter: 14 },
    ],
    progressiveInfo: [
      {
        chapter: 14,
        description: 'Ephraim\'s late fiancé, killed on a Martian peak during the Rising (Morning Star). His death broke Ephraim.',
        status: 'dead',
      },
    ],
  },
  {
    id: 'quicksilver',
    name: 'Regulus ag Sun',
    aliases: ['Quicksilver'],
    color: 'Silver',
    firstAppearance: 16,
    relationships: [
      { targetId: 'mustang', type: 'ally', revealedAtChapter: 16 },
    ],
    progressiveInfo: [
      {
        chapter: 16,
        description: 'Richest man in the Republic; backs Darrow\'s Deepgrave plan at the Howler tower.',
        status: 'alive',
      },
      {
        chapter: 35,
        description: 'Hosts the banquet the Telemanus party attends the night of the kidnapping.',
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
    aliases: [],
    color: 'Gold',
    house: 'Arcos',
    firstAppearance: 16,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 16 },
    ],
    progressiveInfo: [
      {
        chapter: 16,
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
    firstAppearance: 3,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 16 },
    ],
    progressiveInfo: [
      {
        chapter: 3,
        description: 'Darrow\'s niece, Kieran\'s daughter. A Red of Lykos now serving in the Republic\'s forces.',
        status: 'alive',
      },
      {
        chapter: 16,
        description: 'Darrow\'s niece, Kieran\'s eldest daughter, twenty, buzzed head; a lancer for one year and eager to match Alexandar.',
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
    firstAppearance: 1,
    relationships: [
      { targetId: 'kavax', type: 'parent', revealedAtChapter: 1 },
      { targetId: 'niobe', type: 'parent', revealedAtChapter: 2 },
      { targetId: 'daxo', type: 'sibling', revealedAtChapter: 2 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: '"The Hammer." Daughter of Kavax and Niobe; lost her left arm to Atalantia au Grimmus\'s razor and wears a Sun Industries metal prosthetic. Leads the Seventh Legion remnant at the Triumph.',
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
    firstAppearance: 2,
    relationships: [
      { targetId: 'kavax', type: 'spouse', revealedAtChapter: 2 },
      { targetId: 'daxo', type: 'parent', revealedAtChapter: 2 },
      { targetId: 'thraxa', type: 'parent', revealedAtChapter: 2 },
    ],
    progressiveInfo: [
      {
        chapter: 2,
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
    firstAppearance: 1,
    relationships: [],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'Queen of the Valkyrie and sister to Ragnar. Leader of the Obsidian people.',
        status: 'alive',
      },
      {
        chapter: 16,
        description: 'Withdraws the Obsidians from Darrow\'s cause after the Senate vote and Wulfgar\'s fate looms; "I will save a seat for you in the mead hall."',
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
