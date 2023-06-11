import { FC } from 'react';

import { dateStyle } from './styles';

type DatePropTypes = {
  date: string;
};

export const Date: FC<DatePropTypes> = ({ date }) => (
  <div style={dateStyle}>
    <time dateTime={`${date}T00:00:00.000Z`} itemProp="datePublished">
      {date}
    </time>
  </div>
);
