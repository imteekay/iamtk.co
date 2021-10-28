import type { NextPage } from 'next';

export const Footer: NextPage = () => (
  <footer id="footer" className="footer">
    <div className="footer-left">Copyright &copy; 2021 TK</div>
    <div className="footer-right">
      <nav>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="writing.html">Writing</a>
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
            <a href="quotes.html">Quotes</a>
          </li>
          <li>
            <a href="rss.xml" target="_blank" rel="noopener noreferrer">
              RSS
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
);
