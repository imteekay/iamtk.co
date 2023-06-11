import { FC } from 'react';

import { itemStyle, timeWrapperStyle, linkStyle } from './style';

export type PostPropType = { datetime: string; link: string; title: string };

export const Post: FC<PostPropType> = ({ datetime, link, title }) => (
  <li style={itemStyle}>
    <div style={timeWrapperStyle}>
      <time>{datetime}</time>
    </div>
    <span>
      <a href={link} style={linkStyle}>
        {title}
      </a>
    </span>
  </li>
);
