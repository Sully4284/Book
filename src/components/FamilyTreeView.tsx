import { useCallback, useMemo, useEffect } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
} from '@xyflow/react';
import type { Node, Edge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { getCharacterImage, isCharacterCarved } from '../utils/characterImages';
import type { CharacterStatus, Relationship } from '../types';

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

type CharacterNodeData = ProcessedCharacter & Record<string, unknown>;

type CharacterNode = Node<CharacterNodeData>;

interface FamilyTreeViewProps {
  characters: ProcessedCharacter[];
  selectedFamilyGroup: string | null;
  familyGroups: { id: string; name: string; members: string[] }[];
  onCharacterClick: (characterId: string) => void;
  currentChapter: number;
  filterColor: string | null;
  filterStatus: CharacterStatus | null;
  bookId: string;
}

// Color to accent mapping for tree nodes
const colorAccents: Record<string, string> = {
  Red: '#DC2626',
  Gold: '#F59E0B',
  Gray: '#6B7280',
  Pink: '#EC4899',
  Violet: '#8B5CF6',
  Copper: '#EA580C',
};

function CharacterNodeComponent({ data }: { data: CharacterNodeData }) {
  const isAlive = data.status === 'alive';

  const currentChapter = (data.currentChapter as number) ?? 0;
  const bookId = (data.bookId as string) || 'red-rising';
  const characterImage = getCharacterImage(data.id, currentChapter, bookId);
  const isCarved = isCharacterCarved(data.id, currentChapter, bookId);
  const accentColor = isCarved ? '#C9A227' : (colorAccents[data.color] || '#6B7280');

  return (
    <div
      className={`
        relative flex flex-col items-center
        cursor-pointer hover:scale-105 transition-transform
      `}
    >
      {/* Connection handles - all use center positions for cleaner lines */}
      <Handle
        type="target"
        position={Position.Top}
        id="top"
        className="!opacity-0 !w-2 !h-2"
        style={{ top: 40 }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom"
        className="!opacity-0 !w-2 !h-2"
        style={{ bottom: 60 }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="left"
        className="!opacity-0 !w-2 !h-2"
        style={{ top: 40 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right"
        className="!opacity-0 !w-2 !h-2"
        style={{ top: 40 }}
      />

      {/* Portrait with color-coded frame - dark theme */}
      <div
        className="w-20 h-20 rounded-full p-1 shadow-lg"
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
              alt={data.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ backgroundColor: `${accentColor}20` }}
            >
              <span
                className="text-2xl font-bold"
                style={{ color: accentColor }}
              >
                {data.name.charAt(0)}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Status indicator - green dot if alive, red skull if dead */}
      {isAlive ? (
        <div
          className="absolute top-0 left-0 w-3 h-3 rounded-full bg-green-500"
          style={{ boxShadow: '0 0 8px #22c55e' }}
        />
      ) : (
        <img
          src="/images/Skull Icon.svg"
          alt="Deceased"
          className="absolute top-0 left-0 w-4 h-4"
          style={{ filter: 'drop-shadow(0 0 4px #dc2626)' }}
        />
      )}

      {/* Name card - dark theme */}
      <div
        className="mt-2 px-3 py-1.5 rounded min-w-[90px] text-center"
        style={{
          backgroundColor: '#1a1a1a',
          border: `2px solid ${accentColor}`,
        }}
      >
        <span className="font-medium text-sm block text-white">
          {data.name}
        </span>
      </div>
    </div>
  );
}

const nodeTypes = {
  character: CharacterNodeComponent,
};

// Family tree layout configurations with explicit connections
interface FamilyTreeLayout {
  generations: {
    members: string[];
  }[];
  connections: {
    from: string;
    to: string;
    type: 'spouse' | 'parent-child' | 'sibling';
    // Optional chapter requirement - connection only shows after this chapter
    revealedAtChapter?: number;
  }[];
}

const familyLayouts: Record<string, FamilyTreeLayout> = {
  // ========== RED RISING LAYOUTS ==========
  'darrow-family': {
    generations: [
      { members: ['narol', 'father-darrow', 'mother-darrow'] },
      { members: ['kieran', 'leanna', 'darrow', 'eo'] },
      { members: ['dio', 'loran'] },
    ],
    connections: [
      { from: 'father-darrow', to: 'mother-darrow', type: 'spouse' },
      { from: 'father-darrow', to: 'kieran', type: 'parent-child' },
      { from: 'father-darrow', to: 'darrow', type: 'parent-child' },
      { from: 'father-darrow', to: 'leanna', type: 'parent-child' },
      { from: 'father-darrow', to: 'narol', type: 'sibling' },
      { from: 'darrow', to: 'eo', type: 'spouse' },
      { from: 'eo', to: 'dio', type: 'sibling' },
      { from: 'dio', to: 'loran', type: 'spouse' },
    ],
  },
  'eos-family': {
    generations: [
      { members: ['dio', 'loran'] },
    ],
    connections: [
      { from: 'dio', to: 'loran', type: 'spouse' },
    ],
  },
  'augustus-family': {
    generations: [
      { members: ['nero-augustus'] },
      { members: ['mustang', 'jackal'] },
    ],
    connections: [
      { from: 'nero-augustus', to: 'mustang', type: 'parent-child', revealedAtChapter: 41 },
      { from: 'nero-augustus', to: 'jackal', type: 'parent-child', revealedAtChapter: 41 },
      { from: 'mustang', to: 'jackal', type: 'sibling', revealedAtChapter: 41 },
    ],
  },
  'bellona-family': {
    generations: [
      { members: ['cassius', 'julian'] },
    ],
    connections: [
      { from: 'cassius', to: 'julian', type: 'sibling' },
    ],
  },
  'sons-of-ares': {
    generations: [
      { members: ['fitchner'] },
      { members: ['sevro'] },
      { members: ['dancer', 'harmony', 'mickey', 'evey', 'matteo'] },
    ],
    connections: [
      { from: 'fitchner', to: 'sevro', type: 'parent-child', revealedAtChapter: 44 },
    ],
  },
  'house-mars': {
    generations: [
      { members: ['sevro', 'roque', 'quinn', 'lea', 'pax', 'titus', 'antonia', 'vixus'] },
    ],
    connections: [],
  },

  // ========== GOLDEN SON LAYOUTS ==========
  'house-augustus': {
    generations: [
      { members: ['nero-augustus'] },
      { members: ['mustang', 'jackal', 'leto'] },
      { members: ['darrow', 'pliny'] },
    ],
    connections: [
      { from: 'nero-augustus', to: 'mustang', type: 'parent-child' },
      { from: 'nero-augustus', to: 'jackal', type: 'parent-child' },
      { from: 'nero-augustus', to: 'leto', type: 'parent-child' },
      { from: 'mustang', to: 'jackal', type: 'sibling' },
      { from: 'mustang', to: 'leto', type: 'sibling' },
      { from: 'jackal', to: 'leto', type: 'sibling' },
    ],
  },
  'house-bellona': {
    generations: [
      { members: ['tiberius-bellona', 'julia-bellona'] },
      { members: ['cassius', 'karnus', 'julian'] },
    ],
    connections: [
      { from: 'tiberius-bellona', to: 'julia-bellona', type: 'spouse' },
      { from: 'tiberius-bellona', to: 'cassius', type: 'parent-child' },
      { from: 'tiberius-bellona', to: 'karnus', type: 'parent-child' },
      { from: 'tiberius-bellona', to: 'julian', type: 'parent-child' },
      { from: 'cassius', to: 'karnus', type: 'sibling' },
      { from: 'cassius', to: 'julian', type: 'sibling' },
      { from: 'karnus', to: 'julian', type: 'sibling' },
    ],
  },
  'sovereign-court': {
    generations: [
      { members: ['octavia'] },
      { members: ['lysander', 'aja', 'moira'] },
    ],
    connections: [
      { from: 'octavia', to: 'lysander', type: 'parent-child' },
      { from: 'aja', to: 'moira', type: 'sibling' },
    ],
  },
  'house-telemanus': {
    generations: [
      { members: ['kavax', 'niobe'] },
      { members: ['daxo', 'pax', 'thraxa'] },
    ],
    connections: [
      { from: 'kavax', to: 'niobe', type: 'spouse' },
      { from: 'kavax', to: 'daxo', type: 'parent-child' },
      { from: 'kavax', to: 'pax', type: 'parent-child' },
      { from: 'kavax', to: 'thraxa', type: 'parent-child' },
      { from: 'daxo', to: 'pax', type: 'sibling' },
      { from: 'daxo', to: 'thraxa', type: 'sibling' },
      { from: 'pax', to: 'thraxa', type: 'sibling' },
    ],
  },
  'house-julii': {
    generations: [
      { members: ['agrippina'] },
      { members: ['victra', 'antonia'] },
    ],
    connections: [
      { from: 'agrippina', to: 'victra', type: 'parent-child' },
      { from: 'agrippina', to: 'antonia', type: 'parent-child' },
      { from: 'victra', to: 'antonia', type: 'sibling' },
    ],
  },
  'house-arcos': {
    generations: [
      { members: ['lorn'] },
      { members: ['alexandar'] },
    ],
    connections: [
      { from: 'lorn', to: 'alexandar', type: 'parent-child' },
    ],
  },
  'howlers': {
    generations: [
      { members: ['sevro', 'tactus', 'roque', 'quinn'] },
    ],
    connections: [
      { from: 'roque', to: 'quinn', type: 'spouse' },
    ],
  },
  'darrow-household': {
    generations: [
      { members: ['eo'] },
      { members: ['theodora'] },
    ],
    connections: [],
  },

  // ========== MORNING STAR LAYOUTS ==========
  'nakamura-siblings': {
    generations: [
      { members: ['holiday', 'trigg'] },
    ],
    connections: [
      { from: 'holiday', to: 'trigg', type: 'sibling' },
    ],
  },
  'obsidians': {
    generations: [
      { members: ['alia'] },
      { members: ['ragnar', 'sefi'] },
    ],
    connections: [
      { from: 'alia', to: 'ragnar', type: 'parent-child' },
      { from: 'alia', to: 'sefi', type: 'parent-child' },
      { from: 'ragnar', to: 'sefi', type: 'sibling' },
    ],
  },
  'boneriders': {
    generations: [
      { members: ['jackal'] },
      { members: ['lilath', 'antonia'] },
    ],
    connections: [],
  },
  'moon-lords': {
    generations: [
      { members: ['romulus'] },
    ],
    connections: [],
  },

  // ========== IRON GOLD LAYOUTS ==========
  'republic-leadership': {
    generations: [
      { members: ['mustang', 'darrow'] },
      { members: ['pax-augustus'] },
      { members: ['sevro', 'victra'] },
      { members: ['dancer', 'daxo', 'theodora'] },
    ],
    connections: [
      { from: 'mustang', to: 'darrow', type: 'spouse' },
      { from: 'mustang', to: 'pax-augustus', type: 'parent-child' },
      { from: 'darrow', to: 'pax-augustus', type: 'parent-child' },
      { from: 'sevro', to: 'victra', type: 'spouse' },
    ],
  },
  'house-barca': {
    generations: [
      { members: ['sevro', 'victra'] },
      { members: ['electra'] },
    ],
    connections: [
      { from: 'sevro', to: 'victra', type: 'spouse' },
      { from: 'sevro', to: 'electra', type: 'parent-child' },
      { from: 'victra', to: 'electra', type: 'parent-child' },
    ],
  },
  'house-raa': {
    generations: [
      { members: ['romulus', 'dido'] },
      { members: ['seraphina', 'diomedes', 'marius'] },
      { members: ['atlas'] },
    ],
    connections: [
      { from: 'romulus', to: 'dido', type: 'spouse' },
      { from: 'romulus', to: 'seraphina', type: 'parent-child' },
      { from: 'romulus', to: 'diomedes', type: 'parent-child' },
      { from: 'romulus', to: 'marius', type: 'parent-child' },
      { from: 'seraphina', to: 'diomedes', type: 'sibling' },
      { from: 'seraphina', to: 'marius', type: 'sibling' },
      { from: 'diomedes', to: 'marius', type: 'sibling' },
    ],
  },
  'house-lune': {
    generations: [
      { members: ['lysander'] },
      { members: ['cassius', 'pytha'] },
    ],
    connections: [],
  },
  'society-remnant': {
    generations: [
      { members: ['ash-lord'] },
      { members: ['atalantia', 'apollonius'] },
    ],
    connections: [
      { from: 'ash-lord', to: 'atalantia', type: 'parent-child' },
    ],
  },
  'the-syndicate': {
    generations: [
      { members: ['syndicate-queen'] },
      { members: ['duke-of-hands'] },
    ],
    connections: [],
  },
  'ephraims-crew': {
    generations: [
      { members: ['ephraim', 'volga'] },
    ],
    connections: [],
  },
  'lyrias-family': {
    generations: [
      { members: ['lyria', 'liam'] },
    ],
    connections: [],
  },

  // ========== DARK AGE LAYOUTS ==========
  'society-command': {
    generations: [
      { members: ['atalantia'] },
      { members: ['lysander', 'ajax', 'atlas', 'apollonius'] },
    ],
    connections: [
      { from: 'atalantia', to: 'ajax', type: 'parent-child' },
    ],
  },
  'obsidian-alliance': {
    generations: [
      { members: ['volsung-fa'] },
      { members: ['sefi', 'volga'] },
    ],
    connections: [
      { from: 'volsung-fa', to: 'sefi', type: 'parent-child' },
      { from: 'volsung-fa', to: 'volga', type: 'parent-child' },
    ],
  },
  'rim-forces': {
    generations: [
      { members: ['diomedes', 'atlas'] },
    ],
    connections: [],
  },
  'rescue-team': {
    generations: [
      { members: ['ephraim', 'volga'] },
      { members: ['pax-augustus', 'electra'] },
    ],
    connections: [],
  },
  'lyrias-allies': {
    generations: [
      { members: ['lyria', 'victra', 'volga'] },
    ],
    connections: [],
  },

  // ========== LIGHT BRINGER LAYOUTS ==========
  'darrows-crew': {
    generations: [
      { members: ['darrow', 'cassius'] },
      { members: ['apollonius', 'thraxa', 'pytha', 'aurae'] },
    ],
    connections: [],
  },
  'obsidian-forces': {
    generations: [
      { members: ['volsung-fa'] },
      { members: ['volga'] },
    ],
    connections: [
      { from: 'volsung-fa', to: 'volga', type: 'parent-child' },
    ],
  },
  'red-allies': {
    generations: [
      { members: ['lyria', 'volga'] },
    ],
    connections: [],
  },
};

// Priority order for family groups by book
const familyPriorityByBook: Record<string, string[]> = {
  'red-rising': [
    'darrow-family',
    'augustus-family',
    'bellona-family',
    'sons-of-ares',
    'house-mars',
  ],
  'golden-son': [
    'house-augustus',
    'house-bellona',
    'sovereign-court',
    'house-telemanus',
    'house-julii',
    'house-arcos',
    'sons-of-ares',
    'howlers',
    'darrow-household',
  ],
  'morning-star': [
    'darrow-family',
    'house-augustus',
    'house-bellona',
    'sovereign-court',
    'house-telemanus',
    'house-julii',
    'obsidians',
    'sons-of-ares',
    'howlers',
    'moon-lords',
    'nakamura-siblings',
    'boneriders',
  ],
  'iron-gold': [
    'house-barca',
    'republic-leadership',
    'howlers',
    'house-telemanus',
    'house-raa',
    'house-lune',
    'society-remnant',
    'the-syndicate',
    'ephraims-crew',
    'lyrias-family',
  ],
  'dark-age': [
    'house-augustus',
    'house-barca',
    'republic-leadership',
    'house-telemanus',
    'society-command',
    'howlers',
    'obsidian-alliance',
    'rim-forces',
    'rescue-team',
    'lyrias-allies',
  ],
  'light-bringer': [
    'house-augustus',
    'house-barca',
    'house-telemanus',
    'society-command',
    'darrows-crew',
    'rim-forces',
    'obsidian-forces',
    'red-allies',
  ],
};

export function FamilyTreeView({
  characters,
  selectedFamilyGroup,
  familyGroups,
  onCharacterClick,
  currentChapter,
  filterColor,
  filterStatus,
  bookId,
}: FamilyTreeViewProps) {
  const { nodes: initialNodes, edges: initialEdges } = useMemo(() => {
    const NODE_WIDTH = 140;
    const NODE_HEIGHT = 160;
    const HORIZONTAL_GAP = 30;
    const VERTICAL_GAP = 100;
    const GROUP_GAP_X = 160;
    const GROUP_GAP_Y = 140;
    const LABEL_HEIGHT = 50;
    const ROW_MAX_WIDTH = 2400;
    const MEMBERS_PER_ROW = 6;

    const nodes: CharacterNode[] = [];
    const edges: Edge[] = [];
    const nodePositions = new Map<string, { x: number; y: number; genIndex: number }>();

    const selectedGroup = selectedFamilyGroup
      ? familyGroups.find((g) => g.id === selectedFamilyGroup)
      : undefined;

    // Characters visible at this chapter, after filters
    const charMap = new Map(
      characters
        .filter((c) => {
          if (!c.isVisible) return false;
          if (filterColor && c.color !== filterColor) return false;
          if (filterStatus && c.status !== filterStatus) return false;
          if (selectedFamilyGroup && !selectedGroup?.members.includes(c.id)) return false;
          return true;
        })
        .map((c) => [c.id, c] as const)
    );

    interface PlannedGroup {
      id: string;
      name: string;
      generations: string[][];
      connections: FamilyTreeLayout['connections'];
      width: number;
      height: number;
    }

    const rowWidth = (count: number) => count * NODE_WIDTH + (count - 1) * HORIZONTAL_GAP;
    const chunk = (ids: string[]) => {
      const rows: string[][] = [];
      for (let i = 0; i < ids.length; i += MEMBERS_PER_ROW) rows.push(ids.slice(i, i + MEMBERS_PER_ROW));
      return rows;
    };

    const placed = new Set<string>();
    const planned: PlannedGroup[] = [];

    const planGroup = (groupId: string) => {
      const group = familyGroups.find((g) => g.id === groupId);
      if (!group) return;
      const layout = familyLayouts[groupId];
      const memberSet = new Set(group.members);
      const generations = (layout?.generations ?? []).map((gen) =>
        gen.members.filter((id) => memberSet.has(id) && charMap.has(id) && !placed.has(id))
      );
      const inLayout = new Set(generations.flat());
      // Members the hand-made layout doesn't mention still get a row, so nobody silently vanishes
      const extras = group.members.filter(
        (id) => charMap.has(id) && !placed.has(id) && !inLayout.has(id)
      );
      const nonEmpty = [...generations, ...chunk(extras)].filter((g) => g.length > 0);
      if (nonEmpty.length === 0) return; // nothing to show yet: no label, no empty box
      nonEmpty.flat().forEach((id) => placed.add(id));
      const widest = Math.max(...nonEmpty.map((g) => g.length));
      planned.push({
        id: groupId,
        name: group.name,
        generations: nonEmpty,
        connections: layout?.connections ?? [],
        width: rowWidth(widest),
        height: nonEmpty.length * NODE_HEIGHT + (nonEmpty.length - 1) * VERTICAL_GAP,
      });
    };

    if (selectedFamilyGroup) {
      planGroup(selectedFamilyGroup);
    } else {
      const priority = familyPriorityByBook[bookId] ?? [];
      priority.forEach(planGroup);
      familyGroups.filter((g) => !priority.includes(g.id)).forEach((g) => planGroup(g.id));
    }

    // Characters that belong to no group get a cluster of their own
    const leftovers = [...charMap.keys()].filter((id) => !placed.has(id));
    if (leftovers.length > 0) {
      const generations = chunk(leftovers);
      const widest = Math.max(...generations.map((g) => g.length));
      planned.push({
        id: 'others',
        name: 'Other Characters',
        generations,
        connections: [],
        width: rowWidth(widest),
        height: generations.length * NODE_HEIGHT + (generations.length - 1) * VERTICAL_GAP,
      });
      leftovers.forEach((id) => placed.add(id));
    }

    // Pack groups into rows, wrapping when a row fills up
    const showLabels = !selectedFamilyGroup;
    let cursorX = 0;
    let cursorY = 0;
    let rowHeight = 0;

    planned.forEach((group) => {
      if (cursorX > 0 && cursorX + group.width > ROW_MAX_WIDTH) {
        cursorX = 0;
        cursorY += rowHeight + GROUP_GAP_Y;
        rowHeight = 0;
      }
      const originX = cursorX;
      const originY = cursorY + (showLabels ? LABEL_HEIGHT : 0);

      if (showLabels) {
        nodes.push({
          id: `label-${group.id}`,
          type: 'default',
          position: { x: originX, y: cursorY },
          data: { label: group.name } as unknown as CharacterNodeData,
          style: {
            background: '#1a1a1a',
            color: '#ffffff',
            border: '1px solid #333',
            borderRadius: '4px',
            padding: '8px 16px',
            fontWeight: '600',
            fontSize: '12px',
          },
          draggable: false,
          selectable: false,
        });
      }

      group.generations.forEach((members, genIndex) => {
        const startX = originX + (group.width - rowWidth(members.length)) / 2;
        members.forEach((memberId, memberIndex) => {
          const char = charMap.get(memberId);
          if (!char) return;
          const posX = startX + memberIndex * (NODE_WIDTH + HORIZONTAL_GAP);
          const posY = originY + genIndex * (NODE_HEIGHT + VERTICAL_GAP);
          nodePositions.set(char.id, { x: posX, y: posY, genIndex });
          nodes.push({
            id: char.id,
            type: 'character',
            position: { x: posX, y: posY },
            data: { ...char, currentChapter, bookId } as CharacterNodeData,
          });
        });
      });

      const groupIds = new Set(group.generations.flat());
      group.connections.forEach((conn) => {
        const isRevealed = !conn.revealedAtChapter || conn.revealedAtChapter <= currentChapter;
        if (!isRevealed || !groupIds.has(conn.from) || !groupIds.has(conn.to)) return;
        const fromPos = nodePositions.get(conn.from);
        const toPos = nodePositions.get(conn.to);
        if (!fromPos || !toPos) return;
        const edgeId = `${group.id}-${conn.type}-${conn.from}-${conn.to}`;
        if (edges.some((e) => e.id === edgeId)) return;

        // Left/top handles are targets and right/bottom handles are sources, so
        // horizontal links always run from the left-hand node to the right-hand one.
        let source = conn.from;
        let target = conn.to;
        let sourceHandle = 'bottom';
        let targetHandle = 'top';
        if (conn.type === 'spouse' || conn.type === 'sibling') {
          if (fromPos.x > toPos.x) {
            source = conn.to;
            target = conn.from;
          }
          sourceHandle = 'right';
          targetHandle = 'left';
        }
        const edgeStyle = {
          spouse: { stroke: '#ec4899', strokeWidth: 2, strokeDasharray: '8,4' },
          'parent-child': { stroke: '#22c55e', strokeWidth: 2 },
          sibling: { stroke: '#6b7280', strokeWidth: 1, strokeDasharray: '4,4' },
        }[conn.type];

        edges.push({
          id: edgeId,
          source,
          target,
          sourceHandle,
          targetHandle,
          type: 'smoothstep',
          style: edgeStyle,
          animated: conn.type === 'spouse',
        });
      });

      cursorX += group.width + GROUP_GAP_X;
      rowHeight = Math.max(rowHeight, group.height + (showLabels ? LABEL_HEIGHT : 0));
    });

    return { nodes, edges };
  }, [characters, selectedFamilyGroup, familyGroups, currentChapter, filterColor, filterStatus, bookId]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Update when data changes
  useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialNodes, initialEdges, setNodes, setEdges]);

  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: CharacterNode) => {
      onCharacterClick(node.id);
    },
    [onCharacterClick]
  );


  if (nodes.length === 0) {
    return (
      <div className="h-full flex items-center justify-center" style={{ backgroundColor: '#0a0a0a' }}>
        <div
          className="text-center p-8 rounded-lg max-w-md"
          style={{
            backgroundColor: '#1a1a1a',
            border: '1px solid #333',
          }}
        >
          <p className="text-xl mb-3 text-white">No Characters Revealed Yet</p>
          <p className="text-zinc-500 text-sm">Progress further in the book to unveil characters in this family</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full relative">
      {/* Legend - dark theme */}
      <div
        className="absolute top-4 left-4 z-10 p-4 rounded-lg"
        style={{
          backgroundColor: '#1a1a1a',
          border: '1px solid #333',
        }}
      >
        <p className="text-sm font-semibold mb-3 text-white">
          Relationships
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <svg width="24" height="8">
              <line x1="0" y1="4" x2="24" y2="4" stroke="#ec4899" strokeWidth="2" strokeDasharray="6,3" />
            </svg>
            <span className="text-xs text-zinc-400">Spouse</span>
          </div>
          <div className="flex items-center gap-3">
            <svg width="24" height="8">
              <line x1="0" y1="4" x2="24" y2="4" stroke="#22c55e" strokeWidth="2" />
            </svg>
            <span className="text-xs text-zinc-400">Parent → Child</span>
          </div>
          <div className="flex items-center gap-3">
            <svg width="24" height="8">
              <line x1="0" y1="4" x2="24" y2="4" stroke="#6b7280" strokeWidth="1" strokeDasharray="4,4" />
            </svg>
            <span className="text-xs text-zinc-400">Sibling</span>
          </div>
        </div>
      </div>

      <ReactFlow
        key={`${bookId}|${selectedFamilyGroup ?? ''}|${currentChapter}|${filterColor ?? ''}|${filterStatus ?? ''}`}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.15, minZoom: 0.1, maxZoom: 1.2 }}
        style={{ background: '#0a0a0a' }}
        minZoom={0.1}
        maxZoom={1.5}
        defaultEdgeOptions={{
          type: 'smoothstep',
        }}
      >
        <Background color="#1f1f1f" gap={20} />
        <Controls className="!left-4 !bottom-4" />
      </ReactFlow>
    </div>
  );
}
