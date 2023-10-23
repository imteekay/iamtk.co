import { FC } from 'react';

import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SocialLinks: FC = () => (
  <p>
    <a
      className="icon"
      target="_blank"
      href="https://twitter.com/wordsofteekay"
      title="twitter"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={faTwitter} /> Twitter
    </a>{' '}
    <a
      className="icon"
      target="_blank"
      href="https://github.com/imteekay"
      title="github"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={faGithub} /> Github
    </a>
  </p>
);
