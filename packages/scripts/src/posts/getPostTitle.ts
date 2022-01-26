import path from 'path';
import fs from 'fs';

export type Locale = 'en' | 'pt-BR';

export function getPostTitle(slug: string, locale: Locale = 'en'): string {
  const postsDir = path.join(__dirname, '../../../..', 'content');
  const postPath = path.join(postsDir, slug, locale, 'metadata.json');
  const postMetadata = fs.readFileSync(postPath, 'utf8');

  return JSON.parse(postMetadata).title;
}
