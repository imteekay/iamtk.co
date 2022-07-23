import { FC } from 'react';
import { IntersectionObserver } from 'Base/components/IntersectionObserver';
import { Tag } from 'src/lib/getPostMetadata';
import FooterLoadable from './Loadable';

type FooterPropTypes = {
  tags: Tag[];
};

export const Footer: FC<FooterPropTypes> = ({ tags }) => (
  <IntersectionObserver>
    <FooterLoadable tags={tags} />
  </IntersectionObserver>
);
