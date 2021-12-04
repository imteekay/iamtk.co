import { FC } from 'react';
import { Author } from 'Base/Article/Author';
import { Date } from 'Base/Article/Date';
import { Tags } from 'Base/Article/Tags';
import { TagPropTypes } from 'Base/Article/Tag';
import { metaStyle } from './styles';

type MetaPropTypes = {
  date: string;
  tags: TagPropTypes[];
};

export const Meta: FC<MetaPropTypes> = ({ date, tags }) => (
  <div style={metaStyle}>
    <Author />
    <Date date={date} />
    <Tags tags={tags} hasTagIcon />
  </div>
);
