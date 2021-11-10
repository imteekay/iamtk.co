export { Article } from './Article';

const tags = [
  {
    href: '/tags/algorithms-and-data-structures',
    name: 'algorithms_and_data_structures',
  },
  {
    href: '/tags/python',
    name: 'python',
  },
];

const coverImage = {
  src: '/series/data-structures/chain.jpeg',
  width: '592',
  height: '394',
  alt: 'A chain',
  authorHref: 'https://unsplash.com/@sandym10',
  authorName: 'Sandy Millar',
};

export const pageData = {
  title: 'Linked List Data Structure',
  description: 'Solving algorithms problems with TK',
  date: '2020-02-02',
  tags,
  coverImage,
};
