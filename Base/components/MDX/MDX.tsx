import React from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { InlineMath, BlockMath } from 'react-katex';
import TweetEmbed from 'react-tweet-embed';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

import { PostAndDate } from 'Base/components/PostAndDate';
import { SideBySideImages } from 'Base/components/SideBySideImages';
import { SideBySideVideos } from 'Base/components/SideBySideVideos';
import { SmoothRender } from 'Base/components/SmoothRender';
import { Venn } from 'Base/components/Venn';

/** Coerce MDX children to a string so KaTeX receives a string (it throws on non-string). */
function mathChildrenToString(children: React.ReactNode): string {
  if (typeof children === 'string') return children;
  if (typeof children === 'number') return String(children);
  if (children == null) return '';
  if (Array.isArray(children)) return children.map(mathChildrenToString).join('');
  if (React.isValidElement(children) && children.props?.children != null) {
    return mathChildrenToString(children.props.children);
  }
  return String(children);
}

/** Wrapper so InlineMath always gets a string (MDX can pass React nodes as children). */
const SafeInlineMath = (props: { math?: string; children?: React.ReactNode }) => (
  <InlineMath math={props.math ?? mathChildrenToString(props.children)} />
);

/** Wrapper so BlockMath always gets a string (MDX can pass React nodes as children). */
const SafeBlockMath = (props: { math?: string; children?: React.ReactNode }) => (
  <BlockMath math={props.math ?? mathChildrenToString(props.children)} />
);

export type Content = MDXRemoteSerializeResult<
  Record<string, unknown>,
  Record<string, unknown>
>;

interface MDXPropTypes {
  content: Content;
}

export const serializeMDX = (content: string) =>
  serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
      remarkPlugins: [remarkGfm],
    },
  });

const components = {
  PostAndDate,
  SideBySideImages,
  TweetEmbed,
  SmoothRender,
  SideBySideVideos,
  InlineMath: SafeInlineMath,
  BlockMath: SafeBlockMath,
  Venn,
};

export const MDX = ({ content }: MDXPropTypes) => (
  // @ts-expect-error: components render correctly
  <MDXRemote {...content} components={components} />
);
