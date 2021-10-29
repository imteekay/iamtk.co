import type { NextPage } from 'next';
import { itemStyle, timeWrapperStyle, linkStyle } from './style';

type PostPropType = { datetime: string; link: string; title: string };

export const Post: NextPage<PostPropType> = ({
  datetime,
  link,
  title,
}: PostPropType) => (
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
