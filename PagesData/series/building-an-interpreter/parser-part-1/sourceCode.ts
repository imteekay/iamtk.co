export const sourceCode1 = `const input = '{"name": "TK", "age": 25}';
const output = JSON.parse(input);

output;
=> { name: 'TK', age: 25 }

output.name;
=> 'TK'

output.age;
=> 25`;

export const sourceCode2 = `const input = '{"name": "TK", 25}';
const output = JSON.parse(input);
=> Uncaught SyntaxError: Unexpected number in JSON at position 15`;

export const sourceCode3 = `let x = 10;
let y = 15;

let add = fn(a, b) {
  return a + b;
};`;

export const sourceCode4 = `let &lt;identifier> = &lt;expression>;`;

export const sourceCode5 = `interface Node {
  tokenLiteral: () => string;
}`;

export const sourceCode6 = `export interface Statement extends Node {}

export interface Expression extends Node {}`;

export const sourceCode7 = `export class Program {
  statements: Statement[] = [];
}`;

export const sourceCode8 = `let x = 1;`;

export const sourceCode9 = `LetStatement {
  token: Token { type: 'LET', literal: 'let' },
  name: Identifier {
    token: Token { type: 'IDENT', literal: 'x' },
    value: 'x'
  }
}`;

export const sourceCode10 = `class LetStatement implements Statement {
  token: Token;
  name: Identifier;
  value: Expression;

  constructor(token: Token) {
    this.token = token;
  }

  tokenLiteral() {
    return this.token.literal;
  }
}`;

export const sourceCode11 = `class Identifier implements Expression {
  token: Token;
  value: string;

  constructor(token: Token, value: string) {
    this.token = token;
    this.value = value;
  }

  tokenLiteral() {
    return this.token.literal;
  }
}`;

export const sourceCode12 = `describe('Parser', () => {
  describe('parseProgram', () => {
    it('parses the let statement', () => {
      const input = \`;
        let x = 5;
        let y = 10;
        let foobar = 10000;
      \`;

      const lexer = new Lexer(input);
      const parser = new Parser(lexer);
      const program = parser.parseProgram();

      const tests = [
        { identifier: 'x' },
        { identifier: 'y' },
        { identifier: 'foobar' },
      ];

      tests.forEach(({ identifier }, index) => {
        const statement = program.statements[index];

        expect(statement.tokenLiteral()).toEqual('let');
        expect(statement.name.value).toEqual(identifier);
        expect(statement.name.tokenLiteral()).toEqual(identifier);
      });
    });
  });
});`;

export const sourceCode13 = `let x = 5;
let y = 10;
let foobar = 10000;`;

export const sourceCode14 = `class Parser {
  private lexer: Lexer;
  private currentToken: Token;
  private peekToken: Token;

  constructor(lexer: Lexer) {
    this.lexer = lexer;
  }
}`;

export const sourceCode15 = `nextToken() {
  this.currentToken = this.peekToken;
  this.peekToken = this.lexer.nextToken();
}`;

export const sourceCode16 = `constructor(lexer: Lexer) {
  this.lexer = lexer;
  this.nextToken();
  this.nextToken();
}`;

export const sourceCode17 = `parseProgram() {
  const program = new Program();

  while (this.currentToken.type !== Tokens.EOF) {
    const statement = this.parseStatement();

    if (statement !== null) {
      program.statements.push(statement);
    }

    this.nextToken();
  }

  return program;
}`;

export const sourceCode18 = `private parseLetStatement() {
  const statement = new LetStatement(this.currentToken);

  if (!this.expectPeek(Tokens.IDENT)) {
    return null;
  }

  const identifier = new Identifier(
    this.currentToken,
    this.currentToken.literal
  );

  statement.name = identifier;

  if (!this.expectPeek(Tokens.ASSIGN)) {
    return null;
  }

  while (!this.currentTokenIs(Tokens.SEMICOLON)) {
    this.nextToken();
  }

  return statement;
}`;

export const sourceCode19 = `private currentTokenIs(token: TokenType) {
  return this.currentToken.type === token;
}`;

