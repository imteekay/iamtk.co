import Link from 'next/link';
import { FC } from 'react';

import { css } from '@emotion/css';

import { itemStyle } from './style';

type PostPropType = { datetime: string; link: string; title: string };

const datetimeStyle = css`
  display: block;
  font-size: 14px;
  color: #c1c1c1;
  min-width: 100px;
  margin-right: 16px;

  @media (prefers-color-scheme: light) {
    color: #2f2f2f;
  }
`;

export const Post: FC<PostPropType> = ({ datetime, link, title }) => (
  <li style={itemStyle}>
    <div className={datetimeStyle}>
      <time>{datetime}</time>
    </div>
    <span>
      <Link href={link}>{title}</Link>
    </span>
  </li>
);
