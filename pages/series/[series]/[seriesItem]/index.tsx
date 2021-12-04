import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Head } from 'Base/components/Head';
import { Layout } from 'Base/Article/Layout';
import {
  getSeriesPostContent,
  getSeriesPostMetadata,
  PostMetadata,
  getSeriesPaths,
} from 'src/lib';

interface Params extends ParsedUrlQuery {
  series: string;
  seriesItem: string;
}

type PageProps = {
  postContent: string;
  postMetadata: PostMetadata;
};

const Page: NextPage<PageProps> = ({ postContent, postMetadata }) => {
  return (
    <>
      <Head
        title={postMetadata.title}
        description={postMetadata.description}
        imageUrl={postMetadata.coverImage.src}
      />
      <Layout
        tags={postMetadata.tags}
        title={postMetadata.title}
        date={postMetadata.date}
        coverImage={{
          src: postMetadata.coverImage.src,
          width: postMetadata.coverImage.width,
          height: postMetadata.coverImage.height,
          alt: postMetadata.coverImage.alt,
          authorHref: postMetadata.coverImage.authorHref,
          authorName: postMetadata.coverImage.authorName,
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: postContent }} />
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: getSeriesPaths(),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<PageProps, Params> = async (
  context,
) => {
  const { series, seriesItem } = context.params!;
  const postContent = getSeriesPostContent(series, seriesItem);
  const postMetadata = getSeriesPostMetadata(series, seriesItem);

  return {
    props: {
      postContent,
      postMetadata,
    },
  };
};

export default Page;
