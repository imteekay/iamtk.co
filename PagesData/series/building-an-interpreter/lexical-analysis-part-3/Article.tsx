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
  sourceCode8,
  sourceCode9,
  sourceCode10,
  sourceCode11,
  sourceCode12,
  sourceCode13,
  sourceCode14,
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
      This post is part of a series called{' '}
      <Link href="/series/building-an-interpreter">
        Building an Interpreter
      </Link>
      . After implementing a{' '}
      <Link href="/series/building-an-interpreter/lexical-analysis-part-1">
        basic lexer
      </Link>{' '}
      and{' '}
      <Link href="/series/building-an-interpreter/lexical-analysis-part-2">
        building more tokens
      </Link>
      , we‘ll extend the token set to work with special characters, new
      keywords, and the “equal“ and “not equal“ symbols.
    </p>

    <p>
      Let‘s add support for <code>==</code>, <code>!</code>, <code>!=</code>,{' '}
      <code>-</code>, <code>/</code>, <code>*</code>, <code>&lt;</code>,{' '}
      <code>&gt;</code>, and the keywords <code>true</code>, <code>false</code>,{' '}
      <code>if</code>,<code>else</code>, and <code>return</code>.
    </p>
    <h2 id="singlecharactersastokens">Single characters as tokens</h2>
    <p>
      First, the single characters, as they are the easiest ones to handle in
      the lexer.
    </p>
    <p>We add this to the test:</p>
    <Highlight className="typescript">{sourceCode1}</Highlight>
    <p>Add new tokens:</p>
    <Highlight className="typescript">{sourceCode2}</Highlight>
    <p>And finally, add the expectations in the test:</p>
    <Highlight className="typescript">{sourceCode3}</Highlight>
    <p>
      Now we just need to implement the lexer part to generate these token based
      on the source code:
    </p>
    <Highlight className="typescript">{sourceCode4}</Highlight>
    <p>If we run the tests again, we make all green and passing.</p>
    <h2 id="buildingnewkeywordsastokens">Building new keywords as tokens</h2>
    <p>
      The process of building the tokens for the new keyword is pretty similar
      to the single characters.
    </p>
    <p>Add the input to the test:</p>
    <Highlight className="typescript">{sourceCode5}</Highlight>
    <p>Now add the expected tokens in the test:</p>
    <Highlight className="typescript">{sourceCode6}</Highlight>
    <p>And the new tokens:</p>
    <Highlight className="typescript">{sourceCode7}</Highlight>
    <p>
      But the difference is that we also need to update the{' '}
      <code>Keywords</code> object to having the new tokens and be used in the{' '}
      <code>lookupIdent</code> function:
    </p>
    <Highlight className="typescript">{sourceCode8}</Highlight>
    <p>Running the tests again, we get all green and passing.</p>
    <h2 id="theequalandnotequaloperators">The Equal and Not Equal operators</h2>
    <p>
      What we want to do now is to build the Equal and Not Equal tokens. We
      start adding the source code we need to handle:
    </p>
    <Highlight className="typescript">{sourceCode9}</Highlight>
    <p>The expected tokens are:</p>
    <Highlight className="typescript">{sourceCode10}</Highlight>
    <p>Then we need to add the new tokens:</p>
    <Highlight className="typescript">{sourceCode11}</Highlight>
    <p>Now we are ready to implement the lexer part for these new tokens.</p>
    <p>
      First, the <code>==</code>. Every time we get the character <code>=</code>
      , we need to be aware of if the next character is a <code>=</code> char.
      If it is, we return the token type <code>Equal</code>. If it‘s not, we
      just return the token type <code>Assign</code>.
    </p>
    <p>
      To search for the next character, let‘s build a new method to handle that
      for us: <code>peekChar</code>.
    </p>
    <Highlight className="typescript">{sourceCode12}</Highlight>
    <p>
      It‘s a simple method: if we get to the end of the source code, we return
      an empty string. Otherwise, it returns the next character.
    </p>
    <p>
      Now it becomes very easy to implement the lexer algorithm for the{' '}
      <code>==</code> token:
    </p>
    <Highlight className="typescript">{sourceCode13}</Highlight>
    <p>
      Inside the case of a <code>=</code> character, we see if the next
      character is also <code>=</code> with the help of our new method{' '}
      <code>peekChar</code>.
    </p>
    <p>
      If it is, read the next character to update the <code>position</code> and
      the <code>readPosition</code>‘s states and return the new token type{' '}
      <code>EQUAL</code>.
    </p>
    <p>
      If it is not, just return the already implemented token type{' '}
      <code>ASSIGN</code>.
    </p>
    <p>
      We actually do this same implementation for the <code>NOT_EQUAL</code>{' '}
      token type:
    </p>
    <Highlight className="typescript">{sourceCode14}</Highlight>
    <p>
      But now we are looking at the <code>!</code> character.
    </p>
    <h2 id="finalwordsresources">
      <strong>Final words & Resources</strong>
    </h2>
    <p>
      If you didn‘t have the opportunity, take a look at the{' '}
      <Link href="/series/building-an-interpreter/lexical-analysis-part-1">
        first
      </Link>{' '}
      and the{' '}
      <Link href="/series/building-an-interpreter/lexical-analysis-part-2">
        second part of the Lexical Analysis
      </Link>
      . This is the third post about my journey learning compilers and studying
      programming language theory. And part of the{' '}
      <Link href="/series/building-an-interpreter/">
        Building an Interpreter series
      </Link>
      .
    </p>
    <p>These are the resources I‘m using to learn more about this field:</p>

    <ResourcesList resourcesList={resourcesList} />
  </>
);
