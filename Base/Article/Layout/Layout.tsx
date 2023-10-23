import { FC } from 'react';

import { CoverImage } from 'Base/Article/CoverImage';
import { HomeLink } from 'Base/Article/HomeLink';
import { Footer } from 'Base/Article/Layout/Footer';
import { Meta } from 'Base/Article/Meta';
import { SocialLinks } from 'Base/Article/SocialLinks';
import { Title } from 'Base/Article/Title';
import { AnimationLayout } from 'Base/components/Layout/AnimationLayout';
import { Navbar } from 'Base/components/Navbar';
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
  coverImage: CoverImageType;
  minutes: number;
};

export const Layout: FC<LayoutPropTypes> = ({
  children,
  tags,
  title,
  date,
  showSocialLinks = false,
  coverImage,
  alternativeArticle,
  minutes,
}) => (
  <>
    <Navbar />
    <AnimationLayout>
      <div className="content">
        <HomeLink />
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

          {coverImage.src && (
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
  </>
);
