import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useMemo, useState } from 'react';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { GetStaticProps, NextPage } from 'next';

import { HomeLink } from 'Base/Article/HomeLink';
import { Head } from 'Base/components/Head';
import { Navbar } from 'Base/components/Navbar';
import { ResourceCard } from 'Home/components/Commonplace/ResourceCard';
import {
  Connection,
  getAllResources,
  getConnections,
  getTopicSummaries,
  Resource,
  TopicSummary,
} from 'src/lib/commonplace';

const TopicGraph = dynamic<{
  topics: TopicSummary[];
  connections: Connection[];
}>(
  () =>
    import('Home/components/Commonplace/TopicGraph').then((m) => m.TopicGraph),
  { ssr: false },
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
`;

const TopicCard = styled(motion.div)<{ color: string }>`
  border: 1px solid ${({ color }) => color};
  border-radius: 8px;
  padding: 14px;
  height: 100%;
`;

const Bar = styled.div<{ color: string; value: number }>`
  height: 4px;
  margin-top: 8px;
  border-radius: 2px;
  background: var(--color-border-default);
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${({ value }) => value}%;
    background: ${({ color }) => color};
    border-radius: 2px;
  }
`;

const Search = styled.input`
  width: 100%;
  padding: 10px 12px;
  margin: 8px 0 16px;
  border-radius: 8px;
  border: 1px solid var(--color-border-default);
  background: transparent;
  color: inherit;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

type Props = {
  resources: Resource[];
  topics: TopicSummary[];
  connections: Connection[];
};

const Page: NextPage<Props> = ({ resources, topics, connections }) => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return resources.filter((r) =>
      [r.title, r.author, r.notes, ...r.ideas, ...r.quotes, ...r.topics]
        .join(' ')
        .toLowerCase()
        .includes(q),
    );
  }, [query, resources]);

  const totalIdeas = topics.reduce((sum, t) => sum + t.ideaCount, 0);

  return (
    <>
      <Head
        title="TK —— Commonplace Book"
        description="A growing map of everything I learn, by topic"
        imageUrl="/logo.jpeg"
      />
      <Navbar />
      <main id="main">
        <div className="content">
          <HomeLink />
          <h1>Commonplace Book</h1>
          <p>
            {resources.length} resources · {totalIdeas} ideas ·{' '}
            {topics.filter((t) => t.resourceCount).length}/{topics.length}{' '}
            topics explored. Every new resource grows the map.
          </p>

          <Search
            placeholder="Search resources, ideas, quotes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <Stack>
              {results.length === 0 && <p>No results.</p>}
              {results.map((r) => (
                <ResourceCard key={r.slug} resource={r} />
              ))}
            </Stack>
          )}

          <h2>Knowledge constellation</h2>
          <p>Node size is resource count, lines are shared resources.</p>
          <TopicGraph topics={topics} connections={connections} />

          <h2>Topics</h2>
          <Grid>
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/commonplace/${topic.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <TopicCard color={topic.color} whileHover={{ y: -3 }}>
                  <div style={{ fontSize: 24 }}>{topic.icon}</div>
                  <strong>{topic.name}</strong>
                  <div style={{ fontSize: 13, opacity: 0.7 }}>
                    {topic.resourceCount
                      ? `${topic.resourceCount} resources · ${topic.ideaCount} ideas`
                      : 'Waiting for its first resource'}
                  </div>
                  <Bar color={topic.color} value={topic.depth} />
                </TopicCard>
              </Link>
            ))}
          </Grid>

          <h2>Recently fed</h2>
          <Stack>
            {resources.slice(0, 6).map((r) => (
              <ResourceCard key={r.slug} resource={r} />
            ))}
          </Stack>
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const resources = getAllResources();
  return {
    props: {
      resources,
      topics: getTopicSummaries(resources),
      connections: getConnections(resources),
    },
  };
};

export default Page;
