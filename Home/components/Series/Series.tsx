import { FC } from 'react';
import { seriesList } from './seriesList';
import { List } from '../../../Base/components/List';

export const Series: FC = () => (
  <List sectionId="series" titleLink="" titleText="series" list={seriesList} />
);
