import { css } from '@emotion/css';

export const Venn = () => (
  <div
    className={css`
      text-align: center;
    `}
  >
    Event A
    <span
      className={css`
        font-size: 80px;
      `}
    >
      &#9901;
    </span>
    Event B
  </div>
);
