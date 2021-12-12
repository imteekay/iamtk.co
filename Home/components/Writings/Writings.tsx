import Link from 'next/link';
import { FC } from 'react';
import { Title } from 'Base/components/Title';
import { Post } from './Post';
import { listStyle, titleLinkStyle } from './style';
import { postsList } from './postsList';

export const Writings: FC = () => (
  <section id="writings">
    <Link href="/writings" passHref>
      <a style={titleLinkStyle}>
        <Title text="writings" />
      </a>
    </Link>
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
