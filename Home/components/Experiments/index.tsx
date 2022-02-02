import { IntersectionObserver } from 'Base/components/IntersectionObserver';
import ExperimentsLoadable from './Loadable';

export const Experiments = () => (
  <IntersectionObserver>
    <ExperimentsLoadable />
  </IntersectionObserver>
);
