import { FC } from 'react';
import { Title } from 'Base/Article/Title';
import { Meta } from 'Base/Article/Meta';
import { MicroblogLink } from 'Base/Article/HomeLink/MicroblogLink';
import { CoverImage } from 'Base/Article/CoverImage';
import { SocialLinks } from 'Base/Article/SocialLinks';
import {
  Tag,
  AlternativeArticle as AlternativeArticleType,
  CoverImage as CoverImageType,
} from 'src/lib/getPostMetadata';

import { Footer } from './Footer';

type LayoutPropTypes = {
  tags: Tag[];
  title: string;
  date: string;
  showSocialLinks?: boolean;
  alternativeArticle: AlternativeArticleType;
  coverImage?: CoverImageType;
  minutes: number;
};

export const MicroblogLayout: FC<LayoutPropTypes> = ({
  children,
  tags,
  title,
  date,
  showSocialLinks = false,
  coverImage,
  alternativeArticle,
  minutes,
}) => (
  <div className="content">
    <MicroblogLink />
    <article
      className="post"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <header>
        <Title text={title} />
        <Meta
          date={date}
          tags={tags}
          alternativeArticle={alternativeArticle}
          minutes={minutes}
        />
      </header>

      {coverImage?.src && (
        <CoverImage
          src={coverImage.src}
          width={coverImage.width}
          height={coverImage.height}
          alt={coverImage.alt}
          authorHref={coverImage.authorHref}
          authorName={coverImage.authorName}
          blurDataURL={coverImage.blurDataURL}
        />
      )}

      {children}
      {showSocialLinks && <SocialLinks />}
    </article>
    <Footer tags={tags} />
  </div>
);