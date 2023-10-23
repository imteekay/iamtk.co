import fs from 'fs';
import path from 'path';
import readingTime from 'reading-time';

import { Language } from './languages';
import { Locale } from 'src/types/Locale';

export function getPostContent(slug: string, locale: string = Language.EN) {
  const postsDir = path.join(process.cwd(), 'content');
  const postPath = path.join(postsDir, slug, locale, 'index.mdx');
  const postContent = fs.readFileSync(postPath, 'utf8');
  const { minutes } = readingTime(postContent);

  return {
    postContent,
    minutes: Math.round(minutes),
  };
}

export function getNestedPostContent(
  folder: string,
  post: string,
  locale: Locale = Language.EN,
) {
  const postsDir = path.join(process.cwd(), 'content', folder);
  const postPath = path.join(postsDir, post, locale, 'index.mdx');
  const postContent = fs.readFileSync(postPath, 'utf8');
  const { minutes } = readingTime(postContent);

  return {
    postContent,
    minutes: Math.round(minutes),
  };
}

export function getSeriesPostContent(
  series: string,
  seriesItem: string,
  locale: Locale = Language.EN,
) {
  const postsDir = path.join(process.cwd(), 'content', 'series');
  const postPath = path.join(postsDir, series, seriesItem, locale, 'index.mdx');
  const postContent = fs.readFileSync(postPath, 'utf8');
  const { minutes } = readingTime(postContent);

  return {
    postContent,
    minutes: Math.round(minutes),
  };
}
