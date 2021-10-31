import { FC } from 'react';
import { dateStyle } from './styles';

type ArticleDatePropTypes = {
  date: string;
};

export const ArticleDate: FC<ArticleDatePropTypes> = ({ date }) => (
  <div style={dateStyle}>
    <time dateTime={`${date}T00:00:00.000Z`} itemProp="datePublished">
      {date}
    </time>
  </div>
);
