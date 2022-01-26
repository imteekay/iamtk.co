import path from 'path';
import fs from 'fs';

export type Locale = 'en' | 'pt-BR';

export type Tag = {
  href: '/tags/javascript';
  name: 'javascript';
};

export type CoverImage = {
  src: string;
  width: string;
  height: string;
  alt: string;
  authorHref: string;
  authorName: string;
};

export type AlternativeArticle = {
  url: string;
  language: string;
};

export type PostMetadata = {
  title: string;
  description: string;
  date: string;
  tags: Tag[];
  coverImage: CoverImage;
  alternativeArticle: AlternativeArticle;
};

export function getPostTitle(slug: string, locale: Locale = 'en'): string {
  const postsDir = path.join(__dirname, '../../../..', 'content');
  const postPath = path.join(postsDir, slug, locale, 'metadata.json');
  const postMetadata = fs.readFileSync(postPath, 'utf8');

  return JSON.parse(postMetadata).title;
}
