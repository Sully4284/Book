import type { Book, Character, FamilyGroup } from '../types';

// Light Bringer chapters - Multi-POV format
const chapters = [
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
    aliases: ['The Reaper', 'ArchImperator of the Solar Republic'],
    color: 'Gold',
    house: 'Augustus',
    firstAppearance: 1,
    relationships: [
      { targetId: 'mustang', type: 'spouse', revealedAtChapter: 1 },
      { targetId: 'sevro', type: 'friend', revealedAtChapter: 1 },
      { targetId: 'cassius', type: 'ally', revealedAtChapter: 1 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'Marooned on the trash moon Marcher-1632 in an old Sons of Ares base, 200 million km from home, repairing the crippled Archimedes with Thraxa, Harnassus, Screwface, Colloway Char and ~200 survivors Cassius pulled out of Heliopolis.',
        status: 'alive',
        additionalDetails: 'Cassius left six weeks ago with Aurae for Starhold (a trade post between Mercury and Venus) to buy helium for the reactor. Aurae left Darrow a book, The Path to the Vale.',
      },
      {
        chapter: 3,
        description: 'Cassius returns with Martian helium-3 and Colloway Char, who brings grim news: Sefi is dead, Quicksilver has quit the war, and the Rim armadas are at Mars. Cassius also brings word of Sevro.',
        status: 'alive',
        additionalDetails: 'Darrow learns Sevro is alive but held prisoner by Apollonius.',
      },
      {
        chapter: 4,
        description: 'Apollonius sends a recording showing Sevro caged at the Dockyards of Venus. Darrow leaves his men to go home to Mars and sets off with Cassius and Aurae to rescue Sevro.',
        status: 'alive',
      },
      {
        chapter: 9,
        description: 'After dueling Apollonius in the Hanging Coliseum, Darrow and Cassius are rescued by a freed Sevro in a starShell.',
        status: 'alive',
      },
      {
        chapter: 35,
        description: 'Four days from Mars, Virginia (by hologram) tells him he cannot come home. She sends Darrow, Sevro and Cassius to find Quicksilver at a hidden asteroid and bring his fleet back into the war.',
        status: 'alive',
      },
      {
        chapter: 46,
        description: 'Arrives in Ilium after a six-week crossing of the Gulf with Sevro, Cassius, Aurae and Lyria, to find the Rim\'s Dragon and Dust armadas annihilated by Fá at Kalyke.',
        status: 'alive',
      },
      {
        chapter: 59,
        description: 'Wakes chained in Helisson, Europa — a prisoner of Athena and the Daughters of Athena, who put him on trial.',
        status: 'alive',
      },
      {
        chapter: 62,
        description: 'Strikes a deal with Athena: in exchange for her sealifts and Daughters against Fá, Darrow and Diomedes swear oaths on abolition of the hierarchy.',
        status: 'alive',
      },
      {
        chapter: 76,
        description: 'Hunts Fá across Europa\'s archipelago and beats him, but refuses to kill him — he hands Volga the gauntlet and she kills Fá herself.',
        status: 'alive',
      },
      {
        chapter: 89,
        description: 'Three weeks after Lysander\'s bombardment of the Garter, Darrow signs a treaty on Io with Athena, Volga and Diomedes. Pytha delivers Cassius\'s body. He sails for Mars with an army and an armada.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'lysander',
    name: 'Lysander au Lune',
    aliases: ['The Lightbringer', 'Heir of Silenius', 'The Peacemaker'],
    color: 'Gold',
    house: 'Lune',
    firstAppearance: 5,
    relationships: [
      { targetId: 'atalantia', type: 'lover', revealedAtChapter: 5, description: 'Betrothed; Dictator he serves while secretly building his own power' },
      { targetId: 'ajax', type: 'friend', revealedAtChapter: 7 },
      { targetId: 'diomedes', type: 'ally', revealedAtChapter: 7 },
      { targetId: 'cassius', type: 'mentor', revealedAtChapter: 5 },
    ],
    progressiveInfo: [
      {
        chapter: 5,
        description: 'Steward of Mercury, presiding over his Triumph and games in Heliopolis while sinking into debt to finish his warship, the Lightbringer. Cicero au Votum hails him as "Lysander the Lightbringer."',
        status: 'alive',
      },
      {
        chapter: 10,
        description: 'At the Lightbringer\'s launch, Atlas arrives bearing the Dictator\'s Iron Fist, kills Tharsus au Rath, and takes Lysander into custody to be brought to Atalantia on Earth.',
        status: 'alive',
      },
      {
        chapter: 16,
        description: 'Addresses the Two Hundred Gold families. Seeks to unite Gold against the Republic.',
        status: 'alive',
      },
      {
        chapter: 33,
        description: 'After Virginia agrees to cede Phobos, Lysander hosts battle honors on the moon as the last Republic ship departs.',
        status: 'alive',
      },
      {
        chapter: 45,
        description: 'Aboard the Rim flagship Dustmaker with Diomedes when an imposter wearing Helios\'s face — Atlas — seizes the ship and, with Fá\'s fleet, annihilates the Rim armadas at Kalyke. Lysander shoves Diomedes into an escape pod and is captured by Atlas.',
        status: 'alive',
      },
      {
        chapter: 50,
        description: 'Atlas tells Fá his reign is cut to three weeks and reveals to Lysander the existence of Eidmi — a virus able to wipe out any single Color — hidden from Atalantia.',
        status: 'alive',
        additionalDetails: 'Atlas intends to retrieve Eidmi from a Raa vault and rejoin Lysander on the Lightbringer.',
      },
      {
        chapter: 64,
        description: 'Rejoins the Lightbringer at Valetudo posing as a survivor of the Kalyke massacre, concealing Atlas\'s plot from his own fleet. He no longer trusts Rhone, who poisoned him.',
        status: 'alive',
      },
      {
        chapter: 79,
        description: 'Leads an Iron Rain on Io with Cicero and the New Shepherds, crushing the Ascomanni fleet and garrison.',
        status: 'alive',
      },
      {
        chapter: 82,
        description: 'Diomedes brings Lysander and Darrow together at the Shield of Akari and proposes a triumvirate against Atalantia. Lysander departs without committing.',
        status: 'alive',
      },
      {
        chapter: 84,
        description: 'In Hangar 17B aboard the Lightbringer, after Cassius defeats and leashes Atlas, Lysander shoots Atlas dead — then guns down Cassius to keep Eidmi. He blames "assassins" and has Demetrius\'s cohort silenced.',
        status: 'alive',
      },
      {
        chapter: 88,
        description: 'Having bombarded Demeter\'s Garter — Io\'s breadbasket — Lysander strips its priceless fruit trees to pay his Bellona and Votum creditors, and sends Cassius\'s body to Darrow with Pytha.',
        status: 'alive',
        additionalDetails: 'He covers Atlas\'s and Cassius\'s deaths as the "Fear Knight\'s coup."',
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
      { targetId: 'darrow', type: 'spouse', revealedAtChapter: 1 },
      { targetId: 'pax-augustus', type: 'parent', revealedAtChapter: 14 },
    ],
    progressiveInfo: [
      {
        chapter: 14,
        description: 'Governs besieged Mars from Agea. Visits Pax at the Conservatory with Kavax as the Society fleet gathers for the siege.',
        status: 'alive',
      },
      {
        chapter: 18,
        description: 'The Returned - reunites with allies she thought lost.',
        status: 'alive',
      },
      {
        chapter: 25,
        description: 'Battle of Phobos: Kavax, holding the breaches, is captured by Apollonius.',
        status: 'alive',
      },
      {
        chapter: 32,
        description: 'Meets Lysander secretly on Phobos. Agrees to cede the moon and not scuttle the dockyards; Kavax is returned in a wheelchair, and Victra must give back Ajax\'s head.',
        status: 'alive',
      },
      {
        chapter: 34,
        description: 'From the Dejah Thoris she tightbeams Darrow, four days out, and tells him he cannot come home — Mars needs him outside the siege, bringing Quicksilver back into the war.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'lyria',
    name: 'Lyria of Lagalos',
    aliases: ['Gamma'],
    color: 'Red',
    firstAppearance: 12,
    relationships: [
      { targetId: 'volga', type: 'ally', revealedAtChapter: 67 },
      { targetId: 'mustang', type: 'ally', revealedAtChapter: 12 },
    ],
    progressiveInfo: [
      {
        chapter: 12,
        description: 'Sent out by Pax, Lyria hunts the asteroid belt with a Republic long-ranger team for the lab that built the parasite in her head, hoping to repair it and use it to find Volga.',
        status: 'alive',
      },
      {
        chapter: 13,
        description: 'Wakes in Matteo and Quicksilver\'s hidden asteroid retreat, her severed hand reattached.',
        status: 'alive',
      },
      {
        chapter: 40,
        description: 'Five weeks after Matteo\'s surgery removed the parasite, Lyria is recovering when Darrow\'s crew arrives; she tells Sevro his son Ulysses is dead.',
        status: 'alive',
      },
      {
        chapter: 42,
        description: 'Stows away aboard the Archimedes for nine days before being discovered on the crossing to the Rim.',
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
      { targetId: 'lysander', type: 'mentor', revealedAtChapter: 5 },
      { targetId: 'aurae', type: 'lover', revealedAtChapter: 3 },
    ],
    progressiveInfo: [
      {
        chapter: 3,
        description: 'Returns to Marcher-1632 with helium-3 from Starhold, bringing Colloway Char and news of the war — and of Sevro.',
        status: 'alive',
        additionalDetails: 'Survived the Rim because Diomedes faked his death after the duels on Io; Aurae helped him escape.',
      },
      {
        chapter: 35,
        description: 'Virginia offers him a battlefield promotion to Morning Knight of the Republic; he accepts.',
        status: 'alive',
      },
      {
        chapter: 84,
        description: 'Defeats Atlas au Raa in Hangar 17B aboard the Lightbringer, losing his right hand. After Lysander executes Atlas, Lysander shoots Cassius down to keep Eidmi; Cassius dies with his razor a finger from Lysander\'s heart.',
        status: 'dead',
        additionalDetails: 'Lysander later plants Cassius\'s razor in his own chest and blames assassins.',
      },
      {
        chapter: 88,
        description: 'Pytha smuggles his body off the Lightbringer to bring to Darrow.',
        status: 'dead',
      },
    ],
  },
  {
    id: 'sevro',
    name: 'Sevro au Barca',
    aliases: ['The Goblin'],
    color: 'Gold',
    house: 'Barca',
    firstAppearance: 4,
    relationships: [
      { targetId: 'darrow', type: 'friend', revealedAtChapter: 1 },
      { targetId: 'victra', type: 'spouse', revealedAtChapter: 1 },
    ],
    progressiveInfo: [
      {
        chapter: 4,
        description: 'Held in a slave rack by Apollonius at the Dockyards of Venus after being tortured by Atalantia\'s war beasts on Earth and held by the Abomination on Luna. Apollonius uses him as bait for Darrow.',
        status: 'alive',
        additionalDetails: 'Sevro was never with Virginia in this book.',
      },
      {
        chapter: 9,
        description: 'Having escaped his cell, Sevro rescues Darrow and Cassius from the dockyards in a stolen starShell and gets them off Venus.',
        status: 'alive',
      },
      {
        chapter: 35,
        description: 'Aboard the Archimedes with Darrow and Cassius. Virginia\'s hologram tells him Victra and his new baby are on besieged Mars and he cannot go home.',
        status: 'alive',
      },
      {
        chapter: 40,
        description: 'Learns from Lyria that his son Ulysses was murdered by Harmony\'s Red Hand.',
        status: 'alive',
      },
      {
        chapter: 48,
        description: 'Breaks down on the sail to Io; Darrow talks him through the difference between Sevro and "the Goblin."',
        status: 'alive',
      },
    ],
  },
  {
    id: 'victra',
    name: 'Victra au Barca',
    aliases: [],
    color: 'Gold',
    house: 'Barca',
    firstAppearance: 18,
    relationships: [
      { targetId: 'sevro', type: 'spouse', revealedAtChapter: 1 },
      { targetId: 'electra', type: 'parent', revealedAtChapter: 1 },
    ],
    progressiveInfo: [
      {
        chapter: 18,
        description: 'Fighting to protect her family and the Republic. Supporting Virginia\'s war effort.',
        status: 'alive',
        additionalDetails: 'Runs the Julii dockyards defending Mars. Gave birth to her fourth child while fleeing the Red Hand with Lyria and Volga.',
      },
      {
        chapter: 30,
        description: 'On Phobos, Victra and Thraxa ambush Ajax\'s raiding party; Victra hacks Ajax apart and takes his head.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'atalantia',
    name: 'Atalantia au Grimmus',
    aliases: ['The Dictator'],
    color: 'Gold',
    house: 'Grimmus',
    firstAppearance: 15,
    relationships: [
      { targetId: 'lysander', type: 'lover', revealedAtChapter: 5, description: 'Betrothed' },
      { targetId: 'atlas', type: 'ally', revealedAtChapter: 5 },
      { targetId: 'ajax', type: 'ally', revealedAtChapter: 7, description: 'Aunt (Ajax is her sister Aja\'s son)' },
    ],
    progressiveInfo: [
      {
        chapter: 15,
        description: 'Hosts Lysander at her hunt and summit on Earth; sends him to take Mars.',
        status: 'alive',
        additionalDetails: 'Aunt of Ajax. Commands the Society war effort from Earth; Lysander is her betrothed.',
      },
      {
        chapter: 89,
        description: 'Still Dictator on Earth; Gaia warns "Atalantia will come."',
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
    firstAppearance: 7,
    relationships: [
      { targetId: 'atalantia', type: 'ally', revealedAtChapter: 7, description: 'Nephew' },
      { targetId: 'lysander', type: 'friend', revealedAtChapter: 7 },
      { targetId: 'atlas', type: 'parent', revealedAtChapter: 15 },
    ],
    progressiveInfo: [
      {
        chapter: 7,
        description: 'Legate of the Iron Leopards and Lysander\'s closest friend among the Society Golds.',
        status: 'alive',
      },
      {
        chapter: 30,
        description: 'Killed on Phobos by Victra au Barca, aided by Thraxa, while leading a raid to decapitate Republic command. Victra beheads him; Lysander watches the drone footage.',
        status: 'dead',
        additionalDetails: 'Virginia returns his head to Lysander as part of the Phobos parley (ch 32).',
      },
    ],
  },
  {
    id: 'atlas',
    name: 'Atlas au Raa',
    aliases: ['The Fear Knight'],
    color: 'Gold',
    house: 'Raa',
    firstAppearance: 7,
    relationships: [
      { targetId: 'atalantia', type: 'ally', revealedAtChapter: 5 },
      { targetId: 'ajax', type: 'parent', revealedAtChapter: 15 },
      { targetId: 'volsung-fa', type: 'ally', revealedAtChapter: 45, description: 'Fá is Atlas\'s creation and puppet' },
    ],
    progressiveInfo: [
      {
        chapter: 7,
        description: 'Arrives on Luna as Atalantia\'s enforcer; a former hostage of House Lune and uncle to Diomedes.',
        status: 'alive',
      },
      {
        chapter: 10,
        description: 'Serves Lysander the Dictator\'s Iron Fist at the Lightbringer\'s launch, kills Tharsus au Rath, and takes Lysander into custody.',
        status: 'alive',
      },
      {
        chapter: 45,
        description: 'Wearing Helios\'s face, seizes the Rim flagship Dustmaker and, with Fá\'s fleet, annihilates the Rim armadas at Kalyke.',
        status: 'alive',
      },
      {
        chapter: 47,
        description: 'Reveals Fá is Vagnar Hefga, a Gorgon he trained and sent to conquer the Ascomanni — the whole Obsidian invasion is Atlas\'s operation.',
        status: 'alive',
      },
      {
        chapter: 50,
        description: 'Reveals Eidmi, a Color-targeting virus hidden in a Raa vault, and sets out to retrieve it.',
        status: 'alive',
      },
      {
        chapter: 84,
        description: 'Returns to the Lightbringer with Eidmi; defeated and leashed by Cassius in Hangar 17B, then shot in the head by Lysander.',
        status: 'dead',
      },
    ],
  },
  {
    id: 'apollonius',
    name: 'Apollonius au Valii-Rath',
    aliases: ['The Minotaur'],
    color: 'Gold',
    house: 'Valii-Rath',
    firstAppearance: 4,
    relationships: [
      { targetId: 'darrow', type: 'enemy', revealedAtChapter: 4 },
      { targetId: 'cassius', type: 'enemy', revealedAtChapter: 8 },
      { targetId: 'lysander', type: 'ally', revealedAtChapter: 5 },
    ],
    progressiveInfo: [
      {
        chapter: 4,
        description: 'Holds Sevro caged at the Dockyards of Venus, which he now controls, and sends Darrow a taunting recording to lure him out.',
        status: 'alive',
        additionalDetails: 'Secretly allied with Lysander, who smuggles him legions.',
      },
      {
        chapter: 8,
        description: 'Fights Darrow in the Hanging Coliseum; claims Sevro is dead.',
        status: 'alive',
      },
      {
        chapter: 25,
        description: 'Fighting for Lysander at Phobos, captures Kavax au Telemanus.',
        status: 'alive',
      },
      {
        chapter: 30,
        description: 'Abandons Ajax\'s raid, using Cicero as a diversion, and seizes the Julii dockyards citadel for himself.',
        status: 'alive',
      },
      {
        chapter: 36,
        description: 'Attends Lysander\'s war council with Julia au Bellona at Quicksilver\'s captured estate.',
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
    firstAppearance: 7,
    relationships: [
      { targetId: 'lysander', type: 'friend', revealedAtChapter: 7 },
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 62 },
      { targetId: 'aurae', type: 'lover', revealedAtChapter: 89 },
      { targetId: 'atlas', type: 'enemy', revealedAtChapter: 45, description: 'Uncle' },
    ],
    progressiveInfo: [
      {
        chapter: 7,
        description: 'Diomedes au Raa, the Storm Knight of the Rim Dominion and son of Romulus. A Rim commander, never part of the Society.',
        status: 'alive',
      },
      {
        chapter: 45,
        description: 'Poisoned by Atlas\'s spines on the bridge of the Dustmaker as the Rim armadas are massacred at Kalyke; Lysander shoves him into an escape pod.',
        status: 'alive',
      },
      {
        chapter: 48,
        description: 'Pulled from his escape pod by Darrow\'s crew; held as a prisoner of war aboard the Archimedes.',
        status: 'alive',
      },
      {
        chapter: 62,
        description: 'Chained by Athena in Helisson, swears an oath to work toward abolition in exchange for the Daughters\' help against Fá.',
        status: 'alive',
      },
      {
        chapter: 76,
        description: 'Fights beside Darrow against Fá on Europa.',
        status: 'alive',
      },
      {
        chapter: 82,
        description: 'Hosts Darrow and Lysander at the Shield of Akari on Io and proposes a triumvirate against Atalantia.',
        status: 'alive',
      },
      {
        chapter: 89,
        description: 'After Lysander betrays the summit by bombarding Demeter\'s Garter (ch 87), Diomedes signs a treaty of alliance with Darrow, Athena and Volga.',
        status: 'alive',
        additionalDetails: 'He was never part of the Society — he is Taxiarchos of the Rim Dominion\'s Lightning Phalanx.',
      },
    ],
  },
  {
    id: 'volga',
    name: 'Volga Fjorgan',
    aliases: ['Daughter of Ragnar', 'Granddaughter of the Allfather'],
    color: 'Obsidian',
    firstAppearance: 12,
    relationships: [
      { targetId: 'lyria', type: 'ally', revealedAtChapter: 67 },
      { targetId: 'volsung-fa', type: 'ally', revealedAtChapter: 12 },
    ],
    progressiveInfo: [
      {
        chapter: 12,
        description: 'Gave herself up to Volsung Fá to protect Mars; Lyria has no idea where she is.',
        status: 'alive',
        additionalDetails: 'Biological daughter of Ragnar Volarus.',
      },
      {
        chapter: 49,
        description: 'Stands at Fá\'s right hand in Plutus; Fá dotes on her and keeps her out of battle.',
        status: 'alive',
      },
      {
        chapter: 67,
        description: 'Reunites with Lyria. Their friendship transcends Color and faction.',
        status: 'alive',
      },
      {
        chapter: 76,
        description: 'Darrow beats Fá but hands Volga the gauntlet; she kills her grandfather herself, becoming queen of the Volk.',
        status: 'alive',
        additionalDetails: 'She later asks Darrow, "Why did you let me kill Fá?" (ch 77).',
      },
      {
        chapter: 89,
        description: 'As Obsidian queen, wears ash on her face in shame and signs the treaty with Darrow, Athena and Diomedes; returns toward Mars on the Pandora.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'volsung-fa',
    name: 'Volsung Fá',
    aliases: ['The Allfather', 'Vagnar Hefga'],
    color: 'Obsidian',
    firstAppearance: 45,
    relationships: [
      { targetId: 'volga', type: 'grandparent', revealedAtChapter: 45 },
    ],
    progressiveInfo: [
      {
        chapter: 45,
        description: 'Self-proclaimed Allfather uniting the Ascomanni and the Volk. Working with Atlas, his fleet annihilates the Rim armadas at Kalyke.',
        status: 'alive',
        additionalDetails: 'Claims to be Ragnar Volarus\'s father — the Rim cannot confirm it (ch 36).',
      },
      {
        chapter: 47,
        description: 'Atlas reveals Fá is Vagnar Hefga, a Gorgon he trained; the Obsidian invasion is Atlas\'s operation.',
        status: 'alive',
      },
      {
        chapter: 50,
        description: 'Told his reign will last three weeks, not three years, Fá is relieved — he wants only retirement, opera and the sea.',
        status: 'alive',
      },
      {
        chapter: 66,
        description: 'His Volk sack Heraklion on Europa.',
        status: 'alive',
      },
      {
        chapter: 76,
        description: 'Defeated by Darrow on Europa, but Darrow refuses the kill; Volga takes his life with her own hand.',
        status: 'dead',
        additionalDetails: 'Dying, he confirms Ragnar was his son — Ragnar\'s features are in both him and Volga.',
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
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 1 },
    ],
    progressiveInfo: [
      {
        chapter: 1,
        description: 'Stranded with Darrow\'s survivors on the trash moon.',
        status: 'alive',
      },
      {
        chapter: 4,
        description: 'Stays behind with Harnassus, Screwface and Char when Darrow leaves for Venus; they take the survivors home to Mars.',
        status: 'alive',
      },
      {
        chapter: 18,
        description: 'Returns to Mars ("The Returned"); given command of Pegasus Legion.',
        status: 'alive',
      },
      {
        chapter: 30,
        description: 'Helps Victra kill Ajax on Phobos.',
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
        description: 'Studying at the Conservatory on Mars, taller than his mother now. He sent Lyria to hunt for the parasite lab and argues with Virginia over the Obsidians.',
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
    firstAppearance: 11,
    relationships: [
      { targetId: 'sevro', type: 'parent', revealedAtChapter: 1 },
      { targetId: 'victra', type: 'parent', revealedAtChapter: 1 },
    ],
    progressiveInfo: [
      {
        chapter: 11,
        description: 'On Mars with Victra; Sevro does not know if she and her sisters are safe.',
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
    firstAppearance: 14,
    relationships: [
      { targetId: 'thraxa', type: 'parent', revealedAtChapter: 14 },
    ],
    progressiveInfo: [
      {
        chapter: 14,
        description: 'Rarely lets Virginia out of his sight on Mars; has lost two sons.',
        status: 'alive',
      },
      {
        chapter: 25,
        description: 'Holding the breaches on Phobos, he is captured by Apollonius.',
        status: 'alive',
      },
      {
        chapter: 32,
        description: 'Returned to Virginia in a wheelchair after the Phobos parley.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'pytha',
    name: 'Pytha xe Virgus',
    aliases: [],
    color: 'Blue',
    firstAppearance: 5,
    relationships: [
      { targetId: 'lysander', type: 'friend', revealedAtChapter: 5 },
      { targetId: 'cassius', type: 'friend', revealedAtChapter: 5, description: 'Former co-pilot of the Archimedes' },
    ],
    progressiveInfo: [
      {
        chapter: 5,
        description: 'Former co-pilot of the Archimedes who chose Lysander over Cassius; now captain of his flagship, the Lightbringer.',
        status: 'alive',
      },
      {
        chapter: 88,
        description: 'Smuggles Cassius\'s body off the Lightbringer and brings it to Darrow, leaving Lysander\'s service.',
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
      { targetId: 'diomedes', type: 'lover', revealedAtChapter: 89 },
    ],
    progressiveInfo: [
      {
        chapter: 3,
        description: 'A Raa hetaera who fled the Rim with Cassius; left Darrow her book, The Path to the Vale, and plays the lyre for the castaways.',
        status: 'alive',
      },
      {
        chapter: 62,
        description: 'Revealed as an agent of the Daughters of Athena, sent to find Darrow and pass information.',
        status: 'alive',
      },
      {
        chapter: 89,
        description: 'Stays on Io with Diomedes; the two are plainly in love.',
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
    members: ['atalantia', 'lysander', 'ajax', 'atlas', 'apollonius'],
  },
  {
    id: 'darrows-crew',
    name: "Darrow's Alliance",
    members: ['darrow', 'cassius', 'sevro', 'aurae', 'lyria'],
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
