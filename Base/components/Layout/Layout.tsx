import { FC } from 'react';
import { Footer } from '../Footer';

export const Layout: FC = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
);
