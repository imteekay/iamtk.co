import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import rehypeHighlight from 'rehype-highlight';
import { PostAndDate } from 'Base/components/PostAndDate';
import { serialize } from 'next-mdx-remote/serialize';

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
};

export const MDX = ({ content }: MDXPropTypes) => (
  <MDXRemote {...content} components={components} />
);
