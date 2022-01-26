import { getPostTitle } from './getPostTitle';
import { getPostContent } from './getPostContent';
import { getPaths } from './getPaths';

export const posts = getPaths().map((path) => ({
  title: getPostTitle(path),
  content: getPostContent(path),
}));
