import Link from 'next/link';
import { useState } from 'react';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { Head } from 'Base/components/Head';
import { Navbar } from 'Base/components/Navbar';
import { ResourceCard } from 'Home/components/Commonplace/ResourceCard';
import { Topic, topics, topicsBySlug } from 'data/commonplace/topics';
import {
  getAllResources,
  getRelatedTopics,
  getTopicSummaries,
  Resource,
  TopicSummary,
} from 'src/lib/commonplace';

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Wall = styled.div`
  columns: 280px;
  column-gap: 12px;
`;

const Idea = styled(motion.blockquote)<{ color: string }>`
  break-inside: avoid;
  margin: 0 0 12px;
  padding: 12px 14px;
  border-left: 3px solid ${({ color }) => color};
  background: var(--color-canvas-subtle);
  border-radius: 4px;
  font-size: 15px;
`;

const Meter = styled.div<{ color: string; value: number }>`
  height: 10px;
  border-radius: 5px;
  background: var(--color-border-default);
  overflow: hidden;
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${({ value }) => value}%;
    background: ${({ color }) => color};
    transition: width 0.6s;
  }
`;

const Filters = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 8px 0 12px;
`;

const Filter = styled.button<{ active: boolean }>`
  padding: 4px 12px;
  border-radius: 999px;
  border: 1px solid var(--color-border-default);
  background: ${({ active }) =>
    active ? 'var(--color-border-default)' : 'transparent'};
  color: inherit;
  cursor: pointer;
`;

type IdeaItem = { text: string; from: string; slug: string; quote: boolean };

type Props = {
  topic: Topic;
  summary: TopicSummary;
  resources: Resource[];
  related: { slug: string; weight: number }[];
};

const Page: NextPage<Props> = ({ topic, summary, resources, related }) => {
  const [type, setType] = useState('all');

  const types = Array.from(new Set(resources.map((r) => r.type)));
  const visible = resources.filter((r) => type === 'all' || r.type === type);

  const ideas: IdeaItem[] = resources.flatMap((r) => [
    ...r.ideas.map((text) => ({
      text,
      from: r.title,
      slug: r.slug,
      quote: false,
    })),
    ...r.quotes.map((text) => ({
      text,
      from: r.title,
      slug: r.slug,
      quote: true,
    })),
  ]);

  return (
    <>
      <Head
        title={`TK —— Commonplace: ${topic.name}`}
        description={topic.description}
        imageUrl="/logo.jpeg"
      />
      <Navbar />
      <main id="main">
        <div className="content">
          <Link href="/commonplace">← Commonplace Book</Link>
          <h1>
            {topic.icon} {topic.name}
          </h1>
          <p>{topic.description}</p>

          <p style={{ marginBottom: 4 }}>
            Knowledge depth: {summary.depth}/100 · {summary.resourceCount}{' '}
            resources · {summary.ideaCount} ideas · {summary.typeCount} formats
          </p>
          <Meter color={topic.color} value={summary.depth} />

          {resources.length === 0 ? (
            <p>
              Nothing here yet. Feed a resource tagged <code>{topic.slug}</code>{' '}
              and this page comes alive.
            </p>
          ) : (
            <>
              <h2>Idea wall</h2>
              <Wall>
                {ideas.map((idea, i) => (
                  <Idea
                    key={`${idea.slug}-${i}`}
                    color={topic.color}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(i, 12) * 0.04 }}
                  >
                    {idea.quote ? `“${idea.text}”` : idea.text}
                    <div style={{ fontSize: 12, opacity: 0.6, marginTop: 6 }}>
                      <Link href={`/commonplace/r/${idea.slug}`}>
                        {idea.from}
                      </Link>
                    </div>
                  </Idea>
                ))}
              </Wall>

              <h2>Resources</h2>
              <Filters>
                {['all', ...types].map((t) => (
                  <Filter
                    key={t}
                    active={t === type}
                    onClick={() => setType(t)}
                  >
                    {t}
                  </Filter>
                ))}
              </Filters>
              <Stack>
                {visible.map((r) => (
                  <ResourceCard key={r.slug} resource={r} />
                ))}
              </Stack>
            </>
          )}

          {related.length > 0 && (
            <>
              <h2>Related topics</h2>
              <p>
                {related.map((rel) => (
                  <span key={rel.slug} style={{ marginRight: 12 }}>
                    <Link href={`/commonplace/${rel.slug}`}>
                      {topicsBySlug[rel.slug].icon}{' '}
                      {topicsBySlug[rel.slug].name}
                    </Link>{' '}
                    ({rel.weight})
                  </span>
                ))}
              </p>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: topics.map((t) => ({ params: { topic: t.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = String(params?.topic);
  const all = getAllResources();
  return {
    props: {
      topic: topicsBySlug[slug],
      summary: getTopicSummaries(all).find((t) => t.slug === slug)!,
      resources: all.filter((r) => r.topics.includes(slug)),
      related: getRelatedTopics(slug, all),
    },
  };
};

export default Page;
