import { FC } from 'react';
import Link from 'next/link';
import Highlight from 'react-highlight';
import { ResourcesList } from 'Base/Article/ResourcesList';
import {
  sourceCode1,
  sourceCode10,
  sourceCode11,
  sourceCode2,
  sourceCode3,
  sourceCode4,
  sourceCode5,
  sourceCode6,
  sourceCode7,
  sourceCode8,
  sourceCode9,
} from './sourceCode';

const resourcesList = [
  {
    link: 'https://www.geeksforgeeks.org/stack-data-structure-introduction-program/',
    title: 'Stack Data Structure',
  },
  {
    link: 'https://www.amazon.com/Structures-Algorithms-Python-Michael-Goodrich/dp/1118290275',
    title: 'Data Structures and Algorithms in Python',
  },
  {
    link: 'https://www.hackerearth.com/pt-br/practice/data-structures/stacks/basics-of-stacks/tutorial/',
    title: 'Basics of Stacks',
  },
  {
    link: 'https://www.cs.cmu.edu/~adamchik/15-121/lectures/Stacks%20and%20Queues/Stacks%20and%20Queues.html',
    title: 'CMU Stacks',
  },
  {
    link: 'https://realpython.com/how-to-implement-python-stack/',
    title: 'How to Implement a Python Stack',
  },
  {
    link: 'https://www.educative.io/courses/big-o-notation-for-interviews-and-beyond?aff=x8bV',
    title: 'Big-O Notation For Coding Interviews and Beyond',
  },
  {
    link: 'https://www.educative.io/courses/learn-python-from-scratch?aff=x8bV',
    title: 'Learn Python from Scratch',
  },
  {
    link: 'https://www.educative.io/courses/learn-object-oriented-programming-in-python?aff=x8bV',
    title: 'Learn Object-Oriented Programming in Python',
  },
  {
    link: 'https://www.educative.io/courses/data-structures-in-python-an-interview-refresher?aff=x8bV',
    title: 'Data Structures in Python: An Interview Refresher',
  },
];

