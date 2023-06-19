import Link from 'next/link';

import styled from '@emotion/styled';

const Header = styled.header`
  padding: 24px 16px;
`;

const Logo = styled(Link)`
  font-weight: 700;
  font-size: 16px;
  -webkit-text-decoration: none;
  text-decoration: none;
  border: 1px solid;
  padding: 8px 10px;
`;

export const Navbar = () => (
  <Header>
    <Logo href="/">TK</Logo>
  </Header>
);
