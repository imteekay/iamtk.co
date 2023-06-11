import Link from 'next/link';
import { FC } from 'react';

import { tagStyle } from './styles';

export type TagPropTypes = {
  href: string;
  name: string;
};

export const Tag: FC<TagPropTypes> = ({ href, name }) => (
  <Link href={href} style={tagStyle}>
    {`#${name}`}
  </Link>
);
