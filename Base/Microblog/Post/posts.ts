type PostTypes = {
  title: string;
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
    title: 'Independent Research and Freedom',
    date: '2022-04-17 • 16:41',
    description: `I keep debating with myself what I want to do in my life. What's the next step. "Freedom" is one of the words that come to my mind. Freedom to be wherever I want. Freedom to do whaterver I want. And I started to imagine myself stuyding, learning, and sharing for a living. Doing a PhD is a possibility in the future but not for now. Independent research is one the greater possibilities I have for now and my eyes light up when I think about it. I started two main projects: <a href="https://github.com/imteekay/web-performance-research">web performance</a>, <a href="https://github.com/imteekay/frontend-infrastructure">frontend infrastructure</a>, and <a href="https://github.com/imteekay/programming-language-theory">programming language theory</a>. Still figuring out how to push it forward in my life and how to do things. I truly want to make this works and I'll keep you posted!`,
  },
  {
    title: 'First post',
    date: '2022-04-16 • 22:52',
    description:
      '3 years ago I remember I wrote what type of person I wanted to be. One of the things I wrote was "a person who does whatever, however, whenever, wherever he wants". This stuck with me because this is my definition of `freedom`. I want to taste this feeling now, to bring this concept to real life. This is why I built this microblog. A place I can share anything I want. There\'s no limitation. There\'s no 180 characters, no expectations from other people, no need to capitalize this. Just me and my own thoughts.',
    image: {
      url: '/logo.jpeg',
      width: '600',
      height: '400',
      alt: "TK's Website logo",
    },
  },
];
