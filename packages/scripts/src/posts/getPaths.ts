import path from 'path';
import fs from 'fs';

type SeriesParams = {
  series: string;
  seriesItem: string;
};

const folderMapper = {
  series: 'series',
};

type FolderTypes = keyof typeof folderMapper;

function removeSeries(postsNames: string[], filterList: string[]) {
  return postsNames.filter((post) => !filterList.includes(post));
}

export function getPaths(locale: string = 'en') {
  const postsDir = path.join(__dirname, '../../../..', 'content');
  const postsNames = fs.readdirSync(postsDir);
  return postsNames.filter((postName) =>
    fs.existsSync(path.join(postsDir, postName, locale)),
  );
}

export function getNestedPaths(folder: FolderTypes) {
  const postsDir = path.join(__dirname, '../../../..', 'content', folder);
  return fs.readdirSync(postsDir);
}

export function getSeriesPaths() {
  const seriesDir = path.join(__dirname, '../../../..', 'content', 'series');
  const seriesNames = fs.readdirSync(seriesDir);

  return seriesNames.reduce((acc: SeriesParams[], seriesName: string) => {
    const seriesDir = path.join(
      __dirname,
      '../../../..',
      'content',
      'series',
      seriesName,
    );
    const seriesPosts = fs.readdirSync(seriesDir);
    const series = removeSeries(seriesPosts, ['en', 'pt-BR']).map((series) => ({
      series: seriesName,
      seriesItem: series,
    }));

    return [...acc, ...series];
  }, []);
}