export const Article: FC = () => (
  <>
    <p>
      This post is part of the{' '}
      <Link href="/series/data-structures">
        <a className="link">Data Structures series</a>
      </Link>
      .
    </p>

    <p>
      The stack is a collection of items that follows the{' '}
      <code>last-in, first-out</code> concept.
    </p>

    <p>
      For the addition of new items, the stack only allows it to push the new
      item to the top. When it comes to removing items, it only allows us to
      remove the last added item, or commonly known as the top item.
    </p>

    <p>
      The main API methods are <code>push</code> (add) and <code>pop</code>{' '}
      (remove). But we can also add other methods as part of the API
      implementation: <code>size</code>, <code>top</code>, and{' '}
      <code>is_empty</code>.
    </p>

    <h2>Stack Implementation</h2>

    <p>
      We can create a <code>Stack</code> class as a wrapper and use the Python
      list to store the stack data. This class will have the implementation of
      the <code>push</code>, <code>pop</code>,<code>size</code>,{' '}
      <code>top</code>, and <code>is_empty</code> methods.
    </p>

    <p>
      The first step is to create a class definition and how we are gone store
      our items.
    </p>

    <Highlight className="python">{sourceCode1}</Highlight>

    <p>
      This is basically what we need for now. Just a class and its constructor.
      When the instance is created, it will have the <code>items</code> list to
      store the stack items.
    </p>

    <p>
      For the <code>push</code> method, we just need to use the list
      <code>append</code> method to add new items. The new items will be placed
      in the last index of this <code>items</code> list. So the top item from
      the stack will always be the last item.
    </p>

    <Highlight className="python">{sourceCode2}</Highlight>

    <p>It receives the new item and appends it to the list.</p>

    <p>
      The <code>size</code> method only counts the number of the stack items by
      using the <code>len</code> function.
    </p>

    <Highlight className="python">{sourceCode3}</Highlight>

    <p>
      The idea of the <code>is_empty</code> method is to verify if the list has
      or not items in it. If it has, returns <code>False</code>. Otherwise,{' '}
      <code>True</code>. To count the number of items in the stack, we can
      simply use the <code>size</code> method already implemented.
    </p>

    <Highlight className="python">{sourceCode4}</Highlight>

    <p>
      The <code>pop</code> method from the list data structure can also be used
      to pop the item from the stack. It pops the last element as it is expected
      for the stack. The last added item.
    </p>

    <Highlight className="python">{sourceCode5}</Highlight>

    <p>
      But we need to handle the stack emptiness. For an empty list, the
      <code>pop</code> method raises an exception{' '}
      <code>IndexError: pop from empty list</code>. So we can create an
      exception class to handle this issue.
    </p>

    <Highlight className="python">{sourceCode6}</Highlight>

    <p>And uses it when the list is empty:</p>

    <Highlight className="python">{sourceCode7}</Highlight>

    <p>
      If it is empty, we raise this exception. Otherwise, we can pop the top
      item from the stack.
    </p>

    <p>
      We use this same emptiness strategy for the <code>top</code> method:
    </p>

    <Highlight className="python">{sourceCode8}</Highlight>

    <p>
      If it has at least one item, we get the top, the last added item in the
      stack.
    </p>

    <h2>Stack usage</h2>

    <p>The usage would be something like:</p>

    <Highlight className="python">{sourceCode9}</Highlight>

    <p>
      We first instantiate a new stack from the <code>Stack</code> class.
    </p>

    <ul>
      <li>Verify emptiness: yes, it is!</li>

      <li>
        Add 5 new items to the stack: <code>[1, 2, 3, 4, 5]</code>.
      </li>

      <li>Verify emptiness: not anymore!</li>

      <li>Get the top element: 5 because it was the last added item.</li>

      <li>Remove 4 items: 5, 4, 3, and 2.</li>

      <li>Verify emptiness: empty yet!</li>

      <li>Remove the remaining item.</li>

      <li>Verify emptiness: it is empty now!</li>
    </ul>

    <hr />

    <h2>Runtime and Space complexities</h2>

    <p>Now about space and runtime complexities for each method implemented.</p>

    <p>
      The space is pretty simple. It&apos;s a list, so it&apos;s{' '}
      <code>O(n)</code> where <code>n</code> is the current number of items in
      the stack.
    </p>

    <p>
      The runtime for each method is <code>O(1)</code>, constant time.
    </p>

    <hr />

    <h2>Reversing a list</h2>

    <p>
      We can use the stack data structure for a diverse number of algorithms. An
      example is to reverse the items from a list.
    </p>

    <p>We want to reverse a list of books, a bookshelf.</p>

    <Highlight className="python">{sourceCode10}</Highlight>

    <ul>
      <li>Create a stack instance</li>

      <li>Push each list item to the stack</li>

      <li>Create an empty reversed list</li>

      <li>Pop each item until the stack is empty</li>

      <li>For each popped item, append it to the reversed list</li>

      <li>Return the reversed list</li>
    </ul>

    <p>
      The idea is to make the last list item the first to be popped from the
      stack.
    </p>

    <p>The function usage would be something like:</p>

    <Highlight className="python">{sourceCode11}</Highlight>

    <hr />

    <h2>Other examples</h2>

    <p>
      We can also implement the stack concept in a <code>undo</code> command.
      Imagine our text editor. For each document change, we store the new
      document in the stack. If we want to <code>undo</code> the change, we just
      need to pop the last change and stay with the previous state of the
      document.
    </p>

    <p>
      Web Browsers can also use stacks to store the visited website. When the
      user visits a new website, it pushes the new URL to the stack. When the
      user goes back, using the &quot;back&quot; button, it pops the last
      visited website and uses the previous URL.
    </p>

    <hr />

    <h2>Resources</h2>

    <ResourcesList resourcesList={resourcesList} />
  </>
);
