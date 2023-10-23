import fs from 'fs';
import path from 'path';

import { Language, Languages } from './languages';

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
  microblog: 'microblog',
  notes: 'notes',
};

type FolderTypes = keyof typeof folderMapper;

function removeSeries(postsNames: string[], filterList: string[]) {
  return postsNames.filter((post) => !filterList.includes(post));
}

export function getPaths(locale: string = Language.EN) {
  const postsDir = path.join(process.cwd(), 'content');
  const postsNames = fs.readdirSync(postsDir);
  const postsToGeneratePath = postsNames.filter((postName) => {
    const postsDir = path.join(process.cwd(), 'content', postName, locale);
    return fs.existsSync(postsDir);
  });

  return postsToGeneratePath.map((slug) => ({
    params: {
      slug,
    },
  }));
}

export function getNestedPaths(
  folder: FolderTypes,
  locale: string = Language.EN,
) {
  const postsDir = path.join(process.cwd(), 'content', folder);
  const fileNames = fs.readdirSync(postsDir);
  const filessToGeneratePath = fileNames.filter((fileName) => {
    const postsDir = path.join(
      process.cwd(),
      'content',
      folder,
      fileName,
      locale,
    );
    return fs.existsSync(postsDir);
  });

  return filessToGeneratePath.map((name) => ({
    params: {
      [folderMapper[folder]]: name,
    },
  }));
}

export function getSeriesPaths(locale: string = Language.EN) {
  const seriesDir = path.join(process.cwd(), 'content', 'series');
  const seriesNames = fs.readdirSync(seriesDir);

  return seriesNames.reduce((acc: Params[], seriesName: string) => {
    const seriesDir = path.join(process.cwd(), 'content', 'series', seriesName);
    const seriesPosts = fs.readdirSync(seriesDir);

    const filesToGeneratePath = removeSeries(seriesPosts, Languages).filter(
      (seriesPost) => {
        const postsDir = path.join(
          process.cwd(),
          'content',
          'series',
          seriesName,
          seriesPost,
          locale,
        );

        return fs.existsSync(postsDir);
      },
    );

    const series = removeSeries(filesToGeneratePath, Languages).map(
      (series) => ({
        params: {
          series: seriesName,
          seriesItem: series,
        },
      }),
    );

    return [...acc, ...series];
  }, []);
}
