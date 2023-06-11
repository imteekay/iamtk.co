import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { css } from '@emotion/css';

import { dateStyle, titleStyle } from './styles';
import { ShareButtons } from 'Base/Article/SocialLinks';

type PostPropTypes = {
  id: string;
  title: string;
  slug: string;
  date: string;
  description: string;
  image?: {
    url: string;
    width: ImageProps['width'];
    height: ImageProps['height'];
    alt: string;
  };
};

const postDescriptionStyle = css`
  margin-bottom: 16px;
`;

const linkStyle = css`
  text-decoration: none;
  background: none;
  color: white;
  margin-bottom: 20px;
  display: block;

  @media (prefers-color-scheme: light) {
    color: #333;
  }
`;

export const Post: FC<PostPropTypes> = ({
  id,
  title,
  slug,
  date,
  description,
  image,
}) => (
  <>
    <Link href={`/microblog/${slug}`} passHref className={linkStyle}>
      <h2 style={titleStyle}>{title}</h2>
      <p style={dateStyle}>{date}</p>
      {image ? (
        <Image
          src={image.url}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      ) : null}
      <div
        className={postDescriptionStyle}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </Link>
    <ShareButtons title={title} anchor={id} />
  </>
);
