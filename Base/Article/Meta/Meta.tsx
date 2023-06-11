import { FC } from 'react';

import { css } from '@emotion/css';

import { metaStyle } from './styles';
import { AlternativeArticle } from 'Base/Article/AlternativeArticle';
import { Author } from 'Base/Article/Author';
import { Date } from 'Base/Article/Date';
import { TagPropTypes } from 'Base/Article/Tag';
import { Tags } from 'Base/Article/Tags';
import { AlternativeArticle as AlternativeArticleType } from 'src/lib/getPostMetadata';

type MetaPropTypes = {
  date: string;
  tags: TagPropTypes[];
  alternativeArticle: AlternativeArticleType;
  minutes: number;
};

export const Meta: FC<MetaPropTypes> = ({
  date,
  tags,
  alternativeArticle,
  minutes,
}) => (
  <div style={metaStyle}>
    {date && <Author />}
    {date && <Date date={date} />}
    {date && minutes ? (
      <span
        className={css`
          font-size: 0.85rem;
          margin-right: 8px;
        `}
      >
        • {minutes} min read
      </span>
    ) : null}
    <div>
      {tags.length > 0 && <Tags tags={tags} hasTagIcon />}
      {alternativeArticle ? (
        <AlternativeArticle alternativeArticle={alternativeArticle} />
      ) : null}
    </div>
  </div>
);
