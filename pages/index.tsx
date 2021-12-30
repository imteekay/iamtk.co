import type { NextPage } from 'next';
import { Head } from 'Base/components/Head';
import { Title } from 'Base/components/Title';
import { SkipLink } from 'Home/components/SkipLink';
import { About } from 'Home/components/About';
import { Writings } from 'Home/components/Writings';
import { Series } from 'Home/components/Series';
import { Projects } from 'Home/components/Projects';

import { useState } from 'react';
import MiniSearch from 'minisearch';
import Autocomplete from 'react-autocomplete';
import { postsList } from 'Home/components/Writings/postsList';

const miniSearch = new MiniSearch({
  fields: ['tags'],
  storeFields: ['title', 'tags'],
});

miniSearch.addAll(postsList);

const Page: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const a = miniSearch.search(searchTerm);
  console.log('a', a);
  console.log('suggestion', miniSearch.autoSuggest(searchTerm));

  return (
    <>
      <Autocomplete
        getItemValue={(item) => item.suggestion}
        items={miniSearch.autoSuggest(searchTerm)}
        renderItem={(item, isHighlighted) => (
          <div style={{ background: isHighlighted ? 'black' : 'lightgray' }}>
            {item.suggestion}
          </div>
        )}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <Head
        title="TK"
        description="Learning & Improving with TK"
        imageUrl="/logo.jpeg"
      />

      <SkipLink />

      <main id="main">
        <div className="content">
          <Title text="TK" />
          <About />
          <Writings />
          <Series />
          <Projects />
        </div>
      </main>
    </>
  );
};

export default Page;
