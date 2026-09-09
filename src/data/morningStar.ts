import type { Book, Character, FamilyGroup } from '../types';

// Morning Star chapters based on table of contents
const chapters = [
  { number: 0, title: 'Prologue' },
  // Part I: Prisoner
  { number: 1, title: 'Only the Dark' },
  { number: 2, title: 'Prisoner L17L6363' },
  { number: 3, title: 'Snakebite' },
  { number: 4, title: 'Cell 2187' },
  { number: 5, title: 'Plan C' },
  { number: 6, title: 'Victims' },
  { number: 7, title: 'Bumblebees' },
  // Part II: Reborn
  { number: 8, title: 'Home' },
  { number: 9, title: 'The City of Ares' },
  { number: 10, title: 'The War' },
  { number: 11, title: 'My People' },
  { number: 12, title: 'The Julii' },
  { number: 13, title: 'Howlers' },
  { number: 14, title: 'The Vampire Moon' },
  { number: 15, title: 'The Hunt' },
  { number: 16, title: 'Paramour' },
  { number: 17, title: 'Killing Golds' },
  { number: 18, title: 'Abyss' },
  { number: 19, title: 'Pressure' },
  { number: 20, title: 'Dissent' },
  { number: 21, title: 'Quicksilver' },
  { number: 22, title: 'The Weight of Ares' },
  { number: 23, title: 'The Tide' },
  { number: 24, title: 'Hic Sunt Leones' },
  { number: 25, title: 'Exodus' },
  // Part III: Children of the Spires
  { number: 26, title: 'The Ice' },
  { number: 27, title: 'Bay of Laughter' },
  { number: 28, title: 'Feast' },
  { number: 29, title: 'Hunters' },
  { number: 30, title: 'The Quiet' },
  { number: 31, title: 'The Pale Queen' },
  { number: 32, title: "No Man's Land" },
  { number: 33, title: 'Gods and Men' },
  { number: 34, title: 'Godkillers' },
  { number: 35, title: 'The Light' },
  { number: 36, title: 'Swill' },
  { number: 37, title: 'The Last Eagle' },
  { number: 38, title: 'The Bill' },
  { number: 39, title: 'The Heart' },
  // Part IV: Deep Grave
  { number: 40, title: 'Yellow Sea' },
  { number: 41, title: 'The Moon Lord' },
  { number: 42, title: 'The Poet' },
  { number: 43, title: 'Here Again' },
  { number: 44, title: 'The Lucky Ones' },
  { number: 45, title: 'The Battle of Ilium' },
  { number: 46, title: 'Helldiver' },
  { number: 47, title: 'Hell' },
  { number: 48, title: 'Imperator' },
  { number: 49, title: 'Colossus' },
  { number: 50, title: 'Thunder and Lightning' },
  { number: 51, title: 'Pandora' },
  { number: 52, title: 'Teeth' },
  { number: 53, title: 'Silence' },
  { number: 54, title: 'The Goblin and the Gold' },
  { number: 55, title: 'The Ignoble House Barca' },
  { number: 56, title: 'In Time' },
  // Part V: Morning Star
  { number: 57, title: 'Luna' },
  { number: 58, title: 'Fading Light' },
  { number: 59, title: 'The Lion of Mars' },
  { number: 60, title: "Dragon's Maw" },
  { number: 61, title: 'The Red' },
  { number: 62, title: 'Omnis Vir Lupus' },
  { number: 63, title: 'Silence' },
  { number: 64, title: 'Hail' },
  { number: 65, title: 'The Vale' },
  { number: 66, title: 'Epilogue' },
];

