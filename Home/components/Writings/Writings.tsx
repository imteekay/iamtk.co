import Link from 'next/link';
import { FC } from 'react';

import { Post } from './Post';
import { postsList } from './postsList';
import { listStyle, titleLinkStyle } from './style';
import { Title } from 'Base/components/Title';
import { titleStyle } from 'Base/components/Title/style';

type Header = 'h1' | 'h2';
type WritingsPropTypes = { header?: Header };

export const Writings: FC<WritingsPropTypes> = ({ header = 'h2' }) => (
  <section id="writings">
    {header === 'h1' ? (
      <Title text="writings" />
    ) : (
      <Link href="/writings" passHref style={titleLinkStyle}>
        <h2 className={titleStyle}>writings</h2>
      </Link>
    )}
    <ul style={listStyle}>
      {postsList.map((post) => (
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
