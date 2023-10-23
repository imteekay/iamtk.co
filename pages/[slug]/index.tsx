import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getPlaiceholder } from 'plaiceholder';
import { ParsedUrlQuery } from 'querystring';

import { Layout } from 'Base/Article/Layout';
import { Head } from 'Base/components/Head';
import { MDX, serializeMDX } from 'Base/components/MDX';
import { getPaths } from 'src/lib';
import { getPostContent } from 'src/lib/getPostContent';
import { getPostMetadata, PostMetadata } from 'src/lib/getPostMetadata';

interface Params extends ParsedUrlQuery {
  slug: string;
}

type Content = MDXRemoteSerializeResult<
  Record<string, unknown>,
  Record<string, string>
>;

type PageProps = {
  content: Content;
  postMetadata: PostMetadata;
  minutes: number;
};

const Page: NextPage<PageProps> = ({ content, postMetadata, minutes }) => (
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
      showSocialLinks
      minutes={minutes}
      coverImage={postMetadata.coverImage}
    >
      <MDX content={content} />
    </Layout>
  </>
);

export async function getStaticPaths() {
  return {
    paths: getPaths(),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<PageProps, Params> = async (
  context,
) => {
  const { slug } = context.params!;
  const { postContent, minutes } = getPostContent(slug);
  const postMetadata = getPostMetadata(slug);
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
