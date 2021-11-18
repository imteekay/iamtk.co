import { FC } from 'react';
import Highlight from 'react-highlight';
import {
  sourceCode1,
  sourceCode10,
  sourceCode11,
  sourceCode12,
  sourceCode13,
  sourceCode14,
  sourceCode15,
  sourceCode16,
  sourceCode2,
  sourceCode3,
  sourceCode4,
  sourceCode5,
  sourceCode6,
  sourceCode7,
  sourceCode8,
  sourceCode9,
} from './sourceCode';

export const Article: FC = () => (
  <>
    <p>
      One of the fundamental parts of web development is requesting data from a
      backend service or an API. This task is also known as data fetching in the
      frontend world.
    </p>
    <p>
      In the early days of the frontend, we were usually building websites with
      HTML and CSS. The template or the pages were server-side rendered. And
      JavaScript was mainly used to do some animations and, at most, form
      validations.
    </p>
    <p>
      The idea of fetching data asynchronously starts with a technique called
      Ajax, which stands for “Asynchronous JavaScript and XML“.
    </p>
    <p>
      I remember using{' '}
      <a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest">
        XMLHttpRequest
      </a>{' '}
      Web APIs object to request data from servers while the user interacted
      with the page. The usage of Ajax kept growing and one of the favorite
      toolings that we used back in the days was{' '}
      <a href="https://api.jquery.com/jquery.ajax/">jQuery Ajax</a>. It was very
      simple to use and less scary than the name <code>XMLHttpRequest</code>.
    </p>
    <p>
      Gmail and Trello were heavily using these techniques to retrieve and
      update info without having the browser reload the entire page.
    </p>
    <h2 id="datafetchingwithfetch">Data fetching with Fetch</h2>
    <p>
      Nowadays we commonly use <code>fetch</code> to handle data fetching. As{' '}
      <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data#fetch">
        MDN wrote:
      </a>
    </p>
    <blockquote>
      <p>
        “The Fetch API is basically a modern replacement for XHR; it was
        introduced in browsers recently to make asynchronous HTTP requests
        easier to do in JavaScript.“
      </p>
    </blockquote>
    <p>
      And it really made it easier to make async requests. Let‘s see a simple
      use:
    </p>
    <Highlight className="javascript">{sourceCode15}</Highlight>
    <p>
      You can go right now and type this code in your Browser‘s console. It‘ll
      request the data from the
      <a href="https://pokeapi.co/">Pokemon‘s API</a>.
    </p>
    <p>
      We pass the resource URL and the <code>fetch</code> will return a
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">
        Promise
      </a>
      . The first <code>.then</code> receives the request‘s{' '}
      <code>response</code> object, which has a method called <code>json</code>.
      The <code>json</code> method returns the response JSON data. As the{' '}
      <code>.then</code> returns another Promise, we can make chained promises.
      The console log will return the Pikachu‘s info.
    </p>
    <p>
      We can use the <code>async-await</code> to handle promises:
    </p>
    <Highlight className="javascript">{sourceCode16}</Highlight>
    <p>
      In modern browsers, we can use this code as they implemented{' '}
      <a href="https://v8.dev/features/top-level-await#:~:text=Top%2Dlevel%20await%20enables%20developers,they%20start%20evaluating%20their%20body.">
        top-level await
      </a>
      .
    </p>
    <h2 id="reactfetchandcustomhooks">React, Fetch, and custom hooks</h2>
    <p>
      In React application, we also need to handle data fetching. If you see 5
      different codebases, it‘s possible to see 5 different ways of building the
      communication between the frontend and the server.
    </p>
    <p>Let‘s implement our own fetch hook.</p>
    <p>The hook‘s API would be very simple:</p>
    <ul>
      <li>It should receive an URL</li>
      <li>It can receive the initial data</li>
      <li>
        It will return the fetch state:
        <ul>
          <li>
            <code>data</code>: the data returned from the API.
          </li>
          <li>
            <code>isLoading</code>: a boolean that represents if the request is
            currently happenning or not.
          </li>
          <li>
            <code>hasError</code>: a boolean that represents if the request got
            any error.
          </li>
        </ul>
      </li>
    </ul>
    <h3 id="itshouldreceiveanurl">It should receive an URL</h3>
    <Highlight className="javascript">{sourceCode1}</Highlight>
    <h3 id="itcanreceivetheinitialdata">It can receive the initial data</h3>
    <Highlight className="javascript">{sourceCode2}</Highlight>
    <p>
      The simple fetch can be wrapped in a <code>useEffect</code>. It would look
      very similar to the async-await fetch that we did earlier.
    </p>
    <Highlight className="javascript">{sourceCode3}</Highlight>
    <p>
      But now we need to build the request state: basically, if it‘s loading, if
      it got an error, the data that came from the server, and so on.
    </p>
    <p>
      We could do that by simply using the <code>useState</code>, but I‘ll show
      an example abstracting the logic in a reducer. To do that, we‘ll use the{' '}
      <code>useReducer</code> hook. It looks like this:
    </p>
    <Highlight className="javascript">{sourceCode4}</Highlight>
    <p>First we have all the actions:</p>
    <ul>
      <li>
        <code>FETCH_INIT</code>: when the fetch initializes
      </li>
      <li>
        <code>FETCH_SUCCESS</code>: when the fetch succeed
      </li>
      <li>
        <code>FETCH_ERROR</code>: when the fetch got an error
      </li>
    </ul>
    <p>
      Then we have the reducer. It‘s basically a switch case mapping the action
      to the execution we do in the state.
    </p>
    <p>
      For the <code>FETCH_INIT</code>, we get the current state and update the{' '}
      <code>isLoading</code> to <code>true</code> (it‘s loading) and the{' '}
      <code>hasError</code> to <code>false</code> (in case it got an error
      before, we need to make sure that it doesn‘t have an error anymore as we
      are fetching again).
    </p>
    <p>
      For the <code>FETCH_SUCCESS</code>, we update the <code>hasError</code>{' '}
      and the <code>isLoading</code> to
      <code>false</code> and add the request payload to the state.
    </p>
    <p>
      For the <code>FETCH_ERROR</code>, we just make sure that the{' '}
      <code>isLoading</code> is <code>false</code> and update the{' '}
      <code>hasError</code> to <code>true</code>.
    </p>
    <p>Now that we have our reducer, let‘s use it in the custom fetch hook.</p>
    <Highlight className="javascript">{sourceCode5}</Highlight>
    <p>
      As I mentioned earlier, we‘ll use the <code>useReducer</code> hook and
      pass our new reducer and an initial state for it. The hook returns the
      current state and a function called <code>dispatch</code> to dispatch
      actions that the reducer is listening to.
    </p>
    <p>
      We can now modify our fetch and add the apropriate action dispatchers to
      it.
    </p>
    <Highlight className="javascript">{sourceCode6}</Highlight>
    <ul>
      <li>
        When the fetch starts, we dispatch the <code>FETCH_INIT</code> action.
      </li>
      <li>
        When it got a success response, we dispatch the{' '}
        <code>FETCH_SUCCESS</code> action.
      </li>
      <li>
        When it got an error, we dispatch the <code>FETCH_ERROR</code> action.
      </li>
    </ul>
    <p>
      Doing this, we are always updating the state of our request. To finish we
      just return the <code>state</code>. So the entire hook would look like
      this:
    </p>
    <Highlight className="javascript">{sourceCode7}</Highlight>
    <h2 id="datafetchingwithreactquery">Data fetching with react-query</h2>
    <p>
      Data fetching and server state are complex topics in web development when
      it comes to their challenges: caching, revalidation, complex async
      operations, retry logic, and so on.
    </p>
    <p>
      react-query came as the solution for data fetching in React. It solves
      many common problems out of the box and its simplicity improves hugely the
      dev experience.
    </p>
    <p>As stated in the Getting Started, the react-query‘s motivation was:</p>
    <blockquote>
      <p>
        “Out of the box, React applications do not come with an opinionated way
        of fetching or updating data from your components so developers end up
        building their own ways of fetching data. This usually means cobbling
        together component-based state and effect using React hooks or using
        more general-purpose state management libraries to store and provide
        asynchronous data throughout their apps. While most traditional state
        management libraries are great for working with client state, they are
        not so great at working with async or server state. This is because
        server state is totally different.“ -
        <a href="https://react-query.tanstack.com/overview#motivation">
          react-query‘s motivation
        </a>
      </p>
    </blockquote>
    <p>
      Some people are also saying the library is the obvious choice to handle
      data fetching in React and it‘s becoming the main tool to solve this
      problem:
    </p>
    <blockquote className="twitter-tweet">
      <p lang="en" dir="ltr">
        react-query has become the obvious choice to solve the problem of API
        data management (server cache). Just like how react-router and{' '}
        <a href="https://twitter.com/TestingLib?ref_src=twsrc%5Etfw">
          @TestingLib
        </a>{' '}
        are the obvious choice for the problems they solve.
        <br />
        <br />
        It‘s so nice to not have to worry about solving this problem anymore.
      </p>
      – Kent C. Dodds (@kentcdodds){' '}
      <a href="https://twitter.com/kentcdodds/status/1379072162040926213?ref_src=twsrc%5Etfw">
        April 5, 2021
      </a>
    </blockquote>
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charSet="utf-8"
    ></script>
    <p>
      But we also have other choices to handle server cache like
      <a href="https://swr.vercel.app/">swr</a> (Stale-While-Revalidate). The
      APIs look very similar to react-query.
    </p>
    <h3 id="reactquerysetup">react-query: set up</h3>
    <p>
      The library set up is very simple. All we need to do is to install it:
    </p>
    <Highlight className="bash">{sourceCode8}</Highlight>
    <p>
      And add the <code>QueryClient</code> as a provider for our app:
    </p>
    <Highlight className="javascript">{sourceCode9}</Highlight>
    <p>
      In addition to this first setup, we can also add our own configuration. By
      <a href="https://react-query.tanstack.com/guides/important-defaults#_top">
        default
      </a>
      , it will have its own configurations, for example, when the window is
      refocused, it will refetch automatically. If it‘s something you want to
      keep, you don‘t need to do anything. But if it has a bad UX for your app,
      you can overwrite this setup by passing the{' '}
      <code>refetchOnWindowFocus</code> to the <code>QueryClient</code>:
    </p>
    <Highlight className="javascript">{sourceCode10}</Highlight>
    <p>
      Reading the
      <a href="https://react-query.tanstack.com/guides/important-defaults#_top">
        “Important Defaults“
      </a>
      document is really important to understand the default behavior of the
      library. It‘ll also help you debug in an easier way.
    </p>
    <h3 id="reactquerysimplerequest">react-query: simple request</h3>
    <p>
      To see a simple request we can make with react-query, let‘s use the
      Pokemon‘s API again.
    </p>
    <p>The react-query‘s API is super simple:</p>
    <ul>
      <li>
        query key: this first parameter is used for the data cache and
        revalidation purposes.
      </li>
      <li>fetch promise: the request should always be wrapped in a Promise.</li>
    </ul>
    <Highlight className="javascript">{sourceCode11}</Highlight>
    <p>
      The query key is <code>[‘pokemon‘, ‘pikachu‘]</code> because we can query
      all types of pokemons. Other variants would be:
    </p>
    <ul>
      <li>
        <code>[‘pokemon‘, ‘ditto‘]</code>
      </li>
      <li>
        <code>[‘pokemon‘, ‘blastoise‘]</code>
      </li>
    </ul>
    <p>
      All under the namespace <code>pokemon</code>. But it is up to you to
      define the query string and make it a convention or pattern in your
      application.
    </p>
    <p>
      To reuse this same query in other places to make it more testable, we can
      extract this code into a custom hook. We‘ll call it{' '}
      <code>usePokemon</code>.
    </p>
    <Highlight className="javascript">{sourceCode12}</Highlight>
    <p>
      As we also extract the fetch promise, it becomes very clean. The{' '}
      <code>fetchPokemon</code> just becomes
    </p>
    <Highlight className="javascript">{sourceCode13}</Highlight>
    <p>And now we can reuse this hook in all parts of our application:</p>
    <Highlight className="javascript">{sourceCode14}</Highlight>
    <h3 id="reactqueryrequestsstate">react-query: request‘s state</h3>
    <p>
      react-query also provides a nice API that represents the request‘s state:
    </p>
    <ul>
      <li>
        <code>isLoading</code>: when the request is still in process. Nice to
        show a loading spinner or skeleton.
      </li>
      <li>
        <code>isError</code>: when the request got an error. Nice for error
        handling like showing a dialog, error content, or snackbar.
      </li>
      <li>
        <code>refetch</code>: a function to refetch the resource. A nice example
        is when it gets an error and we show the user the possibility of
        requesting the resource again.
      </li>
    </ul>
    <p>
      And so on. For the entire API, take a look at the
      <a href="https://react-query.tanstack.com/reference/useQuery">doc</a>.
    </p>
    <h2 id="conclusion">Conclusion</h2>
    <p>
      In the old days of frontend, it started very simply with little and, most
      of the time, with no JavaScript at all. Then the websites were getting
      more and more complex in terms of interactivity, and JavaScript‘s need was
      very much required. So much that jQuery was created to make it easier to
      do DOM manipulation and data fetching using the Ajax technique.
    </p>
    <p>
      The single page applications‘ growth exploded and many developers and
      companies are building frontend applications using a frontend framework
      like VueJS, AngularJS, or libraries like ReactJS.
    </p>
    <p>
      Data fetching and server cache are really different than client state and
      they come with a lot of engineering challenges like caching, update state
      “out of date“, dedup multiple requests, and so on.
    </p>
    <p>
      To handle all these challenges, react-query was created and it‘s becoming
      the go-to option to handle data fetching out of the box in React
      applications. We also have other competing tools like
      <a href="https://swr.vercel.app/">swr</a>. They are both very well-thought
      libraries, easy to use, and solve the data fetching problems out of the
      box.
    </p>
    <h2 id="resources">Resources</h2>
    <ul>
      <li>
        <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data">
          Fetching data from the server
        </a>
      </li>
      <li>
        <a href="https://react-query.tanstack.com/">
          react-query: Performant and powerful data synchronization for React
        </a>
      </li>
    </ul>
  </>
);
