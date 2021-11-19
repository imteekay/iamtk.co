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
  sourceCode14,
  sourceCode15,
  sourceCode16,
  sourceCode17,
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
      . The{' '}
      <Link href="/series/building-an-interpreter/lexical-analysis-part-1">
        first part of the Lexical Analysis
      </Link>{' '}
      post illustrated a basic lexer creating tokens from a simple source code.
    </p>
    <p>
      In this post we‘ll extend the tests and improve the <code>Lexer</code> to
      work with new tokens. The source code was this basic one-liner{' '}
      <code>“=+(){},;“</code>. But now we want a more complex source code:
    </p>
    <Highlight className="typescript">{sourceCode1}</Highlight>
    <p>
      With a new source code, we need more tokens to represent it. These are the
      tokens that we need to make the source code matches:
    </p>
    <Highlight className="typescript">{sourceCode2}</Highlight>
    <p>The test keeps the same, only the data changes.</p>
    <Highlight className="typescript">{sourceCode3}</Highlight>
    <p>
      Running this test, we start getting new errors related to the new tokens
      that don‘t match with the next generated token by our lexer.
    </p>
    <p>
      Also, the new tokens are a bit different now. They are not a “single
      character“ token, they are a bit more complex and should be handled in a
      different way.
    </p>
    <p>
      The simplest example is the integer tokens. In the test‘s source code, we
      have integer <code>5</code> (single character), but we also have integer{' '}
      <code>10</code> (multiple characters).
    </p>
    <p>
      As they can be multiple characters tokens, we‘ll add the default case in
      our <code>Lexer</code>‘s switch case. Starting with integers, we need to
      make sure that the current character is a digit, read the number to get
      the whole token literal, in this case, the whole integer. As we know that
      it‘s an integer and we have the integer value, we just create a new token
      and return it. It looks like this:
    </p>
    <Highlight className="typescript">{sourceCode4}</Highlight>
    <p>Two parts are missing:</p>
    <ul>
      <li>
        <code>isDigit</code>: verifies that a given character is a digit.
      </li>
      <li>
        <code>readNumber</code>: read the whole number, independently if it‘s a
        single digit number or bigger.
      </li>
    </ul>
    <p>
      Lets start with the easier one: <code>isDigit</code>. To simplify the idea
      of a digit, we‘ll just do a verification if the character is between{' '}
      <code>‘0‘</code> and <code>‘9‘</code>.
    </p>
    <Highlight className="typescript">{sourceCode5}</Highlight>
    <p>
      Now about the <code>readNumber</code>. The algorithm would be:
    </p>
    <ul>
      <li>get the initial position of the number</li>
      <li>read the next character while it‘s still a digit</li>
      <li>now we have the initial position and the last position</li>
      <li>return the slice of the source code: the whole number</li>
    </ul>
    <Highlight className="typescript">{sourceCode6}</Highlight>
    <p>
      Reading the next character, we update the current state of the main
      variables (<code>position</code>, <code>char</code>, and
      <code>readPosition</code>).
    </p>
    <p>
      We use the <code>substring</code> string‘s method to the source code‘s
      slice that represents the whole number.
    </p>
    <p>
      This is a very simplistic way to handle numbers as we are just handling
      integers but not float numbers.
    </p>
    <p>
      Running the tests again, we don‘t have the integer token problem anymore.
      But we still have work to do and more tokens to build.
    </p>
    <p>
      Now we start to generate the other tokens: identifiers and keywords. The
      main difference between identifiers and keywords is that keywords are part
      of the language “grammar“, the language‘s syntax. In the test‘s source
      code, we saw keywords like <code>fn</code> and <code>let</code> for
      example. Identifiers, on the other hand, are not part of the language‘s
      syntax, they are user-defined identifiers.
    </p>
    <p>
      To first identify that the next token is an identifier or a keyword, we
      need to verify if the current character is a letter, read the next
      characters until it is not a letter anymore, and decides if the token is
      an identifier or a keyword looking at its value.
    </p>
    <p>
      We add this code to the default part of the switch case as we did for the
      number tokens.
    </p>
    <Highlight className="typescript">{sourceCode7}</Highlight>
    <p>Let‘s break it down:</p>
    <ul>
      <li>
        <code>isLetter</code>: just a method to verify if the current character
        is a letter.
      </li>
      <li>
        <code>readIdentifier</code>: reads the characters until it‘s not part of
        the identifier/keyword anymore and return it.
      </li>
      <li>
        <code>lookupIdent</code>: returns the token type (<code>FUNCTION</code>,{' '}
        <code>LET</code>, or <code>IDENT</code>) based on the token literal we
        got from the <code>readIdentifier</code>.
      </li>
      <li>And finally it returns the new generated token.</li>
    </ul>
    <p>
      The <code>isLetter</code> is pretty basic:
    </p>
    <Highlight className="typescript">{sourceCode8}</Highlight>
    <p>
      The Monkey programming language accepts <code>_</code> as part of the
      identifiers. It‘s very similar to Ruby and Python. And the main part of
      this verification is the idea that the <code>char</code> should be between{' '}
      <code>‘a‘</code> and <code>‘z‘</code> (lower case characters) or between{' '}
      <code>‘A‘</code> and <code>‘Z‘</code> (upper case characters).
    </p>
    <p>
      The <code>readIdentifier</code> is pretty similar to the{' '}
      <code>readNumber</code> that we implemented earlier.
    </p>
    <Highlight className="typescript">{sourceCode9}</Highlight>
    <ul>
      <li>We get the initial char position</li>
      <li>Read the next char while it is still a letter</li>
      <li>
        With the initial position and the last position of the identifier, we
        can get the slice of the source code and return it.
      </li>
    </ul>
    <p>
      And finally the <code>lookupIdent</code> that we decided to implement it
      in the <code>Token</code> module because it belongs to that domain.
    </p>
    <Highlight className="typescript">{sourceCode10}</Highlight>
    <p>
      It receives the identifier string, verify if it is in the{' '}
      <code>Keywords</code> object, if it‘s, get the token type, otherwise, just
      return the <code>IDENT</code> as the token type.
    </p>
    <p>
      Running the tests again, we see more tokens passing the test. But some
      still fail. It turns out that we are not handling the white spaces between
      characters. Let‘s handle that issue!
    </p>
    <Highlight className="typescript">{sourceCode11}</Highlight>
    <p>
      To skip the white spaces, we need to keep reading the next until it‘s not
      a white space anymore.
    </p>
    <ul>
      <li>
        <code>‘ ‘</code>: white space
      </li>
      <li>
        <code>‘\t‘</code>: add tab
      </li>
      <li>
        <code>‘\n‘</code>: new line
      </li>
      <li>
        <code>‘\r‘</code>: return
      </li>
    </ul>
    <p>
      Calling <code>readChar</code> we update the state of the{' '}
      <code>position</code> and <code>char</code> variables. With this new
      implementation, we just need to add the <code>skipWhitespace</code> to the{' '}
      <code>getToken</code> method before generating any token:
    </p>
    <Highlight className="typescript">{sourceCode12}</Highlight>
    <p>
      The only adjustment we need to do now is to update the{' '}
      <code>nextToken</code>. It was like this before:
    </p>
    <Highlight className="typescript">{sourceCode13}</Highlight>
    <p>
      But as we read the next char for identifiers, keywords, and integers, we
      need to remove this line:
    </p>
    <Highlight className="typescript">{sourceCode14}</Highlight>
    <p>…and add only for the other tokens.</p>
    <Highlight className="typescript">{sourceCode15}</Highlight>
    <p>
      But as we need to make this same instruction for almost all tokens, I
      created a private method to handle that.
    </p>
    <Highlight className="typescript">{sourceCode16}</Highlight>
    <p>The use is very straightforward.</p>
    <Highlight className="typescript">{sourceCode17}</Highlight>
    <p>
      Now we have the tests passing and an improved lexer. Our language is
      taking shape. The source code is a bit more complex and all the tokens
      were generated. That‘s pretty nice!
    </p>
    <h2 id="finalwordsresources">
      <strong>Final words & Resources</strong>
    </h2>
    <p>
      If you didn‘t have the opportunity, take a look at the{' '}
      <Link href="/series/building-an-interpreter/lexical-analysis-part-1">
        first part of the Lexical Analysis
      </Link>
      . This is the second post about my journey learning compilers and studying
      programming language theory. And part of the&nbsp;
      <Link href="/series/building-an-interpreter">
        Building an Interpreter series
      </Link>
      .
    </p>
    <p>These are the resources I‘m using to learn more about this field:</p>
    <ResourcesList resourcesList={resourcesList} />
  </>
);
