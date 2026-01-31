import { redRisingBook, familyGroups as redRisingFamilyGroups } from './redRising';
import { goldenSonBook, goldenSonFamilyGroups } from './goldenSon';
import { morningStarBook, morningStarFamilyGroups } from './morningStar';
import { ironGoldBook, ironGoldFamilyGroups } from './ironGold';
import { darkAgeBook, darkAgeFamilyGroups } from './darkAge';
import { lightBringerBook, lightBringerFamilyGroups } from './lightBringer';
import type { Book, FamilyGroup } from '../types';

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
