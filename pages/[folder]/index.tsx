import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Head } from 'Base/components/Head';
import { Layout } from 'Base/Article/Layout';
import { getPaths } from 'src/lib';
import { getPostContent } from 'src/lib/getPostContent';
import { getPostMetadata, PostMetadata } from 'src/lib/getPostMetadata';

interface Params extends ParsedUrlQuery {
  folder: string;
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
    paths: getPaths(),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<PageProps, Params> = async (
  context,
) => {
  const { folder } = context.params!;
  const postContent = getPostContent(folder);
  const postMetadata = getPostMetadata(folder);

  return {
    props: {
      postContent,
      postMetadata,
    },
  };
};

export default Page;
