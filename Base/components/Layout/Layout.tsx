import { FC } from 'react';
import { GAScript } from 'Base/Analytics/GAScript';
import { Footer } from '../Footer';

export const Layout: FC = ({ children }) => (
  <>
    <GAScript />
    {children}
    <Footer />
  </>
);
