import { createContext, ReactNode, useState } from 'react';

import { TagsType } from './types';

interface WrapperPropTypes {
  children: ReactNode;
  defaultTags: TagsType;
}

type AllTags = [string, string][];
type AddTag = (newTag: string) => void;
type RemoveTag = (tag: string) => void;

interface ProviderValue {
  allTags: AllTags;
  addTag: AddTag;
  removeTag: RemoveTag;
}

const isObjEmpty = (object: Record<string, string>) =>
  Object.keys(object).length === 0;

export const TagInputContext = createContext<ProviderValue>(
  {} as ProviderValue,
);

export const Wrapper = ({ children, defaultTags }: WrapperPropTypes) => {
  const [tags, setTags] = useState(defaultTags);
  const isEmpty = isObjEmpty(tags);
  const hasGap = !isEmpty;

  const removeTag = (tag: string) => {
    const { [tag]: _, ...updatedTags } = tags;
    setTags(updatedTags);
  };

  const allTags = Object.entries(tags);
  const hasTag = (tag: string) => (tags[tag] ? true : false);

  const addTag = (newTag: string) => {
    !hasTag(newTag) &&
      setTags({
        ...tags,
        [newTag]: newTag,
      });
  };

  const value: ProviderValue = {
    allTags,
    addTag,
    removeTag,
  };

  return (
    <TagInputContext.Provider value={value}>
      <div
        style={{
          padding: '4px',
          border: '1px solid',
          display: 'flex',
          gap: hasGap ? '4px' : 'initial',
          width: 'fit-content',
        }}
      >
        {children}
      </div>
    </TagInputContext.Provider>
  );
};
