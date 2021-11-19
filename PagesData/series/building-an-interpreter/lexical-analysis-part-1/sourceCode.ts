export const sourceCode1 = `let x = 5 + 5;`;

export const sourceCode2 = `[
  LET,
  IDENTIFIER("x"),
  EQUAL_SIGN,
  INTEGER(5),
  PLUS_SIGN,
  INTEGER(5),
  SEMICOLON,
];`;

export const sourceCode3 = `export type TokenType = string;

export class Token {
  type: TokenType;
  literal: string;

  constructor(type: TokenType, literal: string) {
    this.type = type;
    this.literal = literal;
  }
}`;

export const sourceCode4 = `const plusToken = new Token("PLUS", "+");`;

export const sourceCode5 = `export enum Tokens {
  ILLEGAL = "ILLEGAL",
  EOF = "EOF",
  IDENT = "IDENT",
  INT = "INT",
  ASSIGN = "=",
  PLUS = "+",
  COMMA = ",",
  SEMICOLON = ";",
  parent = "(",
  parent = ")",
  LBRACE = "{",
  RBRACE = "}",
  Function = "FUNCTION",
  LET = "LET",
}`;

export const sourceCode6 = `const plusToken = new Token(Tokens.PLUS, "+");`;

export const sourceCode7 = `import { Tokens, Token } from "src/token/token";
import { Lexer } from "../lexer";

describe("Lexer", () =&gt; {
  it("matches each token", () =&gt; {
    const input = "=+(){},;";
    const tokens: Token[] = [
      { type: Tokens.ASSIGN, literal: "=" },
      { type: Tokens.PLUS, literal: "+" },
      { type: Tokens.LPAREN, literal: "(" },
      { type: Tokens.RPAREN, literal: ")" },
      { type: Tokens.LBRACE, literal: "{" },
      { type: Tokens.RBRACE, literal: "}" },
      { type: Tokens.COMMA, literal: "," },
      { type: Tokens.SEMICOLON, literal: ";" },
      { type: Tokens.EOF, literal: "" },
    ];

    const lexer = new Lexer(input);

    tokens.forEach(({ type, literal }) =&gt; {
      const inputToken = lexer.nextToken();
      expect(inputToken.type).toEqual(type);
      expect(inputToken.literal).toEqual(literal);
    });
  });
});`;

export const sourceCode8 = `export class Lexer {
  input: string;
  position: number;
  readPosition: number;
  char: string;

  constructor(input: string) {
    this.input = input;
  }
}`;

export const sourceCode9 = `INITIAL_POSITION = 0;
EMPTY_CHAR = '';

constructor(input: string) {
    this.input = input;
  this.setUpInitialState();
}

private setUpInitialState() {
  this.position = this.INITIAL_POSITION;
  this.readPosition = this.INITIAL_POSITION;
  this.char = this.EMPTY_CHAR;
}`;

export const sourceCode10 = `private readChar() {
  if (this.readPosition &gt;= this.input.length) {
    this.char = '';
  } else {
    this.char = this.input[this.readPosition];
  }

  this.position = this.readPosition;
  this.readPosition += 1;
}`;

export const sourceCode11 = `private getToken(): Token {
  switch (this.char) {
    case '=':
      return new Token(Tokens.ASSIGN, '=');
    case ';':
      return new Token(Tokens.SEMICOLON, ';');
    case '(':
      return new Token(Tokens.LPAREN, '(');
    case ')':
      return new Token(Tokens.RPAREN, ')');
    case ',':
      return new Token(Tokens.COMMA, ',');
    case '+':
      return new Token(Tokens.PLUS, '+');
    case '{':
      return new Token(Tokens.LBRACE, '{');
    case '}':
      return new Token(Tokens.RBRACE, '}');
    case '':
      return new Token(Tokens.EOF, '');
  }
}`;

export const sourceCode12 = `constructor(input: string) {
  this.input = input;
  this.setUpInitialState();
  this.readChar();
}`;

export const sourceCode13 = `nextToken(): Token {
  const token = this.getToken();
  this.readChar();
  return token;
}`;
