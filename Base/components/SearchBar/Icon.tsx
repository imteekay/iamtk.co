import Image from 'next/image';
import { FC, CSSProperties } from 'react';

const iconStyle: CSSProperties = {
  position: 'relative',
  top: '2px',
};

type IconPropTypes = {
  src: string;
};

export const Icon: FC<IconPropTypes> = ({ src }) => (
  <div style={iconStyle}>
    <Image src={src} width={16} height={16} alt="" />
  </div>
);
