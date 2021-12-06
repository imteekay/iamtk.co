One day I came across a [tweet](https://twitter.com/larimaza/status/1275747670989176833) from Lari Mazza that says

> "Can I make a suggestion? Types are hard to understand when you’ve only worked with JS in your life and suddenly have to learn TypeScript"

As a software engineer that learned Python, Ruby, Javascript, and Clojure first, when I tried C++, it was a horror movie. I couldn't do much, so counterproductive, and frustrating. Maybe because I was doing everything wrong and I didn't understand types the right way.

But even though I had so many problems, I could implement a bunch of [algorithms and data structures](https://github.com/leandrotk/algorithms).

Now I'm using more and more Typescript in my day-to-today job and [my side projects](https://github.com/leandrotk/laziness), I feel I'm more prepared to confront types. Actually, not confront, but use them in my favor.

This post is my attempt to help developers think more in types and understand this mental model.

## Javascript types

If you're here, you probably heard that Typescript is a superset of Javascript. If not, great, you just learned something new today. YAY!

Typescript is a superset because any Javascript code is valid in Typescript, syntactically speaking. It may or may not compile depending on the Typescript compiler configuration. But in terms of syntax, it works just fine. This is why you can migrate Javascript to Typescript progressively by just replacing the `.js` extension with the `.ts`. Everything will be without type declarations (the `any` type), but that's another story.

Also, if you code in Javascript - or any other programming language - you probably think in types:

- "Hm, it is a list of integers, so I'll need to filter only the even numbers and return a new list"
- "This is an object, but I just need to get this string value from the property X"
- "This function receives two parameters. Both A and B are integers and I want to sum them"

Yeah, you got the idea. We think in types. But they are just in our heads. We constantly think about them because we need to know how to handle, parse, or modify data. We need to know which methods we are allowed to use in this object type.

To give a more concrete example, imagine you want to sum the price of all products. A product object looks like this:

```tsx
const product = {
  title: 'Some product',
  price: 100.0,
};
```

But now with a list of products:

```tsx
const products = [
  {
    title: 'Product 1',
    price: 100.0,
  },
  {
    title: 'Product 2',
    price: 25.0,
  },
  {
    title: 'Product 3',
    price: 300.0,
  },
];
```

Ok! Now we want a function to sum all the products prices.

```tsx
function sumAllPrices(products) {
  return products.reduce((sum, product) => sum + product.price, 0);
}

sumAllPrices(products); // 425
```

Just receive the products as the argument and reduce all product prices. Javascript works just fine. But while building this function you start to think about the data and how to handle it properly.

The first part: products as an argument. Here you just think: "well, we're receiving a list of some objects". Yeah, in our heads the products are a list. This is why we can think of using the `reduce` method. It is a method from the `Array` prototype.

Then we can think about the object in detail. We know that the product object has a `price` property. And this property is a number. This is why we can do `product.price` and sum with the accumulator.

Recapping:

- `products` is a list of objects.
- As a list, we can use the `reduce` method, as this method a member of the `Array` prototype.
- The `produce` object has some properties. One of them is the `price`, which is a number.
- As a number property, we can use it to sum with the reduce accumulator.
- We wanted to return the a number, the sum of all products prices.

We are always thinking of data types, we just need to add the type annotations to make it more explicit and ask the compiler for help. Our memory is limited and the compilers are here to help us, humans.

The type system will not only make our data more consistent, but it can also provide autocompletion for data types. It knows the types, so it can show the members for the data. We will take a look at this idea later. Here I just wanted to show that we think in types in our heads.

## Simples Types & Simple Uses

So we are ready to use some strongly typed programming languages like Typescript. We simply need to explicitly add type annotations to our data structures. It's simple. But sometimes it's not that easy (usually it's not easy when you come from dynamically typed languages. You feel unproductive. It feels like a battle against types. The idea here is to make this learning curve more smooth and fun).

Here we will see many examples of how to use types in Typescript. We start with easy and silly examples and progressively make it more complex while designing the mental model to think in types.

As Javascript, Typescript also has basic data types like `number`, `string`, `boolean`, `null`, etc. You can find all the basic data types in the [Typescript Docs](https://www.typescriptlang.org/docs/handbook/basic-types.html).

With these units of data, we can make our programs more useful. To be more practical, let's get a simple example. A `sum` function.

How does it work in Javascript?

```tsx
function sum(a, b) {
  return a + b;
}
```

Everything ok? ok.

Now let's use it:

```tsx
sum(1, 2); // 3
sum(2, 2); // 4
sum(0, 'string'); // '0string'   WTF!
```

The first two calls are what we expect to happen in our system. But Javascript is very flexible, it lets us provide any value to this function. The last call is bizarre. We can call with a string, but it will return an unexpected result. It doesn't break in development, but it will result in strange behavior in runtime.

What do we want? We want to add some constraints to the function. It will only be able to receive numbers. That way, we narrow the possibility to have unexpected behaviors. And the function return type is also a number.

```tsx
function sum(a: number, b: number): number {
  return a + b;
}
```

Great! It was very simple. Let's call again.

```tsx
sum(1, 2); // 3
sum(2, 2); // 4
sum(0, 'string'); // Argument of type '"string"' is not assignable to parameter of type 'number'.
```

As we type annotate our function, we provide information to the compiler to see if everything is correct. It will follow the constraints we added to the function.

So the first two calls are the same as in Javascript. It will return the correct calculation. But the last one we have an error in compile time. This is important. The error now happens in compile time and prevents us to ship incorrect code to production. It says that the `string` type is not part of the set of values in the `number` type universe.

For basic types, we just need to add colon followed by the type definition.

```tsx
const isTypescript: boolean = true;
const age: number = 24;
const username: string = 'tk';
```

Now let's increase the challenge. Remember the product object code we wrote in Javascript? Let's implement it again, but now with the Typescript mindset.

Just to remember what we are talking about:

```tsx
const product = {
  title: 'Some product',
  price: 100.0,
};
```

This is the product value. It has a `title` as `string` and the `price` as `number`. For now, this is what we need to know.

The object type would be something like:

```tsx
{ title: string, price: number }
```

And we use this type to annotate our function:

```tsx
const product: { title: string; price: number } = {
  title: 'Some product',
  price: 100.0,
};
```

With this type, the compiler will know how to handle inconsistent data:

```tsx
const wrongProduct: { title: string; price: number } = {
  title: 100.0, // Type 'number' is not assignable to type 'string'.
  price: 'Some product', // Type 'string' is not assignable to type 'number'.
};
```

Here it breaks in two different properties:

- The `title` is a `string` and should not receive a `number`.
- The `price` is a `number` and should not receive a `string`.

The compiler helps us to catch type errors like that.

We could improve this type annotation by using a concept called `Type Aliases`. It's a way to create a new name for a specific type.

In our case, the product type could be:

```tsx
type Product = {
  title: string;
  price: number;
};

const product: Product = {
  title: 'Some product',
  price: 100.0,
};
```

It's better to visualize the type, add semantics, and maybe reuse in our system.

Now that we have this product type, we can use it to type the products list. The syntax looks like this: `MyType[]`. In our case, `Product[]`.

```tsx
const products: Product[] = [
  {
    title: 'Product 1',
    price: 100.0,
  },
  {
    title: 'Product 2',
    price: 25.0,
  },
  {
    title: 'Product 3',
    price: 300.0,
  },
];
```

Now the function `sumAllPrices`. It will receive the product and return a number, the sum of all product prices.

```tsx
function sumAllPrices(products: Product[]): number {
  return products.reduce((sum, product) => sum + product.price, 0);
}
```

This is very interesting. As we typed the product, when we write `product.`, it will show the possible properties we can use. In the product type case, it will show the properties `price` and `title`.

```tsx
sumAllPrices(products); // 425
sumAllPrices([]); // 0
sumAllPrices([{ title: 'Test', willFail: true }]); // Type '{ title: string; willFail: true; }' is not assignable to type 'Product'.
```

Passing the `products` will result in the value `425`. An empty list will result in the value `0`. And if we pass an object with a different structure - Typescript has a structural type system and we will dig deep into this topic later - the compiler will throw a type error telling that the structure is not part of the `Product` type.

## Structural Typing

Structural typing is a type of type compatibility. It's a way to understand the compatibility between types based on its structure: features, members, properties. Some languages have type compatibility based on the names of the types, and it's called nominal typing.

For example, in Java, even if different types have the same structure, it will throw a compile error because we are using a different type to instantiate and define a new instance.

```tsx
class Person {
  String name;
}

class Client {
  String name;
}

Client c = new Person();  // compiler throws an error
Client c = new Client();  // OK!
```

In nominal type systems, the relevant part of a type is the name, not the structure.

Typescript, on another hand, verifies the structural compatibility to allow or not specific data. Its type system is based on structural typing.

The same code implementation that crashes in Java, would work in Typescript.

```tsx
class Person {
  name: string;
}

class Client {
  name: string;
}

const c1: Client = new Person(); // OK!
const c2: Client = new Client(); // OK!
```

We want to use the `Client` type, and it has the property `name`, to point to the `Person` type. It also has the property type. So Typescript will understand that both types have the same shape.

But it is not only about classes, but it works for any other "object".

```tsx
const c3: Client = {
  name: 'TK',
};
```

This code compiles too because we have the same structure here. The typescript type system doesn't care about if it is a class, or an object literal if it has the same members, it will be flexible and compile.

But now we will add a third type: the `Customer`.

```tsx
class Customer {
  name: string;
  age: number;
}
```

It not only has the `name` property, but also the `age`. What would happen if we instantiate a `Client` instance in a constant of type `Customer`?

```tsx
const c4: Customer = new Client();
```

The compiler will not accept that. We want to use the `Customer`, that has `name` and `age`. But we are instantiating the `Client` that has only the `name` property. So it doesn't have the same shape. It will cause an error:

```bash
Property 'age' is missing in type 'Client' but required in type 'Customer'.
```

The other way around would work because we want `Client`, and `Customer` has all the properties (`name`) from `Client`.

```tsx
const c5: Client = new Customer();
```

It works fine!

We can go on for enums, object literals, and any other type, but the idea here is to understand that the structure of the type is the relevant part.

## Runtime and Compile time

This is a much more complex topic in programming language theory, but I wanted to give some examples to distinct runtime and compile time.

Basically, the runtime is the execution time of a program. Imagine your backend receiving data from a frontend form page, handling this data, and saving it. Or when your frontend is requesting data from a server to render a list of ~~Pokemons~~ products.

Compile time is basically when the compiler is executing operations in the source code to satisfy the programming language requirements. It can include type checking as an operation for example. Compile time errors in Typescript, for example, is very related to the code that we wrote before:

- When the type is missing property: `Property 'age' is missing in type 'Client' but required in type 'Customer'.`
- When the type doesn't match: `Type '{ title: string; willFail: true; }' is not assignable to type 'Product'.`

Let's see some examples to have a better understanding.

I want to write a function to get the index of a part of the passed programming language.

```tsx
function getIndexOf(language, part) {
  return language.indexOf(part);
}
```

It receives the `language` and the `part` that we will look for to get the index.

```tsx
getIndexOf('Typescript', 'script'); // 4
getIndexOf(42, 'script'); // Uncaught TypeError: language.indexOf is not a function at getIndexOf
```

When passing a string, it works fine. But passing a number, we got a runtime error `Uncaught TypeError`. Because a number doesn't have an `indexOf` function, so we can't really use it.

But if we give type information to the compiler, in compile time, it will throw an error before running the code.

```tsx
function getIndexOf(language: string, part: string): number {
  return language.indexOf(part);
}
```

Now our program knows that it will need to receive two strings and return a number. The compiler can use this information to throw errors when we get a type error... before runtime.

```tsx
getIndexOf('Typescript', 'script'); // 4
getIndexOf(42, 'script'); // Argument of type '42' is not assignable to parameter of type 'string'.
```

Maybe, for small projects (or small functions like ours) we don't really see too much benefit. In this case, we know that we need to pass a string, so we won't pass a number to the function. But when the codebase grows or you have many people adding code and more complexity, it's clear to me that a type system can help us a lot to get errors in compile time before shipping code to production.

At first, we need all the learning curve to understand types and all the mental models, but after a while, you'll be more used to type annotations and eventually become friends with the compiler. It would be a _helper_, not a _yeller_.

As we are learning about the basic difference between compile time and runtime, I think it's great to differentiate types from values.

All the examples I'll show here can be copied and run in the [Typescript Playground](https://www.typescriptlang.org/play) to understand the compiler and the result of the compilation process (aka the _"Javascript"_).

In Typescript, we have two different universes: the value and the type spaces. The type space is where types are defined and used to enable the compiler to do all the great magic. And the value space is the values in our programs like variables, constants, functions, value literals, and things that we have in runtime.

It's good to have an understanding of this concept because in Typescript we can't use type checking in runtime. It has a very clear separation between type checking and the compilation process.

Typescript has the process of type checking the source code types and sees if everything is correct and consistent. And then it can compile to Javascript. As these two parts are separate, we can't use type checking in runtime. Only in "compile time". If you try to use a type as a value, it will throw an error: `only refers to a type, but is being used as a value here`.

Let's see examples of this idea.

Imagine we want to write a function called `purchase` where we receive a payment method and based on this method, we want to do some action. We have a credit card and a debit card. Let's define them here:

```tsx
type CreditCard = {
  number: number;
  cardholder: string;
  expirationDate: Date;
  secutiryCode: number;
};

type DebitCard = {
  number: number;
  cardholder: string;
  expirationDate: Date;
  secutiryCode: number;
};

type PaymentMethod = CreditCard | DebitCard;
```

These types are in the _Type space_, so it only works in compile time. After type checking this function, the compiler removes all the types.

If you add these types in the Typescript Playground, the output will be only a strict definition `"use strict";`.

The idea here is to really understand that the types live in the _Type space_ and will not be available in the runtime. So in our function, it won't be possible to do this:

```tsx
const purchase = (paymentMethod: PaymentMethod) => {
  if (paymentMethod instanceof CreditCard) {
    // purchase with credit card
  } else {
    // purchase with debit card
  }
};
```

In compiler throws an error: `'CreditCard' only refers to a type, but is being used as a value here.`.

The compiler knows the difference between the two spaces and that the type `CreditCard` lives in the _Type space_.

The playground is a very cool tool to see the output of your Typescript code. If you create a new credit card object like this:

```tsx
const creditCard: CreditCard = {
  number: 2093,
  cardholder: 'TK',
  expirationDate: new Date(),
  secutiryCode: 101,
};
```

The compiler will type check it and do all the magic and then it transpiles the Typescript code to Javascript. And we have this:

```tsx
const creditCard = {
  number: 2093,
  cardholder: 'TK',
  expirationDate: new Date(),
  secutiryCode: 101,
};
```

The same object, but now only with the value and without the type.

## Constraints & Type Narrowing

> When we restrict what we can do, it’s easier to understand what we can do.

We use types as constraints to limit the bugs in your program. To understand this concept, I'm stealing an example from Lauren Tan's talk about Type Systems.

```tsx
const half = (x) => x / 2;
```

How many ways does this function can fail? Imagine a number of possible inputs:

```tsx
[
  null,
  undefined,
  0,
  '0',
  'TK',
  { username: 'tk' },
  [42, 3.14],
  (a, b) => a + b,
];
```

And what are the results for input:

```tsx
half(null); // 0
half(undefined); // NaN
half(0); // 0
half('0'); // 0
half('TK'); // NaN
half({ username: 'tk' }); // NaN
half([42, 3.14]); // NaN
half((a, b) => a + b); // NaN
```

We have different and unexpected results here. Here it's clear that we want a number as the `half` function, do the calculation, and great, it's done! But sometimes we don't control the input or the codebase is big, or new/unfamiliar, and we're able to make these little mistakes.

The idea of adding constraints to our code is to narrow the possibilities of a range of types. In this case, we want to limit the input type to a `number` type. It's the only type that we care about to do the half calculation. With type narrowing, we again give type information to the compiler.

```tsx
const half = (x: number) => x / 2;
```

And with this new information, if we call the function with the test cases again, we have different results:

```tsx
half(null); // Argument of type 'null' is not assignable to parameter of type 'number'.
half(undefined); // Argument of type 'undefined' is not assignable to parameter of type 'number'.(
half(0); // 0
half('0'); // Argument of type '"0"' is not assignable to parameter of type 'number'.
half('TK'); // Argument of type '"TK"' is not assignable to parameter of type 'number'.
half({ username: 'tk' }); // Argument of type '{ username: string; }' is not assignable to parameter of type 'number'.
half([42, 3.14]); // Argument of type 'number[]' is not assignable to parameter of type 'number'.
half((a, b) => a + b); // Argument of type '(a: any, b: any) => any' is not assignable to parameter of type 'number'.
```

Basically the compiler will tell us that only the number type, in this case, the `0` value, is a valid input, it will compile, and allow to run the code. We narrow the input type and allow only the value we really want for this function.

But are other ways to narrow the types in Typescript. Imagine we have a function that receives a parameter that can be either a string or a number.

```tsx
type StringOrNumber = string | number;

function stringOrNumber(value: StringOrNumber) {}
```

In the function body, the compiler won't know which methods or properties we can use for this type. Is it a string or number? We only know about the value in runtime. But we can narrow the type using the `typeof`:

```tsx
function stringOrNumber(value: StringOrNumber) {
  if (typeof value === 'string') {
    // value.
    // your ide will show you the possible methods from the string type
    // (parameter) value: string
    value;
  }

  if (typeof value === 'number') {
    // value.
    // your ide will show you the possible methods from the number type
    // (parameter) value: number
    value;
  }
}
```

With an `if` statement and the `typeof`, we can give more information to the compiler. Now it will know the specific type for each `if` body.

The IDE knows what to show for the specific type. In runtime, when the value is a string, it will go to the first `if` statement, and the compiler will infer that the type is a string: `(parameter) value: string`.

When the value is a number, it will go to the second `if` statement and the compiler will infer that a type is a number: `(parameter) value: number`.

The `if` statement can be a helper to the compiler.

Another example is when we have an optional property in an object, but in a function, we need to return a value based on this optional value.

Imagine we have this type:

```tsx
type User = {
  name: string;
  address: {
    street: string;
    complement?: string;
  };
};
```

It's a simple `User` type. Let's focus on the `complement` property. It's optional (take a closer look at the `?` symbol), which means that it can be a `string` or `undefined`.

Now we want to build a function to receive the user and get the length of the address complement. What about this?

```tsx
function getComplementLength(user: User): number {
  return user.address.complement.length;
  // (property) complement?: string | undefined
  // Object is possibly 'undefined'.
}
```

As we see earlier, the `complement` can be a `string` or `undefined`. `undefined` doesn't really have a property called `length`:

```tsx
Uncaught TypeError: Cannot read property 'length' of undefined
```

We could make something like:

```tsx
function getComplementLength(user: User) {
  return user.address.complement?.length;
}
```

If the `complement` has a string value, we can call `length`, otherwise, it will return `undefined`. So this function has two possible return types: `number | undefined`. But we want to ensure that we only return `number`. So we use a `if` or a ternary condition to narrow the type. It will only call `.length` when it has real value (or when it is not `undefined`).

```tsx
function getComplementLength(user: User): number {
  return user.address.complement ? user.address.complement.length : 0;
}
```

If it is `undefined`, we return the minimum length: `0`. Now we can use the function with the right type design with and without the complement. Without compile and runtime errors.

```tsx
getComplementLength({
  name: 'TK',
  address: {
    street: 'Shinjuku Avenue',
  },
}); // 0

getComplementLength({
  name: 'TK',
  address: {
    street: 'Shinjuku Avenue',
    complement: 'A complement',
  },
}); // 12
```

We'll get `0` from the first function call and `12` from the second call.

With this `if` concept, we can also use other helpers to do the same thing. We could use the `in` operator to verify a property from an object, a `Array.isArray` to verify an array, or the `instanceof` for any other class type.

We could also use more advanced concepts like assertion function or type guards, but I'll let these concepts to future posts.

One thing that I want to dig deep in this _Constraints_ topic is immutability.

In Javascript and Typescript, we have the idea of mutable objects. If you define value in a variable, we can reassign it with another value later.

```tsx
let email = 'harry.potter@mail.com';
email; // 'harry.potter@mail.com'
email = 'hermione.granger@mail.com';
email; // 'hermione.granger@mail.com'
```

Now imagine you have a list of numbers. And you want to use a function to sum all of its numbers. The function looks like this:

```tsx
function sumNumbers(numbers: number[]) {
  let sum = 0;
  let num = numbers.pop();

  while (num !== undefined) {
    sum += num;
    num = numbers.pop();
  }

  return sum;
}
```

You call the function passing your list and get the result. It works just fine.

```tsx
const list = [1, 2, 3, 4];
sumNumbers(list); // 10
```

But what happened to your list? Did the function mutate it entirely?

```tsx
list; // []
```

If we use the list, it's empty now. The `pop` in the `sumNumbers` function is a "mutate" function. It gets the references and removes the item from them. It's not a copy, it's the real reference.

In runtime, we can use other functions or ways to do the same thing: using reduce, do a for loop without the need to `pop` items from the array.

But using Typescript, we can provide immutability in compile time. If you are not using types, it's possible to use a type assertion `as const`. Imagine this:

```tsx
const author = {
  name: 'Walter Isaacson',
  email: 'walter.isaacson@mail.com',
  books: [
    {
      title: 'Leonardo Da Vinci',
      price: 50.0,
    },
  ],
};

author.books.push({
  title: 'Steve Jobs',
  price: 10.0,
});
```

Just an author object and then we add a new book to this author. The `push` method updates the book's array reference. It's a "mutate" method. Let's see if you use the const assertion `as const`:

```tsx
const author = {
  name: 'Walter Isaacson',
  email: 'walter.isaacson@mail.com',
  books: [
    {
      title: 'Leonardo Da Vinci',
      price: 50.0,
    },
  ],
} as const;

author.books.push({
  title: 'Steve Jobs',
  price: 10.0,
});
// Property 'push' does not exist on type
// 'readonly [{ readonly title: "Leonardo Da Vinci"; readonly price: 50; }]'
```

The compiler won't compile. It gets an error on the author's object. It's is now readonly, and as a readonly object, it has no method called `push` (or any "mutate" method). We added a constraint to the author's object. Before it was a specific type (with all the "mutate" methods), and now we narrowed the type to be almost the same, but without the "mutate" methods. Type narrowing.

To continue, let's add types to this object. The `book` and the `author`:

```tsx
type Book = {
  title: string;
  price: number;
};

type Author = {
  name: string;
  email: string;
  books: Book[];
};
```

Add the type to the author object:

```tsx
const author: Author = {
  name: 'Walter Isaacson',
  email: 'walter.isaacson@mail.com',
  books: [
    {
      title: 'Leonardo Da Vinci',
      price: 50.0,
    },
  ],
};
```

Add the type to a new book object:

```tsx
const book: Book = {
  title: 'Steve Jobs',
  price: 30,
};
```

And now we can add the new book to the author:

```tsx
author.name = 'TK';
author.books.push(book);
```

It works just fine!

I want to show another way to add immutability in compile time. Typescript has an utility type called `Readonly`.

You can add the `readonly` for each property in an object. Something like this:

```tsx
type Book = {
  readonly title: string;
  readonly price: number;
};
```

But it can be very repetitive. So we can use the `Readonly` utility to add the `readonly` to all properties of an object:

```tsx
type Book = Readonly<{
  title: string;
  price: number;
}>;
```

One thing to keep in mind is that it doesn't add the readonly for nested properties. For example, if we add the `Readonly` to the `Author` type, it won't add the `readonly` to the `Book` type too.

```tsx
type Author = Readonly<{
  name: string;
  email: string;
  books: Book[];
}>;
```

All the properties from the author can't be reassigned, but you can mutate the `books` list here (`push`, `pop`, ...) because the `Book[]` is not readonly. Let's see it.

```tsx
const author: Author = {
  name: 'Walter Isaacson',
  email: 'walter.isaacson@mail.com',
  books: [
    {
      title: 'Leonardo Da Vinci',
      price: 50.0,
    },
  ],
};

const book: Book = {
  title: 'Steve Jobs',
  price: 30,
};

author.books.push(book);
author.books;
/* =>
 *
 * [
 *   {
 *     title: 'Leonardo Da Vinci',
 *     price: 50.00,
 *   },
 *   {
 *    title: 'Steve Jobs',
 *    price: 30
 *   }
 * ]
 *
 */
```

The `push` will work just fine.

So, how do we enforce a readonly to the `books`? We need to make sure that the array is a readonly type. We can use the `Readonly`, or use another utility from Typescript called `ReadonlyArray`. Let's see the two ways to do it.

With `Readonly`:

```tsx
type Author = Readonly<{
  name: string;
  email: string;
  books: Readonly<Book[]>;
}>;
```

With `ReadonlyArray`:

```tsx
type Author = Readonly<{
  name: string;
  email: string;
  books: ReadonlyArray<Book>;
}>;
```

For me, both work great! But in my opinion, `ReadonlyArray` is more semantic and I also feel it is less verbose (not that the `Readonly` with an array is).

What happened if we try to mutate the author object now?

```tsx
author.name = 'TK'; // Cannot assign to 'name' because it is a read-only property.
author.books.push(book); // Property 'push' does not exist on type 'readonly [{ readonly title: "Leonardo Da Vinci"; readonly price: 50; }]'.
```

Great! Now we can catch mutable operations in compile time. This is a way to use the concept of adding constraints to our types to make sure they only do what is really needed.

## Semantics & Readability

At first, I felt that Typescript could be very verbose because of the types and make the code much more complex than it should be. And it actually can. Strive for simplicity is the goal and it is difficult at the same time.

This idea is very related to clean code and how we can write code to be human-readable and maintainable. Typescript is no different. Most of the cases, we don't need super complex types. Let the simple types do the work.

Another thing that I find very useful is semantic of types.

Imagine you need to add a string to the `sessionStorage` to save it in the browser. Your function looks like this:

```tsx
function saveMyString(value: string): any {
  sessionStorage.myString = value;
}
```

You add a type annotation to the string input and as you don't know about the returning type, you probably add a `any` type.

But what's the real meaning behind this returning type? Is it returning anything?

It just saves the string to the `sessionStorage`. It doesn't return anything. The `void` type was what you're looking for. As Typescript docs says: `the absence of having any type at all`.

```tsx
function saveMyString(value: string): void {
  sessionStorage.myString = value;
}
```

Great, the meaning of the type is correct now. The correctness is very important in a type system. It's a way to model our data, but also help maintain systems for future developers. Even if the developer is ... you!

Before we were talking about verbose code. And we can improve a lot of our code by using Typescript type inference.

For some code, we don't need to explicitly add type annotation. The Typescript compiler will understand and infer it implicitly. For example:

```tsx
const num: number = 1;
```

This code is redundant. We can just let the compiler infers it like this:

```tsx
const num = 1;
```

In our example earlier, we add the annotation `void` to the `saveMyString` function. But as the function doesn't return any value, the compiler will infer that the returning type is `void` implicitly.

When I learned this, I thought with myself. But one of the biggest advantages of using Typescript (or any other type system / static type language) is types as documentation. If we let the compiler infer most of the types, we won't have the documentation we want.

But if you hover over the Typescript code in your editor (at least VS Code works like that), you can see the type information and relevant documentation.

Let's see other examples of redundant code and make the code less verbose and let the compiler works for us.

```tsx
function sum(a: number, b: number): number {
  return a + b;
}
```

We don't need the returning type `number`, because the compiler knows that a `number` + another `number` is equal to a `number` type, and it is the returning type. It can be:

```tsx
function sum(a: number, b: number) {
  return a + b;
}
```

Implicit code, but with documentation, and the compiler does the work.

Type inference works for methods too:

```tsx
function squareAll(numbers: number[]): number[] {
  return numbers.map((number) => number * number);
}
```

This function gets a list of numbers and makes every number a squared value. The returning type is `number[]`, even though the result of a map is always a list, and as we have a list of numbers, it will always be a list of numbers. So we let the compiler infers this too:

```tsx
function squareAll(numbers: number[]) {
  return numbers.map((number) => number * number);
}
```

This works the same way for objects too.

```tsx
const person: { name: string; age: number } = {
  name: 'TK',
  age: 24,
};
```

A person object with a string name and a number age. But as we are assigning these values, the compiler can infer these types.

```tsx
const person = {
  name: 'TK',
  age: 24,
};
```

If you hover the `person`, you get this:

```tsx
const person: {
  name: string;
  age: number;
};
```

The types are documented here.

Another benefit of type inference is that we can easily refactor our code. It's a simple example, but good to illustrate the refactoring process. Let's get the `sum` function again.

```tsx
function sum(a: number, b: number): number {
  return a + b;
}
```

Instead of returning the sum number, we want to return `"Sum: {a + b}"`. So for `a = 1` and `b = 2`, we have the resulting string as `"Sum: 3"`.

```tsx
function sum(a: number, b: number): string {
  return `Sum: ${a + b}`;
}

sum(1, 2); // Sum: 3
```

Great! But now letting the compiler infers this.

```tsx
// function sum(a: number, b: number): number
function sum(a: number, b: number) {
  return a + b;
}

// function sum(a: number, b: number): string
function sum(a: number, b: number) {
  return `Sum: ${a + b}`;
}
```

We just need to modify the returning value and the type inference will work. No need to think about the returning type. This is a small example, but for more complex functions, it would work too.

Back to the readability part, we can use `Enum`. A utility that defines a set of named constants. It's a way to give more meaning to the data in your application.

In your node app or a frontend app, you possibly do some fetching to request data. You commonly use a fetch object to perform a request and sometimes you need to pass the accept headers.

```tsx
fetch('/pokemons', {
  headers: {
    Accept: 'application/json',
  },
});

fetch('/harry-potter/spells', {
  headers: {
    Accept: 'application/json',
  },
});
```

It's good, but we can also use an enum to separate this accept string in a constant and reuse.

```tsx
enum MediaTypes {
  JSON = 'application/json',
}

fetch('/pokemons', {
  headers: {
    Accept: MediaTypes.JSON,
  },
});

fetch('/harry-potter/spells', {
  headers: {
    Accept: MediaTypes.JSON,
  },
});
```

And we are able to add more data related to the `MediaTypes` like `PDF`:

```tsx
enum MediaTypes {
  JSON = 'application/json',
  PDF = 'application/pdf',
}
```

With `Enum`, we can encapsulate data into a meaningful block of code.

Recently, I was implementing a "state" React component. It's basically a component that renders an empty state or an error state based on the request response.

The UI for the empty and the error states were very similar. Only the title and the description text and the image icon were different. So I thought: "I have two ways in my mind to implement this: do the logic outside the component and pass all the information needed or pass a 'state type' and let the component render the correct icon and messages."

So I built an enum:

```tsx
export enum StateTypes {
  Empty = 'Empty',
  Error = 'Error',
}
```

And I could just pass this data to the component as the `type`:

```tsx
import ComponentState, { StateTypes } from './ComponentState';

<ComponentState type={StateTypes.Empty} />
<ComponentState type={StateTypes.Error} />
```

In the component, it had a state object with all the information related to the `title`, `description`, and `icon`.

```tsx
const stateInfo = {
  Empty: {
    title: messages.emptyTitle,
    description: messages.emptyDescription,
    icon: EmptyIcon,
  },
  Error: {
    title: messages.errorTitle,
    description: messages.errorDescription,
    icon: ErrorIcon,
  },
};
```

So I could just receive the type based on the enum and use this `stateInfo` object with the `State` component from our design system:

```tsx
export const ComponentState = ({ type }) => (
  <State
    title={stateInfo[type].title}
    subtitle={stateInfo[type].subtitle}
    icon={stateInfo[type].icon}
  />
);
```

This is a way to use an enum to encapsulate important data into a meaningful block of code in your application.

Another cool feature from Typescript is optional properties. When we have properties from an object that can be a real value or undefined, we use an optional property to be explicitly that the property can be or not be there. The syntax for this is a simple `?` operator in the object property. Imagine this function:

```tsx
function sumAll(a: number, b: number, c: number) {
  return a + b + c;
}
```

But now the `c` value is optional:

```tsx
function sumAll(a: number, b: number, c?: number) {
  return a + b + c;
}
```

We add the `?` after `c`. But now we have a compiler error saying:

```tsx
(parameter) c: number | undefined
Object is possibly 'undefined'.
```

We can't sum an `undefined` value (well, actually in Javascript we can, but we receive a `NaN` value).

We need to ensure that the `c` exists. Type narrowing!

```tsx
function sumAll(a: number, b: number, c?: number) {
  if (c) {
    return a + b + c;
  }

  return a + b;
}
```

If the `c` exists, it will be a `number` and we can sum all. If not, sum only the `a` and `b` values.

An interesting part of this optional property is that it is a `undefined` not `null`. This is why we do this, we get a compile error:

```tsx
let number = null;
sumAll(1, 2, number);
// Argument of type 'null' is not assignable to parameter of type 'number | undefined'.
```

As the `?` operator doesn't handle the `null` value, choose to use the `undefined` type in your application and so you can still use the optional property and make the types consistent. We can use it like this:

```tsx
let value: number | undefined;
sumAll(1, 2, value); // 3
```

If you add a default value to the parameter, you won't need the `?` operator. Actually, the compiler will say that the `Parameter cannot have question mark and initializer`.

```tsx
function sumAll(a: number, b: number, c: number = 3) {
  return a + b + c;
}
```

Optional properties not only works on variables and parameters, but also in objects.

An API response is a good example of type definition and optional property together. In API responses, data can be optional. Sometimes the API sends, sometimes it has no value.

How we model our types is really important for an application. If an optional property is defined as a required type, we can make our application breaks in runtime. But if we design the types correctly, we have the possible errors in compile time.

Imagine we are fetching a user data and this is the way we modeled the response type:

```tsx
type UserResponse = {
  name: string;
  email: string;
  username: string;
  age: number;
  isActive: boolean;
};
```

But in reality, the email is optional for the user. The API endpoint could return or not. But the `UserResponse` type we built treat it as a required property.

After fetching the user data, we want to see if the user email matches with a specific domain.

```tsx
function matchDomain(email: string) {
  return email.endsWith(domain);
}
```

As the `email` property is required in the `UserResponse` type, the `email` parameter will also be required in the `matchDomain` function.

This is the runtime we can get if the `email` is `undefined`:

```tsx
// Uncaught TypeError: Cannot read property 'endsWith' of undefined
```

But what would happen if we modeled the `UserResponse` correctly?

```tsx
type UserResponse = {
  name: string;
  email?: string;
  username: string;
  age: number;
  isActive: boolean;
};
```

Now the `email` is possibly `undefined` and it is explicit.

But if we still keep the function `matchDomain` the same way, we get a compile error:

```tsx
// Argument of type 'undefined' is not assignable to parameter of type 'string'.
```

And this is great! Now we can fix the `email` parameter in this function using the `?` operator:

```tsx
function matchDomain(email?: string) {
  return email.endsWith('email.com');
}
```

But now we get a compile error when running `email.endsWith`, because it could be `undefined` too:

```tsx
// (parameter) email: string | undefined
// Object is possibly 'undefined'.
```

Type narrowing! We use an if block to return a `false` when the `email` is `undefined`. And run `endsWith` method only if the `email` is really a string:

```tsx
function matchDomain(email?: string) {
  if (!email) return false;
  return email.endsWith('email.com');
}
```

It's pretty nice when we can get runtime errors in compile time. Better to code than debugging after we ship in production, isn't it?

## Type composition

Type composition is very useful when trying to reuse existing types for new places of the codebase. We don't need to rewrite new types, we can create a new type by composing existing ones.

One example of composition I always have to handle using Redux or the `useReducer` hook from React is the idea of "reducers". A reducer can always receive a number of different actions.

In this context, actions are objects with at least a `type` property. It looks like this:

```tsx
enum ActionTypes {
  FETCH = 'FETCH',
}

type FetchAction = {
  type: typeof ActionTypes.FETCH;
};

const fetchAction: FetchAction = {
  type: ActionTypes.FETCH,
};
```

A `fetchAction` has a type `FetchAction` that has a property type that is a typeof `FETCH`.

But a reducer can receive other actions too. For example a submit action:

```tsx
enum ActionTypes {
  FETCH = 'FETCH',
  SUBMIT = 'SUBMIT',
}

type SubmitAction = {
  type: typeof ActionTypes.SUBMIT;
};

const submitAction: SubmitAction = {
  type: ActionTypes.SUBMIT,
};
```

For a specific container, we can compose all these actions into just one type and use it for the reducer parameter type.

It would look like this:

```tsx
type Actions = FetchAction | SubmitAction;

function reducer(state, action: Actions) {
  switch (action.type) {
    case ActionTypes.FETCH:
    // fetching action
    case ActionTypes.SUBMIT:
    // submiting action
  }
}
```

All the possible actions are the `Actions` type. And we use a union type to "join" all action types. The action in the reducer can have the `FetchAction` or the `SubmitAction`.

As a Potterhead, I couldn't miss a Harry Potter example. I want to build a simple function to choose a Hogwarts House based on the person trait. Let's start with the houses first.

```tsx
type House = {
  name: string;
  traits: string[];
};

const gryffindor: House = {
  name: 'Gryffindor',
  traits: ['courage', 'bravery'],
};

const slytherin: House = {
  name: 'Slytherin',
  traits: ['ambition', 'leadership'],
};

const ravenclaw: House = {
  name: 'Ravenclaw',
  traits: ['intelligence', 'learning'],
};

const hufflepuff: House = {
  name: 'Hufflepuff',
  traits: ['hard work', 'patience'],
};

const houses: House[] = [gryffindor, slytherin, ravenclaw, hufflepuff];
```

I want to keep it simple, so the `House` type has only the `name` and the `traits`, a list of possible traits from people related to the house.

And then, I create each house and added all of them to the `houses` list.

Great! Now I'll build the `Person` type. A person can be a witch or a muggle.

```tsx
type Witch = {
  name: string;
  trait: string;
  magicFamily: string;
};

type Muggle = {
  name: string;
  trait: string;
  email: string;
};
```

And this is the part we combine these two different types using the union type:

```tsx
type Person = Muggle | Witch;
```

Using the intersection type, the `Person` type has all properties from `Muggle` or all from `Witch`.

So now, if I create a `Muggle`, I need just the name, the trait, and the email:

```tsx
const hermione: Muggle = {
  name: 'Hermione Granger',
  trait: 'bravery',
  email: 'hermione@mail.com',
};
```

If I create a `Witch`, I need the name, the trait, and the magic family name:

```tsx
const harry: Witch = {
  name: 'Harry Potter',
  trait: 'courage',
  magicFamily: 'Potter',
};
```

And if I create a `Person`, I need at least the `name` and the `trait` properties from `Muggle` and `Witch`:

```tsx
const tk: Person = {
  name: 'TK',
  email: 'tk@mail.com',
  trait: 'learning',
  magicFamily: 'Kinoshita',
};
```

The `chooseHouse` is very simple. We just pas the houses and the person. Based on the person trait, the function will return the chosen house:

```tsx
function chooseHouse(houses: House[], person: Person) {
  return houses.find((house) => house.traits.includes(person.trait));
}
```

And applying all the people we created:

```tsx
chooseHouse(houses, harry); // { name: 'Gryffindor', traits: ['courage', 'bravery'] }
chooseHouse(houses, hermione); // { name: 'Gryffindor', traits: ['courage', 'bravery'] }
chooseHouse(houses, tk); // { name: 'Ravenclaw', traits: ['intelligence', 'learning'] }
```

Nice!

The intersection type is a bit different, but it can also be used to combine existing types.

When I was implementing a web app to [apply my studies on UX](https://github.com/leandrotk/ux-studies), I needed to create a prop type for the Image component.

I had the type `ImageUrl` from the product type:

```tsx
type ImageUrl = {
  imageUrl: string;
};
```

And the `ImageAttr` to represent all the attributes for the image:

```tsx
type ImageAttr = {
  imageAlt: string;
  width?: string;
};
```

But the props expected all this information in the component. Intersection type for the rescue!

```tsx
type ImageProps = ImageUrl & ImageAttr;
```

Simple as that. So now, the component needs all these properties. The type looks like this:

```tsx
type ImageProps = {
  imageUrl: string;
  imageAlt: string;
  width?: string;
};
```

And we can use this type this way:

```tsx
const imageProps: ImageProps = {
  imageUrl: 'www.image.com',
  imageAlt: 'an image',
};

const imagePropsWithWidth: ImageProps = {
  imageUrl: 'www.image.com',
  imageAlt: 'an image',
  width: '100%',
};
```

Nice! One more concept to reuse and compose types.

I also find the `Pick` type very interesting and useful. We have other [interesting types](https://leandrotk.github.io/tk/2020/05/typescript-learnings-interesting-types/index.html) that we could write here, but the idea here is to understand that we can compose type and there is no limit to reuse types. If you're interested in study other types, take a look at this post I wrote: [Typescript Learnings: Interesting Types](https://leandrotk.github.io/tk/2020/05/typescript-learnings-interesting-types/index.html).

## Tooling

When you `npm install typescript`, you don't just get the compiler, you get the language service API, a standalone server called tsserver that editors can run to provide autocompletion, go-to, and other cool features.

These features are what some people from the Typescript team call developer productivity tools like smart errors when type checking and IntelliSense (code completion, hover info, signature information). We look at these features throughout the whole article, but I want to make a special topic to talk about it.

The Typescript type checker is powerful in the sense that it can infer types and provide information to some possible issues. Example: It inferred that the city is a string. And the `uppercase` is used the wrong way. As it knows it is a string, it also tries to find a possible method that the engineer is looking for.

```tsx
const city = 'Tokyo';
city.toUppercase();
// Property 'toUppercase' does not exist on type
// 'string'. Did you mean 'toUpperCase'?
```

In this case, the compiler is really smart, because it finds exatcly what we wanted.

It also works for objects:

```tsx
const people = [
  { name: 'TK', age: 24 },
  { name: 'Kaio', age: 12 },
  { name: 'Kazumi', age: 31 },
];

for (const person of people) {
  console.log(person.agi);
  // Property 'agi' does not exist on type '{ name: string; age: number; }'
}
```

With the static types, the tooling can provide a great developer experience with code completion, hover info to show defined types, and signature information for methods and other data.

If you type: `'TK'.`, the editor will show all the possible methods for the string object. The compiler knows it is a string. And it knows the methods from the `String` prototype. But it also provides the method signature. This is very interesting because we don't necessarily need to go to the docs. The "docs" is already in our code editor.

It's an awesome experience while coding.

The type definition "on hover" is another thing that we saw earlier in this article. Let the compiler infer the types implicitly and you won't lose the type documentation. Using the hover in the object, the IDE or editor will always be able to show the type definition.

Another interesting thing is that Typescript will not only flag what could go wrong on runtime, but it also helps to find code that doesn't do what you intend.

Imagine we have a function to open a snackbar if it is still closed. It would verify the status of the snackbar. If it is closed, just call another function to open it.

```tsx
const buildSnackbar = (status: SnackbarStatus) => {
  if (status.isClosed) {
    openSnackbar();
  }
};
```

And the type information for this snackbar is:

```tsx
type SnackbarStatus = {
  isClosed: boolean;
};
```

What happens if I call this function like this:

```tsx
buildSnackbar({ isclosed: true });
```

It won't break in runtime, because the `status` object has no `isClosed` attribute and the `undefined` object is a `falsy` value, so it will skip the if condition and not call the `openSnackbar` function. No runtime error. But probably it will behavior different than the expected.

In Typescript, the compiler will give some hints to make it works properly. First it will show this error:

```tsx
// Argument of type '{ isclosed: boolean; }' is not assignable to
// parameter of type 'SnackbarStatus'.
```

`isclosed` with downcased `C` is not assignable to the type. It's not defined there. This is the first hint to make you correct your code.

The second is even better:

```tsx
// Object literal may only specify known properties,
// but 'isclosed' does not exist in type 'SnackbarStatus'.
// Did you mean to write 'isClosed'?
```

It tells exactly what you probably need to do: rename the `isclosed` to `isClosed`.

We can talk a lot of things about the tooling about I think this is the main part.

My suggestion to learn more about this is to just code in Typescript and "have a conversation" with the compiler. Read the errors. Play with the hover. See the autocompletion. Understand the method signatures. It's really a productive way to code.

## Tips & Learnings

As the article is coming to an end, I want to just add the final thoughts, learnings, and tips to help you in your journey learning Typescript or just applying it in your projects.

- Really read the type error: this will help you better understand the issue and the types.
- `strictNullChecks` and `noImplicitAny` can be very helpful in finding bugs. Enable this as soon as possible in your project. Use `strictNullChecks` to prevent “undefined is not an object”-style runtime errors. Use `noImplicitAny` to type the source code to give more type information for the compiler.
- Together with these compiler's configurations, I always recommend being very precise about your types. Mainly with the values that occur only in runtime like an API response. Correctness is important to catch as many bugs as possible in compile time.
- Understand the difference between runtime and compile time: types only affects in compile type. It runs the type checker and then compiles to Javascript. The Javascript source code doesn't use any type of references or type operations.
- Learn about utility types. We talk about more specific about the `Readonly` in the immutability in compile time, but Typescript has a box of helpers like `Required`, `Pick`, and many more.
- If possible, prefer letting the compiler infers the types for you. Most of the types and returning types are redundant. The Typescript compiler is very smart in this topic. If not possible, you can always add type annotations. And let the type assertions as to the last option.
- As writing code, take a look at the tooling. The design of the tooling provided in an IDE is amazing. The IntelliSense and type checking provide a really good experience.

# Resources

I compiled (pun very much intended!) a bunch of resources to help you learn more about programming languages, type systems, and the type mental model.

Also, if you found the examples on this post useful, I added all of them this repository: [Thinking in Types](https://github.com/leandrotk/thinking-in-types). So you can fork and play with it.

### Type Systems

- [Type Compatibility](https://www.typescriptlang.org/docs/handbook/type-compatibility.html)
- [Type Systems: Structural vs. Nominal typing explained](https://medium.com/@thejameskyle/type-systems-structural-vs-nominal-typing-explained-56511dd969f4)
- [Learning TypeScript: Structural vs nominal typing systems](https://yakovfain.com/2018/07/11/learning-typescript-structural-vs-nominal-typing-system/)
- [Constraints Liberate, Liberties Constrain — Runar Bjarnason](https://www.youtube.com/watch?v=GqmsQeSzMdw&feature=youtu.be)
- [Type Narrowing in TypeScript](https://www.no.lol/2019-12-27-type-narrowing/)
- [TypeScript: narrowing types via type guards and assertion functions](https://2ality.com/2020/06/type-guards-assertion-functions-typescript.html)
- [Programming with Types Book](https://www.goodreads.com/book/show/48920810-programming-with-types)
- [Effective TypeScript: 62 Specific Ways to Improve Your TypeScript Book](https://www.goodreads.com/book/show/48570456-effective-typescript)
- [Typescript Learnings: Interesting Types](https://leandrotk.github.io/tk/2020/05/typescript-learnings-interesting-types/index.html)

### Tooling & Developer Experience

- [Advanced TypeScript tooling at scale](https://www.youtube.com/watch?v=fnTEZk-oECM)
- [Type Systems & Props Design](https://www.youtube.com/watch?v=4C4wCGcsiT0)
- [Anders Hejlsberg on Modern Compiler Construction](https://www.youtube.com/watch?v=wSdV1M7n4gQ)
- [Typescript Compiler explained by the Author Anders Hejlsberg](https://www.youtube.com/watch?v=f6TCB61fDwY)

### Compile time vs Runtime

- [Compile time vs Runtime](https://stackoverflow.com/questions/846103/runtime-vs-compile-time)
- [Compile error vs Runtime error](https://stackoverflow.com/questions/9471837/what-is-the-difference-between-run-time-error-and-compiler-error)
- [Value space and Type space](https://stackoverflow.com/a/51132333/3159162)
- [A playground tool to play with Typescript and see the Javascript output](https://www.typescriptlang.org/play)

### Best Practices

- [Typescript Best Practices](https://engineering.zalando.com/posts/2019/02/typescript-best-practices.html)