import { FC } from 'react';
import { Author } from '../Author';
import { Date } from '../Date';
import { Tags } from '../Tags';
import { TagPropTypes } from '../Tag';
import { metaStyle } from './styles';

type MetaPropTypes = {
  date: string;
  tags: TagPropTypes[];
};

export const Meta: FC<MetaPropTypes> = ({ date, tags }) => (
  <div style={metaStyle}>
    <Author />
    <Date date={date} />
    <Tags tags={tags} />
  </div>
);
