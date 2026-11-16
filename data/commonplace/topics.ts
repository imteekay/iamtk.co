export type Topic = {
  slug: string;
  name: string;
  description: string;
  color: string;
  icon: string;
};

export const topics: Topic[] = [
  {
    slug: 'software',
    name: 'Software',
    description: 'Craft, architecture and the engineering of useful things.',
    color: '#58a6ff',
    icon: '💻',
  },
  {
    slug: 'learning',
    name: 'Learning',
    description: 'How to acquire, retain and apply knowledge faster.',
    color: '#a371f7',
    icon: '🧠',
  },
  {
    slug: 'productivity',
    name: 'Productivity',
    description: 'Systems that turn effort into meaningful output.',
    color: '#3fb950',
    icon: '⚙️',
  },
  {
    slug: 'health',
    name: 'Health',
    description: 'Sleep, movement and the body as the base of everything.',
    color: '#f85149',
    icon: '❤️',
  },
  {
    slug: 'nutrition',
    name: 'Nutrition',
    description: 'What to eat and when, to fuel body and mind.',
    color: '#d29922',
    icon: '🥗',
  },
  {
    slug: 'freedom',
    name: 'Freedom',
    description: 'Autonomy over time, money, place and choices.',
    color: '#39c5cf',
    icon: '🕊️',
  },
  {
    slug: 'problem-solving',
    name: 'Problem solving',
    description: 'Frameworks to break down and crack hard problems.',
    color: '#ff7b72',
    icon: '🧩',
  },
  {
    slug: 'research',
    name: 'Research',
    description: 'Finding, evaluating and synthesizing evidence.',
    color: '#79c0ff',
    icon: '🔬',
  },
  {
    slug: 'mastery',
    name: 'Mastery',
    description: 'Deliberate practice and the long road to excellence.',
    color: '#e3b341',
    icon: '🏔️',
  },
  {
    slug: 'focus',
    name: 'Focus',
    description: 'Attention as the scarcest resource, and how to protect it.',
    color: '#bc8cff',
    icon: '🎯',
  },
  {
    slug: 'decision',
    name: 'Decision',
    description: 'Thinking clearly under uncertainty and choosing well.',
    color: '#ffa657',
    icon: '⚖️',
  },
  {
    slug: 'purpose',
    name: 'Purpose',
    description: 'Meaning, values and why any of this matters.',
    color: '#f778ba',
    icon: '🧭',
  },
  {
    slug: 'wealth',
    name: 'Wealth',
    description: 'Building assets, leverage and financial independence.',
    color: '#56d364',
    icon: '💰',
  },
  {
    slug: 'discipline',
    name: 'Discipline',
    description: 'Showing up consistently, regardless of mood.',
    color: '#8b949e',
    icon: '🔥',
  },
];

export const topicsBySlug: Record<string, Topic> = Object.fromEntries(
  topics.map((topic) => [topic.slug, topic]),
);
