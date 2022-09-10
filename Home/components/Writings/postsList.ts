type Post = {
  id: number;
  datetime: string;
  link: string;
  title: string;
  tags: string[];
};

export const postsList: Post[] = [
  {
    datetime: '2022-09-11',
    link: '/web-performance-code-splitting-strategies-and-react-applications',
    title: 'Web performance, code splitting strategies, and a React case study',
    tags: ['performance'],
  },
  {
    datetime: '2022-08-15',
    link: '/profiling-and-optimizing-the-runtime-performance-with-the-devtools-performance-tab',
    title:
      'Profiling & Optimizing the runtime performance with the DevTools Performance tab',
    tags: ['performance'],
  },
  {
    datetime: '2022-07-06',
    link: '/writing-a-memoization-function-from-scratch',
    title: 'Writing a Memoization Function from Scratch',
    tags: ['javascript'],
  },
  {
    datetime: '2022-04-25',
    link: '/series/introduction-to-machine-learning',
    title: 'Introduction to Machine Learning',
    tags: ['python', 'machine learning', 'data science'],
  },
  {
    datetime: '2022-03-26',
    link: '/frontend-infrastructure',
    title: 'Frontend Infrastructure',
    tags: ['javascript', 'typescript', 'web', 'dx', 'devtools'],
  },
  {
    datetime: '2022-03-04',
    link: '/series/data-structures-in-javascript/linked-list-data-structure',
    title: 'Linked List Data Structure in JavaScript',
    tags: ['javascript', 'data structures', 'algorithms'],
  },
  {
    datetime: '2022-03-02',
    link: '/series/data-structures-in-javascript/queue-data-structure',
    title: 'Queue Data Structure in JavaScript',
    tags: ['javascript', 'data structures', 'algorithms'],
  },
  {
    datetime: '2022-02-20',
    link: '/series/data-structures-in-javascript/stack-data-structure',
    title: 'Stack Data Structure in JavaScript',
    tags: ['javascript', 'data structures', 'algorithms'],
  },
  {
    datetime: '2022-02-20',
    link: '/series/data-structures-in-javascript',
    title: 'Data Structures in JavaScript',
    tags: ['javascript', 'data structures', 'algorithms'],
  },
  {
    datetime: '2022-01-10',
    link: '/series/mastering-javascript/destructuring-objects-and-arrays',
    title: 'Destructuring Arrays and Objects in JavaScript',
    tags: ['javascript', 'web'],
  },
  {
    datetime: '2022-01-04',
    link: '/series/website-changelog/refactoring-setup',
    title:
      'Refactoring Setup: NextJS, TypeScript, Prettier, and Testing Library',
    tags: ['javascript', 'typescript'],
  },
  {
    datetime: '2022-01-03',
    link: '/series/mastering-javascript/revisiting-conditionals-in-javascript-and-typescript',
    title:
      'Mastering JavaScript: Revisiting Conditionals in JavaScript and TypeScript',
    tags: ['javascript', 'typescript'],
  },
  {
    datetime: '2022-01-01',
    link: '/series/website-changelog/building-my-legacy-through-accessible-open-and-free-content',
    title: 'Building my Legacy through Accessible, Open, and Free content',
    tags: ['reflection'],
  },
  {
    datetime: '2021-12-27',
    link: '/series/mastering-javascript',
    title: 'Mastering JavaScript Series',
    tags: ['javascript'],
  },
  {
    datetime: '2021-12-27',
    link: '/series/frontend-challenges/findhotel-frontend-challenge',
    title: 'Frontend Challenges: Front-end Engineer Assignment',
    tags: ['javascript', 'typescript', 'react', 'web'],
  },
  {
    datetime: '2021-12-26',
    link: '/series/frontend-challenges',
    title: 'Frontend Challenges Series',
    tags: ['javascript', 'typescript', 'react', 'web'],
  },
  {
    datetime: '2021-12-13',
    link: '/how-i-received-4-salary-raises-in-2-years-of-quintoandar-as-a-software-engineer',
    title:
      'How I received 4 salary raises in 2 years of QuintoAndar as a Software Engineer',
    tags: ['career', 'craft', 'learning'],
  },
  {
    datetime: '2021-11-01',
    link: '/on-leaving',
    title: 'On Leaving',
    tags: ['career', 'learning'],
  },
  {
    datetime: '2021-10-30',
    link: '/on-distraction',
    title: 'On Distraction',
    tags: ['productivity', 'reflection', 'habits'],
  },
  {
    datetime: '2021-10-17',
    link: '/series/building-an-interpreter/parser-part-1',
    title:
      'Building an Interpreter: Parser - Part 1: Fundamental parts of AST and basic statements',
    tags: [
      'javascript',
      'typescript',
      'compilers',
      'programming language theory',
    ],
  },
  {
    datetime: '2021-07-20',
    link: '/series/building-an-interpreter/repl',
    title: 'Building an Interpreter: REPL',
    tags: [
      'javascript',
      'typescript',
      'compilers',
      'programming language theory',
    ],
  },
  {
    datetime: '2021-07-18',
    link: '/series/building-an-interpreter/lexical-analysis-part-3',
    title: 'Building an Interpreter: Lexical Analysis - Part 3',
    tags: [
      'javascript',
      'typescript',
      'compilers',
      'programming language theory',
    ],
  },
  {
    datetime: '2021-06-23',
    link: '/series/rebuilding-mercaris-search/home-menu',
    title: "Rebuilding Mercari's Search: Home and Menu",
    tags: ['javascript', 'typescript', 'react', 'web'],
  },
  {
    datetime: '2021-06-20',
    link: '/series/rebuilding-mercaris-search/setup-nextjs-with-typescript-prettier-and-jest',
    title:
      "Rebuilding Mercari's Search: Setup NextJS with TypeScript, Prettier, and Jest",
    tags: ['javascript', 'typescript', 'react', 'web'],
  },
  {
    datetime: '2021-06-13',
    link: '/series/rebuilding-mercaris-search',
    title: "Rebuilding Mercari's Search Series",
    tags: ['javascript', 'typescript', 'react', 'web'],
  },
  {
    datetime: '2021-06-12',
    link: '/react-query-complex-dependent-queries',
    title: 'react-query: complex dependent queries',
    tags: ['javascript', 'typescript', 'react', 'web'],
  },
  {
    datetime: '2021-06-05',
    link: '/data-fetching-in-react-with-react-query',
    title: 'Data Fetching in React with react-query',
    tags: ['javascript', 'typescript', 'react', 'web'],
  },
  {
    datetime: '2021-05-29',
    link: '/series/building-an-interpreter/lexical-analysis-part-2',
    title: 'Building an Interpreter: Lexical Analysis - Part 2',
    tags: [
      'javascript',
      'typescript',
      'compilers',
      'programming language theory',
    ],
  },
  {
    datetime: '2021-05-23',
    link: '/series/building-an-interpreter/lexical-analysis-part-1',
    title: 'Building an Interpreter: Lexical Analysis - Part 1',
    tags: [
      'javascript',
      'typescript',
      'compilers',
      'programming language theory',
    ],
  },
  {
    datetime: '2021-05-23',
    link: '/series/building-an-interpreter',
    title: 'Building an Interpreter Series',
    tags: [
      'javascript',
      'typescript',
      'compilers',
      'programming language theory',
    ],
  },
  {
    datetime: '2021-04-04',
    link: '/dx-and-software-maintainability-in-frontend-engineering',
    title: 'DX & Software Maintainability in Frontend Engineering',
    tags: ['javascript', 'typescript', 'react', 'web', 'leadership'],
  },
  {
    datetime: '2021-01-21',
    link: '/optimizing-the-performance-of-a-react-progressive-web-app',
    title: 'Optimizing the Performance of a React Progressive Web App',
    tags: ['javascript', 'typescript', 'react', 'web', 'performance'],
  },
  {
    datetime: '2021-01-19',
    link: '/performance-prefetch-next-pages-chunks',
    title: 'Performance: Prefetch Next Page Chunk',
    tags: ['javascript', 'typescript', 'react', 'web', 'performance'],
  },
  {
    datetime: '2021-01-17',
    link: '/bookshelf/atomic-habits',
    title: 'Atomic Habits',
    tags: ['bookshelf', 'productivity', 'habits'],
  },
  {
    datetime: '2021-01-02',
    link: '/bookshelf/the-effective-engineer',
    title: 'The Effective Engineer',
    tags: ['career', 'craft', 'learning'],
  },
  {
    datetime: '2021-01-01',
    link: '/slow-living',
    title: 'Slow Living',
    tags: ['productivity', 'reflection', 'habits'],
  },
  {
    datetime: '2020-10-18',
    link: '/building-an-individual-development-plan-with-notion',
    title: 'Building a simple Individual Development Plan (IDP) with Notion',
    tags: ['career', 'craft', 'learning'],
  },
  {
    datetime: '2020-10-13',
    link: '/basic-recipes-for-react-testing-library',
    title: 'Basic Recipes for React Testing Library',
    tags: ['javascript', 'typescript', 'react', 'web'],
  },
  {
    datetime: '2020-07-19',
    link: '/a-mental-model-to-think-in-typescript',
    title: 'A Mental Model to think in TypeScript',
    tags: ['javascript', 'typescript'],
  },
  {
    datetime: '2020-06-25',
    link: '/designing-my-lifes-system',
    title: "Designing my Life's System",
    tags: ['career', 'craft', 'learning', 'productivity'],
  },
  {
    datetime: '2020-06-21',
    link: '/ux-studies-with-react-typescript-and-testing-library',
    title: 'UX Studies with React, TypeScript, and Testing Library',
    tags: ['javascript', 'typescript', 'react', 'web'],
  },
  {
    datetime: '2020-06-14',
    link: '/series/data-structures',
    title: 'Data Structures Series',
    tags: ['python', 'algorithms', 'data structures'],
  },
  {
    datetime: '2020-05-05',
    link: '/constant-feedback-driven-development-with-nodemon',
    title: 'Constant feedback driven development with Nodemon',
    tags: ['javascript', 'typescript', 'web'],
  },
  {
    datetime: '2020-04-29',
    link: '/publisher-a-tooling-to-automate-the-process-to-publish-my-blog-posts',
    title: 'Automating my blog posts publishing process',
    tags: ['javascript', 'typescript', 'devtools'],
  },
  {
    datetime: '2020-04-18',
    link: '/react-hooks-context-api-and-pokemons',
    title: 'React Hooks, Context API, and Pokemons',
    tags: ['javascript', 'typescript', 'react', 'web'],
  },
  {
    datetime: '2020-04-15',
    link: '/fun-with-dates',
    title: 'Fun with Dates',
    tags: ['javascript', 'typescript', 'react', 'web'],
  },
  {
    datetime: '2020-04-13',
    link: '/series/elixir-learnings',
    title: 'Elixir Learnings Series',
    tags: ['elixir', 'functional programming'],
  },
  {
    datetime: '2020-04-08',
    link: '/thinking-in-data-contracts',
    title: 'Thinking in data contracts',
    tags: ['javascript', 'typescript'],
  },
  {
    datetime: '2020-04-05',
    link: '/series/typescript-learnings',
    title: 'TypeScript Learnings Series',
    tags: ['javascript', 'typescript'],
  },
  {
    datetime: '2020-04-01',
    link: '/consistent-state-management-in-react-and-redux',
    title: 'Consistent State Management in React and Redux',
    tags: ['javascript', 'typescript', 'react', 'web'],
  },
  {
    datetime: '2020-03-27',
    link: '/tdd-functions-and-react-components',
    title: 'TDD, simple functions, and React components',
    tags: ['javascript', 'react', 'web'],
  },
  {
    datetime: '2020-03-08',
    link: '/closure-currying-and-cool-abstractions',
    title: 'Closures, Currying, and Cool Abstractions',
    tags: ['javascript', 'react', 'web'],
  },
  {
    datetime: '2020-02-10',
    link: '/series/data-structures/tree-data-structure',
    title: 'Tree Data Structure',
    tags: ['python', 'algorithms', 'data structures'],
  },
  {
    datetime: '2020-02-02',
    link: '/series/data-structures/linked-list-data-structure',
    title: 'Linked List',
    tags: ['python', 'algorithms', 'data structures'],
  },
  {
    datetime: '2020-01-13',
    link: '/series/data-structures/queue-data-structure',
    title: 'Queue Data Structure',
    tags: ['python', 'algorithms', 'data structures'],
  },
  {
    datetime: '2020-01-06',
    link: '/series/data-structures/stack-data-structure',
    title: 'Stack Data Structure',
    tags: ['python', 'algorithms', 'data structures'],
  },
  {
    datetime: '2020-01-01',
    link: '/building-an-abstraction-for-react-internationalization-messages',
    title: 'Building an abstraction for React internationalization messages',
    tags: ['javascript', 'react', 'web'],
  },
  {
    datetime: '2019-09-16',
    link: '/designing-my-learning-experience',
    title: 'Designing my Learning Experience',
    tags: ['career', 'craft', 'learning'],
  },
  {
    datetime: '2019-07-07',
    link: '/thoughts-on-my-productivity',
    title: 'Thoughts on my productivity',
    tags: ['craft', 'learning', 'productivity'],
  },
  {
    datetime: '2018-11-17',
    link: '/functional-programming-principles-in-javascript',
    title: 'Functional Programming Principles in JavaScript',
    tags: ['javascript', 'functional programming'],
  },
  {
    datetime: '2018-11-15',
    link: '/an-introduction-to-the-basic-principles-of-functional-programming',
    title: 'An introduction to the basic principles of Functional Programming',
    tags: ['functional programming', 'clojure'],
  },
  {
    datetime: '2018-01-05',
    link: '/understanding-the-basics-of-ruby-on-rails-sql-databases-and-how-they-work',
    title:
      'Understanding the basics of Ruby on Rails: SQL Databases and how they work',
    tags: ['web', 'ruby', 'rails'],
  },
  {
    datetime: '2018-01-03',
    link: '/actionable-advice-to-start-learning-to-code',
    title: 'Actionable advice to start learning to code',
    tags: ['career', 'craft', 'learning'],
  },
  {
    datetime: '2018-01-02',
    link: '/understanding-the-basics-of-ruby-on-rails-http-mvc-and-routes',
    title: 'Understanding the basics of Ruby on Rails: HTTP, MVC, and Routes',
    tags: ['web', 'ruby', 'rails'],
  },
  {
    datetime: '2017-09-30',
    link: '/learning-python-from-zero-to-hero',
    title: 'Learning Python From Zero to Hero',
    tags: ['python'],
  },
  {
    datetime: '2017-09-28',
    link: '/writing-idiomatic-beautiful-ruby-code',
    title: 'Idiomatic Ruby: Writing beautiful code',
    tags: ['ruby'],
  },
  {
    datetime: '2017-09-12',
    link: '/learning-ruby-from-zero-to-hero',
    title: 'Learning Ruby From Zero to Hero',
    tags: ['ruby'],
  },
].map((post, id) => ({ id, ...post }));
