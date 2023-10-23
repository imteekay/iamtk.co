import { Input } from './Input';
import { Tags } from './Tags';
import { Wrapper } from './Wrapper';
import { TagsType } from './types';

interface TagInputPropTypes {
  defaultTags: TagsType;
}

export const TagInput = ({ defaultTags }: TagInputPropTypes) => (
  <Wrapper defaultTags={defaultTags}>
    <Tags />
    <Input />
  </Wrapper>
);
