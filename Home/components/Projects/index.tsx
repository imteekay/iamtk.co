import { IntersectionObserver } from 'Base/components/IntersectionObserver';
import ProjectsLoadable from './Loadable';

export const Projects = () => (
  <IntersectionObserver>
    <ProjectsLoadable />
  </IntersectionObserver>
);
