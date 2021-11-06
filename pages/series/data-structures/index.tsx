import type { NextPage } from 'next';
import { Head } from '../../../Base/components/Head';
import { Layout } from '../../../Base/Article/Layout';
import { PostsList } from '../../../Base/Article/PostsList';
import { pageData } from '../../../PagesData/series/data-structures';

const DataStructures: NextPage = () => (
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
      <p>
        This is part of my series on <code>Data Structures</code>, where I
        document posts about algorithms problems I solved.
      </p>

      <p>
        This is live document and will be updated everytime I solve new
        problems.
      </p>

      <h2>{pageData.title}</h2>

      <PostsList postsList={pageData.postsList} />
    </Layout>
  </>
);

export default DataStructures;
