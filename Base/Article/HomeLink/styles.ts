import { css } from '@emotion/css';

export const homeLinkStyle = css`
  text-decoration: none;
  background: none;
  color: white;
  margin-bottom: 20px;
  display: block;

  html[data-theme='light'] & {
    color: #333;
  }
`;

export const iconStyle = css`
  margin-right: 8px;
`;
