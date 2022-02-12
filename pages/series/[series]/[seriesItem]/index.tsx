import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { getPlaiceholder } from 'plaiceholder';
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
  minutes: number;
};

const Page: NextPage<PageProps> = ({ postContent, postMetadata, minutes }) => (
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
      alternativeArticle={postMetadata.alternativeArticle}
      minutes={minutes}
      showSocialLinks
      coverImage={postMetadata.coverImage}
    >
      <div dangerouslySetInnerHTML={{ __html: postContent }} />
    </Layout>
  </>
);

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
  const { postContent, minutes } = getSeriesPostContent(series, seriesItem);
  const postMetadata = getSeriesPostMetadata(series, seriesItem);
  const { base64, img } = await getPlaiceholder(postMetadata.coverImage.src);

  return {
    props: {
      postContent,
      postMetadata: {
        ...postMetadata,
        coverImage: {
          ...postMetadata.coverImage,
          src: img.src,
          blurDataURL: base64,
        },
      },
      minutes,
    },
  };
};

export default Page;
