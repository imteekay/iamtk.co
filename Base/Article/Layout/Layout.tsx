import { FC } from 'react';
import { SubstackEmbed } from 'Base/Community/SubstackEmbed';
import { Title } from 'Base/Article/Title';
import { Meta } from 'Base/Article/Meta';
import { HomeLink } from 'Base/Article/HomeLink';
import { CoverImage } from 'Base/Article/CoverImage';
import { SocialLinks, ShareButtons } from 'Base/Article/SocialLinks';
import { Tags } from 'Base/Article/Tags';
import { Sponsorship } from 'Base/Article/Sponsorship/Sponsorship';
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
};

export const Layout: FC<LayoutPropTypes> = ({
  children,
  tags,
  title,
  date,
  showSocialLinks = false,
  coverImage,
  alternativeArticle,
}) => (
  <div className="content">
    <HomeLink />
    <article
      className="post"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <header>
        <Title text={title} />
        <Meta date={date} tags={tags} alternativeArticle={alternativeArticle} />
      </header>

      {coverImage.src && (
        <CoverImage
          src={coverImage.src}
          width={coverImage.width}
          height={coverImage.height}
          alt={coverImage.alt}
          authorHref={coverImage.authorHref}
          authorName={coverImage.authorName}
        />
      )}

      {children}
      {showSocialLinks && <SocialLinks />}
    </article>

    <SubstackEmbed />
    <Tags tags={tags} />
    <ShareButtons />
    <Sponsorship />
  </div>
);
