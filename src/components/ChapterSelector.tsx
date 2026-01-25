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
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <label
        htmlFor="chapter-select"
        className="text-sm font-medium text-zinc-400"
      >
        Currently Reading:
      </label>
      <select
        id="chapter-select"
        value={currentChapter}
        onChange={(e) => onChapterChange(Number(e.target.value))}
        className="library-select px-4 py-2 rounded-lg cursor-pointer text-sm min-w-[280px]"
      >
        {chapters.map((chapter) => (
          <option key={chapter.number} value={chapter.number}>
            {chapter.number === 0
              ? chapter.title
              : `Chapter ${chapter.number}: ${chapter.title}`}
          </option>
        ))}
      </select>
      <span className="text-xs text-zinc-500 italic hidden md:inline">
        (Spoiler-free up to this point)
      </span>
    </div>
  );
}
