import type { NextPage } from 'next';

import { Head } from 'Base/components/Head';
import { TagInput } from 'Base/components/TagInput';

const defaultTags = { tag1: 'tag1', tag2: 'tag2' };

const Page: NextPage = () => {
  return (
    <>
      <Head
        title="TK —— Crafting Frontend — Tag Input"
        description="Learning & Improving with TK —— Crafting Frontend — Tag Input"
        imageUrl="/logo.jpeg"
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <TagInput defaultTags={defaultTags} />
      </div>
    </>
  );
};

export default Page;
