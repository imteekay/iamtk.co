export const sourceCode1 = `yarn add @material-ui/core`;

export const sourceCode2 = `export default function Home() {
  return <h1>Home</h1>;
}`;

export const sourceCode3 = `<Button aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
  Open Menu
</Button>`;

export const sourceCode4 = `const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
  setAnchorEl(event.currentTarget);
};`;

export const sourceCode5 = `<MuiMenu
  id="menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
  {menuItems.map((item: MenuItem) => (
    <Link href={item.linkTo} key={item.key}>
      <MuiMenuItem>{item.label}</MuiMenuItem>
    </Link>
  ))}
</MuiMenu>`;

export const sourceCode6 = `export type MenuItem = {
  linkTo: string;
  label: string;
  key: string;
};`;

export const sourceCode7 = `import { FunctionComponent } from 'react';

type MenuPropsType = { menuItems: MenuItem[] };

export const Menu: FunctionComponent<MenuPropsType> = ({ menuItems }) => {
  ...
};`;

export const sourceCode8 = `const handleClose = (_: any) => {
  setAnchorEl(null);
};`;

export const sourceCode9 = `import { Fragment } from 'react';
import type { AppProps } from 'next/app';
import Menu, { MenuItem } from 'Base/Layout/Menu';
import '../styles/globals.css';

const menuItems: MenuItem[] = [
  {
    linkTo: '/',
    label: 'Home',
    key: 'link-to-home',
  },
  {
    linkTo: '/search',
    label: 'Search',
    key: 'link-to-search',
  },
];

function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Menu menuItems={menuItems} />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default App;`;
