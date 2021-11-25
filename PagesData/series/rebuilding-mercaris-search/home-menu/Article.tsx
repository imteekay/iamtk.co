import Link from 'next/link';
import { FC } from 'react';
import Highlight from 'react-highlight';

import * as sourceCode from './sourceCode';

export const Article: FC = () => (
  <>
    <p>
      This is the second post of the{' '}
      <Link href="/series/rebuilding-mercaris-search">
        Rebuilding Mercari‘s Search series
      </Link>
      .
    </p>
    <p>
      In this post, we‘ll talk about the home and the menu drafts. Before
      starting to implement the search, the filter, and the products list, I
      wanted to add a very simple home and a very simple menu to do the
      navigation between the home (url: <code>/</code>) and the search (url:{' '}
      <code>/search</code>) pages.
    </p>
    <p>
      As we start to implement UI, I should tell you that my focus on this
      project was to do the logic, state management, and tests. This is why I
      was looking for a UI framework to work as my design system. With this
      idea, I don‘t need to work heavily with CSS.
    </p>
    <p>
      I chose Material UI, because I‘m familiar with it, so I can focus on other
      parts instead of learning a new framework now.
    </p>
    <p>
      So let‘s install the library and start implement the home and the menu.
    </p>
    <Highlight className="bash">{sourceCode.sourceCode1}</Highlight>
    <p>
      The home is just a page with a title for now as I want to focus on the
      navigation between the home and the search.
    </p>
    <p>
      So the home, that will live in the <code>/</code> url, will have the menu
      to navigate to the search page, which will live in the{' '}
      <code>/search</code> url for now.
    </p>
    <p>This is the home with the title:</p>
    <Highlight className="typescript tsx">{sourceCode.sourceCode2}</Highlight>
    <p>
      This component page lives in the <code>pages/index.tsx</code> as NextJS
      does routing based on the folder and file structures.
    </p>
    <p>
      To make all the pages have a menu to be able to navigate to other places,
      we need to add it to the <code>pages/_app.tsx</code> file. But to be able
      to do that, let‘s first implement our Menu component.
    </p>
    <p>
      To simplify the menu at first, I wanted to add a button that will open or
      close the menu showing or hiding the menu items.
    </p>
    <Highlight className="typescript tsx">{sourceCode.sourceCode3}</Highlight>
    <p>
      This is the first part. Nothing much here. We need the{' '}
      <code>handleClick</code> function now.
    </p>
    <Highlight className="typescript tsx">{sourceCode.sourceCode4}</Highlight>
    <p>
      The <code>handleClick</code> function only manage the state related to the{' '}
      <code>anchorEl</code>.
    </p>
    <p>
      The rest of the menu UI is pretty simple, we only need to use the{' '}
      <code>Menu</code> and the <code>MenuItem</code> from the Material UI.
    </p>
    <Highlight className="typescript tsx">{sourceCode.sourceCode5}</Highlight>
    <p>
      We know about the <code>anchorEl</code>, but we need to implement the{' '}
      <code>handleClose</code> function, the <code>menuItems</code> list, and
      the <code>MenuItem</code> type.
    </p>
    <p>
      The <code>MenuItem</code> is a “type“ representation for each item:
    </p>
    <Highlight className="typescript tsx">{sourceCode.sourceCode6}</Highlight>
    <p>
      The <code>menuItems</code> is the simplest as it is just a list of items
      passed as a prop to this menu component. But we need to make sure it is
      passed and the “type“ representation of this list is in the function
      component contract.
    </p>
    <Highlight className="typescript tsx">{sourceCode.sourceCode7}</Highlight>
    <p>
      And the <code>handleClose</code> function only undo what the{' '}
      <code>handleClick</code> does: reset the <code>anchorEl</code> with a{' '}
      <code>null</code> value.
    </p>
    <Highlight className="typescript tsx">{sourceCode.sourceCode8}</Highlight>
    <p>
      Nice! The menu is not complete nor pretty, but it‘s functional now. We can
      start using in our app. To be able to reuse for all pages (for this app,
      it‘ll be for the home and the search pages), we just need to add it to the{' '}
      <code>_app.tsx</code> file.
    </p>
    <Highlight className="typescript tsx">{sourceCode.sourceCode9}</Highlight>
    <p>
      The <code>Component</code> is each page we want to create and we add the{' '}
      <code>Menu</code> at the top of the page. As we saw earlier, we need to
      pass the <code>menuItems</code> with the type contract we built in the
      menu. It‘s also nice that we can reuse the types to make the data
      consistent.
    </p>
    <h2 id="finalwords">Final words</h2>
    <p>
      This was the second post of the <em>Rebuilding Mercari‘s Search</em>{' '}
      series and I hope this also provides value to you. In this post, we start
      creating the building blocks for the app by adding a very simple home and
      menu for navigation.
    </p>
    <p>
      For the following post, we‘ll talk about the implementation of the search
      page, where we‘ll focus on the products list UI first.
    </p>
    <h2 id="resources">Resources</h2>
    <ul>
      <li>
        <a href="https://github.com/leandrotk/mercari-search/pull/1">
          Home & Menu Pull Request
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
