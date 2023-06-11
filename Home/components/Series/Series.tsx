import { FC } from 'react';

import { seriesList } from './seriesList';
import { List } from 'Base/components/List';

type Header = 'h1' | 'h2';
type SeriesPropTypes = { header?: Header };

export const Series: FC<SeriesPropTypes> = ({ header }) => (
  <List
    sectionId="series"
    titleLink="/series"
    titleText="series"
    list={seriesList}
    openNewTab={false}
    header={header}
  />
);

export default Series;
