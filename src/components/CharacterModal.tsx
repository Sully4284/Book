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
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#141414',
          border: '1px solid #2a2a2a',
        }}
      >
        {/* Color accent bar */}
        <div
          className="h-1 w-full"
          style={{
            background: isCarved
              ? 'linear-gradient(to right, #dc2626 0%, #dc2626 50%, #f59e0b 50%, #f59e0b 100%)'
              : accentColor,
          }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
        >
          ✕
        </button>

        <div className="p-6">
          {/* Header */}
          <div className="flex items-start gap-6 mb-6">
            {/* Character portrait */}
            <div
              className="w-24 h-24 rounded-full flex-shrink-0 p-1"
              style={{
                background: isCarved
                  ? 'linear-gradient(to right, #dc2626 0%, #dc2626 50%, #f59e0b 50%, #f59e0b 100%)'
                  : accentColor,
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-zinc-800">
                {characterImage ? (
                  <img
                    src={characterImage}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ backgroundColor: `${accentColor}20` }}
                  >
                    <span
                      className="text-3xl font-bold"
                      style={{ color: accentColor }}
                    >
                      {name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1 pt-2">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold text-white">{name}</h2>
                <div className="flex items-center gap-2">
                  {status === 'alive' ? (
                    <div
                      className="w-3 h-3 rounded-full bg-green-500"
                      style={{ boxShadow: '0 0 8px #22c55e' }}
                    />
                  ) : status === 'dead' ? (
                    <img
                      src="/images/Skull Icon.svg"
                      alt="Deceased"
                      className="w-4 h-4"
                      style={{ filter: 'drop-shadow(0 0 4px #dc2626)' }}
                    />
                  ) : (
                    <div className="w-3 h-3 rounded-full bg-gray-500" />
                  )}
                  <span className="text-sm text-zinc-500 capitalize">({status})</span>
                </div>
              </div>

              {aliases && aliases.length > 0 && (
                <p className="text-zinc-400 text-sm italic mb-3">
                  Also known as: {aliases.join(', ')}
                </p>
              )}

              <div className="flex gap-2">
                <span
                  className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{
                    backgroundColor: `${accentColor}20`,
                    color: accentColor,
                    border: `1px solid ${accentColor}40`,
                  }}
                >
                  {isCarved ? 'Red/Gold' : color}
                </span>
                {house && (
                  <span className="text-xs px-3 py-1 rounded-full font-medium bg-zinc-700 text-zinc-300">
                    House {house}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-zinc-700 mb-6"></div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">
              About
            </h3>
            <p className="text-zinc-300 leading-relaxed">{description}</p>
            {additionalDetails && (
              <div className="mt-4 pl-4 border-l-2 border-zinc-600">
                <p className="text-sm text-zinc-500 italic">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {relationships.map((rel, index) => (
                  <button
                    key={index}
                    onClick={() => onCharacterClick(rel.targetId)}
                    className="flex items-center gap-3 p-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors text-left"
                  >
                    <span className="text-xs px-2 py-1 rounded bg-zinc-700 text-zinc-400">
                      {getRelationshipLabel(rel.type)}
                    </span>
                    <span className="font-medium text-white">
                      {getCharacterName(rel.targetId)}
                    </span>
                    {rel.description && (
                      <span className="text-xs text-zinc-500 italic">
                        ({rel.description})
                      </span>
                    )}
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
