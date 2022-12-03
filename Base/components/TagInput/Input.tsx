import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useContext,
  useState,
} from 'react';

import { TagInputContext } from './Wrapper';

export const Input = () => {
  const [newTag, setNewTag] = useState('');
  const { addTag } = useContext(TagInputContext);

  const updateTag: ChangeEventHandler<HTMLInputElement> = (event) => {
    setNewTag(event.target.value);
  };

  const handleEnter: KeyboardEventHandler = (event) => {
    if (event.key === 'Enter') {
      addTag(newTag);
      setNewTag('');
    }
  };

  return <input onChange={updateTag} onKeyDown={handleEnter} value={newTag} />;
};
