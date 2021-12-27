import { FC } from 'react';
import { Author } from 'Base/Article/Author';
import { Date } from 'Base/Article/Date';
import { Tags } from 'Base/Article/Tags';
import { TagPropTypes } from 'Base/Article/Tag';
import { AlternativeArticle } from 'Base/Article/AlternativeArticle';
import { AlternativeArticle as AlternativeArticleType } from 'src/lib/getPostMetadata';
import { metaStyle } from './styles';

type MetaPropTypes = {
  date: string;
  tags: TagPropTypes[];
  alternativeArticle: AlternativeArticleType;
};

export const Meta: FC<MetaPropTypes> = ({ date, tags, alternativeArticle }) => (
  <div style={metaStyle}>
    {date && <Author />}
    {date && <Date date={date} />}
    {tags.length > 0 && <Tags tags={tags} hasTagIcon />}
    {alternativeArticle ? (
      <AlternativeArticle alternativeArticle={alternativeArticle} />
    ) : null}
  </div>
);
