import { useCallback, useMemo, useEffect } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
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

  const currentChapter = (data.currentChapter as number) || 1;
  const characterImage = getCharacterImage(data.id, currentChapter);
  const isCarved = isCharacterCarved(data.id, currentChapter);
  const accentColor = isCarved ? '#C9A227' : (colorAccents[data.color] || '#6B7280');

  return (
    <div
      className={`
        relative flex flex-col items-center
        cursor-pointer hover:scale-105 transition-transform
      `}
    >
      {/* Hidden connection handles for edges - invisible but functional */}
      <Handle
        type="target"
        position={Position.Top}
        className="!opacity-0 !w-1 !h-1"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="!opacity-0 !w-1 !h-1"
      />
      <Handle
        type="target"
        position={Position.Left}
        id="left-target"
        className="!opacity-0 !w-1 !h-1"
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right-source"
        className="!opacity-0 !w-1 !h-1"
      />

      {/* Portrait with color-coded frame styling */}
      <div
        className="w-20 h-20 rounded-lg shadow-lg p-1"
        style={{
          background: isCarved
            ? 'linear-gradient(to right, #dc2626 0%, #dc2626 50%, #f59e0b 50%, #f59e0b 100%)'
            : `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}99 50%, ${accentColor} 100%)`,
        }}
      >
        <div className="w-full h-full rounded overflow-hidden bg-amber-50">
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
                style={{ fontFamily: 'Playfair Display, serif', color: accentColor }}
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
          className="absolute top-0 left-0 w-4 h-4 rounded-full border-2 bg-green-500 border-green-300"
          style={{ boxShadow: '0 0 8px #22c55e' }}
        />
      ) : (
        <img
          src="/images/Skull Icon.svg"
          alt="Deceased"
          className="absolute top-0 left-0 w-5 h-5"
          style={{ filter: 'drop-shadow(0 0 4px #dc2626)' }}
        />
      )}

      {/* Name card with parchment styling */}
      <div
        className="mt-2 px-4 py-2 rounded-lg min-w-[100px] text-center shadow-lg"
        style={{
          background: 'linear-gradient(180deg, #FDF8EF 0%, #E8DCC4 100%)',
          border: `2px solid ${accentColor}`,
        }}
      >
        <span
          className="font-medium text-sm block text-amber-900"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
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
  }[];
}

const familyLayouts: Record<string, FamilyTreeLayout> = {
  'darrow-family': {
    generations: [
      { members: ['father-darrow', 'mother-darrow'] },
      { members: ['narol', 'kieran', 'darrow', 'leanna', 'eo'] },
      { members: ['dio', 'loran'] },
    ],
    connections: [
      // Parents married
      { from: 'father-darrow', to: 'mother-darrow', type: 'spouse' },
      // Parents to children
      { from: 'father-darrow', to: 'kieran', type: 'parent-child' },
      { from: 'father-darrow', to: 'darrow', type: 'parent-child' },
      { from: 'father-darrow', to: 'leanna', type: 'parent-child' },
      { from: 'mother-darrow', to: 'kieran', type: 'parent-child' },
      { from: 'mother-darrow', to: 'darrow', type: 'parent-child' },
      { from: 'mother-darrow', to: 'leanna', type: 'parent-child' },
      // Narol is uncle (father's brother)
      { from: 'father-darrow', to: 'narol', type: 'sibling' },
      // Darrow married to Eo
      { from: 'darrow', to: 'eo', type: 'spouse' },
      // Siblings
      { from: 'kieran', to: 'darrow', type: 'sibling' },
      { from: 'darrow', to: 'leanna', type: 'sibling' },
      // Eo's family
      { from: 'eo', to: 'dio', type: 'sibling' },
      // Dio married to Loran
      { from: 'dio', to: 'loran', type: 'spouse' },
      // Loran is Narol's son
      { from: 'narol', to: 'loran', type: 'parent-child' },
    ],
  },
  'augustus-family': {
    generations: [
      { members: ['nero-augustus'] },
      { members: ['mustang', 'jackal'] },
    ],
    connections: [
      { from: 'nero-augustus', to: 'mustang', type: 'parent-child' },
      { from: 'nero-augustus', to: 'jackal', type: 'parent-child' },
      { from: 'mustang', to: 'jackal', type: 'sibling' },
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
      { members: ['dancer', 'harmony'] },
      { members: ['narol', 'mickey', 'evey', 'matteo'] },
    ],
    connections: [],
  },
  'house-mars': {
    generations: [
      { members: ['fitchner'] },
      { members: ['darrow', 'cassius', 'sevro', 'roque'] },
      { members: ['quinn', 'lea', 'pax', 'titus', 'antonia', 'vixus', 'julian'] },
    ],
    connections: [
      { from: 'fitchner', to: 'sevro', type: 'parent-child' },
      { from: 'cassius', to: 'julian', type: 'sibling' },
    ],
  },
};

