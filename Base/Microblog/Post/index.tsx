import { FC } from 'react';
import Image from 'next/image';
import { dateStyle, titleStyle } from './styles';

type PostPropTypes = {
  title?: string;
  date: string;
  description: string;
  image?: {
    url: string;
    width: string;
    height: string;
    alt: string;
  };
};

export const Post: FC<PostPropTypes> = ({
  title,
  date,
  description,
  image,
}) => (
  <>
    {title ? <h2 style={titleStyle}>{title}</h2> : null}
    <p style={dateStyle}>{date}</p>
    {image ? (
      <Image
        src={image.url}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
    ) : null}
    <div dangerouslySetInnerHTML={{ __html: description }} />
  </>
);
