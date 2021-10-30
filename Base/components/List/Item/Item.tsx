import { FC } from 'react';
import { itemStyle, linkStyle } from './style';

export type ItemProps = {
  link: string;
  title: string;
  description: string;
};

export const Item: FC<ItemProps> = ({ link, title, description }) => (
  <li style={itemStyle}>
    <strong>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        {title}
      </a>
    </strong>
    : {description}
  </li>
);
