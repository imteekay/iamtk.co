import { FC } from 'react';

import FooterLoadable from './Loadable';
import { IntersectionObserver } from 'Base/components/IntersectionObserver';
import { Tag } from 'src/lib/getPostMetadata';

type FooterPropTypes = {
  tags: Tag[];
};

export const Footer: FC<FooterPropTypes> = ({ tags }) => (
  <IntersectionObserver>
    <FooterLoadable tags={tags} />
  </IntersectionObserver>
);
