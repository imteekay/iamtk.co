import type { NextPage } from 'next';
import { Head } from 'Base/components/Head';
import { Title } from 'Base/components/Title';
import { SkipLink } from 'Home/components/SkipLink';
import { About } from 'Home/components/About';
import { Writings } from 'Home/components/Writings';
import { Series } from 'Home/components/Series';
import { Projects } from 'Home/components/Projects';
import { postsList } from 'Home/components/Writings/postsList';
import { Autocomplete, useSearch } from 'Base/components/Autocomplete';

const Page: NextPage = () => {
  const { searchTerm, searchedItems, suggestions, setSearchTerm } = useSearch({
    fields: ['tags'],
    storeFields: ['title', 'tags'],
    items: postsList,
  });

  console.log('searchedItems', searchedItems);

  return (
    <>
      <Autocomplete
        searchTerm={searchTerm}
        suggestions={suggestions}
        updateSearchTerm={setSearchTerm}
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
