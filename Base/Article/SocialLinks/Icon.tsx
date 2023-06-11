import Image from 'next/image';
import { FC } from 'react';

import { css } from '@emotion/css';

const iconStyle = css`
  border: 1px solid white;
  border-radius: 50px;
  padding: 8px;
  display: flex;
  color: white;

  @media (prefers-color-scheme: light) {
    color: #333;
    background: #333;

    &:hover {
      background: #333;
    }
  }
`;

type IconPropTypes = {
  src: string;
};

export const Icon: FC<IconPropTypes> = ({ src }) => (
  <div className={iconStyle}>
    <Image src={src} width={14} height={14} alt="" />
  </div>
);
