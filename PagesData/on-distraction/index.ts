export { Article } from './Article';

const tags = [
  {
    href: '/tags/lifestyle_design ',
    name: 'lifestyle_design',
  },
];

const coverImage = {
  src: '/on-distraction/cover.jpg',
  width: '592',
  height: '444',
  alt: 'A bunch of paper ads on a wall on the streets.',
  authorHref: 'https://unsplash.com/@olegdevyatka',
  authorName: 'Oleg Devyatka',
};

export const pageData = {
  title: 'On Distraction',
  description:
    'Focusing on things I can control and systems to fight distractions and procrastination is the way to go.',
  date: '2021-10-30',
  tags,
  coverImage,
};
