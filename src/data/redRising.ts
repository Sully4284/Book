import type { Book, Character, FamilyGroup } from '../types';

// Red Rising chapters
const chapters = [
  { number: 0, title: 'Prologue' },
  { number: 1, title: 'Helldiver' },
  { number: 2, title: 'The Township' },
  { number: 3, title: 'The Laurel' },
  { number: 4, title: 'The Gift' },
  { number: 5, title: 'The First Song' },
  { number: 6, title: 'The Martyr' },
  { number: 7, title: 'Lazarus' },
  { number: 8, title: 'Dancer' },
  { number: 9, title: 'The Lie' },
  { number: 10, title: 'The Carver' },
  { number: 11, title: 'Mad' },
  { number: 12, title: 'The Carving' },
  { number: 13, title: 'Bad Things' },
  { number: 14, title: 'Andromedus' },
  { number: 15, title: 'The Testing' },
  { number: 16, title: 'The Institute' },
  { number: 17, title: 'The Draft' },
  { number: 18, title: 'Classmates' },
  { number: 19, title: 'The Passage' },
  { number: 20, title: 'The House Mars' },
  { number: 21, title: 'Our Dominion' },
  { number: 22, title: 'The Tribes' },
  { number: 23, title: 'Fracture' },
  { number: 24, title: "Titus's War" },
  { number: 25, title: 'Tribal War' },
  { number: 26, title: 'Mustang' },
  { number: 27, title: 'The House of Rage' },
  { number: 28, title: 'My Brother' },
  { number: 29, title: 'Unity' },
  { number: 30, title: 'House Diana' },
  { number: 31, title: 'The Fall of Mustang' },
  { number: 32, title: 'Antonia' },
  { number: 33, title: 'Apologies' },
  { number: 34, title: 'The Northwoods' },
  { number: 35, title: 'Oathbreakers' },
  { number: 36, title: 'A Second Test' },
  { number: 37, title: 'South' },
  { number: 38, title: 'The Fall of Apollo' },
  { number: 39, title: "The Proctor's Bounty" },
  { number: 40, title: 'Paradigm' },
  { number: 41, title: 'The Jackal' },
  { number: 42, title: 'War on Heaven' },
  { number: 43, title: 'The Last Test' },
  { number: 44, title: 'Rise' },
];

