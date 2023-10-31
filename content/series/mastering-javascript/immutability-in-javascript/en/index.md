# Immutability

## Motivation

Mutable objects can be implicitly harmful.

To illustrate this problem, imagine a function called `printTriangles`.

```javascript
function printTriangles(n) {
  const nums = [];

  for (let i = 0; i < n; i++) {
    nums.push(i);
    console.log(arraySum(nums));
  }
}
```

What do you expect to be printed?

We will iterate from `0` to `n`, add each number to the `nums` array, get the sum of the array `nums`, and print it. We expect something like:

```bash
0 (nums = [0])
1 (nums = [0, 1])
3 (nums = [0, 1, 2])
5 (nums = [0, 1, 2, 3])
9 (nums = [0, 1, 2, 3, 4])
...
```

Right? But it will only be true depending on the `arraySum`. Let's see what it does:

```javascript
function arraySum(nums) {
  let sum = 0
  let num;

  while ((num = nums.pop()) !== undefined) {
    sum += num;
  }

  return sum;
}
```

To sum all numbers, we iterate through the array using the `pop` method. This method mutates the array's reference. So every time we call `arraySum`, it will remove all the numbers from `nums`.

The actual return values it prints are:

```bash
0
1
2
3
4
5
...
```

It's a simple example of how a function can be unpredictable. And as the software grows, if a piece of code depends on many different sources, it becomes more and more complex and consequentely more difficult to reason about, debug, and test.

## Array

### Add a new value to the end

We commonly use the `push` method, but it has some side effects.

```javascript
const alphabet = ['a', 'b', 'c', 'd', 'e'];
alphabet.push('f'); // 6
alphabet; // ['a', 'b', 'c', 'd', 'e', 'f']
```

Another way is to use array spread operator to not mutate the reference of a given array:

```javascript
const alphabet = ['a', 'b', 'c', 'd', 'e'];
const alphabet2 = [...alphabet, 'f'];
alphabet; // ['a', 'b', 'c', 'd', 'e']
alphabet2; // ['a', 'b', 'c', 'd', 'e', 'f']
```

It creates a new array object using the values from the first array.

### Add a new value at the beginning of the array

We commonly use the `unshift` method, but it has some side effects.

```javascript
const alphabet = ['a', 'b', 'c', 'd', 'e'];
alphabet.unshift('z'); // 6
alphabet; // ['z', 'a', 'b', 'c', 'd', 'e']
```

Another way is to use array spread operator to not mutate the reference of a given array:

```javascript
const alphabet = ['a', 'b', 'c', 'd', 'e'];
const alphabet2 = ['z', ...alphabet];
alphabet; // ['a', 'b', 'c', 'd', 'e']
alphabet2; // ['z', 'a', 'b', 'c', 'd', 'e']
```

It creates a new array object using the values from the first array.

### Add a new value to the middle of the array

We can use the `splice` method, but it has some side effects.

```javascript
const alphabet = ['a', 'c', 'd', 'e'];
alphabet.splice(1, 0, 'b');
alphabet; // ['z', 'a', 'b', 'c', 'd', 'e']
```

We can also use a combination of array spread operator with the `slice` method.

```javascript
const alphabet = ['a', 'c', 'd', 'e'];
const newAlphabet = [...alphabet.slice(0, 1), 'b', ...alphabet.slice(1)];
// ['a', 'b', 'c', 'd', 'e']
```

### Removing elements

To remove the last element, a common used method is `pop`. To remove the first, `shift`.

But they can be replaced by the `slice` method.

Pop vs. Slice

```diff
const alphabet = ['a', 'b', 'c', 'd', 'e'];

- alphabet.pop(); // 'e'
- alphabet; // ['a', 'b', 'c', 'd']

+ alphabet.slice(0, -1); // ['a', 'b', 'c', 'd']
+ alphabet; // ['a', 'b', 'c', 'd', 'e']
```

Shift vs. Slice

```diff
const alphabet = ['a', 'b', 'c', 'd', 'e'];

- alphabet.shift(); // 'a'
- alphabet; // ['b', 'c', 'd', 'e']

+ alphabet.slice(1); // ['b', 'c', 'd']
+ alphabet; // ['a', 'b', 'c', 'd', 'e']
```

Splice vs. Slice

```diff
const alphabet = ['a', 'z', 'b', 'c', 'd', 'e'];

- alphabet.splice(1, 1);
- alphabet; // ['a', 'b', 'c', 'd', 'e']

+ const newAlphabet = [...alphabet.slice(0, 1), ...alphabet.slice(2)];
+ newAlphabet; // ['a', 'b', 'c', 'd', 'e']
```

Or build an abstraction to handle every case in your codebase:

```javascript
const removeElement = (array, i) => [...array.slice(0, i), ...array.slice(i + 1)];

const alphabet = ['a', 'z', 'b', 'c', 'd', 'e'];

const newAlphabet = removeElement(alphabet, 1);
newAlphabet; // ['a', 'b', 'c', 'd', 'e']
```

### Sorting

Sorting in order with array spread operator without mutation:

```diff
const books = ['HP2', 'HP3', 'HP1', 'HP4'];

- books.sort(); // ['HP1', 'HP2', 'HP3', 'HP4']
- books // ['HP1', 'HP2', 'HP3', 'HP4']

+ const sortedBooks = [...books].sort(); // ['HP1', 'HP2', 'HP3', 'HP4']
+ books // ['HP2', 'HP3', 'HP1', 'HP4']
```

Reversing with array spread operator without mutation:

```diff
const books = ['HP1', 'HP2', 'HP3', 'HP4'];

- books.reverse(); // ['HP4', 'HP3', 'HP2', 'HP1']
- books // ['HP4', 'HP3', 'HP2', 'HP1']

+ const sortedBooks = [...books].reverse(); // ['HP4', 'HP3', 'HP2', 'HP1']
+ books // ['HP1', 'HP2', 'HP3', 'HP4']
```

### Preserve immutability in conditionals

Sometimes we have an array but we want to add a new value if it pass a certain condition.

```javascript
function getArray({ isSomethingElse }) {
  let array = ['something'];

  if (isSomethingElse) {
    array.push('something else');
  }

  return array;
}
```

We can preverse the immutability with a ternary operator:

```javascript
function getArray({ isSomethingElse }) {
  return isSomethingElse
    ? ['something', 'something else']
    : ['something']
}
```

Or with a simple arrow function:

```javascript
const getArray = ({ isSomethingElse }) =>
  isSomethingElse
    ? ['something', 'something else']
    : ['something'];
```

This idea also works with multiple conditions:

```javascript
function getArray({ isSomethingElse, isOtherThing }) {
  let array = ['something'];

  if (isSomethingElse) {
    array.push('something else');
  }

  if (isOtherThing) {
    array.push('other thing');
  }

  return array;
}

```

But instead of returning the result of the ternary operator, we create a new array object and use it for the next ternary condition:

```javascript
function getArray({ isSomethingElse, isOtherThing }) {
  const tempArray = isSomethingElse
    ? ['something', 'something else']
    : ['something'];

  return isOtherThing
    ? [...tempArray, 'other thing']
    : tempArray;
}
```
