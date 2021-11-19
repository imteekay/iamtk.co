import { FC } from 'react';

export const Article: FC = () => (
  <>
    <p>
      After rumbling a lot about learning Programming Language Theory (PLT), I
      finally decided to commit and learn this field that I care about.
    </p>
    <p>
      I wanted to start simple, with a friendly resource to just get started.
      After collecting a lot of resources, most of them were heavy books and
      papers, I got a copy of the <code>Writing an interpreter in Go</code>{' '}
      book. It seemed to be the simplest resource to get started in the field
      and it also let me be very practical in terms of engineering a compiler.
    </p>
    <p>
      But instead of Go, I wanted to use a language I‘m most familiar nowadays.
      So TypeScript it‘s.
    </p>
    <p>
      This book creates an interpreter for the Monkey programming language and
      we‘ll see in each chapter of this series the building blocks of the
      interpreter.
    </p>
    <p>
      If you want to see the code, I have a public Github repository for this
      implementation:{' '}
      <a href="https://github.com/leandrotk/monkey-ts">monkey-ts</a>, the Monkey
      programming language‘s compiler written in TypeScript.
    </p>

    <h2>Building an Interpreter Series</h2>
  </>
);
