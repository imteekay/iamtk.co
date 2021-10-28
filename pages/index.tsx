import type { NextPage } from 'next';
import Head from 'next/head';
import { SkipLink } from '../Home/components/SkipLink';
import { Title } from '../Home/components/Title';
import { About } from '../Home/components/About';
import { Writings } from '../Home/components/Writings';

const Home: NextPage = () => {
  return (
    <>
      <SkipLink />
      <main id="main">
        <div className="content index width mx-auto px2 my4">
          <Title text="TK" />
          <About />
          <Writings />

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
