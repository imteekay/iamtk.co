import type { NextPage } from 'next';
import { itemStyle, linkStyle } from './style';

export type ItemProps = {
  link: string;
  title: string;
  description: string;
};

export const Item: NextPage<ItemProps> = ({
  link,
  title,
  description,
}: ItemProps) => (
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
