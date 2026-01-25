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
    <div className="min-h-screen">
      {/* Wood panel header */}
      <header className="wood-panel relative py-6 shadow-2xl">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Title section with slingblade */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <img
              src="/images/slingblade.jpg"
              alt="Slingblade"
              className="h-16 w-auto opacity-90 hidden sm:block"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}
            />
            <div className="text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-gold-gradient tracking-wide">
                Red Rising
              </h1>
              <p className="font-display text-xl md:text-2xl italic text-amber-200/80 mt-1">
                Family Trees
              </p>
            </div>
            <img
              src="/images/slingblade.jpg"
              alt="Slingblade"
              className="h-16 w-auto opacity-90 hidden sm:block"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))', transform: 'scaleX(-1)' }}
            />
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
      <main className="max-w-7xl mx-auto p-6">
        {/* View controls with ornate styling */}
        <div className="parchment-card rounded-xl p-4 mb-6 shadow-lg border-2 border-amber-700/30">
          <div className="flex flex-wrap gap-4 items-center">
            {/* View mode toggle */}
            <div className="flex rounded-lg overflow-hidden border-2 border-amber-700/50 shadow-md">
              <button
                onClick={() => setViewMode('grid')}
                className={`btn-library px-5 py-2.5 font-medium ${
                  viewMode === 'grid' ? 'active' : ''
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode('tree')}
                className={`btn-library px-5 py-2.5 font-medium ${
                  viewMode === 'tree' ? 'active' : ''
                }`}
              >
                Family Tree
              </button>
            </div>

            {/* Search */}
            <input
              type="text"
              placeholder="Search characters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-library px-4 py-2.5 rounded-lg min-w-[200px]"
            />

            {/* Color filter */}
            <select
              value={filterColor || ''}
              onChange={(e) => setFilterColor(e.target.value || null)}
              className="library-select px-4 py-2.5 rounded-lg cursor-pointer"
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
              className="library-select px-4 py-2.5 rounded-lg cursor-pointer"
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
              className="library-select px-4 py-2.5 rounded-lg cursor-pointer"
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

        {/* Character count with ornate styling */}
        <div className="ornate-divider mb-6">
          <span className="font-display text-lg text-amber-900 bg-amber-100/50 px-4 py-1 rounded-full border border-amber-700/30">
            {processedCharacters.filter((c) => c.isVisible).length} Characters • Chapter {currentChapter}
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
          <div className="h-[600px] rounded-xl overflow-hidden shadow-xl border-4 border-amber-700/50"
               style={{ background: 'linear-gradient(180deg, #2D2216 0%, #1a1510 100%)' }}>
            <FamilyTreeView
              characters={processedCharacters}
              selectedFamilyGroup={selectedFamilyGroup}
              familyGroups={familyGroups}
              onCharacterClick={handleCharacterClick}
              currentChapter={currentChapter}
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
