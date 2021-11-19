export { Article } from './Article';

const tags = [
  {
    href: '/tags/lifestyle-design ',
    name: 'lifestyle_design',
  },
  {
    href: '/tags/career',
    name: 'career',
  },
  {
    href: '/tags/learning',
    name: 'learning',
  },
];

const coverImage = {
  src: '/on-leaving/cover.jpeg',
  width: '592',
  height: '394',
  alt: 'Tokyo city with a focus on the Tokyo Tower',
  authorHref: 'https://unsplash.com/@marekokon',
  authorName: 'Marek Okon',
};

export const pageData = {
  title: 'On Leaving',
  description: 'Why am I moving to Tokyo, Japan?',
  date: '2021-11-01',
  tags,
  coverImage,
};
