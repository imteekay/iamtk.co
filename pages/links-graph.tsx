import type { NextPage } from 'next';
import ReactFlow from 'react-flow-renderer';

import Dialog from '@mui/material/Dialog';
import { Dispatch, SetStateAction, useState } from 'react';

type SimpleDialogPropsType = {
  open: boolean;
  onClose: () => void;
  content: string;
};

const SimpleDialog = ({ onClose, open, content }: SimpleDialogPropsType) => (
  <Dialog fullWidth onClose={onClose} open={open}>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </Dialog>
);

const idToContent = {
  '1': '<p>Testing id 1</p>',
  '2': '<p>Testing id 2</p>',
};

const getElements = ({
  setContent,
  setOpen,
}: {
  setContent: Dispatch<SetStateAction<string>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input Node' },
    position: { x: 0, y: 0 },
  },
  {
    id: '2',
    data: {
      label: (
        <div
          onClick={() => {
            setContent(idToContent['2']);
            setOpen(true);
          }}
        >
          Default Node
        </div>
      ),
    },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'output',
    data: { label: 'Output Node' },
    position: { x: 250, y: 250 },
  },
  {
    id: '4',
    type: 'output',
    data: { label: 'Output Node' },
    position: { x: 250, y: 250 },
  },
  {
    id: '5',
    type: 'output',
    data: { label: 'Output Node' },
    position: { x: 250, y: 250 },
  },
  {
    id: '6',
    type: 'output',
    data: { label: 'Output Node' },
    position: { x: 250, y: 250 },
  },
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3' },
];

const Page: NextPage = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(`<p>test</p>`);
  const elements = getElements({ setContent, setOpen });

  return (
    <>
      <ReactFlow elements={elements} />
      <SimpleDialog
        open={open}
        onClose={() => setOpen(false)}
        content={content}
      />
    </>
  );
};

export default Page;
