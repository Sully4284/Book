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
  { number: 48, title: 'Roque' },
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
        description: 'Rescued by Sevro and the Sons of Ares. Escapes from Attica with the help of Holiday and Trigg.',
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
        chapter: 33,
        description: 'Fights Aja alongside Ragnar. Ragnar is killed in the battle.',
        status: 'alive',
        additionalDetails: 'Ragnar\'s death deeply affects him.',
      },
      {
        chapter: 45,
        description: 'Leads the Rising fleet at the Battle of Ilium against Roque\'s Sword Armada.',
        status: 'alive',
      },
      {
        chapter: 49,
        description: 'Defeats Roque and captures the Colossus. Mourns Roque despite his betrayal.',
        status: 'alive',
      },
      {
        chapter: 60,
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
        description: 'Meets his son Pax for the first time on Earth. Reunites with his family.',
        status: 'alive',
        additionalDetails: 'Virginia reveals she was pregnant during the Triumph. Their son is named after Pax au Telemanus.',
      },
    ],
    progressiveNames: [
      { chapter: 0, name: 'Prisoner L17L6363' },
      { chapter: 7, name: 'Darrow / The Reaper' },
      { chapter: 65, name: 'Darrow / The Morning Star' },
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
      { targetId: 'victra', type: 'lover', revealedAtChapter: 12 },
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
        chapter: 12,
        description: 'His relationship with Victra deepens. They become lovers.',
        status: 'alive',
      },
      {
        chapter: 54,
        description: 'Fakes his own death as part of the plan to infiltrate Luna. His "execution" is broadcast across the system.',
        status: 'alive',
        additionalDetails: 'His fake death deeply affects Cassius and begins to turn him against the Sovereign.',
      },
      {
        chapter: 55,
        description: 'Marries Victra in a private ceremony on the ship.',
        status: 'alive',
      },
      {
        chapter: 60,
        description: 'Helps kill Aja in the Sovereign\'s bunker. Nearly dies in the fight.',
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
    aliases: ['Mustang', 'The Lioness'],
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
        description: 'Separated from Darrow since the Triumph betrayal. Leading her own faction against the Sovereign.',
        status: 'alive',
      },
      {
        chapter: 23,
        description: 'Reunites with Darrow and the Rising. Brings her forces to join the rebellion.',
        status: 'alive',
      },
      {
        chapter: 60,
        description: 'Fights alongside Darrow against Aja and the Sovereign. Proves herself a fierce warrior.',
        status: 'alive',
      },
      {
        chapter: 64,
        description: 'Executes her brother the Jackal by hanging. Shows him mercy by pulling his feet to break his neck quickly.',
        status: 'alive',
        additionalDetails: 'Despite everything, she cannot watch him suffer.',
      },
      {
        chapter: 65,
        description: 'Becomes the new Sovereign of the Republic. Reveals to Darrow that she was pregnant during the Triumph - they have a son named Pax.',
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
    aliases: ['The Julii Fury'],
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
        description: 'Pregnant with Sevro\'s child. They will raise their family in the new world they helped create.',
        status: 'alive',
      },
    ],
    progressiveNames: [
      { chapter: 55, name: 'Victra au Barca' },
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
      { targetId: 'sefi', type: 'sibling', revealedAtChapter: 26 },
      { targetId: 'alia', type: 'parent', revealedAtChapter: 26 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'The giant Obsidian warrior who swore himself to Darrow. Has been fighting with the Rising since the Triumph.',
        status: 'alive',
      },
      {
        chapter: 26,
        description: 'Returns to his homeland with Darrow to recruit the Obsidians. Reunites with his sister Sefi.',
        status: 'alive',
      },
      {
        chapter: 31,
        description: 'Confronts his mother Alia, the Pale Queen, who refuses to believe the gods are false.',
        status: 'alive',
      },
      {
        chapter: 33,
        description: 'Killed by Aja in combat defending Darrow. He dies saving his people and proving the gods are mortal.',
        status: 'dead',
        additionalDetails: 'His death inspires Sefi to kill their mother and lead the Obsidians to freedom.',
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
        chapter: 51,
        description: 'Reveals he has hidden nuclear bombs throughout Luna. Uses them to blackmail the Sovereign.',
        status: 'alive',
        additionalDetails: 'Plans to become Sovereign himself by holding three billion lives hostage.',
      },
      {
        chapter: 62,
        description: 'Detonates several nuclear bombs on Luna, killing millions. Demands Darrow kill himself in exchange for stopping.',
        status: 'alive',
      },
      {
        chapter: 63,
        description: 'Darrow rips out his tongue to prevent him from ordering more detonations. Captured and rendered mute.',
        status: 'alive',
      },
      {
        chapter: 64,
        description: 'Executed by hanging in a public square on Luna. Mustang pulls his feet to break his neck, showing him mercy even at the end.',
        status: 'dead',
        additionalDetails: 'His nuclear attack killed over twelve million people before being stopped.',
      },
    ],
  },
  {
    id: 'octavia',
    name: 'Octavia au Lune',
    aliases: ['The Sovereign', 'Grandmother'],
    color: 'Gold',
    house: 'Lune',
    firstAppearance: 2,
    relationships: [
      { targetId: 'lysander', type: 'grandparent', revealedAtChapter: 2 },
      { targetId: 'aja', type: 'ally', revealedAtChapter: 2 },
      { targetId: 'ash-lord', type: 'ally', revealedAtChapter: 2 },
    ],
    progressiveInfo: [
      {
        chapter: 2,
        description: 'The Sovereign of the Society. Has sent Aja to retrieve Darrow for dissection by her Carvers.',
        status: 'alive',
      },
      {
        chapter: 51,
        description: 'Under blackmail by the Jackal who has hidden nuclear weapons throughout Luna. Forced to cooperate with his demands.',
        status: 'alive',
      },
      {
        chapter: 60,
        description: 'Killed by Cassius in the Sovereign\'s bunker after Cassius turns against her. He stabs her through the heart.',
        status: 'dead',
        additionalDetails: 'Cassius kills her as revenge for ordering the massacre of House Bellona and for the injustice of her rule.',
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
        chapter: 33,
        description: 'Kills Ragnar Volarus in combat in the Obsidian lands. Her blade proves too fast even for the mighty Obsidian.',
        status: 'alive',
        additionalDetails: 'One of the deadliest warriors in the Society.',
      },
      {
        chapter: 60,
        description: 'Killed in the Sovereign\'s bunker by Darrow, Sevro, Cassius, and Mustang working together. Even four-on-one, she nearly defeats them.',
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
        description: 'Deeply troubled by Sevro\'s apparent execution. Begins to question his loyalty to the Sovereign.',
        status: 'alive',
      },
      {
        chapter: 60,
        description: 'Turns against the Sovereign and kills Octavia au Lune. Helps Darrow and the others fight Aja.',
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
        additionalDetails: 'Returns Julian\'s ring that Darrow gave him. They part as friends after six years of conflict.',
      },
    ],
    progressiveNames: [
      { chapter: 2, name: 'Cassius / The Morning Knight' },
      { chapter: 60, name: 'Cassius' },
    ],
  },
  {
    id: 'antonia',
    name: 'Antonia au Severus-Julii',
    aliases: ['The Snake'],
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
        chapter: 50,
        description: 'Captured by the Rising forces during the assault on Luna.',
        status: 'alive',
      },
      {
        chapter: 64,
        description: 'Executed for her crimes against House Julii and the Rising.',
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
    firstAppearance: 57,
    relationships: [
      { targetId: 'octavia', type: 'grandparent', revealedAtChapter: 57 },
      { targetId: 'cassius', type: 'ally', revealedAtChapter: 60 },
    ],
    progressiveInfo: [
      {
        chapter: 57,
        description: 'Present on Luna during the final assault. Young heir to House Lune.',
        status: 'alive',
      },
      {
        chapter: 60,
        description: 'Witnesses his grandmother\'s death at Cassius\'s hands. Suggests calling the Ash Lord to help stop the nuclear detonations.',
        status: 'alive',
        additionalDetails: 'Shows maturity beyond his years in the crisis.',
      },
      {
        chapter: 64,
        description: 'Hands the Dawn Scepter to Mustang, legitimizing her claim to be Sovereign. Kneels before her.',
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
    firstAppearance: 26,
    relationships: [
      { targetId: 'ragnar', type: 'sibling', revealedAtChapter: 26 },
      { targetId: 'alia', type: 'parent', revealedAtChapter: 26 },
    ],
    progressiveInfo: [
      {
        chapter: 26,
        description: 'Ragnar\'s sister and a warlord of the Valkyrie tribe. Known as "the Quiet" for her stoic demeanor.',
        status: 'alive',
      },
      {
        chapter: 31,
        description: 'Skeptical of Darrow and the Rising at first. Questions whether the Golds are truly false gods.',
        status: 'alive',
      },
      {
        chapter: 34,
        description: 'After Ragnar\'s death, kills her mother Alia and takes leadership of the Valkyrie. Commits the Obsidians to the Rising.',
        status: 'alive',
        additionalDetails: 'Her mother refused to accept the truth about the false gods.',
      },
      {
        chapter: 65,
        description: 'Leading the Obsidian migration to Mars. Working to free her people from their centuries of enslavement.',
        status: 'alive',
      },
    ],
    progressiveNames: [
      { chapter: 26, name: 'Sefi the Quiet' },
      { chapter: 34, name: 'Sefi / Queen of the Valkyrie' },
    ],
  },
  {
    id: 'holiday',
    name: 'Holiday ti Nakamura',
    aliases: ['Holi'],
    color: 'Gray',
    firstAppearance: 2,
    relationships: [
      { targetId: 'trigg', type: 'sibling', revealedAtChapter: 2 },
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 2 },
    ],
    progressiveInfo: [
      {
        chapter: 2,
        description: 'Gray operative posing as a member of the Thirteenth Legion (Aja\'s dragoons). Helps rescue Darrow from the Jackal\'s prison.',
        status: 'alive',
        additionalDetails: 'Nutcracker jaw, ashen Mohawk hair. Has a bionic eye. From South Pacifica on Earth.',
      },
      {
        chapter: 7,
        description: 'Her brother Trigg is killed during the escape from Attica. She survives and continues fighting despite her grief.',
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
    firstAppearance: 2,
    relationships: [
      { targetId: 'holiday', type: 'sibling', revealedAtChapter: 2 },
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 2 },
    ],
    progressiveInfo: [
      {
        chapter: 2,
        description: 'Holiday\'s younger brother. Gray operative who helps rescue Darrow. Loyal and earnest.',
        status: 'alive',
        additionalDetails: 'Two gold teardrop tattoos under his right eye. Boyish face. Carries Darrow\'s razor.',
      },
      {
        chapter: 7,
        description: 'Killed during the escape from Attica while rescuing Darrow. Dies heroically fighting Aja and her soldiers.',
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
        description: 'Commands the Society fleet against the Rising at Jupiter. A brilliant naval tactician.',
        status: 'alive',
      },
      {
        chapter: 49,
        description: 'Defeated in battle when Darrow captures the Colossus. Commits suicide on the bridge rather than surrender.',
        status: 'dead',
        additionalDetails: 'Darrow mourns him despite his betrayal. Gives him a funeral fit for a Roman emperor.',
      },
    ],
    progressiveNames: [
      { chapter: 0, name: 'Roque / The Betrayer' },
      { chapter: 42, name: 'Roque / Imperator' },
    ],
  },
  {
    id: 'alia',
    name: 'Alia Snowsparrow',
    aliases: ['The Pale Queen', 'Queen of the Valkyrie'],
    color: 'Obsidian',
    firstAppearance: 31,
    relationships: [
      { targetId: 'ragnar', type: 'parent', revealedAtChapter: 31 },
      { targetId: 'sefi', type: 'parent', revealedAtChapter: 31 },
    ],
    progressiveInfo: [
      {
        chapter: 31,
        description: 'Queen of the Valkyrie Obsidians. Ragnar and Sefi\'s mother. Rules the south pole of Mars.',
        status: 'alive',
        additionalDetails: 'Devout believer in the false gods. Refuses to accept the truth about Gold deception.',
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
        chapter: 45,
        description: 'Allies with Darrow against the Sovereign. The Moon Lords bring their considerable fleet to the fight.',
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
    firstAppearance: 8,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 8 },
    ],
    progressiveInfo: [
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
    aliases: ['The Giant'],
    color: 'Gold',
    house: 'Telemanus',
    firstAppearance: 24,
    relationships: [
      { targetId: 'daxo', type: 'parent', revealedAtChapter: 24 },
      { targetId: 'mustang', type: 'ally', revealedAtChapter: 24 },
    ],
    progressiveInfo: [
      {
        chapter: 24,
        description: 'Patriarch of House Telemanus. Captured by the Rising but released by Ragnar\'s decision to show good faith.',
        status: 'alive',
        additionalDetails: 'His pet fox Sophocles accompanies him. Massive red-bearded Gold.',
      },
      {
        chapter: 35,
        description: 'Returns with House Telemanus\'s forces to support Mustang and the Rising.',
        status: 'alive',
      },
      {
        chapter: 65,
        description: 'Kavax\'s wife guarded baby Pax in the asteroid belt during the war. Present at Earth for the reunion.',
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
    firstAppearance: 24,
    relationships: [
      { targetId: 'kavax', type: 'parent', revealedAtChapter: 24 },
    ],
    progressiveInfo: [
      {
        chapter: 24,
        description: 'Heir of House Telemanus. Kavax\'s son and brother to the deceased Pax au Telemanus.',
        status: 'alive',
      },
      {
        chapter: 35,
        description: 'Fights alongside the Rising. Loyal to his family and to Mustang.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'lilath',
    name: 'Lilath au Faran',
    aliases: ['The Bonerider Captain'],
    color: 'Gold',
    house: 'Faran',
    firstAppearance: 2,
    relationships: [
      { targetId: 'jackal', type: 'ally', revealedAtChapter: 2 },
    ],
    progressiveInfo: [
      {
        chapter: 2,
        description: 'Leader of the Jackal\'s Boneriders. Bald-headed with eel-like eyes. Sits at his right hand.',
        status: 'alive',
        additionalDetails: 'Personal killer for the Jackal since the Institute. Utterly loyal to him.',
      },
      {
        chapter: 62,
        description: 'Controls the nuclear detonation triggers for the Jackal. On the Lion of Mars ship.',
        status: 'alive',
      },
      {
        chapter: 63,
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
    firstAppearance: 2,
    relationships: [
      { targetId: 'aja', type: 'child', revealedAtChapter: 2 },
      { targetId: 'octavia', type: 'ally', revealedAtChapter: 2 },
    ],
    progressiveInfo: [
      {
        chapter: 2,
        description: 'The Sovereign\'s Arch Imperator and father to Aja. Destroyed Rhea - responsible for billions of deaths.',
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
    firstAppearance: 13,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 13 },
    ],
    progressiveInfo: [
      {
        chapter: 13,
        description: 'Blue ship captain serving the Rising. Brilliant navigator and tactician.',
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
    firstAppearance: 21,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 21 },
    ],
    progressiveInfo: [
      {
        chapter: 21,
        description: 'Richest man in the Society. A Silver who secretly supports the Rising with funds and resources.',
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
        description: 'Reattaches Darrow\'s hand (which was cut off during the fighting). Works with Virany.',
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
        description: 'Darrow\'s former steward and social advisor. Now helps manage communications for the Rising.',
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
        description: 'Darrow\'s mother. Rescued from Lykos by Sevro before the Jackal could capture her.',
        status: 'alive',
        additionalDetails: 'Has gray hair now. Waited for her son for over a year.',
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
    firstAppearance: 8,
    relationships: [
      { targetId: 'darrow', type: 'sibling', revealedAtChapter: 8 },
      { targetId: 'deanna', type: 'parent', revealedAtChapter: 8 },
    ],
    progressiveInfo: [
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
        description: 'Darrow and Mustang\'s son, born nine months after the Lion\'s Rain while Darrow was imprisoned. Named after Pax au Telemanus.',
        status: 'alive',
        additionalDetails: 'Has golden hair like his mother. Kept hidden with Kavax\'s wife in the asteroid belt during the war.',
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
    members: ['octavia', 'lysander', 'aja', 'ash-lord'],
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
    members: ['jackal', 'lilath', 'antonia'],
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
