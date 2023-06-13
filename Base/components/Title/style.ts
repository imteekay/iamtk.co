import { css } from '@emotion/css';

export const titleStyle = css`
  letter-spacing: 0.01em;
  font-size: 2.2em;
  font-style: normal;
  font-weight: 700;
  color: white;
  margin-top: 3rem;
  margin-bottom: 0.1rem;
  display: block;

  @media (prefers-color-scheme: light) {
    color: #333;
  }
`;
