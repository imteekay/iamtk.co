import { FC } from 'react';

type AuthorPropTypes = {
  name?: string;
};

export const Author: FC<AuthorPropTypes> = ({ name = 'TK' }) => (
  <span
    className="author"
    itemProp="author"
    itemScope
    itemType="http://schema.org/Person"
  >
    <span itemProp="name">{name}</span>
  </span>
);
