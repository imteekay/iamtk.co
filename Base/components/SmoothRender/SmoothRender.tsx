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

const SmoothRenderElement = ({ children }: SmoothRenderElementPropTypes) => {
  const [render, setRender] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setRender(inView);
    }
  }, [inView]);

  return (
    <>
      <div ref={ref} style={{ minHeight: '0px', visibility: 'hidden' }} />
      {cloneElement(children, {
        className: smoothRenderElementStyle({ render }),
      })}
    </>
  );
};

export const SmoothRender = ({ children }: SmoothRenderPropTypes) =>
  children.map((child, id) => (
    <SmoothRenderElement key={id}>{child}</SmoothRenderElement>
  ));
