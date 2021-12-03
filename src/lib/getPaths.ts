import path from 'path';
import fs from 'fs';

export function getPaths() {
  const postsDir = path.join(process.cwd(), 'content');
  const fileNames = fs.readdirSync(postsDir);

  return fileNames.map((folder) => ({
    params: {
      folder,
    },
  }));
}
