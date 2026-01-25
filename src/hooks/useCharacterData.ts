import { useMemo } from 'react';
import type { Character, CharacterStatus, Relationship } from '../types';

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

export function useCharacterData(
  characters: Character[],
  currentChapter: number
): ProcessedCharacter[] {
  return useMemo(() => {
    return characters
      .filter((char) => char.firstAppearance <= currentChapter)
      .map((char) => {
        // Get the most recent info for the current chapter
        const relevantInfo = char.progressiveInfo
          .filter((info) => info.chapter <= currentChapter)
          .sort((a, b) => b.chapter - a.chapter)[0];

        // Filter relationships to only show ones revealed by current chapter
        const visibleRelationships = char.relationships.filter(
          (rel) => rel.revealedAtChapter <= currentChapter
        );

        return {
          id: char.id,
          name: char.name,
          aliases: char.aliases,
          color: char.color,
          house: char.house,
          description: relevantInfo?.description || 'No information available yet.',
          status: relevantInfo?.status || 'unknown',
          additionalDetails: relevantInfo?.additionalDetails,
          relationships: visibleRelationships,
          isVisible: char.firstAppearance <= currentChapter,
        };
      });
  }, [characters, currentChapter]);
}

export function getStatusColor(status: CharacterStatus): string {
  switch (status) {
    case 'alive':
      return 'bg-green-500';
    case 'dead':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
}

export function getColorStyle(color: string): { bg: string; border: string; text: string } {
  const colorMap: Record<string, { bg: string; border: string; text: string }> = {
    Red: { bg: 'bg-red-900/50', border: 'border-red-600', text: 'text-red-400' },
    Gold: { bg: 'bg-amber-900/50', border: 'border-amber-500', text: 'text-amber-400' },
    Gray: { bg: 'bg-gray-700/50', border: 'border-gray-500', text: 'text-gray-400' },
    Obsidian: { bg: 'bg-stone-900/50', border: 'border-stone-600', text: 'text-stone-400' },
    Pink: { bg: 'bg-pink-900/50', border: 'border-pink-500', text: 'text-pink-400' },
    Violet: { bg: 'bg-violet-900/50', border: 'border-violet-500', text: 'text-violet-400' },
    Green: { bg: 'bg-green-900/50', border: 'border-green-500', text: 'text-green-400' },
    Blue: { bg: 'bg-blue-900/50', border: 'border-blue-500', text: 'text-blue-400' },
    Copper: { bg: 'bg-orange-900/50', border: 'border-orange-600', text: 'text-orange-400' },
    Yellow: { bg: 'bg-yellow-900/50', border: 'border-yellow-500', text: 'text-yellow-400' },
    Orange: { bg: 'bg-orange-800/50', border: 'border-orange-500', text: 'text-orange-400' },
    Brown: { bg: 'bg-amber-950/50', border: 'border-amber-800', text: 'text-amber-600' },
    White: { bg: 'bg-slate-100/20', border: 'border-slate-300', text: 'text-slate-300' },
    Silver: { bg: 'bg-slate-700/50', border: 'border-slate-400', text: 'text-slate-300' },
  };

  return colorMap[color] || { bg: 'bg-gray-800/50', border: 'border-gray-600', text: 'text-gray-400' };
}
