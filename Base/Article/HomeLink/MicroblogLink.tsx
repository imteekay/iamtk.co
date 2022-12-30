import Link from 'next/link';
import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { homeLinkStyle, iconStyle } from './styles';

export const MicroblogLink: FC = () => (
  <Link href="/microblog">
    <a id="menu-icon" data-testid="home-link" className={homeLinkStyle}>
      <FontAwesomeIcon icon={faLongArrowAltLeft} className={iconStyle} />
      Microblog
    </a>
  </Link>
);
