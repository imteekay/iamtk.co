import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { getPlaiceholder } from 'plaiceholder';
import { Head } from 'Base/components/Head';
import { MicroblogLayout } from 'Base/Article/Layout/MicroblogLayout';
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
    <MicroblogLayout
      tags={postMetadata.tags}
      title={postMetadata.title}
      date={postMetadata.date}
      alternativeArticle={postMetadata.alternativeArticle}
      minutes={minutes}
      showSocialLinks
    >
      <div dangerouslySetInnerHTML={{ __html: postContent }} />
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
