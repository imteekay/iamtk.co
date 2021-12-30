import Link from 'next/link';
import { FC } from 'react';
import { Title } from 'Base/components/Title';
import { Autocomplete, useSearch } from 'Base/components/Autocomplete';
import { Post } from './Post';
import { listStyle, titleLinkStyle } from './style';
import { postsList } from './postsList';
import { SearchResult } from 'minisearch';

function byDatetime(item1: SearchResult, item2: SearchResult) {
  if (item1.datetime < item2.datetime) return 1;
  if (item1.datetime > item2.datetime) return -1;
  return 0;
}

function getPosts(searchedItems: SearchResult[]) {
  return searchedItems.length > 0 ? searchedItems.sort(byDatetime) : postsList;
}

export const Writings: FC = () => {
  const { searchTerm, searchedItems, suggestions, setSearchTerm } = useSearch({
    fields: ['tags'],
    storeFields: ['datetime', 'title', 'link'],
    items: postsList,
  });

  const posts = getPosts(searchedItems);

  return (
    <section id="writings">
      <Link href="/writings" passHref>
        <a style={titleLinkStyle}>
          <Title text="writings" />
        </a>
      </Link>
      <Autocomplete
        searchTerm={searchTerm}
        suggestions={suggestions}
        updateSearchTerm={setSearchTerm}
      />
      <ul style={listStyle}>
        {posts.map((post) => (
          <Post
            key={post.title}
            datetime={post.datetime}
            link={post.link}
            title={post.title}
          />
        ))}
      </ul>
    </section>
  );
};
