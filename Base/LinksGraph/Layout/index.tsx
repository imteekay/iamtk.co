import { FC } from 'react';

import { css } from '@emotion/css';

type LayoutPropTypes = {
  title?: string;
};

const titleStyle = css`
  letter-spacing: 0.01em;
  font-size: 2em;
  font-style: normal;
  font-weight: 700;
  color: white;
  display: block;
  margin-top: 0;
  margin-bottom: 0;
  text-transform: none;
  line-height: 1.25;

  @media (prefers-color-scheme: light) {
    color: #333;
  }
`;

export const Layout: FC<LayoutPropTypes> = ({ children, title }) => (
  <div className="content">
    <article
      className="post"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      {title ? (
        <header>
          <p className={titleStyle}>{title}</p>
        </header>
      ) : null}
      {children}
    </article>
  </div>
);
