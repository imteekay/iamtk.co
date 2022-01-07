import { IntersectionObserver } from 'Base/components/IntersectionObserver';
import SeriesLoadable from './Loadable';

export const Series = () => (
  <IntersectionObserver>
    <SeriesLoadable />
  </IntersectionObserver>
);
