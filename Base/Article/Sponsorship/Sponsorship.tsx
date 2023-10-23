import Image, { ImageProps } from 'next/image';
import { FC } from 'react';

import { patreonImageBase64, kofiImageBase64 } from './constants';
import {
  sponsorshipWrapperStyle,
  patreonButtonStyle,
  kofiButtonStyle,
  patreonImageStyle,
  kofiImageStyle,
} from './styles';

type Style = Record<string, string>;

interface SponsorshipPrograms {
  href: string;
  style: Style;
  image: {
    src: string;
    height: ImageProps['height'];
    width: ImageProps['width'];
    alt: string;
    style: Style;
  };
  text: string;
}

const sponsorshipPrograms: SponsorshipPrograms[] = [
  {
    href: 'https://www.patreon.com/iamteekay',
    style: patreonButtonStyle,
    image: {
      src: patreonImageBase64,
      height: '40',
      width: '50',
      alt: 'Patreon Sponsorship Button',
      style: patreonImageStyle,
    },
    text: 'Become a Patron',
  },
  {
    href: 'https://ko-fi.com/teekay',
    style: kofiButtonStyle,
    image: {
      src: kofiImageBase64,
      height: '15',
      width: '24',
      alt: 'Coffee Sponsorship Button',
      style: kofiImageStyle,
    },
    text: 'Buy me a coffee',
  },
];

export const Sponsorship: FC = () => (
  <div style={sponsorshipWrapperStyle}>
    {sponsorshipPrograms.map((program) => (
      <a
        key={program.href}
        style={program.style}
        href={program.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div style={program.image.style}>
          <Image
            src={program.image.src}
            height={program.image.height}
            width={program.image.width}
            alt={program.image.alt}
            loading="lazy"
          />
        </div>
        {program.text}
      </a>
    ))}
  </div>
);
