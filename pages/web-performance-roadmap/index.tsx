import { Dispatch, FC, SetStateAction, useMemo, useState } from 'react';

import type { NextPage } from 'next';
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';

import { Dialog } from 'Base/LinksGraph/Dialog';
import { Head } from 'Base/components/Head';
import { Navbar } from 'Base/components/Navbar';
import { useReactFlowAttributionRemoval } from 'Base/hooks/useReactFlowAttributionRemoval';
import { topics } from 'data/web-performance-topics-content';

type SlugifiedTopics =
  | 'general'
  | 'performance-budget'
  | 'measuring-performance'
  | 'core-web-vitals'
  | 'browser'
  | 'case-studies'
  | 'cache-and-memoization'
  | 'prefetching'
  | 'images'
  | 'ux'
  | 'build-tools'
  | 'react'
  | 'javascript'
  | 'web-apis'
  | 'css'
  | 'fonts'
  | 'sustainability'
  | 'backend'
  | 'architecture'
  | 'infrastructure'
  | 'books'
  | 'tweets';

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
  WebAPIs = 'Web APIs',
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
  Prefetching = 'Prefetching',
  CacheAndMemoization = 'Cache and Memoization',
}

const EmptyNodes = [
  Topics.MetricsAndMeasurements,
  Topics.Web,
  Topics.FrameworksAndTools,
  Topics.Strategies,
  Topics.Extra,
];

const GeneralY = 50;
const MetricsAndMeasurementsY = GeneralY + 200;
const WebY = MetricsAndMeasurementsY + 200;
const CaseStudiesY = WebY + 150;
const FrameworksAndToolsY = CaseStudiesY + 100;
const StrategiesY = FrameworksAndToolsY + 200;
const ExtraY = StrategiesY + 250;
const CommunityY = ExtraY + 200;

const GeneralX = 1000;
const MetricsAndMeasurementsX = GeneralX;
const WebX = GeneralX;
const CaseStudiesX = GeneralX;
const FrameworksAndToolsX = GeneralX;
const StrategiesX = GeneralX;
const ExtraX = GeneralX;
const CommunityX = GeneralX;

type Position = { x: number; y: number };
type TopicPosition = Record<Topics | SubTopics, Position>;

const topicPosition: TopicPosition = {
  [Topics.General]: { y: GeneralY, x: GeneralX },

  [Topics.MetricsAndMeasurements]: {
    y: MetricsAndMeasurementsY,
    x: MetricsAndMeasurementsX,
  },
  [SubTopics.CoreWebVitals]: {
    y: MetricsAndMeasurementsY - 100,
    x: MetricsAndMeasurementsX + 200,
  },
  [SubTopics.PerformanceBudget]: {
    y: MetricsAndMeasurementsY,
    x: MetricsAndMeasurementsX + 200,
  },
  [SubTopics.MeasuringPerformance]: {
    y: MetricsAndMeasurementsY + 100,
    x: MetricsAndMeasurementsX + 200,
  },

  [Topics.Web]: { y: WebY, x: WebX },
  [SubTopics.CSS]: { y: WebY - 300, x: WebX - 400 },
  [SubTopics.Images]: { y: WebY - 200, x: WebX - 400 },
  [SubTopics.JavaScript]: { y: WebY - 100, x: WebX - 400 },
  [SubTopics.Fonts]: { y: WebY, x: WebX - 400 },
  [SubTopics.WebAPIs]: { y: WebY + 100, x: WebX - 400 },
  [SubTopics.Browser]: { y: WebY + 200, x: WebX - 400 },
  [SubTopics.Infrastructure]: { y: WebY + 300, x: WebX - 400 },

  [Topics.CaseStudies]: { y: CaseStudiesY, x: CaseStudiesX },

  [Topics.FrameworksAndTools]: {
    y: FrameworksAndToolsY,
    x: FrameworksAndToolsX,
  },
  [SubTopics.BuildTools]: {
    y: FrameworksAndToolsY - 100,
    x: FrameworksAndToolsX + 250,
  },
  [SubTopics.React]: { y: FrameworksAndToolsY, x: FrameworksAndToolsX + 300 },
  [SubTopics.Architecture]: {
    y: FrameworksAndToolsY + 100,
    x: FrameworksAndToolsX + 250,
  },

  [Topics.Strategies]: { y: StrategiesY, x: StrategiesX },
  [SubTopics.CacheAndMemoization]: { y: StrategiesY - 100, x: ExtraX - 200 },
  [SubTopics.Prefetching]: { y: StrategiesY + 100, x: ExtraX - 200 },

  [Topics.Extra]: { y: ExtraY, x: ExtraX },
  [SubTopics.UX]: { y: ExtraY - 200, x: ExtraX + 300 },
  [SubTopics.Sustainability]: { y: ExtraY - 100, x: ExtraX + 300 },
  [SubTopics.Backend]: { y: ExtraY, x: ExtraX + 300 },
  [SubTopics.Books]: { y: ExtraY + 100, x: ExtraX + 300 },
  [SubTopics.Tweets]: { y: ExtraY + 200, x: ExtraX + 300 },

  [Topics.Community]: { y: CommunityY, x: CommunityX },
};

function slugify(string: string) {
  return string.toLocaleLowerCase().split(' ').join('-');
}

const nodes = [...Object.values(Topics), ...Object.values(SubTopics)].map(
  (topic) => ({
    id: slugify(topic) as SlugifiedTopics,
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
    target: SlugifiedTopics.Prefetching,
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

type SetIdType = Dispatch<SetStateAction<SlugifiedTopics>>;
type SetOpenType = Dispatch<SetStateAction<boolean>>;

type NodePropTypes = {
  setId: SetIdType;
  setOpen: SetOpenType;
  text: Topics | SubTopics;
  id: SlugifiedTopics;
};

const Node: FC<NodePropTypes> = ({ setId, setOpen, text, id }) => (
  <div
    onClick={() => {
      if (!(EmptyNodes as string[]).includes(text)) {
        setId(id);
        setOpen(true);
      }
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
    id,
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

  return { nodes, edges };
};

const Page: NextPage = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState<SlugifiedTopics>('general');

  const { nodes, edges } = useMemo(() => buildGraph({ setId, setOpen }), []);
  const content = topics[id];

  const onClose = () => setOpen(false);

  useReactFlowAttributionRemoval();

  return (
    <>
      <Head
        title="TK —— Web Performance Roadmap"
        description="Learning & Improving with TK —— Web Performance Roadmap"
        imageUrl="/web-performance-roadmap.png"
      />
      <Navbar />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        defaultViewport={{ x: 0, y: 0, zoom: 0.7 }}
        fitView
      />
      <Dialog open={open} onClose={onClose} content={content} />
    </>
  );
};

export default Page;
