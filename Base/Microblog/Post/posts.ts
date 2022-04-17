type PostTypes = {
  title?: string;
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
