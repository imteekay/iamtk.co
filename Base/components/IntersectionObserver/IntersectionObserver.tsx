import { FC, useState } from 'react';

import { InView } from 'react-intersection-observer';

export const IntersectionObserver: FC = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <InView as="div" onChange={(inView) => setShow(inView)}>
      {show && children}
    </InView>
  );
};
