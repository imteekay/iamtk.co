import Link from 'next/link';
import { FC } from 'react';
import { homeLinkStyle, iconStyle } from './styles';

export const HomeLink: FC = () => (
  <Link href="/">
    <a id="menu-icon" style={homeLinkStyle}>
      <span className="fas fa-long-arrow-alt-left" style={iconStyle}></span>
      Home
    </a>
  </Link>
);
