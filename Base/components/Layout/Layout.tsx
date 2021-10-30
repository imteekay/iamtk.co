import type { NextPage } from 'next';
import { GAScript } from '../../Analytics/GAScript';
import { Footer } from '../Footer';

export const Layout: NextPage = ({ children }) => (
  <>
    <GAScript />
    {children}
    <Footer />
  </>
);
