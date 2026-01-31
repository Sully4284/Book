import { redRisingBook, familyGroups as redRisingFamilyGroups } from './redRising';
import { goldenSonBook, goldenSonFamilyGroups } from './goldenSon';
import { morningStarBook, morningStarFamilyGroups } from './morningStar';
import { ironGoldBook, ironGoldFamilyGroups } from './ironGold';
import { darkAgeBook, darkAgeFamilyGroups } from './darkAge';
import { lightBringerBook, lightBringerFamilyGroups } from './lightBringer';
import type { Book, FamilyGroup, Character } from '../types';

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
