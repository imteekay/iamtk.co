import type { NextPage } from 'next';
import { Head } from 'Base/components/Head';
import { Layout } from 'Base/Article/Layout';
import { PostsList } from 'Base/Article/PostsList';
import { pageData, Article } from 'PagesData/series/building-an-interpreter';

const Page: NextPage = () => (
  <>
    <Head
      title={pageData.title}
      description={pageData.description}
      imageUrl={pageData.coverImage.src}
    />
    <Layout
      tags={pageData.tags}
      title={pageData.title}
      date={pageData.date}
      coverImage={pageData.coverImage}
    >
      <Article />
      <PostsList postsList={pageData.postsList} />
    </Layout>
  </>
);

export default Page;
