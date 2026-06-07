import { redRisingBook, familyGroups as redRisingFamilyGroups } from './redRising';
import { goldenSonBook, goldenSonFamilyGroups } from './goldenSon';
import { morningStarBook, morningStarFamilyGroups } from './morningStar';
import { ironGoldBook, ironGoldFamilyGroups } from './ironGold';
import { darkAgeBook, darkAgeFamilyGroups } from './darkAge';
import { lightBringerBook, lightBringerFamilyGroups } from './lightBringer';
import type { Book, FamilyGroup, Character, CharacterInfo, ProgressiveName, Relationship } from '../types';

// Export individual books
export { redRisingBook, redRisingFamilyGroups };
export { goldenSonBook, goldenSonFamilyGroups };
export { morningStarBook, morningStarFamilyGroups };
export { ironGoldBook, ironGoldFamilyGroups };
export { darkAgeBook, darkAgeFamilyGroups };
export { lightBringerBook, lightBringerFamilyGroups };

// Export all books as an array for easy iteration
export const allBooks: Book[] = [
  redRisingBook,
  goldenSonBook,
  morningStarBook,
  ironGoldBook,
  darkAgeBook,
  lightBringerBook,
];

// Character importance order by book (characters listed first are most important)
// Characters not in this list will appear after the listed ones
const characterImportanceByBook: Record<string, string[]> = {
  'red-rising': [
    'darrow', 'eo', 'sevro', 'mustang', 'cassius', 'nero-augustus', 'jackal',
    'dancer', 'roque', 'fitchner', 'julian', 'titus', 'pax', 'quinn', 'antonia',
    'kieran', 'mother-darrow', 'father-darrow', 'narol', 'harmony', 'mickey',
  ],
  'golden-son': [
    'darrow', 'sevro', 'mustang', 'cassius', 'nero-augustus', 'jackal', 'roque',
    'victra', 'lorn', 'fitchner', 'octavia', 'aja', 'kavax', 'tactus', 'karnus',
    'antonia', 'lysander', 'quinn', 'dancer', 'eo', 'pliny', 'daxo', 'theodora',
  ],
  'morning-star': [
    'darrow', 'sevro', 'mustang', 'victra', 'ragnar', 'cassius', 'jackal', 'roque',
    'octavia', 'aja', 'sefi', 'holiday', 'dancer', 'kavax', 'lysander', 'romulus',
    'antonia', 'ash-lord', 'trigg', 'daxo', 'eo', 'kieran', 'orion', 'quicksilver',
  ],
  'iron-gold': [
    'darrow', 'lysander', 'lyria', 'ephraim', 'mustang', 'sevro', 'victra',
    'cassius', 'diomedes', 'seraphina', 'romulus', 'dido', 'atlas', 'atalantia',
    'apollonius', 'sefi', 'pax-augustus', 'electra', 'dancer', 'kavax', 'daxo',
    'holiday', 'volga', 'ash-lord', 'pytha', 'quicksilver', 'thraxa', 'orion',
  ],
  'dark-age': [
    'darrow', 'lysander', 'mustang', 'lyria', 'ephraim', 'sevro', 'victra',
    'atalantia', 'atlas', 'ajax', 'apollonius', 'sefi', 'volsung-fa', 'volga',
    'pax-augustus', 'electra', 'diomedes', 'alexandar', 'thraxa', 'rhonna',
    'dancer', 'orion', 'holiday', 'cassius', 'daxo', 'kavax',
  ],
  'light-bringer': [
    'darrow', 'lysander', 'mustang', 'lyria', 'cassius', 'sevro', 'victra',
    'apollonius', 'atalantia', 'ajax', 'atlas', 'diomedes', 'volsung-fa', 'volga',
    'pax-augustus', 'electra', 'thraxa', 'kavax', 'pytha',
  ],
};

// Get importance rank for a character in a book (lower = more important)
export function getCharacterImportance(bookId: string, characterId: string): number {
  const importanceList = characterImportanceByBook[bookId] || [];
  const index = importanceList.indexOf(characterId);
  return index >= 0 ? index : importanceList.length + 1000; // Unlisted characters go to end
}

// Sort characters by importance for a given book
export function sortCharactersByImportance(bookId: string, characters: Character[]): Character[] {
  return [...characters].sort((a, b) => {
    const importanceA = getCharacterImportance(bookId, a.id);
    const importanceB = getCharacterImportance(bookId, b.id);
    return importanceA - importanceB;
  });
}

// Helper function to get family groups for a specific book
export function getFamilyGroupsForBook(bookId: string): FamilyGroup[] {
  switch (bookId) {
    case 'red-rising':
      return redRisingFamilyGroups;
    case 'golden-son':
      return goldenSonFamilyGroups;
    case 'morning-star':
      return morningStarFamilyGroups;
    case 'iron-gold':
      return ironGoldFamilyGroups;
    case 'dark-age':
      return darkAgeFamilyGroups;
    case 'light-bringer':
      return lightBringerFamilyGroups;
    default:
      return [];
  }
}

