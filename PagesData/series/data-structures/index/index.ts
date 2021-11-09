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
  src: '/series/data-structures/intro.jpg',
  width: '592',
  height: '444',
  alt: '3D squares in a dark place with blue and white light',
  authorHref: 'https://unsplash.com/@fabioha',
  authorName: 'fabio',
};

const postsList = [
  {
    datetime: '2020-01-06',
    link: '/series/data-structures/stack-data-structure',
    title: 'Stack Data Structure',
  },
  {
    datetime: '2020-01-13',
    link: '/series/data-structures/queue-data-structure',
    title: 'Queue Data Structure',
  },
  {
    datetime: '2020-02-02',
    link: '/2020/01/linked-list',
    title: 'Linked List Data Structure',
  },
  {
    datetime: '2020-02-10',
    link: '/2020/02/tree-data-structure',
    title: 'Tree Data Structure',
  },
];

export const pageData = {
  title: 'Data Structures Series',
  description: 'Solving algorithms problems with TK',
  date: '2020-06-14',
  tags,
  coverImage,
  postsList,
};
