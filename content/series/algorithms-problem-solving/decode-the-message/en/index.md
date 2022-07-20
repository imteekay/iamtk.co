# Decode the Message

This post is part of the [Algorithms Problem Solving](/series/algorithms-problem-solving) series.

## Problem description

This is the [Decode the Message](https://leetcode.com/problems/decode-the-message/) problem. The description looks like this:

You are given the strings `key` and `message`, which represent a cipher key and a secret message, respectively. The steps to decode `message` are as follows:

1. Use the **first** appearance of all 26 lowercase English letters in `key` as the **order** of the substitution table.
2. Align the substitution table with the regular English alphabet.
3. Each letter in `message` is then **substituted** using the table.
4. Spaces `' '` are transformed to themselves.

- For example, given `key = "**hap**p**y** **bo**y"` (actual key would have **at least one** instance of each letter in the alphabet), we have the partial substitution table of (`'h' -> 'a'`, `'a' -> 'b'`, `'p' -> 'c'`, `'y' -> 'd'`, `'b' -> 'e'`, `'o' -> 'f'`).

Return *the decoded message*.

## Examples

### Example 1

```bash
Input: key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"
Output: "this is a secret"
Explanation: The diagram above shows the substitution table.
It is obtained by taking the first appearance of each letter in "thequickbrownfoxjumps over thelazydog".
```

### Example 2

```bash
Input: key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
Output: "the five boxing wizards jump quickly"
Explanation: The diagram above shows the substitution table.
It is obtained by taking the first appearance of each letter in "eljuxhpwnyrdgtqkviszcfmabo".
```

## Solution

Adding the tests first:

```javascript
import { describe, expect, it } from 'vitest';
import { decodeMessage } from '../decode-the-message';

describe('decodeMessage', () => {
  it('example 1', () => {
    expect(
      decodeMessage(
        'eljuxhpwnyrdgtqkviszcfmabo',
        'zwx hnfx lqantp mnoeius ycgk vcnjrdb',
      ),
    ).toEqual('the five boxing wizards jump quickly');
  });

  it('example 2', () => {
    expect(
      decodeMessage(
        'the quick brown fox jumps over the lazy dog',
        'vkbs bs t suepuv',
      ),
    ).toEqual('this is a secret');
  });
});
```

With the tests done, it's time to start writing our algorithm.

The algorithm is pretty simple. The idea behind it is to use a hashmap data structure to map each character in the key to the alphabet and use it to unravel the secret message.

```javascript
let hashmap = new Map();
```

We will also have the `alphabet` value and a counter:

```javascript
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let counter = 0;
```

We'll use the counter as the index to access the alphabet. For the first character in the `key` , it will access the index `0` and the increment the counter for the following character.

We also need to handle the space character. We do it by setting a space character in the hashmap.

```javascript
hashmap.set(' ', ' ');
```

Now we need to continue building the hashmap based on the characters of the `key`.

```javascript
for (let char of key) {
  if (!hashmap.has(char)) {
    hashmap.set(char, alphabet[counter]);
    counter++;
  }
}
```

For each character in the `key`, we need to ask for the hashmap if it has the character. If it doesn't, we should add this character in the hashmap.

Using the `counter` with the `alphabet`, we get the "current character" and set it as the value to the `char` key.

Now we need to increment the counter for the following characters. Also, if the hashmap already has the character, it shouldn't do anything else.

Then we can just loop over the `message`, use the `hashmap` to get the character and push it to a `result` array.

```javascript
let result = [];

for (let char of message) {
  result.push(hashmap.get(char));
}
```

After this we can just return a string based on the `result` array using the `join` method.

```javascript
return result.join('');
```

## Complete solution

```javascript
function decodeMessage(key, message) {
  let hashmap = new Map();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let counter = 0;

  hashmap.set(' ', ' ');

  for (let char of key) {
    if (!hashmap.has(char)) {
      hashmap.set(char, alphabet[counter]);
      counter++;
    }
  }

  let result = [];

  for (let char of message) {
    result.push(hashmap.get(char));
  }

  return result.join('');
}
```

## Resources

- [Algorithms Problem Solving Series](https://leandrotk.github.io/tk/series/algorithms-problem-solving/index.html)
- [Algorithms & Data Structures studies](https://github.com/imteekay/algorithms)
- [Data Structures in JavaScript Series](https://www.iamtk.co/series/data-structures-in-javascript)
- [Stack Data Structure in JavaScript](https://www.iamtk.co/series/data-structures-in-javascript/stack-data-structure)
- [Queue Data Structure in JavaScript](https://www.iamtk.co/series/data-structures-in-javascript/queue-data-structure)
- [Linked List Data Structure in JavaScript](https://www.iamtk.co/series/data-structures-in-javascript/linked-list-data-structure)
- [Stack Data Structure](https://leandrotk.github.io/tk/2020/01/stack-data-structure/index.html)
- [Queue Data Structure](https://leandrotk.github.io/tk/2020/01/queue-data-structure/index.html)
- [Linked List](https://leandrotk.github.io/tk/2020/02/linked-list/index.html)
- [Tree Data Structure](https://leandrotk.github.io/tk/2020/02/tree-data-structure/index.html)