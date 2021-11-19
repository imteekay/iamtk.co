export const sourceCode1 = `const input = \`
  let five = 5;
  let ten = 10;

  let add = fn(x, y) {
    x + y;
  };

  let result = add(five, ten);
\`;`;

export const sourceCode2 = `const tokens: Token[] = [
  { type: Tokens.LET, literal: "let" },
  { type: Tokens.IDENT, literal: "five" },
  { type: Tokens.ASSIGN, literal: "=" },
  { type: Tokens.INT, literal: "5" },
  { type: Tokens.SEMICOLON, literal: ";" },
  { type: Tokens.LET, literal: "let" },
  { type: Tokens.IDENT, literal: "ten" },
  { type: Tokens.ASSIGN, literal: "=" },
  { type: Tokens.INT, literal: "10" },
  { type: Tokens.SEMICOLON, literal: ";" },
  { type: Tokens.LET, literal: "let" },
  { type: Tokens.IDENT, literal: "add" },
  { type: Tokens.ASSIGN, literal: "=" },
  { type: Tokens.FUNCTION, literal: "fn" },
  { type: Tokens.LPAREN, literal: "(" },
  { type: Tokens.IDENT, literal: "x" },
  { type: Tokens.COMMA, literal: "," },
  { type: Tokens.IDENT, literal: "y" },
  { type: Tokens.RPAREN, literal: ")" },
  { type: Tokens.LBRACE, literal: "{" },
  { type: Tokens.IDENT, literal: "x" },
  { type: Tokens.PLUS, literal: "+" },
  { type: Tokens.IDENT, literal: "y" },
  { type: Tokens.SEMICOLON, literal: ";" },
  { type: Tokens.RBRACE, literal: "}" },
  { type: Tokens.SEMICOLON, literal: ";" },
  { type: Tokens.LET, literal: "let" },
  { type: Tokens.IDENT, literal: "result" },
  { type: Tokens.ASSIGN, literal: "=" },
  { type: Tokens.IDENT, literal: "add" },
  { type: Tokens.LPAREN, literal: "(" },
  { type: Tokens.IDENT, literal: "five" },
  { type: Tokens.COMMA, literal: "," },
  { type: Tokens.IDENT, literal: "ten" },
  { type: Tokens.RPAREN, literal: ")" },
  { type: Tokens.SEMICOLON, literal: ";" },
  { type: Tokens.EOF, literal: "" },
];`;

export const sourceCode3 = `const lexer = new Lexer(input);

tokens.forEach(({ type, literal }) => {
  const inputToken = lexer.nextToken();

  expect(inputToken.type).toEqual(type);
  expect(inputToken.literal).toEqual(literal);
});`;

export const sourceCode4 = `if (this.isDigit(this.char)) {
  const tokenLiteral = this.readNumber();
  return new Token(Tokens.INT, tokenLiteral);
}`;

export const sourceCode5 = `private isDigit(char: string) {
  return '0' <= char &amp;&amp; char <= '9';
}`;

export const sourceCode6 = `private readNumber() {
  const initialIntPosition = this.position;

  while (this.isDigit(this.char)) {
    this.readChar();
  }

  return this.input.substring(initialIntPosition, this.position);
}`;

export const sourceCode7 = `if (this.isLetter(this.char)) {
  const tokenLiteral = this.readIdentifier();
  const tokenType = lookupIdent(tokenLiteral);
  return new Token(tokenType, tokenLiteral);
}`;

export const sourceCode8 = `private isLetter(char: string) {
  return (
    ('a' <= char &amp;&amp; char <= 'z') ||
    ('A' <= char &amp;&amp; char <= 'Z') ||
    char === '_'
  );
}`;

export const sourceCode9 = `private readIdentifier() {
  const initialCharPosition = this.position;

  while (this.isLetter(this.char)) {
    this.readChar();
  }

  return this.input.substring(initialCharPosition, this.position);
}`;

export const sourceCode10 = `interface KeywordsType {
  [key: string]: string;
}

const Keywords: KeywordsType = {
  fn: Tokens.FUNCTION,
  let: Tokens.LET,
};

export function lookupIdent(ident: string) {
  return ident in Keywords ? Keywords[ident] : Tokens.IDENT;
}`;

export const sourceCode11 = `private skipWhitespace() {
  while (
    this.char == ' ' ||
    this.char == '\t' ||
    this.char == '\n' ||
    this.char == '\r'
  ) {
    this.readChar();
  }
}`;

export const sourceCode12 = `private getToken(): Token {
  this.skipWhitespace();`;

export const sourceCode13 = `nextToken(): Token {
  const token = this.getToken();
  this.readChar();
  return token;
}`;

export const sourceCode14 = `nextToken(): Token {
  const token = this.getToken();
  return token;
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
