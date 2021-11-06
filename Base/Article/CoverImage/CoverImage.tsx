import { FC } from 'react';
import Image from 'next/image';
import {
  coverImageStyle,
  figcaptionStyle,
  figcaptionLinkStyle,
} from './styles';

type CoverImagePropTypes = {
  src: string;
  width: string;
  height: string;
  alt: string;
  authorHref: string;
  authorName: string;
};

export const CoverImage: FC<CoverImagePropTypes> = ({
  src,
  width,
  height,
  alt,
  authorHref,
  authorName,
}) => (
  <div style={coverImageStyle}>
    <Image src={src} width={width} height={height} alt={alt} />
    <span style={figcaptionStyle}>
      Photo by{' '}
      <a
        href={authorHref}
        style={figcaptionLinkStyle}
        target="_blank"
        rel="noreferrer"
      >
        {authorName}
      </a>
    </span>
  </div>
);
