import { FC } from 'react';
import { Footer } from 'Base/components/Footer';

export const Layout: FC = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
);
