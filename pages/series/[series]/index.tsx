import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { getPlaiceholder } from 'plaiceholder';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { Head } from 'Base/components/Head';
import { Layout } from 'Base/Article/Layout';
import {
  getNestedPaths,
  getNestedPostContent,
  getNestedPostMetadata,
  PostMetadata,
} from 'src/lib';

interface Params extends ParsedUrlQuery {
  series: string;
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

const components = {};

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
      minutes={minutes}
      showSocialLinks
      coverImage={postMetadata.coverImage}
    >
      <MDXRemote {...content} components={components} />
    </Layout>
  </>
);

export async function getStaticPaths() {
  return {
    paths: getNestedPaths('series'),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<PageProps, Params> = async (
  context,
) => {
  const { series } = context.params!;
  const { postContent, minutes } = getNestedPostContent('series', series);
  const postMetadata = getNestedPostMetadata('series', series);
  const content = await serialize(postContent);
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
