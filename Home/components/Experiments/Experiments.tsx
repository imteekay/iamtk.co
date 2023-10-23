import { FC } from 'react';

import { experimentsList } from './experimentsList';
import { List } from 'Base/components/List';

export const Experiments: FC = () => (
  <List
    sectionId="experiments"
    titleLink="/experiments"
    titleText="experiments"
    list={experimentsList}
    openNewTab={false}
  />
);
