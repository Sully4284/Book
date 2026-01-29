interface Chapter {
  number: number;
  title: string;
}

interface ChapterSelectorProps {
  chapters: Chapter[];
  currentChapter: number;
  onChapterChange: (chapter: number) => void;
  bookTitle: string;
}

export function ChapterSelector({
  chapters,
  currentChapter,
  onChapterChange,
}: ChapterSelectorProps) {
  const currentChapterData = chapters.find((c) => c.number === currentChapter);

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Chapter dropdown */}
      <div className="relative">
        <select
          id="chapter-select"
          value={currentChapter}
          onChange={(e) => onChapterChange(Number(e.target.value))}
          className="appearance-none pl-4 pr-10 py-2.5 bg-zinc-900 border border-zinc-700 rounded-lg cursor-pointer text-sm text-white font-medium min-w-[300px] focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
        >
          {chapters.map((chapter) => (
            <option key={chapter.number} value={chapter.number}>
              {chapter.number === 0
                ? chapter.title
                : `Chapter ${chapter.number}: ${chapter.title}`}
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

      {/* Progress bar */}
      <div className="flex items-center gap-3 w-full max-w-[300px]">
        <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-red-600 to-amber-500 transition-all duration-300"
            style={{ width: `${((currentChapter) / (chapters.length - 1)) * 100}%` }}
          />
        </div>
        <span className="text-xs text-zinc-500 whitespace-nowrap">
          {Math.round(((currentChapter) / (chapters.length - 1)) * 100)}% read
        </span>
      </div>

      {/* Spoiler note */}
      <p className="text-xs text-zinc-600 italic">
        Showing info up to "{currentChapterData?.title}"
      </p>
    </div>
  );
}
