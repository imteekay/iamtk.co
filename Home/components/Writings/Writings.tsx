import { FC } from 'react';
import { Title } from '../../../Base/components/Title';
import { Post } from './Post';
import { listStyle } from './style';
import { postsList } from './postsList';

export const Writings: FC = () => (
  <section id="writings">
    <Title text="writings" />
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
