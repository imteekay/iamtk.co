import { CSSProperties, FC } from 'react';

import { NewsletterAlert } from '../Newsletter/NewsletterAlert';

import { CoverImage } from 'Base/Article/CoverImage';
import { HomeLink } from 'Base/Article/HomeLink';
import { Footer } from 'Base/Article/Layout/Footer';
import { Meta } from 'Base/Article/Meta';
import { SocialLinks } from 'Base/Article/SocialLinks';
import { Title } from 'Base/Article/Title';
import { AnimationLayout } from 'Base/components/Layout/AnimationLayout';
import { Navbar } from 'Base/components/Navbar';
import { useSettings } from 'Base/components/Settings';
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
  applySettings?: boolean;
  alternativeArticle: AlternativeArticleType;
  coverImage?: CoverImageType;
  minutes: number;
};

export const Layout: FC<LayoutPropTypes> = ({
  children,
  tags,
  title,
  date,
  showSocialLinks = false,
  applySettings = true,
  coverImage,
  alternativeArticle,
  minutes,
}) => {
  const { settings } = useSettings();

  const contentStyle = applySettings
    ? ({
        fontSize: `${settings.fontSize}px`,
        '--content-max-width': `${settings.contentWidth}px`,
      } as CSSProperties)
    : undefined;

  return (
    <>
      <Navbar />
      <AnimationLayout>
        <div className="content" style={contentStyle}>
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
            <NewsletterAlert />
            {showSocialLinks && <SocialLinks />}
          </article>
          <Footer tags={tags} />
        </div>
      </AnimationLayout>
    </>
  );
};
