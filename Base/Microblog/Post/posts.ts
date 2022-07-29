type PostTypes = {
  title: string;
  slug: string;
  date: string;
  description: string;
  image?: {
    url: string;
    width: string;
    height: string;
    alt: string;
  };
};

export const posts: PostTypes[] = [
  {
    title: 'Outcome vs Output',
    slug: 'outcome-vs-output',
    date: '2022-07-20 • 14:46',
    description: `In the "output" mindset, you focus on making things faster. The more, the better. In the "outcome" mindset, you focus on the impact of your decisions and the most important things. It all comes down to prioritization, strategy, and planning. After figuring out the most impactful outputs, you focus on making it faster. The more impactful output, the better.`,
  },
  {
    title: 'Knowledge Sharing & Education',
    slug: 'knowledge-sharing-and-education',
    date: '2022-07-17 • 11:32',
    description: `One of the things that I want to keep doing in my life is knowledge sharing. The ability to share any experience, learnings, or failures that I had in the past. Knowledge and education are the way to keep evolving our society and I want to be part of this. When I get older, I want to look back and see everything I've done to contribute to this goal and leave my legacy for future generations.`,
  },
  {
    title: 'Discipline & Regret',
    slug: 'discipline-and-regret',
    date: '2022-07-15 • 10:01',
    description: `Whenever I have time to reflect, the thought of the relationship between discipline and regret always comes to my mind. Discipline is hard, it's painful but transitory. Regret is forever. For every decision in my life, I should keep asking if I choose discipline or regret.`,
  },
  {
    title: 'Intellectual Freedom',
    slug: 'intellectual-freedom',
    date: '2022-07-13 • 22:37',
    description: `In the last micropost I talked about my independent research and a little about freedom. Intellectual freedom keeps coming into my head and it's definitely challenging to stop these thoughts. This is the next question I want to answer: "How can I balance intellectual freedom and financial independence?"`,
  },
  {
    title: 'Independent Research and Freedom',
    slug: 'independent-research-and-freedom',
    date: '2022-04-17 • 16:41',
    description: `I keep debating with myself what I want to do in my life. What's the next step. "Freedom" is one of the words that come to my mind. Freedom to be wherever I want. Freedom to do whaterver I want. And I started to imagine myself studying, learning, and sharing for a living. Doing a PhD is a possibility in the future but not for now. Independent research is one of the greater possibilities I have for now and my eyes light up when I think about it. I started three main projects: <a href="https://github.com/imteekay/web-performance-research">web performance</a>, <a href="https://github.com/imteekay/frontend-infrastructure">frontend infrastructure</a>, and <a href="https://github.com/imteekay/programming-language-theory">programming language theory</a>. Still figuring out how to push it forward in my life and how to do things. I truly want to make this works and I'll keep you up to date!`,
  },
  {
    title: 'First post',
    slug: 'first-post',
    date: '2022-04-16 • 22:52',
    description:
      '3 years ago I remember I wrote what type of person I wanted to be. One of the things I wrote was "a person who does whatever, however, whenever, wherever he wants". This stuck with me because this is my definition of `freedom`. I want to taste this feeling now, to bring this concept to real life. This is why I built this microblog. A place I can share anything I want. There\'s no limitation. There\'s no 180 characters, no expectations from other people, no need to capitalize this. Just me and my own thoughts.',
  },
];
