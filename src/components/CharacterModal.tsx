import { getCharacterImage, isCharacterCarved } from '../utils/characterImages';
import type { CharacterStatus, Relationship } from '../types';

interface CharacterModalProps {
  id: string;
  name: string;
  aliases?: string[];
  color: string;
  house?: string;
  description: string;
  status: CharacterStatus;
  additionalDetails?: string;
  relationships: Relationship[];
  allCharacters: { id: string; name: string }[];
  onClose: () => void;
  onCharacterClick: (characterId: string) => void;
  currentChapter: number;
}

// Color to accent mapping
const colorAccents: Record<string, string> = {
  Red: '#DC2626',
  Gold: '#F59E0B',
  Gray: '#6B7280',
  Pink: '#EC4899',
  Violet: '#8B5CF6',
  Copper: '#EA580C',
};

export function CharacterModal({
  id,
  name,
  aliases,
  color,
  house,
  description,
  status,
  additionalDetails,
  relationships,
  allCharacters,
  onClose,
  onCharacterClick,
  currentChapter,
}: CharacterModalProps) {
  const characterImage = getCharacterImage(id, currentChapter);
  const isCarved = isCharacterCarved(id, currentChapter);
  const accentColor = isCarved ? '#C9A227' : (colorAccents[color] || '#6B7280');

  const getRelationshipLabel = (type: Relationship['type']): string => {
    const labels: Record<Relationship['type'], string> = {
      spouse: 'Spouse',
      parent: 'Parent of',
      child: 'Child of',
      sibling: 'Sibling',
      ally: 'Ally',
      enemy: 'Enemy',
      mentor: 'Mentor',
      friend: 'Friend',
    };
    return labels[type];
  };

  const getCharacterName = (id: string): string => {
    return allCharacters.find((c) => c.id === id)?.name || id;
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-6"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#111111',
          border: '1px solid #222222',
        }}
      >
        {/* Color accent bar */}
        <div
          className="h-1.5 w-full rounded-t-2xl"
          style={{
            background: isCarved
              ? 'linear-gradient(to right, #dc2626 0%, #dc2626 50%, #f59e0b 50%, #f59e0b 100%)'
              : accentColor,
          }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="flex items-start gap-6 mb-8">
            {/* Character portrait */}
            <div
              className="w-28 h-28 rounded-full flex-shrink-0 p-[3px]"
              style={{
                background: isCarved
                  ? 'linear-gradient(to right, #dc2626 0%, #dc2626 50%, #f59e0b 50%, #f59e0b 100%)'
                  : accentColor,
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900">
                {characterImage ? (
                  <img
                    src={characterImage}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ backgroundColor: `${accentColor}15` }}
                  >
                    <span
                      className="text-3xl font-semibold"
                      style={{ color: accentColor }}
                    >
                      {name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1 min-w-0 pt-2">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold text-white">{name}</h2>
                {status === 'alive' ? (
                  <div
                    className="w-3 h-3 rounded-full bg-emerald-500 flex-shrink-0"
                    style={{ boxShadow: '0 0 8px #10b981' }}
                  />
                ) : status === 'dead' ? (
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: 'rgba(220, 38, 38, 0.2)',
                      boxShadow: '0 0 10px rgba(220, 38, 38, 0.5)'
                    }}
                  >
                    <img
                      src="/images/Skull Icon.svg"
                      alt="Deceased"
                      className="w-4 h-4"
                      style={{ filter: 'brightness(1.1)' }}
                    />
                  </div>
                ) : (
                  <div className="w-3 h-3 rounded-full bg-zinc-500 flex-shrink-0" />
                )}
              </div>

              {aliases && aliases.length > 0 && (
                <p className="text-zinc-400 text-base italic mb-3">
                  "{aliases[0]}"
                </p>
              )}

              <div className="flex flex-wrap gap-2 mt-2">
                <span
                  className="text-sm px-3 py-1.5 rounded-full font-medium"
                  style={{
                    backgroundColor: `${accentColor}15`,
                    color: accentColor,
                  }}
                >
                  {isCarved ? 'Red → Gold' : color}
                </span>
                {house && (
                  <span className="text-sm px-3 py-1.5 rounded-full font-medium bg-zinc-800 text-zinc-400">
                    House {house}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">
              About
            </h3>
            <p className="text-zinc-300 text-base leading-relaxed">{description}</p>
            {additionalDetails && (
              <div className="mt-4 pl-4 border-l-2 border-zinc-700">
                <p className="text-sm text-zinc-500 italic leading-relaxed">
                  {additionalDetails}
                </p>
              </div>
            )}
          </div>

          {/* Relationships */}
          {relationships.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">
                Relationships
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relationships.map((rel, index) => (
                  <button
                    key={index}
                    onClick={() => onCharacterClick(rel.targetId)}
                    className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 transition-colors text-left group"
                  >
                    <span className="text-xs px-2.5 py-1 rounded bg-zinc-800 text-zinc-500 uppercase tracking-wide font-medium whitespace-nowrap">
                      {getRelationshipLabel(rel.type)}
                    </span>
                    <span className="text-base font-medium text-zinc-300 group-hover:text-white transition-colors truncate">
                      {getCharacterName(rel.targetId)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
