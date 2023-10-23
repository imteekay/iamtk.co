import { css } from '@emotion/css';

export const titleStyle = css`
  letter-spacing: 0.01em;
  font-size: 2em;
  font-style: normal;
  font-weight: 700;
  color: white;
  margin-top: 0;
  margin-bottom: 0;
  text-transform: none;
  line-height: 1.25;
  display: block;

  @media (prefers-color-scheme: light) {
    color: #333;
  }
`;
