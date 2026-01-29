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
        group relative cursor-pointer transition-all duration-200 rounded-xl overflow-hidden
        ${isSelected ? 'ring-2 ring-white scale-[1.02]' : 'hover:scale-[1.02]'}
      `}
      style={{
        backgroundColor: '#151515',
      }}
    >
      {/* Hover glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 30px ${accentColor}15, 0 0 20px ${accentColor}10`,
        }}
      />

      {/* Color accent bar at top */}
      <div
        className="h-0.5 w-full"
        style={{
          background: isCarved
            ? 'linear-gradient(to right, #dc2626 0%, #dc2626 50%, #f59e0b 50%, #f59e0b 100%)'
            : accentColor,
        }}
      />

      {/* Card content */}
      <div className="p-4 sm:p-5">
        {/* Status indicator - top right */}
        <div className="absolute top-4 right-4">
          {status === 'alive' ? (
            <div
              className="w-2.5 h-2.5 rounded-full bg-emerald-500"
              style={{ boxShadow: '0 0 6px #10b981' }}
              title="Alive"
            />
          ) : status === 'dead' ? (
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: 'rgba(220, 38, 38, 0.2)',
                boxShadow: '0 0 8px rgba(220, 38, 38, 0.4)'
              }}
              title="Deceased"
            >
              <img
                src="/images/Skull Icon.svg"
                alt="Deceased"
                className="w-3.5 h-3.5"
                style={{ filter: 'brightness(1.1)' }}
              />
            </div>
          ) : (
            <div
              className="w-2.5 h-2.5 rounded-full bg-zinc-500"
              title="Unknown"
            />
          )}
        </div>

        {/* Portrait */}
        <div className="flex justify-center mb-4">
          <div
            className="w-20 h-20 rounded-full p-[2px]"
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
        </div>

        {/* Name */}
        <h3 className="text-center text-white font-medium text-base mb-0.5 truncate">
          {name}
        </h3>

        {/* Alias */}
        {aliases && aliases.length > 0 && (
          <p className="text-center text-zinc-500 text-xs italic truncate">
            "{aliases[0]}"
          </p>
        )}
      </div>
    </div>
  );
}
