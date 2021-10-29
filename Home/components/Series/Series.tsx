import type { NextPage } from 'next';
import { seriesList } from './seriesList';
import { List } from '../../../Base/components/List';

export const Series: NextPage = () => (
  <List sectionId="series" titleLink="" titleText="series" list={seriesList} />
);
