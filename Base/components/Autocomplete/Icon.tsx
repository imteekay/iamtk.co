import Image from 'next/image';
import { FC } from 'react';

type IconPropTypes = {
  src: string;
};

export const Icon: FC<IconPropTypes> = ({ src }) => (
  <Image src={src} width={20} height={20} alt="" />
);
