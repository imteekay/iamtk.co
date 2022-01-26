import type { NextPage } from 'next';
import { useState } from 'react';
import ReactFlow from 'react-flow-renderer';
import { Dialog } from 'Base/LinksGraph/Dialog';
import { idToPost } from 'data/idToPost';
import { buildGraph } from 'src/lib/buildGraph';

const Page: NextPage = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);
  const graph = buildGraph({ setId, setOpen });
  const { title, content } = idToPost[id];

  return (
    <>
      <ReactFlow elements={graph} />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        content={content}
      />
    </>
  );
};

export default Page;
