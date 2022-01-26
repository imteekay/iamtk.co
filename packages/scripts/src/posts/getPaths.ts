import path from 'path';
import fs from 'fs';

export function getPaths(locale: string = 'en') {
  const postsDir = path.join(__dirname, '../../../..', 'content');
  const postsNames = fs.readdirSync(postsDir);
  return postsNames.filter((postName) =>
    fs.existsSync(path.join(postsDir, postName, locale)),
  );
}
