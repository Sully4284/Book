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
      { members: ['dancer', 'harmony', 'mickey', 'evey', 'matteo'] },
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

// Positions for each family group when showing all - compact centered layout
const allFamiliesPositions: Record<string, { x: number; y: number }> = {
  'darrow-family': { x: 200, y: 0 },
  'augustus-family': { x: 700, y: 0 },
  'bellona-family': { x: 1050, y: 0 },
  'sons-of-ares': { x: 200, y: 550 },
  'house-mars': { x: 700, y: 550 },
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

      // Add group label node when showing all families - dark theme
      if (addGroupLabel) {
        nodes.push({
          id: `label-${groupId}`,
          type: 'default',
          position: { x: offsetX, y: offsetY - 60 },
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
                strokeWidth: 2,
                strokeDasharray: '8,4',
              },
              'parent-child': {
                stroke: '#22c55e',
                strokeWidth: 2,
              },
              'sibling': {
                stroke: '#6b7280',
                strokeWidth: 1,
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
                    strokeWidth: isSpouse ? 2 : 1,
                    strokeDasharray: isSpouse ? '8,4' : undefined,
                  },
                  labelStyle: { fill: '#666', fontSize: 10 },
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
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.15, minZoom: 0.5, maxZoom: 1.2 }}
        style={{ background: '#0a0a0a' }}
        minZoom={0.4}
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
