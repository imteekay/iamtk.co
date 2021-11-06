export { Article } from './Article';

const tags = [
  {
    href: '../../tags/algorithms_and_data_structures.html',
    name: 'algorithms_and_data_structures',
  },
  {
    href: '../../tags/python.html',
    name: 'python',
  },
];

const coverImage = {
  src: '/series/data-structures/books.jpg',
  width: '592',
  height: '592',
  alt: 'An old man with piles of books',
  authorHref: 'https://unsplash.com/@katergaris',
  authorName: 'Aris Sfakianakis',
};

export const pageData = {
  title: 'Stack Data Structure',
  description: 'Solving algorithms problems with TK',
  date: '2020-01-06',
  tags,
  coverImage,
};
