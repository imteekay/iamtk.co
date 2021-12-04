import { FC } from 'react';
import { titleStyle } from './style';

type TitleProps = {
  text: string;
};

export const Title: FC<TitleProps> = ({ text }) => (
  <h1 style={titleStyle}>{text}</h1>
);
