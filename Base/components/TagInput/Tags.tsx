import { useContext } from 'react';

import { Tag } from './Tag';
import { TagInputContext } from './Wrapper';

export const Tags = () => {
  const { allTags } = useContext(TagInputContext);

  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      {allTags.map(([tagId, tag]) => (
        <Tag key={tagId} tagId={tagId} tag={tag} />
      ))}
    </div>
  );
};
