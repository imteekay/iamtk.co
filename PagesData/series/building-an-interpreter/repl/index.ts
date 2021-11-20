export { Article } from './Article';

const tags = [
  {
    href: '/tags/programming-language-design',
    name: 'programming_language_design',
  },
  {
    href: '/tags/typescript',
    name: 'typescript',
  },
];

const coverImage = {
  src: '/series/building-an-interpreter/printer.jpg',
  width: '592',
  height: '394',
  alt: 'Printer printing',
  authorHref: 'https://unsplash.com/@bank_phrom',
  authorName: 'Bank Phrom',
};

export const pageData = {
  title: 'Building an Interpreter: REPL',
  description:
    "A REPL stands for Read-Eval-Print-Loop, and it is an interactive environment that 'reads' the input, 'evaluates' and 'prints' it.",
  date: '2021-07-20',
  tags,
  coverImage,
};
