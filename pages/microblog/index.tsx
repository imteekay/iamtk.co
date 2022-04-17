import type { NextPage } from 'next';
import { Head } from 'Base/components/Head';
import { HomeLink } from 'Base/Article/HomeLink';
import { Post } from './Post';
import { posts } from './posts';
import { postWrapperStyle } from './styles';

const Page: NextPage = () => (
  <>
    <Head
      title="TK – Microblog"
      description="Learning & Improving with TK – Microblog"
      imageUrl="/logo.jpeg"
    />

    <main id="main">
      <div className="content">
        <HomeLink />
        <h1>Microblog</h1>

        {posts.map((post) => (
          <div
            style={postWrapperStyle}
            key={`${post.title}-${post.description}`}
          >
            <Post
              title={post.title}
              date={post.date}
              description={post.description}
              image={post.image}
            />
          </div>
        ))}
      </div>
    </main>
  </>
);

export default Page;
