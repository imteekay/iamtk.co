import { FC } from 'react';
import { motion } from 'framer-motion';
import { Title } from 'Base/Article/Title';
import { Meta } from 'Base/Article/Meta';
import { HomeLink } from 'Base/Article/HomeLink';
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
  <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}
    transition={{
      type: 'spring',
      stiffness: 260,
      damping: 20,
    }}
  >
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
  </motion.div>
);
