import Link from 'next/link';
import { FC } from 'react';
import Highlight from 'react-highlight';

import * as sourceCode from './sourceCode';

export const Article: FC = () => (
  <>
    <p>
      This post is part of the{' '}
      <em>
        <Link href="/series/rebuilding-mercaris-search">
          Rebuilding Mercari‘s Search series
        </Link>
      </em>
      and the very first one.
    </p>
    <p>
      In this post, we‘ll setup the project with some nice tooling I‘ve been
      working on these days. It‘ll be a NextJS application powered by TypeScript
      and nice devtools like Prettier, Jest, and the Testing Library.
    </p>
    <p>
      We‘ll also see how to setup husky to help make our codebase consistent
      running Prettier on pre-commit. Let‘s dive in.
    </p>
    <h2 id="nextjstypescript">NextJS & TypeScript</h2>
    <p>
      NextJS setup with TypeScript is pretty easy. We just need to use its CLI:
    </p>
    <Highlight className="bash">{sourceCode.sourceCode1}</Highlight>
    <p>
      And done! We have the whole ready to be run. Just start the dev server and
      we can see the app running:
    </p>
    <Highlight className="bash">{sourceCode.sourceCode2}</Highlight>
    <p>
      Now you‘re able to access <code>localhost:3000</code> and see the app
      running.
    </p>
    <p>It comes with the whole TypeScript initial setup like:</p>
    <ul>
      <li>
        <code>tsconfig.json</code>: the compiler configuration for the
        TypeScript
      </li>
      <li>
        <code>next-env.d.ts</code>: the declaration types for NextJS
      </li>
      <li>
        <code>_app.tsx</code>: the main app that runs the pages setup with the
        extension <code>.tsx</code>
      </li>
      <li>
        <code>index.tsx</code>: the <code>/</code> page as an example of a
        <code>.tsx</code> component
      </li>
    </ul>
    <h2 id="prettier">Prettier</h2>
    <p>
      Prettier is an opinionated code formatter. It supports many languages,
      it‘s configurable, and it‘s heavily used in the JavaScript community.
    </p>
    <p>
      A couple of days ago, Anthony joked about Prettier not respecting himself.
      And I said that I love prettier for
      <em>respecting</em> consistency:
    </p>
    <blockquote className="twitter-tweet">
      <p lang="en" dir="ltr">
        I love prettier for respecting consistency.
        <a href="https://t.co/NeIqokmmrs">https://t.co/NeIqokmmrs</a>
      </p>
      &mdash; TK (@leandrotk_)
      <a href="https://twitter.com/leandrotk_/status/1399090968301801473?ref_src=twsrc%5Etfw">
        May 30, 2021
      </a>
    </blockquote>
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charSet="utf-8"
    ></script>
    <p>
      I think that‘s the important “word“: consistency. When working in a big
      company with different teams or just many people in the same team, code
      consistency is key.
    </p>
    <p>To configure Prettier is very simple. Let‘s take a look:</p>
    <Highlight className="bash">{sourceCode.sourceCode3}</Highlight>
    <p>
      Create a file <code>.prettierrc</code>:
    </p>
    <Highlight className="json">{sourceCode.sourceCode4}</Highlight>
    <p>
      And the configuration is pretty much it. To make it work in your editor,
      you‘ll probably need to install a plugin or extension. I‘ve been using
      vscode with Prettier and it looks great.
    </p>
    <p>We can also do other two things to make it more complete:</p>
    <ul>
      <li>
        Add a <code>.prettierignore</code> file to ignore files that we don‘t
        want to run Prettier
      </li>
    </ul>
    <Highlight className="bash">{sourceCode.sourceCode5}</Highlight>
    <p>
      For a NextJS project, we‘ll add the common
      <code>node_modules</code> folder to the ignore file, the
      <code>.yarn.lock</code>, and the <code>.next</code> folder that‘s
      generated from the NextJS dev build.
    </p>
    <ul>
      <li>
        Run prettier on pre-commit to make sure all changes are
        <em>Prettier</em>.
      </li>
    </ul>
    <p>
      To make this works, we can use lint-staged and husky. The easier way is to
      run this command:
    </p>
    <Highlight className="bash">{sourceCode.sourceCode6}</Highlight>
    <p>
      It‘ll configure basically everything you need to run prettier on
      pre-commit. The only thing that I needed to do was adding the important
      file extensions for this project, more specifically
      <code>.tsx</code> and <code>.ts</code>:
    </p>
    <Highlight className="json">{sourceCode.sourceCode7}</Highlight>
    <p>
      This configuration was added by the command in the
      <code>package.json</code> file. If you add a new file with any of these
      extensions, it‘ll run prettier on each file that is in the git staged area
      before the commit.
    </p>
    <p>
      Great, now we can make sure the project‘s code will be consistent from
      beginning to the end.
    </p>
    <h2 id="testingwithjestandtestinglibrary">
      Testing with Jest and Testing Library
    </h2>
    <p>
      Testing is a big part of a project‘s setup. When building software, we
      want to ship it with confidence that it really works. Not only now, but
      across many releases we‘ll do. Automation is also important in terms of
      velocity.
    </p>
    <p>
      To be able to have this confidence, I always rely on Jest, a testing
      framework, and the Testing Library + its helpers to do the job. First
      jest:
    </p>
    <Highlight className="bash">{sourceCode.sourceCode15}</Highlight>
    <ul>
      <li>
        <code>jest</code>: the testing framework
      </li>
      <li>
        <code>@types/jest</code>: the types to work well with TypeScript
      </li>
      <li>
        <code>babel-jest</code>: compiles JavaScript code for the tests files
      </li>
      <li>
        <code>jest-axe</code>: a custom Jest matcher to handle accessibility
        testing
      </li>
      <li>
        <code>@types/jest-axe</code>: the types to work well with TypeScript
      </li>
    </ul>
    <p>
      After installing all the necessary dependencies, we need to add the
      configuration.
    </p>
    <p>
      <code>jest.setup.js</code>:
    </p>
    <Highlight className="tsx jsx">{sourceCode.sourceCode8}</Highlight>
    <p>
      <code>jest.config.js</code>:
    </p>
    <Highlight className="js">{sourceCode.sourceCode9}</Highlight>
    <p>
      <code>.babelrc</code>:
    </p>
    <Highlight className="json">{sourceCode.sourceCode10}</Highlight>
    <p>
      <code>package.json</code>:
    </p>
    <Highlight className="json">{sourceCode.sourceCode11}</Highlight>
    <p>And now we are able to run our tests by calling these commands:</p>
    <Highlight className="bash">{sourceCode.sourceCode12}</Highlight>
    <p>
      For the Testing Library, it‘s simpler. We just need to install it and
      start using it.
    </p>
    <Highlight className="bash">{sourceCode.sourceCode13}</Highlight>
    <ul>
      <li>
        <code>@testing-library/react</code>: the testing tool to test react
        components
      </li>
      <li>
        <code>@testing-library/jest-dom</code>: it provides custom matchers for
        jest. I really like to use the
        <code>toBeInTheDocument</code> matcher for component testing.
      </li>
    </ul>
    <p>
      The only configuration I needed to do was adding the
      <code>jest-dom</code> to the testing setup to enable the matchers for test
      files.
    </p>
    <p>
      <code>jest.setup.js</code>:
    </p>
    <Highlight className="typescript">{sourceCode.sourceCode14}</Highlight>
    <p>
      I didn‘t setup Cypress because I want to focus on the search
      implementation first, but we‘ll see in the last episodes of this series
      that we‘ll try to implement an integration test with Cypress to test our
      app.
    </p>
    <h2 id="finalwords">Final words</h2>
    <p>
      I‘m very happy with this first post of the{' '}
      <em>Rebuilding Mercari‘s Search</em> series and I hope this also provides
      value and knowledge when it comes to starting a new project, adding
      valuable frontend tooling, and setup NextJS.
    </p>
    <p>
      For the following post, we‘ll talk about a simple implementation of the
      home page and menu using React together with TypeScript.
    </p>
    <h2 id="resources">Resources</h2>
    <ul>
      <li>
        <a href="https://github.com/leandrotk/mercari-search/pull/1/">
          Project Set up + Home: Pull Request
        </a>
      </li>
      <li>
        <a href="https://github.com/leandrotk/mercari-search/pull/3">
          Configure husky and lint-staged to run prettier on pre-commit: Pull
          Request
        </a>
      </li>
      <li>
        <a href="https://github.com/leandrotk/mercari-search">
          mercari-search repo
        </a>
      </li>
    </ul>
    <p>Have fun, keep learning, and always keep coding!</p>
  </>
);
