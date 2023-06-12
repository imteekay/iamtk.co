import Link from 'next/link';
import { FC } from 'react';

import {
  faTwitter,
  faGithub,
  faGoodreads,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faStickyNote,
  faBook,
  faBlog,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { socialLinks } from './style';

const SubstackForm = () => <div id="custom-substack-embed"></div>;

export const About: FC = () => (
  <section id="about">
    {/* <p>Hi, I&apos;m TK!</p> */}
    <p className="no-margin">
      Subscribe to my
      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://teekay.substack.com"
        title="substack"
      >
        {' '}
        newsletter
      </a>
    </p>
    <SubstackForm />

    <a
      className="icon"
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/imteekay"
      title="github"
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>

    <a
      className="icon"
      target="_blank"
      rel="noopener noreferrer"
      href="https://twitter.com/wordsofteekay"
      title="twitter"
    >
      <FontAwesomeIcon icon={faTwitter} />
    </a>

    <a
      className="icon"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.goodreads.com/iamteekay"
      title="goodreads"
    >
      {' '}
      <FontAwesomeIcon icon={faGoodreads} />
    </a>

    <a
      className="icon"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/imtk"
      title="linkedin"
    >
      <FontAwesomeIcon icon={faLinkedin} />
    </a>

    <a
      className="icon"
      target="_blank"
      rel="noopener noreferrer"
      href="./cv.pdf"
      title="cv"
    >
      {' '}
      <FontAwesomeIcon icon={faStickyNote} />
    </a>

    <p style={socialLinks}>
      Find me{' '}
      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/imteekay"
        title="github"
      >
        building on github <FontAwesomeIcon icon={faGithub} />
      </a>
    </p>
    <p style={socialLinks}>
      sharing my{' '}
      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/wordsofteekay"
        title="twitter"
      >
        thoughts on twitter <FontAwesomeIcon icon={faTwitter} />
      </a>
    </p>
    <p style={socialLinks}>
      and on my{' '}
      <Link href="/microblog" className="icon">
        microblog <FontAwesomeIcon icon={faBlog} />
      </Link>
    </p>
    <p className="no-margin-bottom">
      Find my books reviews on
      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.goodreads.com/iamteekay"
        title="goodreads"
      >
        {' '}
        goodreads <FontAwesomeIcon icon={faGoodreads} />
      </a>
    </p>
    <p className="no-margin-top">
      and the{' '}
      <Link href="/bookshelf" className="icon">
        digital bookshelf <FontAwesomeIcon icon={faBook} />
      </Link>
    </p>
    <p className="no-margin">You can support my work on</p>
    <p className="no-margin">
      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://teekay.substack.com"
        title="substack"
      >
        {' '}
        substack <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </p>
    <p className="no-margin-bottom">
      For work stuff:{' '}
      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/imtk"
        title="linkedin"
      >
        linkedin <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </p>
    <p className="no-margin">
      <span> or my</span>
      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="./cv.pdf"
        title="cv"
      >
        {' '}
        cv <FontAwesomeIcon icon={faStickyNote} />
      </a>
    </p>
  </section>
);
