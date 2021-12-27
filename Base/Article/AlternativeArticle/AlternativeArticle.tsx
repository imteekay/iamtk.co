import { FC } from 'react';
import Link from 'next/link';
import { AlternativeArticle as AlternativeArticleType } from 'src/lib/getPostMetadata';

export const alternativeArticleStyle = {
  fontSize: '0.85rem',
  display: 'inline',
};

type AlternativeArticlePropTypes = {
  alternativeArticle: AlternativeArticleType;
};

export const AlternativeArticle: FC<AlternativeArticlePropTypes> = ({
  alternativeArticle,
}) => {
  const linkText =
    alternativeArticle.language === 'pt-BR'
      ? '🇧🇷 Leia em Português'
      : '🇬🇧 Read in English';

  return (
    <div style={alternativeArticleStyle}>
      &nbsp;| <Link href={alternativeArticle.url}>{linkText}</Link>
    </div>
  );
};