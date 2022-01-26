import { FC } from 'react';

type LayoutPropTypes = {
  title: string;
};

const Layout: FC<LayoutPropTypes> = ({ children, title }) => (
  <div className="content">
    <article
      className="post"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <header>
        <p>{title}</p>
      </header>
      {children}
    </article>
  </div>
);

import type { NextPage } from 'next';
import ReactFlow from 'react-flow-renderer';

import { Dispatch, SetStateAction, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';

type SimpleDialogPropsType = {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
};

const DarkDialog = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    'background-color': '#222222',
    color: 'white',
    '& .content': {
      margin: 0,
      padding: '20px 40px',
    },
  },
}));

const SimpleDialog = ({
  onClose,
  open,
  title,
  content,
}: SimpleDialogPropsType) => (
  <DarkDialog fullWidth onClose={onClose} open={open}>
    <Layout title={title}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  </DarkDialog>
);

type Post = {
  title: string;
  content: string;
};

const idToPost: Record<number, Post> = {
  1: {
    title: 'Post 1',
    content: '<p>Testing id 1</p>',
  },
  2: {
    title: 'Post2',
    content: `<div><p>I created this website a long time ago. At that time, I didn't know any JavaScript framework nor JavaScript, actually. So I made it with Pure HTML and CSS (and some bits of JavaScript).</p>
    <p>Running this website was painful to maintain and create new features. If I wanted to create a new feature for the post page, I needed to replicate for all HTML files and it was more than 50 files. In the era of UI components, the DX is so much better. I create one component and reuse it in the entire application. This was I was aiming for.</p>
    <p>This is why decided to refactor all my website using React. Why React? Just because I like it and I feel fairly proficient in it.</p>
    <hr>
    <p>This post is part of this <a href="/series/website-changelog">Website Changelog</a> and the very first one.</p>
    <p>In this post, we'll setup the project with some nice tooling I've been working on these days. It'll be a NextJS application powered by TypeScript and nice devtools like Prettier, Jest, and the Testing Library.</p>
    <p>We'll also see how to setup husky to help make our codebase consistent running Prettier on pre-commit. Let's dive in.</p>
    <h2 id="nextjs--typescript">NextJS &amp; TypeScript</h2>
    <p>NextJS setup with TypeScript is pretty easy. We just need to use its CLI:</p>
    <pre><code class="hljs language-jsx">yarn create next-app --typescript
    </code></pre>
    <p>And done! We have the whole ready to be run. Just start the dev server and we can see the app running:</p>
    <pre><code class="hljs language-jsx">yarn dev
    </code></pre>
    <p>Now you're able to access <code>[localhost:3000](http://localhost:3000)</code> and see the app running.</p>
    <p>It comes with the whole TypeScript initial setup like:</p>
    <ul>
    <li><code>tsconfig.json</code>: the compiler configuration for the TypeScript</li>
    <li><code>next-env.d.ts</code>: the declaration types for NextJS</li>
    <li><code>_app.tsx</code>: the main app that runs the pages setup with the extension <code>.tsx</code></li>
    <li><code>index.tsx</code>: the <code>/</code> page as an example of a <code>.tsx</code> component</li>
    </ul>
    <h2 id="prettier">Prettier</h2>
    <p>Prettier is an opinionated code formatter. It supports many languages, it's configurable, and it's heavily used in the JavaScript community.</p>
    <p>A couple of days ago, Anthony joked about Prettier not respecting himself. And I said that I love prettier for <em>respecting</em> consistency:</p>
    <p><a href="https://twitter.com/wordsofteekay/status/1399090968301801473">https://twitter.com/leandrotk_/status/1399090968301801473</a></p>
    <p>I think that's the important "word": consistency. When working in a big company with different teams or just many people in the same team, code consistency is key.</p>
    <p>To configure Prettier is very simple. Let's take a look:</p>
    <pre><code class="hljs language-bash">yarn add --dev --exact prettier
    </code></pre>
    <p>Create a file <code>.prettierrc</code>:</p>
    <pre><code class="hljs language-json"><span class="hljs-punctuation">{</span>
      <span class="hljs-attr">"singleQuote"</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">"trailingComma"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"all"</span>
    <span class="hljs-punctuation">}</span>
    </code></pre>
    <p>And the configuration is pretty much it. To make it work in your editor, you'll probably need to install a plugin or extension. I've been using vscode with Prettier and it looks great.</p>
    <p>We can also do other two things to make it more complete:</p>
    <ul>
    <li>Add a <code>.prettierignore</code> file to ignore files that we don't want to run Prettier</li>
    </ul>
    <pre><code class="hljs language-json">node_modules
    .next
    .yarn.lock
    </code></pre>
    <p>For a NextJS project, we'll add the common <code>node_modules</code> folder to the ignore file, the <code>.yarn.lock</code>, and the <code>.next</code> folder that's generated from the NextJS dev build.</p>
    <ul>
    <li>Run prettier on pre-commit to make sure all changes are <em>Prettier</em>.</li>
    </ul>
    <p>To make this works, we can use lint-staged and husky. The easier way is to run this command:</p>
    <pre><code class="hljs language-json">npx mrm@<span class="hljs-number">2</span> lint-staged
    </code></pre>
    <p>It'll configure basically everything you need to run prettier on pre-commit. The only thing that I needed to do was adding the important file extensions for this project, more specifically <code>.tsx</code> and <code>.ts</code>:</p>
    <pre><code class="hljs language-json"><span class="hljs-attr">"lint-staged"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">"*.{js,ts,tsx}"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"eslint --cache --fix"</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">"*.{js,jsx,css,md,ts,tsx}"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"prettier --write"</span>
    <span class="hljs-punctuation">}</span>
    </code></pre>
    <p>This configuration was added by the command in the <code>package.json</code> file. If you add a new file with any of these extensions, it'll run prettier on each file that is in the git staged area before the commit.</p>
    <p>Great, now we can make sure the project's code will be consistent from beginning to the end.</p>
    <h2 id="testing-with-jest-and-testing-library">Testing with Jest and Testing Library</h2>
    <p>Testing is a big part of a project's setup. When building software, we want to ship it with confidence that it really works. Not only now, but across many releases we'll do. Automation is also important in terms of velocity.</p>
    <p>To be able to have this confidence, I always rely on Jest, a testing framework, and the Testing Library + its helpers to do the job. First jest:</p>
    <pre><code class="hljs language-bash">yarn add -D jest @types/jest babel-jest jest-axe @types/jest-axe
    </code></pre>
    <ul>
    <li><code>jest</code>: the testing framework</li>
    <li><code>@types/jest</code>: the types to work well with TypeScript</li>
    <li><code>babel-jest</code>: compiles JavaScript code for the tests files</li>
    <li><code>jest-axe</code>: a custom Jest matcher to handle accessibility testing</li>
    <li><code>@types/jest-axe</code>: the types to work well with TypeScript</li>
    </ul>
    <p>After installing all the necessary dependencies, we need to add the configuration.</p>
    <p><code>jest.setup.js</code>:</p>
    <pre><code class="hljs language-jsx"><span class="hljs-keyword">import</span> <span class="hljs-string">'jest-axe/extend-expect'</span>;
    </code></pre>
    <p><code>jest.config.js</code>:</p>
    <pre><code class="hljs language-jsx"><span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
      <span class="hljs-attr">setupFilesAfterEnv</span>: [<span class="hljs-string">'./jest.setup.js'</span>],
      <span class="hljs-attr">testEnvironment</span>: <span class="hljs-string">'jsdom'</span>,
    };
    </code></pre>
    <p><code>.babelrc</code>:</p>
    <pre><code class="hljs language-json"><span class="hljs-punctuation">{</span>
      <span class="hljs-attr">"presets"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-string">"next/babel"</span><span class="hljs-punctuation">]</span>
    <span class="hljs-punctuation">}</span>
    </code></pre>
    <p><code>package.json</code>:</p>
    <pre><code class="hljs language-json"><span class="hljs-punctuation">{</span>
      ...
        <span class="hljs-attr">"test"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"jest"</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">"test:watch"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"jest --watch"</span>
        ...
    <span class="hljs-punctuation">}</span>
    </code></pre>
    <p>And now we are able to run our tests by calling these commands:</p>
    <pre><code class="hljs language-bash">yarn <span class="hljs-built_in">test</span>
    yarn <span class="hljs-built_in">test</span>:watch
    </code></pre>
    <p>For the Testing Library, it's simpler. We just need to install it and start using it.</p>
    <pre><code class="hljs language-json">yarn add -D @testing-library/react @testing-library/jest-dom
    </code></pre>
    <ul>
    <li><code>@testing-library/react</code>: the testing tool to test react components</li>
    <li><code>@testing-library/jest-dom</code>: it provides custom matchers for jest. I really like to use the <code>toBeInTheDocument</code> matcher for component testing.</li>
    </ul>
    <p>The only configuration I needed to do was adding the <code>jest-dom</code> to the testing setup to enable the matchers for test files.</p>
    <p><code>jest.setup.js</code>:</p>
    <pre><code class="hljs language-jsx"><span class="hljs-keyword">import</span> <span class="hljs-string">'@testing-library/jest-dom'</span>;
    <span class="hljs-keyword">import</span> <span class="hljs-string">'jest-axe/extend-expect'</span>;
    </code></pre>
    <p>I didn't setup Cypress because I want to focus on the search implementation first, but we'll see in the last episodes of this series that we'll try to implement an integration test with Cypress to test our app.</p>
    <h2 id="continuous-integration">Continuous Integration</h2>
    <p>I also automated some code checking with the help of Github actions. I created a workflow to run on every push and the ideas is to type check my code, check code format, run lint, and run tests.</p>
    <p>To start, I run an action to setup the node version based on my <code>.nvmrc</code>.</p>
    <pre><code class="hljs language-yaml"><span class="hljs-bullet">-</span> <span class="hljs-attr">uses:</span> <span class="hljs-string">actions/checkout@v2</span>
    <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Read</span> <span class="hljs-string">.nvmrc</span>
      <span class="hljs-attr">run:</span> <span class="hljs-string">echo</span> <span class="hljs-string">"##[set-output name=NVMRC;]$(cat .nvmrc)"</span>
      <span class="hljs-attr">id:</span> <span class="hljs-string">nvm</span>
    
    <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Use</span> <span class="hljs-string">Node.js</span> <span class="hljs-string">(.nvmrc)</span>
      <span class="hljs-attr">uses:</span> <span class="hljs-string">actions/setup-node@v2</span>
      <span class="hljs-attr">with:</span>
        <span class="hljs-attr">node-version:</span> <span class="hljs-string">'$<span class="hljs-template-variable">{{ steps.nvm.outputs.NVMRC }}</span>'</span>
    </code></pre>
    <p>And the machine is able to install all dependencies.</p>
    <pre><code class="hljs language-yaml"><span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Install</span> <span class="hljs-string">dependencies</span>
      <span class="hljs-attr">run:</span> <span class="hljs-string">yarn</span>
    </code></pre>
    <p>And then the following steps I mentioned. Type check code with Typescript.</p>
    <pre><code class="hljs language-yaml"><span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Type</span> <span class="hljs-string">check</span> <span class="hljs-string">code</span> <span class="hljs-string">w/</span> <span class="hljs-string">TypeScript</span>
      <span class="hljs-attr">run:</span> <span class="hljs-string">yarn</span> <span class="hljs-string">typecheck</span>
    </code></pre>
    <p>Check code format with Prettier:</p>
    <pre><code class="hljs language-yaml"><span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Check</span> <span class="hljs-string">code</span> <span class="hljs-string">format</span> <span class="hljs-string">w/</span> <span class="hljs-string">Prettier</span>
      <span class="hljs-attr">run:</span> <span class="hljs-string">yarn</span> <span class="hljs-string">prettier:check</span>
    </code></pre>
    <p>Analyze code with ESLint:</p>
    <pre><code class="hljs language-yaml"><span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Analyze</span> <span class="hljs-string">code</span> <span class="hljs-string">w/</span> <span class="hljs-string">ESLint</span>
      <span class="hljs-attr">run:</span> <span class="hljs-string">yarn</span> <span class="hljs-string">lint</span>
    </code></pre>
    <p>Test code with Jest:</p>
    <pre><code class="hljs language-yaml"><span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Test</span> <span class="hljs-string">code</span> <span class="hljs-string">w/</span> <span class="hljs-string">Jest</span>
      <span class="hljs-attr">run:</span> <span class="hljs-string">yarn</span> <span class="hljs-string">test</span>
    </code></pre>
    <p>And this is the entire file.</p>
    <pre><code class="hljs language-yaml"><span class="hljs-attr">name:</span> <span class="hljs-string">Push</span> <span class="hljs-string">CI</span>
    
    <span class="hljs-attr">on:</span> [<span class="hljs-string">push</span>]
    
    <span class="hljs-attr">jobs:</span>
      <span class="hljs-attr">build:</span>
        <span class="hljs-attr">runs-on:</span> <span class="hljs-string">ubuntu-latest</span>
        <span class="hljs-attr">steps:</span>
          <span class="hljs-bullet">-</span> <span class="hljs-attr">uses:</span> <span class="hljs-string">actions/checkout@v2</span>
          <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Read</span> <span class="hljs-string">.nvmrc</span>
            <span class="hljs-attr">run:</span> <span class="hljs-string">echo</span> <span class="hljs-string">"##[set-output name=NVMRC;]$(cat .nvmrc)"</span>
            <span class="hljs-attr">id:</span> <span class="hljs-string">nvm</span>
    
          <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Use</span> <span class="hljs-string">Node.js</span> <span class="hljs-string">(.nvmrc)</span>
            <span class="hljs-attr">uses:</span> <span class="hljs-string">actions/setup-node@v2</span>
            <span class="hljs-attr">with:</span>
              <span class="hljs-attr">node-version:</span> <span class="hljs-string">'$<span class="hljs-template-variable">{{ steps.nvm.outputs.NVMRC }}</span>'</span>
    
          <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Install</span> <span class="hljs-string">dependencies</span>
            <span class="hljs-attr">run:</span> <span class="hljs-string">yarn</span>
    
          <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Type</span> <span class="hljs-string">check</span> <span class="hljs-string">code</span> <span class="hljs-string">w/</span> <span class="hljs-string">TypeScript</span>
            <span class="hljs-attr">run:</span> <span class="hljs-string">yarn</span> <span class="hljs-string">typecheck</span>
    
          <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Check</span> <span class="hljs-string">code</span> <span class="hljs-string">format</span> <span class="hljs-string">w/</span> <span class="hljs-string">Prettier</span>
            <span class="hljs-attr">run:</span> <span class="hljs-string">yarn</span> <span class="hljs-string">prettier:check</span>
    
          <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Analyze</span> <span class="hljs-string">code</span> <span class="hljs-string">w/</span> <span class="hljs-string">ESLint</span>
            <span class="hljs-attr">run:</span> <span class="hljs-string">yarn</span> <span class="hljs-string">lint</span>
    </code></pre>
    <p>In the future, I have a task to implement integration tests with Cypress and gain more confidence when shipping new features or changes. And it will requires me to add a new step to run cypress tests on CI as well.</p>
    <h2 id="final-words">Final words</h2>
    <p>I'm pretty happy with this new setup. I'm even happier that the DX will improve a lot and it will enable me to improve the website and write more well-crafted content for everybody.</p>
    </div>`,
  },
};

