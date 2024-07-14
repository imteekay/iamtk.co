import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import TweetEmbed from 'react-tweet-embed';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

import { PostAndDate } from 'Base/components/PostAndDate';
import { SideBySideImages } from 'Base/components/SideBySideImages';
import { SideBySideVideos } from 'Base/components/SideBySideVideos';
import { SmoothRender } from 'Base/components/SmoothRender';

export type Content = MDXRemoteSerializeResult<
  Record<string, unknown>,
  Record<string, string>
>;

interface MDXPropTypes {
  content: Content;
}

export const serializeMDX = (content: string) =>
  serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeHighlight, rehypeKatex],
    },
  });

const components = {
  PostAndDate,
  SideBySideImages,
  TweetEmbed,
  SmoothRender,
  SideBySideVideos,
};

export const MDX = ({ content }: MDXPropTypes) => (
  // @ts-expect-error: components render correctly
  <MDXRemote {...content} components={components} />
);
