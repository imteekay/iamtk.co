import { FC } from 'react';
import { SubstackEmbed } from 'Base/Community/SubstackEmbed';
import { Title } from 'Base/Article/Title';
import { Meta } from 'Base/Article/Meta';
import { HomeLink } from 'Base/Article/HomeLink';
import { CoverImage } from 'Base/Article/CoverImage';
import { SocialLinks } from 'Base/Article/SocialLinks';
import { Tags } from 'Base/Article/Tags';
import { Sponsorship } from 'Base/Article/Sponsorship/Sponsorship';

type Tag = {
  href: string;
  name: string;
};

type LayoutPropTypes = {
  tags: Tag[];
  title: string;
  date: string;
  showSocialLinks?: boolean;
  coverImage: {
    src: string;
    width: string;
    height: string;
    alt: string;
    authorHref: string;
    authorName: string;
  };
};

export const Layout: FC<LayoutPropTypes> = ({
  children,
  tags,
  title,
  date,
  showSocialLinks = false,
  coverImage,
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
        <Meta date={date} tags={tags} />
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
    <Sponsorship />
  </div>
);
