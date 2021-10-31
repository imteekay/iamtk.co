import { FC } from 'react';
import { articleTagStyle } from './styles';
import { Tag, TagPropTypes } from '../Tag';

type TagsPropTypes = {
  tags: TagPropTypes[];
};

export const Tags: FC<TagsPropTypes> = ({ tags }) => (
  <div style={articleTagStyle}>
    | <span className="fa fa-tag"></span>
    {tags.map((tag) => (
      <Tag key={tag.name} href={tag.href} name={tag.name} />
    ))}
  </div>
);
