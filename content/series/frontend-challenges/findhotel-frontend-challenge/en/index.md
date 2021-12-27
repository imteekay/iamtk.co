This is part of the [Frontend Challenges Series](/series/frontend-challenges).

Today I finished a frontend challenge and I had a blast working on it. There were so many interesting concepts I debated with myself while designing and implementing the feature, so I was eager to document and share everything I learned through this entire journey.

The challenge was a `Front-end Engineer Assignment` from [FindHotel](https://www.linkedin.com/company/findhotel/). It's actually a public challenge and you can find it on their GitHub: **[FindHotel Front-end Engineer Assignment](https://github.com/FindHotel/fh-fe-assignment)**.

Let's talk about the challenge:

### Technology

- The project is setup using React
- They prefer using [TypeScript](/a-mental-model-to-think-in-typescript) (or Flow)
- They use EmotionJS as a CSS tool

### UI

The idea is to create a Guest and Room Overlay component. The user can open it, add different rooms, select any limited number of adults and children, and select the children's ages.

![The findhotel home, the dialog opened, and the dialog with multiple rooms](/series/frontend-challenges/findhotel-challenge.png)

### Input rules

The component should be able to pass a string as the default data. These are the rules:

- Rooms are separated by pipe `|`
- Adults and children are separated by a colon `:`
- Children ages are separated by a comma `,`

Examples:

- "1:4,6|3" → Two rooms, one with one adult and two children ages four and six and the other with three adults and no children
- "3" → One room with three adults and no children
- "2:4" → One room with two adults and one child aged four
- "1:0,13,16" → One room with one adult and three children (aged zero, thirteen, and sixteen)

### Functional Requirements

- Up to eight rooms can be added
- Each room has at least one adult and up to a maximum of five
- Each room has zero or more children up to a maximum of three
- Each child needs to have their age supplied, so we know what kind of bed or cot to provide and what to charge for the room
- Each room has a maximum occupancy of five. This is, adults plus children per room
- The Guest and Room selector should always yield a valid room occupancy, use button disablement to avoid invalid configurations
- A user can either click `Search` to commit the output to the URL or click the `x` on top to reset the chosen room selection and revert the UI back to the original state.

Now, giving this introduction to the challenge, I want to share the topics I will cover in this piece. The main topics are:

- **Data Structure & State Management**: in this part, we'll discuss how to design the UI’s state data structure and manage it throughout the entire component.
- **UI & Style**: creating reusable components, handling responsive design with media queries and react-device-detect, and handling animation.
- **Unit & Integration tests**: the implementation of the tests to make us confident about the feature. Unit tests will be handled by [react-testing-library](/basic-recipes-for-react-testing-library) and Integration tests by Cypress.

## Data Structure & State Management

I came up with a data structure to represent this UI and it looks like this:

```tsx
{
  rooms: [
    {
      adultsCount: <number>,
      children: [
        {
          age: <number>,
        },
      ],
    },
  ],
}
```

A TypeScript implementation looks like this:

```tsx
type Child = {
  age: number;
};

type Room = {
  adultsCount: number;
  children: Child[];
};

type GuestRooms = {
  rooms: Room[];
};
```

And an example would look like this:

```tsx
const GuestRooms = {
  rooms: [
    {
      adultsCount: 2,
      children: [
        {
          age: 4,
        },
      ],
    },
    {
      adultsCount: 2,
      children: [
        {
          age: 4,
        },
        {
          age: 10,
        },
      ],
    },
  ],
};
```

Now that we have defined the data structure and have a simple implementation of it, we can move to the next part that's how we use this data and which API we should provide to update this state in different parts of the component.

Listing all the behaviors makes it easier to understand how we should handle the data and what are the APIs we need to provide for each component to update our data structure.

I sketched a little drawing with all the behaviors:

![Showing each component's behavior in the guest rooms dialog](/series/frontend-challenges/guest-rooms-dialog.png)

Let's list them here:

- _Update adults count for room X_: `updateAdultsCount`, which should receive the room index and the new count. The function's type contract should be:
  ```tsx
  (roomIndex: number, count: number) => void
  ```
- _Update children count for room X_: `addChild`, which should receive the room index and it should add a new child to the children list with the age's value as 8 (the default age's value). The function's type contract should be:
  ```tsx
  (roomIndex: number) => void
  ```
- _Remove a child from room X_: `removeChild`, which should receive the room index and the child index. The function's type contract should be:
  ```tsx
  (roomIndex: number, childIndex: number) => void
  ```
- _Remove room X_: `removeRoom`, which should receive the room index. The function's type contract should be:
  ```tsx
  (roomIndex: number) => void
  ```
- _Select a child's age from room X_: `updateChild`, which should receive the room index, the child index, and the new child age.
  ```tsx
  (roomIndex: number, childIndex: number, childAge: number) => void
  ```
- _Add new room section_: `addRoom`, which should just add a new room to the rooms list.
  ```tsx
  () => void
  ```
- _Search with the selected rooms & guests_: this function won't update our data structure, it'll only receive the data structure, transform it into a string representation and append the result as a query param in the url.

Nice, we have all the necessary APIs to handle the component's state. Now let's start implementing them all.

### Context Provider

When I started implementing this solution, I didn't want to use any library or framework to handle the state. I wanted to keep it very simple. I start with a `useState` hook. But soon some interesting (and common) problems started to arise.

If we have centralized data, to be able to access it using a `useState` hook, we need to the state via props to all components. And prop drilling can be a big problem in terms of runtime performance and impacting user experience. Updating the state had the same issue. I needed to pass this update function as a prop for all components.

The second solution that I came across, as I still didn't want to use a library for it, was to use the Context API and provide the state's data structure and function APIs to every component that is wrapped by the context provider. This is the fundamental part of my solution to handle the state.

The provider will be pretty simple. It should just be a component that wraps our component and provide a value for it.

```tsx
export const GuestRoomsContext = createContext<GuestRoomsValues>(undefined);

const GUEST_ROOMS_DEFAULT = {
  rooms: [
    {
      adultsCount: 2,
      children: [],
    },
  ],
};

type GuestRoomsProviderPropTypes = {
  guestRoomsString?: string;
};

export const GuestRoomsProvider: FC<GuestRoomsProviderPropTypes> = ({
  children,
  guestRoomsString,
}) => {
  const defaultGuestRooms = guestRoomsString
    ? toGuestRooms(guestRoomsString)
    : GUEST_ROOMS_DEFAULT;

  const [guestRooms, setGuestRooms] = useState<GuestRooms>(defaultGuestRooms);

  // ...

  return (
    <GuestRoomsContext.Provider value={providerValue}>
      {children}
    </GuestRoomsContext.Provider>
  );
};
```

So it will receive `children` and a `guestRoomsString`. Receiving the `guestRoomsString` enables us to pass a string as the initial state of our data structure. You can see in the `GuestRoomsProviderPropTypes`, that this prop is optional, so if we don't pass any string for the provider, it should use the default value `GUEST_ROOMS_DEFAULT`.

We also use a simple `useState` and it should be the source of truth of our data. `guestRooms` is the state and `setGuestRooms` is the function API to update the state.

The `GuestRoomsContext` is created and exported. We will use this context in our components to access the data and function APIs. And we also use it to create the provider. `children` is wrapped by this provider and we also see a `providerValue` that will talk about it soon.

Before moving to the other implementations, I want to talk a bit about the `toGuestRooms` function. This is just a transformer, specifically transforming the string format into a `GuestRooms` data structure.

Why did I decide to do this? My approach is to have an internal data structure for the component instead of using string as the state type. I think designing a better data structure to represent the state of this UI would help a lot when managing the state. This is how is looks like:

```tsx
const ROOM_SEPARATOR = '|';
const ADULT_CHILDREN_SEPARATOR = ':';
const CHILDREN_SEPARATOR = ',';

function parseChildren(children: string) {
  return children
    .split(CHILDREN_SEPARATOR)
    .map((age: string) => ({ age: Number(age) }));
}

function parseGuestRooms(guestRooms: GuestRooms, room: string) {
  const [adultsCount, childrenString] = room.split(ADULT_CHILDREN_SEPARATOR);
  const children = childrenString ? parseChildren(childrenString) : [];

  guestRooms.rooms.push({
    adultsCount: Number(adultsCount),
    children,
  });

  return guestRooms;
}

export function toGuestRooms(guestRooms: string) {
  const rooms = guestRooms.split(ROOM_SEPARATOR);
  const guestRoomsInitialValue = { rooms: [] };

  return rooms.reduce<GuestRooms>(parseGuestRooms, guestRoomsInitialValue);
}
```

Using the separators to get each meaningful data and returning the `GuestRooms` data structure.

As a pure function, we can easily test it.

```tsx
describe('toGuestRooms', () => {
  it('generates GuestRooms based on "1:4,6|3"', () => {
    expect(toGuestRooms('1:4,6|3')).toEqual({
      rooms: [
        {
          adultsCount: 1,
          children: [
            {
              age: 4,
            },
            {
              age: 6,
            },
          ],
        },
        {
          adultsCount: 3,
          children: [],
        },
      ],
    });
  });

  it('generates GuestRooms based on "3"', () => {
    expect(toGuestRooms('3')).toEqual({
      rooms: [
        {
          adultsCount: 3,
          children: [],
        },
      ],
    });
  });

  it('generates GuestRooms based on "2:4"', () => {
    expect(toGuestRooms('2:4')).toEqual({
      rooms: [
        {
          adultsCount: 2,
          children: [
            {
              age: 4,
            },
          ],
        },
      ],
    });
  });

  it('generates GuestRooms based on "1:0,13,16"', () => {
    expect(toGuestRooms('1:0,13,16')).toEqual({
      rooms: [
        {
          adultsCount: 1,
          children: [
            {
              age: 0,
            },
            {
              age: 13,
            },
            {
              age: 16,
            },
          ],
        },
      ],
    });
  });
});
```

...to make sure it works and also gain confidence in the implementation.

### Number input

Let's now create the `NumberInput` component as it will be the building block for the adults count input and children count input.

This component is a very simple one. It should only handle the UI and be able to receive data and functions to trigger when necessary.

The type contract (or prop types) should be like:

```tsx
type NumberInputPropTypes = {
  value: number;
  increaseValue: () => void;
  decreaseValue: () => void;
  minValue: number;
  maxValue: number;
};
```

- `value`: the value we want to show to the user.
- `increaseValue`: the function to increase the value (meaning adults or children count)
- `decreaseValue`: the function to decrease the value (meaning adults or children count)
- `minValue`: the minimum value accepted by the component. It will be useful to disable the decrease button
- `maxValue`: the maximum value accepted by the component. It will be useful to disable the increase button

And that's it.

There's a simple logic that I wanted to do to disable (or not) the increase and the decrease buttons.

```tsx
const isAbleToDecreaseValue = value > minValue;
const isAbleToIncreaseValue = value < maxValue;

const isDecreaseDisabled = value === minValue;
const isIncreaseDisabled = value === maxValue;

const decreaseNumber = () => isAbleToDecreaseValue && decreaseValue();
const increaseNumber = () => isAbleToIncreaseValue && increaseValue();

const decreaseButtonVariant = isDecreaseDisabled ? 'disabled' : 'secondary';
const increaseButtonVariant = isIncreaseDisabled ? 'disabled' : 'secondary';
```

I not only wanted to add a `disabled` variant for the buttons and change the UI but also disable the state update because it's possible for the user to just disable it via devtools and be able to click the button. Having this second constraint is nice to block this behavior.

And here's the UI:

```tsx
<div>
  <Button
    disabled={isDecreaseDisabled}
    onClick={decreaseNumber}
    variant={decreaseButtonVariant}
  >
    <MinusIcon />
  </Button>
  <span>{value}</span>
  <Button
    disabled={isIncreaseDisabled}
    onClick={increaseNumber}
    variant={increaseButtonVariant}
  >
    <PlusIcon />
  </Button>
</div>
```

### Adults count input

Now that we have this base component, we can build the `AdultsCountInput` and the `ChildrenCountInput` on top of that.

It should be very simple actually.

```tsx
type AdultsCountInputPropTypes = {
  roomIndex: number;
};

export const AdultsCountInput: FC<AdultsCountInputPropTypes> = ({
  roomIndex,
}) => {
  const { guestRooms, updateAdultsCount } = useContext(GuestRoomsContext);
  const adultsCount = getAdultsCount(guestRooms, roomIndex);

  const increaseValue = () => updateAdultsCount(roomIndex, adultsCount + 1);
  const decreaseValue = () => updateAdultsCount(roomIndex, adultsCount - 1);

  return (
    <NumberInput
      value={adultsCount}
      increaseValue={increaseValue}
      decreaseValue={decreaseValue}
      minValue={1}
      maxValue={5}
    />
  );
};
```

The `AdultsCountInput` component can receive the `roomIndex` as we need this value to be able to update the correct adults count for a given room.

We use the `useContext` passing the `GuestRoomsContext` to get the `guestRooms` and the `updateAdultsCount` (that will be implemented in a sec).

But I want to focus on the `getAdultsCount` first. The idea is to just implement a “getter” to, well, get the adults’ count.

```tsx
export function getAdultsCount(guestRooms: GuestRooms, roomIndex: number) {
  return guestRooms.rooms[roomIndex].adultsCount;
}
```

It's pretty straightforward. It receives the `guestRooms` and the `roomIndex` and it should get the `adultsCount` from a specific room.

With that, we can use this value to pass to the `NumberInput`.

We can also see the `minValue` and `maxValue`:

```tsx
minValue={1}
maxValue={5}
```

These are parts of the business rules. For adults, it should have this interval.

Now let's talk about `updateAdultsCount`. As we mentioned earlier, it should have this type definition:

```tsx
updateAdultsCount: (roomIndex: number, count: number) => void;
```

Within the provider, we can access the `guestRooms` state and the `setGuestRooms` function to update the state. Receiving the `roomIndex` and the new adults’ `count` should be enough to update the state.

```tsx
function updateAdultsCount(roomIndex: number, count: number) {
  guestRooms.rooms[roomIndex] = {
    ...guestRooms.rooms[roomIndex],
    adultsCount: count,
  };

  setGuestRooms({
    rooms: guestRooms.rooms,
  });
}
```

And that's it. We use the spread operator to just update the `adultsCount` and keep the `children` value. Pass the updated value to the `setGuestRooms` and it should update properly.

Back to the component, we can use this new function:

```tsx
const increaseValue = () => updateAdultsCount(roomIndex, adultsCount + 1);
const decreaseValue = () => updateAdultsCount(roomIndex, adultsCount - 1);
```

The `increaseValue` should add +1 to the `adultsCount` and the `decreaseValue` should add -1 to the `adultsCount`.

### Children count input

The `ChildrenCountInput` has a similar behavior but the data structure is a bit different. For the adults, the data representation is a number. For children, it's a list of objects.

```tsx
type ChildrenCountInputPropTypes = {
  roomIndex: number;
};

export const ChildrenCountInput: FC<ChildrenCountInputPropTypes> = ({
  roomIndex,
}) => {
  const { guestRooms, addChild, removeChild } = useContext(GuestRoomsContext);
  const childrenCount = getChildrenCount(guestRooms, roomIndex);

  const increaseValue = () => addChild(roomIndex);
  const decreaseValue = () => removeChild(roomIndex);

  return (
    <NumberInput
      value={childrenCount}
      increaseValue={increaseValue}
      decreaseValue={decreaseValue}
      minValue={0}
      maxValue={3}
    />
  );
};
```

The `ChildrenCountInput` also has a `roomIndex` prop. It should receive a `minValue` and a `maxValue`. As the functional requirements say, the minimum should be 0 and the maximum children's count should be 3.

The `getChildrenCount` is also very similar.

```tsx
export function getChildrenCount(guestRooms: GuestRooms, roomIndex: number) {
  return guestRooms.rooms[roomIndex].children.length;
}
```

Get the children's length from a specific room.

To increase and decrease the children's count, we should add a new child or remove the child from the children's list. Let's implement the `addChild` and the `removeChild` functions.

```tsx
function addChild(roomIndex: number) {
  const children = guestRooms.rooms[roomIndex].children;

  children.push({
    ...children,
    age: 8,
  });

  setGuestRooms({
    rooms: guestRooms.rooms,
  });
}
```

It receives the `roomIndex`, gets the `children`’s list, and pushes a new child with the age of 8 (the default age). Then we should just update the `guestRooms` state.

The `removeChild` should work in a similar way but remove a specific child.

```tsx
function removeChild(roomIndex: number, childIndex: number = -1) {
  const children = guestRooms.rooms[roomIndex].children;

  children.splice(childIndex, 1);

  setGuestRooms({
    rooms: guestRooms.rooms,
  });
}
```

We use `splice` to remove the child by its index and then update the `guestRooms` state.

It receives a `childIndex` because, in the future, we should use it in our favor to remove a specific child. In this case, we just want to remove the last one. This is why we add a default value as -1, so when calling `splice`, it removes the last one.

### Child select

The next part is about the `ChildSelect`. It should show all possible age options and handle the select on change.

About the options, I just created a `ageOptions` with a simple array.

```tsx
const ageOptions = [...Array(18)];
```

And we use it to create all options for the select. The entire the `ChildSelect` component will look like this:

```tsx
type ChildSelectPropTypes = {
  child: Child;
  roomIndex: number;
  index: number;
};

export const ChildSelect: FC<ChildSelectPropTypes> = ({
  child,
  roomIndex,
  index,
}) => {
  const { updateChild } = useContext(GuestRoomsContext);

  const childAgeOnChange =
    (childIndex: number) => (event: ChangeEvent<HTMLSelectElement>) => {
      const childAge = Number(event.target.value);
      updateChild(roomIndex, childIndex, childAge);
    };

  return (
    <select onChange={childAgeOnChange(index)} value={child.age}>
      {ageOptions.map((_, age) => (
        <option
          value={age}
          key={`${roomIndex}-child-${index}-age-option-${age}`}
        >
          {age ? age : '<1'}
        </option>
      ))}
    </select>
  );
};
```

The component receives the `child` (to get the current age), the `roomIndex` (to be able to find and update the child in a specific room), and the `index` (the child's index to update its age).

Now we need to implement the `updateChild` in the provider. This is the type definition:

```tsx
updateChild: (
  roomIndex: number,
  childIndex: number,
  childAge: number
) => void;
```

And the implementation looks like this:

```tsx
function updateChild(roomIndex: number, childIndex: number, childAge: number) {
  const children = guestRooms.rooms[roomIndex].children;

  children[childIndex] = {
    age: childAge,
  };

  guestRooms.rooms[roomIndex] = {
    ...guestRooms.rooms[roomIndex],
    children,
  };

  setGuestRooms({
    rooms: guestRooms.rooms,
  });
}
```

The idea here is to get a specific child from a given room, update this child's age, and update the `guestRooms` state.

This component is used by the `ChildrenSelect`, where we get all children from a room and iterate through it:

```tsx
export const ChildrenSelect = ({ roomIndex }: ChildrenSelectPropTypes) => {
  const { guestRooms } = useContext(GuestRoomsContext);
  const chidren = getChildren(guestRooms, roomIndex);

  return (
    <div className={childrenSelectWrapper}>
      {chidren.map((child, index) => (
        <div
          className={childAgeSelectWrapper}
          key={`${roomIndex}-child-${index}`}
        >
          <span>Child {index + 1} age</span>
          <div className={selectWrapperStyle}>
            <ChildSelect child={child} roomIndex={roomIndex} index={index} />
            <CloseButton roomIndex={roomIndex} index={index} />
          </div>
        </div>
      ))}
    </div>
  );
};
```

Here are just iterating through the `children`. To get the `children`, we need to implement a simple getter.

```tsx
export function getChildren(guestRooms: GuestRooms, roomIndex: number) {
  return guestRooms.rooms[roomIndex].children;
}
```

### Remove child

Now that we can add a new child and update its age, we need to be able to remove it with the close button.

```tsx
type CloseButtonPropTypes = {
  roomIndex: number;
  index: number;
};

export const CloseButton: FC<CloseButtonPropTypes> = ({ roomIndex, index }) => {
  const { removeChild } = useContext(GuestRoomsContext);

  const removeOnClick = (childIndex: number) => () => {
    removeChild(roomIndex, childIndex);
  };

  return (
    <Button variant="danger" onClick={removeOnClick(index)}>
      <CloseIcon />
    </Button>
  );
};
```

It's actually a very simple implementation. We need a button and a way to handle the button's `onClick` event. Remember when I said that we could use the `removeChild` in other places too? This is the case for this component. To remove it, we'll use the `removeChild` function we already implemented but now passing the `childIndex` for it, so we can remove a specific child from a room.

And that's it!

### Add room

Adding a new room is also very simple. We need a button and the `addRoom` function that will update the rooms list by pushing a new room with the default value to it.

```tsx
<Button variant="secondary" onClick={addRoom} fullWidth>
  + Add room
</Button>
```

And the `addRoom` implementation looks like this:

```tsx
function addRoom() {
  setGuestRooms({
    rooms: [
      ...guestRooms.rooms,
      {
        adultsCount: 2,
        children: [],
      },
    ],
  });
}
```

We keep the current rooms and add a new room two adults and no children.

### Remove room

To remove a room, we need a button and the room's index.

```tsx
const { removeRoom } = useContext(GuestRoomsContext);
const removeRoomOnClick = (roomIndex: number) => () => {
  removeRoom(roomIndex);
};

<Button variant="danger" onClick={removeRoomOnClick(index)}>
  Remove room
</Button>;
```

We have the button and the `removeRoomOnClick`. Now we should implement the `removeRoom` function:

```tsx
function removeRoom(roomIndex: number) {
  guestRooms.rooms.splice(roomIndex, 1);

  setGuestRooms({
    rooms: guestRooms.rooms,
  });
}
```

Here we use the same concept we used to remove children from the children's list. Using splice with a specific `roomIndex` and then updating the `guestRooms` state.

### Search button

To handle the search button, I needed to enable users (engineers) to pass a callback function to the main component and pass it down to the search button component to call it when the user clicks the button. This way, we enable engineers to do whatever they want with the current state.

In the case of this challenge, we are required to get the state data structure, transform it into the string format and attach it to the url.

To do this transformation, we can create a simple function to handle this part:

```tsx
const ROOM_SEPARATOR = '|';
const ADULT_CHILDREN_SEPARATOR = ':';
const CHILDREN_SEPARATOR = ',';

function toChildrenAgesString(children: Child[]) {
  return children.map(({ age }) => age).join(CHILDREN_SEPARATOR);
}

function toAdultsAndChildrenAgesString({ adultsCount, children }: Room) {
  const childrenAges = toChildrenAgesString(children);

  return childrenAges
    ? adultsCount + ADULT_CHILDREN_SEPARATOR + childrenAges
    : adultsCount;
}

export function toGuestRoomsString(guestRooms: GuestRooms) {
  return guestRooms.rooms
    .map(toAdultsAndChildrenAgesString)
    .join(ROOM_SEPARATOR);
}
```

A `toGuestRoomsString` to transform the `GuestRooms` data structure into a string. We use the separators to construct it. To “prove” it works, we can add some tests and gain more confidence.

```tsx
describe('toGuestRoomsString', () => {
  it('generates "1:4,6|3"', () => {
    expect(
      toGuestRoomsString({
        rooms: [
          {
            adultsCount: 1,
            children: [
              {
                age: 4,
              },
              {
                age: 6,
              },
            ],
          },
          {
            adultsCount: 3,
            children: [],
          },
        ],
      }),
    ).toEqual('1:4,6|3');
  });

  it('generates "3"', () => {
    expect(
      toGuestRoomsString({
        rooms: [
          {
            adultsCount: 3,
            children: [],
          },
        ],
      }),
    ).toEqual('3');
  });

  it('generates "2:4"', () => {
    expect(
      toGuestRoomsString({
        rooms: [
          {
            adultsCount: 2,
            children: [
              {
                age: 4,
              },
            ],
          },
        ],
      }),
    ).toEqual('2:4');
  });

  it('generates "1:0,13,16"', () => {
    expect(
      toGuestRoomsString({
        rooms: [
          {
            adultsCount: 1,
            children: [
              {
                age: 0,
              },
              {
                age: 13,
              },
              {
                age: 16,
              },
            ],
          },
        ],
      }),
    ).toEqual('1:0,13,16');
  });
});
```

That's it! Now we are able to transform it into the string format before attaching it to the URL. To the function and call the callback with the result of it, I created a search function:

```tsx
function search(guestRooms: GuestRooms, callback: OnSearchFunction) {
  const guestRoomsString = toGuestRoomsString(guestRooms);

  return () =>
    callback(
      { guestRooms: guestRoomsString },
      `?guestRooms=${guestRoomsString}`,
    );
}
```

This way, we just need to implement a possible callback for it. As I'm not using any library or framework for this, we can use the History API.

```tsx
type State = any;
type Url = string | null;

export type PushStateSignature = (state: State, url?: Url) => void;

export const pushState: PushStateSignature = (state, url) => {
  window.history.pushState(state, '', url);
};
```

It expects the state and the URL. Passing the `pushState` as a callback for the `search` function and we are able to append the guest rooms string as a query param.

## UI & Style

Building a lot of different React apps, ones with pure React others with NextJS, made me experience different approaches to CSS styles. Even though it's simple to use inline CSS on React components, I didn't really like the experience as it lacks a lot of “features” like pseudo-classes, selectors.

So in this challenge, I was open to learning and applying a new CSS tool. I’ve heard about emotion-js before but never really tried. This is a tool FindHotel uses, so I started taking a look at the docs and it surprised me. It seemed very simple, just CSS styles that you could attach to components. It's like the old days when you just write pure CSS but now with the power of making it modular.

I didn't want to use styled components, so I just installed `@emotion/css`.

```bash
npm i @emotion/css
```

### Button

The first component I wanted to focus on was the `<Button>`. I wanted to make a component that I could reuse for the entire application. With a “type”, I could change the entire style of a component, so what I built was a `variant` and this it looks like:

```tsx
type ButtonVariants = 'primary' | 'secondary' | 'disabled' | 'danger' | 'close';
```

And now we are able to use this as the prop type:

```tsx
type ButtonPropTypes = {
  variant?: ButtonVariants;
};
```

If the users (engineers using this component) are also using TypeScript, it requires they use one of these variants in compile time. This is a beautiful use of TypeScript with React.

With this variant, we can style anything. I used the idea of an object that matches a variant with its style. The first is the cursor:

```tsx
const Cursor = {
  primary: 'pointer',
  secondary: 'pointer',
  disabled: 'not-allowed',
  danger: 'pointer',
  close: 'pointer',
};
```

And the usage is simple:

```tsx
cursor: ${Cursor[variant]};
```

We would do the same thing for all other styles:

```tsx
const Colors = {
  primary: 'white',
  secondary: '#0071f3',
  disabled: '#6a7886',
  danger: '#d83b3b',
  close: '#6a7886',
};

const BackgroundColors = {
  primary: '#0071f3',
  secondary: '#f7fbff',
  disabled: '#eff2F6',
  danger: 'rgba(255, 255, 255, 0)',
  close: 'rgba(255, 255, 255, 0)',
};

const BackgroundColorsHover = {
  primary: '#0064d8',
  secondary: '#e4f0fe',
  disabled: '#eff2F6',
  danger: 'rgba(255, 255, 255, 0)',
  close: 'rgba(255, 255, 255, 0)',
};

const BoxShadow = {
  primary: 'none',
  secondary: '#bfdaf9 0px 0px 0px 1px inset',
  disabled: 'none',
  danger: 'none',
  close: 'none',
};
```

The usage is similar to the cursor:

```tsx
color: ${Colors[variant]};
background-color: ${BackgroundColors[variant]};
box-shadow: ${BoxShadow[variant]};

&:hover {
  background-color: ${BackgroundColorsHover[variant]};
}
```

In this component, I also enable it to receive these props: `disabled`, `onClick`, `dataTestid`, and `children`.

```tsx
<button
  disabled={disabled}
  onClick={onClick}
  data-testid={dataTestid}
	...
>
	{children}
</button>
```

I also saw the need to be able to customize the styles if the user wants. For example, the component has a default padding spacing. But the user could need a different spacing for padding, so we can add a `className` prop as well and add it to the `css` like this:

```tsx
className={css`
	...
	${className}
`}
```

It's actually a lot of power we give to the user. The option was to have an object for the padding and margin, and any other property we want to match with the button's variant.

The last part of this component is the prop `fullWidth`. The name says everything. If enabling this prop, the button will have a full width, if not it will have an auto width.

```tsx
width: ${fullWidth ? '100%' : 'auto'};
```

The prop types look like this:

```tsx
type ButtonVariants = 'primary' | 'secondary' | 'disabled' | 'danger' | 'close';

type ButtonPropTypes = {
  disabled?: boolean;
  onClick: () => void;
  variant?: ButtonVariants;
  className?: string;
  fullWidth?: boolean;
  dataTestid?: string;
};
```

And the whole component has these props, types, and styles.

```tsx
export const Button: FC<ButtonPropTypes> = ({
  children,
  disabled = false,
  onClick,
  variant = 'primary',
  className,
  fullWidth = false,
  dataTestid,
}) => (
  <button
    disabled={disabled}
    onClick={onClick}
    data-testid={dataTestid}
    className={css`
      display: inline-flex;
      border: 0px;
      border-radius: 6px;
      margin: 0px;
      cursor: ${Cursor[variant]};
      align-items: center;
      justify-content: center;
      text-align: center;
      vertical-align: middle;
      position: relative;
      text-decoration: none;
      font-size: 16px;
      font-weight: 600;
      padding: 16px 32px;
      color: ${Colors[variant]};
      background-color: ${BackgroundColors[variant]};
      box-shadow: ${BoxShadow[variant]};

      width: ${fullWidth ? '100%' : 'auto'};

      &:hover {
        background-color: ${BackgroundColorsHover[variant]};
      }

      ${className}
    `}
  >
    {children}
  </button>
);
```

### Animation

To make sure we have an effect when opening the overlay component in the mobile view, we will use `keyframes` and `animation`.

<div style="margin: auto; text-align: center;">
  <video controls="true" allowfullscreen="true" >
    <source src="/series/frontend-challenges/dialog-transition.mov" type="video/mp4">
  </video>
</div>

The code looks very simple for this transition.

The `keyframes` is imported from the `emotion` library, we create an animation name to go from top 100% to top 0, and set the duration for this transition.

```tsx
import { css, keyframes } from '@emotion/css';

const overlayFade = keyframes`
  from {
    top: 100%;
  }
  to {
    top: 0;
  }
`;

const modelStyle = css`
  // ...
  animation-name: ${overlayFade};
  animation-duration: 0.3s;
  // ...
`;
```

Simple as that.

### Responsive design

To handle responsive design, I focused on mobile-first, and additional adjustments for desktop.

To be able to change a style for specific screen size, we can use media queries. Using `emotion-js` looks like this:

```tsx
const style = css`
  border-radius: 0;

  @media (min-width: 576px) {
    border-radius: 6px;
  }
`;
```

For mobile view, it won't have a `border-radius`, but all screens with a minimum size of `576px` will have a `border-radius` of `6px`.

To make it more consistent across all components and remove the need to write the correct media query, I created a `mediaQuery` object with all the possibilities.

```tsx
type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type MediaQuery = Record<Breakpoints, string>;

export const mediaQuery: MediaQuery = {
  xs: '@media (max-width: 576px)',
  sm: '@media (min-width: 576px)',
  md: '@media (min-width: 768px)',
  lg: '@media (min-width: 992px)',
  xl: '@media (min-width: 1200px)',
};
```

Now we can use our object without the need to understand the implementation details about each query. Refactoring the style CSS code above, we get something like this:

```tsx
const style = css`
  border-radius: 0;

  ${mediaQuery['sm']} {
    border-radius: 6px;
  }
`;
```

Now we can reuse this `mediaQuery` code in all components that need to handle different views.

I also created a simple unit test for it:

```tsx
describe('mediaQuery', () => {
  it('returns the correct media query for each breakpoint', () => {
    expect(mediaQuery['xs']).toEqual('@media (max-width: 576px)');
    expect(mediaQuery['sm']).toEqual('@media (min-width: 576px)');
    expect(mediaQuery['md']).toEqual('@media (min-width: 768px)');
    expect(mediaQuery['lg']).toEqual('@media (min-width: 992px)');
    expect(mediaQuery['xl']).toEqual('@media (min-width: 1200px)');
  });
});
```

I also needed to handle different HTML elements and styles for desktop vs. mobile views. This is why I used a library called `react-device-detect`.

In this case, our desktop modal should not only have a modal component but also a backdrop-overlay side by side. If the user clicks the overlay, it should close the modal.

In the mobile view, it doesn't have this overlay component. It should just open a dialog.

The desktop dialog:

```tsx
export const DialogBrowserView: FC<DialogBrowserViewPropTypes> = ({
  guestRoomsString,
  onClose,
  onSearch,
}) => (
  <BrowserView>
    <div className={dialogStyle}>
      <div onClick={onClose} className={backdropStyle} />
      <Dialog
        guestRoomsString={guestRoomsString}
        onClose={onClose}
        onSearch={onSearch}
      />
    </div>
  </BrowserView>
);
```

And the mobile dialog:

```tsx
export const DialogMobileView: FC<DialogMobileViewPropTypes> = ({
  guestRoomsString,
  onClose,
  onSearch,
}) => (
  <MobileView>
    <Dialog
      guestRoomsString={guestRoomsString}
      onClose={onClose}
      onSearch={onSearch}
    />
  </MobileView>
);
```

And use them:

```tsx
<DialogBrowserView
  guestRoomsString={guestRoomsString}
  onClose={onClose}
  onSearch={onSearch}
/>
<DialogMobileView
  guestRoomsString={guestRoomsString}
  onClose={onClose}
  onSearch={onSearch}
/>
```

We could also replace `react-device-detect` with media queries.

### Code splitting

An additional thing that I did was to code split the dialog. Create a chunk for the mobile dialog and another chunk for the desktop dialog.

That way the application won't need to load the mobile dialog code in the desktop view and vice versa.

To do this, I used a library called Loadable Components.

I just needed to do this for the mobile dialog

```tsx
import loadable from '@loadable/component';

export default loadable(
  () => import(/* webpackChunkName: "DialogMobileView" */ './DialogMobileView'),
);
```

And this for the desktop view

```tsx
import loadable from '@loadable/component';

export default loadable(
  () =>
    import(/* webpackChunkName: "DialogBrowserView" */ './DialogBrowserView'),
);
```

And now the application doesn't need to load unnecessary JavaScript code for each screen size.

## Unit & Integration Tests

### Unit tests

To verify that all variants are working with the correct styles, I created a test for each variant.

```tsx
describe('Button', () => {
  describe('primary variant', () => {
    it('verifies correct styles for primary button', () => {
      render(<Button onClick={noop}>{text}</Button>);

      const buttonText = screen.getByText(/Text/i);

      expect(buttonText).toBeInTheDocument();
      expect(buttonText).toHaveStyle('cursor: pointer');
      expect(buttonText).toHaveStyle('color: white');
      expect(buttonText).toHaveStyle('background-color: #0071f3');
      expect(buttonText).toHaveStyle('box-shadow: none');
    });
  });
});
```

We can use the `toHaveStyle` API to verify each CSS property. I wanted to test if the button is rendered and these four properties: cursor, color, background-color, and box-shadow.

And I also have a similar test for all other variants: `secondary`, `disabled`, `danger`, and `close`.

For the header, I added a very simple unit test to verify the header text and if the close button triggers everything correctly.

```tsx
const noop = jest.fn();

describe('Header', () => {
  it('renders the header text', () => {
    render(<Header onClose={noop} />);

    const headerText = screen.getByText(/Rooms & Guests/i);
    expect(headerText).toBeInTheDocument();
  });

  it('triggers the onClose after clicking the close button', () => {
    render(<Header onClose={noop} />);

    const onCloseButton = screen.getByRole('button');
    userEvent.click(onCloseButton);
    expect(noop).toBeCalled();
  });
});
```

For the header text, it's a nice test, but mocking the `onClose` function is not ideal. I will test it properly in an integration test where we simulate how the user interacts with the dialog and close it.

The test for the `AdultsCountInput` is very interesting as we can test it the way an user would use it.

```tsx
describe('AdultsCountInput', () => {
  it('increases and decreases count by clicking buttons', () => {
    render(
      <GuestRoomsProvider>
        <AdultsCountInput roomIndex={0} />
      </GuestRoomsProvider>,
    );

    const count = screen.getByText('2');
    expect(count).toBeInTheDocument();

    const minusButton = screen.getAllByRole('button')[0];
    userEvent.click(minusButton);
    const decreasedCount = screen.getByText('1');
    expect(decreasedCount).toBeInTheDocument();

    const plusButton = screen.getAllByRole('button')[1];
    userEvent.click(plusButton);
    userEvent.click(plusButton);
    const increasedCount = screen.getByText('3');
    expect(increasedCount).toBeInTheDocument();
  });
});
```

- We start with rendering the component
- Verify if the current count's value is correct
- Click the button to decrease the count and verify if it actually decreases it
- Click the button to increase the count twice and verify the current count's value

We can have a lot of confidence in this test as it simulates how a user would use it.

The test for the `ChildrenCountInput` works the same way:

```tsx
describe('ChildrenCountInput', () => {
  it('increases and decreases count by clicking buttons', () => {
    render(
      <GuestRoomsProvider>
        <ChildrenCountInput roomIndex={0} />
      </GuestRoomsProvider>,
    );

    const count = screen.getByText('0');
    expect(count).toBeInTheDocument();

    const plusButton = screen.getAllByRole('button')[1];
    userEvent.click(plusButton);
    userEvent.click(plusButton);
    const increasedCount = screen.getByText('2');

    expect(increasedCount).toBeInTheDocument();
    const minusButton = screen.getAllByRole('button')[0];
    userEvent.click(minusButton);
    const decreasedCount = screen.getByText('1');
    expect(decreasedCount).toBeInTheDocument();
  });
});
```

The select component is also very interesting. The experience using `userEvent` is smooth and does what it intends to do.

But first, let's just add a test to verify the `ChildrenSelect` doesn't render any select because the current state doesn't have any children.

```tsx
describe('ChildrenSelect', () => {
  it("does not render a child selector when there's no child", () => {
    render(
      <GuestRoomsProvider>
        <ChildrenSelect roomIndex={0} />
      </GuestRoomsProvider>,
    );

    const selectLabel = screen.queryByText('Child 1 age');
    expect(selectLabel).not.toBeInTheDocument();
  });
});
```

Now we can create a test to interact with the select and choose different age options.

First I created a helper function to get the first option from the select element.

```tsx
function getFirstOption(name: string) {
  return screen.getAllByRole('option', {
    name,
  })[0] as HTMLOptionElement;
}
```

And now I can use it to verify the rendered selects and interact with each one of them.

```tsx
describe('ChildrenSelect', () => {
  it('selects new option and verify selected item', () => {
    render(
      <GuestRoomsProvider guestRoomsString="1:4,6">
        <ChildrenSelect roomIndex={0} />
      </GuestRoomsProvider>,
    );

    const selectLabel1 = screen.getByText('Child 1 age');
    expect(selectLabel1).toBeInTheDocument();

    const selectLabel2 = screen.getByText('Child 2 age');
    expect(selectLabel2).toBeInTheDocument();

    const selectLabel3 = screen.queryByText('Child 3 age');
    expect(selectLabel3).not.toBeInTheDocument();

    const select = screen.getAllByRole('combobox')[0];
    const selectedOption = getFirstOption('4');
    expect(selectedOption.selected).toBeTruthy();

    const newSelectedOption = getFirstOption('3');
    userEvent.selectOptions(select, newSelectedOption);
    expect(selectedOption.selected).toBeFalsy();
    expect(newSelectedOption.selected).toBeTruthy();
  });
});
```

_Context_: “1:4,6” means

- 1 adult
- 2 children: one with age 4 and the other with age 6.

We test a lot of things here:

- Verify that child 1 and child 2 are rendered
- Make sure that child 3 is not rendered
- Verify if the selected option is the age 4
- Select a new option (age 3)
- Verify that the option age 4 is no more the selected one and now the selected option is age 3

For the `NumberInput` component, the test is pretty straightforward. Just render it and make sure the correct number is rendered.

```tsx
describe('NumberInput', () => {
  it('renders the value between buttons', () => {
    const noop = () => {};

    render(
      <GuestRoomsProvider>
        <NumberInput
          value={3}
          increaseValue={noop}
          decreaseValue={noop}
          minValue={1}
          maxValue={5}
        />
      </GuestRoomsProvider>,
    );

    expect(screen.getByText('3')).toBeInTheDocument();
  });
});
```

The test for the `SearchButton` is also similar to the test above as we just want to make sure we are rendering the correct component with the right value.

```tsx
describe('SearchButton', () => {
  it('renders the button', () => {
    render(
      <GuestRoomsProvider>
        <SearchButton onSearch={() => {}} />
      </GuestRoomsProvider>,
    );

    const button = screen.getByRole('button', {
      name: /Search 1 room • 2 guests/i,
    });

    expect(button).toBeInTheDocument();
  });
});
```

I also created a test for the `GuestRooms` component but it is very similar to the integration test I created later on. I will cover this test in the next section.

### Integration tests

To gain even more confidence in the feature, I created an integration test using Cypress.

First, created a function to test the query params in the URL:

```tsx
function verifyQueryParams(queryParams) {
  cy.location().should((location) => {
    expect(location.search).to.eq(queryParams);
  });
}
```

Also created a function to click the search button and provide the `verifyQueryParams`:

```tsx
function clickSearchButtonWithText(text) {
  cy.get('button').contains(text).click();

  return {
    andVerifyQueryParams: verifyQueryParams,
  };
}
```

This way we can use it like this:

```tsx
clickSearchButtonWithText('Search 1 room • 2 guests').andVerifyQueryParams(
  '?guestRooms=2',
);
```

Then I created a function to handle the test for the adults’ count selection:

```tsx
function selectAdultsCount() {
  const adultsBlock = 'div[data-testid="adults-count-input-block"]';

  cy.get(adultsBlock).within(() => {
    cy.contains('2').should('exist');

    const adultsMinusButton = cy.get('button[data-testid="minus-button"]');

    adultsMinusButton.click();
    adultsMinusButton.should('be.disabled');
    cy.contains('1').should('exist');

    const adultsPlusButton = cy
      .get('button[data-testid="plus-button"]')
      .first();

    adultsPlusButton.click();
    adultsPlusButton.click();
    adultsPlusButton.click();
    cy.contains('4').should('exist');
  });
}
```

- Verify the count is 2
- Click the decrease button and verify the button is now disabled because it's the minimum number of adults and verify that 1 is rendered as the count
- Then click the increase button 3 times and verify the current's count is 4

Now we need to create a function to test the children's count selection and their ages.

```tsx
function selectChildrenCountAndAges() {
  const childrenBlock = 'div[data-testid="children-count-input-block"]';

  cy.get(childrenBlock).within(() => {
    cy.contains('0').should('exist');

    const childrenMinusButton = cy.get('button[data-testid="minus-button"]');

    childrenMinusButton.should('be.disabled');
    cy.contains('0').should('exist');

    const childrenPlusButton = cy
      .get('button[data-testid="plus-button"]')
      .first();

    childrenPlusButton.click();
    childrenPlusButton.click();
    childrenPlusButton.click();
    cy.contains('3').should('exist');

    cy.contains('Child 1 age');
    cy.contains('Child 2 age');
    cy.contains('Child 3 age');

    cy.get('button[data-testid="close-button-1"]').click();
    cy.contains('Child 3 age').should('not.exist');

    cy.get('select').first().select('3');
  });
}
```

- Verify it starts with the count 0 and the decrease button should be disabled
- Click the increase button 3 times and it should add three age selects for each child's age
- Click the close button for the third child and verify if it is not there anymore
- Select the age for the first child

Now that we have all the building blocks, we can use them to create a complete test for the dialog.

```tsx
function verifyGuestRoomsBehavior() {
  const openDialogButton = cy.get('button');
  openDialogButton.click();

  clickSearchButtonWithText('Search 1 room • 2 guests').andVerifyQueryParams(
    '?guestRooms=2',
  );

  const firstRoom = 'div[data-testid="room-key-0"]';

  cy.get(firstRoom).within(() => {
    selectAdultsCount();
    selectChildrenCountAndAges();
  });

  clickSearchButtonWithText('Search 1 room • 6 guests').andVerifyQueryParams(
    '?guestRooms=4:3,8',
  );

  cy.contains('Room 2').should('not.exist');
  cy.get('button').contains('+ Add room').click();
  cy.contains('Room 2').should('exist');

  const secondRoom = 'div[data-testid="room-key-1"]';

  cy.get(secondRoom).within(() => {
    selectAdultsCount();
    selectChildrenCountAndAges();
  });

  clickSearchButtonWithText('Search 2 rooms • 12 guests').andVerifyQueryParams(
    '?guestRooms=4:3,8|4:3,8',
  );

  cy.get('button').contains('Remove room').click();
  cy.contains('Room 2').should('not.exist');

  clickSearchButtonWithText('Search 1 room • 6 guests').andVerifyQueryParams(
    '?guestRooms=4:3,8',
  );
}
```

- Click the button to open the dialog
- Click the search button and verify the expected query param in the URL
- In the first room, select adults count and the children's count and ages
- Click the search button again and verify the correct query param
- Add a second room and add adults and children to it. Verify the query param again
- Remove the second room, verify it is not there anymore, click the search button and verify the expected query param

I also created a function to handle the dialog close button and verify its behavior.

```tsx
function verifyCloseButtonBehavior() {
  cy.contains('Rooms & Guests').should('exist');
  cy.get('button[data-testid="dialog-close-button"]').click();
  cy.contains('Rooms & Guests').should('not.exist');
}
```

Everything together looks like this:

```tsx
it('verifies guest rooms dialog behavior', () => {
  verifyGuestRoomsBehavior();
  verifyCloseButtonBehavior();
});
```

But this is a test for the desktop. I also wanted to test it works fine for the mobile view. The idea is very similar, but add a different viewport and then test it.

```tsx
describe('on iPhone X', () => {
  it('verifies guest rooms dialog behavior', () => {
    cy.viewport('iphone-x');
    verifyGuestRoomsBehavior();
    verifyCloseButtonBehavior();
  });
});
```

Everything together looks like this:

```tsx
describe('GuestRoomsDialog', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('on iPhone X', () => {
    it('verifies guest rooms dialog behavior', () => {
      cy.viewport('iphone-x');
      verifyGuestRoomsBehavior();
      verifyCloseButtonBehavior();
    });
  });

  describe('on desktop', () => {
    it('verifies guest rooms dialog behavior', () => {
      verifyGuestRoomsBehavior();
      verifyCloseButtonBehavior();
    });
  });
});
```

Let's see a preview of the integration test in action?

<div style="margin: auto; text-align: center;">
  <video controls="true" allowfullscreen="true" class="full-width">
    <source src="/series/frontend-challenges/dialog-integration-test-cypress.mov" type="video/mp4">
  </video>
</div>

## That's it!

This is the first article from this series I'm working on: `Frontend Challenges`. I want to challenge myself in different challenges in the frontend domain and see what I can learn from it. Every challenge will be documented and shared with you all.

I hope you liked this post and feel free to steal some ideas for the projects and products you are building.

See ya!

### Resources

- [Frontend Challenges](https://github.com/leandrotk/frontend-challenges)
- [FindHotel Front-end Engineer Assignment](https://github.com/leandrotk/frontend-challenges/blob/master/findhotel-frontend-assignment/INSTRUCTIONS.md)
- [A Mental Model to think in TypeScript](/a-mental-model-to-think-in-typescript)
- [Basic Recipes for React Testing Library](/basic-recipes-for-react-testing-library)
- [React Hooks, Context API, and Pokemons](/react-hooks-context-api-and-pokemons)