import { FC } from 'react';
import Link from 'next/link';
import Highlight from 'react-highlight';
import { ResourcesList } from 'Base/Article/ResourcesList';
import {
  sourceCode1,
  sourceCode2,
  sourceCode3,
  sourceCode4,
  sourceCode5,
  sourceCode6,
  sourceCode7,
} from './sourceCode';

const resourcesList = [
  {
    link: 'https://github.com/leandrotk/monkey-ts',
    title:
      'monkey-ts: the open source project of the compiler for the TypeScript version of the Monkey programming language.',
  },
  {
    link: 'https://github.com/leandrotk/programming-language-theory',
    title:
      'Programming Language Theory: a bunch of resources about my studies on Programming Language Theory & Applied PLT.',
  },
  {
    link: 'https://www.goodreads.com/book/show/32681092-writing-an-interpreter-in-go',
    title:
      "Writing an Interpreter in Go: the book I'm reading to learn and implement the Monkey compiler.",
  },
];

const seriesList = [
  {
    link: '/series/building-an-interpreter/lexical-analysis-part-1',
    title: 'Building an Interpreter: Lexical Analysis - Part 1',
  },
  {
    link: '/series/building-an-interpreter/lexical-analysis-part-2',
    title: 'Building an Interpreter: Lexical Analysis - Part 2',
  },
  {
    link: '/series/building-an-interpreter/lexical-analysis-part-3',
    title: 'Building an Interpreter: Lexical Analysis - Part 3',
  },
];

export const Article: FC = () => (
  <>
    <p>
      This post is part of a series called{' '}
      <Link href="/series/building-an-interpreter">
        Building an Interpreter
      </Link>
      .
    </p>
    <p>
      Now that we implemented the{' '}
      <Link href="/series/building-an-interpreter/lexical-analysis-part-1">
        first steps of our lexer
      </Link>
      ,{' '}
      <Link href="/series/building-an-interpreter/lexical-analysis-part-2">
        more complex tokens
      </Link>
      , and{' '}
      <Link href="/series/building-an-interpreter/lexical-analysis-part-3">
        extended the token set with special characters
      </Link>
      , we want to take a step back and implement a REPL and print the tokens
      using our lexer.
    </p>
    <p>
      A REPL stands for Read-Eval-Print-Loop, and it is an interactive
      environment that “reads“ the input, “evaluates“ and “prints“ it. And then
      do it all over again (loop).
    </p>
    <p>
      As we only have the token yet, we‘ll just print tokens related to the user
      input.
    </p>
    <p>An example would be if we type this in the REPL:</p>
    <Highlight className="bash">{sourceCode1}</Highlight>
    <p>We‘ll get the tokens related to this input</p>
    <Highlight className="bash">{sourceCode2}</Highlight>
    <p>Nice, let‘s implement it!</p>
    <h2 id="buildingtherepl">Building the REPL</h2>
    <p>To build the REPL, I listed some ideas behind it:</p>
    <ul>
      <li>We need to share a prompt to read the user input</li>
      <li>
        When the user types code and clicks enter, we should print the tokens
        related to the input
      </li>
      <li>After printing the token, we need to share a prompt again</li>
      <li>If the user types “exit“ or “quit“, we want to close the REPL</li>
    </ul>
    <p>These are the building blocks.</p>
    <p>
      To share the prompt and read the user input, we can use the{' '}
      <code>readline</code> from Node‘s API.
    </p>
    <Highlight className="typescript">{sourceCode3}</Highlight>
    <p>
      With this code, we can share the prompt with <code>&gt;</code> and read
      the user input.
    </p>
    <p>
      Now that we have the user input, we need to be aware of if the input is{' '}
      <code>“quit“</code> or <code>“exit“</code>. If it is, just close the REPL.
    </p>
    <Highlight className="typescript">{sourceCode4}</Highlight>
    <p>
      Built an object and an array to have all the possible ways to exit the
      REPL, and verify if the input is included in these possible exits. If it
      is, close the REPL. If it isn‘t, we are able to print the tokens.
    </p>
    <p>
      To print the tokens, we need to instantiate our Lexer class with the
      input, and print token by token until it gets an <code>EOF</code> token
      type.
    </p>
    <Highlight className="typescript">{sourceCode5}</Highlight>
    <p>
      After printing the token, we want to share the prompt again for the user
      to type more code. We can do this with a recursive approach.
    </p>
    <p>
      The idea is to wrap all this code into a function and call itself in the
      end like this:
    </p>
    <Highlight className="typescript">{sourceCode6}</Highlight>
    <p>
      To finish the REPL, I wanted to wrap this code into a{' '}
      <code>startRepl</code> function with a “Welcome to monkey.ts“ print before
      letting the user type code.
    </p>
    <Highlight className="typescript">{sourceCode7}</Highlight>
    <p>And now we can call it anywhere in our code to start the REPL.</p>
    <h2 id="finalwordsresources">
      <strong>Final words & Resources</strong>
    </h2>
    <p>
      If you didn‘t have the opportunity, take a look at the posts from the{' '}
      <Link href="/series/building-an-interpreter">
        Building an Interpreter series
      </Link>
      :
    </p>

    <ResourcesList resourcesList={seriesList} />

    <p>These are the resources I‘m using to learn more about this field:</p>
    <ResourcesList resourcesList={resourcesList} />
  </>
);
