import { FC } from 'react';
import { socialLinks } from './style';

export const About: FC = () => (
  <section id="about">
    <p>Hi, I&apos;m TK!</p>
    <p style={socialLinks}>
      Find me{' '}
      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/leandrotk"
        title="github"
      >
        building on github <span className="fab fa-github" />
      </a>
    </p>
    <p style={socialLinks}>
      and sharing my{' '}
      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/leandrotk_"
        title="twitter"
      >
        thoughts on twitter <span className="fab fa-twitter" />
      </a>
    </p>
    <p>
      Find my books reviews on
      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.goodreads.com/iamteekay"
        title="goodreads"
      >
        goodreads <span className="fab fa-goodreads" />
      </a>
    </p>
    <p className="no-margin">You can support my work on</p>
    <a
      className="icon"
      target="_blank"
      rel="noopener noreferrer"
      href="https://ko-fi.com/teekay"
      title="kofi"
    >
      ko-fi <span className="fas fa-mug-hot" />
    </a>
    , and
    <a
      className="icon"
      target="_blank"
      rel="noopener noreferrer"
      href="https://teekay.substack.com/"
      title="substack"
    >
      {' '}
      substack <span className="fas fa-envelope" />
    </a>
    <p className="no-margin-bottom">
      For work stuff:{' '}
      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/imtk"
        title="linkedin"
      >
        linkedin <span className="fab fa-linkedin" />
      </a>
    </p>
    <p className="no-margin">
      <span> or my</span>
      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="./images/cv.pdf"
        title="cv"
      >
        {' '}
        cv <span className="fas fa-sticky-note" />
      </a>
    </p>
  </section>
);
