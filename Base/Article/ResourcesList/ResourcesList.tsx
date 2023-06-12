import { FC } from 'react';

import { Resource, ResourcePropType } from './Resource';

type ResourcesListPropType = {
  resourcesList: ResourcePropType[];
};

export const ResourcesList: FC<ResourcesListPropType> = ({ resourcesList }) => (
  <ul>
    {resourcesList.map((resource) => (
      <Resource
        key={resource.title}
        link={resource.link}
        title={resource.title}
      />
    ))}
  </ul>
);
