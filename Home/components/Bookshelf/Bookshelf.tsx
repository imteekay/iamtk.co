import { FC } from 'react';

import styled from '@emotion/styled';

import { bookshelfList } from './bookshelfList';

const HackyTableWrapper = styled.div`
  overflow-x: scroll;
  margin-left: -1.1rem;
  margin-right: -1.1rem;
`;

const Table = styled.table`
  border-radius: 1px;
`;

const Tr = styled.tr``;

const Th = styled.th`
  overflow: hidden;
  padding: 16px;
  border: 1px solid #333;
  border-collapse: collapse;
  border-radius: 1px;
`;

const Td = styled.td`
  overflow: hidden;
  padding: 16px;
  border: 1px solid #333;
  border-collapse: collapse;
  border-radius: 1px;
`;

const NoTextDecorationLink = styled.a`
  text-decoration: none;
`;

const Columns = () => (
  <colgroup>
    <col style={{ width: '55%' }} />
    <col style={{ width: '25%' }} />
    <col style={{ width: '14%' }} />
  </colgroup>
);

export const Bookshelf: FC = () => (
  <>
    <h1>Bookshelf</h1>
    <HackyTableWrapper>
      <Table>
        <Columns />
        <Tr>
          <Th>Title</Th>
          <Th>Author</Th>
          <Th>Review</Th>
        </Tr>
        {bookshelfList.map((book) => (
          <Tr key={book.link}>
            <Td>
              {book.link ? <a href={book.link}>{book.title}</a> : book.title}
            </Td>
            <Td>{book.author}</Td>
            <Td>
              {book.reviewLink ? (
                <NoTextDecorationLink href={book.reviewLink} target="_blank">
                  {book.stars}
                </NoTextDecorationLink>
              ) : (
                book.stars
              )}
            </Td>
          </Tr>
        ))}
      </Table>
    </HackyTableWrapper>
  </>
);
