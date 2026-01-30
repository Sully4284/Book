import { redRisingBook, familyGroups as redRisingFamilyGroups } from './redRising';
import { goldenSonBook, goldenSonFamilyGroups } from './goldenSon';
import type { Book, FamilyGroup } from '../types';

// Export individual books
export { redRisingBook, redRisingFamilyGroups };
export { goldenSonBook, goldenSonFamilyGroups };

// Export all books as an array for easy iteration
export const allBooks: Book[] = [redRisingBook, goldenSonBook];

// Helper function to get family groups for a specific book
export function getFamilyGroupsForBook(bookId: string): FamilyGroup[] {
  switch (bookId) {
    case 'red-rising':
      return redRisingFamilyGroups;
    case 'golden-son':
      return goldenSonFamilyGroups;
    default:
      return [];
  }
}

// Helper function to get a book by ID
export function getBookById(bookId: string): Book | undefined {
  return allBooks.find((book) => book.id === bookId);
}