const getElements = ({
  setId,
  setOpen,
}: {
  setId: Dispatch<SetStateAction<number>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => [
  {
    id: '1',
    data: { label: 'Node 1' },
    position: { x: 0, y: 0 },
  },
  {
    id: '2',
    data: {
      label: (
        <div
          onClick={() => {
            setId(2);
            setOpen(true);
          }}
        >
          Node 2
        </div>
      ),
    },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    data: { label: 'Node 3' },
    position: { x: 250, y: 250 },
  },
  {
    id: '4',
    data: { label: 'Node 4' },
    position: { x: 200, y: 200 },
  },
  {
    id: '5',
    data: { label: 'Node 5' },
    position: { x: 300, y: 300 },
  },
  {
    id: '6',
    data: { label: 'Node 6' },
    position: { x: 400, y: 400 },
  },
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e2-4', source: '2', target: '4', animated: true },
  { id: 'e2-5', source: '2', target: '5', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
  { id: 'e4-5', source: '4', target: '5', animated: true },
  { id: 'e2-6', source: '2', target: '6', animated: true },
  { id: 'e5-6', source: '5', target: '6', animated: true },
];

const Page: NextPage = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(1);
  const elements = getElements({ setId, setOpen });
  const { title, content } = idToPost[id];

  return (
    <>
      <ReactFlow elements={elements} />
      <SimpleDialog
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        content={content}
      />
    </>
  );
};

export default Page;
