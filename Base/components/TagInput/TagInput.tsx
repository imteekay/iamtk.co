import { Input } from './Input';
import { Tags } from './Tags';
import { TagsType } from './types';
import { Wrapper } from './Wrapper';

interface TagInputPropTypes {
  defaultTags: TagsType;
}

export const TagInput = ({ defaultTags }: TagInputPropTypes) => (
  <Wrapper defaultTags={defaultTags}>
    <Tags />
    <Input />
  </Wrapper>
);