// Helper function to get a book by ID
export function getBookById(bookId: string): Book | undefined {
  return allBooks.find((book) => book.id === bookId);
}

// ============================================================================
// Cumulative data helpers
//
// Each book's data file only contains the characters/groups relevant to that
// book. When the reader is on a later book they have already read everything
// before it, so the guide should surface every character met so far - not just
// the ones the current book happens to re-introduce. The helpers below merge a
// book together with all of the books that precede it.
// ============================================================================

// Collapse a character into a "fully revealed" form, as if the reader has
// finished the book it came from: everything is visible from chapter 0, the
// final name is used, and only the most up-to-date info snapshot is kept.
function fullyRevealCharacter(char: Character): Character {
  const latestInfo: CharacterInfo[] =
    char.progressiveInfo.length > 0
      ? [{ ...[...char.progressiveInfo].sort((a, b) => b.chapter - a.chapter)[0], chapter: 0 }]
      : [];

  const finalName =
    char.progressiveNames && char.progressiveNames.length > 0
      ? [...char.progressiveNames].sort((a, b) => b.chapter - a.chapter)[0].name
      : char.name;

  return {
    ...char,
    firstAppearance: 0,
    progressiveNames: char.progressiveNames ? [{ chapter: 0, name: finalName }] : undefined,
    relationships: char.relationships.map((rel) => ({ ...rel, revealedAtChapter: 0 })),
    progressiveInfo: latestInfo,
  };
}

// Deduplicate relationships by target + type, keeping the earliest reveal.
function dedupeRelationships(relationships: Relationship[]): Relationship[] {
  const seen = new Map<string, Relationship>();
  for (const rel of relationships) {
    const key = `${rel.targetId}-${rel.type}`;
    const existing = seen.get(key);
    if (!existing || rel.revealedAtChapter < existing.revealedAtChapter) {
      seen.set(key, rel);
    }
  }
  return Array.from(seen.values());
}

// Layer the current book's progressive data on top of a character who is
// already known from an earlier book: they stay visible from the start, but
// their info/relationships keep advancing as the reader moves through the
// current book.
function layerCurrentBook(carried: Character, current: Character): Character {
  const mergedNames: ProgressiveName[] | undefined =
    carried.progressiveNames || current.progressiveNames
      ? [...(carried.progressiveNames ?? []), ...(current.progressiveNames ?? [])]
      : undefined;

  return {
    ...current,
    firstAppearance: 0,
    progressiveInfo: [...carried.progressiveInfo, ...current.progressiveInfo],
    progressiveNames: mergedNames,
    relationships: dedupeRelationships([...carried.relationships, ...current.relationships]),
  };
}

// Get every character the reader has encountered up to and including the given
// book. Characters from earlier books are carried forward fully revealed;
// characters in the current book keep their progressive reveal behaviour.
export function getCumulativeCharacters(bookId: string): Character[] {
  const bookIndex = allBooks.findIndex((book) => book.id === bookId);
  if (bookIndex < 0) return [];
  if (bookIndex === 0) return allBooks[0].characters;

  const merged = new Map<string, Character>();

  // Carry forward everyone from earlier books, fully revealed (latest book wins).
  for (let i = 0; i < bookIndex; i++) {
    for (const char of allBooks[i].characters) {
      merged.set(char.id, fullyRevealCharacter(char));
    }
  }

  // Layer the current book on top.
  for (const char of allBooks[bookIndex].characters) {
    const carried = merged.get(char.id);
    merged.set(char.id, carried ? layerCurrentBook(carried, char) : char);
  }

  return Array.from(merged.values());
}

// Union the family groups from every book up to and including the given one,
// merging the membership of groups that recur across books.
export function getCumulativeFamilyGroups(bookId: string): FamilyGroup[] {
  const bookIndex = allBooks.findIndex((book) => book.id === bookId);
  if (bookIndex < 0) return [];

  const merged = new Map<string, FamilyGroup>();
  for (let i = 0; i <= bookIndex; i++) {
    for (const group of getFamilyGroupsForBook(allBooks[i].id)) {
      const existing = merged.get(group.id);
      if (existing) {
        const members = Array.from(new Set([...existing.members, ...group.members]));
        merged.set(group.id, { ...existing, members });
      } else {
        merged.set(group.id, { ...group, members: [...group.members] });
      }
    }
  }
  return Array.from(merged.values());
}

// Importance rank for a character considering every book up to the given one,
// so legacy characters keep a sensible ordering instead of all sinking to the
// bottom. Returns the best (lowest) rank across those books.
export function getCumulativeImportance(bookId: string, characterId: string): number {
  const bookIndex = allBooks.findIndex((book) => book.id === bookId);
  const upTo = bookIndex < 0 ? allBooks.length - 1 : bookIndex;

  let best = Infinity;
  for (let i = 0; i <= upTo; i++) {
    best = Math.min(best, getCharacterImportance(allBooks[i].id, characterId));
  }
  return best;
}
