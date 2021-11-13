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
    link: 'https://www.youtube.com/watch?v=qH6yxkw0u78&amp;index=25&amp;list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P',
    title: 'Introduction to Tree Data Structure by mycodeschool',
  },
  {
    link: 'https://en.wikipedia.org/wiki/Tree_(data_structure)',
    title: 'Tree by Wikipedia',
  },
  {
    link: 'https://medium.com/basecs/how-to-not-be-stumped-by-trees-5f36208f68a7',
    title: 'How To Not Be Stumped By Trees by the talented Vaidehi Joshi',
  },
  {
    link: 'http://www.cs.jhu.edu/~cohen/CS226/Lectures/Trees.pdf',
    title: 'Intro to Trees, Lecture by Professor Jonathan Cohen',
  },
  {
    link: 'http://people.cs.ksu.edu/~schmidt/300s05/Lectures/Week7b.html',
    title: 'Intro to Trees, Lecture by Professor David Schmidt',
  },
  {
    link: 'http://www.cs.cmu.edu/~clo/www/CMU/DataStructures/Lessons/lesson4_1.htm',
    title: 'Intro to Trees, Lecture by Professor Victor Adamchik',
  },
  {
    link: 'https://www.youtube.com/watch?v=oSWTXtMglKE',
    title: 'Trees with Gayle Laakmann McDowell',
  },
  {
    link: 'https://github.com/LeandroTk/algorithms/blob/master/data_structures/binary_tree/binary_tree.py',
    title: 'Binary Tree Implementation',
  },
  {
    link: 'https://github.com/LeandroTk/algorithms/blob/master/data_structures/binary_tree/test_binary_tree.py',
    title: 'Binary Tree Implementation and Tests by TK',
  },
  {
    link: 'https://www.coursera.org/learn/data-structures',
    title:
      'Coursera Course: Data Structures by University of California, San Diego',
  },
  {
    link: 'https://www.coursera.org/learn/data-structures-optimizing-performance',
    title: 'Coursera Course: Data Structures and Performance by University',
  },
  {
    link: 'https://www.youtube.com/playlist?list=PLTxllHdfUq4d-DE16EDkpeb8Z68DU7Z_Q',
    title: 'Binary Search Tree concepts and Implementation by Paul Programming',
  },
  {
    link: 'https://github.com/LeandroTk/algorithms/blob/master/data_structures/binary_search_tree_without_node/binary_search_tree.py',
    title: 'Binary Search Tree Implementation',
  },
  {
    link: 'https://github.com/LeandroTk/algorithms/blob/master/data_structures/binary_search_tree_without_node/test_binary_search_tree.py',
    title: 'Binary Search Tree Implementation and Tests by TK',
  },
  {
    link: 'https://en.wikipedia.org/wiki/Tree_traversal',
    title: 'Tree Traversal by Wikipedia',
  },
  {
    link: 'http://www.geeksforgeeks.org/binary-search-tree-set-2-delete/',
    title: 'Binary Search Tree Remove Node Algorithm by GeeksforGeeks',
  },
  {
    link: 'http://www.algolist.net/Data_structures/Binary_search_tree/Removal',
    title: 'Binary Search Tree ',
  },
  {
    link: 'http://www.geeksforgeeks.org/binary-search-tree-set-2-delete/',
    title: 'Binary Search Tree Remove Node Algorithm by Algolist',
  },
  {
    link: 'https://medium.freecodecamp.org/learning-python-from-zero-to-hero-120ea540b567',
    title: 'Learning Python From Zero to Hero',
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
      When you first learn to code, it’s common to learn arrays as the “main
      data structure.”
    </p>
    <p>
      Eventually, you will learn about <code>hash tables</code> too. If you are
      pursuing a Computer Science degree, you have to take a class on data
      structure. You will also learn about <code>linked lists</code>,
      <code>queues</code>, and <code>stacks</code>. Those data structures are
      called “linear” data structures because they all have a logical start and
      a logical end.
    </p>
    <p>
      When we start learning about <code>trees</code> and
      <code>graphs</code>, it can get really confusing. We don’t store data in a
      linear way. Both data structures store data in a specific way.
    </p>
    <p>
      This post is to help you better understand the Tree Data Structure and to
      clarify any confusion you may have about it.
    </p>
    <p>In this article, we will learn:</p>
    <ul>
      <li>What is a tree</li>
      <li>Examples of trees</li>
      <li>Its terminology and how it works</li>
      <li>How to implement tree structures in code.</li>
    </ul>
    <p>Let’s start this learning journey. :)</p>
    <h2>Definition</h2>
    <p>
      When starting out programming, it is common to understand better the
      linear data structures than data structures like trees and graphs.
    </p>
    <p>
      Trees are well-known as a non-linear data structure. They don’t store data
      in a linear way. They organize data hierarchically.
    </p>
    <h2>Let’s dive into real life examples!</h2>
    <p>What do I mean when I say in a hierarchical way?</p>
    <p>
      Imagine a family tree with relationships from all generation:
      grandparents, parents, children, siblings, etc. We commonly organize
      family trees hierarchically.
    </p>
    <p>
      <Image
        src="/series/data-structures/kinoshita-tree.jpeg"
        width={592}
        height={293}
        alt=""
      />
    </p>
    <p>
      The above drawing is is my family tree.
      <code>Tossico, Akikazu, Hitomi,</code> and <code>Takemi</code> are my
      grandparents.
    </p>
    <p>
      <code>Toshiaki</code> and <code>Juliana</code>are my parents.
    </p>
    <p>
      <code>TK, Yuji, Bruno</code>, and <code>Kaio</code> are the children of my
      parents (me and my brothers).
    </p>
    <p>An organization’s structure is another example of a hierarchy.</p>
    <p>
      <Image
        src="/series/data-structures/company-tree.jpeg"
        alt=""
        width={592}
        height={333}
      />
    </p>
    <p>In HTML, the Document Object Model (DOM) works as a tree.</p>
    <p>
      <Image
        src="/series/data-structures/dom-tree.jpeg"
        alt=""
        width={592}
        height={333}
      />
    </p>
    <p>
      The <code>HTML</code> tag contains other tags. We have a<code>head</code>{' '}
      tag and a <code>body</code> tag. Those tags contains specific elements.
      The <code>head</code> tag has <code>meta</code> and
      <code>title</code> tags. The <code>body</code> tag has elements that show
      in the user interface, for example, <code>h1</code>,<code>a</code>,{' '}
      <code>li</code>, etc.
    </p>
    <h2>A technical definition</h2>
    <p>
      A <code>tree</code> is a collection of entities called
      <code>nodes</code>. Nodes are connected by <code>edges</code>. Each
      <code>node</code> contains a <code>value</code> or <code>data</code>, and
      it may or may not have a<code>child node</code>.
    </p>
    <p>
      <Image
        src="/series/data-structures/dom-as-nodes.jpeg"
        alt=""
        width={592}
        height={333}
      />
    </p>
    <p>
      The <code>first node</code> of the <code>tree</code> is called the
      <code>root</code>. If this
      <code>root node</code>
      is connected by another <code>node</code>, the <code>root</code> is then a{' '}
      <code>parent node</code> and the connected <code>node</code> is a{' '}
      <code>child</code>.
    </p>
    <p>
      <Image
        src="/series/data-structures/dom-leaves.jpeg"
        alt=""
        width={592}
        height={333}
      />
    </p>
    <p>
      All<code>Tree nodes</code> are connected by links called
      <code>edges</code>. It’s an important part of <code>trees</code>, because
      it’s manages the relationship between <code>nodes</code>.
    </p>
    <p>
      <Image
        src="/series/data-structures/tree-height-and-depth.jpeg"
        alt=""
        width={592}
        height={333}
      />
    </p>
    <p>
      <code>Leaves</code> are the last <code>nodes</code> on a<code>tree.</code>{' '}
      They are nodes without children. Like real trees, we have the{' '}
      <code>root</code>, <code>branches</code>, and finally the
      <code>leaves</code>.
    </p>
    <p>
      <Image
        src="/series/data-structures/tree-example.jpeg"
        alt=""
        width={592}
        height={333}
      />
    </p>
    <p>
      Other important concepts to understand are <code>height</code> and
      <code>depth</code>.
    </p>
    <p>
      The <code>height</code> of a <code>tree</code> is the length of the
      longest path to a <code>leaf</code>.
    </p>
    <p>
      The <code>depth</code> of a <code>node</code> is the length of the path to
      its <code>root</code>.
    </p>
    <h2>Terminology summary</h2>
    <ul>
      <li>
        <p>
          <strong>Root</strong> is the topmost <code>node</code> of the
          <code>tree</code>
        </p>
      </li>
      <li>
        <p>
          <strong>Edge</strong> is the link between two <code>nodes</code>
        </p>
      </li>
      <li>
        <p>
          <strong>Child</strong> is a <code>node</code> that has a
          <code>parent node</code>
        </p>
      </li>
      <li>
        <p>
          <strong>Parent</strong> is a <code>node</code> that has an
          <code>edge</code> to a <code>child node</code>
        </p>
      </li>
      <li>
        <p>
          <strong>Leaf</strong> is a <code>node</code> that does not have a
          <code>child node</code> in the
          <code>tree</code>
        </p>
      </li>
      <li>
        <p>
          <strong>Height</strong> is the length of the longest path to a
          <code>leaf</code>
        </p>
      </li>
      <li>
        <p>
          <strong>Depth</strong> is the length of the path to its
          <code>root</code>
        </p>
      </li>
    </ul>
    <h2>Binary trees</h2>
    <p>
      Now we will discuss a specific type of <code>tree</code>. We call it the{' '}
      <code>binary tree</code>.
    </p>
    <blockquote>
      <p>
        “In computer science, a binary tree is a tree data structure in which
        each node has at the most two children, which are referred to as the
        left child and the right child.” — Wikipedia
      </p>
    </blockquote>
    <p>
      So let’s look at an example of a <code>binary tree</code>.
    </p>
    <p>
      <Image
        src="/series/data-structures/tree-example-2.jpeg"
        alt=""
        width={592}
        height={333}
      />
    </p>
    <h2>Let’s code a binary tree</h2>
    <p>
      The first thing we need to keep in mind when we implement a
      <code>binary tree</code> is that it is a collection of
      <code>nodes</code>. Each <code>node</code> has three attributes:
      <code>value</code>, <code>left_child</code>, and
      <code>right_child</code>.
    </p>
    <p>
      How do we implement a simple <code>binary tree</code> that initializes
      with these three properties?
    </p>
    <p>Let’s take a look.</p>
    <Highlight className="python">{sourceCode1}</Highlight>
    <p>
      Here it is. Our <code>binary tree</code> class.
    </p>
    <p>
      When we instantiate an object, we pass the <code>value</code> (the data of
      the node) as a parameter. Look at the
      <code>left_child</code> and the <code>right_child</code>. Both are set to{' '}
      <code>None</code>.
    </p>
    <p>Why?</p>
    <p>
      Because when we create our <code>node</code>, it doesn’t have any
      children. We just have the <code>node data</code>.
    </p>
    <p>Let’s test it:</p>
    <Highlight className="python">{sourceCode2}</Highlight>
    <p>That’s it.</p>
    <p>
      We can pass the <code>string</code> ‘<code>a</code>’ as the
      <code>value</code> to our <code>Binary Tree node</code>. If we print the{' '}
      <code>value</code>, <code>left_child</code>, and
      <code>right_child</code>, we can see the values.
    </p>
    <p>Let’s go to the insertion part. What do we need to do here?</p>
    <p>
      We will implement a method to insert a new <code>node</code> to the
      <code>right</code> and to the <code>left</code>.
    </p>
    <p>Here are the rules:</p>
    <ul>
      <li>
        <p>
          If the current <code>node</code> doesn’t have a<code>left child</code>
          , we just create a new <code>node</code>and set it to the current
          node’s <code>left_child</code>.
        </p>
      </li>
      <li>
        <p>
          If it does have the <code>left child</code>, we create a new node and
          put it in the current <code>left child</code>’s place. Allocate this{' '}
          <code>left child node</code> to the new node’s
          <code>left child</code>.
        </p>
      </li>
    </ul>
    <p>Let’s draw it out. :)</p>
    <p>
      <Image
        src="/series/data-structures/tree-example-3.jpeg"
        alt=""
        width={592}
        height={333}
      />
    </p>
    <p>Here’s the code:</p>
    <Highlight className="python">{sourceCode3}</Highlight>
    <p>
      Again, if the current node doesn’t have a <code>left child</code>, we just
      create a new node and set it to the current node’s
      <code>left_child</code>. Or else we create a new node and put it in the
      current <code>left child</code>’s place. Allocate this
      <code>left child node</code> to the new node’s
      <code>left child</code>.
    </p>
    <p>
      And we do the same thing to insert a <code>right child node</code>.
    </p>
    <Highlight className="python">{sourceCode4}</Highlight>
    <p>Done! :)</p>
    <p>But not entirely. We still need to test it.</p>
    <p>
      Let’s build the following <code>tree</code>:
    </p>
    <p>
      <Image
        src="/series/data-structures/tree-example-4.jpeg"
        alt=""
        width={592}
        height={333}
      />
    </p>
    <p>To summarize the illustration of this tree:</p>
    <ul>
      <li>
        <p>
          <code>a</code> <code>node</code> will be the <code>root</code> of our{' '}
          <code>binary Tree</code>
        </p>
      </li>
      <li>
        <p>
          <code>a</code> <code>left child</code> is <code>b</code>
          <code>node</code>
        </p>
      </li>
      <li>
        <p>
          <code>a</code> <code>right child</code> is <code>c</code>
          <code>node</code>
        </p>
      </li>
      <li>
        <p>
          <code>b</code> <code>right child</code> is <code>d</code>
          <code>node</code> (<code>b</code>
          <code>node</code>
          doesn’t have a <code>left child</code>)
        </p>
      </li>
      <li>
        <p>
          <code>c</code> <code>left child</code> is <code>e</code>
          <code>node</code>
        </p>
      </li>
      <li>
        <p>
          <code>c</code> <code>right child</code> is <code>f</code>
          <code>node</code>
        </p>
      </li>
      <li>
        <p>
          both <code>e</code> and <code>f</code> <code>nodes</code> do not have
          children
        </p>
      </li>
    </ul>
    <p>
      So here is the code for the <code>tree</code>:
    </p>
    <Highlight className="python">{sourceCode5}</Highlight>
    <p>Insertion is done.</p>
    <p>
      Now we have to think about <code>tree</code> traversal.
    </p>
    <p>
      We have <strong>two options</strong> here:
      <strong>Depth-First Search (DFS)</strong> and
      <strong>Breadth-First Search (BFS)</strong>.
    </p>
    <ul>
      <li>
        <p>
          <a href="https://en.wikipedia.org/wiki/Depth-first_search">
            Depth First Search
          </a>
        </p>
      </li>
      <li>
        <p>
          <a href="https://en.wikipedia.org/wiki/Breadth-first_search">
            Breadth First Search
          </a>
        </p>
      </li>
    </ul>
    <p>So let’s dive into each tree traversal type.</p>
    <h3>Depth-First Search (DFS)</h3>
    <p>
      <strong>DFS</strong> explores a path all the way to a leaf before
      <strong>backtracking</strong> and exploring another path. Let’s take a
      look at an example with this type of traversal.
    </p>
    <p>
      <Image
        src="/series/data-structures/tree-example-5.jpeg"
        alt=""
        width={592}
        height={333}
      />
    </p>
    <p>The result for this algorithm will be 1–2–3–4–5–6–7.</p>
    <p>Why?</p>
    <p>Let’s break it down.</p>
    <ol>
      <li>
        <p>Print the root value.</p>
      </li>
      <li>
        <p>
          Go to the <code>left child</code> (2). Print it.
        </p>
      </li>
      <li>
        <p>
          Then go to the <code>left child</code> (3). Print it. (This
          <code>node</code> doesn’t have any children)
        </p>
      </li>
      <li>
        <p>
          Backtrack and go the <code>right child</code> (4). Print it. (This
          <code>node</code> doesn’t have any children)
        </p>
      </li>
      <li>
        <p>
          Backtrack to the <code>root</code> <code>node</code> and go to the
          <code>right child</code> (5). Print it.
        </p>
      </li>
      <li>
        <p>
          Go to the <code>left child</code> (6). Print it. (This
          <code>node</code> doesn’t have any children)
        </p>
      </li>
      <li>
        <p>
          Backtrack and go to the <code>right child</code> (7). Print it. (This{' '}
          <code>node</code> doesn’t have any children)
        </p>
      </li>
      <li>
        <p>Done.</p>
      </li>
    </ol>
    <p>
      When we go deep to the leaf and backtrack, this is called
      <strong>DFS</strong> algorithm.
    </p>
    <p>
      Now that we are familiar with this traversal algorithm, we will discuss
      the three types of <strong>DFS</strong>:<code>pre-order</code>,{' '}
      <code>in-order</code>, and
      <code>post-order</code>.
    </p>
    <h3>Pre-order</h3>
    <p>This is exactly what we did in the above example.</p>
    <Highlight className="python">{sourceCode6}</Highlight>

    <p>
      Print the current node, go to the left until it didn&#39;t have a left
      child, and then go to the right.
    </p>

    <p>The result is exactly as the above algorithm: 1–2–3–4–5–6–7.</p>

    <h3>In-order</h3>
    <p>
      <Image
        src="/series/data-structures/tree-example-6.jpeg"
        alt=""
        width={592}
        height={333}
      />
    </p>
    <p>
      The result of the in-order algorithm for this
      <code>tree</code> example is 3–2–4–1–6–5–7.
    </p>
    <p>The left first, the middle second, and the right last.</p>
    <p>Now let’s code it.</p>
    <Highlight className="python">{sourceCode7}</Highlight>
    <h3>Post-order</h3>
    <p>
      <Image
        src="/series/data-structures/tree-example-7.jpeg"
        alt=""
        width={592}
        height={333}
      />
    </p>
    <p>
      The result of the <code>post order</code> algorithm for this
      <code>tree</code> example is 3–4–2–6–7–5–1.
    </p>
    <p>The left first, the right second, and the middle last.</p>
    <p>Let’s code this.</p>
    <Highlight className="python">{sourceCode8}</Highlight>

    <p>These algorithms go deeply in the tree.</p>

    <h3>Breadth-First Search (BFS)</h3>
    <p>
      <strong>BFS</strong> algorithm traverses the <code>tree</code> level by
      level and depth by depth.
    </p>
    <Image
      src="/series/data-structures/tree-level.jpeg"
      alt=""
      width={592}
      height={333}
    />

    <p>
      The level 0 is only the root node. Level 1 is for children. Level 2
      grandchildren. And so on.
    </p>

    <p>Here is an example that helps to better explain this algorithm:</p>
    <Image
      src="/series/data-structures/tree-example-8.jpeg"
      alt=""
      width={592}
      height={333}
    />
    <p>
      So we traverse level by level. In this example, the result is
      1–2–5–3–4–6–7. Why?
    </p>
    <ul>
      <li>
        <p>
          Level/Depth 0: only <code>node</code> with value 1
        </p>
      </li>
      <li>
        <p>
          Level/Depth 1: <code>nodes</code> with values 2 and 5
        </p>
      </li>
      <li>
        <p>
          Level/Depth 2: <code>nodes</code> with values 3, 4, 6, and 7
        </p>
      </li>
    </ul>
    <p>Now let’s code it.</p>
    <Highlight className="python">{sourceCode9}</Highlight>
    <p>
      To implement a <strong>BFS</strong> algorithm, we use the
      <code>queue</code> data structure to help.
    </p>
    <p>How does it work?</p>
    <p>Here’s the explanation.</p>
    <Image
      src="/series/data-structures/tree-with-queue.jpeg"
      alt=""
      width={592}
      height={660}
    />

    <ul>
      <li>
        <p>Add the root node to the queue</p>
      </li>
      <li>
        <p>We run the algorithm until the queue doesn&#39;t anything</p>
      </li>
      <li>
        <p>Get the first element in queue</p>
      </li>
      <li>
        <p>Print its value</p>
      </li>
      <li>
        <p>Add its children in the queue (if it has)</p>
      </li>
      <li>
        <p>Run this algorithm again if we have any node in the queue</p>
      </li>
    </ul>

    <p>
      The illustration: we get 1 first (root node), print its value, and add its
      children to the queue: left first, right last. Our queue has nodes inside
      it, so run it again. Get the first node in the queue (2) and print it. Add
      its children. And we do this algorithm for each node in the queue.
    </p>

    <p>
      As we use the queue to add and get elements, we pop when get the next
      node.
    </p>

    <h2>Binary Search tree</h2>
    <blockquote>
      <p>
        “A Binary Search Tree is sometimes called ordered or sorted binary
        trees, and it keeps its values in sorted order, so that lookup and other
        operations can use the principle of binary search” — Wikipedia
      </p>
    </blockquote>
    <p>
      An important property of a <code>Binary Search Tree</code> is that the
      value of a<code>Binary Search Tree</code>
      <code>node</code> is larger than the value of the offspring of its
      <code>left child</code>, but smaller than the value of the offspring of
      its <code>right child.</code>”
    </p>
    <Image
      src="/series/data-structures/trees-a-b-c.jpeg"
      alt=""
      width={592}
      height={204}
    />
    <p>Here is a breakdown of the above illustration:</p>
    <ul>
      <li>
        <p>
          <strong>A</strong> is inverted. The <code>subtree</code> 7–5–8–6 needs
          to be on the right side, and the
          <code>subtree</code>
          2–1–3 needs to be on the left.
        </p>
      </li>
      <li>
        <p>
          <strong>B</strong> is the only correct option. It satisfies the
          <code>Binary Search Tree</code> property.
        </p>
      </li>
      <li>
        <p>
          <strong>C</strong> has one problem: the <code>node</code> with the
          value 4. It needs to be on the left side of the
          <code>root</code> because it is smaller than 5.
        </p>
      </li>
    </ul>
    <h2>Let’s code a Binary Search Tree!</h2>
    <p>Now it’s time to code!</p>
    <p>
      What will we see here? We will insert new nodes, search for a value,
      delete nodes, and the balance of the <code>tree</code>.
    </p>
    <p>Let’s start.</p>
    <h3>Insertion: adding new nodes to our tree</h3>
    <p>
      Imagine that we have an empty <code>tree</code> and we want to add new
      <code>nodes</code> with the following values in this order: 50, 76, 21, 4,
      32, 100, 64, 52.
    </p>
    <p>
      The first thing we need to know is if 50 is the <code>root</code> of our
      tree.
    </p>
    <Image
      src="/series/data-structures/one-node.jpeg"
      alt=""
      width={592}
      height={333}
    />
    <p>
      We can now start inserting <code>node</code> by <code>node</code>.
    </p>
    <ul>
      <li>
        <p>76 is greater than 50, so insert 76 on the right side.</p>
      </li>
      <li>
        <p>21 is smaller than 50, so insert 21 on the left side.</p>
      </li>
      <li>
        <p>
          4 is smaller than 50. <code>Node</code> with value 50 has a
          <code>left child</code> 21. Since 4 is smaller than 21, insert it on
          the left side of this <code>node</code>.
        </p>
      </li>
      <li>
        <p>
          32 is smaller than 50. <code>Node</code> with value 50 has a
          <code>left child</code> 21. Since 32 is greater than 21, insert 32 on
          the right side of this <code>node</code>.
        </p>
      </li>
      <li>
        <p>
          100 is greater than 50. <code>Node</code> with value 50 has a
          <code>right child</code> 76. Since 100 is greater than 76, insert 100
          on the right side of this <code>node</code>.
        </p>
      </li>
      <li>
        <p>
          64 is greater than 50. <code>Node</code> with value 50 has a
          <code>right child</code>76. Since 64 is smaller than 76, insert 64 on
          the left side of this <code>node</code>.
        </p>
      </li>
      <li>
        <p>
          52 is greater than 50. <code>Node</code> with value 50 has a
          <code>right child</code>76. Since 52 is smaller than 76,
          <code>node</code> with value 76 has a <code>left child</code> 64. 52
          is smaller than 64, so insert 54 on the left side of this
          <code>node</code>.
        </p>
      </li>
    </ul>
    <Image
      src="/series/data-structures/tree-example-9.jpeg"
      alt=""
      width={592}
      height={333}
    />
    <p>Do you notice a pattern here?</p>
    <p>Let’s break it down.</p>
    <ol>
      <li>Is the new node value greater or smaller than the current node?</li>
      <li>
        If the value of the new node is greater than the current node, go to the
        right subtree. If the current node doesn’t have a right child, insert it
        there, or else backtrack to step #1.
      </li>
      <li>
        If the value of the new node is smaller than the current node, go to the
        left subtree. If the current node doesn’t have a left child, insert it
        there, or else backtrack to step #1.
      </li>
      <li>
        We did not handle special cases here. When the value of a new node is
        equal to the current value of the node, use rule number 3. Consider
        inserting equal values to the left side of the subtree.
      </li>
    </ol>
    <p>Now let’s code it.</p>
    <Highlight className="python">{sourceCode10}</Highlight>
    <p>It seems very simple.</p>
    <p>
      The powerful part of this algorithm is the recursion part, which is on
      line 9 and line 13. Both lines of code call the
      <code>insert_node</code> method, and use it for its
      <code>left</code> and <code>right</code> <code>children</code>,
      respectively. Lines <code>11</code> and <code>15</code> are the ones that
      do the insertion for each <code>child</code>.
    </p>
    <h3>Let’s search for the node value... Or not...</h3>
    <p>
      The algorithm that we will build now is about doing searches. For a given
      value (integer number), we will say if our
      <code>Binary Search Tree</code> does or does not have that value.
    </p>
    <p>
      An important item to note is how we defined the tree
      <strong>insertion algorithm</strong>. First we have our
      <code>root</code> <code>node</code>. All the left
      <code>subtree</code> <code>nodes</code> will have smaller values than the{' '}
      <code>root</code> <code>node</code>. And all the right
      <code>subtree</code> <code>nodes</code> will have values greater than the{' '}
      <code>root</code> <code>node</code>.
    </p>
    <p>Let’s take a look at an example.</p>
    <p>
      Imagine that we have this <code>tree</code>.
    </p>
    <p>
      <Image
        src="/series/data-structures/tree-example-10.jpeg"
        alt=""
        width={592}
        height={397}
      />
    </p>
    <p>Now we want to know if we have a node based on value 52.</p>
    <p>
      <Image
        src="/series/data-structures/tree-example-11.jpeg"
        alt=""
        width={592}
        height={405}
      />
    </p>
    <p>Let’s break it down.</p>
    <ol>
      <li>
        We start with the root node as our current node. Is the given value
        smaller than the current node value? If yes, then we will search for it
        on the left subtree.
      </li>
      <li>
        Is the given value greater than the current node value? If yes, then we
        will search for it on the right subtree.
      </li>
      <li>
        If rules #1 and #2 are both false, we can compare the current node value
        and the given value if they are equal. If the comparison returns true,
        then we can say, “Yeah! Our tree has the given value,” otherwise, we
        say, “Nooo, it hasn’t.”
      </li>
    </ol>
    <p>Now let’s code it.</p>
    <Highlight className="python">{sourceCode11}</Highlight>
    <p>Let’s break down the code:</p>
    <ul>
      <li>
        <p>Lines 8 and 9 fall under rule #1.</p>
      </li>
      <li>
        <p>Lines 10 and 11 fall under rule #2.</p>
      </li>
      <li>
        <p>Line 13 falls under rule #3.</p>
      </li>
    </ul>
    <p>How do we test it?</p>
    <p>
      Let’s create our <code>Binary Search Tree</code> by initializing the
      <code>root</code> <code>node</code> with the value 15.
    </p>
    <Highlight className="python">{sourceCode13}</Highlight>
    <p>
      And now we will insert many new <code>nodes</code>.
    </p>
    <Highlight className="python">{sourceCode14}</Highlight>
    <p>
      For each inserted <code>node</code>, we will test if our
      <code>find_node</code> method really works.
    </p>
    <Highlight className="python">{sourceCode15}</Highlight>
    <p>
      Yeah, it works for these given values! Let’s test for a value that doesn’t
      exist in our <code>Binary Search Tree</code>.
    </p>
    <Highlight className="python">{sourceCode16}</Highlight>
    <p>Oh yeah.</p>
    <p>Our search is done.</p>
    <h3>Deletion: removing and organizing</h3>
    <p>
      Deletion is a more complex algorithm because we need to handle different
      cases. For a given value, we need to remove the
      <code>node</code> with this value. Imagine the following scenarios for
      this <code>node</code> : it has no <code>children</code>, has a single
      <code>child</code>, or has two <code>children</code>.
    </p>
    <ul>
      <li>
        <strong>Scenario #1</strong>: A <code>node</code> with no
        <code>children</code> (<code>leaf</code> <code>node</code>).
      </li>
    </ul>
    <Highlight className="python">{sourceCode17}</Highlight>
    <p>
      If the <code>node</code> we want to delete has no children, we simply
      delete it. The algorithm doesn’t need to reorganize the
      <code>tree</code>.
    </p>
    <ul>
      <li>
        <strong>Scenario #2</strong>: A <code>node</code> with just one child (
        <code>left</code> or
        <code>right</code>
        child).
      </li>
    </ul>
    <Highlight className="python">{sourceCode18}</Highlight>
    <p>
      In this case, our algorithm needs to make the parent of the
      <code>node</code> point to the <code>child</code> node. If the
      <code>node</code> is the <code>left child</code>, we make the parent of
      the <code>left child</code> point to the <code>child</code>. If the
      <code>node</code> is the <code>right child</code> of its parent, we make
      the parent of the <code>right child</code> point to the
      <code>child</code>.
    </p>
    <ul>
      <li>
        <strong>Scenario #3</strong>: A <code>node</code> with two children.
      </li>
    </ul>
    <Highlight className="python">{sourceCode26}</Highlight>
    <p>
      When the <code>node</code> has 2 children, we need to find the
      <code>node</code> with the minimum value, starting from the
      <code>node</code>’s<code>right child</code>. We will put this
      <code>node</code> with minimum value in the place of the
      <code>node</code> we want to remove.
    </p>
    <p>It’s time to code.</p>
    <Highlight className="python">{sourceCode19}</Highlight>
    <ul>
      <li>
        To use the <code>clear_node</code> method: set the
        <code>None</code> value to all three attributes — (<code>value</code>,{' '}
        <code>left_child</code>, and
        <code>right_child</code>)
      </li>
    </ul>
    <Highlight className="python">{sourceCode20}</Highlight>
    <ul>
      <li>
        To use the <code>find_minimum_value</code> method: go way down to the
        left. If we can’t find anymore nodes, we found the smallest one.
      </li>
    </ul>
    <Highlight className="python">{sourceCode21}</Highlight>
    <p>Now let’s test it.</p>
    <p>
      We will use this <code>tree</code> to test our
      <code>remove_node</code> algorithm.
    </p>
    <Highlight className="python">{sourceCode22}</Highlight>
    <p>
      Let’s remove the <code>node</code> with the <code>value</code> 8. It’s a{' '}
      <code>node</code> with no child.
    </p>
    <Highlight className="python">{sourceCode23}</Highlight>
    <p>
      Now let’s remove the <code>node</code> with the <code>value</code> 17.
      It’s a <code>node</code> with just one child.
    </p>
    <Highlight className="python">{sourceCode24}</Highlight>
    <p>
      Finally, we will remove a <code>node</code> with two children. This is the{' '}
      <code>root</code> of our <code>tree</code>.
    </p>
    <Highlight className="python">{sourceCode25}</Highlight>
    <p>The tests are now done. :)</p>
    <h2>That’s all for now!</h2>
    <p>We learned a lot here.</p>
    <p>
      Congrats on finishing this dense content. It’s really tough to understand
      a concept that we do not know. But you did it ☺
    </p>
    <p>Have fun, keep learning and coding.</p>
    <p>
      Here are my
      <a
        target="_blank"
        href="https://www.medium.com/@leandrotk_"
        rel="noreferrer"
      >
        Medium
      </a>
      ,
      <a target="_blank" href="https://twitter.com/LeandroTk_" rel="noreferrer">
        Twitter
      </a>
      &amp;
      <a target="_blank" href="https://github.com/LeandroTk" rel="noreferrer">
        GitHub
      </a>
      accounts ☺
    </p>

    <h2>Resources</h2>

    <ResourcesList resourcesList={resourcesList} />
  </>
);
