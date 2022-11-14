import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { PostAndDate } from 'Base/components/PostAndDate';

type Content = MDXRemoteSerializeResult<
  Record<string, unknown>,
  Record<string, string>
>;

interface MDXPropTypes {
  content: Content;
}

const components = {
  PostAndDate,
};

export const MDX = ({ content }: MDXPropTypes) => (
  <MDXRemote {...content} components={components} />
);
