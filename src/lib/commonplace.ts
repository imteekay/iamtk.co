import fs from 'fs';
import path from 'path';

import { Topic, topics, topicsBySlug } from 'data/commonplace/topics';

export const resourceTypes = [
  'book',
  'article',
  'video',
  'podcast',
  'paper',
  'other',
] as const;

export type ResourceType = typeof resourceTypes[number];

export type Resource = {
  slug: string;
  title: string;
  type: ResourceType;
  url: string;
  author: string;
  topics: string[];
  date: string;
  rating: number;
  placeholder: boolean;
  ideas: string[];
  quotes: string[];
  notes: string;
};

export type TopicSummary = Topic & {
  resourceCount: number;
  ideaCount: number;
  quoteCount: number;
  typeCount: number;
  depth: number;
  latest: string | null;
};

export type Connection = { source: string; target: string; weight: number };

const resourcesDir = path.join(
  process.cwd(),
  'content',
  'commonplace',
  'resources',
);

function parseValue(raw: string): string | number | boolean | string[] {
  const value = raw.trim();
  if (value.startsWith('[') && value.endsWith(']')) {
    return value
      .slice(1, -1)
      .split(',')
      .map((item) => item.trim().replace(/^['"]|['"]$/g, ''))
      .filter(Boolean);
  }
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (value !== '' && !Number.isNaN(Number(value))) return Number(value);
  return value.replace(/^['"]|['"]$/g, '');
}

function parseFrontmatter(source: string) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {} as Record<string, unknown>, body: source };

  const data: Record<string, unknown> = {};
  match[1].split(/\r?\n/).forEach((line) => {
    const index = line.indexOf(':');
    if (index === -1) return;
    data[line.slice(0, index).trim()] = parseValue(line.slice(index + 1));
  });

  return { data, body: match[2] };
}

function extractIdeas(body: string) {
  const section = body.match(
    /##\s+Key ideas\s*\r?\n([\s\S]*?)(?=\r?\n##\s|$)/i,
  );
  if (!section) return [];
  return section[1]
    .split(/\r?\n/)
    .map((line) => line.match(/^\s*[-*]\s+(.*)$/))
    .filter((m): m is RegExpMatchArray => Boolean(m))
    .map((m) => m[1].trim());
}

function extractQuotes(body: string) {
  return body
    .split(/\r?\n/)
    .map((line) => line.match(/^>\s?(.*)$/))
    .filter((m): m is RegExpMatchArray => Boolean(m))
    .map((m) => m[1].trim())
    .filter(Boolean);
}

function extractNotes(body: string) {
  return body
    .replace(/##\s+Key ideas\s*\r?\n[\s\S]*?(?=\r?\n##\s|$)/i, '')
    .split(/\r?\n/)
    .filter((line) => !line.startsWith('>'))
    .join('\n')
    .trim();
}

function toResource(slug: string, source: string): Resource {
  const { data, body } = parseFrontmatter(source);
  const type = String(data.type ?? 'other') as ResourceType;

  return {
    slug,
    title: String(data.title ?? slug),
    type: resourceTypes.includes(type) ? type : 'other',
    url: String(data.url ?? ''),
    author: String(data.author ?? ''),
    topics: ((data.topics as string[]) ?? []).filter(
      (topic) => topic in topicsBySlug,
    ),
    date: String(data.date ?? ''),
    rating: Number(data.rating ?? 0),
    placeholder: data.placeholder === true,
    ideas: extractIdeas(body),
    quotes: extractQuotes(body),
    notes: extractNotes(body),
  };
}

export function getAllResources(): Resource[] {
  if (!fs.existsSync(resourcesDir)) return [];

  return fs
    .readdirSync(resourcesDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) =>
      toResource(
        file.replace(/\.md$/, ''),
        fs.readFileSync(path.join(resourcesDir, file), 'utf8'),
      ),
    )
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getResource(slug: string) {
  return getAllResources().find((resource) => resource.slug === slug) ?? null;
}

export function getResourcesByTopic(slug: string) {
  return getAllResources().filter((resource) => resource.topics.includes(slug));
}

/** Depth 0-100: grows with resource count, variety of types and ideas captured. */
function computeDepth(resources: Resource[]) {
  const types = new Set(resources.map((r) => r.type)).size;
  const ideas = resources.reduce((sum, r) => sum + r.ideas.length, 0);
  const score = resources.length * 12 + types * 8 + ideas * 2;
  return Math.min(100, score);
}

export function getTopicSummaries(
  resources: Resource[] = getAllResources(),
): TopicSummary[] {
  return topics.map((topic) => {
    const related = resources.filter((r) => r.topics.includes(topic.slug));
    return {
      ...topic,
      resourceCount: related.length,
      ideaCount: related.reduce((sum, r) => sum + r.ideas.length, 0),
      quoteCount: related.reduce((sum, r) => sum + r.quotes.length, 0),
      typeCount: new Set(related.map((r) => r.type)).size,
      depth: computeDepth(related),
      latest: related[0]?.date ?? null,
    };
  });
}

export function getConnections(
  resources: Resource[] = getAllResources(),
): Connection[] {
  const weights: Record<string, Connection> = {};
  resources.forEach(({ topics: list }) => {
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        const [source, target] = [list[i], list[j]].sort();
        const key = `${source}|${target}`;
        weights[key] = weights[key] || { source, target, weight: 0 };
        weights[key].weight += 1;
      }
    }
  });
  return Object.values(weights);
}

export function getRelatedTopics(slug: string, resources = getAllResources()) {
  return getConnections(resources)
    .filter((c) => c.source === slug || c.target === slug)
    .map((c) => ({
      slug: c.source === slug ? c.target : c.source,
      weight: c.weight,
    }))
    .sort((a, b) => b.weight - a.weight);
}
