import type { NextPage } from 'next';
import { Head } from 'Base/components/Head';
import { HomeLink } from 'Base/Article/HomeLink';
import { Post } from 'Base/Microblog/Post';
import { posts } from 'Base/Microblog/Post/posts';
import { postWrapperStyle } from 'Base/Microblog/Post/styles';
import { useRouter } from 'next/router';

function toSlug(str: string) {
  return str.toLocaleLowerCase().split(' ').join('-');
}

const MicroblogHead = () => {
  const router = useRouter();
  const micropost = router.query?.micropost;
  const imageUrl = micropost ? `/microblog/${micropost}.png` : '/logo.jpeg';

  return (
    <Head
      title="TK – Microblog"
      description="Learning & Improving with TK – Microblog"
      imageUrl={imageUrl}
    />
  );
};

const Page: NextPage = () => (
  <>
    <MicroblogHead />

    <main id="main">
      <div className="content">
        <HomeLink />

        <h1>Microblog</h1>

        {posts.map((post, index) => {
          const postTitleSlug = toSlug(post.title);
          const position = posts.length - index;
          const id = `${postTitleSlug}-${position}`;

          return (
            <div id={id} key={id} style={postWrapperStyle}>
              <Post
                title={post.title}
                date={post.date}
                description={post.description}
                image={post.image}
                id={id}
              />
            </div>
          );
        })}
      </div>
    </main>
  </>
);

export default Page;
