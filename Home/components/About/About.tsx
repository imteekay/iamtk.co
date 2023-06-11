import Link from 'next/link';

import {
  faTwitter,
  faGithub,
  faGoodreads,
  faLinkedin,
  faPatreon,
} from '@fortawesome/free-brands-svg-icons';
import {
  faMugHot,
  faEnvelope,
  faStickyNote,
  faBook,
  faBlog,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      the
      <a
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
        href="https://teekay.substack.com"
        title="substack"
      >
        {' '}
        substack newsletter <FontAwesomeIcon icon={faEnvelope} />
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
