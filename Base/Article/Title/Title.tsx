import { FC } from 'react';

import Balancer from 'react-wrap-balancer';

import { titleStyle } from './style';

type TitleProps = {
  text: string;
};

export const Title: FC<TitleProps> = ({ text }) => (
  <h1 className={titleStyle}>
    <Balancer>{text}</Balancer>
  </h1>
);
