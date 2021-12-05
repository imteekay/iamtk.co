import path from 'path';
import fs from 'fs';

type Tag = {
  href: '/tags/javascript';
  name: 'javascript';
};

type CoverImage = {
  src: string;
  width: string;
  height: string;
  alt: string;
  authorHref: string;
  authorName: string;
};

export type PostMetadata = {
  title: string;
  description: string;
  date: string;
  tags: Tag[];
  coverImage: CoverImage;
};

export function getPostMetadata(
  slug: string,
  locale: string = 'en',
): PostMetadata {
  const postsDir = path.join(process.cwd(), 'content');
  const postPath = path.join(postsDir, slug, locale, 'metadata.json');
  const postMetadata = fs.readFileSync(postPath, 'utf8');

  return JSON.parse(postMetadata);
}

export function getNestedPostMetadata(
  folder: string,
  post: string,
  locale: string = 'en',
): PostMetadata {
  const postsDir = path.join(process.cwd(), 'content', folder);
  const postPath = path.join(postsDir, post, locale, 'metadata.json');
  const postMetadata = fs.readFileSync(postPath, 'utf8');

  return JSON.parse(postMetadata);
}

export function getSeriesPostMetadata(
  series: string,
  seriesItem: string,
  locale: string = 'en',
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
