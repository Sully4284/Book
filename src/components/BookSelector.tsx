import type { Book } from '../types';

interface BookSelectorProps {
  books: Book[];
  selectedBookId: string;
  onBookChange: (bookId: string) => void;
}

export function BookSelector({
  books,
  selectedBookId,
  onBookChange,
}: BookSelectorProps) {
  return (
    <div className="flex items-center gap-3">
      {/* Book icon */}
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/50">
        <svg
          className="w-5 h-5 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{
            filter: 'drop-shadow(0 0 4px rgba(220, 38, 38, 0.5))',
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      </div>

      {/* Book dropdown */}
      <div className="relative">
        <select
          id="book-select"
          value={selectedBookId}
          onChange={(e) => onBookChange(e.target.value)}
          className="appearance-none pl-4 pr-10 py-2.5 bg-zinc-900 border border-zinc-700 rounded-lg cursor-pointer text-sm text-white font-medium min-w-[200px] focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
          style={{
            boxShadow: selectedBookId === 'red-rising'
              ? '0 0 10px rgba(220, 38, 38, 0.15)'
              : '0 0 10px rgba(234, 179, 8, 0.15)',
          }}
        >
          {books.map((book) => (
            <option key={book.id} value={book.id}>
              {book.title}
            </option>
          ))}
        </select>
        {/* Custom dropdown arrow */}
        <svg
          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Book number indicator */}
      <span className="text-xs text-zinc-500 hidden sm:inline">
        Book {books.findIndex((b) => b.id === selectedBookId) + 1} of {books.length}
      </span>
    </div>
  );
}