const characters: Character[] = [
  // ========== MAIN CHARACTERS ==========
  {
    id: 'darrow',
    name: 'Darrow of Lykos',
    aliases: ['The Reaper', 'The Morning Star', 'Darrow au Andromedus'],
    color: 'Gold',
    house: 'Augustus',
    firstAppearance: 0,
    relationships: [
      { targetId: 'mustang', type: 'lover', revealedAtChapter: 0 },
      { targetId: 'sevro', type: 'friend', revealedAtChapter: 0 },
      { targetId: 'eo', type: 'spouse', revealedAtChapter: 0 },
      { targetId: 'jackal', type: 'enemy', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Has been imprisoned and tortured by the Jackal for a year since the Triumph betrayal. Kept in a special box in the Jackal\'s dining table.',
        status: 'alive',
        additionalDetails: 'Mentally broken, starved, subjected to sensory deprivation and psychological torture.',
      },
      {
        chapter: 7,
        description: 'Rescued when Ragnar, Sevro and the Howlers arrive at Attica. Escapes with Holiday and Victra; Trigg was killed on the bridge the chapter before.',
        status: 'alive',
      },
      {
        chapter: 10,
        description: 'Returns to lead the Rising on Tinos. Begins rebuilding his strength and planning the war.',
        status: 'alive',
      },
      {
        chapter: 26,
        description: 'Travels to the Obsidian homeland in Mars\'s polar region with Ragnar to recruit the Obsidians.',
        status: 'alive',
      },
      {
        chapter: 29,
        description: 'Ambushed on the ice by Aja and Cassius. Fights Aja alongside Ragnar; Aja mortally wounds Ragnar with a razor-whip trick.',
        status: 'alive',
        additionalDetails: 'Ragnar\'s death deeply affects him.',
      },
      {
        chapter: 45,
        description: 'Leads the Rising fleet at the Battle of Ilium against Roque\'s Sword Armada.',
        status: 'alive',
      },
      {
        chapter: 48,
        description: 'Boards the Colossus and confronts Roque on the bridge; Roque takes his own life rather than surrender. Darrow mourns him.',
        status: 'alive',
      },
      {
        chapter: 61,
        description: 'Cassius frees Darrow and Mustang during the broadcast execution; Darrow stabs Octavia in the gut seven times.',
        status: 'alive',
      },
      {
        chapter: 62,
        description: 'Kills Aja alongside Sevro, Cassius, and Mustang in the Sovereign\'s bunker.',
        status: 'alive',
      },
      {
        chapter: 63,
        description: 'Rips out the Jackal\'s tongue to stop the nuclear detonations. Captures him.',
        status: 'alive',
      },
      {
        chapter: 65,
        description: 'Recovering on Luna (Mickey and Virany reattach the hand the Jackal cut off). Says farewell to Cassius. Weeks later, on a beach on Earth, Mustang reveals their son, Pax.',
        status: 'alive',
        additionalDetails: 'Pax was born nine months after the Lion\'s Rain (Epilogue). Named after Pax au Telemanus.',
      },
    ],
    progressiveNames: [
      { chapter: 2, name: 'Prisoner L17L6363' },
      { chapter: 7, name: 'Darrow / The Reaper' },
      { chapter: 35, name: 'Darrow / The Morning Star' },
    ],
  },
  {
    id: 'sevro',
    name: 'Sevro au Barca',
    aliases: ['The Goblin', 'Ares'],
    color: 'Gold',
    house: 'Barca',
    firstAppearance: 0,
    relationships: [
      { targetId: 'darrow', type: 'friend', revealedAtChapter: 0 },
      { targetId: 'victra', type: 'lover', revealedAtChapter: 36 },
      { targetId: 'fitchner', type: 'parent', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Has taken up his father\'s mantle as Ares, leading the Sons of Ares since Fitchner\'s death.',
        status: 'alive',
        additionalDetails: 'Never gave up on rescuing Darrow. Spent a year planning the operation.',
      },
      {
        chapter: 7,
        description: 'Leads the rescue mission to free Darrow from the Jackal\'s prison.',
        status: 'alive',
      },
      {
        chapter: 36,
        description: 'Now clearly a couple with Victra (she spends her nights with him after Ragnar\'s death).',
        status: 'alive',
      },
      {
        chapter: 54,
        description: 'Publicly reveals himself as Ares to the crowd on the Morning Star, then stages a hanging stunt with Cassius to shame the mob (\'I am Ares!\').',
        status: 'alive',
      },
      {
        chapter: 55,
        description: 'Marries Victra in a private ceremony on the ship.',
        status: 'alive',
      },
      {
        chapter: 58,
        description: 'Appears to be shot dead by Cassius aboard the shuttle; his \'corpse\' is delivered to the Jackal and Sovereign as part of the plan.',
        status: 'alive',
      },
      {
        chapter: 62,
        description: 'Wakes from his drug-induced \'death\', savages the Jackal and delivers the killing blows to Aja (\'Omnis vir lupus\').',
        status: 'alive',
      },
      {
        chapter: 65,
        description: 'Victorious with the Rising. Will help lead the new government alongside Darrow and Mustang.',
        status: 'alive',
      },
    ],
    progressiveNames: [
      { chapter: 0, name: 'Sevro / Ares' },
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
      { targetId: 'darrow', type: 'lover', revealedAtChapter: 0 },
      { targetId: 'jackal', type: 'sibling', revealedAtChapter: 0 },
      { targetId: 'pax-son', type: 'parent', revealedAtChapter: 65 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Separated from Darrow since the Triumph. Fled to the Rim with her fleet after the Jackal seized Mars; the Jackal claims she does not care about Darrow.',
        status: 'alive',
      },
      {
        chapter: 17,
        description: 'First seen in person: present at Quicksilver\'s tower with Kavax, Daxo and Cassius negotiating peace; flees when Darrow\'s Howlers attack.',
        status: 'alive',
      },
      {
        chapter: 24,
        description: 'Finds Darrow in the Phobos hangar. Reveals she came to Phobos to make peace with the Sovereign, not to surrender; agrees to join his quest to the Valkyrie Spires.',
        status: 'alive',
      },
      {
        chapter: 61,
        description: 'Freed by Cassius; shoots Aja across the room and fights her alongside Darrow and Cassius; in ch 62 takes Aja\'s arm off at the elbow.',
        status: 'alive',
      },
      {
        chapter: 64,
        description: 'Proclaimed Sovereign in the Sovereign\'s forum (\'Hail, Sovereign\'). A week later watches the Jackal hanged in a Luna square by a White hangwoman, and pulls his feet to break his neck.',
        status: 'alive',
        additionalDetails: 'Despite everything, she cannot watch him suffer.',
      },
      {
        chapter: 65,
        description: 'Ruling as Sovereign amid Luna\'s devastation. Takes Darrow to a beach on Earth and reveals their son Pax.',
        status: 'alive',
        additionalDetails: 'Kept the pregnancy secret to protect her son during the war.',
      },
    ],
    progressiveNames: [
      { chapter: 64, name: 'Virginia / Sovereign' },
    ],
  },
  {
    id: 'victra',
    name: 'Victra au Julii',
    aliases: [],
    color: 'Gold',
    house: 'Julii',
    firstAppearance: 12,
    relationships: [
      { targetId: 'sevro', type: 'lover', revealedAtChapter: 12 },
      { targetId: 'antonia', type: 'sibling', revealedAtChapter: 12 },
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 12 },
    ],
    progressiveInfo: [
      {
        chapter: 12,
        description: 'Recovering from being shot by her sister Antonia during the Triumph betrayal. Her spine was damaged.',
        status: 'alive',
        additionalDetails: 'Has undergone multiple surgeries. Fiercely loyal to Darrow and Sevro.',
      },
      {
        chapter: 13,
        description: 'Joins the Howlers despite not being fully healed. Her hatred for her sister drives her.',
        status: 'alive',
      },
      {
        chapter: 55,
        description: 'Marries Sevro in a ceremony performed by Darrow.',
        status: 'alive',
      },
      {
        chapter: 65,
        description: 'Commands part of the Rising fleet in the aftermath; comes with Sevro to the beach on Earth for Darrow\'s reunion.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'ragnar',
    name: 'Ragnar Volarus',
    aliases: ['The Shield of Tinos', 'Stained'],
    color: 'Obsidian',
    firstAppearance: 0,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 0 },
      { targetId: 'sefi', type: 'sibling', revealedAtChapter: 11 },
      { targetId: 'alia', type: 'parent', revealedAtChapter: 24 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'The giant Obsidian warrior who swore himself to Darrow. Has been fighting with the Rising since the Triumph.',
        status: 'alive',
      },
      {
        chapter: 26,
        description: 'Crash-lands in the polar sea with Darrow, Mustang, Holiday and Cassius; begins the trek across the ice to the Valkyrie Spires.',
        status: 'alive',
      },
      {
        chapter: 29,
        description: 'Ambushed on the ice by Aja and Cassius; mortally wounded by Aja after she tricks him with a razor-whip.',
        status: 'alive',
      },
      {
        chapter: 30,
        description: 'Dies in Darrow\'s arms as Sefi\'s Valkyrie arrive; his sister reaches him just before the end.',
        status: 'dead',
        additionalDetails: 'Sefi later beheads their mother (ch 34) after Darrow shows her the truth about the \'gods\'.',
      },
    ],
  },

  // ========== ANTAGONISTS ==========
  {
    id: 'jackal',
    name: 'Adrius au Augustus',
    aliases: ['The Jackal', 'The ArchGovernor'],
    color: 'Gold',
    house: 'Augustus',
    firstAppearance: 0,
    relationships: [
      { targetId: 'mustang', type: 'sibling', revealedAtChapter: 0 },
      { targetId: 'lilath', type: 'ally', revealedAtChapter: 2 },
      { targetId: 'octavia', type: 'ally', revealedAtChapter: 2 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Captured Darrow after the Triumph betrayal. Placed a mask and muzzle on him. Rules Mars as ArchGovernor.',
        status: 'alive',
      },
      {
        chapter: 2,
        description: 'Has kept Darrow imprisoned in his dining table for a year. Tortured him for information about the Sons of Ares.',
        status: 'alive',
        additionalDetails: 'Displays sadistic tendencies - mutilates servants and enjoys psychological torture.',
      },
      {
        chapter: 38,
        description: 'Sevro learns from Cassius that the Jackal has stolen the Sovereign\'s cache of five hundred nuclear warheads.',
        status: 'alive',
      },
      {
        chapter: 59,
        description: 'Cuts off Darrow\'s right hand with Darrow\'s own heated slingBlade aboard the Lion of Mars.',
        status: 'alive',
      },
      {
        chapter: 62,
        description: 'The first nuclear blast lights up the Sovereign\'s bunker as Octavia dies.',
        status: 'alive',
      },
      {
        chapter: 63,
        description: 'Reveals he has planted the stolen warheads across Luna\'s cities. Begins detonating them via Lilath and demands Darrow kill himself on camera. Darrow rips out his tongue to stop him ordering more detonations.',
        status: 'alive',
        additionalDetails: 'Plans to be crowned Sovereign once Darrow is dead and the Rising broken.',
      },
      {
        chapter: 64,
        description: 'Executed by hanging in a public square on Luna, a week after Mustang\'s ascension. Mustang pulls his feet to break his neck, showing him mercy even at the end.',
        status: 'dead',
        additionalDetails: 'His bombs killed millions on Luna (six million in the first city alone).',
      },
    ],
  },
  {
    id: 'octavia',
    name: 'Octavia au Lune',
    aliases: ['The Sovereign'],
    color: 'Gold',
    house: 'Lune',
    firstAppearance: 1,
    relationships: [
      { targetId: 'lysander', type: 'grandparent', revealedAtChapter: 2 },
      { targetId: 'aja', type: 'ally', revealedAtChapter: 2 },
      { targetId: 'ash-lord', type: 'ally', revealedAtChapter: 2 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'The Sovereign of the Society, ruling from Luna. The architect of everything Darrow has suffered.',
        status: 'alive',
      },
      {
        chapter: 2,
        description: 'The Sovereign of the Society. Has sent Aja to retrieve Darrow for dissection by her Carvers.',
        status: 'alive',
      },
      {
        chapter: 60,
        description: 'Receives Cassius and the \'dead\' Sevro in her bunker; has Aja strangle Antonia for cowardice.',
        status: 'alive',
      },
      {
        chapter: 61,
        description: 'Stabbed repeatedly in the gut by Darrow after Cassius kills her guards and releases the prisoners mid-broadcast.',
        status: 'alive',
      },
      {
        chapter: 62,
        description: 'Dies on the floor of her bunker as the first nuclear blast lights the room; her last words are to Darrow.',
        status: 'dead',
        additionalDetails: 'Cassius turned on her after Darrow showed him proof (holocubes) that she and the Jackal conspired in the Bellona massacre and the murder of Nero au Augustus.',
      },
    ],
  },
  {
    id: 'aja',
    name: 'Aja au Grimmus',
    aliases: ['The Protean Knight', 'The Fury'],
    color: 'Gold',
    house: 'Grimmus',
    firstAppearance: 2,
    relationships: [
      { targetId: 'octavia', type: 'ally', revealedAtChapter: 2 },
      { targetId: 'ash-lord', type: 'child', revealedAtChapter: 2 },
    ],
    progressiveInfo: [
      {
        chapter: 2,
        description: 'The Sovereign\'s chief bodyguard and Olympic Knight. Has come to collect Darrow for dissection.',
        status: 'alive',
      },
      {
        chapter: 6,
        description: 'Spears Trigg through the chest on the bridge outside Attica and throws his body off the edge.',
        status: 'alive',
      },
      {
        chapter: 29,
        description: 'Ambushes Darrow\'s party on the ice with Cassius; kills Trigg\'s avenger Ragnar by baiting him into a razor-whip trick.',
        status: 'alive',
        additionalDetails: 'One of the deadliest warriors in the Society.',
      },
      {
        chapter: 62,
        description: 'Killed in the Sovereign\'s bunker: Cassius and Sevro cut her tendons, Mustang takes her arm at the elbow, and Sevro drives two razors into her chest.',
        status: 'dead',
        additionalDetails: 'One of the few warriors capable of fighting multiple Peerless Scarred simultaneously.',
      },
    ],
  },
  {
    id: 'cassius',
    name: 'Cassius au Bellona',
    aliases: ['The Morning Knight'],
    color: 'Gold',
    house: 'Bellona',
    firstAppearance: 2,
    relationships: [
      { targetId: 'darrow', type: 'enemy', revealedAtChapter: 2 },
      { targetId: 'lysander', type: 'ally', revealedAtChapter: 65 },
      { targetId: 'octavia', type: 'ally', revealedAtChapter: 2 },
    ],
    progressiveInfo: [
      {
        chapter: 2,
        description: 'Now serving as the Sovereign\'s bodyguard alongside Aja. Wears the white and gold of the Morning Knight.',
        status: 'alive',
        additionalDetails: 'Shows Darrow unexpected compassion, giving him his cloak despite their enmity.',
      },
      {
        chapter: 54,
        description: 'Dragged before the mob on the Morning Star by Sevro; nearly hanged in Sevro\'s stunt.',
        status: 'alive',
      },
      {
        chapter: 56,
        description: 'In a private talk with Darrow (\'In Time\') begins to accept the truth about Octavia and agrees to help.',
        status: 'alive',
      },
      {
        chapter: 61,
        description: 'Turns on the Sovereign during the live execution: kills her Praetorian guards and unlocks Darrow\'s and Mustang\'s restraints so Darrow can stab Octavia. Fights Aja beside Mustang.',
        status: 'alive',
        additionalDetails: 'Finally chooses honor over loyalty to a corrupt regime.',
      },
      {
        chapter: 64,
        description: 'Kneels before Mustang as the new Sovereign. Helps legitimize her claim.',
        status: 'alive',
      },
      {
        chapter: 65,
        description: 'Departs Luna with Lysander. Plans to raise the boy away from politics and power. Shakes hands with Darrow as a brother.',
        status: 'alive',
        additionalDetails: 'Offers to return the ring he took from Darrow the night Lorn and Fitchner died; Darrow tells him to keep it (\'That belongs to Julian\'). They shake hands almost six years after first meeting.',
      },
    ],
    progressiveNames: [
      { chapter: 2, name: 'Cassius / The Morning Knight' },
      { chapter: 61, name: 'Cassius' },
    ],
  },
  {
    id: 'antonia',
    name: 'Antonia au Severus-Julii',
    aliases: [],
    color: 'Gold',
    house: 'Julii',
    firstAppearance: 2,
    relationships: [
      { targetId: 'victra', type: 'sibling', revealedAtChapter: 2 },
      { targetId: 'jackal', type: 'ally', revealedAtChapter: 2 },
    ],
    progressiveInfo: [
      {
        chapter: 2,
        description: 'Allied with the Jackal. Present at his table when Darrow is revealed from his prison.',
        status: 'alive',
        additionalDetails: 'Shot her own mother and sister during the Triumph betrayal.',
      },
      {
        chapter: 48,
        description: 'Commands a flagship in Roque\'s fleet at Ilium; escapes the battle and flees to the Core.',
        status: 'alive',
      },
      {
        chapter: 60,
        description: 'Strangled to death by Aja on the Sovereign\'s order for cowardice at Ilium, in front of Darrow and Mustang.',
        status: 'dead',
      },
    ],
  },
  {
    id: 'lysander',
    name: 'Lysander au Lune',
    aliases: ['The Heir'],
    color: 'Gold',
    house: 'Lune',
    firstAppearance: 60,
    relationships: [
      { targetId: 'octavia', type: 'grandparent', revealedAtChapter: 60 },
      { targetId: 'cassius', type: 'ally', revealedAtChapter: 60 },
    ],
    progressiveInfo: [
      {
        chapter: 60,
        description: 'Ten years old, sits at his grandmother\'s side in the bunker as Cassius arrives with the \'dead\' Sevro.',
        status: 'alive',
      },
      {
        chapter: 61,
        description: 'Rushes to hold his dying grandmother together after Darrow stabs her; Aja will not leave her.',
        status: 'alive',
        additionalDetails: 'Shows maturity beyond his years in the crisis.',
      },
      {
        chapter: 63,
        description: 'Suggests calling his godfather the Ash Lord to stop the Jackal, then hands Mustang the Dawn Scepter: \'She is our conqueror.\'',
        status: 'alive',
      },
      {
        chapter: 64,
        description: 'Attends Mustang\'s proclamation in the forum.',
        status: 'alive',
      },
      {
        chapter: 65,
        description: 'Leaves with Cassius to be raised away from Luna. Cassius sees Julian\'s goodness in him.',
        status: 'alive',
      },
    ],
  },

  // ========== SUPPORTING CHARACTERS ==========
  {
    id: 'sefi',
    name: 'Sefi the Quiet',
    aliases: ['Sefi Volarus', 'Queen of the Valkyrie'],
    color: 'Obsidian',
    firstAppearance: 30,
    relationships: [
      { targetId: 'ragnar', type: 'sibling', revealedAtChapter: 30 },
      { targetId: 'alia', type: 'parent', revealedAtChapter: 30 },
    ],
    progressiveInfo: [
      {
        chapter: 30,
        description: 'Arrives with her Valkyrie moments before Ragnar dies; gives him her axe so he can die a warrior.',
        status: 'alive',
      },
      {
        chapter: 32,
        description: 'Darrow shows her the truth about the \'gods\' after Alia has him and Mustang thrown out; she begins to believe.',
        status: 'alive',
      },
      {
        chapter: 34,
        description: 'After Ragnar\'s death, kills her mother Alia and takes leadership of the Valkyrie. Commits the Obsidians to the Rising.',
        status: 'alive',
        additionalDetails: 'Decapitates her mother with the razor Darrow gave her.',
      },
      {
        chapter: 65,
        description: 'Under Holiday\'s supervision, has gone to Mars to free the rest of her people at the poles with medicine instead of weapons.',
        status: 'alive',
      },
    ],
    progressiveNames: [
      { chapter: 30, name: 'Sefi the Quiet' },
      { chapter: 34, name: 'Sefi / Queen of the Valkyrie' },
    ],
  },
  {
    id: 'holiday',
    name: 'Holiday ti Nakamura',
    aliases: ['Holi'],
    color: 'Gray',
    firstAppearance: 3,
    relationships: [
      { targetId: 'trigg', type: 'sibling', revealedAtChapter: 3 },
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 3 },
    ],
    progressiveInfo: [
      {
        chapter: 3,
        description: 'Gray operative posing as a Gray in the Praetorian detail escorting Darrow for Aja. Helps rescue Darrow from the Jackal\'s prison.',
        status: 'alive',
        additionalDetails: 'Nutcracker jaw, Mohawk, freckled face, one bionic eye. From Earth.',
      },
      {
        chapter: 6,
        description: 'Her brother Trigg is speared by Aja on the bridge outside Attica. She survives and continues fighting despite her grief.',
        status: 'alive',
      },
      {
        chapter: 8,
        description: 'Serves as one of the Sons of Ares\' most reliable operatives. Skilled fighter and infiltrator.',
        status: 'alive',
      },
      {
        chapter: 65,
        description: 'Supervising Sefi\'s mission to free the Obsidians on Mars. Trusted advisor to the Rising.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'trigg',
    name: 'Trigg ti Nakamura',
    aliases: [],
    color: 'Gray',
    firstAppearance: 3,
    relationships: [
      { targetId: 'holiday', type: 'sibling', revealedAtChapter: 3 },
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 3 },
    ],
    progressiveInfo: [
      {
        chapter: 3,
        description: 'Holiday\'s younger brother. Gray operative who helps rescue Darrow. Loyal and earnest.',
        status: 'alive',
        additionalDetails: 'Two gold teardrop tattoos under his right eye. Boyish face. Carries Darrow\'s razor.',
      },
      {
        chapter: 6,
        description: 'Speared through by Aja on the ice-slicked bridge while covering the retreat; she throws his body over the side.',
        status: 'dead',
        additionalDetails: 'His death deeply affects Holiday. He sacrifices himself to help Darrow escape.',
      },
    ],
  },
  {
    id: 'roque',
    name: 'Roque au Fabii',
    aliases: ['The Poet', 'Imperator of the Sword Armada'],
    color: 'Gold',
    house: 'Fabii',
    firstAppearance: 0,
    relationships: [
      { targetId: 'darrow', type: 'enemy', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Betrayed Darrow at the Triumph. Now serves as Imperator of the Sovereign\'s Sword Armada.',
        status: 'alive',
        additionalDetails: 'His betrayal haunts Darrow. Once they were close friends.',
      },
      {
        chapter: 42,
        description: 'Meets Darrow and Mustang face to face in Romulus\'s orchard on Io, arguing for the Rim to stay loyal.',
        status: 'alive',
      },
      {
        chapter: 48,
        description: 'Out-maneuvered at Ilium; on the bridge of the Colossus he refuses Darrow\'s plea and takes his own life with his razor: \'I will not be a prisoner.\'',
        status: 'dead',
        additionalDetails: 'Darrow holds a funeral for him (ch 50) and later attends Roque\'s burial with Mustang.',
      },
    ],
    progressiveNames: [
      { chapter: 0, name: 'Roque / Imperator' },
    ],
  },
  {
    id: 'alia',
    name: 'Alia Snowsparrow',
    aliases: ['The Pale Queen', 'Queen of the Valkyrie'],
    color: 'Obsidian',
    firstAppearance: 28,
    relationships: [
      { targetId: 'ragnar', type: 'parent', revealedAtChapter: 28 },
      { targetId: 'sefi', type: 'parent', revealedAtChapter: 28 },
    ],
    progressiveInfo: [
      {
        chapter: 28,
        description: 'Named \'Alia Volarus, the Snowsparrow\'. Queen of the Valkyrie Obsidians and mother to Ragnar and Sefi, ruling the south pole of Mars.',
        status: 'alive',
      },
      {
        chapter: 31,
        description: 'Queen of the Valkyrie Obsidians. Ragnar and Sefi\'s mother. Rules the south pole of Mars.',
        status: 'alive',
        additionalDetails: 'Devout believer in the false gods. Refuses to accept the truth about Gold deception. Receives her son\'s corpse and, after hearing Darrow, has him and Mustang cast out into No Man\'s Land rather than defy the \'gods\'.',
      },
      {
        chapter: 34,
        description: 'Killed by her daughter Sefi after refusing to join the Rising. Her death ends the old ways of the Obsidians.',
        status: 'dead',
      },
    ],
  },
  {
    id: 'romulus',
    name: 'Romulus au Raa',
    aliases: ['The Moon Lord', 'ArchGovernor of Io'],
    color: 'Gold',
    house: 'Raa',
    firstAppearance: 41,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 41 },
    ],
    progressiveInfo: [
      {
        chapter: 41,
        description: 'Head of House Raa and ArchGovernor of Io. Leader of the Moon Lords who control Jupiter\'s moons.',
        status: 'alive',
        additionalDetails: 'The Rim Golds are more traditional and honorable than Core Golds.',
      },
      {
        chapter: 43,
        description: 'Swears the alliance with the Rising after Mustang\'s blood oath before two hundred Praetors; helps devise the battle plan.',
        status: 'alive',
      },
      {
        chapter: 45,
        description: 'His ships fight alongside the Rising fleet at the Battle of Ilium against the Sword Armada.',
        status: 'alive',
      },
      {
        chapter: 49,
        description: 'His forces help defeat the Sword Armada. The alliance between the Rising and the Moon Lords holds.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'dancer',
    name: 'Dancer',
    aliases: [],
    color: 'Red',
    firstAppearance: 0,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 8 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'A leader of the Sons of Ares and Darrow\'s first mentor in the rebellion.',
        status: 'alive',
      },
      {
        chapter: 8,
        description: 'Senior leader of the Sons of Ares on Tinos. Has been managing the rebellion during Darrow\'s imprisonment.',
        status: 'alive',
      },
      {
        chapter: 10,
        description: 'Advises Darrow on the state of the war. The Rising is struggling but still fighting.',
        status: 'alive',
      },
      {
        chapter: 65,
        description: 'Survives the war. Will help lead the migration of Reds to the surface of Mars.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'kavax',
    name: 'Kavax au Telemanus',
    aliases: [],
    color: 'Gold',
    house: 'Telemanus',
    firstAppearance: 16,
    relationships: [
      { targetId: 'daxo', type: 'parent', revealedAtChapter: 16 },
      { targetId: 'mustang', type: 'ally', revealedAtChapter: 16 },
    ],
    progressiveInfo: [
      {
        chapter: 16,
        description: 'Kavax au Telemanus, the bear-like Gold lord whose house is bound in loyalty to House Augustus and Mustang.',
        status: 'alive',
      },
      {
        chapter: 17,
        description: 'Captured by the Howlers at Quicksilver\'s tower after a duel of titans with Ragnar.',
        status: 'alive',
        additionalDetails: 'His pet fox Sophocles accompanies him.',
      },
      {
        chapter: 20,
        description: 'Interrogated by Darrow; reveals Mustang\'s peace plan with Quicksilver and that Orion and the Pax are alive.',
        status: 'alive',
      },
      {
        chapter: 25,
        description: 'Ragnar secretly let him out of the cell and told him where to find Darrow; he brings Mustang.',
        status: 'alive',
      },
      {
        chapter: 36,
        description: 'At Tinos with Daxo; declares Darrow \'family\' and stands with Mustang.',
        status: 'alive',
      },
      {
        chapter: 65,
        description: 'Present at Earth for the reunion with House Telemanus.',
        status: 'alive',
      },
      {
        chapter: 66,
        description: 'His wife is revealed to have guarded baby Pax in the asteroid belt during the war.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'daxo',
    name: 'Daxo au Telemanus',
    aliases: [],
    color: 'Gold',
    house: 'Telemanus',
    firstAppearance: 16,
    relationships: [
      { targetId: 'kavax', type: 'parent', revealedAtChapter: 16 },
    ],
    progressiveInfo: [
      {
        chapter: 16,
        description: 'Daxo au Telemanus, Kavax\'s eldest son. Tall, elegant, and an ally of Mustang.',
        status: 'alive',
      },
      {
        chapter: 17,
        description: 'Captured with his father at Quicksilver\'s tower after fighting Ragnar. Heir of House Telemanus, brother to the deceased Pax au Telemanus.',
        status: 'alive',
      },
      {
        chapter: 36,
        description: 'Fights alongside the Rising. Loyal to his family and to Mustang.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'lilath',
    name: 'Lilath au Faran',
    aliases: ['Leader of the Boneriders', 'Praetor'],
    color: 'Gold',
    house: 'Faran',
    firstAppearance: 2,
    relationships: [
      { targetId: 'jackal', type: 'ally', revealedAtChapter: 2 },
    ],
    progressiveInfo: [
      {
        chapter: 2,
        description: 'Leader of the Jackal\'s Boneriders. Bald-headed. Sits at his right hand.',
        status: 'alive',
        additionalDetails: 'Personal killer for the Jackal since the Institute. Utterly loyal to him.',
      },
      {
        chapter: 59,
        description: 'Supervises the amputation of Darrow\'s hand aboard the Lion of Mars.',
        status: 'alive',
      },
      {
        chapter: 63,
        description: 'Controls the nuclear detonation triggers for the Jackal. On the Lion of Mars ship.',
        status: 'alive',
      },
      {
        chapter: 64,
        description: 'Killed when the Lion of Mars is destroyed by the combined Gold fleets.',
        status: 'dead',
      },
    ],
  },
  {
    id: 'ash-lord',
    name: 'Magnus au Grimmus',
    aliases: ['The Ash Lord', 'Arch Imperator'],
    color: 'Gold',
    house: 'Grimmus',
    firstAppearance: 1,
    relationships: [
      { targetId: 'aja', type: 'child', revealedAtChapter: 2 },
      { targetId: 'octavia', type: 'ally', revealedAtChapter: 2 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'Magnus au Grimmus, the Ash Lord: the Sovereign\'s most feared commander, the man who burned the moon Rhea.',
        status: 'alive',
      },
      {
        chapter: 2,
        description: 'The Sovereign\'s Arch Imperator and father to Aja. Burned Rhea sixty years ago; the Sovereign keeps five hundred warheads \'in case the Ash Lord ever had to repeat Rhea\'.',
        status: 'alive',
      },
      {
        chapter: 63,
        description: 'Lysander suggests calling him to help stop the nuclear detonations. He orders his fleet to destroy the Lion of Mars.',
        status: 'alive',
        additionalDetails: 'The destruction of Rhea haunts him. He will not let Luna suffer the same fate.',
      },
      {
        chapter: 65,
        description: 'Retreats to Mercury with his core forces after Mustang becomes Sovereign.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'orion',
    name: 'Orion xe Aquarii',
    aliases: [],
    color: 'Blue',
    firstAppearance: 10,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 10 },
    ],
    progressiveInfo: [
      {
        chapter: 10,
        description: 'Believed dead with the Pax after the Triumph.',
        status: 'unknown',
      },
      {
        chapter: 18,
        description: 'Mustang reveals Orion and the Pax survived. Blue ship captain serving the Rising. Brilliant navigator and tactician.',
        status: 'alive',
      },
      {
        chapter: 45,
        description: 'Commands ships during major battles. Critical to the Rising\'s naval operations.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'quicksilver',
    name: 'Regulus ag Sun',
    aliases: ['Quicksilver'],
    color: 'Silver',
    firstAppearance: 13,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 13 },
    ],
    progressiveInfo: [
      {
        chapter: 13,
        description: 'Named as the Jackal\'s silent partner — a mysterious financier of unknown loyalties.',
        status: 'alive',
      },
      {
        chapter: 21,
        description: 'Revealed to be a Son of Ares - Fitchner\'s secret partner and financier - after the Howlers kidnap him from his Phobos tower.',
        status: 'alive',
        additionalDetails: 'His wealth has been crucial to keeping the rebellion supplied.',
      },
      {
        chapter: 65,
        description: 'Promises to help rebuild Luna after the nuclear devastation.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'mickey',
    name: 'Mickey',
    aliases: ['Mickey the Carver'],
    color: 'Violet',
    firstAppearance: 8,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 8 },
    ],
    progressiveInfo: [
      {
        chapter: 8,
        description: 'The Violet Carver who transformed Darrow from Red to Gold. Still working with the Sons of Ares.',
        status: 'alive',
      },
      {
        chapter: 65,
        description: 'With Virany, reattaches the hand the Jackal cut off in ch 59, recovered from the Jackal\'s shuttle.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'theodora',
    name: 'Theodora',
    aliases: ['The Rose'],
    color: 'Pink',
    firstAppearance: 8,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 8 },
    ],
    progressiveInfo: [
      {
        chapter: 8,
        description: 'Darrow\'s former steward and social advisor. Now works for the Sons; she designed the operation that freed Darrow\'s family.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'deanna',
    name: 'Deanna of Lykos',
    aliases: ["Darrow's Mother"],
    color: 'Red',
    firstAppearance: 8,
    relationships: [
      { targetId: 'darrow', type: 'parent', revealedAtChapter: 8 },
      { targetId: 'kieran', type: 'parent', revealedAtChapter: 8 },
    ],
    progressiveInfo: [
      {
        chapter: 8,
        description: 'Darrow\'s mother. Brought to Tinos with the Lykos clan by the Sons (Theodora\'s operation).',
        status: 'alive',
        additionalDetails: 'Has gray hair now. Has had a stroke; grieved Darrow for nine months.',
      },
      {
        chapter: 65,
        description: 'Present on Earth when Darrow meets his son Pax for the first time. Carries the child to him.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'kieran',
    name: 'Kieran of Lykos',
    aliases: ["Darrow's Brother"],
    color: 'Red',
    firstAppearance: 1,
    relationships: [
      { targetId: 'darrow', type: 'sibling', revealedAtChapter: 8 },
      { targetId: 'deanna', type: 'parent', revealedAtChapter: 8 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'Darrow\'s older brother, still living in the mining colony of Lykos.',
        status: 'alive',
      },
      {
        chapter: 8,
        description: 'Darrow\'s brother. Rescued from Lykos with the rest of the family.',
        status: 'alive',
      },
      {
        chapter: 65,
        description: 'Present on Earth for the family reunion. Walks with his mother.',
        status: 'alive',
      },
    ],
  },

  // ========== REFERENCED/DECEASED CHARACTERS ==========
  {
    id: 'eo',
    name: 'Eo',
    aliases: ['Persephone'],
    color: 'Red',
    firstAppearance: 0,
    relationships: [
      { targetId: 'darrow', type: 'spouse', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Darrow\'s late wife, executed years ago for singing the forbidden song. Her memory sustains him through his imprisonment.',
        status: 'dead',
        additionalDetails: 'Darrow sees visions of her in the darkness. Her image is etched into his razor.',
      },
      {
        chapter: 65,
        description: 'Mustang brings Darrow to a beach on Earth that Eo would have loved. Her dream lives on in their victory.',
        status: 'dead',
      },
    ],
  },
  {
    id: 'fitchner',
    name: 'Fitchner au Barca',
    aliases: ['Ares'],
    color: 'Gold',
    house: 'Barca',
    firstAppearance: 0,
    relationships: [
      { targetId: 'sevro', type: 'parent', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'The original Ares, killed during the Triumph betrayal. Sevro has taken up his father\'s mantle.',
        status: 'dead',
        additionalDetails: 'His death is a wound that never heals for Sevro.',
      },
    ],
  },
  {
    id: 'pax-telemanus',
    name: 'Pax au Telemanus',
    aliases: [],
    color: 'Gold',
    house: 'Telemanus',
    firstAppearance: 8,
    relationships: [
      { targetId: 'kavax', type: 'parent', revealedAtChapter: 8 },
      { targetId: 'darrow', type: 'friend', revealedAtChapter: 8 },
    ],
    progressiveInfo: [
      {
        chapter: 8,
        description: 'The giant Gold who died protecting Darrow at the Institute. His memory still honored.',
        status: 'dead',
        additionalDetails: 'Killed by the Jackal. Darrow names his son after him.',
      },
    ],
  },
  {
    id: 'pax-son',
    name: 'Pax',
    aliases: ["Darrow's Son"],
    color: 'Gold',
    firstAppearance: 65,
    relationships: [
      { targetId: 'darrow', type: 'parent', revealedAtChapter: 65 },
      { targetId: 'mustang', type: 'parent', revealedAtChapter: 65 },
    ],
    progressiveInfo: [
      {
        chapter: 65,
        description: 'Revealed as Darrow and Mustang\'s son when Mustang brings him to the beach on Earth: \'That is our son. His name is Pax.\' Named after Pax au Telemanus.',
        status: 'alive',
        additionalDetails: 'Has golden hair like his mother.',
      },
      {
        chapter: 66,
        description: 'Born nine months after the Lion\'s Rain while Darrow was imprisoned.',
        status: 'alive',
        additionalDetails: 'Kept hidden with Kavax\'s wife in the asteroid belt during the war.',
      },
    ],
  },
];

// Family groupings for Morning Star
export const morningStarFamilyGroups: FamilyGroup[] = [
  {
    id: 'darrow-family',
    name: "Darrow's Family",
    members: ['darrow', 'deanna', 'kieran', 'eo', 'mustang', 'pax-son'],
  },
  {
    id: 'house-augustus',
    name: 'House Augustus',
    members: ['mustang', 'jackal'],
  },
  {
    id: 'house-bellona',
    name: 'House Bellona',
    members: ['cassius'],
  },
  {
    id: 'sovereign-court',
    name: "The Sovereign's Court",
    members: ['octavia', 'lysander', 'aja', 'ash-lord', 'cassius'],
  },
  {
    id: 'house-telemanus',
    name: 'House Telemanus',
    members: ['kavax', 'daxo', 'pax-telemanus'],
  },
  {
    id: 'house-julii',
    name: 'House Julii',
    members: ['victra', 'antonia'],
  },
  {
    id: 'obsidians',
    name: 'Obsidian Clans',
    members: ['ragnar', 'sefi', 'alia'],
  },
  {
    id: 'sons-of-ares',
    name: 'Sons of Ares',
    members: ['sevro', 'dancer', 'fitchner', 'mickey', 'theodora', 'holiday', 'trigg'],
  },
  {
    id: 'howlers',
    name: 'The Howlers',
    members: ['sevro', 'ragnar', 'victra', 'holiday'],
  },
  {
    id: 'boneriders',
    name: 'The Boneriders',
    members: ['jackal', 'lilath'],
  },
  {
    id: 'moon-lords',
    name: 'Moon Lords of the Rim',
    members: ['romulus'],
  },
  {
    id: 'nakamura-siblings',
    name: 'Nakamura Siblings',
    members: ['holiday', 'trigg'],
  },
];

export const morningStarBook: Book = {
  id: 'morning-star',
  title: 'Morning Star',
  author: 'Pierce Brown',
  chapters,
  characters,
};
