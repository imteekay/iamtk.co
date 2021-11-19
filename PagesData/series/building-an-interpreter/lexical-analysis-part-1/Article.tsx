import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  sourceCode8,
  sourceCode9,
  sourceCode10,
  sourceCode11,
  sourceCode12,
  sourceCode13,
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

export const Article: FC = () => (
  <>
    <p>
      Lexical Analysis is the process of transforming the source code into
      tokens. Tokens are an accessible form to ease the way we interpret the
      programming language.
    </p>
    <Image
      src="/series/building-an-interpreter/lexical-analysis.png"
      width={592}
      height={313}
      alt="an illustration on how the lexical analysis process works"
    />
    <p>
      The book <code>Writing an Interpreter in Go</code> shows a very simple
      example to illustrate how lexing works. Imagine this source code:
    </p>
    <Highlight className="typescript">{sourceCode1}</Highlight>
    <p>We read this source code and generate tokens like this:</p>
    <Highlight className="typescript">{sourceCode2}</Highlight>
    <ul>
      <li>
        <code>let</code> will be the <code>LET</code> token
      </li>
      <li>
        <code>x</code> will be the <code>INDENTIFIER</code> token with literal{' '}
        <code>“x“</code>
      </li>
      <li>
        <code>=</code> will be the <code>EQUAL_SIGN</code> token
      </li>
      <li>
        <code>5</code> will be the <code>INTEGER</code> token with literal
        <code>5</code>
      </li>
      <li>
        <code>+</code> will be the <code>PLUS_SIGN</code> token
      </li>
      <li>
        <code>5</code> will be the <code>INTEGER</code> token with literal
        <code>5</code> again
      </li>
      <li>
        <code>;</code> will be the <code>SEMICOLON</code> token
      </li>
    </ul>
    <p>Take a look that we don‘t count “spaces“ as tokens.</p>
    <h2 id="definingtokens">Defining tokens</h2>
    <p>
      To define tokens, I created a class to represent and to create tokens when
      we start to analyze our source code.
    </p>
    <Highlight className="typescript">{sourceCode3}</Highlight>
    <p>
      The implementation is very simple. It contains the token type and the
      literal value. A simple example would be a token like the basic{' '}
      <code>+</code> operator. We create it like this:
    </p>
    <Highlight className="typescript">{sourceCode4}</Highlight>
    <p>
      It has the type <code>PLUS</code> and the literal value
      <code>+</code>.
    </p>
    <p>
      Now let‘s define all the possible token types for the Monkey language.
    </p>
    <Highlight className="typescript">{sourceCode5}</Highlight>
    <p>
      Now we can use the defined tokens instead of a random string. Let‘s see
      the <code>+</code> example again:
    </p>
    <Highlight className="typescript">{sourceCode6}</Highlight>
    <p>Nice!</p>
    <h2 id="lexer">Lexer</h2>
    <p>
      As we saw earlier, the lexer receives the source code and output tokens
      that have a more accessible source code representation.
    </p>
    <p>
      Our lexer will receive the source code input and it‘ll have a method
      called <code>nextToken</code> to output each token while reading the
      source code.
    </p>
    <p>
      To validate our <code>Lexer</code> code, let‘s add tests to match tokens.
    </p>
    <Highlight className="typescript">{sourceCode7}</Highlight>
    <p>Ok, let‘s break it down!</p>
    <ul>
      <li>
        The <code>input</code> is our source code. It‘ll be transformed into
        tokens.
      </li>
      <li>
        The <code>tokens</code> is a list of tokens we expect to match the
        source code.
      </li>
      <li>
        The <code>Lexer</code> is a class to be implemented.
      </li>
      <li>It receives an input as source code.</li>
      <li>
        And have a <code>nextToken</code> method to output the next token.
      </li>
      <li>
        For each token in the list of tokens, we want to test if they match the
        “next token“ from our lexer.
      </li>
    </ul>
    <p>
      Running our test, we get an error as we didn‘t implement our Lexer yet. So
      let‘s do it!
    </p>
    <p>
      To help analyze the source code, we will have 4 different variable
      helpers:
    </p>
    <ul>
      <li>
        <code>input</code>: this is the actual source code.
      </li>
      <li>
        <code>position</code>: the current position of the current char we are
        reading.
      </li>
      <li>
        <code>readPosition</code>: the position we are about to read the next
        char.
      </li>
      <li>
        <code>char</code>: the character of the source code we are reading.
      </li>
    </ul>
    <p>
      With these four parameters, we can build a simple class representing the{' '}
      <code>Lexer</code>.
    </p>
    <Highlight className="typescript">{sourceCode8}</Highlight>
    <p>
      Running our test again, we fix the lexer instantiation. But now we got
      another issue. When reading each token, we expect that the{' '}
      <code>Lexer</code> instance has a <code>nextToken</code> method. But in
      our current lexer implementation, we don‘t do much. We just let it be
      instantiated. Let‘s implement the <code>nextToken</code> method.
    </p>
    <p>
      To get started, we first need to make sure that the lexer starts with its
      variables in the correct state. We do this in the constructor.
    </p>
    <Highlight className="typescript">{sourceCode9}</Highlight>
    <p>
      The initial state for the positions is the index <code>0</code> and the{' '}
      <code>char</code> starts with the empty character (<code>‘‘</code>) state.
    </p>
    <p>
      The <code>nextToken</code> algorithm is very simple in this first
      implementation. We just need to:
    </p>
    <ul>
      <li>read the next character</li>
      <li>transform this character into a token</li>
      <li>return this new token</li>
    </ul>
    <p>
      “read the next character“ is basically the idea of updating the current
      state of the <code>position</code>, the <code>readPosition</code>, and the{' '}
      <code>char</code> variables.
    </p>
    <Highlight className="typescript">{sourceCode10}</Highlight>
    <p>
      We start verifying the <code>readPosition</code> to make sure that we
      didn‘t finish reading the entire source code. If we finish reading the
      source code, we just update the <code>char</code> with its initial state
      (empty string).
    </p>
    <p>
      To get the next character, we just access the input with the next position
      index and update the <code>char</code>.
    </p>
    <p>After that, we always need to update the indices:</p>
    <ul>
      <li>
        <code>position</code> becomes the <code>readPosition</code>
      </li>
      <li>
        <code>readPosition</code> increments by one
      </li>
    </ul>
    <p>
      Now that we read the next character, we can generate the token based on
      this new current state. Here it‘s very simple. We just need to map the
      current <code>char</code> to its own <code>Token</code>. We build this
      with a simple switch case.
    </p>
    <Highlight className="typescript">{sourceCode11}</Highlight>
    <p>
      So let‘s get everything together now. We need to set up the lexer with the
      appropriate state and then start reading the source code. The constructor
      looks like this now:
    </p>
    <Highlight className="typescript">{sourceCode12}</Highlight>
    <p>
      and the <code>nextToken</code> looks like this:
    </p>
    <Highlight className="typescript">{sourceCode13}</Highlight>
    <p>
      As we read the next character in the constructor of the <code>Lexer</code>
      , we can start by getting the token, read the next character and return
      the created token.
    </p>
    <p>
      Running our test again, we fixed all the issues and it is passing now.
    </p>
    <h2 id="finalwordsresources">Final words & Resources</h2>
    <p>
      I‘m very happy to share with you the first post about my journey learning
      compilers and studying programming language theory.
    </p>
    <p>
      This is the first part of the Lexical Analysis posts and part of the{' '}
      <a href="https://leandrotk.github.io/series/building-an-interpreter/">
        Building an Interpreter series
      </a>
      .
    </p>
    <p>These are the resources I‘m using to learn more about this field:</p>
    <ResourcesList resourcesList={resourcesList} />
  </>
);
