import type { NextPage } from 'next';
import Head from 'next/head';
import { SkipLink } from '../Home/components/SkipLink';
import { Title } from '../Home/components/Title';
import { About } from '../Home/components/About';

const Home: NextPage = () => {
  return (
    <>
      <SkipLink />
      <main id="main">
        <div className="content index width mx-auto px2 my4">
          <Title text="TK" />
          <About />

          <section id="writing">
            <span className="h1">
              <a href="writing.html">writings</a>
            </span>
            <ul className="post-list">
              <li className="post-item">
                <div className="meta">
                  <time>2021-10-17</time>
                </div>
                <span>
                  <a href="series/building-an-interpreter/parser-part-1-fundamental-parts-of-ast-and-basic-statements.html">
                    Building an Interpreter: Parser - Part 1: Fundamental parts
                    of AST and basic statements
                  </a>
                </span>
              </li>

              <li className="post-item">
                <div className="meta">
                  <time>2021-07-20</time>
                </div>
                <span>
                  <a href="series/building-an-interpreter/building-an-interpreter-repl.html">
                    Building an Interpreter: REPL
                  </a>
                </span>
              </li>

              <li className="post-item">
                <div className="meta">
                  <time>2021-07-18</time>
                </div>
                <span>
                  <a href="series/building-an-interpreter/building-an-interpreter-lexical-analysis-part-3.html">
                    Building an Interpreter: Lexical Analysis - Part 3
                  </a>
                </span>
              </li>

              <li className="post-item">
                <div className="meta">
                  <time>2021-06-23</time>
                </div>
                <span>
                  <a href="series/rebuilding-mercaris-search/home-menu.html">
                    Rebuilding Mercari&apos;s Search: Home and Menu
                  </a>
                </span>
              </li>

              <li className="post-item">
                <div className="meta">
                  <time>2021-06-20</time>
                </div>
                <span>
                  <a href="series/rebuilding-mercaris-search/setup-nextjs-with-typescript-prettier-and-jest.html">
                    Rebuilding Mercari&apos;s Search: Setup NextJS with
                    TypeScript, Prettier, and Jest
                  </a>
                </span>
              </li>

              <li className="post-item">
                <div className="meta">
                  <time>2021-06-13</time>
                </div>
                <span>
                  <a href="series/rebuilding-mercaris-search/index.html">
                    Rebuilding Mercari&apos;s Search Series
                  </a>
                </span>
              </li>

              <li className="post-item">
                <div className="meta">
                  <time>2021-06-12</time>
                </div>
                <span>
                  <a href="2021/06/react-query-complex-dependent-queries/index.html">
                    react-query: complex dependent queries
                  </a>
                </span>
              </li>

              <li className="post-item">
                <div className="meta">
                  <time>2021-06-05</time>
                </div>
                <span>
                  <a href="2021/06/data-fetching-in-react-with-reactquery/index.html">
                    Data Fetching in React with react-query
                  </a>
                </span>
              </li>

              <li className="post-item">
                <div className="meta">
                  <time>2021-05-29</time>
                </div>
                <span>
                  <a href="series/building-an-interpreter/building-an-interpreter-lexical-analysis-part-2.html">
                    Building an Interpreter: Lexical Analysis - Part 2
                  </a>
                </span>
              </li>

              <li className="post-item">
                <div className="meta">
                  <time>2021-05-23</time>
                </div>
                <span>
                  <a href="series/building-an-interpreter/building-an-interpreter-lexical-analysis-part-1.html">
                    Building an Interpreter: Lexical Analysis - Part 1
                  </a>
                </span>
              </li>

              <li className="post-item">
                <div className="meta">
                  <time>2021-05-23</time>
                </div>
                <span>
                  <a href="series/building-an-interpreter/index.html">
                    Building an Interpreter Series
                  </a>
                </span>
              </li>

              <li className="post-item">
                <div className="meta">
                  <time>2021-04-04</time>
                </div>
                <span>
                  <a href="2021/04/dx-and-software-maintainability-in-frontend-engineering/index.html">
                    DX & Software Maintainability in Frontend Engineering
                  </a>
                </span>
              </li>

              <li className="post-item">
                <div className="meta">
                  <time>2021-01-21</time>
                </div>
                <span>
                  <a href="2021/01/optimizing-the-performance-of-a-react-progressive-web-app/index.html">
                    Optimizing the Performance of a React Progressive Web App
                  </a>
                </span>
              </li>

              <li className="post-item">
                <div className="meta">
                  <time>2021-01-19</time>
                </div>
                <span>
                  <a href="2021/01/performance-prefetch-next-pages-chunks/index.html">
                    Performance: Prefetch Next Page Chunk
                  </a>
                </span>
              </li>

              <li className="post-item">
                <div className="meta">
                  <time>2021-01-17</time>
                </div>
                <span>
                  <a href="2021/01/atomic-habits/index.html"> Atomic Habits </a>
                </span>
              </li>

              <li className="post-item">
                <div className="meta">
                  <time>2021-01-02</time>
                </div>
                <span>
                  <a href="2021/01/the-effective-engineer/index.html">
                    The Effective Engineer
                  </a>
                </span>
              </li>

              <li className="post-item">
                <div className="meta">
                  <time>2021-01-01</time>
                </div>
                <span>
                  <a href="2021/01/slow-living/index.html"> Slow Living </a>
                </span>
              </li>

              <li className="post-item">
                <div className="meta">
                  <time>2020-10-18</time>
                </div>
                <span>
                  <a href="2020/10/building-a-simple-individual-development-plan-idp-with-notion/index.html">
                    Building a simple Individual Development Plan (IDP) with
                    Notion
                  </a>
                </span>
              </li>

              <li className="post-item">
                <div className="meta">
                  <time>2020-10-13</time>
                </div>
                <span>
                  <a href="2020/10/basic-recipes-for-react-testing-library/index.html">
                    Basic Recipes for React Testing Library
                  </a>
                </span>
              </li>

              <li className="post-item">
                <div className="meta">
                  <time>2020-07-19</time>
                </div>
                <span>
                  <a href="2020/07/a-mental-model-to-think-in-typescript/index.html">
                    A Mental Model to think in TypeScript
                  </a>
                </span>
              </li>

              <li className="post-item">
                <div className="meta">
                  <time>2020-06-25</time>
                </div>
                <span>
                  <a href="2020/06/designing-my-lifes-system/index.html">
                    Designing my Life&apos;s System
                  </a>
                </span>
              </li>

              <li className="post-item">
                <div className="meta">
                  <time>2020-06-21</time>
                </div>
                <span>
                  <a href="2020/06/ux-studies-with-react-typescript-and-testing-library/index.html">
                    UX Studies with React, TypeScript, and Testing Library
                  </a>
                </span>
              </li>

              <li className="post-item">
                <div className="meta">
                  <time>2020-06-14</time>
                </div>
                <span>
                  <a href="series/data-structures/index.html">
                    Data Structures Series
                  </a>
                </span>
              </li>

              <li className="post-item">
                <div className="meta">
                  <time>2020-05-17</time>
                </div>
                <span>
                  <a href="series/algorithms-problem-solving/index.html">
                    Algorithms Problem Solving Series
                  </a>
                </span>
              </li>

              <li className="post-item">
                <div className="meta">
                  <time>2020-05-09</time>
                </div>
                <span>
                  <a href="2020/05/typescript-learnings-interesting-types/index.html">
                    TypeScript Interesting Types
                  </a>
                </span>
              </li>

              <li className="post-item">
                <div className="meta">
                  <time>2020-05-05</time>
                </div>
                <span>
                  <a href="2020/05/constant-feedback-driven-development-with-nodemon/index.html">
                    Constant feedback driven development with Nodemon
                  </a>
                </span>
              </li>

              <li className="post-item">
                <div className="meta">
                  <time>2020-04-29</time>
                </div>
                <span>
                  <a href="2020/04/publisher-a-tooling-to-automate-the-process-to-publish-my-blog-posts/index.html">
                    Automating my blog posts publishing process
                  </a>
                </span>
              </li>

              <li className="post-item">
                <div className="meta">
                  <time>2020-04-25</time>
                </div>
                <span>
                  <a href="2020/04/typescript-learnings-002-type-system/index.html">
                    TypeScript Type System
                  </a>
                </span>
              </li>

              <li className="post-item">
                <div className="meta">
                  <time>2020-04-21</time>
                </div>
                <span>
                  <a href="2020/04/elixir-learnings/002-playing-around-with-lists.html">
                    Playing around with Elixir lists
                  </a>
                </span>
              </li>
              <li className="post-item">
                <div className="meta">
                  <time>2020-04-18</time>
                </div>
                <span>
                  <a href="2020/04/react-hooks-context-api-and-pokemons/index.html">
                    React Hooks, Context API, and Pokemons
                  </a>
                </span>
              </li>
              <li className="post-item">
                <div className="meta">
                  <time>2020-04-15</time>
                </div>
                <span>
                  <a href="2020/04/fun-with-dates/index.html">
                    {' '}
                    Fun with Dates{' '}
                  </a>
                </span>
              </li>
              <li className="post-item">
                <div className="meta">
                  <time>2020-04-13</time>
                </div>
                <span>
                  <a href="2020/04/elixir-learnings/index.html">
                    Elixir Learnings Series
                  </a>
                </span>
              </li>
              <li className="post-item">
                <div className="meta">
                  <time>2020-04-08</time>
                </div>
                <span>
                  <a href="2020/04/thinking-in-data-contracts/index.html">
                    Thinking in data contracts
                  </a>
                </span>
              </li>
              <li className="post-item">
                <div className="meta">
                  <time>2020-04-05</time>
                </div>
                <span>
                  <a href="2020/04/typescript-learnings/index.html">
                    TypeScript Learnings Series
                  </a>
                </span>
              </li>
              <li className="post-item">
                <div className="meta">
                  <time>2020-04-01</time>
                </div>
                <span>
                  <a href="2020/04/consistent-state-management-in-react-and-redux/index.html">
                    Consistent State Management in React and Redux
                  </a>
                </span>
              </li>
              <li className="post-item">
                <div className="meta">
                  <time>2020-03-27</time>
                </div>
                <span>
                  <a href="2020/03/tdd-functions-and-react-components/index.html">
                    TDD, simple functions, and React components
                  </a>
                </span>
              </li>
              <li className="post-item">
                <div className="meta">
                  <time>2020-03-08</time>
                </div>
                <span>
                  <a href="2020/03/closure-currying-and-cool-abstractions/index.html">
                    Closures, Currying, and Cool Abstractions
                  </a>
                </span>
              </li>
              <li className="post-item">
                <div className="meta">
                  <time>2020-02-10</time>
                </div>
                <span>
                  <a href="2020/02/tree-data-structure/index.html">
                    Tree Data Structure
                  </a>
                </span>
              </li>
              <li className="post-item">
                <div className="meta">
                  <time>2020-02-02</time>
                </div>
                <span>
                  <a href="2020/02/linked-list/index.html"> Linked List </a>
                </span>
              </li>
              <li className="post-item">
                <div className="meta">
                  <time>2020-01-13</time>
                </div>
                <span>
                  <a href="2020/01/queue-data-structure/index.html">
                    Queue Data Structure
                  </a>
                </span>
              </li>
              <li className="post-item">
                <div className="meta">
                  <time>2020-01-06</time>
                </div>
                <span>
                  <a href="2020/01/stack-data-structure/index.html">
                    Stack Data Structure
                  </a>
                </span>
              </li>
              <li className="post-item">
                <div className="meta">
                  <time>2020-01-01</time>
                </div>
                <span>
                  <a href="2020/01/building-an-abstraction-for-react-internationalization-messages/index.html">
                    Building an abstraction for React internationalization
                    messages
                  </a>
                </span>
              </li>
              <li className="post-item">
                <div className="meta">
                  <time>2019-09-16</time>
                </div>
                <span>
                  <a href="2019/09/designing-my-learning-experience/index.html">
                    Designing my Learning Experience
                  </a>
                </span>
              </li>
              <li className="post-item">
                <div className="meta">
                  <time>2019-07-07</time>
                </div>
                <span>
                  <a
                    className=""
                    href="2019/07/thoughts-on-my-productivity/index.html"
                  >
                    Thoughts on my productivity
                  </a>
                </span>
              </li>
              <li className="post-item">
                <div className="meta">
                  <time>2018-11-17</time>
                </div>
                <span>
                  <a
                    className=""
                    href="2018/11/functional-programming-principles-in-javascript/index.html"
                  >
                    Functional Programming Principles in JavaScript
                  </a>
                </span>
              </li>
              <li className="post-item">
                <div className="meta">
                  <time>2018-11-15</time>
                </div>
                <span>
                  <a
                    className=""
                    href="2018/11/an-introduction-to-the-basic-principles-of-functional-programming/index.html"
                  >
                    An introduction to the basic principles of Functional
                    Programming
                  </a>
                </span>
              </li>
              <li className="post-item">
                <div className="meta">
                  <time>2018-01-05</time>
                </div>
                <span>
                  <a
                    className=""
                    href="2018/01/understanding-the-basics-of-ruby-on-rails-sql-databases-and-how-they-work/index.html"
                  >
                    Understanding the basics of Ruby on Rails: SQL Databases and
                    how they work
                  </a>
                </span>
              </li>
              <li className="post-item">
                <div className="meta">
                  <time>2018-01-03</time>
                </div>
                <span>
                  <a
                    className=""
                    href="2018/01/actionable-advice-to-start-learning-to-code/index.html"
                  >
                    Actionable advice to start learning to code
                  </a>
                </span>
              </li>
              <li className="post-item">
                <div className="meta">
                  <time>2018-01-02</time>
                </div>
                <span>
                  <a
                    className=""
                    href="2018/01/understanding-the-basics-of-ruby-on-rails-http-mvc-and-routes/index.html"
                  >
                    Understanding the basics of Ruby on Rails: HTTP, MVC, and
                    Routes
                  </a>
                </span>
              </li>
              <li className="post-item">
                <div className="meta">
                  <time>2017-11-05</time>
                </div>
                <span>
                  <a
                    className=""
                    href="2017/11/everything-you-need-to-know-about-tree-data-structures/index.html"
                  >
                    Everything you need to know about tree data structures
                  </a>
                </span>
              </li>
              <li className="post-item">
                <div className="meta">
                  <time>2017-09-30</time>
                </div>
                <span>
                  <a
                    className=""
                    href="2017/09/learning-python-from-zero-to-hero/index.html"
                  >
                    Learning Python From Zero to Hero
                  </a>
                </span>
              </li>
              <li className="post-item">
                <div className="meta">
                  <time>2017-09-28</time>
                </div>
                <span>
                  <a
                    className=""
                    href="2017/09/idiomatic-ruby-writing-beautiful-code/index.html"
                  >
                    Idiomatic Ruby: Writing beautiful code
                  </a>
                </span>
              </li>
              <li className="post-item">
                <div className="meta">
                  <time>2017-09-12</time>
                </div>
                <span>
                  <a
                    className=""
                    href="2017/09/learning-ruby-from-zero-to-hero/index.html"
                  >
                    Learning Ruby From Zero to Hero
                  </a>
                </span>
              </li>
            </ul>
          </section>

          <section id="series">
            <span className="h1">series</span>

            <ul className="project-list">
              <li className="project-item">
                <strong>
                  <a href="series/data-structures/index.html">
                    Data Structures
                  </a>
                </strong>
                : Theory and implementation
              </li>

              <li className="project-item">
                <strong>
                  <a href="series/building-an-interpreter/index.html">
                    Building an Interpreter
                  </a>
                </strong>
                : A compiler from scratch
              </li>

              <li className="project-item">
                <strong>
                  <a href="2020/04/typescript-learnings/index.html">
                    TypeScript Learnings
                  </a>
                </strong>
                : Everything about TS
              </li>

              <li className="project-item">
                <strong>
                  <a href="series/algorithms-problem-solving/index.html">
                    Algorithms Problem Solving
                  </a>
                </strong>
                : Documenting algorithms problems I solved
              </li>

              <li className="project-item">
                <strong>
                  <a href="series/rebuilding-mercaris-search/index.html">
                    Rebuilding Mercari&apos;s Search
                  </a>
                </strong>
                : A Frontend Search Experience Challenge
              </li>
            </ul>
          </section>

          <section id="projects">
            <span className="h1">
              <a
                href="https://github.com/leandrotk"
                target="_blank"
                rel="noopener noreferrer"
              >
                projects
              </a>
            </span>
            <ul className="project-list">
              <li className="project-item">
                <strong>
                  <a
                    href="https://github.com/leandrotk/algorithms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Algorithms
                  </a>
                </strong>
                : Algorithms and Data Structures studies
              </li>
              <li className="project-item">
                <strong>
                  <a
                    href="https://github.com/tk-learning-center/functional-programming-learning-path"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FP
                  </a>
                </strong>
                : A Learning Path for Functional Programming
              </li>
              <li className="project-item">
                <strong>
                  <a
                    href="https://github.com/leandrotk/luhn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Luhn
                  </a>
                </strong>
                : A simple checksum formula for credit cards
              </li>
              <li className="project-item">
                <strong>
                  <a
                    href="https://github.com/leandrotk/pomo-lambda"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PomoLambda
                  </a>
                </strong>
                : A Pomodoro Timer using Functional Programming style
              </li>
              <li className="project-item">
                <strong>
                  <a
                    href="https://github.com/LeandroTk/m2m"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    M2M
                  </a>
                </strong>
                : Transformation of a Medium post into a Markdown file
              </li>
              <li className="project-item">
                <strong>
                  <a
                    href="https://github.com/leandrotk/pokemon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pokemon
                  </a>
                </strong>
                : Understanding Higher Order Functions with Pokemon
              </li>
              <li className="project-item">
                <strong>
                  <a
                    href="https://github.com/leandrotk/rachar-conta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rachar Conta
                  </a>
                </strong>
                : A simple program to split bills with friends
              </li>
              <li className="project-item">
                <strong>
                  <a
                    href="https://github.com/leandrotk/rekommender"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rekommender
                  </a>
                </strong>
                : A Recommender System for profiles connections
              </li>
              <li className="project-item">
                <strong>
                  <a
                    href="https://github.com/leandrotk/year-progress-bar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Year Progress Bar
                  </a>
                </strong>
                : See how the year progress
              </li>
              <li className="project-item">
                <strong>
                  <a
                    href="https://github.com/tk-learning-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TK Gym
                  </a>
                </strong>
                : A Learning Center
              </li>
              <li className="project-item">
                <strong>
                  <a
                    href="https://github.com/leandrotk/laziness/tree/master/packages/boring-test"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Boring Test
                  </a>
                </strong>
                : Automate boring tests
              </li>
              <li className="project-item">
                <strong>
                  <a
                    href="https://github.com/leandrotk/laziness/tree/master/packages/lazy-cypress"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lazy Cypress
                  </a>
                </strong>
                : Automate Cypress integration test in your React app
              </li>
            </ul>
          </section>
        </div>
      </main>

      <footer id="footer">
        <div className="footer-left">Copyright &copy; 2021 TK</div>
        <div className="footer-right">
          <nav>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="writing.html">Writing</a>
              </li>
              <li>
                <a
                  href="https://github.com/leandrotk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Projects
                </a>
              </li>
              <li>
                <a href="quotes.html">Quotes</a>
              </li>
              <li>
                <a href="rss.xml" target="_blank" rel="noopener noreferrer">
                  RSS
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Home;
