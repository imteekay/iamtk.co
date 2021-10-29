import type { NextPage } from 'next';
import { projectsList } from './projectsList';
import { List } from '../../../Base/components/List';

export const Projects: NextPage = () => (
  <List
    sectionId={'projects'}
    titleLink={'https://github.com/leandrotk'}
    titleText={'projects'}
    list={projectsList}
  />
);
