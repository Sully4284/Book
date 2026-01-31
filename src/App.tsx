import { useState, useCallback } from 'react';
import { allBooks, getFamilyGroupsForBook } from './data';
import { useCharacterData } from './hooks/useCharacterData';
import { CharacterGrid } from './components/CharacterGrid';
import { CharacterModal } from './components/CharacterModal';
import { FamilyTreeView } from './components/FamilyTreeView';
import type { CharacterStatus } from './types';

type ViewMode = 'grid' | 'tree';

function App() {
  const [selectedBookId, setSelectedBookId] = useState('red-rising');
  const [currentChapter, setCurrentChapter] = useState(1);
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('tree');
  const [selectedFamilyGroup, setSelectedFamilyGroup] = useState<string | null>(null);
  const [filterColor, setFilterColor] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<CharacterStatus | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Get the currently selected book
  const selectedBook = allBooks.find((b) => b.id === selectedBookId) || allBooks[0];
  const familyGroups = getFamilyGroupsForBook(selectedBookId);

  // Handle book change - reset chapter to 0 (Prologue) and clear filters
  const handleBookChange = useCallback((bookId: string) => {
    setSelectedBookId(bookId);
    setCurrentChapter(0);
    setSelectedCharacterId(null);
    setSelectedFamilyGroup(null);
    setFilterColor(null);
    setFilterStatus(null);
    setSearchQuery('');
  }, []);

  const processedCharacters = useCharacterData(
    selectedBook.characters,
    currentChapter
  );

  const selectedCharacter = processedCharacters.find(
    (c) => c.id === selectedCharacterId
  );

  const handleCharacterClick = useCallback((characterId: string) => {
    setSelectedCharacterId(characterId);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedCharacterId(null);
  }, []);

  const uniqueColors = Array.from(
    new Set(processedCharacters.filter((c) => c.isVisible).map((c) => c.color))
  );

  const visibleCharacters = processedCharacters.filter((c) => c.isVisible);
  const hasActiveFilters = filterColor || filterStatus || searchQuery || selectedFamilyGroup;

  // Generate random stars for the header background
  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.7 + 0.3,
    animationDelay: `${Math.random() * 3}s`,
  }));

  // Dynamic title color based on selected book
  const titleColor = selectedBookId === 'golden-son' ? '#EAB308' : '#DC2626';
  const titleGlow = selectedBookId === 'golden-son'
    ? '0 0 10px rgba(234, 179, 8, 0.7), 0 0 20px rgba(234, 179, 8, 0.5), 0 0 30px rgba(234, 179, 8, 0.3)'
    : '0 0 10px rgba(220, 38, 38, 0.7), 0 0 20px rgba(220, 38, 38, 0.5), 0 0 30px rgba(220, 38, 38, 0.3)';
  const accentColor = selectedBookId === 'golden-son' ? 'amber' : 'red';

  // Calculate progress
  const progressPercent = Math.round(((currentChapter) / (selectedBook.chapters.length - 1)) * 100);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Compact Header with title and stars */}
      <header className="border-b border-zinc-800/50 relative overflow-hidden">
        {/* Star field background */}
        <div className="absolute inset-0 pointer-events-none">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                left: star.left,
                top: star.top,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                animationDelay: star.animationDelay,
                animationDuration: '3s',
              }}
            />
          ))}
        </div>

        <div className="max-w-[1800px] mx-auto px-8 sm:px-12 lg:px-20 relative z-10">
          {/* Title - more compact */}
          <div className="py-6 text-center">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wider uppercase transition-all duration-500"
              style={{
                fontFamily: "'Orbitron', 'Rajdhani', 'Audiowide', sans-serif",
                color: titleColor,
                textShadow: titleGlow,
                letterSpacing: '0.15em',
              }}
            >
              {selectedBook.title}
            </h1>
            <p className="text-zinc-500 text-xs mt-1 tracking-[0.3em] uppercase">
              Character Guide
            </p>
          </div>
        </div>
      </header>

      {/* Main Control Bar - unified controls */}
      <div className="sticky top-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-zinc-800/50">
        <div className="max-w-[1800px] mx-auto px-8 sm:px-12 lg:px-20 py-5">
          {/* Main controls row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Left: View toggle */}
            <div className="flex items-center gap-5">
              <div className="inline-flex rounded-xl bg-zinc-900 p-2 border border-zinc-800">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center gap-3 px-6 py-3 text-sm font-medium rounded-lg transition-all ${
                    viewMode === 'grid'
                      ? 'bg-zinc-700 text-white shadow-lg'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <span>Grid</span>
                </button>
                <button
                  onClick={() => setViewMode('tree')}
                  className={`flex items-center gap-3 px-6 py-3 text-sm font-medium rounded-lg transition-all ${
                    viewMode === 'tree'
                      ? 'bg-zinc-700 text-white shadow-lg'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Family Tree</span>
                </button>
              </div>

              {/* Character count badge */}
              <div className="hidden sm:flex items-center gap-3 px-5 py-2.5 bg-zinc-900/50 rounded-lg border border-zinc-800">
                <span className="text-zinc-300 text-sm font-medium">{visibleCharacters.length}</span>
                <span className="text-zinc-500 text-sm">characters</span>
              </div>
            </div>

            {/* Center: Book & Chapter selectors side-by-side */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Book selector */}
              <div className="relative flex items-center gap-3">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-lg"
                  style={{
                    backgroundColor: selectedBookId === 'golden-son' ? 'rgba(234, 179, 8, 0.1)' : 'rgba(220, 38, 38, 0.1)',
                    border: `1px solid ${selectedBookId === 'golden-son' ? 'rgba(234, 179, 8, 0.3)' : 'rgba(220, 38, 38, 0.3)'}`,
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{
                      color: selectedBookId === 'golden-son' ? '#EAB308' : '#DC2626',
                      filter: `drop-shadow(0 0 4px ${selectedBookId === 'golden-son' ? 'rgba(234, 179, 8, 0.5)' : 'rgba(220, 38, 38, 0.5)'})`,
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
                <div className="relative">
                  <select
                    value={selectedBookId}
                    onChange={(e) => handleBookChange(e.target.value)}
                    className="appearance-none pl-4 pr-10 py-2.5 bg-zinc-900 border border-zinc-700 rounded-lg cursor-pointer text-sm text-white font-medium min-w-[160px] focus:outline-none focus:border-zinc-500 transition-all"
                  >
                    {allBooks.map((book) => (
                      <option key={book.id} value={book.id}>
                        {book.title}
                      </option>
                    ))}
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-10 bg-zinc-700" />

              {/* Chapter selector with progress */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <select
                    value={currentChapter}
                    onChange={(e) => setCurrentChapter(Number(e.target.value))}
                    className="appearance-none pl-4 pr-10 py-2.5 bg-zinc-900 border border-zinc-700 rounded-lg cursor-pointer text-sm text-white font-medium min-w-[240px] focus:outline-none focus:border-zinc-500 transition-all"
                  >
                    {selectedBook.chapters.map((chapter) => (
                      <option key={chapter.number} value={chapter.number}>
                        {chapter.number === 0
                          ? chapter.title
                          : `Ch ${chapter.number}: ${chapter.title}`}
                      </option>
                    ))}
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {/* Progress indicator */}
                <div className="hidden md:flex items-center gap-3">
                  <div className="w-28 h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-600 to-amber-500 transition-all duration-300"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                  <span className="text-sm text-zinc-400 w-12">{progressPercent}%</span>
                </div>
              </div>
            </div>

            {/* Right: Search and Filter */}
            <div className="flex items-center gap-4">
              {/* Search - only show in grid view */}
              {viewMode === 'grid' && (
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-44 lg:w-52 pl-10 pr-5 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-colors"
                  />
                  <svg
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              )}

              {/* Filter toggle button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  showFilters || hasActiveFilters
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                <span>Filters</span>
                {hasActiveFilters && (
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                )}
              </button>
            </div>
          </div>

          {/* Expandable filter panel */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-zinc-800">
              <div className="flex flex-wrap items-end gap-6">
                {/* Color filter */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    Color
                  </label>
                  <select
                    value={filterColor || ''}
                    onChange={(e) => setFilterColor(e.target.value || null)}
                    className="px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-white cursor-pointer focus:outline-none focus:border-zinc-600 min-w-[160px]"
                  >
                    <option value="">All Colors</option>
                    {uniqueColors.map((color) => (
                      <option key={color} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Status filter */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    Status
                  </label>
                  <select
                    value={filterStatus || ''}
                    onChange={(e) =>
                      setFilterStatus((e.target.value as CharacterStatus) || null)
                    }
                    className="px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-white cursor-pointer focus:outline-none focus:border-zinc-600 min-w-[160px]"
                  >
                    <option value="">All Statuses</option>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                    <option value="unknown">Unknown</option>
                  </select>
                </div>

                {/* Family group selector */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    Group
                  </label>
                  <select
                    value={selectedFamilyGroup || ''}
                    onChange={(e) => setSelectedFamilyGroup(e.target.value || null)}
                    className="px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-white cursor-pointer focus:outline-none focus:border-zinc-600 min-w-[200px]"
                  >
                    <option value="">All Characters</option>
                    {familyGroups.map((group) => (
                      <option key={group.id} value={group.id}>
                        {group.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Clear filters button */}
                {hasActiveFilters && (
                  <button
                    onClick={() => {
                      setFilterColor(null);
                      setFilterStatus(null);
                      setSelectedFamilyGroup(null);
                      setSearchQuery('');
                    }}
                    className="px-5 py-2.5 text-sm text-zinc-400 hover:text-white transition-colors border border-zinc-700 rounded-lg hover:border-zinc-600"
                  >
                    Clear all
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main content - full width with proper spacing */}
      <main className="w-full px-8 sm:px-12 lg:px-20 py-8">
        {/* View content - full width */}
        {viewMode === 'grid' ? (
          <CharacterGrid
            characters={processedCharacters}
            selectedCharacterId={selectedCharacterId}
            onCharacterClick={handleCharacterClick}
            filterColor={filterColor}
            filterStatus={filterStatus}
            searchQuery={searchQuery}
            currentChapter={currentChapter}
            selectedFamilyGroup={selectedFamilyGroup}
            familyGroups={familyGroups}
          />
        ) : (
          <div
            className="h-[calc(100vh-220px)] min-h-[600px] rounded-xl overflow-hidden border border-zinc-800"
            style={{ backgroundColor: '#0c0c0c' }}
          >
            <FamilyTreeView
              characters={processedCharacters}
              selectedFamilyGroup={selectedFamilyGroup}
              familyGroups={familyGroups}
              onCharacterClick={handleCharacterClick}
              currentChapter={currentChapter}
              filterColor={filterColor}
              filterStatus={filterStatus}
            />
          </div>
        )}
      </main>

      {/* Character detail modal */}
      {selectedCharacter && (
        <CharacterModal
          {...selectedCharacter}
          allCharacters={processedCharacters.map((c) => ({
            id: c.id,
            name: c.name,
          }))}
          onClose={handleCloseModal}
          onCharacterClick={handleCharacterClick}
          currentChapter={currentChapter}
        />
      )}
    </div>
  );
}

export default App;
