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

export function getPaths() {
  const postsDir = path.join(process.cwd(), 'content');
  const postsNames = fs.readdirSync(postsDir);

  return removeSeries(postsNames, ['series', 'bookshelf']).map((slug) => ({
    params: {
      slug,
    },
  }));
}

export function getNestedPaths(folder: FolderTypes) {
  const postsDir = path.join(process.cwd(), 'content', folder);
  const fileNames = fs.readdirSync(postsDir);

  return fileNames.map((name) => ({
    params: {
      [folderMapper[folder]]: name,
    },
  }));
}

export function getSeriesPaths() {
  const seriesDir = path.join(process.cwd(), 'content', 'series');
  const seriesNames = fs.readdirSync(seriesDir);

  return seriesNames.reduce((acc: Params[], seriesName: string) => {
    const seriesDir = path.join(process.cwd(), 'content', 'series', seriesName);
    const seriesPosts = fs.readdirSync(seriesDir);
    const series = removeSeries(seriesPosts, ['en']).map((series) => ({
      params: {
        series: seriesName,
        seriesItem: series,
      },
    }));

    return [...acc, ...series];
  }, []);
}
