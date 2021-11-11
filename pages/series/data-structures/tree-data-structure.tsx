import type { NextPage } from 'next';
import { Head } from 'Base/components/Head';
import { Layout } from 'Base/Article/Layout';
import {
  pageData,
  Article,
} from 'PagesData/series/data-structures/tree-data-structure';

const TreeDataStructure: NextPage = () => (
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
    </Layout>
  </>
);

export default TreeDataStructure;
