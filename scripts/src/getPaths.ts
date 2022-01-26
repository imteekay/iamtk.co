import path from 'path';
import fs from 'fs';

type SeriesParams = {
  series: string;
  seriesItem: string;
};

type Params = {
  params: SeriesParams;
};

const folderMapper = {
  bookshelf: 'book',
  series: 'series',
  tags: 'tag',
};

type FolderTypes = keyof typeof folderMapper;

function removeSeries(postsNames: string[], filterList: string[]) {
  return postsNames.filter((post) => !filterList.includes(post));
}

export function getPaths(locale: string = 'en') {
  const postsDir = path.join(__dirname, '../..', 'content');
  const postsNames = fs.readdirSync(postsDir);
  const postsToGeneratePath = postsNames.filter((postName) =>
    fs.existsSync(path.join(postsDir, postName, locale)),
  );

  return postsToGeneratePath;
}
