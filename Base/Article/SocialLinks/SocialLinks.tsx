import { FC } from 'react';

export const SocialLinks: FC = () => (
  <p>
    My{' '}
    <a
      className="icon"
      target="_blank"
      href="https://twitter.com/leandrotk_"
      title="twitter"
      rel="noreferrer"
    >
      Twitter <span className="fab fa-twitter" />
    </a>{' '}
    and{' '}
    <a
      className="icon"
      target="_blank"
      href="https://github.com/leandrotk"
      title="github"
      rel="noreferrer"
    >
      Github <span className="fab fa-github" />
    </a>
  </p>
);
