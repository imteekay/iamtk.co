import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { Layout } from 'Base/Article/Layout';
import { Head } from 'Base/components/Head';
import { Content, MDX, serializeMDX } from 'Base/components/MDX';
import {
  getNestedPaths,
  getNestedPostContent,
  getNestedPostMetadata,
  PostMetadata,
} from 'src/lib';

interface Params extends ParsedUrlQuery {
  tag: string;
}

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
      minutes={minutes}
      coverImage={postMetadata.coverImage}
    >
      <MDX content={content} />
    </Layout>
  </>
);

export async function getStaticPaths() {
  return {
    paths: getNestedPaths('tags'),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<PageProps, Params> = async (
  context,
) => {
  const { tag } = context.params!;
  const { postContent, minutes } = getNestedPostContent('tags', tag);
  const content = await serializeMDX(postContent);
  const postMetadata = getNestedPostMetadata('tags', tag);

  return {
    props: {
      content,
      postMetadata,
      minutes,
    },
  };
};

export default Page;
