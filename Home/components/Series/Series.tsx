import type { NextPage } from 'next';

export const Series: NextPage = () => (
  <section id="series">
    <span className="h1">series</span>

    <ul className="project-list">
      <li className="project-item">
        <strong>
          <a href="series/data-structures/index.html">Data Structures</a>
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
);
