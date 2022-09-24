import type { NextPage } from 'next';
import { useMemo, useState } from 'react';
import ReactFlow from 'react-flow-renderer';
import { Head } from 'Base/components/Head';
import { Dialog } from 'Base/LinksGraph/Dialog';
import { posts } from 'data/posts';

import { Dispatch, FC, SetStateAction } from 'react';

enum Topics {
  General = 'General',
  MetricsAndMeasurements = 'Metrics and Measurements',
  Web = 'Web',
  CaseStudies = 'Case Studies',
  FrameworksAndTools = 'Frameworks and Tools',
  Community = 'Community',
  Strategies = 'Strategies',
  Extra = 'Extra',
}

enum SubTopics {
  CoreWebVitals = 'Core Web Vitals',
  PerformanceBudget = 'Performance Budget',
  MeasuringPerformance = 'Measuring Performance',
  CSS = 'CSS',
  Images = 'Images',
  JavaScript = 'JavaScript',
  Fonts = 'Fonts',
  WebAPIs = 'WebAPIs',
  BuildTools = 'Build Tools',
  React = 'React',
  Architecture = 'Architecture',
  Books = 'Books',
  Tweets = 'Tweets',
  Browser = 'Browser',
  Infrastructure = 'Infrastructure',
  Backend = 'Backend',
  UX = 'UX',
  Sustainability = 'Sustainability',
  Prefetch = 'Prefetch',
  CacheAndMemoization = 'Cache and Memoization',
}

const topicPosition = {
  [Topics.General]: { y: 100, x: 500 },

  [Topics.MetricsAndMeasurements]: { y: 200, x: 500 },
  [SubTopics.CoreWebVitals]: { y: 100, x: 600 },
  [SubTopics.PerformanceBudget]: { y: 200, x: 600 },
  [SubTopics.MeasuringPerformance]: { y: 300, x: 600 },

  [Topics.Web]: { y: 300, x: 500 },
  [SubTopics.CSS]: { y: 300, x: 600 },
  [SubTopics.Images]: { y: 300, x: 600 },
  [SubTopics.JavaScript]: { y: 300, x: 600 },
  [SubTopics.Fonts]: { y: 300, x: 600 },
  [SubTopics.WebAPIs]: { y: 300, x: 600 },
  [SubTopics.Browser]: { y: 300, x: 600 },
  [SubTopics.Infrastructure]: { y: 300, x: 600 },

  [Topics.CaseStudies]: { y: 400, x: 500 },

  [Topics.FrameworksAndTools]: { y: 500, x: 500 },
  [SubTopics.BuildTools]: { y: 300, x: 600 },
  [SubTopics.React]: { y: 300, x: 600 },
  [SubTopics.Architecture]: { y: 300, x: 600 },

  [Topics.Strategies]: { y: 600, x: 500 },
  [SubTopics.Prefetch]: { y: 300, x: 600 },
  [SubTopics.CacheAndMemoization]: { y: 300, x: 600 },

  [Topics.Extra]: { y: 700, x: 500 },
  [SubTopics.UX]: { y: 700, x: 600 },
  [SubTopics.Sustainability]: { y: 700, x: 600 },
  [SubTopics.Backend]: { y: 700, x: 600 },
  [SubTopics.Books]: { y: 700, x: 600 },
  [SubTopics.Tweets]: { y: 700, x: 600 },

  [Topics.Community]: { y: 800, x: 500 },
};

function slugify(string: string) {
  return string.toLocaleLowerCase().split(' ').join('-');
}

const nodes = [...Object.values(Topics), ...Object.values(SubTopics)].map(
  (topic) => ({
    id: slugify(topic),
    text: topic,
    position: topicPosition[topic],
  }),
);

type TopicsKeys = keyof typeof Topics | keyof typeof SubTopics;
type SlugifiedTopicsType = Record<TopicsKeys, string>;

const SlugifiedTopics: SlugifiedTopicsType = [
  ...Object.entries(Topics),
  ...Object.entries(SubTopics),
].reduce(
  (topics, [topic, text]) => ({ ...topics, [topic]: slugify(text) }),
  {} as SlugifiedTopicsType,
);

const edges = [
  {
    source: SlugifiedTopics.General,
    target: SlugifiedTopics.MetricsAndMeasurements,
  },
  {
    source: SlugifiedTopics.MetricsAndMeasurements,
    target: SlugifiedTopics.Web,
  },
  {
    source: SlugifiedTopics.MetricsAndMeasurements,
    target: SlugifiedTopics.CoreWebVitals,
  },
  {
    source: SlugifiedTopics.Web,
    target: SlugifiedTopics.CaseStudies,
  },
  {
    source: SlugifiedTopics.CaseStudies,
    target: SlugifiedTopics.FrameworksAndTools,
  },
  {
    source: SlugifiedTopics.FrameworksAndTools,
    target: SlugifiedTopics.Strategies,
  },
  {
    source: SlugifiedTopics.Strategies,
    target: SlugifiedTopics.Extra,
  },
  {
    source: SlugifiedTopics.Extra,
    target: SlugifiedTopics.Community,
  },
];

const graph = {
  nodes,
  edges,
};

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

const buildGraph = ({
  setId,
  setOpen,
}: {
  setId: SetIdType;
  setOpen: SetOpenType;
}) => {
  const nodes = graph.nodes.map(({ id, text, position }) => ({
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

const Page: NextPage = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);

  const graph = useMemo(() => buildGraph({ setId, setOpen }), []);
  const { title, content } = posts[id];

  const onClose = () => setOpen(false);

  return (
    <>
      <Head
        title="TK —— Web Performance Roadmap"
        description="Learning & Improving with TK —— Web Performance Roadmap"
        imageUrl="/logo.jpeg"
      />
      <ReactFlow elements={graph} defaultZoom={0.5} />
      <Dialog open={open} onClose={onClose} title={title} content={content} />
    </>
  );
};

export default Page;
