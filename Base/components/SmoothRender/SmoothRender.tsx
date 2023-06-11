import { useState } from 'react';

import { css } from '@emotion/css';
import { InView } from 'react-intersection-observer';

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

  return (
    <InView as="div" onChange={(inView) => inView && setRender(inView)}>
      <div className={smoothRenderElementStyle({ render })}>{children}</div>
    </InView>
  );
};

export const SmoothRender = ({ children }: SmoothRenderPropTypes) =>
  children.map((child, id) => (
    <SmoothRenderElement key={id}>{child}</SmoothRenderElement>
  ));
