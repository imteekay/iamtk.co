import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Head } from 'Base/Article/Head';
import { Layout } from 'Base/Article/Layout';
import { getPaths } from 'src/lib';
import { getPostContent } from 'src/lib/getPostContent';
import { getPostMetadata, PostMetadata } from 'src/lib/getPostMetadata';
import { Locale } from 'src/types/Locale';

interface Params extends ParsedUrlQuery {
  lang: Locale;
  slug: string;
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
    paths: getPaths('pt-BR'),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<PageProps, Params> = async (
  context,
) => {
  const { slug } = context.params!;
  const { postContent, minutes } = getPostContent(slug, 'pt-BR');
  const postMetadata = getPostMetadata(slug, 'pt-BR');

  return {
    props: {
      postContent,
      postMetadata,
      minutes,
    },
  };
};

export default Page;
