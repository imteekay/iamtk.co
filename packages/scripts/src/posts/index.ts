import path from 'path';
import { mkdirSync } from 'fs';
import { writeFile } from 'fs/promises';
import { getPostTitle } from './getPostTitle';
import { getPostContent } from './getPostContent';
import { getPaths } from './getPaths';

const posts = getPaths().map((path) => ({
  title: getPostTitle(path),
  content: getPostContent(path),
}));

const dataDir = path.join(__dirname, '../../../..', 'data');

export function createPostsFile() {
  writeFile(
    path.join(dataDir, 'posts.js'),
    'export const posts = ' + JSON.stringify(posts),
  );
}

createPostsFile();
