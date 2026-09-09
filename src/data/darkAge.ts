import type { Book, Character, FamilyGroup } from '../types';

// Dark Age chapters - Multi-POV format (Darrow, Lysander, Virginia, Ephraim, Lyria)
const chapters = [
  { number: 0, title: 'Prologue' },
  // Part I: Mischief
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
  // Part II: Craft
  { number: 18, title: 'Virginia: Sovereign' },
  { number: 19, title: 'Virginia: Stiletto' },
  { number: 20, title: 'Virginia: Politicos' },
  { number: 21, title: 'Ephraim: Mauler, Brawler, Legacy Hauler' },
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
  // Part III: Treason
  { number: 42, title: 'Lysander: A Chorus Upon the Pale' },
  { number: 43, title: 'Lysander: The Enemy' },
  { number: 44, title: 'Ephraim: Hunt of the Last Light' },
  { number: 45, title: 'Ephraim: Nightgaze' },
  { number: 46, title: 'Ephraim: Whirlpool' },
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
  { number: 74, title: 'Ephraim: Son of the Rising' },
  { number: 75, title: 'Ephraim: Grarnir' },
  { number: 76, title: 'Ephraim: He Who Walks the Void' },
  { number: 77, title: 'Ephraim: Worthy' },
  // Part IV: Pride
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
    aliases: ['The Reaper'],
    color: 'Gold',
    house: 'Augustus',
    firstAppearance: 0,
    relationships: [
      { targetId: 'mustang', type: 'spouse', revealedAtChapter: 0 },
      { targetId: 'sevro', type: 'friend', revealedAtChapter: 0 },
      { targetId: 'pax-augustus', type: 'parent', revealedAtChapter: 0 },
      { targetId: 'alexandar', type: 'ally', revealedAtChapter: 0 },
      { targetId: 'rhonna', type: 'ally', revealedAtChapter: 0, description: 'niece' },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Trapped on Mercury after the Iron Gold cliffhanger. Leads a desperate defense against Atalantia.',
        status: 'alive',
      },
      {
        chapter: 17,
        description: 'Marches on Heliopolis after Orion\'s storm wrecks Ajax\'s army; the Free Legions take the city. Thraxa dumps a pile of captured Gold standards at his feet and declares "Victory."',
        status: 'alive',
      },
      {
        chapter: 33,
        description: 'Parleys by holo with Atalantia (the "Devil\'s Deal") from occupied Heliopolis; she relays the Senate\'s demand that he surrender. Apollonius is not on Mercury.',
        status: 'alive',
      },
      {
        chapter: 58,
        description: 'Puts Glirastes the Master Maker to work and sets up in Sevro\'s old Heliopolis quarters and armory ("Sevro\'s Palace"). Sevro himself is far away on Luna.',
        status: 'alive',
      },
      {
        chapter: 81,
        description: 'Finds Alexandar shot dead at Glirastes\' villa and realizes "Cato" was Lysander au Lune; hunts Lune through Heliopolis as the trap closes.',
        status: 'alive',
      },
      {
        chapter: 86,
        description: 'The Free Legions are routed in the Long Night. Darrow, run through the chest by Kalindora\'s razor (thrown by Lysander in ch 85), waits to die in a tower — until Cassius au Bellona, sent by Kavax, arrives to pull him out.',
        status: 'alive',
        additionalDetails: 'Darrow, Harnassus, Thraxa and the core Howlers slip Mercury; the army is captured. Sevro is not with them.',
      },
    ],
  },
  {
    id: 'lysander',
    name: 'Lysander au Lune',
    aliases: ['The Heir of Silenius'],
    color: 'Gold',
    house: 'Lune',
    firstAppearance: 2,
    relationships: [
      { targetId: 'atalantia', type: 'lover', revealedAtChapter: 90 },
      { targetId: 'ajax', type: 'enemy', revealedAtChapter: 39, description: 'sends Seneca to kill him' },
      { targetId: 'kalindora', type: 'mentor', revealedAtChapter: 4 },
      { targetId: 'alexandar', type: 'ally', revealedAtChapter: 43, description: 'cousins' },
      { targetId: 'apollonius', type: 'ally', revealedAtChapter: 92 },
    ],
    progressiveInfo: [
      {
        chapter: 2,
        description: 'Returns from the Rim to join Atalantia\'s campaign against Darrow on Mercury.',
        status: 'alive',
      },
      {
        chapter: 39,
        description: 'Abandoned in the desert after Ajax\'s betrayal, he is hunted by Seneca\'s killsquad (sent by Ajax) and destroys them using the Mind\'s Eye; then encounters Apollonius au Valii-Rath.',
        status: 'alive',
      },
      {
        chapter: 60,
        description: 'Posing as the loyalist "Cato," he escapes the Gorgon prison alongside Alexandar and the Arcosian knights, choking out and dragging along the captive Fear Knight; the fugitives are scooped up by Darrow himself.',
        status: 'alive',
      },
      {
        chapter: 80,
        description: 'Drops the "Cato" mask at Glirastes\' villa: shatters Rhonna\'s jaw with one jab, knocks her out, and shoots his cousin Alexandar au Arcos in the head.',
        status: 'alive',
      },
      {
        chapter: 89,
        description: 'Feted as the hero of Heliopolis at Atalantia\'s triumph. Learns Cassius is alive and helped Darrow escape; keeps that secret from Atalantia.',
        status: 'alive',
      },
      {
        chapter: 90,
        description: 'The dying Kalindora confesses that she and Atalantia planted the bomb that killed his parents on Octavia\'s orders, and that Octavia erased his mother\'s face from his memory with the Pandemonium Chair. She begs him to take the Morning Chair and deny it to Atalantia — his lover.',
        status: 'alive',
      },
      {
        chapter: 92,
        description: 'Betrothed to Atalantia, he secretly meets Apollonius au Valii-Rath in the desert and wins him as an ally; among the re-erected statues of Mercury\'s old tyrants they point toward Mars.',
        status: 'alive',
      },
    ],
    progressiveNames: [
      { chapter: 2, name: 'Lysander au Lune' },
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
      { targetId: 'dancer', type: 'ally', revealedAtChapter: 19 },
      { targetId: 'daxo', type: 'ally', revealedAtChapter: 19 },
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
        description: 'A prisoner of the Vox Populi on Luna after the Day of Red Doves; strapped into the Pandemonium Chair while Greens mine her memories for Howler hideouts.',
        status: 'alive',
      },
      {
        chapter: 57,
        description: 'Escapes Luna. Having learned that Lilath au Faran lives as Queen of the Syndicate and that a clone of her brother Adrius — the Abomination — rules the Vox, and that Sevro, Clown and Pebble are his prisoners, she resolves to abandon Luna and Earth and regroup on Mars. Kavax reveals he sent a man to Mercury for Darrow.',
        status: 'alive',
      },
      {
        chapter: 91,
        description: 'With Mercury fallen, Virginia faces an impossible choice - salvation or vengeance. Arrives at Phobos Command on Mars and reunites with Pax and Electra; Sevro, Clown and Pebble remain the Abomination\'s captives; Darrow is missing with Cassius.',
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
      { targetId: 'pax-augustus', type: 'ally', revealedAtChapter: 23 },
      { targetId: 'electra', type: 'ally', revealedAtChapter: 23 },
    ],
    progressiveInfo: [
      {
        chapter: 21,
        description: 'Wakes maimed after his shuttle crash — right leg replaced with synthetic tissue — kept alive on Sefi\'s orders. Believes Volga is dead; deep in Z withdrawal. Pax has kept his engagement ring safe.',
        status: 'alive',
      },
      {
        chapter: 37,
        description: 'Serving Sefi aboard her flagship, the Heart of Venus, training the skuggi; Pax and Electra live among the Obsidians. First hears the name Volsung Fá.',
        status: 'alive',
      },
      {
        chapter: 41,
        description: 'Leads the skuggi vanguard as Sefi\'s Obsidians seize Mars\'s helium mines — the "Obsidian Rising."',
        status: 'alive',
      },
      {
        chapter: 52,
        description: 'In rebuilt Olympia, learns Victra\'s ship Pandora has been shot down by ships flying Alltribe colors; flees with Pax and Electra to hunt for Victra and Volga among the debris.',
        status: 'alive',
      },
      {
        chapter: 71,
        description: 'Two weeks of fruitless searching through orbital debris aboard the Snowball with Pax and Electra.',
        status: 'alive',
      },
      {
        chapter: 77,
        description: 'Having sent Pax and Electra away, he walks into Griffinhold to get Volga out. After Fá kills Sefi, Ephraim triggers the bomb Pax hid in his heartspike, killing Xenophon (Fá\'s mole) and maiming Fá — but Fá survives, tears out Ephraim\'s heart and bites it: "Worthy."',
        status: 'dead',
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
      { targetId: 'victra', type: 'enemy', revealedAtChapter: 36, description: 'captor, later uneasy ally (ch 51)' },
      { targetId: 'volga', type: 'ally', revealedAtChapter: 36, description: 'fellow prisoners; blood-written notes exchanged' },
    ],
    progressiveInfo: [
      {
        chapter: 36,
        description: 'Held in a sensory-torture cell as Victra au Barca\'s personal prisoner — revenge for Pax\'s kidnapping. Discovers Volga is imprisoned beside her and begins exchanging notes written in blood.',
        status: 'alive',
      },
      {
        chapter: 50,
        description: 'Aboard the Pandora under Ascomanni attack, the dying Brown freelancer Figment forces her parasite — a tiny metal squid — up Lyria\'s nostril into her brain. It grants thermal/skeletal sight and reads emotions; a voice declares "You are Figment."',
        status: 'alive',
      },
      {
        chapter: 65,
        description: 'Hiding in the Cimmerian snow with Victra and Volga, Lyria helps the overdue Victra give birth to Ulysses.',
        status: 'alive',
      },
      {
        chapter: 66,
        description: 'The Red Hand raid their shelter; Victra and newborn Ulysses are taken.',
        status: 'alive',
        additionalDetails: 'Ch 67: Lyria finds the infant dead and sees Harmony load Victra and Volga onto her ships.',
      },
      {
        chapter: 73,
        description: 'Having sold herself into the Red Hand mine to reach Victra, Lyria frees her; Victra hurls Harmony into a pit of pitvipers. Volga rallies the freed slaves; Lyria\'s distress signal is answered by Ephraim\'s ragtag Martian fleet (ch 74).',
        status: 'alive',
      },
      {
        chapter: 88,
        description: 'On Mars for the burial of Ulysses and Ephraim; word arrives that Mercury has fallen. Volga is told she is Ragnar\'s daughter and Fá\'s granddaughter.',
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
    firstAppearance: 26,
    relationships: [
      { targetId: 'darrow', type: 'friend', revealedAtChapter: 0 },
      { targetId: 'victra', type: 'spouse', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 26,
        description: 'Not on Mercury: he split from Darrow after Venus and has snuck onto Luna to hunt the Syndicate for his kidnapped daughter Electra.',
        status: 'alive',
      },
      {
        chapter: 55,
        description: 'Captured on Luna with Clown and Pebble by Lilath au Faran and the Abomination — the clone of Adrius au Augustus — and dragged off by Boneriders.',
        status: 'alive',
      },
      {
        chapter: 91,
        description: 'Still a prisoner of the Abomination when Virginia reaches Mars.',
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
    firstAppearance: 51,
    relationships: [
      { targetId: 'sevro', type: 'spouse', revealedAtChapter: 53 },
      { targetId: 'lyria', type: 'enemy', revealedAtChapter: 36, description: 'captor, later ally' },
    ],
    progressiveInfo: [
      {
        chapter: 51,
        description: 'Moving her household from Luna to Mars aboard the Pandora while hunting Electra\'s kidnappers, she is shot down by ships flying Alltribe colors; heavily pregnant, she crash-lands in Cimmeria with her prisoners Lyria and Volga.',
        status: 'alive',
      },
      {
        chapter: 66,
        description: 'Captured by the Red Hand along with her newborn son Ulysses.',
        status: 'alive',
      },
      {
        chapter: 73,
        description: 'Freed by Lyria; kills Harmony by throwing her into a pit of pitvipers — vengeance for Ulysses, whom the Red Hand murdered.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'atalantia',
    name: 'Atalantia au Grimmus',
    aliases: ['The Dictator', 'The Fury'],
    color: 'Gold',
    house: 'Grimmus',
    firstAppearance: 2,
    relationships: [
      { targetId: 'lysander', type: 'lover', revealedAtChapter: 90 },
      { targetId: 'atlas', type: 'ally', revealedAtChapter: 2 },
      { targetId: 'ajax', type: 'ally', revealedAtChapter: 4, description: 'aunt (Ajax is Aja\'s son)' },
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
      {
        chapter: 90,
        description: 'Revealed, via Kalindora\'s deathbed confession, to have helped bomb Lysander\'s parents\' shuttle on Octavia\'s orders years earlier.',
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
      { targetId: 'atalantia', type: 'ally', revealedAtChapter: 4, description: 'aunt / nephew (Ajax is Aja\'s son)' },
      { targetId: 'atlas', type: 'parent', revealedAtChapter: 4 },
      { targetId: 'lysander', type: 'enemy', revealedAtChapter: 39, description: 'sends Seneca to kill him' },
    ],
    progressiveInfo: [
      {
        chapter: 4,
        description: 'Son of Aja and Atlas. Legate of the Iron Leopards. A war engine.',
        status: 'alive',
        additionalDetails: 'Seeks to prove himself to his distant father.',
      },
      {
        chapter: 34,
        description: 'His army, the Iron Leopards, is destroyed by Orion\'s storm ("So Ajax lost").',
        status: 'alive',
      },
      {
        chapter: 39,
        description: 'Betrays Lysander, sending Seneca\'s killsquad to murder him in the desert.',
        status: 'alive',
      },
      {
        chapter: 92,
        description: 'On Earth.',
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
    firstAppearance: 6,
    relationships: [
      { targetId: 'ajax', type: 'parent', revealedAtChapter: 4 },
      { targetId: 'atalantia', type: 'ally', revealedAtChapter: 1 },
      { targetId: 'diomedes', type: 'ally', revealedAtChapter: 2, description: 'uncle' },
      { targetId: 'lysander', type: 'ally', revealedAtChapter: 90, description: 'protector' },
    ],
    progressiveInfo: [
      {
        chapter: 6,
        description: 'The Fear Knight leads his Gorgons. Master torturer and psychologist.',
        status: 'alive',
      },
      {
        chapter: 60,
        description: 'Captured during the Gorgon-prison breakout — choked out by "Cato" (Lysander) and hauled off by Alexandar\'s knights — and held in a cell in Heliopolis by Darrow ("Fear stares at me through the glass," ch 79). Free again by ch 89.',
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
    firstAppearance: 39,
    relationships: [
      { targetId: 'darrow', type: 'enemy', revealedAtChapter: 92 },
    ],
    progressiveInfo: [
      {
        chapter: 39,
        description: 'Finds the exhausted Lysander in the desert after Seneca\'s ambush and invites him to join his cause; Lysander declines.',
        status: 'alive',
      },
      {
        chapter: 92,
        description: 'Meets Lysander at a feast in the desert and swears to stand beside him "against the worlds."',
        status: 'alive',
      },
    ],
  },
  {
    id: 'alexandar',
    name: 'Alexandar au Arcos',
    aliases: ['Pup One'],
    color: 'Gold',
    house: 'Arcos',
    firstAppearance: 0,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 0 },
      { targetId: 'rhonna', type: 'ally', revealedAtChapter: 0 },
      { targetId: 'lysander', type: 'ally', revealedAtChapter: 43, description: 'cousins' },
      { targetId: 'kalindora', type: 'ally', revealedAtChapter: 2, description: 'aunt' },
    ],
    progressiveInfo: [
      {
        chapter: 0,
        description: 'Darrow\'s archLancer. Grandson of Lorn au Arcos. Fighting on Mercury.',
        status: 'alive',
      },
      {
        chapter: 60,
        description: 'Rescued from the Gorgon prison after volunteering to save Tyche\'s civilians (ch 15): tortured — ears and fingers cut off, skin stripped — and shot twice in the chest during the breakout, but alive.',
        status: 'alive',
      },
      {
        chapter: 80,
        description: 'Shot in the head by his cousin Lysander (unmasked as "Cato") at Glirastes\' villa, the Lady Beatrice, after Lysander knocks Rhonna out.',
        status: 'dead',
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
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 0, description: 'niece' },
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
        description: 'Lysander shatters her jaw with a single jab and knocks her unconscious before shooting Alexandar. She survives (limping, ch 81).',
        status: 'alive',
        additionalDetails: 'Her fate after the Long Night is unknown; Darrow wonders if she reached the Morning Star (ch 86).',
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
      { targetId: 'lysander', type: 'mentor', revealedAtChapter: 4 },
      { targetId: 'alexandar', type: 'ally', revealedAtChapter: 2, description: 'aunt (opposing sides)' },
    ],
    progressiveInfo: [
      {
        chapter: 2,
        description: 'Olympic Knight fighting for the Society. Aunt to Alexandar au Arcos.',
        status: 'alive',
      },
      {
        chapter: 90,
        description: 'Dying of wounds Darrow gave her in the street battle (ch 85), she confesses that she and Atalantia bombed Lysander\'s parents\' shuttle on Octavia\'s orders and urges Lysander to claim the Morning Chair. She dies before the chapter ends.',
        status: 'dead',
        additionalDetails: 'Sunburial on the Annihilo.',
      },
    ],
  },
  {
    id: 'sefi',
    name: 'Sefi the Quiet',
    aliases: ['Queen of the Obsidian'],
    color: 'Obsidian',
    firstAppearance: 22,
    relationships: [
      { targetId: 'volsung-fa', type: 'parent', revealedAtChapter: 76 },
    ],
    progressiveInfo: [
      {
        chapter: 22,
        description: 'Queen of the Obsidian. Leads her people from the polar north of Mars.',
        status: 'alive',
      },
      {
        chapter: 41,
        description: 'Launches the "Obsidian Rising": her Obsidians seize Mars\'s helium mines.',
        status: 'alive',
      },
      {
        chapter: 46,
        description: 'Declares ashvar on Volsung Fá and the Ascomanni; reveals to Ephraim that Volga is Ragnar\'s daughter and her intended heir.',
        status: 'alive',
      },
      {
        chapter: 76,
        description: 'Volsung Fá unmasks himself before the jarls as Vagnar Hefga, father of Ragnar and Sefi. She fights him barefoot in Griffinhold\'s hall and is cut down in under a minute; the Valkyrie are slaughtered.',
        status: 'dead',
      },
    ],
  },
  {
    id: 'volsung-fa',
    name: 'Volsung Fá',
    aliases: ['The Allfather', 'King of the Obsidian'],
    color: 'Obsidian',
    firstAppearance: 45,
    relationships: [
      { targetId: 'sefi', type: 'parent', revealedAtChapter: 76 },
      { targetId: 'volga', type: 'grandparent', revealedAtChapter: 77 },
      // Note: Also father of Ragnar Volarus (deceased), making Volga his granddaughter
    ],
    progressiveInfo: [
      {
        chapter: 45,
        description: 'A monstrous Obsidian king of the Ascomanni raiders from the Kuiper Belt, thought a myth by most Obsidians. Kills Freihild.',
        status: 'alive',
      },
      {
        chapter: 76,
        description: 'Unmasks himself before the jarls as Vagnar Hefga, father of Ragnar and Sefi, and kills Sefi in single combat at Griffinhold.',
        status: 'alive',
      },
      {
        chapter: 77,
        description: 'Kills Ephraim ti Horn, but Ephraim\'s hidden bomb badly burns him (half his face melted); names Volga his heir; tears out and eats Ephraim\'s heart.',
        status: 'alive',
      },
    ],
    progressiveNames: [
      { chapter: 76, name: 'Volsung Fá / Vagnar Hefga ("Pale Horse")' },
    ],
  },
  {
    id: 'volga',
    name: 'Volga Fjorgan',
    aliases: ['Daughter of Ragnar'],
    color: 'Obsidian',
    firstAppearance: 36,
    relationships: [
      { targetId: 'ephraim', type: 'ally', revealedAtChapter: 21 },
      { targetId: 'volsung-fa', type: 'grandparent', revealedAtChapter: 77 },
      { targetId: 'sefi', type: 'ally', revealedAtChapter: 46, description: 'aunt' }, // Sefi is her aunt (Ragnar's sister)
      { targetId: 'lyria', type: 'friend', revealedAtChapter: 36 },
      { targetId: 'victra', type: 'enemy', revealedAtChapter: 36, description: 'captor, later ally' },
    ],
    progressiveInfo: [
      {
        chapter: 36,
        description: 'Held prisoner by Victra au Barca after Iron Gold; Ephraim believes her dead. Begins trading blood-written notes with Lyria in the next cell.',
        status: 'alive',
      },
      {
        chapter: 46,
        description: 'Sefi tells Ephraim that Victra\'s DNA test proved Volga is Ragnar\'s daughter; Sefi means to make her heir.',
        status: 'alive',
      },
      {
        chapter: 73,
        description: 'A fellow captive of the Red Hand; rallies the freed slaves while Lyria frees Victra. Reunited with Ephraim when his fleet arrives (ch 74).',
        status: 'alive',
      },
      {
        chapter: 88,
        description: 'Told openly that she is Ragnar\'s daughter and Fá\'s granddaughter.',
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
        description: 'Poisoned mid-speech on the Senate floor — coughing up blood and lung tissue — as Publius cu Caraval\'s Vox Populi coup begins.',
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
    aliases: ['Leader of the Red Hand'],
    color: 'Red',
    firstAppearance: 36,
    relationships: [
      { targetId: 'lyria', type: 'enemy', revealedAtChapter: 36 },
    ],
    progressiveInfo: [
      {
        chapter: 36,
        description: 'Leader of the Red Hand terrorist organization, opposing the Republic and Society alike.',
        status: 'alive',
      },
      {
        chapter: 67,
        description: 'Her Red Hand murder newborn Ulysses and seize Victra and Volga; she carries Victra\'s razor. She also killed Lyria\'s brother.',
        status: 'alive',
      },
      {
        chapter: 73,
        description: 'Cornered in the mine tunnels; Victra throws her into a pit of egg-laying pitvipers — "Bye, bitch."',
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
        chapter: 3,
        description: 'Commands the Storm God project.',
        status: 'alive',
      },
      {
        chapter: 15,
        description: 'Lost in the neural sync with the Storm Gods after drowning Tyche and hundreds of thousands of civilians; Darrow initiates the override, and "Orion\'s body seizes and goes limp."',
        status: 'dead',
        additionalDetails: 'Operation Tartarus was Darrow\'s storm plan from Part I (ch 7), not an evacuation.',
      },
    ],
  },
  {
    id: 'harnassus',
    name: 'Cadus Harnassus',
    aliases: ['The Orange'],
    color: 'Orange',
    firstAppearance: 3,
    relationships: [
      { targetId: 'darrow', type: 'ally', revealedAtChapter: 0 },
    ],
    progressiveInfo: [
      {
        chapter: 3,
        description: 'Imperator of the Republic. Darrow\'s second-in-command. An Orange engineer.',
        status: 'alive',
      },
      {
        chapter: 86,
        description: 'Organizes survivors in the Long Night and escapes Mercury with Darrow.',
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
    firstAppearance: 23,
    relationships: [
      { targetId: 'darrow', type: 'parent', revealedAtChapter: 0 },
      { targetId: 'mustang', type: 'parent', revealedAtChapter: 0 },
      { targetId: 'ephraim', type: 'ally', revealedAtChapter: 23 },
    ],
    progressiveInfo: [
      {
        chapter: 23,
        description: 'Training with the Obsidians under Sefi (Ephraim POV).',
        status: 'alive',
      },
      {
        chapter: 74,
        description: 'Co-commands the ragtag Martian fleet against the Red Hand torchship.',
        status: 'alive',
      },
      {
        chapter: 77,
        description: 'Already away from Griffinhold; it was Pax who asked Ephraim to go back for Volga, and Pax who built the bomb Ephraim uses. Electra has not forgiven him (ch 88).',
        status: 'alive',
      },
      {
        chapter: 91,
        description: 'Reunited with Virginia on Mars.',
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
    firstAppearance: 23,
    relationships: [
      { targetId: 'sevro', type: 'parent', revealedAtChapter: 0 },
      { targetId: 'victra', type: 'parent', revealedAtChapter: 0 },
      { targetId: 'pax-augustus', type: 'friend', revealedAtChapter: 23 },
    ],
    progressiveInfo: [
      {
        chapter: 23,
        description: 'Training with the Obsidians alongside Pax (Ephraim POV). Shows fierce spirit like her parents.',
        status: 'alive',
      },
      {
        chapter: 77,
        description: 'Escapes Griffinhold with Pax; has not yet forgiven him for asking Ephraim to go back for Volga.',
        status: 'alive',
      },
      {
        chapter: 88,
        description: 'Buries two today — Ulysses and Ephraim.',
        status: 'alive',
      },
      {
        chapter: 91,
        description: 'Thanked by Virginia on Mars.',
        status: 'alive',
      },
    ],
  },
  {
    id: 'diomedes',
    name: 'Diomedes au Raa',
    aliases: ['The Storm Knight of the Rim'],
    color: 'Gold',
    house: 'Raa',
    firstAppearance: 2,
    relationships: [
      { targetId: 'atlas', type: 'ally', revealedAtChapter: 2, description: 'uncle' },
    ],
    progressiveInfo: [
      {
        chapter: 2,
        description: 'Leads the Rim deputation to Atalantia alongside Lysander.',
        status: 'alive',
        additionalDetails: 'A formidable warrior and nephew to Atlas au Raa.',
      },
      {
        chapter: 89,
        description: 'Long since departed Mercury to prepare the Rim\'s entry into the war; he lied to Lysander that Cassius was dead and appears to have spared him.',
        status: 'alive',
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
    members: ['atalantia', 'lysander', 'ajax', 'atlas', 'kalindora'],
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
    members: ['ephraim', 'pax-augustus', 'electra'],
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