const characters: Character[] = [
  // MAIN PROTAGONIST
  {
    id: 'darrow',
    name: 'Darrow',
    aliases: ['The Reaper', 'Darrow of Lykos', 'Darrow au Andromedus'],
    color: 'Red',
    house: 'Mars',
    firstAppearance: 1,
    relationships: [
      { targetId: 'eo', type: 'spouse', revealedAtChapter: 1 },
      { targetId: 'kieran', type: 'sibling', revealedAtChapter: 1 },
      { targetId: 'leanna', type: 'sibling', revealedAtChapter: 1 },
      { targetId: 'mother-darrow', type: 'parent', revealedAtChapter: 1 },
      { targetId: 'father-darrow', type: 'parent', revealedAtChapter: 1 },
      { targetId: 'narol', type: 'ally', revealedAtChapter: 1, description: 'Uncle' },
      { targetId: 'dancer', type: 'mentor', revealedAtChapter: 7 },
      { targetId: 'cassius', type: 'friend', revealedAtChapter: 17 },
      { targetId: 'mustang', type: 'ally', revealedAtChapter: 26 },
      { targetId: 'sevro', type: 'friend', revealedAtChapter: 20 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'A young Helldiver from the mining colony of Lykos on Mars. Known for his exceptional skill in operating the clawDrill.',
        status: 'alive',
      },
      {
        chapter: 3,
        description: 'Youngest Helldiver in memory. Married to Eo. Son of a man who was hanged for the Dancer\'s Rebellion.',
        status: 'alive',
        additionalDetails: 'His father was executed for peaceful protest against the Society.',
      },
      {
        chapter: 6,
        description: 'After Eo\'s execution, Darrow attempts to join her in death by cutting her down and burying her - a crime punishable by hanging.',
        status: 'alive',
      },
      {
        chapter: 7,
        description: 'Rescued from execution by the Sons of Ares. His uncle Narol drugged him and helped fake his death.',
        status: 'alive',
        additionalDetails: 'Extracted by rebels who see potential in him.',
      },
      {
        chapter: 12,
        description: 'Undergoes extreme body modification by Mickey the Carver to transform from a Red into a Gold.',
        status: 'alive',
        additionalDetails: 'Physical transformation includes bone density enhancement, new eyes, and complete reshaping of his body.',
      },
      {
        chapter: 16,
        description: 'Enters the Institute under the identity of Darrow au Andromedus. Drafted first by House Mars.',
        status: 'alive',
      },
      {
        chapter: 19,
        description: 'Forced to kill Julian au Bellona in the Passage - the brutal trial where Gold students must kill their paired opponent to advance.',
        status: 'alive',
        additionalDetails: 'Deeply traumatized by being forced to murder an innocent.',
      },
      {
        chapter: 24,
        description: 'Leads a faction against Titus au Ladros within House Mars. Earns the nickname "Reaper" for his deadly efficiency.',
        status: 'alive',
      },
    ],
  },

  // DARROW'S FAMILY
  {
    id: 'eo',
    name: 'Eo',
    aliases: ['Little Eo', 'Persephone'],
    color: 'Red',
    firstAppearance: 1,
    relationships: [
      { targetId: 'darrow', type: 'spouse', revealedAtChapter: 1 },
      { targetId: 'dio', type: 'sibling', revealedAtChapter: 1 },
      { targetId: 'liam', type: 'sibling', revealedAtChapter: 1 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'Darrow\'s wife. A dreamer who believes Reds deserve freedom. Small in stature but fierce in spirit.',
        status: 'alive',
      },
      {
        chapter: 4,
        description: 'Shows Darrow a hidden garden with real stars - proof that Mars has been terraformed. Asks him to fight for their people\'s freedom.',
        status: 'alive',
      },
      {
        chapter: 5,
        description: 'After being caught in the forbidden garden, Eo sings the banned song "The Song of Persephone" in defiance - knowing it means death.',
        status: 'alive',
      },
      {
        chapter: 6,
        description: 'Executed by hanging for singing the forbidden song. Darrow is forced to pull her feet to end her suffering.',
        status: 'dead',
        additionalDetails: 'Her death becomes a rallying cry for the rebellion. The Sons of Ares broadcast her song across Mars.',
      },
    ],
  },
  {
    id: 'kieran',
    name: 'Kieran',
    color: 'Red',
    firstAppearance: 1,
    relationships: [
      { targetId: 'darrow', type: 'sibling', revealedAtChapter: 1 },
      { targetId: 'leanna', type: 'sibling', revealedAtChapter: 1 },
      { targetId: 'mother-darrow', type: 'parent', revealedAtChapter: 1 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'Darrow\'s older brother. Three years his senior. Works in the mines of Lykos.',
        status: 'alive',
      },
      {
        chapter: 3,
        description: 'Has a wife and twin children. Known to be more cautious than Darrow.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'leanna',
    name: 'Leanna',
    color: 'Red',
    firstAppearance: 1,
    relationships: [
      { targetId: 'darrow', type: 'sibling', revealedAtChapter: 1 },
      { targetId: 'kieran', type: 'sibling', revealedAtChapter: 1 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'Darrow\'s sister. Tall and quiet like their mother.',
        status: 'alive',
      },
      {
        chapter: 6,
        description: 'Works in the Webbery. Silently witnesses Darrow taking Eo\'s body for burial.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'mother-darrow',
    name: 'Deanna',
    color: 'Red',
    firstAppearance: 1,
    relationships: [
      { targetId: 'darrow', type: 'child', revealedAtChapter: 1 },
      { targetId: 'kieran', type: 'child', revealedAtChapter: 1 },
      { targetId: 'leanna', type: 'child', revealedAtChapter: 1 },
      { targetId: 'father-darrow', type: 'spouse', revealedAtChapter: 1 },
      { targetId: 'narol', type: 'sibling', revealedAtChapter: 1, description: 'Brother-in-law' },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'A woman who has seen hardship. Lost her husband to execution. Makes blood soup from pitvipers.',
        status: 'alive',
      },
      {
        chapter: 6,
        description: 'Knows Darrow will try to die after Eo\'s death but does not stop him - letting men make their own choices.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'father-darrow',
    name: 'Dale',
    color: 'Red',
    firstAppearance: 1,
    relationships: [
      { targetId: 'darrow', type: 'child', revealedAtChapter: 1 },
      { targetId: 'kieran', type: 'child', revealedAtChapter: 1 },
      { targetId: 'leanna', type: 'child', revealedAtChapter: 1 },
      { targetId: 'mother-darrow', type: 'spouse', revealedAtChapter: 1 },
      { targetId: 'narol', type: 'sibling', revealedAtChapter: 1 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'Executed by hanging for leading the Dancer\'s Rebellion - a peaceful protest for increased food rations.',
        status: 'dead',
        additionalDetails: 'His legacy haunts Darrow. Nine men were hanged, but he was last, dying doing the Devil\'s Dance.',
      },
    ],
  },
  {
    id: 'narol',
    name: 'Uncle Narol',
    color: 'Red',
    firstAppearance: 1,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 1 },
      { targetId: 'father-darrow', type: 'sibling', revealedAtChapter: 1 },
      { targetId: 'dancer', type: 'ally', revealedAtChapter: 7 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'HeadTalk for the Lambda clan\'s mining crew. A drunk who seems like a pale shadow of Darrow\'s father.',
        status: 'alive',
      },
      {
        chapter: 3,
        description: 'Taught Darrow to dance, including the forbidden Reaping Dance. Once the best dancer in Lykos.',
        status: 'alive',
      },
      {
        chapter: 7,
        description: 'Revealed to be a secret agent for the Sons of Ares. Drugged Darrow and faked his death to save him.',
        status: 'alive',
        additionalDetails: 'Has been an informer for the rebellion since before Darrow\'s father\'s death.',
      },
    ],
  },
  {
    id: 'dio',
    name: 'Dio',
    color: 'Red',
    firstAppearance: 3,
    relationships: [
      { targetId: 'eo', type: 'sibling', revealedAtChapter: 1 },
      { targetId: 'loran', type: 'spouse', revealedAtChapter: 3 },
    ],
    progressiveInfo: [
      {
        chapter: 3,
        description: 'Eo\'s sister, twin in looks. Married to Loran.',
        status: 'alive',
      },
      {
        chapter: 6,
        description: 'Receives Eo\'s final words before her execution. Whatever Eo told her causes her to wail in grief.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'loran',
    name: 'Loran',
    color: 'Red',
    firstAppearance: 1,
    relationships: [
      { targetId: 'narol', type: 'parent', revealedAtChapter: 1 },
      { targetId: 'darrow', type: 'friend', revealedAtChapter: 1 },
      { targetId: 'dio', type: 'spouse', revealedAtChapter: 3 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'Darrow\'s cousin and Narol\'s son. Works in the mines.',
        status: 'alive',
      },
      {
        chapter: 3,
        description: 'Once proposed to Eo when she turned fourteen. Married to Dio, Eo\'s sister.',
        status: 'alive',
      },
    ],
  },

  // SONS OF ARES
  {
    id: 'dancer',
    name: 'Dancer',
    color: 'Red',
    firstAppearance: 7,
    relationships: [
      { targetId: 'darrow', type: 'mentor', revealedAtChapter: 7 },
      { targetId: 'harmony', type: 'ally', revealedAtChapter: 7 },
      { targetId: 'narol', type: 'ally', revealedAtChapter: 7 },
    ],
    progressiveInfo: [
      {
        chapter: 7,
        description: 'Leader of the local Sons of Ares cell. A powerful man near Darrow\'s height but older, maybe in his forties.',
        status: 'alive',
      },
      {
        chapter: 8,
        description: 'Former Helldiver from the colony Tyros. His left arm and leg are crippled from pitviper bites. Has many scars on his neck from the venom.',
        status: 'alive',
        additionalDetails: 'Claims not to be Ares himself, but clearly commands the local rebellion.',
      },
      {
        chapter: 9,
        description: 'Reveals the truth to Darrow - that Mars has been terraformed for 300 years and Reds are slaves, not pioneers.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'harmony',
    name: 'Harmony',
    color: 'Red',
    firstAppearance: 7,
    relationships: [
      { targetId: 'dancer', type: 'ally', revealedAtChapter: 7 },
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 7 },
    ],
    progressiveInfo: [
      {
        chapter: 7,
        description: 'A fierce woman with half her face scarred from a steam burn. Beautiful on the unscarred side, cold and angry.',
        status: 'alive',
      },
      {
        chapter: 8,
        description: 'Dancer\'s partner. Filled with rage and hatred for the Golds. Trains Darrow physically.',
        status: 'alive',
        additionalDetails: 'Lost someone dear to her - the unscarred part of her face reveals this pain.',
      },
    ],
  },
  {
    id: 'mickey',
    name: 'Mickey',
    aliases: ['Mickey the Carver'],
    color: 'Violet',
    firstAppearance: 10,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 10 },
      { targetId: 'evey', type: 'ally', revealedAtChapter: 10 },
    ],
    progressiveInfo: [
      {
        chapter: 10,
        description: 'A Violet Carver - a master of biological modification. Thin with black hair and twelve fingers. Runs a club in the Bazaar.',
        status: 'alive',
      },
      {
        chapter: 12,
        description: 'Transforms Darrow from a Red into a Gold through painful surgeries. Views his work as art and Darrow as his masterpiece.',
        status: 'alive',
        additionalDetails: 'Raised in "the Grove" - a circus culture where they took pills that caused visions.',
      },
    ],
  },
  {
    id: 'evey',
    name: 'Evey',
    color: 'Pink',
    firstAppearance: 10,
    relationships: [
      { targetId: 'mickey', type: 'ally', revealedAtChapter: 10 },
    ],
    progressiveInfo: [
      {
        chapter: 10,
        description: 'A Pink girl with white eagle wings carved into her back by Mickey. Quiet and sad, she cares for Darrow during his transformation.',
        status: 'alive',
      },
      {
        chapter: 12,
        description: 'Never speaks but shows kindness to Darrow. Gives him a feather from her wings.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'matteo',
    name: 'Matteo',
    color: 'Pink',
    firstAppearance: 13,
    relationships: [
      { targetId: 'darrow', type: 'mentor', revealedAtChapter: 13 },
    ],
    progressiveInfo: [
      {
        chapter: 13,
        description: 'A tall Pink who teaches Darrow Gold etiquette, manners, and culture. Refined and proper, he does not tolerate Red slang.',
        status: 'alive',
        additionalDetails: 'Former pleasure slave who now serves as a cultural tutor.',
      },
    ],
  },

  // THE SOCIETY - GOLDS
  {
    id: 'nero-augustus',
    name: 'Nero au Augustus',
    aliases: ['The ArchGovernor'],
    color: 'Gold',
    firstAppearance: 5,
    relationships: [
      { targetId: 'mustang', type: 'child', revealedAtChapter: 41 },
      { targetId: 'jackal', type: 'child', revealedAtChapter: 41 },
    ],
    progressiveInfo: [
      {
        chapter: 5,
        description: 'The ArchGovernor of Mars. One of the most powerful Golds. Cold and imperious with a scar on his cheekbone marking him as Peerless Scarred.',
        status: 'alive',
      },
      {
        chapter: 6,
        description: 'Orders Eo\'s execution with casual indifference. Darrow swears vengeance against him.',
        status: 'alive',
        additionalDetails: 'His contempt for lowReds is absolute.',
      },
      {
        chapter: 41,
        description: 'Father of both Mustang (Virginia) and the Jackal (Adrius).',
        status: 'alive',
      },
    ],
  },
  {
    id: 'octavia-lune',
    name: 'Octavia au Lune',
    aliases: ['The Sovereign'],
    color: 'Gold',
    firstAppearance: 2,
    relationships: [],
    progressiveInfo: [
      {
        chapter: 2,
        description: 'The Sovereign Consul who rules the Society from distant Luna. Her ageless face appears on holoCans throughout the mines, speaking of sacrifice and obedience.',
        status: 'alive',
        additionalDetails: 'Bears a crescent scar on her right cheekbone, marking her as Peerless Scarred.',
      },
    ],
  },
  {
    id: 'fitchner',
    name: 'Fitchner au Barca',
    aliases: ['Proctor Mars'],
    color: 'Gold',
    house: 'Mars',
    firstAppearance: 17,
    relationships: [
      { targetId: 'sevro', type: 'child', revealedAtChapter: 44 },
    ],
    progressiveInfo: [
      {
        chapter: 17,
        description: 'The Proctor of House Mars at the Institute. A scraggly, unkempt Gold who seems different from his pristine peers.',
        status: 'alive',
      },
      {
        chapter: 20,
        description: 'Oversees the brutal Passage and the beginning of the Institute games. Shows flashes of dark humor.',
        status: 'alive',
      },
      {
        chapter: 44,
        description: 'Revealed to be Sevro\'s father.',
        status: 'alive',
      },
    ],
  },

  // INSTITUTE - HOUSE MARS ALLIES
  {
    id: 'cassius',
    name: 'Cassius au Bellona',
    color: 'Gold',
    house: 'Mars',
    firstAppearance: 17,
    relationships: [
      { targetId: 'darrow', type: 'friend', revealedAtChapter: 17 },
      { targetId: 'julian', type: 'sibling', revealedAtChapter: 17 },
      { targetId: 'quinn', type: 'ally', revealedAtChapter: 22 },
    ],
    progressiveInfo: [
      {
        chapter: 17,
        description: 'Son of a powerful Bellona family. Handsome, charismatic, and skilled with a blade. Quickly befriends Darrow.',
        status: 'alive',
      },
      {
        chapter: 19,
        description: 'Devastated by his twin brother Julian\'s death in the Passage. Does not know Darrow was Julian\'s killer.',
        status: 'alive',
      },
      {
        chapter: 21,
        description: 'Partners with Darrow to lead a faction within House Mars. Excellent fighter and natural leader.',
        status: 'alive',
      },
      {
        chapter: 28,
        description: 'Discovers that Darrow killed Julian. Their friendship shatters.',
        status: 'alive',
        additionalDetails: 'Stabs Darrow and leaves him for dead.',
      },
    ],
  },
  {
    id: 'julian',
    name: 'Julian au Bellona',
    color: 'Gold',
    house: 'Mars',
    firstAppearance: 17,
    relationships: [
      { targetId: 'cassius', type: 'sibling', revealedAtChapter: 17 },
      { targetId: 'darrow', type: 'enemy', revealedAtChapter: 19 },
    ],
    progressiveInfo: [
      {
        chapter: 17,
        description: 'Cassius\'s twin brother. Kind and gentle, more scholar than warrior.',
        status: 'alive',
      },
      {
        chapter: 19,
        description: 'Paired with Darrow in the Passage. Killed by Darrow when neither could bring themselves to let the other die.',
        status: 'dead',
        additionalDetails: 'Darrow carries immense guilt for his death.',
      },
    ],
  },
  {
    id: 'sevro',
    name: 'Sevro au Barca',
    aliases: ['Goblin'],
    color: 'Gold',
    house: 'Mars',
    firstAppearance: 17,
    relationships: [
      { targetId: 'darrow', type: 'friend', revealedAtChapter: 20 },
      { targetId: 'fitchner', type: 'parent', revealedAtChapter: 44 },
      { targetId: 'quinn', type: 'friend', revealedAtChapter: 22 },
    ],
    progressiveInfo: [
      {
        chapter: 17,
        description: 'The smallest Gold at the Institute. Picked last in the draft. Wild-eyed and feral.',
        status: 'alive',
      },
      {
        chapter: 21,
        description: 'Lives alone in the wilderness, hunting wolves and wearing their skins. Called "Goblin" by the others.',
        status: 'alive',
      },
      {
        chapter: 24,
        description: 'Operates independently but proves to be a valuable scout and survivalist. Has a soft spot for Quinn.',
        status: 'alive',
      },
      {
        chapter: 29,
        description: 'Becomes one of Darrow\'s most loyal followers. Forms the core of the Howlers.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'mustang',
    name: 'Virginia au Augustus',
    aliases: ['Mustang'],
    color: 'Gold',
    house: 'Minerva',
    firstAppearance: 26,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 26 },
      { targetId: 'nero-augustus', type: 'parent', revealedAtChapter: 41 },
      { targetId: 'jackal', type: 'sibling', revealedAtChapter: 41 },
    ],
    progressiveInfo: [
      {
        chapter: 26,
        description: 'A cunning Gold from House Minerva. Earns the nickname "Mustang" for her wild spirit. First encounters Darrow as an enemy.',
        status: 'alive',
      },
      {
        chapter: 31,
        description: 'Her House falls. She becomes a more complex ally to Darrow.',
        status: 'alive',
      },
      {
        chapter: 41,
        description: 'Revealed to be Virginia au Augustus - daughter of the ArchGovernor and twin sister to the Jackal.',
        status: 'alive',
        additionalDetails: 'Her true identity creates complications for Darrow\'s mission.',
      },
    ],
  },
  {
    id: 'roque',
    name: 'Roque au Fabii',
    color: 'Gold',
    house: 'Mars',
    firstAppearance: 17,
    relationships: [
      { targetId: 'darrow', type: 'friend', revealedAtChapter: 17 },
      { targetId: 'lea', type: 'ally', revealedAtChapter: 22 },
    ],
    progressiveInfo: [
      {
        chapter: 17,
        description: 'A poet and philosopher among the Golds. Thoughtful and eloquent.',
        status: 'alive',
      },
      {
        chapter: 22,
        description: 'Joins Darrow\'s faction. Provides strategic insight and moral guidance.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'quinn',
    name: 'Quinn',
    color: 'Gold',
    house: 'Mars',
    firstAppearance: 22,
    relationships: [
      { targetId: 'sevro', type: 'friend', revealedAtChapter: 22 },
      { targetId: 'cassius', type: 'ally', revealedAtChapter: 22 },
    ],
    progressiveInfo: [
      {
        chapter: 22,
        description: 'The fastest runner in House Mars. Known for telling elaborate lies as jokes.',
        status: 'alive',
      },
      {
        chapter: 23,
        description: 'Joins Darrow and Cassius\'s faction. The only one Sevro doesn\'t insult.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'lea',
    name: 'Lea',
    color: 'Gold',
    house: 'Mars',
    firstAppearance: 22,
    relationships: [
      { targetId: 'roque', type: 'ally', revealedAtChapter: 22 },
    ],
    progressiveInfo: [
      {
        chapter: 22,
        description: 'A meek Gold who follows Roque everywhere. Part of Darrow\'s "Dregs" faction.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'pax',
    name: 'Pax au Telemanus',
    color: 'Gold',
    house: 'Mars',
    firstAppearance: 29,
    relationships: [
      { targetId: 'darrow', type: 'friend', revealedAtChapter: 29 },
    ],
    progressiveInfo: [
      {
        chapter: 29,
        description: 'A massive Gold from House Mars. Incredibly strong and loyal. Becomes one of Darrow\'s closest allies.',
        status: 'alive',
      },
    ],
  },

  // INSTITUTE - ANTAGONISTS
  {
    id: 'titus',
    name: 'Titus au Ladros',
    color: 'Gold',
    house: 'Mars',
    firstAppearance: 20,
    relationships: [
      { targetId: 'darrow', type: 'enemy', revealedAtChapter: 22 },
      { targetId: 'vixus', type: 'ally', revealedAtChapter: 22 },
    ],
    progressiveInfo: [
      {
        chapter: 20,
        description: 'A brutal, massive Gold in House Mars. Quickly gathers followers through intimidation.',
        status: 'alive',
      },
      {
        chapter: 24,
        description: 'Leads savage raids against House Ceres. Uses violence and terror as tools. Darrow suspects he is actually a Red like himself.',
        status: 'alive',
      },
      {
        chapter: 25,
        description: 'His brutality leads to conflict with Darrow. Executed by the Proctors for excessive violence.',
        status: 'dead',
        additionalDetails: 'Confirmed to be a Red who was transformed like Darrow, but who embraced cruelty.',
      },
    ],
  },
  {
    id: 'antonia',
    name: 'Antonia au Severus',
    color: 'Gold',
    house: 'Mars',
    firstAppearance: 20,
    relationships: [
      { targetId: 'darrow', type: 'enemy', revealedAtChapter: 22 },
    ],
    progressiveInfo: [
      {
        chapter: 20,
        description: 'A tall, manipulative Gold. Uses politics and manipulation rather than direct violence.',
        status: 'alive',
      },
      {
        chapter: 22,
        description: 'Undermines attempts at unity in House Mars. Plays factions against each other.',
        status: 'alive',
      },
      {
        chapter: 32,
        description: 'Betrays House Mars. Her treachery causes significant losses.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'jackal',
    name: 'Adrius au Augustus',
    aliases: ['The Jackal'],
    color: 'Gold',
    house: 'Minerva',
    firstAppearance: 41,
    relationships: [
      { targetId: 'mustang', type: 'sibling', revealedAtChapter: 41 },
      { targetId: 'nero-augustus', type: 'parent', revealedAtChapter: 41 },
    ],
    progressiveInfo: [
      {
        chapter: 41,
        description: 'The cunning and ruthless leader of House Minerva\'s forces. Son of the ArchGovernor. Twin brother to Mustang.',
        status: 'alive',
        additionalDetails: 'Known for his intelligence and complete lack of morals. Builds power in the southern mountains.',
      },
    ],
  },
  {
    id: 'vixus',
    name: 'Vixus',
    color: 'Gold',
    house: 'Mars',
    firstAppearance: 22,
    relationships: [
      { targetId: 'titus', type: 'ally', revealedAtChapter: 22 },
    ],
    progressiveInfo: [
      {
        chapter: 22,
        description: 'Titus\'s right hand. Has dead, hawk-like eyes and takes pleasure in violence.',
        status: 'alive',
      },
      {
        chapter: 23,
        description: 'Darrow attacks him in the halls, nearly killing him with a single blow to demonstrate his power.',
        status: 'alive',
      },
    ],
  },

  // GRAYS AND OTHERS
  {
    id: 'ugly-dan',
    name: 'Ugly Dan',
    color: 'Gray',
    firstAppearance: 2,
    relationships: [],
    progressiveInfo: [
      {
        chapter: 2,
        description: 'A Gray captain in Lykos. Has a replacement arm from when he was crippled on the frontlines. Cruel and contemptuous of Reds.',
        status: 'alive',
      },
      {
        chapter: 5,
        description: 'Arrests Darrow and Eo for trespassing in the forbidden garden.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'podginus',
    name: 'Timony cu Podginus',
    aliases: ['MineMagistrate Podginus'],
    color: 'Copper',
    firstAppearance: 3,
    relationships: [],
    progressiveInfo: [
      {
        chapter: 3,
        description: 'The MineMagistrate of Lykos. A small Copper-haired man who oversees the miners. Speaks in flowery, condescending language.',
        status: 'alive',
      },
      {
        chapter: 5,
        description: 'Presides over Eo\'s trial and execution. Shows no mercy.',
        status: 'alive',
      },
    ],
  },
];

// Family groupings for the tree view
export const familyGroups: FamilyGroup[] = [
  {
    id: 'darrow-family',
    name: 'Darrow\'s Family',
    members: ['darrow', 'eo', 'kieran', 'leanna', 'mother-darrow', 'father-darrow', 'narol', 'loran', 'dio'],
  },
  {
    id: 'augustus-family',
    name: 'House Augustus',
    members: ['nero-augustus', 'mustang', 'jackal'],
  },
  {
    id: 'bellona-family',
    name: 'House Bellona',
    members: ['cassius', 'julian'],
  },
  {
    id: 'sons-of-ares',
    name: 'Sons of Ares',
    members: ['dancer', 'harmony', 'mickey', 'evey', 'matteo', 'narol'],
  },
  {
    id: 'house-mars',
    name: 'House Mars (Institute)',
    members: ['darrow', 'cassius', 'sevro', 'roque', 'quinn', 'lea', 'pax', 'titus', 'antonia', 'vixus', 'julian'],
  },
];

export const redRisingBook: Book = {
  id: 'red-rising',
  title: 'Red Rising',
  author: 'Pierce Brown',
  chapters,
  characters,
};
