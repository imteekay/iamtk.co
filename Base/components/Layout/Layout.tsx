import type { NextPage } from 'next';
import { Footer } from '../Footer';

export const Layout: NextPage = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
);
