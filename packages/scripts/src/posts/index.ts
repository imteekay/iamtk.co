import path from 'path';
import { writeFile } from 'fs/promises';
import {
  getNestedPostMetadata,
  getPostTitle,
  getSeriesPostTitle,
} from './getPostTitle';

import { getNestedPaths, getPaths, getSeriesPaths } from './getPaths';
import {
  getPostContent,
  getSeriesPostContent,
  getMarkdownPostContent,
  getMarkdownSeriesPostContent,
  getNestedPostContent,
} from './getPostContent';

const dataDir = path.join(__dirname, '../../../..', 'data');

export function createPostsFile() {
  const posts = getPaths().map((path) => ({
    title: getPostTitle(path),
    content: getPostContent(path),
  }));

  const seriesPosts = getSeriesPaths().map(({ series, seriesItem }) => ({
    title: getSeriesPostTitle(series, seriesItem),
    content: getSeriesPostContent(series, seriesItem),
  }));

  const allPosts = [...posts, ...seriesPosts];

  writeFile(
    path.join(dataDir, 'posts.js'),
    'export const posts = ' + JSON.stringify(allPosts),
  );
}

export function createMarkdownPostsFile() {
  const posts = getPaths().map((path) => ({
    url: `/${path}`,
    title: getPostTitle(path),
    content: getMarkdownPostContent(path),
  }));

  const seriesPages = getNestedPaths('series').map((series) => ({
    url: `/series/${series}`,
    title: getNestedPostMetadata('series', series),
    content: getNestedPostContent('series', series),
  }));

  const seriesPosts = getSeriesPaths().map(({ series, seriesItem }) => ({
    url: `/series/${series}/${seriesItem}`,
    title: getSeriesPostTitle(series, seriesItem),
    content: getMarkdownSeriesPostContent(series, seriesItem),
  }));

  const allPosts = [...posts, ...seriesPages, ...seriesPosts];

  writeFile(
    path.join(dataDir, 'markdown-posts.js'),
    'export const posts = ' + JSON.stringify(allPosts),
  );
}

createPostsFile();
createMarkdownPostsFile();
