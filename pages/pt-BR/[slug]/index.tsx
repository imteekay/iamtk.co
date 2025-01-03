import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { getPlaiceholder } from 'plaiceholder';
import { ParsedUrlQuery } from 'querystring';

import { Layout } from 'Base/Article/Layout';
import { Head } from 'Base/components/Head';
import { Content, MDX, serializeMDX } from 'Base/components/MDX';
import { getPaths } from 'src/lib';
import { getPostContent } from 'src/lib/getPostContent';
import { getPostMetadata, PostMetadata } from 'src/lib/getPostMetadata';
import { Language } from 'src/lib/languages';
import { Locale } from 'src/types/Locale';

interface Params extends ParsedUrlQuery {
  lang: Locale;
  slug: string;
}

type PageProps = {
  content: Content;
  postMetadata: PostMetadata;
  minutes: number;
};

const Page: NextPage<PageProps> = ({ content, postMetadata, minutes }) => {
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
        <MDX content={content} />
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: getPaths(Language.PT_BR),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<PageProps, Params> = async (
  context,
) => {
  const { slug } = context.params!;
  const { postContent, minutes } = getPostContent(slug, Language.PT_BR);
  const postMetadata = getPostMetadata(slug, Language.PT_BR);
  const content = await serializeMDX(postContent);
  const { base64, img } = await getPlaiceholder(postMetadata.coverImage.src);

  return {
    props: {
      content,
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
