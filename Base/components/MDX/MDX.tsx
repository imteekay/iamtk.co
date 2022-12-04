import rehypeHighlight from 'rehype-highlight';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import TweetEmbed from 'react-tweet-embed';

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

import { useState } from 'react';

const SmoothlyRender = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <button onClick={() => setLoading((l) => !l)}>test</button>
      <div
        style={{
          opacity: loading ? '1' : '0',
          'transition-timing-function': 'ease',
          'transition-duration': '0.6s',
          'transition-delay': '0.124927s',
        }}
      >
        {children}
      </div>
    </>
  );
};

const components = {
  PostAndDate,
  SideBySideImages,
  TweetEmbed,
  SmoothlyRender,
};

export const MDX = ({ content }: MDXPropTypes) => (
  <MDXRemote {...content} components={components} />
);
