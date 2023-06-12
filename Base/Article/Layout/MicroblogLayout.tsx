import { FC } from 'react';

import { Footer } from './Footer';
import { CoverImage } from 'Base/Article/CoverImage';
import { MicroblogLink } from 'Base/Article/HomeLink/MicroblogLink';
import { Meta } from 'Base/Article/Meta';
import { SocialLinks } from 'Base/Article/SocialLinks';
import { Title } from 'Base/Article/Title';
import { AnimationLayout } from 'Base/components/Layout/AnimationLayout';
import {
  Tag,
  AlternativeArticle as AlternativeArticleType,
  CoverImage as CoverImageType,
} from 'src/lib/getPostMetadata';

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
  <AnimationLayout>
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
  </AnimationLayout>
);
