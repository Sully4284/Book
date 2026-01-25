import { getStatusColor } from '../hooks/useCharacterData';
import { getCharacterImage, isCharacterCarved } from '../utils/characterImages';
import type { CharacterStatus, Relationship } from '../types';

interface CharacterCardProps {
  id: string;
  name: string;
  aliases?: string[];
  color: string;
  house?: string;
  description: string;
  status: CharacterStatus;
  additionalDetails?: string;
  relationships: Relationship[];
  onClick: () => void;
  isSelected: boolean;
  currentChapter: number;
}

// Color to accent mapping for borders
const colorAccents: Record<string, string> = {
  Red: '#DC2626',
  Gold: '#F59E0B',
  Gray: '#6B7280',
  Pink: '#EC4899',
  Violet: '#8B5CF6',
  Copper: '#EA580C',
};

export function CharacterCard({
  id,
  name,
  aliases,
  color,
  house,
  status,
  onClick,
  isSelected,
  currentChapter,
}: CharacterCardProps) {
  const statusColor = getStatusColor(status);
  const characterImage = getCharacterImage(id, currentChapter);
  const isCarved = isCharacterCarved(id, currentChapter);
  const accentColor = isCarved ? '#C9A227' : (colorAccents[color] || '#6B7280');

  return (
    <div
      onClick={onClick}
      className={`
        cursor-pointer transition-all duration-300 rounded p-2
        ${isSelected ? 'scale-105 shadow-2xl' : 'hover:scale-102 hover:shadow-xl'}
      `}
      style={{
        background: isCarved
          ? 'linear-gradient(to right, #dc2626 0%, #dc2626 50%, #f59e0b 50%, #f59e0b 100%)'
          : `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}99 50%, ${accentColor} 100%)`,
        boxShadow: isSelected ? `0 0 20px ${accentColor}40` : '0 4px 6px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div className="relative bg-amber-50 p-3 rounded" style={{ boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)' }}>
        {/* Status indicator - top right corner */}
        <div className="absolute top-2 right-2">
          {status === 'alive' ? (
            <div
              className="w-4 h-4 rounded-full bg-green-500 border-2 border-green-300"
              style={{ boxShadow: '0 0 6px #22c55e' }}
              title="Alive"
            />
          ) : status === 'dead' ? (
            <img
              src="/images/Skull Icon.svg"
              alt="Deceased"
              className="w-5 h-5"
              style={{ filter: 'drop-shadow(0 0 4px #dc2626)' }}
              title="Deceased"
            />
          ) : (
            <div
              className="w-4 h-4 rounded-full bg-gray-500 border-2 border-gray-300"
              style={{ boxShadow: '0 0 6px #6b7280' }}
              title="Unknown"
            />
          )}
        </div>

        {/* Horizontal layout: portrait + text */}
        <div className="flex items-center gap-3">
          {/* Character portrait with frame effect */}
          <div className="flex-shrink-0 w-16 h-16">
            <div
              className="w-full h-full rounded-full p-0.5"
              style={{
                background: isCarved
                  ? 'linear-gradient(to right, #dc2626 0%, #dc2626 50%, #f59e0b 50%, #f59e0b 100%)'
                  : `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}99 50%, ${accentColor} 100%)`,
              }}
            >
              <div className="w-full h-full rounded-full bg-amber-50 p-0.5 overflow-hidden">
                {characterImage ? (
                  <img
                    src={characterImage}
                    alt={name}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${accentColor}20` }}
                  >
                    <span
                      className="text-xl font-display font-bold"
                      style={{ color: accentColor }}
                    >
                      {name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Name and alias */}
          <div className="flex-1 min-w-0 pr-4">
            <h3 className="font-display text-base font-bold text-amber-900 leading-tight">
              {name}
            </h3>
            {aliases && aliases.length > 0 && (
              <p className="font-display text-sm text-amber-700/70 italic truncate">
                "{aliases[0]}"
              </p>
            )}
            {house && (
              <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full font-display font-medium bg-amber-100 text-amber-800 border border-amber-300">
                {house}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
