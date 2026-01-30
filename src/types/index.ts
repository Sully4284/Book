export type Color =
  | 'Red'
  | 'Gold'
  | 'Gray'
  | 'Obsidian'
  | 'Pink'
  | 'Violet'
  | 'Green'
  | 'Blue'
  | 'Copper'
  | 'Yellow'
  | 'Orange'
  | 'Brown'
  | 'White'
  | 'Silver';

export type CharacterStatus = 'alive' | 'dead' | 'unknown';

export interface CharacterInfo {
  // Progressive info revealed at different chapters
  chapter: number;
  description: string;
  status: CharacterStatus;
  additionalDetails?: string;
}

export interface Relationship {
  targetId: string;
  type: 'spouse' | 'parent' | 'child' | 'sibling' | 'ally' | 'enemy' | 'mentor' | 'friend' | 'grandparent' | 'rival' | 'lover';
  revealedAtChapter: number;
  description?: string;
}

// Progressive name reveal - for hiding surnames until plot reveals them
export interface ProgressiveName {
  chapter: number;
  name: string;
}

export interface Character {
  id: string;
  name: string;
  // Progressive name reveals - if present, name changes based on chapter
  progressiveNames?: ProgressiveName[];
  aliases?: string[];
  color: Color;
  house?: string;
  firstAppearance: number; // Chapter number
  imageUrl?: string;
  relationships: Relationship[];
  // Info that progressively reveals as you read
  progressiveInfo: CharacterInfo[];
}

export interface Book {
  id: string;
  title: string;
  author: string;
  chapters: { number: number; title: string }[];
  characters: Character[];
}

export interface FamilyGroup {
  id: string;
  name: string;
  members: string[]; // Character IDs
}
