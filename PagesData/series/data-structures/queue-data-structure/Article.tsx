import { FC } from 'react';
import Link from 'next/link';
import Highlight from 'react-highlight';
import { ResourcesList } from 'Base/Article/ResourcesList';
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

const resourcesList = [
  {
    link: 'http://leandrotk.github.io/tk/2017/09/learning-python-from-zero-to-hero/index.html',
    title: 'Learning Python: From Zero to Hero',
  },
  {
    link: 'https://mbsy.co/lG6tv',
    title: 'One Month - Learn Python',
  },
  {
    link: 'https://www.amazon.com/Structures-Algorithms-Python-Michael-Goodrich/dp/1118290275',
    title: 'Data Structures and Algorithms in Python',
  },
  {
    link: 'https://www.youtube.com/watch?v=wjI1WNcIntg&amp;feature=youtu.be',
    title: 'Data Structures: Stacks and Queues',
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
    </p>

    <p>
      The queue data structure is a collection of items that follow the{' '}
      <code>first-in, first out</code> principle. The first added element will
      be the first element to be removed from the queue. So, elements are added
      in the back and removed from the front.
    </p>

    <p>
      An analogy would be a simple line of people waiting for the next train. In
      the software engineering context, an example is a web server receiving and
      responding requests.
    </p>

    <p>
      The main API methods are <code>enqueue</code> (add) and
      <code>dequeue</code> (remove). But we can also add other methods as part
      of the API implementation: <code>size</code>, <code>front</code>,
      <code>back</code>, and <code>is_empty</code>.
    </p>

    <hr />

    <p>
      We can create a <code>Queue</code> class as a wrapper and use the Python
      list to store the queue data. This class will have the implementation of
      the <code>enqueue</code>, <code>dequeue</code>,<code>size</code>,{' '}
      <code>front</code>, <code>back</code>, and
      <code>is_empty</code> methods.
    </p>

    <p>
      The first step is to create a class definition and how we are gone store
      our items.
    </p>

    <Highlight className="python">{sourceCode1}</Highlight>

    <p>
      This is basically what we need for now. Just a class and its constructor.
      When the instance is created, it will have the
      <code>items</code> list to store the queue items.
    </p>

    <p>
      For the <code>enqueue</code> method, we just need to use the list{' '}
      <code>append</code> method to add new items. The new items will be placed
      in the last index of this <code>items</code> list. So the front item from
      the queue will always be the first item.
    </p>

    <Highlight className="python">{sourceCode2}</Highlight>

    <p>It receives the new item and appends it to the list.</p>

    <p>
      The <code>size</code> method only counts the number of the queue items by
      using the <code>len</code> function.
    </p>

    <Highlight className="python">{sourceCode3}</Highlight>

    <p>
      The idea of the <code>is_empty</code> method is to verify if the list has
      or not items in it. If it has, returns <code>False</code>. Otherwise,{' '}
      <code>True</code>. To count the number of items in the queue, we can
      simply use the <code>size</code> method already implemented.
    </p>

    <Highlight className="python">{sourceCode4}</Highlight>

    <p>
      The <code>pop</code> method from the list data structure can also be used
      to dequeue the item from the queue. It dequeues the first element as it is
      expected for the queue. The first added item.
    </p>

    <Highlight className="python">{sourceCode5}</Highlight>

    <p>
      But we need to handle the queue emptiness. For an empty list, the
      <code>pop</code> method raises an exception{' '}
      <code>IndexError: poop from empty list</code>. So we can create an
      exception class to handle this issue.
    </p>

    <Highlight className="python">{sourceCode6}</Highlight>

    <p>And uses it when the list is empty:</p>

    <Highlight className="python">{sourceCode7}</Highlight>

    <p>
      If it is empty, we raise this exception. Otherwise, we can dequeue the
      front item from the queue.
    </p>

    <p>
      We use this same emptiness strategy for the <code>front</code> method:
    </p>

    <Highlight className="python">{sourceCode8}</Highlight>

    <p>
      If it has at least one item, we get the front, the first added item in the
      queue.
    </p>

    <p>
      Also the same emptiness strategy for the <code>back</code> method:
    </p>

    <Highlight className="python">{sourceCode9}</Highlight>

    <p>
      If it has at least one item, we get the back item, the last added item in
      the queue.
    </p>

    <h2 id="queueusage">Queue usage</h2>

    <p>I created some helper functions to help test the queue usage.</p>

    <Highlight className="python">{sourceCode10}</Highlight>

    <p>
      They basically call a queue method and print the expected result from the
      method call.
    </p>

    <p>The usage will be something like:</p>

    <Highlight className="python">{sourceCode11}</Highlight>

    <p>
      We first instantiate a new queue from the <code>Queue</code> class.
    </p>

    <ul>
      <li>So now we can verify its emptiness: yes, it is!</li>

      <li>Verify size: 0.</li>

      <li>
        Enqueue 5 new items to the queue: <code>[1, 2, 3, 4, 5]</code>.
      </li>

      <li>Verify emptiness again: not anymore!</li>

      <li>Verify size: 5.</li>

      <li>Get the front element: 1 because it was the first added item.</li>

      <li>Get the back element: 5 because it was the last added item.</li>

      <li>Dequeue 4 items: 1, 2, 3, and 4.</li>

      <li>Verify emptiness: it is not empty yet!</li>

      <li>The size is 1 and the back and front are the same number: 5</li>

      <li>Dequeue the remaining item.</li>

      <li>Verify emptiness: it is empty now!</li>

      <li>Size is back to 0.</li>
    </ul>

    <hr />

    <h2 id="anotherwayoftestingit">Another way of testing it</h2>

    <p>Enqueue 5 new items:</p>

    <Highlight className="python">{sourceCode12}</Highlight>

    <p>Loop through the items and print each one.</p>

    <Highlight className="python">{sourceCode13}</Highlight>

    <p>Test front and back.</p>

    <Highlight className="python">{sourceCode14}</Highlight>

    <p>Dequeue all.</p>

    <Highlight className="python">{sourceCode15}</Highlight>

    <p>Test size.</p>

    <Highlight className="python">{sourceCode16}</Highlight>

    <hr />

    <h2 id="runtimeandspacecomplexities">Runtime and Space complexities</h2>

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

    <h2>Resources</h2>

    <ResourcesList resourcesList={resourcesList} />
  </>
);
