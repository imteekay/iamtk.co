import { FC } from 'react';
import { bookshelfList } from './bookshelfList';
import { List } from 'Base/components/List';
import styled from '@emotion/styled';

type Header = 'h1' | 'h2';
type BookshelfPropTypes = { header?: Header };

const Item = styled.div`
  border: 1px solid #333;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

export const Bookshelf: FC<BookshelfPropTypes> = ({ header }) =>
  // <List
  //   sectionId="bookshelf"
  //   titleLink="/bookshelf"
  //   titleText="bookshelf"
  //   list={bookshelfList}
  //   openNewTab={false}
  //   header={header}
  // />
  bookshelfList.map((book) => (
    <Item>
      <span>
        <a href={book.link}>{book.title}</a>
      </span>
      <span>{book.description}</span>
    </Item>
  ));

export default Bookshelf;
