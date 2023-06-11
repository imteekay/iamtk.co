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

type PositionCache = {
  x: number;
  y: number;
};

const positionCache: PositionCache[] = [];

function buildX() {
  return Math.random() * 3500 + 30;
}

function buildY() {
  return Math.random() * 3000 + 30;
}

function hasCollision(x: number, y: number, position: PositionCache) {
  return Math.abs(x - position.x) < 250 || Math.abs(y - position.y) < 250;
}

function hasPosition(x: number, y: number) {
  let hasPositionInCache = false;

  positionCache.forEach((position) => {
    if (hasCollision(x, y, position)) {
      hasPositionInCache = true;
    }
  });

  return hasPositionInCache;
}

function buildPosition() {
  let x = buildX();
  let y = buildY();
  let counter = 0;

  while (hasPosition(x, y) && counter < 25) {
    x = buildX();
    y = buildY();
    counter += 1;
  }

  positionCache.push({ x, y });

  return { x, y };
}

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
    position: buildPosition(),
  }));

  const edges = graph.edges.map(({ source, target }) => ({
    id: `${source}-${target}`,
    source,
    target,
    animated: true,
  }));

  return { nodes, edges };
};
