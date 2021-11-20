export const sourceCode1 = `> let a = 1;`;

export const sourceCode2 = `Token { type: 'LET', literal: 'let' }
Token { type: 'IDENT', literal: 'a' }
Token { type: '=', literal: '=' }
Token { type: 'INT', literal: '1' }
Token { type: ';', literal: ';' }`;

export const sourceCode3 = `import readline from 'readline';

const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

scanner.question('&gt; ', (input) =&gt; {
  // do stuff
});`;

export const sourceCode4 = `const ScannerClose = {
  exit: 'exit',
  quit: 'quit',
};

const exits = [ScannerClose.exit, ScannerClose.quit];

if (exits.includes(input)) return scanner.close();`;

export const sourceCode5 = `import { Tokens } from '../token/token';
import { Lexer } from '../lexer/lexer';

const lexer = new Lexer(input);

for (
  let token = lexer.nextToken();
  token.type !== Tokens.EOF;
  token = lexer.nextToken()
) {
  console.log(token);
}`;

export const sourceCode6 = `function repl() {
  scanner.question('&gt; ', (input) =&gt; {
    if (exits.includes(input)) return scanner.close();

    const lexer = new Lexer(input);

    for (
      let token = lexer.nextToken();
      token.type !== Tokens.EOF;
      token = lexer.nextToken()
    ) {
      console.log(token);
    }

    repl();
  });
}`;

export const sourceCode7 = `import readline from 'readline';
import { Tokens } from '../token/token';
import { Lexer } from '../lexer/lexer';

const ScannerClose = {
  exit: 'exit',
  quit: 'quit',
};

const exits = [ScannerClose.exit, ScannerClose.quit];

export function startRepl() {
  const scanner = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function repl() {
    scanner.question('&gt; ', (input) =&gt; {
      if (exits.includes(input)) return scanner.close();

      const lexer = new Lexer(input);

      for (
        let token = lexer.nextToken();
        token.type !== Tokens.EOF;
        token = lexer.nextToken()
      ) {
        console.log(token);
      }

      repl();
    });
  }

  console.log('Welcome to monkey.ts');
  repl();
}`;
