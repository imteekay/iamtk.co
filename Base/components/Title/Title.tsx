import { FC } from 'react';
import { title } from './style';

type TitleProps = {
  text: string;
};

export const Title: FC<TitleProps> = ({ text }) => (
  <h1 style={title}>{text}</h1>
);
