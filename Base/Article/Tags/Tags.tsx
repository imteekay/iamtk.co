import { FC } from 'react';

import { articleTagStyle, tagIcon } from './styles';
import { Tag, TagPropTypes } from 'Base/Article/Tag';

type TagsPropTypes = {
  tags: TagPropTypes[];
  hasTagIcon?: boolean;
};

export const Tags: FC<TagsPropTypes> = ({ tags, hasTagIcon = false }) =>
  tags.length > 0 ? (
    <div style={articleTagStyle}>
      {tags.map((tag) => (
        <Tag key={tag.name} href={tag.href} name={tag.name} />
      ))}
    </div>
  ) : null;
