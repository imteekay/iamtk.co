import { useEffect, useState } from 'react';

import type { NextPage } from 'next';
import { ReactFlow, type Node, type Edge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { Dialog } from 'Base/LinksGraph/Dialog';
import { Head } from 'Base/components/Head';
import { Navbar } from 'Base/components/Navbar';
import { posts } from 'data/posts';
import { buildGraph } from 'src/lib/buildGraph';

const Page: NextPage = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  useEffect(() => {
    const graph = buildGraph({ setId, setOpen });
    setNodes(graph.nodes);
    setEdges(graph.edges);
  }, []);

  const { title, content } = posts[id];

  const onClose = () => setOpen(false);

  return (
    <>
      <Head
        title="TK —— Links Graph"
        description="Learning & Improving with TK —— Links Graph"
        imageUrl="/logo.jpeg"
      />
      <Navbar />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        defaultViewport={{ x: 0, y: 0, zoom: 0.5 }}
        fitView
        proOptions={{ hideAttribution: true }}
      />
      <Dialog open={open} onClose={onClose} title={title} content={content} />
    </>
  );
};

export default Page;
