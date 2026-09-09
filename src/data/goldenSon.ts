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
        description: 'Ambushes Darrow at the Academy hot spring with six Bellona relatives ("Seven Bellona" in total). Beats and humiliates him, shaving his hair and urinating on him.',
        status: 'alive',
        additionalDetails: 'His list of fines paid for murder stretches longer than an arm. Once broke a Luneborn Gold\'s spine over his knee at a Pearl club; his true reputation comes from killing Claudius au Augustus, the ArchGovernor\'s favorite son and heir, in a duel.',
      },
      {
        chapter: 12,
        description: 'At the Luna gala melee, beheads Leto au Augustus after the Jackal secretly paralyzes Leto with a poisoned stylus.',
        status: 'alive',
      },
      {
        chapter: 42,
        description: 'Aboard the Sovereign\'s shuttle fleeing Agea after the Iron Rain, charges the captive Darrow. Cuts through Darrow\'s collarbone but is ultimately defeated.',
        status: 'dead',
        additionalDetails: 'Stabbed through the stomach and decapitated by Darrow; Fitchner keeps the footage.',
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
        description: 'Head of House Bellona and an Imperator of the Society\'s fleet. Father to Cassius, Julian, Karnus and their many siblings.',
        status: 'alive',
      },
      {
        chapter: 37,
        description: 'Commands House Bellona\'s forces during the Martian Civil War.',
        status: 'alive',
      },
      {
        chapter: 38,
        description: 'Commands the Bellona fleet from the flagship Warchild during the Iron Rain; Telemanus leechCraft board his ship.',
        status: 'unknown',
      },
      {
        chapter: 51,
        description: 'Dead by the time of Darrow\'s Triumph in Agea: the heads of Imperator Bellona and his brothers and sisters are displayed on pikes in the parade.',
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
    firstAppearance: 5,
    relationships: [
      { targetId: 'tiberius-bellona', type: 'spouse', revealedAtChapter: 5 },
      { targetId: 'cassius', type: 'parent', revealedAtChapter: 5 },
      { targetId: 'julian', type: 'parent', revealedAtChapter: 5 },
      { targetId: 'karnus', type: 'parent', revealedAtChapter: 5 },
    ],
    progressiveInfo: [
      {
        chapter: 5,
        description: 'Matriarch of House Bellona. Every night she sits at the family table with an empty silver tray, demanding Darrow\'s heart.',
        status: 'alive',
        additionalDetails: 'The driving force behind Bellona\'s vendetta against Darrow for killing Julian.',
      },
      {
        chapter: 12,
        description: 'Present at the Sovereign\'s gala on Luna when Darrow duels Cassius. After Darrow severs Cassius\'s sword arm she screams for Darrow\'s death; it is the Sovereign who halts the duel, and the melee erupts when Cagney au Bellona steals a razor.',
        status: 'alive',
      },
      {
        chapter: 51,
        description: 'Fate not stated. House Bellona is destroyed after Augustus\'s victory on Mars; Cassius accuses Darrow of killing his entire family.',
        status: 'unknown',
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
    firstAppearance: 12,
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
        chapter: 12,
        description: 'Presides over the Summit gala on Luna. Shows open favoritism to the Bellona by halting Darrow\'s duel with Cassius; the resulting brawl shatters the peace between the houses.',
        status: 'alive',
      },
      {
        chapter: 18,
        description: 'At a private dinner tries to force Darrow\'s hand by holding Augustus; Aja acts on her whispered orders and Darrow\'s party fights its way off Luna.',
        status: 'alive',
      },
      {
        chapter: 51,
        description: 'Her secret alliance with the Jackal and Roque is revealed at Darrow\'s Triumph. Her Praetorians, Aja and Cassius seize Darrow alive under her orders ("Dissection"); she wanted Augustus taken alive too, but the Jackal shoots him.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'lysander',
    name: 'Lysander au Lune',
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
        description: 'Young heir to House Lune and grandson of the Sovereign. No older than eight. His eyes are beyond gold, almost yellow crystal.',
        status: 'alive',
        additionalDetails: 'Being groomed by Octavia and guarded by Aja. Observant and composed beyond his years; also the grandson of Lorn au Arcos.',
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
      { targetId: 'lorn', type: 'mentor', revealedAtChapter: 14 },
    ],
    progressiveInfo: [
      {
        chapter: 14,
        description: 'The Sovereign\'s favorite killer and bodyguard. Olympic Knight - the Protean Knight. One of the Furies, the sisters Octavia trusts above all others.',
        status: 'alive',
        additionalDetails: 'A powerful panther of a woman with skin duskier than her siblings\', and slitted pupils. Lorn au Arcos\'s last student before Darrow.',
      },
      {
        chapter: 18,
        description: 'At the Sovereign\'s dinner on Luna, seizes Quinn by the hair and smashes her skull with an armored fist as bait to draw Darrow out.',
        status: 'alive',
      },
      {
        chapter: 29,
        description: 'Leads the Sovereign\'s strike on Lorn\'s home on Europa in league with Pliny.',
        status: 'alive',
      },
      {
        chapter: 42,
        description: 'Aboard the Sovereign\'s shuttle with the captured Darrow. Octavia orders his head taken; before Aja can act, Fitchner reveals himself as Ares and escapes with Darrow.',
        status: 'alive',
        additionalDetails: 'Considered nearly impossible to defeat in single combat.',
      },
      {
        chapter: 51,
        description: 'Lands with Praetorians and Cassius at Darrow\'s Triumph, closes her mentor Lorn\'s eyes, and carries Darrow off alive on the Sovereign\'s orders.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'moira',
    name: 'Moira au Grimmus',
    aliases: ['The Politico Fury'],
    color: 'Gold',
    house: 'Grimmus',
    firstAppearance: 35,
    relationships: [
      { targetId: 'octavia', type: 'ally', revealedAtChapter: 35 },
      { targetId: 'aja', type: 'sibling', revealedAtChapter: 35 },
    ],
    progressiveInfo: [
      {
        chapter: 35,
        description: 'The Sovereign\'s chief Politico and one of the Furies. Sits at Pliny\'s side negotiating for Octavia when Darrow storms the meeting. "A puffy pastry of a woman" next to Aja, but her sweet smile is "half again as sinister as her sister\'s razor."',
        status: 'alive',
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
    firstAppearance: 28,
    relationships: [
      { targetId: 'lysander', type: 'grandparent', revealedAtChapter: 14 },
      { targetId: 'darrow', type: 'mentor', revealedAtChapter: 6 },
      { targetId: 'aja', type: 'mentor', revealedAtChapter: 14 },
    ],
    progressiveInfo: [
      {
        chapter: 28,
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
        chapter: 29,
        description: 'After Tactus (now fighting for the Bellona) holds Lorn\'s grandchildren hostage and then surrenders to Darrow, Lorn kills him with an ion-dagger once the children are gone: "Now that the children are gone, consequences."',
        status: 'alive',
      },
      {
        chapter: 51,
        description: 'Murdered at Darrow\'s Triumph: Lilath, disguised as a Pink, cuts his throat from behind with a pulseDagger (he loses four fingers blocking it) and the Jackal finishes him with a blade to the belly. He never drew his razor.',
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
    firstAppearance: 12,
    relationships: [
      { targetId: 'daxo', type: 'parent', revealedAtChapter: 12 },
      { targetId: 'pax', type: 'parent', revealedAtChapter: 12 },
      { targetId: 'mustang', type: 'ally', revealedAtChapter: 12 },
    ],
    progressiveInfo: [
      {
        chapter: 12,
        description: 'Patriarch of House Telemanus. Gigantic even for a Gold with a red beard. Wields a razor half the size of Darrow\'s body.',
        status: 'alive',
        additionalDetails: 'Eccentric and boisterous. Bald head engraved with golden angels. Known for his close relationship with Sophocles, the family pet fox.',
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
    firstAppearance: 12,
    relationships: [
      { targetId: 'kavax', type: 'parent', revealedAtChapter: 12 },
      { targetId: 'pax', type: 'sibling', revealedAtChapter: 12 },
    ],
    progressiveInfo: [
      {
        chapter: 12,
        description: 'Heir and eldest son of Kavax. A great boulder of a man like his father, bald head engraved with golden angels, sleepy eyes under swirling eyebrows. A Praetor of House Augustus.',
        status: 'alive',
        additionalDetails: 'Soft-voiced and always smiling; sucks on cinnamon sticks. Said to have bitten off two of his father\'s fingers as a child.',
      },
    ],
  },

  // HOUSE JULII
  {
    id: 'victra',
    name: 'Victra au Julii',
    color: 'Gold',
    house: 'Julii',
    firstAppearance: 1,
    relationships: [
      { targetId: 'antonia', type: 'sibling', revealedAtChapter: 1, description: 'Half-sister' },
      { targetId: 'agrippina', type: 'parent', revealedAtChapter: 1 },
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 1 },
      { targetId: 'sevro', type: 'friend', revealedAtChapter: 51 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'Lancer of House Augustus and half-sister to Antonia. Heavy, deeply set eyes and a wide, sensual mouth. Resembles her mother Agrippina.',
        status: 'alive',
        additionalDetails: 'Tall and athletic. Striking rather than conventionally beautiful. Impetuous and cruel, but loyal.',
      },
      {
        chapter: 51,
        description: 'Has brought her mother and Antonia back into the Augustus fold after the war on Mars (Antonia helped take Thessalonica from the Bellona). Shot twice in the spine by Antonia at Darrow\'s Triumph. Crawls to Darrow protesting "I didn\'t know"; her eyes close as he is carried away, and Cassius counts her among the dead.',
        status: 'unknown',
      },
    ],
  },
  {
    id: 'agrippina',
    name: 'Agrippina au Julii',
    aliases: ['The Julii Matriarch'],
    color: 'Gold',
    house: 'Julii',
    firstAppearance: 15,
    relationships: [
      { targetId: 'victra', type: 'parent', revealedAtChapter: 36 },
      { targetId: 'antonia', type: 'parent', revealedAtChapter: 36 },
    ],
    progressiveInfo: [
      {
        chapter: 15,
        description: 'Head of House Julii and mother of Victra and Antonia. One of the most powerful Gold matriarchs on Mars.',
        status: 'alive',
      },
      {
        chapter: 36,
        description: 'Head of House Julii and mother to Victra and Antonia. Known as a schemer who cares about money above all. Skeletal and gaunt appearance.',
        status: 'alive',
        additionalDetails: 'Her betrayal of Augustus early in the war depleted his fleet; by the eve of the Iron Rain she is counted among his enemies alongside Octavia and the Bellona.',
      },
      {
        chapter: 51,
        description: 'Back in the Augustus fold by the time of the Triumph, brought over by Victra. Shot twice in the neck by her own daughter Antonia at Darrow\'s Triumph.',
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
        description: 'Launches a coup while Darrow is on Europa: arrests the Jackal, seizes control of the Augustus fleet, declares Darrow dead, and opens negotiations to hand Darrow to the Sovereign.',
        status: 'alive',
      },
      {
        chapter: 35,
        description: 'Darrow crashes his peace talks with the Sovereign\'s envoys, slaps him twice, sets him back in the ArchGovernor\'s chair and walks away; the assembled Peerless cut him down before Darrow has left the room.',
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
      { targetId: 'nero-augustus', type: 'parent', revealedAtChapter: 4, description: 'Adopted ward' },
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
        chapter: 12,
        description: 'At the Luna gala, intercepts Karnus in front of Augustus but freezes mid-swing - paralyzed by the Jackal\'s poisoned stylus - and Karnus beheads him. Augustus mourns him like a son.',
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
    firstAppearance: 2,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 2 },
    ],
    progressiveInfo: [
      {
        chapter: 2,
        description: 'Darrow\'s personal valet and social advisor. A former Rose courtesan well past prime age. Graceful and composed.',
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
      { targetId: 'lorn', type: 'mentor', revealedAtChapter: 6 },
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
        chapter: 28,
        description: 'Seeks out Lorn au Arcos on Europa to learn proper swordsmanship and recruit the legendary warrior.',
        status: 'alive',
      },
      {
        chapter: 12,
        description: 'Duels Cassius at the Summit gala on Luna and severs his sword arm. The Sovereign\'s attempt to halt the duel and a stolen razor spark a bloody melee between the houses; Darrow flees Luna with Augustus.',
        status: 'alive',
      },
      {
        chapter: 42,
        description: 'Captured aboard the Sovereign\'s shuttle after falling in the Iron Rain. Kills Karnus when he charges, then is saved from execution when Fitchner reveals himself as Ares.',
        status: 'alive',
      },
      {
        chapter: 47,
        description: 'Returns to Lykos with Ragnar and confronts the Grays of the Pot.',
        status: 'alive',
      },
      {
        chapter: 50,
        description: 'Tells Mustang the truth - that he is a Red - in the mines of Lykos; she walks away from him.',
        status: 'alive',
      },
      {
        chapter: 51,
        description: 'At his Triumph in Agea, Roque poisons him with a needle-ring; the Jackal, Roque, Antonia, Lilath and Vixus turn on the Augustans, Lorn and Nero are killed, and Darrow - paralyzed - is carried off alive by Aja and Cassius for "dissection." The box holds Fitchner\'s head.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'sevro',
    name: 'Sevro au Barca',
    aliases: ['Goblin', 'The Howler'],
    color: 'Gold',
    house: 'Barca',
    firstAppearance: 2,
    relationships: [
      { targetId: 'darrow', type: 'friend', revealedAtChapter: 0 },
      { targetId: 'fitchner', type: 'parent', revealedAtChapter: 0 },
      { targetId: 'victra', type: 'friend', revealedAtChapter: 51 },
    ],
    progressiveInfo: [
      {
        chapter: 2,
        description: 'Lead Howler and Darrow\'s most loyal friend. Has been stationed on Pluto, growing stranger and more lonely.',
        status: 'alive',
        additionalDetails: 'Still sends perverted unicorn holograms and pun videos.',
      },
      {
        chapter: 18,
        description: 'Devastated when Aja grievously wounds Quinn during the Sovereign\'s dinner on Luna.',
        status: 'alive',
      },
      {
        chapter: 46,
        description: 'Learns in Fitchner\'s hideout that his father is Ares.',
        status: 'alive',
      },
      {
        chapter: 51,
        description: 'Leaves the Triumph feast to look for the missing Fitchner minutes before the massacre; his fate is unknown at book\'s end.',
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
      { targetId: 'darrow', type: 'enemy', revealedAtChapter: 51 },
      { targetId: 'quinn', type: 'friend', revealedAtChapter: 1, description: 'Loves her (unspoken)' },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'Darrow\'s close friend and strategic advisor. A prodigy at space warfare. Soft face, long hair. Finds poetry in the motion of ships.',
        status: 'alive',
      },
      {
        chapter: 18,
        description: 'Watches helplessly as Aja seizes and grievously wounds Quinn, the woman he loves, at the Sovereign\'s dinner on Luna. This tragedy begins to change him.',
        status: 'alive',
        additionalDetails: 'The loss of Quinn plants seeds of bitterness that will grow.',
      },
      {
        chapter: 22,
        description: 'Carries the dead Quinn from the stork; blames Darrow for her death and grows cold toward him.',
        status: 'alive',
      },
      {
        chapter: 51,
        description: 'Betrays Darrow at his Triumph: poisons him with a needle-ring, presents Fitchner\'s head in the "Mask" box, and stands with the Jackal, Cassius and the Sovereign. "You are a son of Red. I a son of Gold."',
        status: 'alive',
      },
    ],
  },
  {
    id: 'tactus',
    name: 'Tactus au Rath',
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
      },
      {
        chapter: 2,
        description: 'Darrow\'s command escape pod launched without him during the ramming - "Either that or they left me behind."',
        status: 'alive',
      },
      {
        chapter: 20,
        description: 'Steals the captured Bellona ship out from under Darrow during the escape from Luna and defects to the Bellona.',
        status: 'alive',
      },
      {
        chapter: 29,
        description: 'Fighting for the Bellona on Europa, takes Lorn\'s grandchildren hostage, then breaks down and surrenders to Darrow, begging to come home. Once the children are gone, Lorn kills him with an ion-dagger.',
        status: 'dead',
        additionalDetails: 'Despite his flaws, his death weighs on Darrow. Tactus was beginning to change.',
      },
    ],
  },
  {
    id: 'quinn',
    name: 'Quinn',
    color: 'Gold',
    firstAppearance: 2,
    relationships: [
      { targetId: 'roque', type: 'lover', revealedAtChapter: 1 },
      { targetId: 'darrow', type: 'friend', revealedAtChapter: 1 },
    ],
    progressiveInfo: [
      {
        chapter: 2,
        description: 'A Gold from Ganymede. Close to Roque. One of Darrow\'s trusted allies from the Institute.',
        status: 'alive',
      },
      {
        chapter: 18,
        description: 'At the Sovereign\'s dinner on Luna, Aja seizes her by the hair and crushes her skull with an armored fist to bait Darrow.',
        status: 'alive',
      },
      {
        chapter: 22,
        description: 'Dies of her wounds despite the Yellows; Roque carries her body from the stork.',
        status: 'dead',
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
      },
      {
        chapter: 4,
        description: 'Now at the Sovereign\'s court on Luna, away from her father.',
        status: 'alive',
      },
      {
        chapter: 12,
        description: 'Reunites with Darrow at the Summit gala on Luna and shields the wounded Cassius during the melee, ordering Darrow to protect her father.',
        status: 'alive',
      },
      {
        chapter: 15,
        description: 'A private, tense confrontation with Darrow airs the truth between them. Their relationship remains complicated by politics and secrets.',
        status: 'alive',
      },
      {
        chapter: 50,
        description: 'Learns Darrow is a Red in the Lykos mines and walks away; absent from his Triumph.',
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
      { targetId: 'octavia', type: 'ally', revealedAtChapter: 51 },
    ],
    progressiveInfo: [
      {
        chapter: 4,
        description: 'Twin brother to Mustang and son of Nero Augustus. Brilliant but sociopathic.',
        status: 'alive',
      },
      {
        chapter: 8,
        description: 'Proposes a secret alliance with Darrow.',
        status: 'alive',
      },
      {
        chapter: 12,
        description: 'At the Luna gala, secretly paralyzes Leto with a poisoned stylus so Karnus can kill him.',
        status: 'alive',
      },
      {
        chapter: 51,
        description: 'Springs his trap at Darrow\'s Triumph with Roque, Antonia, Lilath and Vixus in Pink fleshMasks. Guts Lorn, then shoots his own father in the head against Aja\'s protests, and hands Darrow to the Sovereign.',
        status: 'alive',
        additionalDetails: 'Reveals he paid Karnus au Bellona seven million credits and six Pinks to provoke the duel that killed Claudius.',
      },
    ],
  },
  {
    id: 'nero-augustus',
    name: 'Nero au Augustus',
    aliases: ['The ArchGovernor'],
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
        chapter: 51,
        description: 'At Darrow\'s Triumph - having just asked Darrow to become his heir and "Call me Father" - he is seized by the Jackal\'s disguised Golds. After spitting "You are not my son," he is shot in the head by Adrius.',
        status: 'dead',
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
      { targetId: 'julian', type: 'sibling', revealedAtChapter: 1 },
      { targetId: 'karnus', type: 'sibling', revealedAtChapter: 1 },
      { targetId: 'julia-bellona', type: 'parent', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Heir to House Bellona. Once Darrow\'s friend, now his blood enemy after learning Darrow killed Julian in the Passage.',
        status: 'alive',
      },
      {
        chapter: 12,
        description: 'Now the Sovereign\'s Morning Knight, duels Darrow at the Summit gala. Darrow severs his right sword arm; the Sovereign\'s intervention and the brawl that follows save his life.',
        status: 'alive',
      },
      {
        chapter: 51,
        description: 'Lands at Darrow\'s Triumph beside Aja with a new arm, blaming Darrow for his family\'s destruction ("You killed my family... the children"). Takes back the House Mars ring Darrow won by killing Julian and leaves him to the Sovereign.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'fitchner',
    name: 'Fitchner au Barca',
    aliases: ['Proctor Mars'],
    color: 'Gold',
    house: 'Barca',
    firstAppearance: 13,
    relationships: [
      { targetId: 'sevro', type: 'parent', revealedAtChapter: 0 },
      // These alliances are only revealed when Fitchner reveals himself as Ares
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 42 },
      { targetId: 'dancer', type: 'ally', revealedAtChapter: 46 },
    ],
    progressiveInfo: [
      {
        chapter: 13,
        description: 'Former Proctor Mars and father of Sevro. Now Octavia\'s new Rage Knight - an Olympic Knight in the Sovereign\'s own retinue on Luna.',
        status: 'alive',
      },
      {
        chapter: 42,
        description: 'Ordered by Octavia to take Darrow\'s head aboard her shuttle, he instead reveals himself as Ares and escapes with him.',
        status: 'alive',
      },
      {
        chapter: 46,
        description: 'Explains the Sons of Ares to Darrow, Sevro and Dancer in his hideout: "the Golds made me Ares."',
        status: 'alive',
      },
      {
        chapter: 51,
        description: 'Fails to arrive at the Triumph; his eyeless head, mouth stuffed with grapes, is presented to Darrow in the Mask box.',
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
      { targetId: 'jackal', type: 'ally', revealedAtChapter: 51 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'Half-sister to Victra and daughter of Agrippina. Treacherous and ambitious.',
        status: 'alive',
      },
      {
        chapter: 51,
        description: 'Shoots Victra twice in the spine and her mother twice in the neck with a scorcher at Darrow\'s Triumph, then directs the slaughter of the Augustan heirs.',
        status: 'alive',
        additionalDetails: 'Allies with the Jackal, proving her treacherous nature from the Institute was no act.',
      },
    ],
  },
  {
    id: 'dancer',
    name: 'Dancer',
    color: 'Red',
    firstAppearance: 9,
    relationships: [
      { targetId: 'darrow', type: 'mentor', revealedAtChapter: 9 },
      { targetId: 'fitchner', type: 'ally', revealedAtChapter: 46 },
      { targetId: 'harmony', type: 'ally', revealedAtChapter: 9 },
    ],
    progressiveInfo: [
      {
        chapter: 9,
        description: 'Harmony tells Darrow that Dancer is dead.',
        status: 'unknown',
      },
      {
        chapter: 23,
        description: 'Revealed alive: he speaks to Darrow through Ares\'s channel and reaffirms his faith in him.',
        status: 'alive',
      },
      {
        chapter: 46,
        description: 'Reunites with Darrow in person alongside Fitchner, who is Ares.',
        status: 'alive',
      },
    ],
  },

  // ========== REFERENCED CHARACTERS FROM RED RISING ==========
  // These characters are referenced/remembered but may not actively appear

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
        description: 'Darrow\'s late wife. Executed more than two years ago for singing the forbidden song. Her memory drives everything Darrow does.',
        status: 'dead',
        additionalDetails: 'Her dream of a free Mars continues through Darrow. "Live for more."',
      },
      {
        chapter: 49,
        description: 'As Darrow faces enslavement, Eo\'s memory sustains him. Her sacrifice was not in vain.',
        status: 'dead',
      },
    ],
  },
  {
    id: 'mickey',
    name: 'Mickey',
    aliases: ['Mickey the Carver'],
    color: 'Violet',
    firstAppearance: 9,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 9 },
      { targetId: 'dancer', type: 'ally', revealedAtChapter: 9 },
    ],
    progressiveInfo: [
      {
        chapter: 9,
        description: 'The Violet Carver who transformed Darrow from Red to Gold. Kept by Harmony\'s cell of the Sons, carving Reds into Golds to build a new army - "Dancer\'s last wish."',
        status: 'alive',
        additionalDetails: 'His masterpiece - Darrow - continues to shake the foundations of the Society.',
      },
    ],
  },
  {
    id: 'harmony',
    name: 'Harmony',
    color: 'Red',
    firstAppearance: 9,
    relationships: [
      { targetId: 'dancer', type: 'ally', revealedAtChapter: 9 },
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 9 },
    ],
    progressiveInfo: [
      {
        chapter: 9,
        description: 'Fierce Sons of Ares operative with half her face scarred. Still filled with rage against the Golds.',
        status: 'alive',
        additionalDetails: 'Runs the Sons of Ares cell Darrow visits; tells him Dancer is dead.',
      },
    ],
  },
  {
    id: 'pax',
    name: 'Pax au Telemanus',
    color: 'Gold',
    house: 'Telemanus',
    firstAppearance: 0,
    relationships: [
      { targetId: 'darrow', type: 'friend', revealedAtChapter: 0 },
      { targetId: 'kavax', type: 'parent', revealedAtChapter: 12 },
      { targetId: 'daxo', type: 'sibling', revealedAtChapter: 12 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'The giant Gold who died protecting Darrow at the Institute. His sacrifice is never forgotten.',
        status: 'dead',
        additionalDetails: 'Killed by the Jackal. Darrow carries his memory as a reminder of true friendship.',
      },
      {
        chapter: 12,
        description: 'Revealed to be the son of Kavax and brother of Daxo. House Telemanus mourns him still.',
        status: 'dead',
      },
    ],
  },
  {
    id: 'julian',
    name: 'Julian au Bellona',
    color: 'Gold',
    house: 'Bellona',
    firstAppearance: 0,
    relationships: [
      { targetId: 'cassius', type: 'sibling', revealedAtChapter: 0 },
      { targetId: 'karnus', type: 'sibling', revealedAtChapter: 0 },
      { targetId: 'tiberius-bellona', type: 'parent', revealedAtChapter: 0 },
      { targetId: 'julia-bellona', type: 'parent', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Cassius\'s twin brother, killed by Darrow in the Passage. His death is the source of the blood feud between Darrow and House Bellona.',
        status: 'dead',
      },
      {
        chapter: 5,
        description: 'Julia Bellona demands Darrow\'s heart every night at the family table in Julian\'s memory.',
        status: 'dead',
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
    members: ['cassius', 'karnus', 'tiberius-bellona', 'julia-bellona', 'julian'],
  },
  {
    id: 'sovereign-court',
    name: "The Sovereign's Court",
    members: ['octavia', 'lysander', 'aja', 'moira'],
  },
  {
    id: 'house-telemanus',
    name: 'House Telemanus',
    members: ['kavax', 'daxo', 'pax'],
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
    members: ['dancer', 'fitchner', 'harmony', 'mickey'],
  },
  {
    id: 'howlers',
    name: "Darrow's Institute Friends",
    members: ['sevro', 'tactus', 'roque', 'quinn'],
  },
  {
    id: 'darrow-household',
    name: "Darrow's Household",
    members: ['theodora', 'eo'],
  },
];

export const goldenSonBook: Book = {
  id: 'golden-son',
  title: 'Golden Son',
  author: 'Pierce Brown',
  chapters,
  characters,
};
