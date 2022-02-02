import type { NextPage } from 'next';
import { useMemo, useState } from 'react';
import ReactFlow from 'react-flow-renderer';
import { Head } from 'Base/components/Head';
import { Dialog } from 'Base/LinksGraph/Dialog';
import { posts } from 'data/posts';
import { buildGraph } from 'src/lib/buildGraph';

const Page: NextPage = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);

  const graph = useMemo(() => buildGraph({ setId, setOpen }), []);
  const { title, content } = posts[id];

  const onClose = () => setOpen(false);

  return (
    <>
      <Head
        title="TK —— Projects"
        description="Learning & Improving with TK —— Projects"
        imageUrl="/logo.jpeg"
      />
      <ReactFlow elements={graph} defaultZoom={0.5} />
      <Dialog open={open} onClose={onClose} title={title} content={content} />
    </>
  );
};

export default Page;
