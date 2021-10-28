import type { NextPage } from 'next';
import { title } from './style';

type TitleProps = {
  text: string;
};

export const Title: NextPage<TitleProps> = ({ text }: TitleProps) => (
  <h1 style={title}>{text}</h1>
);
