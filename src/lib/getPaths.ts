import path from 'path';
import fs from 'fs';

type SeriesParams = {
  series: string;
  seriesItem: string;
};

type Params = {
  params: SeriesParams;
};

function removeSeries(postsNames: string[], filterList: string[]) {
  console.log(
    filterList,
    postsNames,
    postsNames.filter((post) => !filterList.includes(post)),
  );
  return postsNames.filter((post) => !filterList.includes(post));
}

export function getPaths() {
  const postsDir = path.join(process.cwd(), 'content');
  const postsNames = fs.readdirSync(postsDir);

  return removeSeries(postsNames, ['series']).map((slug) => ({
    params: {
      slug,
    },
  }));
}

export function getNestedPaths() {
  const postsDir = path.join(process.cwd(), 'content', 'series');
  const fileNames = fs.readdirSync(postsDir);

  return fileNames.map((series) => ({
    params: {
      series,
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
