import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Highlight from 'react-highlight';
import { ResourcesList } from 'Base/Article/ResourcesList';
import {
  sourceCode1,
  sourceCode10,
  sourceCode11,
  sourceCode13,
  sourceCode14,
  sourceCode15,
  sourceCode16,
  sourceCode17,
  sourceCode18,
  sourceCode19,
  sourceCode2,
  sourceCode20,
  sourceCode21,
  sourceCode22,
  sourceCode23,
  sourceCode24,
  sourceCode25,
  sourceCode26,
  sourceCode27,
  sourceCode28,
  sourceCode29,
  sourceCode3,
  sourceCode30,
  sourceCode31,
  sourceCode32,
  sourceCode33,
  sourceCode34,
  sourceCode35,
  sourceCode36,
  sourceCode37,
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
    link: 'https://mbsy.co/lG6tv"',
    title: 'One Month - Learn Python',
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
  {
    link: 'https://www.amazon.com/Structures-Algorithms-Python-Michael-Goodrich/dp/1118290275)',
    title: 'Data Structures and Algorithms in Python',
  },
  {
    link: 'https://www.youtube.com/watch?v=njTh_OwMljA&feature=youtu.be',
    title: 'HackerRank Linked List',
  },
  {
    link: 'https://medium.com/basecs/whats-a-linked-list-anyway-part-1-d8b7e6508b9d',
    title: 'Linked List Part 1',
  },
  {
    link: 'https://medium.com/basecs/whats-a-linked-list-anyway-part-2-131d96f71996',
    title: 'Linked List Part 2',
  },
  {
    link: 'https://www.youtube.com/watch?v=op42',
    title: 'Data Structures in Python: Circular Linked Lists',
  },
  {
    link: 'https://www.youtube.com/watch?v=njTh_OwMljA&feature=youtu.be',
    title: 'Data Structures: Linked Lists',
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

    <h2>Introduction</h2>

    <p>
      A linked list is a collection of nodes that form a linear sequence. The
      difference between an array and a linked list is that the array has
      indexed elements, so we can get an element by constant time by just
      searching by its index. In the linked list, we need to go through the
      nodes to get the searched element and that takes linear time.
    </p>
    <p>
      The advantages is that the linked lists can insert and remove items in
      constant time.
    </p>

    <h2>Concepts and Implementations</h2>
    <h3>The Node</h3>
    <p>
      A Linked List is a sequence of nodes and each node has two
      <code>attributes</code>: the value it stores and the reference to the next
      node of the sequence.
    </p>
    <p>
      The first and last nodes are called <code>head</code> and
      <code>tail</code> of the list, respectively. So to get to the tail of the
      last, we traverse the linked list by moving from one node to another using
      the each node&#x27;s next reference.
    </p>
    <p>
      The Linked List having the <code>head</code> and the
      <code>tail</code> as attributes helps adding new nodes to the start and
      the end of the list. But we can implement it with or without the
      <code>tail</code> attribute. We will dive in into the this implementation.
    </p>
    <p>
      We can separate the linked list from its elements. Each element is a node
      and we can implement this representation with a<code>Node</code> class.
    </p>
    <Highlight className="python">{sourceCode1}</Highlight>
    <p>
      Basically it has a value and the reference to the next node. We add a
      default value (<code>None</code>) to the <code>next</code> parameter to
      make it more flexible to use when creating new nodes.
    </p>
    <p>The simplest way to use it is:</p>
    <Highlight className="python">{sourceCode2}</Highlight>
    <ul className="bulleted-list">
      <li>Instantiate the new node.</li>
    </ul>
    <ul className="bulleted-list">
      <li>
        We can access the <code>value</code> and the
        <code>next</code> attributes.
      </li>
    </ul>
    <p>
      But with the flexibility of the <code>next</code> parameter, we can also
      use it by passing the next node reference.
    </p>
    <Highlight className="python">{sourceCode3}</Highlight>
    <ul className="bulleted-list">
      <li>Have a next node.</li>
    </ul>
    <ul className="bulleted-list">
      <li>
        Instantiate the new node by passing the value and the reference to the
        next node (<code>next_node</code> in our case).
      </li>
    </ul>
    <ul className="bulleted-list">
      <li>
        We can access the <code>value</code> and the
        <code>next</code> value.
      </li>
    </ul>

    <h3>Creating a base for the Linked List</h3>
    <p>
      For the linked list, the first step is to create a class representing it.
      For now we just want a <code>head</code> attribute when creating an empty
      list.
    </p>
    <Highlight className="python">{sourceCode4}</Highlight>
    <p>
      Simple as that. Just a class and initialize the
      <code>head</code> attribute with <code>None</code> for an empty list.
    </p>

    <h3>is_empty method</h3>
    <p>
      Let&#x27;s implement the easier method: <code>is_empty</code>. How do we
      know when a list is empty? If the <code>head</code> is
      <code>None</code>, we didn&#x27;t add any node to this list. This is the
      logic behind the <code>is_empty</code> method.
    </p>
    <Highlight className="python">{sourceCode5}</Highlight>
    <p>Pretty simple, huh?</p>
    <h3>prepend method</h3>
    <p>
      Now the <code>prepend</code> method. We basically need to create a new
      node, points the <code>next</code> attribute from this new node to the
      <code>head</code> and assign this new node to be the new linked list
      <code>head</code>.
    </p>
    <p>
      Remember we have a <code>next</code> parameter when creating a new node?
      We can use it to assign the previous <code>head</code> when creating the
      new node. Something like this:
    </p>
    <Highlight className="python">{sourceCode6}</Highlight>
    <p>
      In the context of the linked list, we will have the
      <code>self.head</code>. So:
    </p>
    <Highlight className="python">{sourceCode7}</Highlight>
    <p>
      The last step is to assign this new node to the <code>head</code> and we
      will prepend it.
    </p>
    <Highlight className="python">{sourceCode8}</Highlight>
    <ul className="bulleted-list">
      <li>Create new node</li>
    </ul>
    <ul className="bulleted-list">
      <li>
        Assign the <code>next</code> attribute to the previous
        <code>head</code>
      </li>
    </ul>
    <ul className="bulleted-list">
      <li>
        And assign the new node to the <code>head</code>
      </li>
    </ul>
    <p>The complete method will be like:</p>
    <Highlight className="python">{sourceCode9}</Highlight>
    <p>Just one line. Pretty good!</p>

    <h3>append method</h3>
    <p>
      For the <code>append</code>, it&#x27;s a bit different, because, instead
      of add a new node to the head of the list, we need to add to the tail. So
      basically we need to iterate through the list to be in the last node and
      point it&#x27;s <code>next</code> attribute to the new created node.
    </p>
    <p>The question is: How do we iterate through the list?</p>
    <p>
      The difference between the tail node and the rest is the
      <code>next</code> attribute. The tail has no <code>next</code>. It points
      to <code>None</code>. The rest always point to a different node.
    </p>
    <p>
      To iterate through the list to get the last node, we get the next node
      until the node has no <code>next</code> attribute. Start with the first
      node: the head.
    </p>
    <Highlight className="python">{sourceCode10}</Highlight>
    <p>And the iterate.</p>
    <Highlight className="python">{sourceCode11}</Highlight>
    <p>We divide this code in two parts:</p>
    <ul className="bulleted-list">
      <li>
        looping while the node&#x27;s <code>next</code> attribute is not
        <code>None</code>
      </li>
    </ul>
    <ul className="bulleted-list">
      <li>update the current node by assigning the next node</li>
    </ul>
    <p>
      When the <code>while</code> loop breaks, we have the last node, so we just
      need to update the last node <code>next</code> attribute.
    </p>
    <Highlight className="python">{sourceCode13}</Highlight>
    <p>The complete code:</p>
    <Highlight className="python">{sourceCode14}</Highlight>
    <p>
      But this code will break if the linked list is empty, because the
      <code>head</code> is <code>None</code>, it can&#x27;t have a
      <code>next</code> attribute.
    </p>
    <p>
      In this case we just make a condition for emptiness. If it is empty, we
      just assign the new node to the <code>head</code>.
    </p>
    <Highlight className="python">{sourceCode15}</Highlight>

    <h3>size method</h3>
    <p>
      For the <code>size</code> method is straightforward. We basically need to
      iterate through the whole list and count each node.
    </p>
    <p>
      To iterate is pretty simple. We just need to loop while the current node
      is not <code>None</code>.
    </p>
    <Highlight className="python">{sourceCode16}</Highlight>
    <p>And for each iteration, we need to increase our counter.</p>
    <Highlight className="python">{sourceCode17}</Highlight>
    <ul className="bulleted-list">
      <li>
        Initialize the <code>list_length</code> with <code>0</code>.
      </li>
    </ul>
    <ul className="bulleted-list">
      <li>
        Get the current node: the <code>head</code>.
      </li>
    </ul>
    <ul className="bulleted-list">
      <li>Iterate through the list.</li>
    </ul>
    <ul className="bulleted-list">
      <li>For each iteration, increase the counter.</li>
    </ul>
    <ul className="bulleted-list">
      <li>
        Returns the <code>list_length</code>.
      </li>
    </ul>
    <h3>search method</h3>
    <p>
      For the <code>search</code> algorithm, we need to receive a value and
      return <code>True</code> or <code>False</code> if the this value is in the
      linked list.
    </p>
    <p>
      So we basically need to iterate through the linked list searching for this
      value.
    </p>
    <p>The iteration is simple:</p>
    <Highlight className="python">{sourceCode18}</Highlight>
    <p>
      Now, for each node, we see if the current node value is the same as the
      searched value.
    </p>
    <Highlight className="python">{sourceCode19}</Highlight>
    <p>
      We can do this way to return <code>True</code> if the searched value is
      found. Or we can defined a <code>found</code> variable and use it to set
      it to <code>True</code> when find it and get out of the loop.
    </p>
    <Highlight className="python">{sourceCode20}</Highlight>
    <ul className="bulleted-list">
      <li>
        We will iterate while we didn&#x27;t find a the value and it is not the
        last node
      </li>
    </ul>
    <ul className="bulleted-list">
      <li>
        Basically the loop will stop when find the searched value or finish the
        entire linked list
      </li>
    </ul>
    <ul className="bulleted-list">
      <li>
        The <code>current_node.value == value</code> logic will store a
        <code>True</code> or <code>False</code> value for each current node
        value
      </li>
    </ul>
    <p>
      We define the <code>found</code> and <code>current_node</code> before
      iterating and return if we found the searched value or not.
    </p>
    <Highlight className="python">{sourceCode21}</Highlight>

    <h3>remove method</h3>
    <p>
      The last method to be implemented is the <code>remove</code> method. We
      can think about this method in separated cases:
    </p>
    <ul className="bulleted-list">
      <li>when the list is empty.</li>
    </ul>
    <ul className="bulleted-list">
      <li>when we want to remove the head node.</li>
    </ul>
    <ul className="bulleted-list">
      <li>when we want to remove a node from the middle or the last one.</li>
    </ul>
    <p>
      For the empty case is pretty simple. We just check the list with our
      <code>is_empty</code> method.
    </p>
    <Highlight className="python">{sourceCode22}</Highlight>
    <p>
      We can also throw an error exception or just print &quot;The list is
      empty&quot;, for example.
    </p>
    <p>
      For the case when we want to remove the head node, we check it first and
      them remove it.
    </p>
    <Highlight className="python">{sourceCode23}</Highlight>
    <p>To remove it, we just need to point the head to the its next node.</p>
    <p>
      The last case is when we want to remove a node in the middle or the last
      one. Let&#x27;s draw it!
    </p>
    <Image
      src="/series/data-structures/draw-linked-lists.jpeg"
      alt=""
      width="592"
      height="790"
    />
    <p>
      For this algorithm, what we want is to get the previous node of the node
      to be removed and point to the next node of the node to be removed. So we
      need to have the previous node in each iteration. This is the fundamental
      part of our algorithm.
    </p>
    <Highlight className="python">{sourceCode24}</Highlight>
    <p>This is the algorithm.</p>
    <p>
      We will iterate through the list while the current node&#x27;s next is not
      a <code>None</code> value. Why? Because we want to compare the next node
      value. Not the current one.
    </p>
    <Highlight className="python">{sourceCode25}</Highlight>
    <p>
      This the logic we are searching for. Does the current node&#x27;s next
      value is the value we want to remove?
    </p>
    <p>
      If it is <code>True</code>, we basically remove the current node&#x27;s
      next node by point the <code>next</code> to the
      <code>next.next</code>, and return the function.
    </p>
    <p>
      If it is <code>False</code>, we keep iterating until we find the value we
      want or when we finish the entire list.
    </p>
    <p>Joining all the parts, we have:</p>
    <Highlight className="python">{sourceCode26}</Highlight>
    <h2>The Linked List class</h2>
    <p>Joining all the parts we talked and implemented, we have:</p>
    <Highlight className="python">{sourceCode27}</Highlight>
    <h2>Let&#x27;s test it!</h2>
    <p>
      I basically created three helper functions to help us to test our linked
      list.
    </p>
    <Highlight className="python">{sourceCode28}</Highlight>
    <p>
      They will print all the value, the found value, and the size of the list.
      So first we instantiate our list:
    </p>
    <Highlight className="python">{sourceCode29}</Highlight>
    <p>
      Let&#x27;s see what we get when we try to print all the values and its
      size:
    </p>
    <Highlight className="python">{sourceCode30}</Highlight>
    <p>
      Yes, no values and <code>0</code> elements.
    </p>
    <p>
      We can append a node with value <code>1</code>, print the values, and see
      its size.
    </p>
    <Highlight className="python">{sourceCode31}</Highlight>
    <p>
      If we try to remove <code>0</code>, the <code>1</code> is still there. But
      if we remove <code>1</code>, we have no nodes anymore. The first line is
      cool: it doesn&#x27;t break if we try to remove an element that
      doesn&#x27;t exist in the linked list.
    </p>
    <Highlight className="python">{sourceCode32}</Highlight>
    <p>Adding new nodes and printing them:</p>
    <Highlight className="python">{sourceCode33}</Highlight>
    <p>
      Let&#x27;s try out <code>found</code> method:
    </p>
    <Highlight className="python">{sourceCode34}</Highlight>
    <p>
      That&#x27;s cool! We really don&#x27;t have the <code>1</code> node, but
      we have the <code>2</code> and the <code>3</code>.
    </p>
    <p>Now printing after removing each node:</p>
    <Highlight className="python">{sourceCode35}</Highlight>
    <p>
      Let&#x27;s try out <code>prepend</code> method:
    </p>
    <Highlight className="python">{sourceCode36}</Highlight>
    <p>
      And remove the <code>3</code>.
    </p>
    <Highlight className="python">{sourceCode37}</Highlight>
    <p>Works fine!</p>

    <h2>Resources</h2>

    <ResourcesList resourcesList={resourcesList} />
  </>
);
