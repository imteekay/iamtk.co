/* eslint-disable @next/next/no-html-link-for-pages */
import { FC } from 'react';
import Link from 'next/link';

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
            <a href="/writings">Writing</a>
          </li>
          <li>
            <a
              href="https://github.com/leandrotk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Projects
            </a>
          </li>
          <li>
            <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
              RSS
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);
