import path from 'path';
import fs from 'fs';
import { Locale } from 'src/types/Locale';

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
  blurDataURL?: string;
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

export function getPostMetadata(
  slug: string,
  locale: Locale = 'en',
): PostMetadata {
  const postsDir = path.join(process.cwd(), 'content');
  const postPath = path.join(postsDir, slug, locale, 'metadata.json');
  const postMetadata = fs.readFileSync(postPath, 'utf8');

  return JSON.parse(postMetadata);
}

export function getNestedPostMetadata(
  folder: string,
  post: string,
  locale: Locale = 'en',
): PostMetadata {
  const postsDir = path.join(process.cwd(), 'content', folder);
  const postPath = path.join(postsDir, post, locale, 'metadata.json');
  const postMetadata = fs.readFileSync(postPath, 'utf8');

  return JSON.parse(postMetadata);
}

export function getSeriesPostMetadata(
  series: string,
  seriesItem: string,
  locale: Locale = 'en',
): PostMetadata {
  const postsDir = path.join(process.cwd(), 'content', 'series');
  const postPath = path.join(
    postsDir,
    series,
    seriesItem,
    locale,
    'metadata.json',
  );

  const postMetadata = fs.readFileSync(postPath, 'utf8');

  return JSON.parse(postMetadata);
}
