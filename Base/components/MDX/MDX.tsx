import rehypeHighlight from 'rehype-highlight';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import { PostAndDate } from 'Base/components/PostAndDate';
import { SideBySideImages } from 'Base/components/SideBySideImages';

export type Content = MDXRemoteSerializeResult<
  Record<string, unknown>,
  Record<string, string>
>;

interface MDXPropTypes {
  content: Content;
}

export const serializeMDX = (content: string) =>
  serialize(content, {
    mdxOptions: { rehypePlugins: [rehypeHighlight] },
  });

const components = {
  PostAndDate,
  SideBySideImages,
};

export const MDX = ({ content }: MDXPropTypes) => (
  <MDXRemote {...content} components={components} />
);
