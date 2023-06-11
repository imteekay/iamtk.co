import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { MicroblogLayout } from 'Base/Article/Layout/MicroblogLayout';
import { Head } from 'Base/components/Head';
import { Content, MDX, serializeMDX } from 'Base/components/MDX';
import {
  getNestedPaths,
  getNestedPostContent,
  getNestedPostMetadata,
  PostMetadata,
} from 'src/lib';

interface Params extends ParsedUrlQuery {
  microblog: string;
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
    <MicroblogLayout
      tags={postMetadata.tags}
      title={postMetadata.title}
      date={postMetadata.date}
      alternativeArticle={postMetadata.alternativeArticle}
      minutes={minutes}
      showSocialLinks
    >
      <MDX content={content} />
    </MicroblogLayout>
  </>
);

export async function getStaticPaths() {
  return {
    paths: getNestedPaths('microblog'),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<PageProps, Params> = async (
  context,
) => {
  const { microblog } = context.params!;
  const { postContent, minutes } = getNestedPostContent('microblog', microblog);
  const postMetadata = getNestedPostMetadata('microblog', microblog);
  const content = await serializeMDX(postContent);

  return {
    props: {
      content,
      postMetadata,
      minutes,
    },
  };
};

export default Page;
