import { FC } from 'react';
import { projectsList } from './projectsList';
import { List } from '../../../Base/components/List';

export const Projects: FC = () => (
  <List
    sectionId="projects"
    titleLink="https://github.com/leandrotk"
    titleText="projects"
    list={projectsList}
  />
);
