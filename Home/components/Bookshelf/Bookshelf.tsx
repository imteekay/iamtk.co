import { FC } from 'react';
import { bookshelfList } from './bookshelfList';
import { List } from 'Base/components/List';

type Header = 'h1' | 'h2';
type BookshelfPropTypes = { header?: Header };

export const Bookshelf: FC<BookshelfPropTypes> = ({ header }) => (
  <List
    sectionId="bookshelf"
    titleLink="/bookshelf"
    titleText="bookshelf"
    list={bookshelfList}
    openNewTab={false}
    header={header}
  />
);

export default Bookshelf;
