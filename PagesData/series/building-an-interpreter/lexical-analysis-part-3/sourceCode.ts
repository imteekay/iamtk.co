export const sourceCode1 = `const input = \`
  !-/*5;
  5 < 10 > 5;
\`;`;

export const sourceCode2 = `export enum Tokens {
  // ...
  MINUS = '-',
  BANG = '!',
  ASTERISK = '*',
  SLASH = '/',
  LESS_THAN = '<',
  GREATER_THAN = '>',
  // ...
}`;

export const sourceCode3 = `const tokens: Token[] = [
  // ...
  { type: Tokens.BANG, literal: '!' },
  { type: Tokens.MINUS, literal: '-' },
  { type: Tokens.SLASH, literal: '/' },
  { type: Tokens.ASTERISK, literal: '*' },
  { type: Tokens.INT, literal: '5' },
  { type: Tokens.SEMICOLON, literal: ';' },
  { type: Tokens.INT, literal: '5' },
  { type: Tokens.LESS_THAN, literal: '<' },
  { type: Tokens.INT, literal: '10' },
  { type: Tokens.GREATER_THAN, literal: '>' },
  { type: Tokens.INT, literal: '5' },
  { type: Tokens.SEMICOLON, literal: ';' },
  // ...
];`;

export const sourceCode4 = `private getToken(): Token {
  this.skipWhitespace();

  switch (this.char) {
    // ...
    case '!':
      return this.buildToken(Tokens.BANG, '!');
    case '-':
      return this.buildToken(Tokens.MINUS, '-');
    case '/':
      return this.buildToken(Tokens.SLASH, '/');
    case '*':
      return this.buildToken(Tokens.ASTERISK, '*');
    case '<':
      return this.buildToken(Tokens.LESS_THAN, '<');
    case '>':
      return this.buildToken(Tokens.GREATER_THAN, '>');
    // ...
  }
}`;

export const sourceCode5 = `const input = \`
  if (5 < 10) {
    return true;
  } else {
    return false;
  }
\`;`;

export const sourceCode6 = `const tokens: Token[] = [
  // ...
  { type: Tokens.IF, literal: 'if' },
  { type: Tokens.LPAREN, literal: '(' },
  { type: Tokens.INT, literal: '5' },
  { type: Tokens.LESS_THAN, literal: '<' },
  { type: Tokens.INT, literal: '10' },
  { type: Tokens.RPAREN, literal: ')' },
  { type: Tokens.LBRACE, literal: '{' },
  { type: Tokens.RETURN, literal: 'return' },
  { type: Tokens.TRUE, literal: 'true' },
  { type: Tokens.SEMICOLON, literal: ';' },
  { type: Tokens.RBRACE, literal: '}' },
  { type: Tokens.ELSE, literal: 'else' },
  { type: Tokens.LBRACE, literal: '{' },
  { type: Tokens.RETURN, literal: 'return' },
  { type: Tokens.FALSE, literal: 'false' },
  { type: Tokens.SEMICOLON, literal: ';' },
  { type: Tokens.RBRACE, literal: '}' },
  // ...
];`;

export const sourceCode7 = `export enum Tokens {
  // ...
  TRUE = 'TRUE',
  FALSE = 'FALSE',
  IF = 'IF',
  ELSE = 'ELSE',
  RETURN = 'RETURN',
}`;

export const sourceCode8 = `const Keywords: KeywordsType = {
  // ...
  true: Tokens.TRUE,
  false: Tokens.FALSE,
  if: Tokens.IF,
  else: Tokens.ELSE,
  return: Tokens.RETURN,
};`;

export const sourceCode9 = `const input = \`
  10 == 10;
  10 != 9;
\`;`;

export const sourceCode10 = `const tokens: Token[] = [
  // ...
  { type: Tokens.INT, literal: '10' },
  { type: Tokens.EQUAL, literal: '==' },
  { type: Tokens.INT, literal: '10' },
  { type: Tokens.SEMICOLON, literal: ';' },
  { type: Tokens.INT, literal: '10' },
  { type: Tokens.NOT_EQUAL, literal: '!=' },
  { type: Tokens.INT, literal: '9' },
  { type: Tokens.SEMICOLON, literal: ';' },
  // ...
];`;

export const sourceCode11 = `export enum Tokens {
  // ...
  EQUAL = '==',
  NOT_EQUAL = '!=',
  // ...
}`;

export const sourceCode12 = `private peekChar() {
  if (this.readPosition >= this.input.length) {
    return '';
  } else {
    return this.input[this.readPosition];
  }
}`;

export const sourceCode13 = `switch (this.char) {
  // ...
  case '=':
    if (this.peekChar() === '=') {
      this.readChar();
      return this.buildToken(Tokens.EQUAL, '==');
    } else {
      return this.buildToken(Tokens.ASSIGN, '=');
    }
  // ...
}`;

export const sourceCode14 = `switch (this.char) {
  // ...
  case '!':
    if (this.peekChar() === '=') {
      this.readChar();
      return this.buildToken(Tokens.NOT_EQUAL, '!=');
    } else {
      return this.buildToken(Tokens.BANG, '!');
    }
  // ...
}`;

export const sourceCode15 = `case '=':
  this.readChar();
  return new Token(Tokens.ASSIGN, '=');`;

export const sourceCode16 = `private buildToken(type: TokenType, literal: string) {
  this.readChar();
  return new Token(type, literal);
}`;

export const sourceCode17 = `switch (this.char) {
  case '=':
    return this.buildToken(Tokens.ASSIGN, '=');
  case ';':
    return this.buildToken(Tokens.SEMICOLON, ';');
  case '(':
    return this.buildToken(Tokens.LPAREN, '(');
  case ')':
    return this.buildToken(Tokens.RPAREN, ')');
  case ',':
    return this.buildToken(Tokens.COMMA, ',');
  case '+':
    return this.buildToken(Tokens.PLUS, '+');
  case '{':
    return this.buildToken(Tokens.LBRACE, '{');
  case '}':
    return this.buildToken(Tokens.RBRACE, '}');
  case '':
    return this.buildToken(Tokens.EOF, '');`;
