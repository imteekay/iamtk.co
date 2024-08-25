import { cloneElement, useEffect, useState } from 'react';

import { css } from '@emotion/css';
import { useInView } from 'react-intersection-observer';

interface SmoothRenderPropTypes {
  children: JSX.Element[];
}

interface SmoothRenderElementPropTypes {
  children: JSX.Element;
}

const smoothRenderElementStyle = ({ render }: { render: boolean }) => css`
  transition-timing-function: ease;
  transition-duration: 0.6s;
  transition-delay: 0.124927s;
  opacity: ${render ? '1' : '0'};
`;

const HEADERS = ['h2', 'h3', 'h4'];

interface Text {
  props: {
    children: Text;
  };
}

type Children = string | Text | (string | Text)[];

function slugify(children: Children): string {
  if (Array.isArray(children)) {
    return children.map((child) => slugify(child)).join('-');
  }

  if (typeof children === 'object') {
    return slugify(children.props.children);
  }

  return children
    .normalize('NFKD') // Return the Unicode Normalization Form of a given string
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\_/g, '-') // Replace _ with -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-/, '') // Remove starting -
    .replace(/\-$/g, ''); // Remove trailing -
}

const SmoothRenderElement = ({ children }: SmoothRenderElementPropTypes) => {
  const [render, setRender] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const className = smoothRenderElementStyle({ render });

  const id = HEADERS.includes(children.type)
    ? slugify(children.props.children)
    : null;

  useEffect(() => {
    if (inView) {
      setRender(inView);
    }
  }, [inView]);

  return (
    <>
      <div ref={ref} style={{ minHeight: '0px', visibility: 'hidden' }} />
      {cloneElement(children, {
        className,
        id,
      })}
    </>
  );
};

export const SmoothRender = ({ children }: SmoothRenderPropTypes) =>
  children.map((child, id) => (
    <SmoothRenderElement key={id}>{child}</SmoothRenderElement>
  ));
