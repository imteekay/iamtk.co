import { useRouter } from 'next/router';
import { useMemo } from 'react';

import ReactFlow, { Edge, Node } from 'reactflow';
import 'reactflow/dist/style.css';

import { useReactFlowAttributionRemoval } from 'Base/hooks/useReactFlowAttributionRemoval';
import type { Connection, TopicSummary } from 'src/lib/commonplace';

type Props = {
  topics: TopicSummary[];
  connections: Connection[];
};

const RADIUS = 340;

export const TopicGraph = ({ topics, connections }: Props) => {
  const router = useRouter();
  useReactFlowAttributionRemoval();

  const { nodes, edges } = useMemo(() => {
    const nodes: Node[] = topics.map((topic, index) => {
      const angle = (index / topics.length) * Math.PI * 2 - Math.PI / 2;
      const size = 64 + Math.min(topic.resourceCount, 8) * 10;
      return {
        id: topic.slug,
        position: {
          x: Math.cos(angle) * RADIUS - size / 2,
          y: Math.sin(angle) * RADIUS - size / 2,
        },
        data: { label: `${topic.icon} ${topic.name}` },
        draggable: true,
        style: {
          width: size,
          height: size,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          fontSize: 11,
          padding: 4,
          border: `2px solid ${topic.color}`,
          background: `${topic.color}${topic.resourceCount ? '33' : '11'}`,
          color: 'inherit',
          boxShadow: topic.resourceCount
            ? `0 0 ${8 + topic.depth / 4}px ${topic.color}`
            : 'none',
          opacity: topic.resourceCount ? 1 : 0.55,
        },
      };
    });

    const edges: Edge[] = connections.map((c) => ({
      id: `${c.source}-${c.target}`,
      source: c.source,
      target: c.target,
      style: { strokeWidth: 1 + c.weight * 1.5, opacity: 0.6 },
      animated: c.weight > 1,
    }));

    return { nodes, edges };
  }, [topics, connections]);

  return (
    <div
      style={{ height: 560, border: '1px solid var(--color-border-default)' }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        nodesConnectable={false}
        onNodeClick={(_, node) => router.push(`/commonplace/${node.id}`)}
      />
    </div>
  );
};
