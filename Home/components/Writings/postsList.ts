type Post = {
  id: number;
  datetime: string;
  link: string;
  title: string;
};

export const postsList: Post[] = [
  {
    datetime: '2023-10-19',
    link: '/series/essentials-of-interpretation/control-flow-if-and-while-expressions',
    title:
      'Essentials of Interpretation — Control Flow: If and While Expressions',
  },
  {
    datetime: '2023-10-17',
    link: '/series/essentials-of-interpretation/variables-environments-and-blocks',
    title:
      'Essentials of Interpretation — Scoping: Variables, Environments, and Blocks',
  },
  {
    datetime: '2023-09-04',
    link: '/series/essentials-of-interpretation/the-programming-language-and-self-evaluating-expressions',
    title:
      'Essentials of Interpretation: The Programming Language & Self-Evaluating Expressions',
  },
  {
    datetime: '2023-08-28',
    link: '/series/essentials-of-interpretation/a-compiler-crash-course',
    title: 'Essentials of Interpretation: A Compiler Crash Course',
  },
  {
    datetime: '2023-08-21',
    link: '/i-read-47-books-in-the-first-6-months-of-2023-now-what',
    title: 'I read 47 books in the first 6 months of 2023. Now what?',
  },
  {
    datetime: '2023-08-07',
    link: '/building-let-declarations-for-the-typescript-compiler',
    title: 'Building Let Declarations for the TypeScript compiler',
  },
  {
    datetime: '2023-07-31',
    link: '/allow-var-statements-to-declare-multiple-symbols-in-the-typescript-compiler',
    title:
      'Allow var statements to declare multiple symbols in the TypeScript compiler',
  },
  {
    datetime: '2023-07-23',
    link: '/building-emptystatement-and-semicolon-as-statement-ender-for-the-typescript-compiler',
    title:
      'Building EmptyStatement and Semicolon as a statement ender for the TypeScript compiler',
  },
  {
    datetime: '2023-07-03',
    link: '/implementing-string-literals-for-the-typescript-compiler',
    title: 'Implementing StringLiterals for the TypeScript Compiler',
  },
  {
    datetime: '2023-06-25',
    link: '/a-deep-dive-into-the-typescript-compiler-miniature',
    title: 'A Deep Dive into the TypeScript Compiler Miniature',
  },
  {
    datetime: '2023-06-09',
    link: '/solving-algorithmic-problems-using-the-two-pointers-technique',
    title: 'Solving Algorithmic problems using the Two Pointers technique',
  },
  {
    datetime: '2023-06-04',
    link: '/javascript-scope-closures-and-the-typescript-compiler',
    title: 'JavaScript scope, Closures, and the TypeScript compiler',
  },
  {
    datetime: '2023-03-17',
    link: '/series/data-structures-in-javascript/tree-data-structure',
    title: 'Tree Data Structure in JavaScript',
  },
  {
    datetime: '2023-03-12',
    link: '/the-evolution-of-react-rendering-architectures-and-web-performance',
    title: 'The Evolution of React Rendering Architectures & Web Performance',
  },
  {
    datetime: '2023-03-04',
    link: '/math-symbols-on-macos',
    title: 'Math Symbols on MacOS',
  },
  {
    datetime: '2023-02-27',
    link: '/a-high-level-architecture-of-the-typescript-compiler',
    title: 'A High Level Architecture of the TypeScript compiler',
  },
  {
    datetime: '2023-02-02',
    link: '/webpack-bundle-splitting-and-browser-caching',
    title: 'Webpack Bundle Splitting & Browser Caching',
  },
  {
    datetime: '2023-01-30',
    link: '/series/crafting-frontend/spotify-playlist-frontend-system-architecture',
    title: 'Spotify Playlist — Frontend System Architecture',
  },
  {
    datetime: '2022-11-12',
    link: '/series/crafting-frontend',
    title: 'Crafting Frontend',
  },
  {
    datetime: '2022-09-12',
    link: '/web-performance-code-splitting-strategies-and-react-applications',
    title: 'Web performance, code splitting strategies, and a React case study',
  },
  {
    datetime: '2022-09-11',
    link: '/why-web-performance',
    title: 'Why Web Performance',
  },
  {
    datetime: '2022-08-15',
    link: '/profiling-and-optimizing-the-runtime-performance-with-the-devtools-performance-tab',
    title:
      'Profiling & Optimizing the runtime performance with the DevTools Performance tab',
  },
  {
    datetime: '2022-07-06',
    link: '/writing-a-memoization-function-from-scratch',
    title: 'Writing a Memoization Function from Scratch',
  },
  {
    datetime: '2022-04-25',
    link: '/series/introduction-to-machine-learning',
    title: 'Introduction to Machine Learning',
  },
  {
    datetime: '2022-03-26',
    link: '/frontend-infrastructure',
    title: 'Frontend Infrastructure',
  },
  {
    datetime: '2022-03-04',
    link: '/series/data-structures-in-javascript/linked-list-data-structure',
    title: 'Linked List Data Structure in JavaScript',
  },
  {
    datetime: '2022-03-02',
    link: '/series/data-structures-in-javascript/queue-data-structure',
    title: 'Queue Data Structure in JavaScript',
  },
  {
    datetime: '2022-02-20',
    link: '/series/data-structures-in-javascript/stack-data-structure',
    title: 'Stack Data Structure in JavaScript',
  },
  {
    datetime: '2022-02-20',
    link: '/series/data-structures-in-javascript',
    title: 'Data Structures in JavaScript',
  },
  {
    datetime: '2022-01-10',
    link: '/series/mastering-javascript/destructuring-objects-and-arrays',
    title: 'Destructuring Arrays and Objects in JavaScript',
  },
  {
    datetime: '2022-01-04',
    link: '/series/website-changelog/refactoring-setup',
    title:
      'Refactoring Setup: NextJS, TypeScript, Prettier, and Testing Library',
  },
  {
    datetime: '2022-01-03',
    link: '/series/mastering-javascript/revisiting-conditionals-in-javascript-and-typescript',
    title:
      'Mastering JavaScript: Revisiting Conditionals in JavaScript and TypeScript',
  },
  {
    datetime: '2022-01-01',
    link: '/series/website-changelog/building-my-legacy-through-accessible-open-and-free-content',
    title: 'Building my Legacy through Accessible, Open, and Free content',
  },
  {
    datetime: '2021-12-27',
    link: '/series/mastering-javascript',
    title: 'Mastering JavaScript Series',
  },
  {
    datetime: '2021-12-27',
    link: '/series/frontend-challenges/findhotel-frontend-challenge',
    title: 'Frontend Challenges: Front-end Engineer Assignment',
  },
  {
    datetime: '2021-12-26',
    link: '/series/frontend-challenges',
    title: 'Frontend Challenges Series',
  },
  {
    datetime: '2021-12-13',
    link: '/how-i-received-4-salary-raises-in-2-years-of-quintoandar-as-a-software-engineer',
    title:
      'How I received 4 salary raises in 2 years of QuintoAndar as a Software Engineer',
  },
  {
    datetime: '2021-11-01',
    link: '/on-leaving',
    title: 'On Leaving',
  },
  {
    datetime: '2021-10-30',
    link: '/on-distraction',
    title: 'On Distraction',
  },
  {
    datetime: '2021-10-17',
    link: '/series/building-an-interpreter/parser-part-1',
    title:
      'Building an Interpreter: Parser - Part 1: Fundamental parts of AST and basic statements',
  },
  {
    datetime: '2021-07-20',
    link: '/series/building-an-interpreter/repl',
    title: 'Building an Interpreter: REPL',
  },
  {
    datetime: '2021-07-18',
    link: '/series/building-an-interpreter/lexical-analysis-part-3',
    title: 'Building an Interpreter: Lexical Analysis - Part 3',
  },
  {
    datetime: '2021-06-23',
    link: '/series/rebuilding-mercaris-search/home-menu',
    title: "Rebuilding Mercari's Search: Home and Menu",
  },
  {
    datetime: '2021-06-20',
    link: '/series/rebuilding-mercaris-search/setup-nextjs-with-typescript-prettier-and-jest',
    title:
      "Rebuilding Mercari's Search: Setup NextJS with TypeScript, Prettier, and Jest",
  },
  {
    datetime: '2021-06-13',
    link: '/series/rebuilding-mercaris-search',
    title: "Rebuilding Mercari's Search Series",
  },
  {
    datetime: '2021-06-12',
    link: '/react-query-complex-dependent-queries',
    title: 'react-query: complex dependent queries',
  },
  {
    datetime: '2021-06-05',
    link: '/data-fetching-in-react-with-react-query',
    title: 'Data Fetching in React with react-query',
  },
  {
    datetime: '2021-05-29',
    link: '/series/building-an-interpreter/lexical-analysis-part-2',
    title: 'Building an Interpreter: Lexical Analysis - Part 2',
  },
  {
    datetime: '2021-05-23',
    link: '/series/building-an-interpreter/lexical-analysis-part-1',
    title: 'Building an Interpreter: Lexical Analysis - Part 1',
  },
  {
    datetime: '2021-05-23',
    link: '/series/building-an-interpreter',
    title: 'Building an Interpreter Series',
  },
  {
    datetime: '2021-04-04',
    link: '/dx-and-software-maintainability-in-frontend-engineering',
    title: 'DX & Software Maintainability in Frontend Engineering',
  },
  {
    datetime: '2021-01-21',
    link: '/optimizing-the-performance-of-a-react-progressive-web-app',
    title: 'Optimizing the Performance of a React Progressive Web App',
  },
  {
    datetime: '2021-01-19',
    link: '/performance-prefetch-next-pages-chunks',
    title: 'Performance: Prefetch Next Page Chunk',
  },
  {
    datetime: '2021-01-17',
    link: '/bookshelf/atomic-habits',
    title: 'Atomic Habits',
  },
  {
    datetime: '2021-01-02',
    link: '/bookshelf/the-effective-engineer',
    title: 'The Effective Engineer',
  },
  {
    datetime: '2021-01-01',
    link: '/slow-living',
    title: 'Slow Living',
  },
  {
    datetime: '2020-10-18',
    link: '/building-an-individual-development-plan-with-notion',
    title: 'Building a simple Individual Development Plan (IDP) with Notion',
  },
  {
    datetime: '2020-10-13',
    link: '/basic-recipes-for-react-testing-library',
    title: 'Basic Recipes for React Testing Library',
  },
  {
    datetime: '2020-07-19',
    link: '/a-mental-model-to-think-in-typescript',
    title: 'A Mental Model to think in TypeScript',
  },
  {
    datetime: '2020-06-25',
    link: '/designing-my-lifes-system',
    title: "Designing my Life's System",
  },
  {
    datetime: '2020-06-21',
    link: '/ux-studies-with-react-typescript-and-testing-library',
    title: 'UX Studies with React, TypeScript, and Testing Library',
  },
  {
    datetime: '2020-06-14',
    link: '/series/data-structures',
    title: 'Data Structures Series',
  },
  {
    datetime: '2020-05-05',
    link: '/constant-feedback-driven-development-with-nodemon',
    title: 'Constant feedback driven development with Nodemon',
  },
  {
    datetime: '2020-04-29',
    link: '/publisher-a-tooling-to-automate-the-process-to-publish-my-blog-posts',
    title: 'Automating my blog posts publishing process',
  },
  {
    datetime: '2020-04-18',
    link: '/react-hooks-context-api-and-pokemons',
    title: 'React Hooks, Context API, and Pokemons',
  },
  {
    datetime: '2020-04-15',
    link: '/fun-with-dates',
    title: 'Fun with Dates',
  },
  {
    datetime: '2020-04-13',
    link: '/series/elixir-learnings',
    title: 'Elixir Learnings Series',
  },
  {
    datetime: '2020-04-08',
    link: '/thinking-in-data-contracts',
    title: 'Thinking in data contracts',
  },
  {
    datetime: '2020-04-05',
    link: '/series/typescript-learnings',
    title: 'TypeScript Learnings Series',
  },
  {
    datetime: '2020-04-01',
    link: '/consistent-state-management-in-react-and-redux',
    title: 'Consistent State Management in React and Redux',
  },
  {
    datetime: '2020-03-27',
    link: '/tdd-functions-and-react-components',
    title: 'TDD, simple functions, and React components',
  },
  {
    datetime: '2020-03-08',
    link: '/closure-currying-and-cool-abstractions',
    title: 'Closures, Currying, and Cool Abstractions',
  },
  {
    datetime: '2020-02-10',
    link: '/series/data-structures/tree-data-structure',
    title: 'Tree Data Structure',
  },
  {
    datetime: '2020-02-02',
    link: '/series/data-structures/linked-list-data-structure',
    title: 'Linked List',
  },
  {
    datetime: '2020-01-13',
    link: '/series/data-structures/queue-data-structure',
    title: 'Queue Data Structure',
  },
  {
    datetime: '2020-01-06',
    link: '/series/data-structures/stack-data-structure',
    title: 'Stack Data Structure',
  },
  {
    datetime: '2020-01-01',
    link: '/building-an-abstraction-for-react-internationalization-messages',
    title: 'Building an abstraction for React internationalization messages',
  },
  {
    datetime: '2019-09-16',
    link: '/designing-my-learning-experience',
    title: 'Designing my Learning Experience',
  },
  {
    datetime: '2019-07-07',
    link: '/thoughts-on-my-productivity',
    title: 'Thoughts on my productivity',
  },
  {
    datetime: '2018-11-17',
    link: '/functional-programming-principles-in-javascript',
    title: 'Functional Programming Principles in JavaScript',
  },
  {
    datetime: '2018-11-15',
    link: '/an-introduction-to-the-basic-principles-of-functional-programming',
    title: 'An introduction to the basic principles of Functional Programming',
  },
  {
    datetime: '2018-01-05',
    link: '/understanding-the-basics-of-ruby-on-rails-sql-databases-and-how-they-work',
    title:
      'Understanding the basics of Ruby on Rails: SQL Databases and how they work',
  },
  {
    datetime: '2018-01-03',
    link: '/actionable-advice-to-start-learning-to-code',
    title: 'Actionable advice to start learning to code',
  },
  {
    datetime: '2018-01-02',
    link: '/understanding-the-basics-of-ruby-on-rails-http-mvc-and-routes',
    title: 'Understanding the basics of Ruby on Rails: HTTP, MVC, and Routes',
  },
  {
    datetime: '2017-09-30',
    link: '/learning-python-from-zero-to-hero',
    title: 'Learning Python From Zero to Hero',
  },
  {
    datetime: '2017-09-28',
    link: '/writing-idiomatic-beautiful-ruby-code',
    title: 'Idiomatic Ruby: Writing beautiful code',
  },
  {
    datetime: '2017-09-12',
    link: '/learning-ruby-from-zero-to-hero',
    title: 'Learning Ruby From Zero to Hero',
  },
].map((post, id) => ({ id, ...post }));
