/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface NewTabLinkProps {
  children: ReactNode;
  href: string;
}

const NewTabLink = ({ children, href }: NewTabLinkProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export const Footer: FC = () => (
  <footer id="footer" className="footer">
    <div className="footer-left">
      Copyright &copy; {new Date().getFullYear()} TK
    </div>
    <div className="footer-right">
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/writings">Writing</Link>
          </li>
          <li>
            <Link href="/support">Support</Link>
          </li>
          <li>
            <NewTabLink href="https://github.com/imteekay/iamtk.co">
              Code
            </NewTabLink>
          </li>
          <li>
            <NewTabLink href="/rss.xml">RSS</NewTabLink>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);
