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

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Dark header */}
      <header className="wood-panel relative py-6">
        <div className="relative z-10 w-full px-4 md:px-6 lg:px-8">
          {/* Title section */}
          <div className="flex items-center justify-center mb-6">
            <div className="text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold tracking-wide text-white">
                <span style={{ color: '#DC2626' }}>Red</span>{' '}
                <span style={{ color: '#D4AF37' }}>Rising</span>
              </h1>
              <p className="text-zinc-400 text-sm mt-2 tracking-widest uppercase">
                Character Guide
              </p>
            </div>
          </div>

          {/* Chapter selector */}
          <ChapterSelector
            chapters={redRisingBook.chapters}
            currentChapter={currentChapter}
            onChapterChange={setCurrentChapter}
            bookTitle={redRisingBook.title}
          />
        </div>
      </header>

      {/* Main content */}
      <main className="w-full px-4 md:px-6 lg:px-8 py-6">
        {/* Controls bar */}
        <div className="rounded-lg p-4 mb-6" style={{ backgroundColor: '#141414' }}>
          <div className="flex flex-wrap gap-3 items-center justify-center">
            {/* View mode toggle */}
            <div className="flex rounded-lg overflow-hidden" style={{ border: '1px solid #2a2a2a' }}>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 text-sm font-medium transition-all ${
                  viewMode === 'grid'
                    ? 'bg-white text-black'
                    : 'bg-transparent text-zinc-400 hover:text-white'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('tree')}
                className={`px-4 py-2 text-sm font-medium transition-all ${
                  viewMode === 'tree'
                    ? 'bg-white text-black'
                    : 'bg-transparent text-zinc-400 hover:text-white'
                }`}
              >
                Family Tree
              </button>
            </div>

            {/* Search */}
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-library px-4 py-2 rounded-lg min-w-[160px] text-sm"
            />

            {/* Color filter */}
            <select
              value={filterColor || ''}
              onChange={(e) => setFilterColor(e.target.value || null)}
              className="library-select px-3 py-2 rounded-lg cursor-pointer text-sm"
            >
              <option value="">All Colors</option>
              {uniqueColors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>

            {/* Status filter */}
            <select
              value={filterStatus || ''}
              onChange={(e) =>
                setFilterStatus((e.target.value as CharacterStatus) || null)
              }
              className="library-select px-3 py-2 rounded-lg cursor-pointer text-sm"
            >
              <option value="">All Statuses</option>
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>

            {/* Family group selector */}
            <select
              value={selectedFamilyGroup || ''}
              onChange={(e) => setSelectedFamilyGroup(e.target.value || null)}
              className="library-select px-3 py-2 rounded-lg cursor-pointer text-sm"
            >
              <option value="">All Characters</option>
              {familyGroups.map((group) => (
                <option key={group.id} value={group.id}>
                  {group.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Character count */}
        <div className="text-center mb-6">
          <span className="text-zinc-500 text-sm">
            {processedCharacters.filter((c) => c.isVisible).length} Characters
            <span className="mx-2">•</span>
            Chapter {currentChapter}
          </span>
        </div>

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
            className="h-[calc(100vh-320px)] min-h-[500px] rounded-lg overflow-hidden"
            style={{ backgroundColor: '#0f0f0f', border: '1px solid #1f1f1f' }}
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
