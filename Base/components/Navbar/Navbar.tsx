import Link from 'next/link';

import styled from '@emotion/styled';

import { ThemeToggle } from 'Base/components/ThemeToggle';

const Header = styled.header`
  padding: 24px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    <ThemeToggle />
  </Header>
);