export const sourceCode20 = `private peekTokenIs(token: TokenType) {
  return this.peekToken.type === token;
}

private expectPeek(token: TokenType) {
  if (this.peekTokenIs(token)) {
    this.nextToken();
    return true;
  }

  return false;
}`;

export const sourceCode21 = `let 123;
let a;`;

export const sourceCode22 = `let 123;
=> 'expected next token to be IDENT, got INT instead'

let a;
=> 'expected next token to be =, got ; instead'`;

export const sourceCode23 = `it('parses an input with error', () => {
  const input = \`
    let 123;
    let a;
  \`;

  const lexer = new Lexer(input);
  const parser = new Parser(lexer);

  parser.parseProgram();

  const errors = parser.getErrors();
  const expectedErrors = [
    'expected next token to be IDENT, got INT instead',
    'expected next token to be =, got ; instead',
  ];

  errors.forEach((error, index) => {
    expect(error).toEqual(expectedErrors[index]);
  });
});`;

export const sourceCode24 = `type Error = string;

class Parser {
  private lexer: Lexer;
  private currentToken: Token;
  private peekToken: Token;
  private errors: Error[];

  constructor(lexer: Lexer) {
    this.lexer = lexer;
    this.errors = [];
    this.nextToken();
    this.nextToken();
  }
}`;

export const sourceCode25 = `getErrors() {
  return this.errors;
}`;

export const sourceCode26 = `private expectPeek(token: TokenType) {
  if (this.peekTokenIs(token)) {
    this.nextToken();
    return true;
  }

  this.peekError(token);
  return false;
}`;

export const sourceCode27 = `private peekError(token: TokenType) {
  const msg = \`expected next token to be \${token\}, got \${this.peekToken.type\} instead\`;
  this.errors.push(msg);
}`;

export const sourceCode28 = `> expected next token to be \${token\}, got \${this.peekToken.type\} instead`;

export const sourceCode29 = `class ReturnStatement implements Statement {
  token: Token;
  returnValue: Expression;

  constructor(token: Token) {
    this.token = token;
  }

  tokenLiteral() {
    return this.token.literal;
  }
}`;

export const sourceCode30 = `it('parses the return statement', () => {
  const input = \`
    return 5;
    return 10;
    return 10000;
  \`;

  const lexer = new Lexer(input);
  const parser = new Parser(lexer);
  const program = parser.parseProgram();

  const tests = [
    { tokenLiteral: 'return' },
    { tokenLiteral: 'return' },
    { tokenLiteral: 'return' },
  ];

  tests.forEach(({ tokenLiteral }, index) => {
    const statement = program.statements[index];

    expect(statement.tokenLiteral()).toEqual(tokenLiteral);
  });
});`;

export const sourceCode31 = `private parseStatement() {
  switch (this.currentToken.type) {
    case Tokens.LET:
      return this.parseLetStatement();
    case Tokens.RETURN:
      return this.parseReturnStatement();
    default:
      return null;
  }
}`;

export const sourceCode32 = `private parseReturnStatement() {
  const statement = new ReturnStatement(this.currentToken);

  while (!this.currentTokenIs(Tokens.SEMICOLON)) {
    this.nextToken();
  }

  return statement;
}`;

export const sourceCode33 = `class LetStatement implements BaseStatement {
  token: Token;
  name: Identifier;
  value: Expression;
  kind: StatementKind.Let;

  constructor(token: Token) {
    this.token = token;
    this.kind = StatementKind.Let;
  }

  tokenLiteral() {
    return this.token.literal;
  }
}`;

export const sourceCode34 = `class ReturnStatement implements BaseStatement {
  token: Token;
  kind: StatementKind.Return;
  returnValue: Expression;

  constructor(token: Token) {
    this.token = token;
    this.kind = StatementKind.Return;
  }

  tokenLiteral() {
    return this.token.literal;
  }
}`;

export const sourceCode35 = `enum StatementKind {
  Let = 'let',
  Return = 'return',
}`;

export const sourceCode36 = `type StatementKindType = StatementKind.Let | StatementKind.Return;
type Statement = LetStatement | ReturnStatement;

interface BaseStatement extends Node {
  kind: StatementKindType;
}

class Program {
  statements: Statement[] = [];
}`;
