import Link from 'next/link';
import { FC } from 'react';

import styled from '@emotion/styled';

import { topicsBySlug } from 'data/commonplace/topics';
import type { Resource } from 'src/lib/commonplace';

const Card = styled.article`
  border: 1px solid var(--color-border-default);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Meta = styled.div`
  font-size: 13px;
  opacity: 0.7;
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Chip = styled(Link)<{ color: string }>`
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 999px;
  text-decoration: none;
  border: 1px solid ${({ color }) => color};
`;

const typeIcon: Record<string, string> = {
  book: '📚',
  article: '📰',
  video: '🎬',
  podcast: '🎧',
  paper: '📄',
  other: '🔖',
};

export const ResourceCard: FC<{ resource: Resource }> = ({ resource }) => (
  <Card>
    <strong>
      {typeIcon[resource.type]}{' '}
      <Link href={`/commonplace/r/${resource.slug}`}>{resource.title}</Link>
      {resource.placeholder && ' (sample)'}
    </strong>
    <Meta>
      {resource.author} · {resource.type} · {resource.date}
      {resource.rating ? ` · ${'★'.repeat(resource.rating)}` : ''}
    </Meta>
    <Chips>
      {resource.topics.map((slug) => (
        <Chip
          key={slug}
          href={`/commonplace/${slug}`}
          color={topicsBySlug[slug].color}
        >
          {topicsBySlug[slug].name}
        </Chip>
      ))}
    </Chips>
  </Card>
);
