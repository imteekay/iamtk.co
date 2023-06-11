import { FC } from 'react';

import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const SocialLinks: FC = () => (
  <p>
    My{' '}
    <a
      className="icon"
      target="_blank"
      href="https://twitter.com/wordsofteekay"
      title="twitter"
      rel="noreferrer"
    >
      Twitter <FontAwesomeIcon icon={faTwitter} />
    </a>{' '}
    and{' '}
    <a
      className="icon"
      target="_blank"
      href="https://github.com/imteekay"
      title="github"
      rel="noreferrer"
    >
      Github <FontAwesomeIcon icon={faGithub} />
    </a>
  </p>
);
