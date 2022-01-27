import path from 'path';
import { writeFile } from 'fs/promises';
import { getPostTitle, getSeriesPostTitle } from './getPostTitle';
import { getPostContent, getSeriesPostContent } from './getPostContent';
import { getPaths, getSeriesPaths } from './getPaths';

const posts = getPaths().map((path) => ({
  title: getPostTitle(path),
  content: getPostContent(path),
}));

const seriesPosts = getSeriesPaths().map(({ series, seriesItem }) => ({
  title: getSeriesPostTitle(series, seriesItem),
  content: getSeriesPostContent(series, seriesItem),
}));

const allPosts = [...posts, ...seriesPosts];
const dataDir = path.join(__dirname, '../../../..', 'data');

export function createPostsFile() {
  writeFile(
    path.join(dataDir, 'posts.js'),
    'export const posts = ' + JSON.stringify(allPosts),
  );
}

createPostsFile();
