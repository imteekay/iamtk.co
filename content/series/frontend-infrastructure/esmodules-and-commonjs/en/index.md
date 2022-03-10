We took a closer look at the past when we used [JavaScript as simple scripts](/series/frontend-infrastructure/javascript-as-scripts) and when developers were in search for a module system trying to use JavaScript syntax and features ([Closures and Scope](/series/frontend-infrastructure/scope-and-closure), [IIFEs](/series/frontend-infrastructure/iife-immediately-invoked-function-expression), [Namespaces](/series/frontend-infrastructure/namespaces)) to come up with module patterns.

Now let's talking about real module systems: CommonJS and ESModules.

Among other experiments (AMD, UMD, etc), CommonJS was defined and implemented in NodeJS as a standard module system. It has a very simplistic and easy-to-read syntax.

Exporting values using `module.exports` syntax: named exports

```javascript
// ModuleX.js
module.exports.A = 1;
```

And importing values from other modules using the `require` syntax:

```javascript
const { A } = require('./ModuleX.js');
A; // 1
```

Exporting values using `module.exports` syntax: default exports

```javascript
// ModuleX.js
module.exports = 1;
```

And importing values from other modules using the `require` syntax:

```javascript
const A = require('./ModuleX.js');
A; // 1
```

Now, ESModule is the standard module system for JavaScript. The syntax's pretty simple as CJS. Let's take a look at it.

Exporting values using the `export` syntax for named exports

```javascript
// A.mjs
export const A = 1;
```

And importing values from other modules using the `import` syntax:

```javascript
import { A } from './A.mjs';
A; // 1
```

## ESM vs CJS: TLDR

A TLDR on how ESM and CJS work differently and limitations.

### ESM: ESModules

- It only imports modules using the `import` syntax. You can't use `require` syntax. It would throw an error `ReferenceError: require is not defined in ES module scope, you can use import instead`.
- Bundlers don’t know how to work with ESM modules that use the `require` syntax.
- CJS is the default module system. To change it to ESM, set the `type` from `package.json` to `module`.
- If module is using only named exports (no default export) and the other module is defaul importing the module, it throws an error `SyntaxError: The requested module './A.mjs' does not provide an export named 'default'`. The module exporting should export default too or the second module should named import the first one.

### CJS: CommonJS

- It only requires modules using the `require` syntax. You can't use the `import` syntax. It throws an exception `SyntaxError: Cannot use import statement outside a module`.
- Can’t use ESM in CJS. It throws an exception: Must use import to load an ES Module.
- In Node, CJS is the default module system. By default, the `package.json` uses `commonjs` as the `type`'s value.
- The `require` syntax is synchronous: there's no callback or promise.

## Interoperability between ESM and CJS

How it works to import from one module system to another, the interoperability, limitations, and so on.

### Importing CJS from ESM

ESM can default import CJS modules even when the CJS module has no default exports (only named exports). It treats the module as an object, so it need to access its "attribute".

```javascript
// ModuleA.js
module.exports.A = 1;

// ModuleB.js
import ModuleA from './ModuleA.js';

ModuleA.A; // 1
```

ESM can named import CJS modules.

```javascript
// ModuleA.js
module.exports.A = 1;

// ModuleB.js
import { A } from './ModuleA.js';

A; // 1
```

### Importing ESM from CJS

CJS can't import/require ESM. It throws an exception: `Must use import to load an ES Module`. If trying to use the `import` syntax, it will throw another exception: `SyntaxError: Cannot use import statement outside a module`.

## Migration: from CommonJS to ESModule

### Named exports

From CommonJS:

```javascript
const a = 1;
const b = 2;
const c = 3;

module.exports = {
  a,
  b,
  c,
};
```

To ESModule:

```javascript
export const a = 1;
export const b = 2;
export const c = 3;
```

### Default exports

From CommonJS:

```javascript
const a = 1;

module.exports = a;
```

To ESModule:

```javascript
const a = 1;
export default a;
```

### Named imports

From CommonJS:

```javascript
const { a, b, c } = require('./module');
```

To ESModule:

```javascript
import { a, b, c } from './module';
```

### Default imports

From CommonJS:

```javascript
const a = require('./module);
```

To ESModule:

```javascript
import a from './module';
```

### Caveats: imports and object destructuring

From CommonJS:

```javascript
const {
  a: { b },
} = require('./module');
```

From ESModule:

```javascript
// import { a: { b } } from './module';  -->  Syntax Error
import { a } from './module';
const { b } = a;
```
