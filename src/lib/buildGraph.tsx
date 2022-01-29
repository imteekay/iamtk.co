import { Dispatch, FC, SetStateAction } from 'react';
import { createGraph } from '@imtk/md-links-graph';
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

const excludedPages = [
  '',
  '/',
  '/writings',
  '/support',
  '/rss.xml',
  undefined,
  null,
];

function isValidLink(url: string) {
  return (
    !url.startsWith('https') &&
    !url.startsWith('http') &&
    !url.startsWith('www') &&
    !excludedPages.includes(url)
  );
}

const graph = createGraph(posts, isValidLink);

export const buildGraph = ({
  setId,
  setOpen,
}: {
  setId: SetIdType;
  setOpen: SetOpenType;
}) => {
  const nodes = graph.nodes.map(({ text, id }) => ({
    id: id.toString(),
    data: {
      label: <Node setId={setId} setOpen={setOpen} text={text} id={id} />,
    },
    position: {
      x: Math.random() * 1500,
      y: Math.random() * 1500,
    },
  }));

  const edges = graph.edges.map(({ source, target }) => ({
    id: `${source}-${target}`,
    source,
    target,
    animated: true,
  }));

  return [...nodes, ...edges];
};
