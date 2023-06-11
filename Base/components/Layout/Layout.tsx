import { FC } from 'react';

import { Footer } from 'Base/components/Footer';
import { AnimationLayout } from 'Base/components/Layout/AnimationLayout';

export const Layout: FC = ({ children }) => (
  <AnimationLayout>
    {children}
    <Footer />
  </AnimationLayout>
);
