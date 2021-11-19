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
  src: '/series/building-an-interpreter/intro.jpeg',
  width: '592',
  height: '394',
  alt: 'Glasses on top of a notebook',
  authorHref: 'https://unsplash.com/@sigmund',
  authorName: 'Sigmund',
};

const postsList = [
  {
    datetime: '2021-05-23',
    link: '/series/building-an-interpreter/lexical-analysis-part-1',
    title: 'Building an Interpreter: Lexical Analysis - Part 1',
  },
  {
    datetime: '2021-05-29',
    link: '/series/building-an-interpreter/lexical-analysis-part-2',
    title: 'Building an Interpreter: Lexical Analysis - Part 2',
  },
  {
    datetime: '2021-07-18',
    link: '/series/building-an-interpreter/lexical-analysis-part-3',
    title: 'Building an Interpreter: Lexical Analysis - Part 3',
  },
  {
    datetime: '2021-07-20',
    link: '/series/building-an-interpreter/repl',
    title: 'Building an Interpreter: REPL',
  },
  {
    datetime: '2021-10-17',
    link: '/series/building-an-interpreter/parser-part-1',
    title:
      'Building an Interpreter: Parser - Part 1: Fundamental parts of AST and basic statements',
  },
];

export const pageData = {
  title: 'Building an Interpreter Series',
  description:
    "A documentation series about the interpreter I'm building and learning",
  date: '2021-05-23',
  tags,
  coverImage,
  postsList,
};
