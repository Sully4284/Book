// Character image mapping
// Add character images here as: characterId: { default: 'path', carved?: 'path' }
// For characters with transformations (like Darrow), use 'carved' for post-transformation image

interface CharacterImageConfig {
  default: string;
  carved?: string; // For characters who undergo transformation
  carvedAtChapter?: number; // Chapter when transformation happens
}

const characterImages: Record<string, CharacterImageConfig> = {
  // Main protagonist - has both Red and Gold versions
  darrow: {
    default: '/images/characters/darrow-red.png',
    carved: '/images/characters/darrow-gold.png',
    carvedAtChapter: 12,
  },

  // Darrow's family
  eo: {
    default: '/images/characters/eo.png',
  },
  kieran: {
    default: '/images/characters/kieran.png',
  },
  leanna: {
    default: '/images/characters/leanna.png',
  },
  'mother-darrow': {
    default: '/images/characters/mother-darrow.png',
  },
  'father-darrow': {
    default: '/images/characters/father-darrow.png',
  },
  narol: {
    default: '/images/characters/narol.png',
  },
  dio: {
    default: '/images/characters/dio.png',
  },
  loran: {
    default: '/images/characters/loran.png',
  },

  // Sons of Ares
  dancer: {
    default: '/images/characters/dancer.png',
  },
  harmony: {
    default: '/images/characters/harmony.png',
  },
  mickey: {
    default: '/images/characters/mickey.png',
  },
  evey: {
    default: '/images/characters/evey.png',
  },
  matteo: {
    default: '/images/characters/matteo.png',
  },

  // Gold Society
  'nero-augustus': {
    default: '/images/characters/nero-augustus.png',
  },
  'octavia-lune': {
    default: '/images/characters/octavia-lune.png',
  },
  // Alias for Golden Son (uses 'octavia' as ID)
  octavia: {
    default: '/images/characters/octavia-lune.png',
  },
  fitchner: {
    default: '/images/characters/fitchner.png',
  },

  // ========== GOLDEN SON NEW CHARACTERS ==========

  // House Bellona - new members
  karnus: {
    default: '/images/characters/karnus.png',
  },
  'tiberius-bellona': {
    default: '/images/characters/tiberius-bellona.png',
  },
  'julia-bellona': {
    default: '/images/characters/julia-bellona.png',
  },

  // Sovereign's Court
  lysander: {
    default: '/images/characters/lysander.png',
  },
  aja: {
    default: '/images/characters/aja.png',
  },
  moira: {
    default: '/images/characters/moira.png',
  },

  // House Arcos
  lorn: {
    default: '/images/characters/lorn.png',
  },

  // House Telemanus
  kavax: {
    default: '/images/characters/kavax.png',
  },
  daxo: {
    default: '/images/characters/daxo.png',
  },

  // House Julii
  victra: {
    default: '/images/characters/victra.png',
  },
  agrippina: {
    default: '/images/characters/agrippina.png',
  },

  // House Augustus - new members
  pliny: {
    default: '/images/characters/pliny.png',
  },
  leto: {
    default: '/images/characters/leto.png',
  },

  // Darrow's household
  theodora: {
    default: '/images/characters/theodora.png',
  },

  // Other Golden Son characters
  tactus: {
    default: '/images/characters/tactus.png',
  },

  // Institute - House Mars and others
  mustang: {
    default: '/images/characters/mustang.png',
  },
  cassius: {
    default: '/images/characters/cassius.png',
  },
  julian: {
    default: '/images/characters/julian.png',
  },
  sevro: {
    default: '/images/characters/sevro.png',
  },
  roque: {
    default: '/images/characters/roque.png',
  },
  quinn: {
    default: '/images/characters/quinn.png',
  },
  lea: {
    default: '/images/characters/lea.png',
  },
  pax: {
    default: '/images/characters/pax.png',
  },
  antonia: {
    default: '/images/characters/antonia.png',
  },
  jackal: {
    default: '/images/characters/jackal.png',
  },
  titus: {
    default: '/images/characters/titus.png',
  },
  vixus: {
    default: '/images/characters/vixus.png',
  },

  // Grays and Coppers
  'ugly-dan': {
    default: '/images/characters/ugly-dan.png',
  },
  podginus: {
    default: '/images/characters/podginus.png',
  },

  // ========== MORNING STAR & LATER BOOKS ==========

  // Obsidians
  ragnar: {
    default: '/images/characters/ragnar.png',
  },
  sefi: {
    default: '/images/characters/sefi.png',
  },
  alia: {
    default: '/images/characters/alia.png',
  },
  volga: {
    default: '/images/characters/volga.png',
  },
  'volsung-fa': {
    default: '/images/characters/volsung-fa.png',
  },
  valdir: {
    default: '/images/characters/valdir.png',
  },
  wulfgar: {
    default: '/images/characters/wulfgar.png',
  },

  // Grays - new
  holiday: {
    default: '/images/characters/holiday.png',
  },
  trigg: {
    default: '/images/characters/trigg.png',
  },
  ephraim: {
    default: '/images/characters/ephraim.png',
  },

  // Reds - new
  lyria: {
    default: '/images/characters/lyria.png',
  },
  rhonna: {
    default: '/images/characters/rhonna.png',
  },

  // Gold protagonists/allies
  alexandar: {
    default: '/images/characters/alexandar.png',
  },
  thraxa: {
    default: '/images/characters/thraxa.png',
  },
  'pax-augustus': {
    default: '/images/characters/pax-augustus.png',
  },
  electra: {
    default: '/images/characters/electra.png',
  },

  // Gold antagonists
  apollonius: {
    default: '/images/characters/apollonius.png',
  },
  atlas: {
    default: '/images/characters/atlas.png',
  },
  atalantia: {
    default: '/images/characters/atalantia.png',
  },
  ajax: {
    default: '/images/characters/ajax.png',
  },
  'lysander-adult': {
    default: '/images/characters/lysander-adult.png',
  },

  // Rim Golds
  romulus: {
    default: '/images/characters/romulus.png',
  },
  dido: {
    default: '/images/characters/dido.png',
  },
  diomedes: {
    default: '/images/characters/diomedes.png',
  },
  seraphina: {
    default: '/images/characters/seraphina.png',
  },
  kalindora: {
    default: '/images/characters/kalindora.png',
  },

  // Blues
  orion: {
    default: '/images/characters/orion.png',
  },
  pytha: {
    default: '/images/characters/pytha.png',
  },

  // Silver
  quicksilver: {
    default: '/images/characters/quicksilver.png',
  },

  // Additional characters
  liam: {
    default: '/images/characters/liam.png',
  },
  niobe: {
    default: '/images/characters/niobe.png',
  },
  marius: {
    default: '/images/characters/marius.png',
  },
  'ash-lord': {
    default: '/images/characters/ash-lord.png',
  },
  'duke-of-hands': {
    default: '/images/characters/duke-of-hands.png',
  },
  'syndicate-queen': {
    default: '/images/characters/syndicate-queen.png',
  },
};

export function getCharacterImage(
  characterId: string,
  currentChapter: number
): string | null {
  const config = characterImages[characterId];
  if (!config) return null;

  // Check if character has been carved/transformed
  if (config.carved && config.carvedAtChapter && currentChapter >= config.carvedAtChapter) {
    return config.carved;
  }

  return config.default;
}

export function isCharacterCarved(characterId: string, currentChapter: number): boolean {
  const config = characterImages[characterId];
  if (!config || !config.carvedAtChapter) return false;
  return currentChapter >= config.carvedAtChapter;
}

export function getCarvedAtChapter(characterId: string): number | null {
  const config = characterImages[characterId];
  return config?.carvedAtChapter || null;
}
