import Link from 'next/link';
import { FC } from 'react';

import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { homeLinkStyle, iconStyle } from './styles';

export const MicroblogLink: FC = () => (
  <Link
    href="/microblog"
    id="menu-icon"
    data-testid="home-link"
    className={homeLinkStyle}
  >
    <FontAwesomeIcon icon={faLongArrowAltLeft} className={iconStyle} />
    Microblog
  </Link>
);
