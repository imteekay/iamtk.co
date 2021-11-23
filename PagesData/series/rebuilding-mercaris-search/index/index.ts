export { Article } from './Article';

const tags = [
  {
    href: '/tags/web-development',
    name: 'web_development',
  },
  {
    href: '/tags/typescript',
    name: 'typescript',
  },
  {
    href: '/tags/javascript',
    name: 'javascript',
  },
];

const coverImage = {
  src: '/series/rebuilding-mercaris-search/intro.jpg',
  width: '592',
  height: '888',
  alt: 'Tokyo Tower',
  authorHref: 'https://unsplash.com/@cmacmillanmarin',
  authorName: 'Christian MacMillan',
};

const postsList = [
  {
    datetime: '2021-06-20',
    link: '/series/rebuilding-mercaris-search/setup-nextjs-with-typescript-prettier-and-jest',
    title: 'Setup NextJS with TypeScript, Prettier, and Jest',
  },
  {
    datetime: '2021-06-23',
    link: '/series/rebuilding-mercaris-search/home-menu',
    title: 'Home and Menu',
  },
];

export const pageData = {
  title: "Rebuilding Mercari's Search Series",
  description:
    "A documentation series about how I rebuilt the Mercari's Search experience with NextJS, ReactJS, and TypeScript.",
  date: '2021-06-13',
  tags,
  coverImage,
  postsList,
};
