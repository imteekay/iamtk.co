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

export function readContent() {
  const postsDir = path.join(process.cwd(), 'content');
  const postsNames = fs.readdirSync(postsDir);
  const postsToGeneratePath = postsNames.filter((postName) => {
    const postsDir = path.join(process.cwd(), 'content', postName, Language.EN);
    return fs.existsSync(postsDir);
  });

  console.log();
  console.log('==== postsToGeneratePath ====');
  console.log(postsToGeneratePath);
  console.log('==== postsToGeneratePath ====');
  console.log();

  getSeriesPaths();
}

function removeSeries(postsNames: string[], filterList: string[]) {
  return postsNames.filter((post) => !filterList.includes(post));
}

export function getSeriesPaths(locale: string = Language.EN) {
  const seriesDir = path.join(process.cwd(), 'content', 'series');
  const seriesNames = fs.readdirSync(seriesDir);
  const seriesPosts = seriesNames.reduce(
    (acc: string[], seriesName: string) => {
      const seriesDir = path.join(
        process.cwd(),
        'content',
        'series',
        seriesName,
      );
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

      const series = removeSeries(filesToGeneratePath, Languages);

      return [...acc, ...series];
    },
    [],
  );
  console.log();
  console.log('====== series ======');
  console.log(seriesPosts);
  console.log('====== series ======');
  console.log();
}
