import Link from 'next/link';
import { FC } from 'react';
import { Title } from 'Base/components/Title';
import { titleStyle } from 'Base/components/Title/style';
import { Post } from './Post';
import { listStyle, titleLinkStyle } from './style';
import { postsList } from './postsList';

type Header = 'h1' | 'h2';
type WritingsPropTypes = { header?: Header };

export const Writings: FC<WritingsPropTypes> = ({ header = 'h2' }) => (
  <section id="writings">
    {header === 'h1' ? (
      <Title text="writings" />
    ) : (
      <Link href="/writings" passHref>
        <a style={titleLinkStyle}>
          <h2 style={titleStyle}>writings</h2>
        </a>
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
