import { FC } from 'react';

import { titleStyle } from './style';

type TitleProps = {
  text: string;
};

export const Title: FC<TitleProps> = ({ text }) => (
  <h1 className={titleStyle}>{text}</h1>
);
