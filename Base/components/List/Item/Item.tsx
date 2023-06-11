import { FC } from 'react';

import { itemStyle, linkStyle } from './style';

export type ItemProps = {
  link: string;
  title: string;
  description: string;
  target?: string;
  rel?: string;
};

export const Item: FC<ItemProps> = ({
  link,
  title,
  description,
  target,
  rel,
}) => (
  <li style={itemStyle}>
    <strong>
      <a href={link} target={target} rel={rel} style={linkStyle}>
        {title}
      </a>
    </strong>
    : {description}
  </li>
);
