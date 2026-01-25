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
        ornate-frame cursor-pointer transition-all duration-300
        ${isSelected ? 'scale-105 shadow-2xl' : 'hover:scale-102 hover:shadow-xl'}
      `}
      style={{
        boxShadow: isSelected ? `0 0 20px ${accentColor}40` : undefined,
      }}
    >
      <div className="ornate-frame-inner p-4 rounded">
        {/* Status indicator with ornate styling */}
        <div className="absolute top-4 right-4 flex items-center gap-1">
          <div
            className={`w-3 h-3 rounded-full ${statusColor} shadow-md`}
            style={{ boxShadow: `0 0 6px ${status === 'alive' ? '#22c55e' : status === 'dead' ? '#dc2626' : '#6b7280'}` }}
            title={status.charAt(0).toUpperCase() + status.slice(1)}
          />
          {status === 'dead' && (
            <span className="text-xs font-display text-red-700 font-semibold">RIP</span>
          )}
        </div>

        {/* Character portrait with frame effect */}
        <div className="relative mx-auto mb-4 w-20 h-20">
          {/* Outer decorative ring */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: isCarved
                ? 'linear-gradient(135deg, #dc2626 0%, #dc2626 50%, #f59e0b 50%, #f59e0b 100%)'
                : `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}99 50%, ${accentColor} 100%)`,
              padding: '3px',
            }}
          >
            <div className="w-full h-full rounded-full bg-amber-50 p-1">
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
                    className="text-2xl font-display font-bold"
                    style={{ color: accentColor }}
                  >
                    {name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Name with elegant typography */}
        <h3 className="font-display text-lg font-bold text-amber-900 text-center mb-1">
          {name}
        </h3>

        {/* Aliases in italic script style */}
        {aliases && aliases.length > 0 && (
          <p className="font-display text-sm text-amber-700/70 text-center mb-2 italic">
            "{aliases[0]}"
          </p>
        )}

        {/* Color and house badges */}
        <div className="flex justify-center gap-2 mb-3">
          <span
            className="text-xs px-3 py-1 rounded-full font-display font-medium shadow-sm"
            style={{
              backgroundColor: `${accentColor}20`,
              color: accentColor,
              border: `1px solid ${accentColor}40`,
            }}
          >
            {isCarved ? 'Red/Gold' : color}
          </span>
          {house && (
            <span className="text-xs px-3 py-1 rounded-full font-display font-medium bg-amber-100 text-amber-800 border border-amber-300 shadow-sm">
              {house}
            </span>
          )}
        </div>

        {/* Decorative divider */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
          <span className="text-amber-400 text-xs">✦</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
        </div>

        {/* Click for more with elegant styling */}
        <p className="font-body text-xs text-amber-700/60 text-center italic">
          Click for details
        </p>
      </div>
    </div>
  );
}
