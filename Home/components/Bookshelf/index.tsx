import { IntersectionObserver } from 'Base/components/IntersectionObserver';
import BookshelfLoadable from './Loadable';

export const Bookshelf = () => (
  <IntersectionObserver>
    <BookshelfLoadable />
  </IntersectionObserver>
);
