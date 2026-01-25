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
        className="font-display text-lg font-medium"
        style={{ color: '#DC2626' }}
      >
        Currently Reading:
      </label>
      <select
        id="chapter-select"
        value={currentChapter}
        onChange={(e) => onChapterChange(Number(e.target.value))}
        className="library-select px-6 py-2.5 rounded-lg cursor-pointer text-base min-w-[280px] font-body"
      >
        {chapters.map((chapter) => (
          <option key={chapter.number} value={chapter.number}>
            {chapter.number === 0
              ? chapter.title
              : `Chapter ${chapter.number}: ${chapter.title}`}
          </option>
        ))}
      </select>
      <span className="font-body text-sm italic hidden md:inline" style={{ color: '#DC2626' }}>
        (Spoiler-free up to this point)
      </span>
    </div>
  );
}
