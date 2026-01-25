// Character image mapping
// Add character images here as: characterId: { default: 'path', carved?: 'path' }
// For characters with transformations (like Darrow), use 'carved' for post-transformation image

interface CharacterImageConfig {
  default: string;
  carved?: string; // For characters who undergo transformation
  carvedAtChapter?: number; // Chapter when transformation happens
}

const characterImages: Record<string, CharacterImageConfig> = {
  darrow: {
    default: '/images/characters/darrow-red.png',
    carved: '/images/characters/darrow-gold.png',
    carvedAtChapter: 12,
  },
  mustang: {
    default: '/images/characters/mustang.png',
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
