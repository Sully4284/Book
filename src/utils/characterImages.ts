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
  fitchner: {
    default: '/images/characters/fitchner.png',
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
  // titus and vixus - no images yet (billing limit reached)

  // Grays and Coppers
  'ugly-dan': {
    default: '/images/characters/ugly-dan.png',
  },
  podginus: {
    default: '/images/characters/podginus.png',
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