// Priority order for family groups (character's "home" family comes first)
const familyPriority = [
  'darrow-family',
  'augustus-family',
  'bellona-family',
  'sons-of-ares',
  'house-mars',
];

// Positions for each family group when showing all
const allFamiliesPositions: Record<string, { x: number; y: number }> = {
  'darrow-family': { x: 0, y: 0 },
  'augustus-family': { x: 800, y: 0 },
  'bellona-family': { x: 1400, y: 0 },
  'sons-of-ares': { x: 0, y: 600 },
  'house-mars': { x: 800, y: 600 },
};

export function FamilyTreeView({
  characters,
  selectedFamilyGroup,
  familyGroups,
  onCharacterClick,
  currentChapter,
  filterColor,
  filterStatus,
}: FamilyTreeViewProps) {
  const { nodes: initialNodes, edges: initialEdges } = useMemo(() => {
    const NODE_WIDTH = 140;
    const NODE_HEIGHT = 160;
    const HORIZONTAL_GAP = 40;
    const VERTICAL_GAP = 100;

    const nodes: CharacterNode[] = [];
    const edges: Edge[] = [];

    // Track which characters have been placed to avoid duplicates
    const placedCharacters = new Set<string>();

    const buildFamilyNodes = (
      groupId: string,
      offsetX: number,
      offsetY: number,
      charMap: Map<string, ProcessedCharacter>,
      addGroupLabel: boolean = false
    ) => {
      const layout = familyLayouts[groupId];
      const group = familyGroups.find((g) => g.id === groupId);

      if (!layout || !group) return;

      // Add group label node when showing all families
      if (addGroupLabel) {
        nodes.push({
          id: `label-${groupId}`,
          type: 'default',
          position: { x: offsetX, y: offsetY - 60 },
          data: { label: group.name } as unknown as CharacterNodeData,
          style: {
            background: 'linear-gradient(180deg, #C9A227 0%, #8B6914 100%)',
            color: '#FDF8EF',
            border: '2px solid #D4A853',
            borderRadius: '8px',
            padding: '8px 16px',
            fontFamily: 'Playfair Display, serif',
            fontWeight: 'bold',
            fontSize: '14px',
          },
          draggable: false,
          selectable: false,
        });
      }

      // Position nodes by generation
      layout.generations.forEach((gen, genIndex) => {
        const visibleMembers = gen.members.filter(
          (id) => charMap.has(id) && !placedCharacters.has(id)
        );
        const totalWidth = visibleMembers.length * NODE_WIDTH + (visibleMembers.length - 1) * HORIZONTAL_GAP;
        const startX = offsetX - totalWidth / 2 + NODE_WIDTH / 2;

        visibleMembers.forEach((memberId, memberIndex) => {
          const char = charMap.get(memberId);
          if (char && !placedCharacters.has(memberId)) {
            placedCharacters.add(memberId);
            nodes.push({
              id: char.id,
              type: 'character',
              position: {
                x: startX + memberIndex * (NODE_WIDTH + HORIZONTAL_GAP),
                y: offsetY + genIndex * (NODE_HEIGHT + VERTICAL_GAP),
              },
              data: { ...char, currentChapter } as CharacterNodeData,
            });
          }
        });
      });

      // Add connections from the layout (only if both characters are placed)
      layout.connections.forEach((conn) => {
        if (placedCharacters.has(conn.from) && placedCharacters.has(conn.to)) {
          const edgeId = `${groupId}-${conn.type}-${conn.from}-${conn.to}`;
          // Check if edge already exists
          if (!edges.find((e) => e.id === edgeId)) {
            const edgeStyle = {
              'spouse': {
                stroke: '#ec4899',
                strokeWidth: 3,
                strokeDasharray: '8,4',
              },
              'parent-child': {
                stroke: '#22c55e',
                strokeWidth: 3,
              },
              'sibling': {
                stroke: '#6b7280',
                strokeWidth: 2,
                strokeDasharray: '4,4',
              },
            }[conn.type];

            edges.push({
              id: edgeId,
              source: conn.from,
              target: conn.to,
              type: conn.type === 'parent-child' ? 'smoothstep' : 'straight',
              style: edgeStyle,
              animated: conn.type === 'spouse',
            });
          }
        }
      });
    };

    // Build character map from all visible characters, applying filters
    const allCharMap = new Map(
      characters
        .filter((c) => {
          if (!c.isVisible) return false;
          if (filterColor && c.color !== filterColor) return false;
          if (filterStatus && c.status !== filterStatus) return false;
          return true;
        })
        .map((c) => [c.id, c])
    );

    if (!selectedFamilyGroup) {
      // Show ALL family groups positioned in different areas
      // Process in priority order so characters appear in their "home" family first
      familyPriority.forEach((groupId) => {
        const pos = allFamiliesPositions[groupId] || { x: 0, y: 0 };
        buildFamilyNodes(groupId, pos.x, pos.y, allCharMap, true);
      });
    } else {
      // Show single family group
      const group = familyGroups.find((g) => g.id === selectedFamilyGroup);
      if (!group) {
        return { nodes: [] as CharacterNode[], edges: [] as Edge[] };
      }

      const groupCharacters = characters.filter(
        (c) => group.members.includes(c.id) && c.isVisible
      );
      const charMap = new Map(groupCharacters.map((c) => [c.id, c]));
      const layout = familyLayouts[selectedFamilyGroup];

      if (layout) {
        buildFamilyNodes(selectedFamilyGroup, 0, 0, charMap, false);
      } else {
        // Fallback: position in a grid and connect based on relationships
        groupCharacters.forEach((char, index) => {
          nodes.push({
            id: char.id,
            type: 'character',
            position: {
              x: (index % 4) * (NODE_WIDTH + HORIZONTAL_GAP),
              y: Math.floor(index / 4) * (NODE_HEIGHT + VERTICAL_GAP),
            },
            data: { ...char, currentChapter } as CharacterNodeData,
          });
        });

        // Add edges based on relationship data
        const seenEdges = new Set<string>();
        groupCharacters.forEach((char) => {
          char.relationships.forEach((rel) => {
            if (charMap.has(rel.targetId)) {
              const edgeId = [char.id, rel.targetId].sort().join('-');
              if (!seenEdges.has(edgeId)) {
                seenEdges.add(edgeId);

                const isSpouse = rel.type === 'spouse';
                const isFamily = rel.type === 'parent' || rel.type === 'child' || rel.type === 'sibling';

                edges.push({
                  id: edgeId,
                  source: char.id,
                  target: rel.targetId,
                  type: 'smoothstep',
                  label: rel.type,
                  style: {
                    stroke: isSpouse ? '#ec4899' : isFamily ? '#22c55e' : '#f59e0b',
                    strokeWidth: isSpouse ? 3 : 2,
                    strokeDasharray: isSpouse ? '8,4' : undefined,
                  },
                  labelStyle: { fill: '#9ca3af', fontSize: 10 },
                  animated: isSpouse,
                });
              }
            }
          });
        });
      }
    }

    return { nodes, edges };
  }, [characters, selectedFamilyGroup, familyGroups, currentChapter, filterColor, filterStatus]);

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
      <div className="h-full flex items-center justify-center">
        <div
          className="text-center p-8 rounded-lg max-w-md"
          style={{
            background: 'linear-gradient(180deg, #FDF8EF 0%, #E8DCC4 100%)',
            border: '3px solid #C9A227',
          }}
        >
          <p className="font-display text-xl mb-3 text-amber-900">No Characters Revealed Yet</p>
          <p className="font-body text-amber-700 italic">Progress further in the book to unveil characters in this family</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full relative">
      {/* Legend with library styling */}
      <div
        className="absolute top-4 left-4 z-10 p-4 rounded-lg shadow-xl"
        style={{
          background: 'linear-gradient(180deg, #FDF8EF 0%, #E8DCC4 100%)',
          border: '3px solid #C9A227',
        }}
      >
        <p
          className="text-sm font-semibold mb-3 text-amber-900"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Relationship Key
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <svg width="30" height="10">
              <line x1="0" y1="5" x2="30" y2="5" stroke="#ec4899" strokeWidth="3" strokeDasharray="8,4" />
            </svg>
            <span className="text-xs text-amber-800" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Spouse</span>
          </div>
          <div className="flex items-center gap-3">
            <svg width="30" height="10">
              <line x1="0" y1="5" x2="30" y2="5" stroke="#22c55e" strokeWidth="3" />
            </svg>
            <span className="text-xs text-amber-800" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Parent → Child</span>
          </div>
          <div className="flex items-center gap-3">
            <svg width="30" height="10">
              <line x1="0" y1="5" x2="30" y2="5" stroke="#6b7280" strokeWidth="2" strokeDasharray="4,4" />
            </svg>
            <span className="text-xs text-amber-800" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Sibling</span>
          </div>
        </div>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        style={{ background: 'linear-gradient(180deg, #2D2216 0%, #1a1510 100%)' }}
        minZoom={0.3}
        maxZoom={1.5}
        defaultEdgeOptions={{
          type: 'smoothstep',
        }}
      >
        <Background color="#4A3728" gap={20} />
        <Controls />
        <MiniMap
          nodeColor={(node) => {
            const data = node.data as CharacterNodeData;
            const colorMap: Record<string, string> = {
              Red: '#dc2626',
              Gold: '#f59e0b',
              Gray: '#6b7280',
              Pink: '#ec4899',
              Violet: '#8b5cf6',
              Copper: '#ea580c',
            };
            return colorMap[data.color] || '#6b7280';
          }}
        />
      </ReactFlow>
    </div>
  );
}
