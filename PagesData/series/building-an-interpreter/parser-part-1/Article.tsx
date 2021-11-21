import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Highlight from 'react-highlight';
import { ResourcesList } from 'Base/Article/ResourcesList';
import * as sourceCodes from './sourceCode';

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
      'Writing an Interpreter in Go: the book I‘m reading to learn and implement the Monkey compiler.',
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
  {
    link: '/series/building-an-interpreter/repl',
    title: 'Building an Interpreter: REPL',
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
      , and{' '}
      <Link href="/series/building-an-interpreter/repl">
        implemented a REPL
      </Link>{' '}
      to print the tokens using our lexer , we want to take a step back and
      implement a REPL and print the tokens using our lexer.
    </p>

    <blockquote>
      <p>
        “A parser is a software component that takes input data (frequently
        text) and builds a data structure – often some kind of parse tree,
        abstract syntax tree or other hierarchical structure – giving a
        structural representation of the input, checking for correct syntax in
        the process. […] The parser is often preceded by a separate lexical
        analyser, which creates tokens from the sequence of input characters.“ –{' '}
        <a href="https://en.wikipedia.org/wiki/Parsing">Wikipedia</a>
      </p>
    </blockquote>
    <p>
      So the idea of the parser will be to receive input data, can be text or
      tokens, and to produce a new data structure that represents this input
      data.
    </p>
    <p>
      The data structure the parsers produce is commonly called AST, or abstract
      syntax tree. It‘s called “abstract“ because this data structure omits
      visible details of the source code like semicolons, newlines, whitespace,
      and so on.
    </p>
    <p>
      In the process of building this data structure, it also analyzes the
      source code, checking whether the generated tokens form a meaningful
      expression. This process is called <em>Syntactic Analysis</em>.
    </p>
    <p>
      Parsing JSON strings as an example. It transforms the string input into a
      data structure (JavaScript Object).
    </p>
    <Highlight className="typescript">{sourceCodes.sourceCode1}</Highlight>
    <p>
      It also has the “syntactic analysis“. When passing a “wrong“ input data,
      it will throw a syntax error (<code>SyntaxError</code>):
    </p>
    <Highlight className="typescript">{sourceCodes.sourceCode2}</Highlight>
    <p>
      In this case, position 15 is the value <code>25</code>, where it is
      missing the attribute here.
    </p>
    <h2 id="fundamentalast">Fundamental AST</h2>
    <p>
      To parse the <code>Let Statement</code>, let‘s first understand its
      syntax.
    </p>
    <Highlight className="typescript">{sourceCodes.sourceCode3}</Highlight>
    <p>
      Taking a closer look at this example, we can see a pattern here. All three
      statements have this same form:
    </p>
    <Highlight className="typescript">{sourceCodes.sourceCode4}</Highlight>
    <p>
      So, in this case, it‘s easy to understand that <code>10</code>,{' '}
      <code>15</code>, and <code>fn</code> are expressions. The difference
      between statements and expressions is simple in this PL: expressions
      produce value, statements don‘t.
    </p>
    <p>
      And they are a fundamental part of the AST. Everything is a node in the
      tree, that can be a statement or an expression.
    </p>
    <Highlight className="typescript">{sourceCodes.sourceCode5}</Highlight>
    <p>
      The first step is to create this <code>Node</code> interface. Every node
      has to implement this <code>tokenLiteral</code> function. Meaning: every
      node has a token literal associated with it.
    </p>
    <Highlight className="typescript">{sourceCodes.sourceCode6}</Highlight>
    <p>
      The <code>Statement</code> and the <code>Expression</code> interfaces are
      built on top of the <code>Node</code> interface. Let‘s make it very simple
      now and improve later.
    </p>
    <p>
      The other fundamental part of the AST is the <code>Program</code>. It‘s
      the root node of the AST and it contains a list of statements.
    </p>
    <Highlight className="typescript">{sourceCodes.sourceCode7}</Highlight>
    <h2 id="parsingtheletstatement">Parsing the let statement</h2>
    <p>
      Now that we have the foundation for our AST, we can build more specific
      statements. And we‘ll start with the <code>LetStatement</code>.
    </p>
    <Image
      src="/series/building-an-interpreter/ast-1.png"
      alt="AST with node, expression, statement, and the specific statements (return and let)"
      width="592"
      height="309"
    />
    <p>
      This is how I‘m visualizing the relationship between the{' '}
      <code>LetStatement</code> and the other interfaces.
    </p>
    <p>
      We start with “everything is a node“. Then we have the two main
      interfaces: <code>Expression</code> and <code>Statement</code>. In this
      case, <code>LetStatement</code> implements the
      <code>Statement</code> interface.
    </p>
    <p>
      The <code>LetStatement</code> has these attributes:
    </p>
    <ul>
      <li>
        <code>token</code>: it has the type of the <code>Token</code> class we
        defined when we built the lexer. (just to refresh our memories, the{' '}
        <code>Token</code> has two attributes: the <code>type</code> (string)
        and <code>literal</code> (string). The <code>type</code> is any token we
        defined in the enum and the <code>literal</code> is the literal value of
        the token)
      </li>
      <li>
        <code>value</code>: it‘s an <code>Expression</code>. But we‘ll see more
        about this only in the next part of this series.
      </li>
      <li>
        <code>name</code>: it‘s an <code>Identifier</code> that has a{' '}
        <code>token</code> and a <code>value</code> as the attributes.
      </li>
    </ul>
    <p>To illustrate how it works in the code, let‘s see this example</p>
    <Highlight className="typescript">{sourceCodes.sourceCode8}</Highlight>
    <p>
      The representation of the <code>LetStatement</code>‘s AST would be:
    </p>
    <Highlight className="typescript">{sourceCodes.sourceCode9}</Highlight>
    <p>
      We have the <code>token</code> that‘s the <code>LET</code> token and the{' '}
      <code>name</code> that‘s an <code>Identifier</code> with a token{' '}
      <code>IDENT</code> and the <code>value</code> as <code>‘x‘</code>. We
      won‘t cover the <code>value</code> attribute because we‘ll see this{' '}
      <code>Expression</code> in the next part of this series.
    </p>
    <p>
      With this in mind, we can create our <code>LetStatement</code> class:
    </p>
    <Highlight className="typescript">{sourceCodes.sourceCode10}</Highlight>
    <p>
      It has everything we already discussed, but we are missing the{' '}
      <code>Identifier</code> implementation:
    </p>
    <Highlight className="typescript">{sourceCodes.sourceCode11}</Highlight>
    <p>
      We also discussed this structure and what it should have: the{' '}
      <code>token</code> and the <code>value</code>.
    </p>
    <p>
      Now we have all the necessary AST nodes to start to implement the parser.
      But before we build the parser and start parsing the{' '}
      <code>LetStatement</code>, we‘ll add tests to cover this implementation
      first.
    </p>
    <Highlight className="typescript">{sourceCodes.sourceCode12}</Highlight>
    <p>We want the parser to parse this input</p>
    <Highlight className="typescript">{sourceCodes.sourceCode13}</Highlight>
    <p>
      First, we pass the <code>input</code> to the <code>Lexer</code> and then
      the <code>lexer</code> to the <code>Parser</code>. And now we can call the{' '}
      <code>parsePogram</code>. It‘ll return the <code>program</code> with all
      the <code>statements</code> related to the <code>input</code> data.
    </p>
    <p>What are we testing here?</p>
    <ul>
      <li>
        the statement token literal should be <code>‘let‘</code>.
      </li>
      <li>
        the identifier‘s value should the <code>identifier</code> we have in the{' '}
        <code>tests</code> array.
      </li>
      <li>
        and the token literal of the identifier should also be the{' '}
        <code>identifier</code>.
      </li>
    </ul>
    <p>
      Now we can start implementing the <code>Parser</code> and pass the tests.
      We start with the basic definition of the
      <code>Parser</code> class.
    </p>
    <Highlight className="typescript">{sourceCodes.sourceCode14}</Highlight>
    <p>
      We need to make sure that the <code>lexer</code> is passed as a parameter
      and the parser should also have the:
    </p>
    <ul>
      <li>
        <code>currentToken</code>: it is the token under examination
      </li>
      <li>
        <code>peekToken</code>: it is the next token that helps decide what to
        do next
      </li>
    </ul>
    <p>
      We‘ll also have a method called <code>nextToken</code> to update the{' '}
      <code>currentToken</code> and the <code>peekToken</code>:
    </p>
    <Highlight className="typescript">{sourceCodes.sourceCode15}</Highlight>
    <p>
      And to initialize these two states, we can call this method two times in
      the constructor. Calling two times will set the correct state for the
      current and the next tokens. It looks like this:
    </p>
    <Highlight className="typescript">{sourceCodes.sourceCode16}</Highlight>
    <p>
      Now the <code>parseProgram</code>. The idea of this method is to create a
      program and parse each statement based on the tokens and add all the
      statements to the statements list in the program.
    </p>
    <Highlight className="typescript">{sourceCodes.sourceCode17}</Highlight>
    <p>
      It iterates through all the tokens from the lexer, for each token, it‘ll
      parse the statement and add it to the statements list. And in the end,
      it‘ll just return the program.
    </p>
    <p>
      From this code, we need to implement this <code>parseStatement</code>{' '}
      method.
    </p>
    <Highlight className="typescript">{sourceCodes.sourceCode18}</Highlight>
    <p>
      I think this first implementation is not the best one, but we can refactor
      it later (I have some ideas in mind that I want to try later).
    </p>
    <ul>
      <li>
        The first thing is to create a new <code>LetStatement</code> based on
        the current token
      </li>
      <li>
        Then we need to confirm that the next token is an{' '}
        <code>Identifier</code>. If it‘s, we call <code>nextToken</code> to
        update the state of the <code>currentToken</code> and the{' '}
        <code>peekToken</code>. If not, we just return <code>null</code> (just
        to simplify for now).
      </li>
      <li>
        Then we move to create the identifier. We just pass the current token
        and the current token‘s literal and update the statement name with this
        new identifier.
      </li>
      <li>
        We expect that the next token is a <code>=</code> token (
        <code>ASSIGN</code>).
      </li>
      <li>
        <em>
          <strong>TODO</strong>:
        </em>{' '}
        implement the expression/value in the next post of this series
      </li>
      <li>
        After that, we just go through all the tokens until we find the{' '}
        <code>;</code> token and return the new statement.
      </li>
    </ul>
    <p>
      This new statement will be used to add it to the statements list in the
      program. But we are missing two important methods here:{' '}
      <code>expectPeek</code> and <code>currentTokenIs</code>. Let‘s implement
      them.
    </p>
    <Highlight className="typescript">{sourceCodes.sourceCode19}</Highlight>
    <p>
      <code>currentTokenIs</code> is a simple method to verify if the current
      token has the same token type that we expect it has.
    </p>
    <Highlight className="typescript">{sourceCodes.sourceCode20}</Highlight>
    <p>
      The <code>expectPeek</code> method will use the <code>peekTokenIs</code>{' '}
      (that‘s very similar to the <code>currentTokenIs</code>, but for the{' '}
      <code>peekToken</code>) to verify if the token is the expected one. If it
      is, we update the current and the next token and return true. If not just
      return false (we‘ll also add error handling soon).
    </p>
    <p>
      Now we have the parser, the program, and we can parse let statements
      making the tests pass.
    </p>
    <h2 id="handlingerrors">Handling errors</h2>
    <p>
      For this input data <code>let x = 5;</code>, we don‘t have any syntax
      problem, so we won‘t have any error to handle. But imagine the PL user
      type this:
    </p>
    <Highlight className="typescript">{sourceCodes.sourceCode21}</Highlight>
    <p>
      There‘s a syntax error. Because, for a let statement, we expect that after
      the <code>let</code> token, we get an identifier, not the
      value/expression. And for the second example, after having the identifier,
      the parser expects that it has <code>=</code> token.
    </p>
    <p>We could output something like this to the user:</p>
    <Highlight className="typescript">{sourceCodes.sourceCode22}</Highlight>
    <p>
      Errors are ways to communicate to the users about what they are writing
      and help them get to the final goal (a “working software“).
    </p>
    <p>But how do we do that? Let‘s start with the tests as we always do.</p>
    <Highlight className="typescript">{sourceCodes.sourceCode23}</Highlight>
    <p>
      Here we have the input data that we talked about. But now we‘ll also have
      a <code>getErrors</code> method to get all the possible errors the parser
      had while parsing the input.
    </p>
    <p>
      And we expect that the parser has these two errors we already discussed.
    </p>
    <p>
      Ok, to have all the errors, let‘s create a list of errors in the parser.
    </p>
    <Highlight className="typescript">{sourceCodes.sourceCode24}</Highlight>
    <p>
      It‘s very simple, it‘s just a private attribute from the class{' '}
      <code>Parser</code>, it has the type <code>Error</code> (that‘s a{' '}
      <code>string</code>), and we initialize it with an empty list.
    </p>
    <p>
      The <code>getErrors</code> method will only return the errors attribute:
    </p>
    <Highlight className="typescript">{sourceCodes.sourceCode25}</Highlight>
    <p>
      And now what we need to do is to add a error message when the parser gets
      an error.
    </p>
    <p>
      In this case, we‘ll add an error to the list when the next token it‘s not
      the expected one, so the place we do that is in the{' '}
      <code>expectPeek</code> method.
    </p>
    <Highlight className="typescript">{sourceCodes.sourceCode26}</Highlight>
    <p>
      When the next token is not the expected one, we call the{' '}
      <code>peekError</code> method passing the expected token to it. Now let‘s
      implement this new method:
    </p>
    <Highlight className="typescript">{sourceCodes.sourceCode27}</Highlight>
    <p>
      It‘s very simple, we just need to add an error message to the{' '}
      <code>errors</code> list.
    </p>
    <p>
      And syntax error message is also simple:
      <code className="typescript">{sourceCodes.sourceCode28}</code>. We expect
      one thing and got another.
    </p>
    <p>
      Running the tests again, they pass, and we have a way to communicate to
      the user about the program she/he is creating.
    </p>
    <h2 id="parsingthereturnstatement">Parsing the return statement</h2>
    <p>
      The <code>return</code> is also a <code>Statement</code>. Let‘s illustrate
      it:
    </p>
    <p>
      <Image
        src="/series/building-an-interpreter/ast-2.png"
        alt="AST with node, expression, statement, and the specific statements (return and let)"
        width="592"
        height="291"
      />
    </p>
    <p>
      The <code>ReturnStatement</code> will implement this{' '}
      <code>Statement</code> interface and it has these two attributes:{' '}
      <code>token</code> and <code>returnValue</code>.
    </p>
    <p>
      This is actually very similar to the <code>LetStatement</code>:
    </p>
    <Highlight className="typescript">{sourceCodes.sourceCode29}</Highlight>
    <p>
      The <code>token</code> is a <code>Token</code>, the{' '}
      <code>returnValue</code> is an <code>Expression</code>, when instantiating
      the <code>ReturnStatement</code>, we initialize it with the{' '}
      <code>token</code>, and we also provide a <code>tokenLiteral</code>{' '}
      method.
    </p>
    <p>Let‘s create a new test to verify this new statement:</p>
    <Highlight className="typescript">{sourceCodes.sourceCode30}</Highlight>
    <p>
      The input data has only correct return statements, and we expect that the
      statement token literal should be the <code>return</code> token.
    </p>
    <p>
      When the program parses statements, we only handle the let statement. But
      we want to handle return statements as well.
    </p>
    <Highlight className="typescript">{sourceCodes.sourceCode31}</Highlight>
    <p>
      If the current token is a <code>RETURN</code> token, we call the{' '}
      <code>parseReturnStatement</code> method.
    </p>
    <p>This method is also similar to the let statement, but simpler.</p>
    <Highlight className="typescript">{sourceCodes.sourceCode32}</Highlight>
    <p>
      It creates the <code>ReturnStatement</code> passing the current token, go
      to the end of the statement (semicolon - we‘ll talk about the{' '}
      <code>returnValue</code> expression in another part of this series), and
      return the new statement.
    </p>
    <p>
      This new statement is added to the <code>statements</code> list.
    </p>
    <p>
      One small thing that I realized when implementing this new statement is
      that it also implements the <code>Statement</code> and the{' '}
      <code>statements</code> list doesn‘t know if it is a{' '}
      <code>LetStatement</code> or a <code>ReturnStatement</code>. One way to
      solve this in TypeScript is to add a{' '}
      <a href="https://mariusschulz.com/blog/tagged-union-types-in-typescript">
        tagged union
      </a>
      .
    </p>
    <p>
      Let‘s add the <code>kind</code> attribute to these two statements.
    </p>
    <ul>
      <li>
        <code>LetStatement</code>:
      </li>
    </ul>
    <Highlight className="typescript">{sourceCodes.sourceCode33}</Highlight>
    <ul>
      <li>
        <code>ReturnStatement</code>:
      </li>
    </ul>
    <Highlight className="typescript">{sourceCodes.sourceCode34}</Highlight>
    <p>
      The two statements have a new attribute called <code>kind</code> and we
      initialize it with the expected statement kind.
    </p>
    <Highlight className="typescript">{sourceCodes.sourceCode35}</Highlight>
    <p>It‘s basically an enum to support this new attribute.</p>
    <p>But we also need to update some things here:</p>
    <Highlight className="typescript">{sourceCodes.sourceCode36}</Highlight>
    <ul>
      <li>
        The <code>StatementKindType</code> is all possible kind types
      </li>
      <li>
        The <code>Statement</code> is all possible statements
      </li>
      <li>
        The <code>BaseStatement</code> is the interface that{' '}
        <code>LetStatement</code> and <code>ReturnStatement</code> implement
      </li>
      <li>
        The <code>Program</code> still have the <code>Statement</code> type for
        the list of the statements
      </li>
    </ul>
    <p>
      That‘s all for this post. The next one we‘ll talk about expressions, I‘m
      excited about it.
    </p>

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
