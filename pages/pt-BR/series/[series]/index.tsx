import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { getPlaiceholder } from 'plaiceholder';
import { Head } from 'Base/components/Head';
import { Layout } from 'Base/Article/Layout';
import { Language } from 'src/lib/languages';
import {
  getNestedPaths,
  getNestedPostContent,
  getNestedPostMetadata,
  PostMetadata,
} from 'src/lib';

interface Params extends ParsedUrlQuery {
  series: string;
}

type PageProps = {
  postContent: string;
  postMetadata: PostMetadata;
  minutes: number;
};

const Page: NextPage<PageProps> = ({ postContent, postMetadata, minutes }) => {
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
        alternativeArticle={postMetadata.alternativeArticle}
        minutes={minutes}
        showSocialLinks
        coverImage={postMetadata.coverImage}
      >
        <div dangerouslySetInnerHTML={{ __html: postContent }} />
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: getNestedPaths('series', Language.PT_BR),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<PageProps, Params> = async (
  context,
) => {
  const { series } = context.params!;
  const { postContent, minutes } = getNestedPostContent(
    'series',
    series,
    Language.PT_BR,
  );

  const postMetadata = getNestedPostMetadata('series', series, Language.PT_BR);
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