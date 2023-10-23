import { FC } from 'react';

import { itemStyle, linkStyle } from './styles';

export type ResourcePropType = {
  link: string;
  title: string;
};

export const Resource: FC<ResourcePropType> = ({ link, title }) => (
  <li style={itemStyle}>
    <span>
      <a href={link} style={linkStyle}>
        {title}
      </a>
    </span>
  </li>
);
