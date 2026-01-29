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
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full max-h-[85vh] overflow-y-auto rounded-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#111111',
          border: '1px solid #222222',
        }}
      >
        {/* Color accent bar */}
        <div
          className="h-1 w-full rounded-t-2xl"
          style={{
            background: isCarved
              ? 'linear-gradient(to right, #dc2626 0%, #dc2626 50%, #f59e0b 50%, #f59e0b 100%)'
              : accentColor,
          }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6">
          {/* Header */}
          <div className="flex items-start gap-5 mb-6">
            {/* Character portrait */}
            <div
              className="w-20 h-20 rounded-full flex-shrink-0 p-[2px]"
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
                      className="text-2xl font-semibold"
                      style={{ color: accentColor }}
                    >
                      {name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1 min-w-0 pt-1">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-xl font-semibold text-white truncate">{name}</h2>
                {status === 'alive' ? (
                  <div
                    className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0"
                    style={{ boxShadow: '0 0 6px #10b981' }}
                  />
                ) : status === 'dead' ? (
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: 'rgba(220, 38, 38, 0.2)',
                      boxShadow: '0 0 8px rgba(220, 38, 38, 0.4)'
                    }}
                  >
                    <img
                      src="/images/Skull Icon.svg"
                      alt="Deceased"
                      className="w-3.5 h-3.5"
                      style={{ filter: 'brightness(1.1)' }}
                    />
                  </div>
                ) : (
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-500 flex-shrink-0" />
                )}
              </div>

              {aliases && aliases.length > 0 && (
                <p className="text-zinc-500 text-sm italic mb-2 truncate">
                  "{aliases[0]}"
                </p>
              )}

              <div className="flex flex-wrap gap-2">
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{
                    backgroundColor: `${accentColor}15`,
                    color: accentColor,
                  }}
                >
                  {isCarved ? 'Red → Gold' : color}
                </span>
                {house && (
                  <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-zinc-800 text-zinc-400">
                    House {house}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
              About
            </h3>
            <p className="text-zinc-300 text-sm leading-relaxed">{description}</p>
            {additionalDetails && (
              <div className="mt-3 pl-3 border-l-2 border-zinc-800">
                <p className="text-xs text-zinc-500 italic leading-relaxed">
                  {additionalDetails}
                </p>
              </div>
            )}
          </div>

          {/* Relationships */}
          {relationships.length > 0 && (
            <div>
              <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">
                Relationships
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {relationships.map((rel, index) => (
                  <button
                    key={index}
                    onClick={() => onCharacterClick(rel.targetId)}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 transition-colors text-left group"
                  >
                    <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-500 uppercase tracking-wide">
                      {getRelationshipLabel(rel.type)}
                    </span>
                    <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors truncate">
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
