import Image from 'next/image';
import { FC, CSSProperties } from 'react';

const iconStyle: CSSProperties = {
  border: '1px solid white',
  borderRadius: '50px',
  padding: '8px',
  display: 'flex',
  color: 'white',
};

type IconPropTypes = {
  src: string;
};

export const Icon: FC<IconPropTypes> = ({ src }) => (
  <div style={iconStyle}>
    <Image src={src} width={14} height={14} alt="" />
  </div>
);
