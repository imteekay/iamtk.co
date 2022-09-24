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

  [Topics.MetricsAndMeasurements]: { y: 300, x: 500 },
  [SubTopics.CoreWebVitals]: { y: 200, x: 700 },
  [SubTopics.PerformanceBudget]: { y: 300, x: 700 },
  [SubTopics.MeasuringPerformance]: { y: 400, x: 700 },

  [Topics.Web]: { y: 500, x: 500 },
  [SubTopics.CSS]: { y: 200, x: 0 },
  [SubTopics.Images]: { y: 300, x: 0 },
  [SubTopics.JavaScript]: { y: 400, x: 0 },
  [SubTopics.Fonts]: { y: 500, x: 0 },
  [SubTopics.WebAPIs]: { y: 600, x: 0 },
  [SubTopics.Browser]: { y: 700, x: 0 },
  [SubTopics.Infrastructure]: { y: 800, x: 0 },

  [Topics.CaseStudies]: { y: 650, x: 500 },

  [Topics.FrameworksAndTools]: { y: 750, x: 500 },
  [SubTopics.BuildTools]: { y: 650, x: 750 },
  [SubTopics.React]: { y: 750, x: 800 },
  [SubTopics.Architecture]: { y: 850, x: 750 },

  [Topics.Strategies]: { y: 950, x: 500 },
  [SubTopics.Prefetch]: { y: 880, x: 300 },
  [SubTopics.CacheAndMemoization]: { y: 1020, x: 300 },

  [Topics.Extra]: { y: 1200, x: 500 },
  [SubTopics.UX]: { y: 1000, x: 800 },
  [SubTopics.Sustainability]: { y: 1100, x: 800 },
  [SubTopics.Backend]: { y: 1200, x: 800 },
  [SubTopics.Books]: { y: 1300, x: 800 },
  [SubTopics.Tweets]: { y: 1400, x: 800 },

  [Topics.Community]: { y: 1400, x: 500 },
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
    source: SlugifiedTopics.MetricsAndMeasurements,
    target: SlugifiedTopics.PerformanceBudget,
  },
  {
    source: SlugifiedTopics.MetricsAndMeasurements,
    target: SlugifiedTopics.MeasuringPerformance,
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
    source: SlugifiedTopics.Web,
    target: SlugifiedTopics.CaseStudies,
  },
  {
    source: SlugifiedTopics.Web,
    target: SlugifiedTopics.CaseStudies,
  },
  {
    source: SlugifiedTopics.Web,
    target: SlugifiedTopics.CSS,
  },
  {
    source: SlugifiedTopics.Web,
    target: SlugifiedTopics.Images,
  },
  {
    source: SlugifiedTopics.Web,
    target: SlugifiedTopics.JavaScript,
  },
  {
    source: SlugifiedTopics.Web,
    target: SlugifiedTopics.Fonts,
  },
  {
    source: SlugifiedTopics.Web,
    target: SlugifiedTopics.WebAPIs,
  },
  {
    source: SlugifiedTopics.Web,
    target: SlugifiedTopics.Browser,
  },
  {
    source: SlugifiedTopics.Web,
    target: SlugifiedTopics.Infrastructure,
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
    source: SlugifiedTopics.FrameworksAndTools,
    target: SlugifiedTopics.BuildTools,
  },
  {
    source: SlugifiedTopics.FrameworksAndTools,
    target: SlugifiedTopics.React,
  },
  {
    source: SlugifiedTopics.FrameworksAndTools,
    target: SlugifiedTopics.Architecture,
  },

  {
    source: SlugifiedTopics.Strategies,
    target: SlugifiedTopics.Extra,
  },
  {
    source: SlugifiedTopics.Strategies,
    target: SlugifiedTopics.Prefetch,
  },
  {
    source: SlugifiedTopics.Strategies,
    target: SlugifiedTopics.CacheAndMemoization,
  },

  {
    source: SlugifiedTopics.Extra,
    target: SlugifiedTopics.Community,
  },
  {
    source: SlugifiedTopics.Extra,
    target: SlugifiedTopics.UX,
  },
  {
    source: SlugifiedTopics.Extra,
    target: SlugifiedTopics.Sustainability,
  },
  {
    source: SlugifiedTopics.Extra,
    target: SlugifiedTopics.Backend,
  },
  {
    source: SlugifiedTopics.Extra,
    target: SlugifiedTopics.Books,
  },
  {
    source: SlugifiedTopics.Extra,
    target: SlugifiedTopics.Tweets,
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
      <ReactFlow elements={graph} defaultZoom={0.7} />
      <Dialog open={open} onClose={onClose} title={title} content={content} />
    </>
  );
};

export default Page;
