import type { NextPage } from 'next';
import { skipLink } from './style';

export const SkipLink: NextPage = () => (
  <a style={skipLink} href="#main">
    Skip to main
  </a>
);
