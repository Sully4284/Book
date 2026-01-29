import { useState, useCallback } from 'react';
import { redRisingBook, familyGroups } from './data/redRising';
import { useCharacterData } from './hooks/useCharacterData';
import { ChapterSelector } from './components/ChapterSelector';
import { CharacterGrid } from './components/CharacterGrid';
import { CharacterModal } from './components/CharacterModal';
import { FamilyTreeView } from './components/FamilyTreeView';
import type { CharacterStatus } from './types';

type ViewMode = 'grid' | 'tree';

function App() {
  const [currentChapter, setCurrentChapter] = useState(1);
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('tree');
  const [selectedFamilyGroup, setSelectedFamilyGroup] = useState<string | null>(null);
  const [filterColor, setFilterColor] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<CharacterStatus | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const processedCharacters = useCharacterData(
    redRisingBook.characters,
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

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top bar with title */}
          <div className="py-6 text-center">
            <h1
              className="text-4xl sm:text-5xl font-bold tracking-wider uppercase"
              style={{
                fontFamily: "'Orbitron', 'Rajdhani', 'Audiowide', sans-serif",
                color: '#DC2626',
                textShadow: '0 0 10px rgba(220, 38, 38, 0.7), 0 0 20px rgba(220, 38, 38, 0.5), 0 0 30px rgba(220, 38, 38, 0.3), 0 0 40px rgba(220, 38, 38, 0.2)',
                letterSpacing: '0.15em',
              }}
            >
              Red Rising
            </h1>
            <p className="text-zinc-500 text-xs mt-2 tracking-[0.3em] uppercase">
              Character Guide
            </p>
          </div>

          {/* Chapter selector - prominent and centered */}
          <div className="pb-6">
            <ChapterSelector
              chapters={redRisingBook.chapters}
              currentChapter={currentChapter}
              onChapterChange={setCurrentChapter}
              bookTitle={redRisingBook.title}
            />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          {/* Left side - View toggle and character count */}
          <div className="flex items-center gap-4 ml-2">
            {/* View mode toggle */}
            <div className="inline-flex rounded-lg bg-zinc-900 p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  viewMode === 'grid'
                    ? 'bg-zinc-700 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('tree')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  viewMode === 'tree'
                    ? 'bg-zinc-700 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Family Tree
              </button>
            </div>

            {/* Character count */}
            <span className="text-zinc-500 text-sm hidden sm:inline">
              {visibleCharacters.length} characters
            </span>
          </div>

          {/* Right side - Search (only in grid view) and filter toggle */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Search - only show in grid view */}
            {viewMode === 'grid' && (
              <div className="relative flex-1 sm:flex-initial">
                <input
                  type="text"
                  placeholder="Search characters..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-56 pl-10 pr-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-colors"
                />
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500"
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
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                showFilters || hasActiveFilters
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                  : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              <span className="hidden sm:inline">Filters</span>
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              )}
            </button>
          </div>
        </div>

        {/* Expandable filter panel */}
        {showFilters && (
          <div className="mb-6 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
            <div className="flex flex-wrap gap-4">
              {/* Color filter */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-zinc-400 uppercase tracking-wide">
                  Color
                </label>
                <select
                  value={filterColor || ''}
                  onChange={(e) => setFilterColor(e.target.value || null)}
                  className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-white cursor-pointer focus:outline-none focus:border-zinc-600 min-w-[140px]"
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
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-zinc-400 uppercase tracking-wide">
                  Status
                </label>
                <select
                  value={filterStatus || ''}
                  onChange={(e) =>
                    setFilterStatus((e.target.value as CharacterStatus) || null)
                  }
                  className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-white cursor-pointer focus:outline-none focus:border-zinc-600 min-w-[140px]"
                >
                  <option value="">All Statuses</option>
                  <option value="alive">Alive</option>
                  <option value="dead">Dead</option>
                  <option value="unknown">Unknown</option>
                </select>
              </div>

              {/* Family group selector */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-zinc-400 uppercase tracking-wide">
                  Group
                </label>
                <select
                  value={selectedFamilyGroup || ''}
                  onChange={(e) => setSelectedFamilyGroup(e.target.value || null)}
                  className="px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-white cursor-pointer focus:outline-none focus:border-zinc-600 min-w-[180px]"
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
                <div className="flex flex-col gap-1.5 justify-end">
                  <label className="text-xs font-medium text-transparent">Clear</label>
                  <button
                    onClick={() => {
                      setFilterColor(null);
                      setFilterStatus(null);
                      setSelectedFamilyGroup(null);
                      setSearchQuery('');
                    }}
                    className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    Clear all
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* View content */}
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
            className="h-[calc(100vh-280px)] min-h-[500px] rounded-xl overflow-hidden border border-zinc-800"
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
