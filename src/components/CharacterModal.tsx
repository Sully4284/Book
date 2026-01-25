import { getStatusColor } from '../hooks/useCharacterData';
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
  const statusColor = getStatusColor(status);
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
      style={{ backgroundColor: 'rgba(45, 34, 22, 0.9)' }}
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(135deg, #D4A853 0%, #8B6914 25%, #C9A227 50%, #8B6914 75%, #D4A853 100%)',
          padding: '12px',
        }}
      >
        {/* Inner parchment content */}
        <div
          className="rounded-md relative"
          style={{
            background: `linear-gradient(180deg, #FDF8EF 0%, #F5ECD7 50%, #E8DCC4 100%)`,
          }}
        >
          {/* Decorative corner flourishes */}
          <div className="absolute top-3 left-3 text-2xl text-amber-600/40">❧</div>
          <div className="absolute top-3 right-3 text-2xl text-amber-600/40" style={{ transform: 'scaleX(-1)' }}>❧</div>
          <div className="absolute bottom-3 left-3 text-2xl text-amber-600/40" style={{ transform: 'scaleY(-1)' }}>❧</div>
          <div className="absolute bottom-3 right-3 text-2xl text-amber-600/40" style={{ transform: 'scale(-1)' }}>❧</div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-12 w-8 h-8 rounded-full flex items-center justify-center text-amber-800 hover:bg-amber-200 transition-colors font-display text-xl"
          >
            ✕
          </button>

          <div className="p-8">
            {/* Header */}
            <div className="flex items-start gap-6 mb-8">
              {/* Character portrait with ornate frame */}
              <div
                className="w-28 h-28 rounded-lg flex-shrink-0 p-1"
                style={{
                  background: isCarved
                    ? 'linear-gradient(135deg, #dc2626 0%, #dc2626 50%, #f59e0b 50%, #f59e0b 100%)'
                    : `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 50%, ${accentColor} 100%)`,
                }}
              >
                <div className="w-full h-full rounded-md overflow-hidden bg-amber-50">
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
                        className="text-4xl font-display font-bold"
                        style={{ color: accentColor }}
                      >
                        {name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-1 pt-2">
                <div className="flex items-center gap-4 mb-3">
                  <h2 className="font-display text-3xl font-bold text-amber-900">{name}</h2>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-4 h-4 rounded-full ${statusColor}`}
                      style={{ boxShadow: `0 0 8px ${status === 'alive' ? '#22c55e' : status === 'dead' ? '#dc2626' : '#6b7280'}` }}
                      title={status.charAt(0).toUpperCase() + status.slice(1)}
                    />
                    <span className="font-body text-sm text-amber-700 capitalize italic">({status})</span>
                  </div>
                </div>

                {aliases && aliases.length > 0 && (
                  <p className="font-display text-lg text-amber-700/80 italic mb-3">
                    Also known as: {aliases.join(', ')}
                  </p>
                )}

                <div className="flex gap-3">
                  <span
                    className="text-sm px-4 py-1.5 rounded-full font-display font-medium shadow-sm"
                    style={{
                      backgroundColor: `${accentColor}20`,
                      color: accentColor,
                      border: `2px solid ${accentColor}40`,
                    }}
                  >
                    {isCarved ? 'Red/Gold' : color}
                  </span>
                  {house && (
                    <span className="text-sm px-4 py-1.5 rounded-full font-display font-medium bg-amber-100 text-amber-800 border-2 border-amber-300 shadow-sm">
                      House {house}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Decorative divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
              <span className="text-amber-500 text-lg">✦</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="font-display text-xl font-semibold text-amber-800 mb-3 flex items-center gap-2">
                <span className="text-amber-500">❖</span> About
              </h3>
              <p className="font-body text-lg text-amber-900/90 leading-relaxed">{description}</p>
              {additionalDetails && (
                <div className="mt-4 pl-4 border-l-4 border-amber-400/50">
                  <p className="font-body text-base text-amber-800/70 italic">
                    {additionalDetails}
                  </p>
                </div>
              )}
            </div>

            {/* Relationships */}
            {relationships.length > 0 && (
              <div>
                <h3 className="font-display text-xl font-semibold text-amber-800 mb-4 flex items-center gap-2">
                  <span className="text-amber-500">❖</span> Relationships
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {relationships.map((rel, index) => (
                    <button
                      key={index}
                      onClick={() => onCharacterClick(rel.targetId)}
                      className="flex items-center gap-3 p-3 rounded-lg bg-amber-100/50 hover:bg-amber-200/50 transition-colors text-left border border-amber-300/50 shadow-sm"
                    >
                      <span className="text-xs px-2 py-1 rounded-full bg-amber-200 text-amber-800 font-display font-medium">
                        {getRelationshipLabel(rel.type)}
                      </span>
                      <span className="font-display font-medium text-amber-900">
                        {getCharacterName(rel.targetId)}
                      </span>
                      {rel.description && (
                        <span className="text-xs text-amber-700/60 italic font-body">
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
    </div>
  );
}
