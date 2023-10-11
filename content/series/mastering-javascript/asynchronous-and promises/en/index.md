# Promises

In modern javascript we use the `Promise` object to handle asynchronous code. From the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise):

> A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

## Working with Promises

The most common way you will find promises being used at QuintoAndar is when working with external dependencies, like fetching some data from Firestore or calling a REST API. To work with the returned value from these operations we can use the built-in methods `.then`, `.catch` and `.finally` from the `Promise` object.

In the example below we have a hypothetical `someApiCall` method that returns a promise. We want to handle the result with `handleResult` in case of success or use `handleError` if something fails. Then, we want to log that the function execution ended:

```js
import { someApiCall } from 'some-controller';
import { handleResult, handleError } from 'handlers';

export const handleCall = (id) => (
  someApiCall(id)
    .then((result) => handleResult(result))
    .catch((error) => handleError(error))
    .finally(() => console.log('Function execution finished'));
);
```

As we can see `.then` deals with the resolved promise flow, `.catch` deals with the rejected flow and `.finally` is ran either way. Another interesting thing to note is that `.then`, `.catch` and `.finally` all return promises, so we can repeatedly chain those methods. This is commonly know as a promise chain. You can check the MDN docs for a deeper understanding on [how to use promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) and to [learn more about the Promise object itself](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Async functions

Async functions are a syntactic sugar to the Promise object discussed above and are the preferred way of working with asynchronous code in JS. The idea is to use the keywords `async/await` to make the code cleaner. Using the same example from above we would have something like:

```js
import { someApiCall } from 'some-controller';
import { handleResult, handleError } from 'handlers';

export const handleCall = async (id) => {
  try {
    const result = await someApiCall(id);
    return handleResult(result);
  } catch (error) {
    return handleError(error);
  } finally {
    console.log('Function execution finished');
  }
};
```

As we can see the code looks synchronous, even using language constructs like `try`, `catch` and `finally`.

Another cool thing is that is very easy to refactor a promise chain to a async function, the basic rule of thumb being:

- Every `.then` becomes an `await` expression;
- If there is a `.catch` we wrap the entire code inside a `try/catch` block;
- If there is a `.finally` we add the `finally` construct after the `try/catch` block;

The `async/await` construct functions similarly to combining promises and [generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators). What that means is that when running an async function the code runs synchronously until an `await` is reached. At that point the function execution halts until the promise is either resolved or rejected. After the promise completes the async function execution is resumed until another `await` is reached, which triggers the previously described behavior. Notice that this means that **every time you put an `await` you are writing blocking code inside that async function**. This has some consequences that will be explored in the Best Practices section.

You can deepen your knowledge checking the [MDN docs for async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
