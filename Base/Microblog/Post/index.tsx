import { FC } from 'react';
import Image from 'next/image';
import { css } from '@emotion/css';
import { ShareButtons } from 'Base/Article/SocialLinks';
import { dateStyle, titleStyle } from './styles';

type PostPropTypes = {
  id: string;
  title: string;
  date: string;
  description: string;
  image?: {
    url: string;
    width: string;
    height: string;
    alt: string;
  };
};

const postDescriptionStyle = css`
  margin-bottom: 16px;
`;

export const Post: FC<PostPropTypes> = ({
  id,
  title,
  date,
  description,
  image,
}) => (
  <>
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
    <ShareButtons title={title} anchor={id} />
  </>
);
