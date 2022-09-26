import type { NextPage } from 'next';
import { useEffect, useMemo, useState } from 'react';
import ReactFlow from 'react-flow-renderer';
import { Head } from 'Base/components/Head';
import { Dialog } from 'Base/LinksGraph/Dialog';
import { posts } from 'data/posts';
import { buildGraph } from 'src/lib/buildGraph';

const Page: NextPage = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);

  const { nodes, edges } = useMemo(() => buildGraph({ setId, setOpen }), []);
  const { title, content } = posts[id];

  const onClose = () => setOpen(false);

  useEffect(() => {
    document.querySelector('.react-flow__attribution')?.remove();
  }, []);

  return (
    <>
      <Head
        title="TK —— Links Graph"
        description="Learning & Improving with TK —— Links Graph"
        imageUrl="/logo.jpeg"
      />
      <ReactFlow nodes={nodes} edges={edges} defaultZoom={0.5} fitView />
      <Dialog open={open} onClose={onClose} title={title} content={content} />
    </>
  );
};

export default Page;
