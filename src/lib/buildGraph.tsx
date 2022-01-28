import { Dispatch, FC, SetStateAction } from 'react';
import { createGraph } from 'packages/md-links-graph/src';
import { posts } from 'data/markdown-posts';

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

const graph = createGraph(posts);

export const buildGraph = ({
  setId,
  setOpen,
}: {
  setId: SetIdType;
  setOpen: SetOpenType;
}) => {
  const nodes = graph.nodes.map(({ text, position, id }) => ({
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
