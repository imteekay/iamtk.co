# Destructuring

The [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) is a very versatile tool introduced in EcmaScript 2016. Specifically looking into object destructuring there is a lot of ways we should use it to improve our code:

## Named parameters

We can create named parameters for functions with two or more parameters. This way we don't have to deal with ordering problems, the function API is better exposed and it is easier to track down errors caused by missing parameters:

```diff
- const printHelloWithNameAndCountry = (name, country) => `Hello, ${name} from ${country}`;
- printHelloWithNameAndCountry('Brazil', 'Lucca'); // prints 'Hello, Brazil from Lucca'

+ const printHelloWithNameAndCountry = ({ name, country }) => `Hello, ${name} from ${country}`;
+ printHelloWithNameAndCountry({ country: 'Brazil', name: 'Lucca' }); // prints 'Hello, Lucca from Brazil'
```

You can even set default values!

```javascript
const printHelloWithNameAndCountry = ({
  name = "Lucca",
  country = "Brazil",
} = {}) => `Hello, ${name} from ${country}`;
printHelloWithNameAndCountry(); // prints 'Hello, Lucca from Brazil'
```

## Accessing object fields

Another way we can use the object destructuring is to access the object fields. This makes the code simpler, creating a copy of the targeted field into a variable:

```diff
const nameCountryObj = { name: 'Lucca', country: 'Brazil' };

- const name = nameCountryObj.name;
- const country = nameCountryObj.country;

+ const { name, country } = nameCountryObj;
```

You can use default values here too. For example:

```javascript
const nameCountryObj = { name: "Lucca", country: "Brazil" };
const { name, country, age = 24 } = nameCountryObj;

name; // 'Lucca'
country; // 'Brazil'
age; // '24'
```

The age is not part of the `nameCountryObj` but it has a default value when the object is destructured.

## Accessing array elements

The destructuring feature also works for the array data structure. But instead using the `{}` notation, we use the `[]` to access elements from the array.

```diff
const person = ['Mary', 24];

- const name = person[0];
- const age = person[1];

+ const [name, age] = person;
```

In the PWA context, it is very common to destructure the array that is returned from a React Hook. For example the `useState` hook. It's a function that return an array of a state and its setter:

```diff
import { useState } from 'react';

const defaultPerson = { name: 'Mary', age: 24 };

- const state = useState(defaultPerson);
- const person = state[0];
- const setPerson = state[1];

+ const [person, setPerson] = useState(defaultPerson);
```

Just like in objects, we can also set a default value for array destructuring:

```javascript
const person = ["Mary", 24];
const [name, age, lastname = "Me"] = person;
lastname; // 'Me'
```

**References:**

- <https://medium.com/openmindonline/js-monday-14-destructuring-assignment-934018a6e04d>
- <https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/>
