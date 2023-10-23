import { useContext } from 'react';

import { TagInputContext } from './Wrapper';

interface ButtonPropTypes {
  tagId: string;
}

export const Button = ({ tagId }: ButtonPropTypes) => {
  const { removeTag } = useContext(TagInputContext);

  return (
    <button onClick={() => removeTag(tagId)} style={{ marginLeft: '4px' }}>
      X
    </button>
  );
};
