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
      grandparent: 'Grandparent',
      rival: 'Rival',
      lover: 'Lover',
    };
    return labels[type];
  };

  const getCharacterName = (id: string): string => {
    return allCharacters.find((c) => c.id === id)?.name || id;
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-8"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.92)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-h-[90vh] overflow-y-auto rounded-3xl"
        style={{
          maxWidth: '900px',
          backgroundColor: '#0f0f0f',
          border: '1px solid #262626',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Color accent bar */}
        <div
          className="h-2 w-full rounded-t-3xl"
          style={{
            background: isCarved
              ? 'linear-gradient(to right, #dc2626 0%, #dc2626 50%, #f59e0b 50%, #f59e0b 100%)'
              : accentColor,
          }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-10 right-10 w-12 h-12 rounded-full flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-800/80 transition-all z-10"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Main content with VERY generous padding */}
        <div className="p-12 sm:p-14 lg:p-16">
          {/* Header section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10 mb-12">
            {/* Character portrait - larger with proper spacing */}
            <div
              className="w-40 h-40 sm:w-44 sm:h-44 rounded-full flex-shrink-0 p-1"
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
                      className="text-5xl font-semibold"
                      style={{ color: accentColor }}
                    >
                      {name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Character info */}
            <div className="flex-1 min-w-0 text-center sm:text-left sm:pt-2">
              {/* Name and status */}
              <div className="flex items-center justify-center sm:justify-start gap-4 mb-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{name}</h2>
                {status === 'alive' ? (
                  <div
                    className="w-4 h-4 rounded-full bg-emerald-500 flex-shrink-0"
                    style={{ boxShadow: '0 0 12px #10b981' }}
                  />
                ) : status === 'dead' ? (
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: 'rgba(220, 38, 38, 0.2)',
                      boxShadow: '0 0 12px rgba(220, 38, 38, 0.5)'
                    }}
                  >
                    <img
                      src="/images/Skull Icon.svg"
                      alt="Deceased"
                      className="w-5 h-5"
                      style={{ filter: 'brightness(1.1)' }}
                    />
                  </div>
                ) : (
                  <div className="w-4 h-4 rounded-full bg-zinc-500 flex-shrink-0" />
                )}
              </div>

              {/* Alias */}
              {aliases && aliases.length > 0 && (
                <p className="text-zinc-400 text-xl italic mb-6">
                  "{aliases[0]}"
                </p>
              )}

              {/* Tags - with proper internal padding */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-5">
                <span
                  className="text-sm px-6 py-2.5 rounded-full font-semibold tracking-wide"
                  style={{
                    backgroundColor: `${accentColor}20`,
                    color: accentColor,
                    border: `1px solid ${accentColor}40`,
                  }}
                >
                  {isCarved ? 'Red → Gold' : color}
                </span>
                {house && (
                  <span className="text-sm px-6 py-2.5 rounded-full font-semibold tracking-wide bg-zinc-800/80 text-zinc-300 border border-zinc-700">
                    House {house}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-zinc-800 mb-12" />

          {/* Description section */}
          <div className="mb-12">
            <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6">
              About
            </h3>
            <p className="text-zinc-200 text-lg leading-loose">{description}</p>
            {additionalDetails && (
              <div className="mt-8 p-6 rounded-xl bg-zinc-900/50 border-l-4 border-zinc-600">
                <p className="text-base text-zinc-400 italic leading-relaxed">
                  {additionalDetails}
                </p>
              </div>
            )}
          </div>

          {/* Relationships section */}
          {relationships.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-8">
                Relationships
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {relationships.map((rel, index) => (
                  <button
                    key={index}
                    onClick={() => onCharacterClick(rel.targetId)}
                    className="flex items-center gap-5 p-6 rounded-2xl bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800 hover:border-zinc-700 transition-all text-left group"
                  >
                    <span className="text-xs px-4 py-2 rounded-lg bg-zinc-800 text-zinc-400 uppercase tracking-wider font-bold whitespace-nowrap">
                      {getRelationshipLabel(rel.type)}
                    </span>
                    <span className="text-lg font-medium text-zinc-200 group-hover:text-white transition-colors truncate">
                      {getCharacterName(rel.targetId)}
                    </span>
                    <svg className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400 transition-colors ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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
