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
    aliases: ['The Reaper', 'Darrow au Andromedus'],
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
        chapter: 17,
        description: 'Enters the Institute under the identity of Darrow au Andromedus. Drafted tenth overall by House Mars.',
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
        description: 'Leads a faction against Titus au Ladros within House Mars. Already dubbed "Reaper" (from ch 21) for the curved slingBlade he chose as his weapon.',
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
      { targetId: 'dio', type: 'sibling', revealedAtChapter: 3 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'Darrow\'s wife. A dreamer who believes Reds deserve freedom. Small in stature but fierce in spirit.',
        status: 'alive',
      },
      {
        chapter: 4,
        description: 'Shows Darrow a hidden garden open to the night sky and real stars, and asks him to fight for something more than the Laurel.',
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
        description: 'Has a wife and three-year-old twins, a son and a daughter.',
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
        description: 'Darrow\'s sister, who murmurs a lament at their father\'s hanging.',
        status: 'alive',
      },
      {
        chapter: 6,
        description: 'Tall and quiet like their mother. Works in the Webbery. Silently witnesses Darrow taking Eo\'s body for burial.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'mother-darrow',
    name: "Darrow's Mother",
    color: 'Red',
    firstAppearance: 1,
    relationships: [
      { targetId: 'darrow', type: 'child', revealedAtChapter: 1 },
      { targetId: 'kieran', type: 'child', revealedAtChapter: 1 },
      { targetId: 'leanna', type: 'child', revealedAtChapter: 1 },
      { targetId: 'father-darrow', type: 'spouse', revealedAtChapter: 1 },
      { targetId: 'narol', type: 'ally', revealedAtChapter: 1, description: 'Brother-in-law' },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'A woman who has seen hardship. Lost her husband to execution.',
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
    name: "Darrow's Father",
    progressiveNames: [
      { chapter: 1, name: "Darrow's Father" },
      { chapter: 14, name: 'Dale' },
    ],
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
        description: 'Hanged by the Grays when Darrow was six; Darrow did not cry.',
        status: 'dead',
      },
      {
        chapter: 3,
        description: 'Executed for leading the Dancer\'s Rebellion - a peaceful protest for increased food rations.',
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
        description: 'Plays the zither at the Laurel feast; taught Darrow to dance. Only thirty-five but worn down by drink.',
        status: 'alive',
      },
      {
        chapter: 7,
        description: 'Drugged Darrow at the wake and buried him alive so the Sons of Ares could dig him up.',
        status: 'alive',
      },
      {
        chapter: 8,
        description: 'Revealed to have been a Sons of Ares informer since before Darrow\'s father\'s death.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'dio',
    name: 'Dio',
    color: 'Red',
    firstAppearance: 3,
    relationships: [
      { targetId: 'eo', type: 'sibling', revealedAtChapter: 3 },
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
        description: 'Leader of the local Sons of Ares cell who dug Darrow up from his grave.',
        status: 'alive',
      },
      {
        chapter: 8,
        description: 'Former Helldiver from the colony Tyros. A powerful man near Darrow\'s height but older, maybe in his forties. His left arm hangs limp from nerve damage, and pitviper bite scars mark his neck.',
        status: 'alive',
        additionalDetails: 'Claims not to be Ares himself, but clearly commands the local rebellion.',
      },
      {
        chapter: 9,
        description: 'Reveals the truth - Reds were sent to Mars five hundred years ago, the other Colors settled the surface three hundred years back, and the Reds have been slaves, not pioneers, ever since.',
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
        description: 'Dancer\'s partner in the cell. Cold, and consumed by hatred for the Golds.',
        status: 'alive',
      },
      {
        chapter: 12,
        description: 'Trains Darrow in the gym beneath Mickey\'s club.',
        status: 'alive',
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
        description: 'Rarely speaks, but tells Darrow he is beautiful when she sees his new Sigils, and secretly slips one of her feathers into his pocket.',
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
    firstAppearance: 3,
    relationships: [
      { targetId: 'mustang', type: 'child', revealedAtChapter: 43 },
      { targetId: 'jackal', type: 'child', revealedAtChapter: 34 },
    ],
    progressiveInfo: [
      {
        chapter: 3,
        description: 'The ArchGovernor of Mars. Podginus awards Darrow the Laurel on his behalf.',
        status: 'alive',
      },
      {
        chapter: 5,
        description: 'One of the most powerful Golds. Cold and imperious with a scar on his cheekbone marking him as Peerless Scarred.',
        status: 'alive',
      },
      {
        chapter: 6,
        description: 'Attends Eo\'s trial in person and, fascinated, says \'Let her sing\'; presides over her hanging with cold indifference.',
        status: 'alive',
        additionalDetails: 'His contempt for lowReds is absolute.',
      },
      {
        chapter: 34,
        description: 'Father of the Jackal, Adrius; the Proctors are rigging the game so his son wins.',
        status: 'alive',
      },
      {
        chapter: 43,
        description: 'Also father of Mustang - Virginia au Augustus, the Jackal\'s twin.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'octavia',
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
    name: 'Fitchner',
    aliases: ['Proctor Mars'],
    color: 'Gold',
    house: 'Mars',
    firstAppearance: 17,
    relationships: [
      { targetId: 'sevro', type: 'child', revealedAtChapter: 39 },
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
        chapter: 39,
        description: 'Darrow realizes from their shared coloring and manner that Fitchner is Sevro\'s father; Fitchner admits it and agrees to help against Apollo.',
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
    firstAppearance: 15,
    relationships: [
      { targetId: 'darrow', type: 'friend', revealedAtChapter: 17 },
      { targetId: 'julian', type: 'sibling', revealedAtChapter: 18 },
      { targetId: 'quinn', type: 'ally', revealedAtChapter: 22 },
    ],
    progressiveInfo: [
      {
        chapter: 15,
        description: 'Cassius au Bellona, son of Praetor Tiberius au Bellona. First encountered during Darrow\'s Institute testing.',
        status: 'alive',
      },
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
        chapter: 22,
        description: 'Partners with Darrow to lead a faction within House Mars. Excellent fighter and natural leader.',
        status: 'alive',
      },
      {
        chapter: 33,
        description: 'Shown a holo by the Jackal\'s people proving Darrow killed Julian in the Passage. Duels Darrow, stabs him, and leaves him bleeding in the mud.',
        status: 'alive',
        additionalDetails: 'Their friendship shatters.',
      },
    ],
  },
  {
    id: 'julian',
    name: 'Julian au Bellona',
    color: 'Gold',
    house: 'Mars',
    firstAppearance: 16,
    relationships: [
      { targetId: 'cassius', type: 'sibling', revealedAtChapter: 18 },
      { targetId: 'darrow', type: 'enemy', revealedAtChapter: 19 },
    ],
    progressiveInfo: [
      {
        chapter: 16,
        description: 'A polite, well-bred Gold who befriends Darrow on arrival; mentions an older brother already at the Institute.',
        status: 'alive',
      },
      {
        chapter: 18,
        description: 'Revealed to be Cassius\'s non-identical twin brother. Kind and gentle, more scholar than warrior.',
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
    name: 'Sevro',
    aliases: ['Goblin'],
    color: 'Gold',
    house: 'Mars',
    firstAppearance: 16,
    relationships: [
      { targetId: 'darrow', type: 'friend', revealedAtChapter: 20 },
      { targetId: 'fitchner', type: 'parent', revealedAtChapter: 39 },
      { targetId: 'quinn', type: 'friend', revealedAtChapter: 22 },
    ],
    progressiveInfo: [
      {
        chapter: 16,
        description: 'The smallest Gold at the Institute. Wild-eyed and feral.',
        status: 'alive',
      },
      {
        chapter: 17,
        description: 'Picked last in the draft.',
        status: 'alive',
      },
      {
        chapter: 21,
        description: 'Called "Goblin" by the others.',
        status: 'alive',
      },
      {
        chapter: 22,
        description: 'Drags a dead wolf into the castle and takes to wearing its skin.',
        status: 'alive',
      },
      {
        chapter: 24,
        description: 'Operates independently but proves to be a valuable scout and survivalist. Has a soft spot for Quinn.',
        status: 'alive',
      },
      {
        chapter: 30,
        description: 'Leads the Howlers - six wolf-cloaked lowDrafts Darrow forms under his tutelage.',
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
      { targetId: 'nero-augustus', type: 'parent', revealedAtChapter: 43 },
      { targetId: 'jackal', type: 'sibling', revealedAtChapter: 43 },
    ],
    progressiveInfo: [
      {
        chapter: 26,
        description: 'A quick, clever Gold from House Minerva who bests Darrow and Sevro in a raid and taunts them; Darrow dubs her "Mustang" on the spot.',
        status: 'alive',
      },
      {
        chapter: 31,
        description: 'House Minerva\'s fortress falls to Darrow\'s army; Mustang escapes into the wild rather than be enslaved.',
        status: 'alive',
      },
      {
        chapter: 43,
        description: 'Revealed to be Virginia au Augustus - daughter of the ArchGovernor and twin sister to the Jackal.',
        status: 'alive',
        additionalDetails: 'Her true identity creates complications for Darrow\'s mission.',
      },
    ],
  },
  {
    id: 'roque',
    name: 'Roque',
    color: 'Gold',
    house: 'Mars',
    firstAppearance: 18,
    relationships: [
      { targetId: 'darrow', type: 'friend', revealedAtChapter: 18 },
      { targetId: 'lea', type: 'ally', revealedAtChapter: 22 },
    ],
    progressiveInfo: [
      {
        chapter: 18,
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
    firstAppearance: 18,
    relationships: [
      { targetId: 'sevro', type: 'friend', revealedAtChapter: 22 },
      { targetId: 'cassius', type: 'ally', revealedAtChapter: 22 },
    ],
    progressiveInfo: [
      {
        chapter: 18,
        description: 'A Gold whom Darrow flirts with early in his time at the Institute.',
        status: 'alive',
      },
      {
        chapter: 22,
        description: 'The fastest runner in House Mars.',
        status: 'alive',
      },
      {
        chapter: 23,
        description: 'Joins Darrow and Cassius\'s faction. Known for telling elaborate lies as jokes. The only one Sevro doesn\'t insult.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'lea',
    name: 'Lea',
    color: 'Gold',
    house: 'Mars',
    firstAppearance: 20,
    relationships: [
      { targetId: 'roque', type: 'ally', revealedAtChapter: 22 },
    ],
    progressiveInfo: [
      {
        chapter: 20,
        description: 'A limping Gold girl in House Mars.',
        status: 'alive',
      },
      {
        chapter: 22,
        description: 'A meek Gold who follows Roque everywhere. Part of Darrow\'s "Dregs" faction.',
        status: 'alive',
      },
      {
        chapter: 32,
        description: 'Killed by Antonia and Vixus at the Institute as a ploy to lure Darrow out of hiding.',
        status: 'dead',
        additionalDetails: 'Darrow builds a cairn over her body.',
      },
    ],
  },
  {
    id: 'pax',
    name: 'Pax au Telemanus',
    color: 'Gold',
    house: 'Minerva',
    firstAppearance: 26,
    relationships: [
      { targetId: 'darrow', type: 'enemy', revealedAtChapter: 27 },
      { targetId: 'darrow', type: 'friend', revealedAtChapter: 35 },
    ],
    progressiveInfo: [
      {
        chapter: 26,
        description: 'Someone named Pax seems a bloody nightmare, by reputation alone.',
        status: 'alive',
      },
      {
        chapter: 27,
        description: 'A gigantic Gold of House Minerva, Mustang\'s fiercest fighter; he lays Titus low and nearly kills Darrow before Darrow beats him with the slingBlade.',
        status: 'alive',
      },
      {
        chapter: 35,
        description: 'Captured when Minerva fell; after Mustang joins Darrow, Pax becomes his most loyal and devoted soldier.',
        status: 'alive',
      },
      {
        chapter: 41,
        description: 'Killed by the Jackal while shielding Darrow with his own body during the confrontation at the Institute.',
        status: 'dead',
        additionalDetails: 'His sacrifice saves Darrow\'s life; Darrow swears to kill the Jackal for it.',
      },
    ],
  },

  // INSTITUTE - ANTAGONISTS
  {
    id: 'titus',
    name: 'Titus au Ladros',
    color: 'Gold',
    house: 'Mars',
    firstAppearance: 18,
    relationships: [
      { targetId: 'darrow', type: 'enemy', revealedAtChapter: 22 },
      { targetId: 'vixus', type: 'ally', revealedAtChapter: 22 },
    ],
    progressiveInfo: [
      {
        chapter: 18,
        description: 'A tall brute of a Gold with a neck as thick as a stump.',
        status: 'alive',
      },
      {
        chapter: 20,
        description: 'A brutal, massive Gold in House Mars. Quickly gathers followers through intimidation.',
        status: 'alive',
      },
      {
        chapter: 24,
        description: 'Leads savage raids on House Ceres from the sixth day, using rape and terror as tools.',
        status: 'alive',
      },
      {
        chapter: 25,
        description: 'Captures and mutilates Quinn, sending her ear to Darrow; open war with Darrow\'s tribe.',
        status: 'alive',
      },
      {
        chapter: 28,
        description: 'Captured and beaten; Darrow realizes from his slip of "bloodydamn" that Titus is a carved Red like himself.',
        status: 'alive',
      },
      {
        chapter: 29,
        description: 'Sentenced to death by Darrow before the united House; he demands a duel and is killed by Cassius with straight blades. Darrow buries him in a grove by the river.',
        status: 'dead',
        additionalDetails: 'Darrow infers he was a Red carved like himself; the Sons of Ares never confirm it in this book.',
      },
    ],
  },
  {
    id: 'antonia',
    name: 'Antonia au Severus',
    color: 'Gold',
    house: 'Mars',
    firstAppearance: 15,
    relationships: [
      { targetId: 'darrow', type: 'enemy', revealedAtChapter: 22 },
    ],
    progressiveInfo: [
      {
        chapter: 15,
        description: 'A Gold who sneers at Darrow during the Institute testing.',
        status: 'alive',
      },
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
        description: 'Defects with Vixus and Cassandra, taking House Mars slaves and armed with Proctor-supplied nightOptics; murders Lea to bait Darrow, then never returns to the castle.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'jackal',
    name: 'Adrius au Augustus',
    progressiveNames: [
      { chapter: 27, name: 'The Jackal' },
      { chapter: 34, name: 'Adrius' },
      { chapter: 43, name: 'Adrius au Augustus' },
    ],
    aliases: ['The Jackal'],
    color: 'Gold',
    house: 'Pluto',
    firstAppearance: 27,
    relationships: [
      { targetId: 'mustang', type: 'sibling', revealedAtChapter: 43 },
      { targetId: 'nero-augustus', type: 'parent', revealedAtChapter: 34 },
    ],
    progressiveInfo: [
      {
        chapter: 27,
        description: 'A feared, unseen Primus in the south whose own Proctor calls him the Jackal.',
        status: 'alive',
      },
      {
        chapter: 34,
        description: 'Adrius au Augustus, Primus of House Pluto and son of the ArchGovernor - the Proctors are rigging the game for him.',
        status: 'alive',
      },
      {
        chapter: 41,
        description: 'Finally met in person: small, weak, brilliant, and utterly amoral; kills Pax to get at Darrow and saws off his own trapped hand to escape.',
        status: 'alive',
        additionalDetails: 'Known for his intelligence and complete lack of morals.',
      },
      {
        chapter: 43,
        description: 'Mustang\'s twin brother.',
        status: 'alive',
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
        description: 'Presides over Eo\'s trial with florid speeches meant to impress the ArchGovernor; awkwardly pleads that the girl acted alone.',
        status: 'alive',
      },
    ],
  },
];

// Family groupings for the tree view
export const familyGroups: FamilyGroup[] = [
// Also exported as redRisingFamilyGroups from index.ts
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
    members: ['dancer', 'harmony', 'narol'],
  },
  {
    id: 'house-mars',
    name: 'House Mars (Institute)',
    members: ['darrow', 'cassius', 'sevro', 'roque', 'quinn', 'lea', 'titus', 'antonia', 'vixus', 'julian'],
  },
];

export const redRisingBook: Book = {
  id: 'red-rising',
  title: 'Red Rising',
  author: 'Pierce Brown',
  chapters,
  characters,
};
