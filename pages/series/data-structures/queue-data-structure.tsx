import type { NextPage } from 'next';
import { Head } from 'Base/components/Head';
import { Layout } from 'Base/Article/Layout';
import {
  Article,
  pageData,
} from 'PagesData/series/data-structures/queue-data-structure';

const QueueDataStructure: NextPage = () => (
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

export default QueueDataStructure;
