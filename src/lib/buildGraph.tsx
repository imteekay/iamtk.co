import { Dispatch, FC, SetStateAction } from 'react';

type SetIdType = Dispatch<SetStateAction<number>>;
type SetOpenType = Dispatch<SetStateAction<boolean>>;

type NodePropTypes = {
  setId: SetIdType;
  setOpen: SetOpenType;
  text: string;
  id: number;
};

const Node: FC<NodePropTypes> = ({ setId, setOpen, text, id }) => (
  <div
    onClick={() => {
      setId(id);
      setOpen(true);
    }}
  >
    {text}
  </div>
);

export const buildGraph = ({
  setId,
  setOpen,
}: {
  setId: SetIdType;
  setOpen: SetOpenType;
}) => [
  {
    id: '0',
    data: {
      label: <Node setId={setId} setOpen={setOpen} text="Node 0" id={0} />,
    },
    position: { x: 150, y: 350 },
  },
  {
    id: '1',
    data: {
      label: <Node setId={setId} setOpen={setOpen} text="Node 1" id={1} />,
    },
    position: { x: 450, y: 525 },
  },
  {
    id: '2',
    data: {
      label: <Node setId={setId} setOpen={setOpen} text="Node 2" id={2} />,
    },
    position: { x: 350, y: 150 },
  },
  {
    id: '3',
    data: {
      label: <Node setId={setId} setOpen={setOpen} text="Node 3" id={3} />,
    },
    position: { x: 800, y: 100 },
  },
  {
    id: '4',
    data: {
      label: <Node setId={setId} setOpen={setOpen} text="Node 4" id={4} />,
    },
    position: { x: 1000, y: 300 },
  },
  {
    id: '5',
    data: {
      label: <Node setId={setId} setOpen={setOpen} text="Node 5" id={5} />,
    },
    position: { x: 800, y: 650 },
  },
  { id: 'e0-1', source: '0', target: '1', animated: true },
  { id: 'e0-2', source: '0', target: '2', animated: true },
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e1-4', source: '1', target: '4', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
  { id: 'e1-5', source: '1', target: '5', animated: true },
  { id: 'e4-5', source: '4', target: '5', animated: true },
];
