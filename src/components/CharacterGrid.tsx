import { CharacterCard } from './CharacterCard';
import type { CharacterStatus, Relationship, FamilyGroup } from '../types';

interface ProcessedCharacter {
  id: string;
  name: string;
  aliases?: string[];
  color: string;
  house?: string;
  description: string;
  status: CharacterStatus;
  additionalDetails?: string;
  relationships: Relationship[];
  isVisible: boolean;
}

interface CharacterGridProps {
  characters: ProcessedCharacter[];
  selectedCharacterId: string | null;
  onCharacterClick: (characterId: string) => void;
  filterColor: string | null;
  filterStatus: CharacterStatus | null;
  searchQuery: string;
  currentChapter: number;
  selectedFamilyGroup: string | null;
  familyGroups: FamilyGroup[];
}

export function CharacterGrid({
  characters,
  selectedCharacterId,
  onCharacterClick,
  filterColor,
  filterStatus,
  searchQuery,
  currentChapter,
  selectedFamilyGroup,
  familyGroups,
}: CharacterGridProps) {
  // Get the members of the selected family group
  const selectedGroup = selectedFamilyGroup
    ? familyGroups.find((g) => g.id === selectedFamilyGroup)
    : null;

  const filteredCharacters = characters.filter((char) => {
    if (!char.isVisible) return false;
    if (filterColor && char.color !== filterColor) return false;
    if (filterStatus && char.status !== filterStatus) return false;
    // Filter by family group if one is selected
    if (selectedGroup && !selectedGroup.members.includes(char.id)) return false;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const nameMatch = char.name.toLowerCase().includes(query);
      const aliasMatch = char.aliases?.some((a) =>
        a.toLowerCase().includes(query)
      );
      if (!nameMatch && !aliasMatch) return false;
    }
    return true;
  });

  if (filteredCharacters.length === 0) {
    return (
      <div className="text-center py-16">
        <div
          className="inline-block p-8 rounded-lg"
          style={{
            background: 'linear-gradient(180deg, #FDF8EF 0%, #E8DCC4 100%)',
            border: '3px solid #C9A227',
          }}
        >
          <p className="font-display text-xl text-amber-900 mb-2">No Characters Found</p>
          <p className="font-body text-amber-700 italic">
            Adjust your filters or progress further in the book.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-5">
      {filteredCharacters.map((char) => (
        <CharacterCard
          key={char.id}
          {...char}
          onClick={() => onCharacterClick(char.id)}
          isSelected={selectedCharacterId === char.id}
          currentChapter={currentChapter}
        />
      ))}
    </div>
  );
}
