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
  status,
  onClick,
  isSelected,
  currentChapter,
}: CharacterCardProps) {
  const characterImage = getCharacterImage(id, currentChapter);
  const isCarved = isCharacterCarved(id, currentChapter);
  const accentColor = isCarved ? '#C9A227' : (colorAccents[color] || '#6B7280');

  return (
    <div
      onClick={onClick}
      className={`
        relative cursor-pointer transition-all duration-300 rounded-lg overflow-hidden
        ${isSelected ? 'scale-105 ring-2 ring-white' : 'hover:scale-102'}
      `}
      style={{
        backgroundColor: '#1a1a1a',
        boxShadow: isSelected
          ? `0 0 30px ${accentColor}60`
          : '0 4px 12px rgba(0, 0, 0, 0.5)',
      }}
    >
      {/* Color accent bar at top */}
      <div
        className="h-1 w-full"
        style={{
          background: isCarved
            ? 'linear-gradient(to right, #dc2626 0%, #dc2626 50%, #f59e0b 50%, #f59e0b 100%)'
            : accentColor,
        }}
      />

      {/* Card content */}
      <div className="p-4">
        {/* Status indicator - top right */}
        <div className="absolute top-3 right-3">
          {status === 'alive' ? (
            <div
              className="w-3 h-3 rounded-full bg-green-500"
              style={{ boxShadow: '0 0 8px #22c55e' }}
              title="Alive"
            />
          ) : status === 'dead' ? (
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: 'rgba(220, 38, 38, 0.3)',
                boxShadow: '0 0 8px #dc2626, 0 0 12px #dc2626'
              }}
            >
              <img
                src="/images/Skull Icon.svg"
                alt="Deceased"
                className="w-4 h-4"
                style={{ filter: 'brightness(1.2)' }}
                title="Deceased"
              />
            </div>
          ) : (
            <div
              className="w-3 h-3 rounded-full bg-gray-500"
              title="Unknown"
            />
          )}
        </div>

        {/* Large portrait */}
        <div className="flex justify-center mb-4">
          <div
            className="w-24 h-24 rounded-full p-1"
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
        </div>

        {/* Name */}
        <h3 className="text-center text-white font-semibold text-lg mb-1">
          {name}
        </h3>

        {/* Alias */}
        {aliases && aliases.length > 0 && (
          <p className="text-center text-zinc-400 text-sm italic">
            "{aliases[0]}"
          </p>
        )}
      </div>
    </div>
  );
}
