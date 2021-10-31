import { FC } from 'react';
import { homeLinkStyle, iconStyle } from './styles';

export const HomeLink: FC = () => (
  <a id="menu-icon" style={homeLinkStyle} href="../../../index.html">
    <span className="fas fa-long-arrow-alt-left" style={iconStyle}></span>
    Home
  </a>
);
