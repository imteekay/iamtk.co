export { Article } from './Article';

const tags = [
  {
    href: '/tags/javascript',
    name: 'javascript',
  },
  {
    href: '/tags/web-development',
    name: 'web_development',
  },
];

const coverImage = {
  src: '/react-query-complex-dependent-queries/cover.jpg',
  width: '592',
  height: '394',
  alt: 'A cup of coffee and a desktop computer',
  authorHref: 'https://unsplash.com/@baciutudor',
  authorName: 'Tudor Baciu',
};

export const pageData = {
  title: 'react-query: complex dependent queries',
  description:
    'Building complex queries in data fetching with react and react-query.',
  date: '2021-06-12',
  tags,
  coverImage,
};
