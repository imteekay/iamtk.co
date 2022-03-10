## JavaScript: before modern frontend applications

In the early days of the internet & JavaScript, web developers usually handled user interactions with simple JavaScript scripts.

Using the `<script>` tag to let browsers load and execute JavaScript code. It was very useful to handle form validations in the frontend and make the pages a little bit more interactive.

jQuery: TODO - made it easier and more accessible to build interactivity in the browser.

## Loading and listing users

In this example, we show a very simple script to load and list users in the page. The idea is to have a `<ul>` tag to hold all users "items" (`<li>`), but we use JavaScript to create all users and list them in the page.

We have two separate files (or modules!).

- `load-users.js`: "load" all the users to be listed in the page
- `list-users.js`: get the loaded users and list them in the page. This script also creates close buttons to delete users from the list.

It's important to notice that the order of the script tags is critical. We should let browsers load and execute the `load-users.js` module first and then the `list-users.js`.

```html
<script src="./load-users.js"></script>
<script src="./list-users.js"></script>
```

If we do the other way around, we break the application. As `list-users.js` depends on the `load-users.js`, the browser throws an error: `Uncaught ReferenceError: users is not defined`.

With the script tag, we had real issues:

- Be careful with the tags' orders. The order of script tags matters
- No real modules
- Async code is challenging
- All variables and functions available in the global scope
- If using a library, there's no easy way to exclude unused code from this library. It needs to load the entire library
- Name collision is easy to happen in the global scope
- To share state and functions between files/modules, it needs to bind them to the global context
