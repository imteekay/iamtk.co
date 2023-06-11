import { FC } from 'react';

import { authorNameStyle } from './styles';

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
    <span itemProp="name" style={authorNameStyle}>
      {name}
    </span>
  </span>
);
