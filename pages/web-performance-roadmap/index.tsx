import type { NextPage } from 'next';
import { useMemo, useState } from 'react';
import ReactFlow from 'react-flow-renderer';
import { Head } from 'Base/components/Head';
import { Dialog } from 'Base/LinksGraph/Dialog';
import { posts } from 'data/posts';
import { buildGraph } from 'src/lib/buildGraph';

const webperfTopics = [
  'general',
  'metrics-and-measurements',
  'web',
  'case-studies',
  'frameworks-and-tools',
  'community',
  'backend',
  'strategies',
  'ux',
  'sustainability',
  'extra',
];

const links = {
  general: 'metrics-and-measurements',
  'metrics-and-measurements': 'web',
  web: 'case-studies',
  'case-studies': 'frameworks-and-tools',
  'frameworks-and-tools': 'strategies',
  strategies: 'ux',
  ux: 'sustainability',
  sustainability: 'backend',
};

const Page: NextPage = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);

  const graph = useMemo(() => buildGraph({ setId, setOpen }), []);
  const { title, content } = posts[id];

  const onClose = () => setOpen(false);

  return (
    <>
      <Head
        title="TK —— Links Graph"
        description="Learning & Improving with TK —— Links Graph"
        imageUrl="/logo.jpeg"
      />
      <ReactFlow elements={graph} defaultZoom={0.5} />
      <Dialog open={open} onClose={onClose} title={title} content={content} />
    </>
  );
};

export default Page;
