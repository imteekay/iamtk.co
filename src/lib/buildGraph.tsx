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

const graph = {
  nodes: [
    { text: 'Node 0', position: { x: 150, y: 350 } },
    { text: 'Node 1', position: { x: 450, y: 525 } },
    { text: 'Node 2', position: { x: 350, y: 150 } },
    { text: 'Node 3', position: { x: 800, y: 100 } },
    { text: 'Node 4', position: { x: 1000, y: 300 } },
    { text: 'Node 5', position: { x: 800, y: 650 } },
  ],
  edges: [
    { source: '0', target: '1' },
    { source: '0', target: '2' },
    { source: '1', target: '2' },
    { source: '1', target: '3' },
    { source: '1', target: '4' },
    { source: '2', target: '3' },
    { source: '3', target: '4' },
    { source: '1', target: '5' },
    { source: '4', target: '5' },
  ],
};

export const buildGraph = ({
  setId,
  setOpen,
}: {
  setId: SetIdType;
  setOpen: SetOpenType;
}) => {
  const nodes = graph.nodes.map(({ text, position }, id) => ({
    id: id.toString(),
    data: {
      label: <Node setId={setId} setOpen={setOpen} text={text} id={id} />,
    },
    position,
  }));

  const edges = graph.edges.map(({ source, target }) => ({
    id: `${source}-${target}`,
    source,
    target,
    animated: true,
  }));

  return [...nodes, ...edges];
};
