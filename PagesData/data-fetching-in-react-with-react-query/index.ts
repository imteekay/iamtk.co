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
  {
    href: '/tags/typescript',
    name: 'typescript',
  },
];

const coverImage = {
  src: '/data-fetching-in-react-with-react-query/cover.jpg',
  width: '592',
  height: '916',
  alt: 'A plane',
  authorHref: 'https://unsplash.com/@virussinside',
  authorName: 'Artiom Vallat',
};

export const pageData = {
  title: 'Data Fetching in React with react-query',
  description:
    'Understanding data fetching from the early days with xml requests and jquery to these days that we handle more complex cases.',
  date: '2021-06-05',
  tags,
  coverImage,
};
