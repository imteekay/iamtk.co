I'm always willing to learn more and more. As a software engineer, the thirst for knowledge increased a lot. We have a lot of things to learn daily. But I wanted to master the foundation. To make me a better developer, I wanted to understand more about how to create great product experiences.

This post is my attempt to illustrate a Proof of Concept (PoC) I built to try some ideas as experiments.

I had some topics in mind to build this. It needs to strive for:

- High-quality software
- User Experience

When I say high-quality software, it can have so many different meanings. But I want to focus on three parts:

- Clean Code: Strive to write human-readable code, that is easy to read and simple to maintain. Separate responsibility for functions and components.
- Good test coverage: It's actually not about coverage. It's about tests that cover important parts of components' behavior without knowing too much about implementation details.
- Consistent state management: I want to build with software that enables the app to have consistent data. Predictability is important.

And user experience is the main focus of this PoC. The software and techniques are the foundation to enable good experience for users.

To make the state consistent, I wanted a type system. So I chose Typescript. This was the first time I'm using Typescript with React. This project also allowed me to build custom hooks and test it properly.

## Setting up the project

I came across this library called [tsdx](https://github.com/jaredpalmer/tsdx) that sets up all the Typescript configuration for you. It's mainly used to build packages. As this was a simple side project, I didn't mind giving it a try.

After installing it, I chose the react template and I was ready to code. But before the fun part, I wanted to set up the test configuration too. [React Testing Library](https://github.com/testing-library/react-testing-library) as the main library together with [jest-dom](https://github.com/testing-library/jest-dom) to provide some awesome custom methods (I really like the `toBeInTheDocument` matcher).

With all installed, I overwrote the jest config by adding a new `jest.config.js`:

```tsx
module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['./setupTests.ts'],
};
```

And a `setupTests.ts` to import everything I need.

```tsx
import '@testing-library/jest-dom';
```

In this case, I just had the `jest-dom` library to import. This way, I don't need to import this package in my test files. Now it works out of the box.

To test this installation and configuration, I built a simple component:

```tsx
export const Thing = () => <h1>I'm TK</h1>;
```

In my test, I wanted to render it and see if it was in the DOM.

```tsx
import React from 'react';
import { render } from '@testing-library/react';
import { Thing } from '../index';

describe('Thing', () => {
  it('renders the correct text in the document', () => {
    const { getByText } = render(<Thing />);

    expect(getByText("I'm TK")).toBeInTheDocument();
  });
});
```

And we are ready for the next step now!

## Configuring routes

Here I'll have only two routes for now. The home page and the search page - even though I'll do nothing about the home page.

For this project, I'm using the `react-router-dom` library to handle all things router. It's simple, easy, and fun to work with.

After installing it, I added the router components in the `app.tsx`.

```tsx
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const App = () => (
  <Router>
    <Switch>
      <Route path="/search">
        <h1>It's the search!</h1>
      </Route>
      <Route path="/">
        <h1>It's Home</h1>
      </Route>
    </Switch>
  </Router>
);
```

Now if we enter the `localhost:1234`, we see the title `It's Home`. Go to the `localhost:1234/search`, we see the text `It's the search!`.

Before we continue to start implementing our search page, I wanted to build a simple menu to switch between home and search pages without manipulating the URL. For this project, I'm using [Material UI](https://material-ui.com/) to build the UI foundation.

For now, we are just installing the `@material-ui/core`.

To build the menu, we have the button to open the menu options. In this case "home" and "search" options. But to build a better component abstraction, I prefer to hide the content (link and label) for the menu items and make the `Menu` component receive this data as a prop. This way, the menu doesn't know about the items, it will just iterate through the items list and render them.

It looks like this:

```tsx
import React, { Fragment, useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import MuiMenu from '@material-ui/core/Menu';
import MuiMenuItem from '@material-ui/core/MenuItem';

import { MenuItem } from '../../types/MenuItem';

type MenuPropsType = { menuItems: MenuItem[] };

export const Menu = ({ menuItems }: MenuPropsType) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <MuiMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems.map((item: MenuItem) => (
          <Link to={item.linkTo} onClick={handleClose} key={item.key}>
            <MuiMenuItem>{item.label}</MuiMenuItem>
          </Link>
        ))}
      </MuiMenu>
    </Fragment>
  );
};

export default Menu;
```

Don't panic! I know it is a huge block of code, but it is pretty simple. the `Fragment` wrap the `Button` and `MuiMenu` (`Mui` stands for Material UI. I needed to rename the component because the component I'm building is also called menu).

It receives the `menuItems` as a prop and maps through it to build the menu item wrapped by the `Link` component. Link is a component from react-router to link to a given URL.

The menu behavior is also simple: we bind the `handleClick` function to the button's `onClick`. That way, we can change `anchorEl` when the button is triggered (or clicked if you prefer). The `anchorEl` is just a component state that represents the Mui menu element to open the menu switch. So it will open the menu items to let the user chooses one of those.

Now, how do we use this component?

```tsx
import { Menu } from './components/Menu';
import { MenuItem } from './types/MenuItem';

const menuItems: MenuItem[] = [
  {
    linkTo: '/',
    label: 'Home',
    key: 'link-to-home',
  },
  {
    linkTo: '/search',
    label: 'Search',
    key: 'link-to-search',
  },
];

<Menu menuItems={menuItems} />;
```

The `menuItems` is a list of objects. The object has the correct contract expected by the `Menu` component. The type `MenuItem` ensures that the contract is correct. It is just a Typescript `type`:

```tsx
export type MenuItem = {
  linkTo: string;
  label: string;
  key: string;
};
```

## Search

Now we are ready to build the search page with all the products and a great experience. But before building the list of products, I wanted to create a fetch function to handle the request for products. As I don't have an API of products yet, I can just mock the fetch request.

At first, I just built the fetching with `useEffect` in the `Search` component. The idea would look like this:

```tsx
import React, { useState, useEffect } from 'react';
import { getProducts } from 'api';

export const Search = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);

        const fetchedProducts = await getProducts();

        setIsLoading(false);
        setProducts(fetchedProducts);
      } catch (error) {
        setIsLoading(false);
        setHasError(true);
      }
    };

    fetchProducts();
  }, []);
};
```

I have:

- `products` initialized as an empty array
- `isLoading` initialized as false
- `hasError` initialized as false
- The `fetchProducts` is an async function that calls `getProducts` from the `api` module. As we don't have a proper API for products yet, this `getProducts` would return a mock data.
- When the `fetchProducts` is executed, we set the `isLoading` to true, fetch the products, and then set the `isLoading` to false, because the fetching finished, and the set the fetched products into `products` to be used in the component.
- If it gets any error in the fetching, we catch them, set the `isLoading` to false, and the `hasError` to true. In this context, the component will know that we had an error while fetching and can handle this case.
- Everything is encapsulated into a `useEffect` because we are doing a side effect here.

To handle all the state logic (when to update each part for the specific context), we can extract it to a simple reducer.

```tsx
import { State, FetchActionType, FetchAction } from './types';

export const fetchReducer = (state: State, action: FetchAction): State => {
  switch (action.type) {
    case FetchActionType.FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case FetchActionType.FETCH_SUCCESS:
      return {
        ...state,
        hasError: false,
        isLoading: false,
        data: action.payload,
      };
    case FetchActionType.FETCH_ERROR:
      return {
        ...state,
        hasError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};
```

The idea here is to separate each action type and handle each state update. So the `fetchReducer` will receive the state and the action and it will return a new state. This part is interesting because it gets the current state and then returns a new state, but we keep the state contract by using the `State` type.

And for each action type, we will update the state the right way.

- `FETCH_INIT`: `isLoading` is true and `hasError` is false.
- `FETCH_SUCCESS`: `hasError` is false, `isLoading` is false, and the data (products) is updated.
- `FETCH_ERROR`: `hasError` is true and `isLoading` is false.

In case it doesn't match any action type, just return the current state.

The `FetchActionType` is a simple Typescript enum:

```tsx
export enum FetchActionType {
  FETCH_INIT = 'FETCH_INIT',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_ERROR = 'FETCH_ERROR',
}
```

And the `State` is just a simple type:

```tsx
export type ProductType = {
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  isShippingFree: boolean;
  discount: number;
};

export type Data = ProductType[];

export type State = {
  isLoading: boolean;
  hasError: boolean;
  data: Data;
};
```

With this new reducer, now we can `useReducer` in our fetch. We pass the new reducer and the initial state to it:

```tsx
const initialState: State = {
  isLoading: false,
  hasError: false,
  data: fakeData,
};

const [state, dispatch] = useReducer(fetchReducer, initialState);

useEffect(() => {
  const fetchAPI = async () => {
    dispatch({ type: FetchActionType.FETCH_INIT });

    try {
      const payload = await fetchProducts();

      dispatch({
        type: FetchActionType.FETCH_SUCCESS,
        payload,
      });
    } catch (error) {
      dispatch({ type: FetchActionType.FETCH_ERROR });
    }
  };

  fetchAPI();
}, []);
```

The `initialState` has the same contract type. And we pass it to the `useReducer` together with the `fetchReducer` we just built. The `useReducer` provides the state and a function called `dispatch` to call actions to update our state.

- State fetching: dispatch `FETCH_INIT`
- Finished fetch: dispatch `FETCH_SUCCESS` with the products payload
- Get an error while fetching: dispatch `FETCH_ERROR`

This abstraction got very big and can be very verbose in our component. We could extract it as a separate hook called `useProductFetchAPI`.

```tsx
export const useProductFetchAPI = (): State => {
  const initialState: State = {
    isLoading: false,
    hasError: false,
    data: fakeData,
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const fetchAPI = async () => {
      dispatch({ type: FetchActionType.FETCH_INIT });

      try {
        const payload = await fetchProducts();

        dispatch({
          type: FetchActionType.FETCH_SUCCESS,
          payload,
        });
      } catch (error) {
        dispatch({ type: FetchActionType.FETCH_ERROR });
      }
    };

    fetchAPI();
  }, []);

  return state;
};
```

It is just a function that wraps our fetch operation. Now, in the `Search` component, we can import and call it.

```tsx
export const Search = () => {
  const { isLoading, hasError, data }: State = useProductFetchAPI();
};
```

We have all the API: `isLoading`, `hasError`, and `data` to use in our component. With this API, we can render a loading spinner or a skeleton based on the `isLoading` data. We can render an error message based on the `hasError` value. Or just render the list of products using the `data`.

Before starting implementing our products list, I want to stop and add tests for our custom hook. We have two parts to test here: the reducer and the custom hook.

The reducer is easier as it is just a pure function. It receives value, process, and returns a new value. No side-effect. Everything deterministic.

To cover all the possibilities of this reducer, I created three contexts: `FETCH_INIT`, `FETCH_SUCCESS`, and `FETCH_ERROR` actions.

Before implementing anything, I set up the initial data to work with.

```tsx
const initialData: Data = [];
const initialState: State = {
  isLoading: false,
  hasError: false,
  data: initialData,
};
```

Now I can pass this initial state for the reducer together with the specific action I want to cover. For this first test, I wanted to cover the `FETCH_INIT` action:

```tsx
describe('when dispatch FETCH_INIT action', () => {
  it('returns the isLoading as true without any error', () => {
    const action: FetchAction = {
      type: FetchActionType.FETCH_INIT,
    };

    expect(fetchReducer(initialState, action)).toEqual({
      isLoading: true,
      hasError: false,
      data: initialData,
    });
  });
});
```

It's pretty simple. It receives the initial state and the action, and we expect the proper return value: the new state with the `isLoading` as `true`.

The `FETCH_ERROR` is pretty similar:

```tsx
describe('when dispatch FETCH_ERROR action', () => {
  it('returns the isLoading as true without any error', () => {
    const action: FetchAction = {
      type: FetchActionType.FETCH_ERROR,
    };

    expect(fetchReducer(initialState, action)).toEqual({
      isLoading: false,
      hasError: true,
      data: [],
    });
  });
});
```

But we pass a different action and expect the `hasError` to be `true`.

The `FETCH_SUCCESS` is a bit complex as we just need to build a new state and add it to the payload attribute in the action.

```tsx
describe('when dispatch FETCH_SUCCESS action', () => {
  it('returns the the API data', () => {
    const product: ProductType = {
      name: 'iPhone',
      price: 3500,
      imageUrl: 'image-url.png',
      description: 'Apple mobile phone',
      isShippingFree: true,
      discount: 0,
    };

    const action: FetchAction = {
      type: FetchActionType.FETCH_SUCCESS,
      payload: [product],
    };

    expect(fetchReducer(initialState, action)).toEqual({
      isLoading: false,
      hasError: false,
      data: [product],
    });
  });
});
```

But nothing too complex here. The new data is there. A list of products. In this case, just one, the iPhone product.

The second test will cover the custom hook we built. In these tests, I wrote three contexts: a time-out request, a failed network request, and a success request.

Here, as I'm using `axios` to fetch data (when I have an API to fetch the data, I will use it properly), I'm using `axios-mock-adapter` to mock each context for our tests.

The set up first: Initializing our data and set up an axios mock.

```tsx
const mock: MockAdapter = new MockAdapter(axios);
const url: string = '/search';
const initialData: Data = [];
```

We start implementing a test for the timeout request:

```tsx
it('handles error on timed-out api request', async () => {
  mock.onGet(url).timeout();

  const { result, waitForNextUpdate } = renderHook(() =>
    useProductFetchAPI(url, initialData),
  );

  await waitForNextUpdate();

  const { isLoading, hasError, data }: State = result.current;

  expect(isLoading).toEqual(false);
  expect(hasError).toEqual(true);
  expect(data).toEqual(initialData);
});
```

We set up the mock to return a timeout. The test calls the `useProductFetchAPI`, wait for an update, and then we can get the state. The `isLoading` is false, the `data` is still the same (an empty list), and the `hasError` is now true as expected.

The network request is pretty much the same behavior. The only difference is that the mock will have a network error instead of a timeout.

```tsx
it('handles error on failed network api request', async () => {
  mock.onGet(url).networkError();

  const { result, waitForNextUpdate } = renderHook(() =>
    useFetchAPI(url, initialData),
  );

  await waitForNextUpdate();

  const { isLoading, hasError, data }: State = result.current;

  expect(isLoading).toEqual(false);
  expect(hasError).toEqual(true);
  expect(data).toEqual(initialData);
});
```

And for the success case, we need to create a product object to use it as a request-response data. We also expect the `data` to be a list of this product object. The `hasError` and the `isLoading` are false in this case.

```tsx
it('gets and updates data from the api request', async () => {
  const product: ProductType = {
    name: 'iPhone',
    price: 3500,
    imageUrl: 'image-url.png',
    description: 'Apple mobile phone',
    isShippingFree: true,
    discount: 0,
  };

  const mockedResponseData: Data = [product];

  mock.onGet(url).reply(200, mockedResponseData);

  const { result, waitForNextUpdate } = renderHook(() =>
    useFetchAPI(url, initialData),
  );

  await waitForNextUpdate();

  const { isLoading, hasError, data }: State = result.current;

  expect(isLoading).toEqual(false);
  expect(hasError).toEqual(false);
  expect(data).toEqual([product]);
});
```

Great. We covered everything we needed for this custom hook and the reducer we created. Now we can focus on building the products list.

## Products list

The idea of the products list is to list products that have some information: title, description, price, discount, and if it has free shipping. The final product card would look like this:

<img src="/ux-studies-with-react-typescript-and-testing-library/product-card.png">

To build this card, I created the foundation for the product component:

```tsx
const Product = () => (
  <Box>
    <Image />
    <TitleDescription />
    <Price />
    <Tag />
  </Box>
);
```

To build the product, we will need to build each component that is inside it.

But before start building the product component, I want to show the `JSON` data that the fake API will return for us.

```tsx
{
  imageUrl: 'a-url-for-tokyo-tower.png',
  name: 'Tokyo Tower',
  description: 'Some description here',
  price: 45,
  discount: 20,
  isShippingFree: true,
}
```

This data is passed from the `Search` component to the `ProductList` component:

```tsx
export const Search = () => {
  const { isLoading, hasError, data }: State = useProductFetchAPI();

  if (hasError) {
    return <h2>Error</h2>;
  }

  return <ProductList products={data} isLoading={isLoading} />;
};
```

As I'm using Typescript, I can enforce the static types for the component props. In this case, I have the prop `products` and the `isLoading`.

I built a `ProductListPropsType` type to handle the product list props.

```tsx
type ProductListPropsType = {
  products: ProductType[];
  isLoading: boolean;
};
```

And the `ProductType` is a simple type representing the product:

```tsx
export type ProductType = {
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  isShippingFree: boolean;
  discount: number;
};
```

To build the ProductList, I'll use the `Grid` component from Material UI. First, we have a grid container and then, for each product, we will render a grid item.

```tsx
export const ProductList = ({ products, isLoading }: ProductListPropsType) => (
  <Grid container spacing={3}>
    {products.map((product) => (
      <Grid
        item
        xs={6}
        md={3}
        key={`grid-${product.name}-${product.description}-${product.price}`}
      >
        <Product
          key={`product-${product.name}-${product.description}-${product.price}`}
          imageUrl={product.imageUrl}
          name={product.name}
          description={product.description}
          price={product.price}
          discount={product.discount}
          isShippingFree={product.isShippingFree}
          isLoading={isLoading}
        />
      </Grid>
    ))}
  </Grid>
);
```

The `Grid` item will display 2 items per row for mobile as we use the value `6` for each column. And for the desktop version, it will render 4 items per row.

We iterate through the `products` list and render the `Product` component passing all the data it will need.

Now we can focus on building the `Product` component.

Let's start with the easiest one: the `Tag`. We will pass three data to this component. `label`, `isVisible`, and `isLoading`. When it is not visible, we just return `null` to don't render it. If it is loading, we will render a `Skeleton` component from Material UI. But after loading it, we render the tag info with the `Free Shipping` label.

```tsx
export const Tag = ({ label, isVisible, isLoading }: TagProps) => {
  if (!isVisible) return null;
  if (isLoading) {
    return (
      <Skeleton width="110px" height="40px" data-testid="tag-skeleton-loader" />
    );
  }

  return (
    <Box mt={1} data-testid="tag-label-wrapper">
      <span style={tabStyle}>{label}</span>
    </Box>
  );
};
```

The `TagProps` is a simple type:

```tsx
type TagProps = {
  label: string;
  isVisible: boolean;
  isLoading: boolean;
};
```

I'm also using an object to style the `span`:

```tsx
const tabStyle = {
  padding: '4px 8px',
  backgroundColor: '#f2f3fe',
  color: '#87a7ff',
  borderRadius: '4px',
};
```

I also wanted to build tests for this component trying to think of its behavior:

- when it's not visible: the tag will not be in the document.

```tsx
describe('when is not visible', () => {
  it('does not render anything', () => {
    const { queryByTestId } = render(
      <Tag label="a label" isVisible={false} isLoading={false} />,
    );

    expect(queryByTestId('tag-label-wrapper')).not.toBeInTheDocument();
  });
});
```

- when it's loading: the skeleton will be in the document.

```tsx
describe('when is loading', () => {
  it('renders the tag label', () => {
    const { queryByTestId } = render(
      <Tag label="a label" isVisible isLoading />,
    );

    expect(queryByTestId('tag-skeleton-loader')).toBeInTheDocument();
  });
});
```

- when it's ready to render: the tag will be in the document.

```tsx
describe('when is visible and not loading', () => {
  it('renders the tag label', () => {
    render(<Tag label="a label" isVisible isLoading={false} />);

    expect(screen.getByText('a label')).toBeInTheDocument();
  });
});
```

- bonus point: accessibility. I also built an automated test to cover accessibility violations using `jest-axe`.

```tsx
it('has no accessibility violations', async () => {
  const { container } = render(
    <Tag label="a label" isVisible isLoading={false} />,
  );

  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
```

We are ready to implement another component: the `TitleDescription`. It will work almost similar to the `Tag` component. It receives some props: `name`, `description`, and `isLoading`.

As we have the `Product` type with the type definition for the `name` and the `description`, I wanted to reuse it. I tried different things - and you can [take a look here for more details](https://leandrotk.github.io/tk/2020/05/typescript-learnings-interesting-types/index.html) - and I found the `Pick` type. With that, I could get the `name` and the `description` from the `ProductType`:

```tsx
type TitleDescriptionType = Pick<ProductType, 'name' | 'description'>;
```

With this new type, I could create the `TitleDescriptionPropsType` for the component:

```tsx
type TitleDescriptionPropsType = TitleDescriptionType & {
  isLoading: boolean;
};
```

Now working inside the component, If the `isLoading` is true, the component renders the proper skeleton component before it renders the actual title and description texts.

```tsx
if (isLoading) {
  return (
    <Fragment>
      <Skeleton width="60%" height="24px" data-testid="name-skeleton-loader" />
      <Skeleton
        style={descriptionSkeletonStyle}
        height="20px"
        data-testid="description-skeleton-loader"
      />
    </Fragment>
  );
}
```

If the component is not loading anymore, we render the title and description texts. Here we use the `Typography` component.

```tsx
return (
  <Fragment>
    <Typography data-testid="product-name">{name}</Typography>
    <Typography
      data-testid="product-description"
      color="textSecondary"
      variant="body2"
      style={descriptionStyle}
    >
      {description}
    </Typography>
  </Fragment>
);
```

For the tests, we want three things:

- when it is loading, the component renders the skeletons
- when it is not loading anymore, the component renders the texts
- make sure the component doesn't violate the accessibility

We will use the same idea we use for the `Tag` tests: see if it in the document or not based on the state.

When it is loading, we want to see if the skeleton is in the document, but the title and description texts are not.

```tsx
describe('when is loading', () => {
  it('does not render anything', () => {
    const { queryByTestId } = render(
      <TitleDescription
        name={product.name}
        description={product.description}
        isLoading
      />,
    );

    expect(queryByTestId('name-skeleton-loader')).toBeInTheDocument();
    expect(queryByTestId('description-skeleton-loader')).toBeInTheDocument();
    expect(queryByTestId('product-name')).not.toBeInTheDocument();
    expect(queryByTestId('product-description')).not.toBeInTheDocument();
  });
});
```

When it is not loading anymore, it renders the texts in the DOM:

```tsx
describe('when finished loading', () => {
  it('renders the product name and description', () => {
    render(
      <TitleDescription
        name={product.name}
        description={product.description}
        isLoading={false}
      />,
    );

    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText(product.description)).toBeInTheDocument();
  });
});
```

And a simple test to cover accessibility issues:

```tsx
it('has no accessibility violations', async () => {
  const { container } = render(
    <TitleDescription
      name={product.name}
      description={product.description}
      isLoading={false}
    />,
  );

  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
```

The next component is the `Price`. In this component we will provide a skeleton when it is still loading as we did in the other component, and add three different components here:

- `PriceWithDiscount`: we apply the discount into the original price and render it
- `OriginalPrice`: it just renders the product price
- `Discount`: it renders the discount percentage when the product has a discount

But before I start implementing these components, I wanted to structure the data to be used. The `price` and the `discount` values are numbers. So let's build a function called `getPriceInfo` that receives the `price` and the `discount` and it will return this data:

```tsx
{
  priceWithDiscount,
  originalPrice,
  discountOff,
  hasDiscount,
};
```

With this type contract:

```tsx
type PriceInfoType = {
  priceWithDiscount: string;
  originalPrice: string;
  discountOff: string;
  hasDiscount: boolean;
};
```

In this function, it will get the `discount` and transform it into a `boolean`, then apply the `discount` to build the `priceWithDiscount`, use the `hasDiscount` to build the discount percentage, and build the `originalPrice` with the dollar sign:

```tsx
export const applyDiscount = (price: number, discount: number): number =>
  price - (price * discount) / 100;

export const getPriceInfo = (
  price: number,
  discount: number,
): PriceInfoType => {
  const hasDiscount: boolean = Boolean(discount);
  const priceWithDiscount: string = hasDiscount
    ? `$${applyDiscount(price, discount)}`
    : `$${price}`;

  const originalPrice: string = `$${price}`;
  const discountOff: string = hasDiscount ? `${discount}% OFF` : '';

  return {
    priceWithDiscount,
    originalPrice,
    discountOff,
    hasDiscount,
  };
};
```

Here I also built an `applytDiscount` function to extract the discount calculation.

I added some tests to cover these functions. As they are pure functions, we just need to pass some values and expect new data.

Test for the `applyDiscount`:

```tsx
describe('applyDiscount', () => {
  it('applies 20% discount in the price', () => {
    expect(applyDiscount(100, 20)).toEqual(80);
  });

  it('applies 95% discount in the price', () => {
    expect(applyDiscount(100, 95)).toEqual(5);
  });
});
```

Test for the `getPriceInfo`:

```tsx
describe('getPriceInfo', () => {
  describe('with discount', () => {
    it('returns the correct price info', () => {
      expect(getPriceInfo(100, 20)).toMatchObject({
        priceWithDiscount: '$80',
        originalPrice: '$100',
        discountOff: '20% OFF',
        hasDiscount: true,
      });
    });
  });

  describe('without discount', () => {
    it('returns the correct price info', () => {
      expect(getPriceInfo(100, 0)).toMatchObject({
        priceWithDiscount: '$100',
        originalPrice: '$100',
        discountOff: '',
        hasDiscount: false,
      });
    });
  });
});
```

Now we can use the `getPriceInfo` in the `Price` components to get this structure data and pass down for the other components like this:

```tsx
export const Price = ({ price, discount, isLoading }: PricePropsType) => {
  if (isLoading) {
    return (
      <Skeleton width="80%" height="18px" data-testid="price-skeleton-loader" />
    );
  }

  const {
    priceWithDiscount,
    originalPrice,
    discountOff,
    hasDiscount,
  }: PriceInfoType = getPriceInfo(price, discount);

  return (
    <Fragment>
      <PriceWithDiscount price={priceWithDiscount} />
      <OriginalPrice hasDiscount={hasDiscount} price={originalPrice} />
      <Discount hasDiscount={hasDiscount} discountOff={discountOff} />
    </Fragment>
  );
};
```

As we talked earlier, when it is loading, we just render the `Skeleton` component. When it finishes the loading, it will build the structured data and render the price info. Let's build each component now!

Let's start with the `OriginalPrice`. We just need to pass the `price` as a prop and it renders with the `Typography` component.

```tsx
type OriginalPricePropsType = {
  price: string;
};

export const OriginalPrice = ({ price }: OriginalPricePropsType) => (
  <Typography display="inline" style={originalPriceStyle} color="textSecondary">
    {price}
  </Typography>
);
```

Very simple! Let's add a test now.

Just pass a price and see it if was rendered in the DOM:

```tsx
it('shows the price', () => {
  const price = '$200';
  render(<OriginalPrice price={price} />);
  expect(screen.getByText(price)).toBeInTheDocument();
});
```

I also added a test to cover accessibility issues:

```tsx
it('has no accessibility violations', async () => {
  const { container } = render(<OriginalPrice price="$200" />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
```

The `PriceWithDiscount` component has a very similar implementation, but we pass the `hasDiscount` boolean to render this price or not. If it has a discount, render the price with the discount. Otherwise, it won't render anything.

```tsx
type PricePropsType = {
  hasDiscount: boolean;
  price: string;
};
```

The props type has the `hasDiscount` and the `price`. And the component just renders things based on the `hasDiscount` value.

```tsx
export const PriceWithDiscount = ({ price, hasDiscount }: PricePropsType) => {
  if (!hasDiscount) {
    return null;
  }

  return (
    <Typography display="inline" style={priceWithDiscountStyle}>
      {price}
    </Typography>
  );
};
```

The tests will cover this logic when it has or doesn't have the discount. If it hasn't the discount, the prices will not be rendered.

```tsx
describe('when the product has no discount', () => {
  it('shows nothing', () => {
    const { queryByTestId } = render(
      <PriceWithDiscount hasDiscount={false} price="" />,
    );

    expect(queryByTestId('discount-off-label')).not.toBeInTheDocument();
  });
});
```

If it has the discount, it will be the rendered in the DOM:

```tsx
describe('when the product has a discount', () => {
  it('shows the price', () => {
    const price = '$200';
    render(<PriceWithDiscount hasDiscount price={price} />);
    expect(screen.getByText(price)).toBeInTheDocument();
  });
});
```

And as always, a test to cover accessibility violations:

```tsx
it('has no accessibility violations', async () => {
  const { container } = render(<PriceWithDiscount hasDiscount price="$200" />);

  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
```

The `Discount` component is pretty much the same as the `PriceWithDiscount`. Render the discount tag if the product has a discount:

```tsx
type DiscountPropsType = {
  hasDiscount: boolean;
  discountOff: string;
};

export const Discount = ({ hasDiscount, discountOff }: DiscountPropsType) => {
  if (!hasDiscount) {
    return null;
  }

  return (
    <Typography
      display="inline"
      color="secondary"
      data-testid="discount-off-label"
    >
      {discountOff}
    </Typography>
  );
};
```

And all the tests we did for the other component, we do the same thing for the `Discount` component:

```tsx
describe('Discount', () => {
  describe('when the product has a discount', () => {
    it('shows the discount label', () => {
      const discountOff = '20% OFF';
      render(<Discount hasDiscount discountOff={discountOff} />);
      expect(screen.getByText(discountOff)).toBeInTheDocument();
    });
  });

  describe('when the product has no discount', () => {
    it('shows nothing', () => {
      const { queryByTestId } = render(
        <Discount hasDiscount={false} discountOff="" />,
      );

      expect(queryByTestId('discount-off-label')).not.toBeInTheDocument();
    });
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Discount hasDiscount discountOff="20% OFF" />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
```

Now we will build an `Image` component. This component has the basic skeleton as any other component we've built. If it is loading, wait to render the image source and render the skeleton instead. When it finishes the loading, we will render the image, but only if the component is in the intersection of the browser window.

What does it mean? When you are on a website on your mobile device, you'll probably see the first 4 products. They will render the skeleton and then the image. But below these 4 products, as you're not seeing any of them, it doesn't matter if we are rendering them or not. And we can choose to not render them. Not for now. But on-demand. When you are scrolling, if the product's image is at the intersection of the browser window, we start rendering the image source.

That way we gain performance by speeding up the page load time and reduce the cost by requesting images on demand.

We will use the Intersection Observer API to download images on demand. But before writing any code about this technology, let's start building our component with the image and the skeleton view.

Image props will have this object:

```tsx
{
  imageUrl,
  imageAlt,
  width,
  isLoading,
  imageWrapperStyle,
  imageStyle,
}
```

The `imageUrl`, `imageAlt`, and the `isLoading` props are passed by the product component. The `width` is an attribute for the skeleton and the image tag. The `imageWrapperStyle` and the `imageStyle` are props that have a default value in the image component. We'll talk about this later.

Let's add a type for this props:

```tsx
type ImageUrlType = Pick<ProductType, 'imageUrl'>;
type ImageAttrType = { imageAlt: string; width: string };
type ImageStateType = { isLoading: boolean };
type ImageStyleType = {
  imageWrapperStyle: CSSProperties;
  imageStyle: CSSProperties;
};

export type ImagePropsType = ImageUrlType &
  ImageAttrType &
  ImageStateType &
  ImageStyleType;
```

The idea here is to give meaning for the types and then compose everything. We can get the `imageUrl` from the `ProductType`. The attribute type will have the `imageAlt` and the `width`. The image state has the `isLoading` state. And the image style has some `CSSProperties`.

At first, the component would like this:

```tsx
export const Image = ({
  imageUrl,
  imageAlt,
  width,
  isLoading,
  imageWrapperStyle,
  imageStyle,
}: ImagePropsType) => {
  if (isLoading) {
    <Skeleton
      variant="rect"
      width={width}
      data-testid="image-skeleton-loader"
    />;
  }

  return <img src={imageUrl} alt={imageAlt} width={width} style={imageStyle} />;
};
```

Let's build the code to make the intersection observer works.

The idea of the intersection observer is to receive a target to be observed and a callback function that is executed whenever the observed target enters or exits the viewport. So the implementation would be very simple:

```tsx
const observer: IntersectionObserver = new IntersectionObserver(
  onIntersect,
  options,
);

observer.observe(target);
```

Instantiate the `IntersectionObserver` class by passing an options object and the callback function. The `observer` will observe the `target` element.

As it is an effect in the DOM, we can wrap this into a `useEffect`.

```tsx
useEffect(() => {
  const observer: IntersectionObserver = new IntersectionObserver(
    onIntersect,
    options,
  );

  observer.observe(target);

  return () => {
    observer.unobserve(target);
  };
}, [target]);
```

Using `useEffect`, we have two different things here: the dependency array and the returning function. We pass the `target` as the dependency function to make sure that we will re-run the effect if the `target` changes. And the returning function is a cleanup function. React performs the cleanup when the component unmounts, so it will clean up the effect before running another effect for every render.

In this cleanup function, we just stop observing the `target` element.

When the component starts rendering, the `target` reference is not set yet, so we need to have a guard to not observe an `undefined` target.

```tsx
useEffect(() => {
  if (!target) {
    return;
  }

  const observer: IntersectionObserver = new IntersectionObserver(
    onIntersect,
    options,
  );

  observer.observe(target);

  return () => {
    observer.unobserve(target);
  };
}, [target]);
```

Instead of using this effect in our component, we could build a custom hook to receive the target, some options to customize the configuration, and it would provide a boolean telling if the target is at the intersection of the viewport or not.

```tsx
export type TargetType = Element | HTMLDivElement | undefined;
export type IntersectionStatus = {
  isIntersecting: boolean;
};

const defaultOptions: IntersectionObserverInit = {
  rootMargin: '0px',
  threshold: 0.1,
};

export const useIntersectionObserver = (
  target: TargetType,
  options: IntersectionObserverInit = defaultOptions,
): IntersectionStatus => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!target) {
      return;
    }

    const onIntersect = ([entry]: IntersectionObserverEntry[]) => {
      setIsIntersecting(entry.isIntersecting);

      if (entry.isIntersecting) {
        observer.unobserve(target);
      }
    };

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      options,
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [target]);

  return { isIntersecting };
};
```

In our callback function, we just set if the entry target is intersecting the viewport or not. The `setIsIntersecting` is a setter from the `useState` hook we define at the top of our custom hook.

It is initialized as `false` but will update to `true` if it is intersecting the viewport.

With this new information in the component, we can render the image or not. If it is intersecting, we can render the image. If not, just render a skeleton until the user gets to the viewport intersection of the product image.

How does it look in practice?

First we define the wrapper reference using `useState`:

```tsx
const [wrapperRef, setWrapperRef] = useState<HTMLDivElement>();
```

It start as `undefined`. Then build a wrapper callback to set the element node:

```tsx
const wrapperCallback = useCallback((node) => {
  setWrapperRef(node);
}, []);
```

With that, we can use it to get the wrapper reference by using a `ref` prop in our `div`.

```tsx
<div ref={wrapperCallback}>
```

After setting the `wrapperRef`, we can pass it as the `target` for our `useIntersectionObserver` and expect a `isIntersecting` status as a result:

```tsx
const { isIntersecting }: IntersectionStatus =
  useIntersectionObserver(wrapperRef);
```

With this new value, we can build a boolean value to know if we render the skeleton or the product image.

```tsx
const showImageSkeleton: boolean = isLoading || !isIntersecting;
```

So now we can render the appropriate node to the DOM.

```tsx
<div ref={wrapperCallback} style={imageWrapperStyle}>
  {showImageSkeleton ? (
    <Skeleton
      variant="rect"
      width={width}
      height={imageWrapperStyle.height}
      style={skeletonStyle}
      data-testid="image-skeleton-loader"
    />
  ) : (
    <img src={imageUrl} alt={imageAlt} width={width} />
  )}
</div>
```

The full component looks like this:

```tsx
export const Image = ({
  imageUrl,
  imageAlt,
  width,
  isLoading,
  imageWrapperStyle,
}: ImagePropsType) => {
  const [wrapperRef, setWrapperRef] = useState<HTMLDivElement>();
  const wrapperCallback = useCallback((node) => {
    setWrapperRef(node);
  }, []);

  const { isIntersecting }: IntersectionStatus =
    useIntersectionObserver(wrapperRef);
  const showImageSkeleton: boolean = isLoading || !isIntersecting;

  return (
    <div ref={wrapperCallback} style={imageWrapperStyle}>
      {showImageSkeleton ? (
        <Skeleton
          variant="rect"
          width={width}
          height={imageWrapperStyle.height}
          style={skeletonStyle}
          data-testid="image-skeleton-loader"
        />
      ) : (
        <img src={imageUrl} alt={imageAlt} width={width} />
      )}
    </div>
  );
};
```

Great, now the loading on-demand works well. But I want to build a slightly better experience. The idea here is to have two different sizes of the same image. The low-quality image is requested and we make it visible, but blur while the high-quality image is requested in the background. When the high-quality image finally finishes loading, we transition from the low-quality to the high-quality image with an ease-in/ease-out transition to make it a smooth experience.

Let's build this logic. We could build this into the component, but we could also extract this logic into a custom hook.

```tsx
export const useImageOnLoad = (): ImageOnLoadType => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageOnLoad = () => setIsLoaded(true);

  const imageVisibility: CSSProperties = {
    visibility: isLoaded ? 'hidden' : 'visible',
    filter: 'blur(10px)',
    transition: 'visibility 0ms ease-out 500ms',
  };

  const imageOpactity: CSSProperties = {
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 500ms ease-in 0ms',
  };

  return { handleImageOnLoad, imageVisibility, imageOpactity };
};
```

This hook just provides some data and behavior for the component. The `handleImageOnLoad` we talked earlier, the `imageVisibility` to make the low-quality image visible or not, and the `imageOpactity` to make the transition from transparent to opaque, that way we make it visible after loading it.

The `isLoaded` is a simple boolean to handle the visibility of the images. Another small detail is the `filter: 'blur(10px)'` to make the low-quality-image blur and then slowly focusing while transitioning from the low-quality image to the high-quality image.

With this new hook, we just import it, and call inside the component:

```tsx
const { handleImageOnLoad, imageVisibility, imageOpactity }: ImageOnLoadType =
  useImageOnLoad();
```

And start using the data and behavior we built.

```tsx
<Fragment>
  <img
    src={thumbUrl}
    alt={imageAlt}
    width={width}
    style={{ ...imageStyle, ...imageVisibility }}
  />
  <img
    onLoad={handleImageOnLoad}
    src={imageUrl}
    alt={imageAlt}
    width={width}
    style={{ ...imageStyle, ...imageOpactity }}
  />
</Fragment>
```

The first one has a low-quality image, the `thumbUrl`. The second has the original high-quality image, the `imageUrl`. When the high-quality image is loaded, it calls the `handleImageOnLoad` function. This function will make the transition between one image to the other.

## Wrapping up

This is the first part of this project to learn more about user experience, native APIs, typed frontend, and tests.

For the next part of this series, we are going to think more in an architectural way to build the search with filters, but keeping the mindset to bring technical solutions to make the user experience as smooth as possible.

## Resources

- [Lazy Loading Images and Video](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video)
- [Functional Uses for Intersection Observer](https://css-tricks.com/a-few-functional-uses-for-intersection-observer-to-know-when-an-element-is-in-view/)
- [Tips for rolling your own lazy loading](https://css-tricks.com/tips-for-rolling-your-own-lazy-loading/)
- [Intersection Observer API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [React Typescript Cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)