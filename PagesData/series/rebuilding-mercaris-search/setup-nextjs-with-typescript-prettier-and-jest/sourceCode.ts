export const sourceCode1 = `yarn create next-app --typescript`;

export const sourceCode2 = `yarn dev`;

export const sourceCode3 = `yarn add --dev --exact prettier`;

export const sourceCode4 = `{
  "singleQuote": true,
  "trailingComma": "all"
}`;

export const sourceCode5 = `node_modules
.next
.yarn.lock`;

export const sourceCode6 = `npx mrm@2 lint-staged`;

export const sourceCode7 = `"lint-staged": {
  "*.{js,jsx,css,md,ts,tsx}": "prettier --write"
}`;

export const sourceCode8 = `import 'jest-axe/extend-expect';`;

export const sourceCode9 = `module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'jsdom',
};`;

export const sourceCode10 = `{
  "presets": ["next/babel"]
}`;

export const sourceCode11 = `{
  ...
    "test": "jest",
    "test:watch": "jest --watch"
    ...
}`;

export const sourceCode12 = `yarn test
yarn test:watch`;

export const sourceCode13 = `yarn add -D @testing-library/react @testing-library/jest-dom`;

export const sourceCode14 = `import '@testing-library/jest-dom';
import 'jest-axe/extend-expect';`;

export const sourceCode15 = `yarn add -D jest @types/jest babel-jest jest-axe @types/jest-axe`;
