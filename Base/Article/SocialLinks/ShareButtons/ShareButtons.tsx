import { useRouter } from 'next/router';
import { FC } from 'react';
import { css } from '@emotion/css';
import { Icon } from '../Icon';

const shareButtonsStyle = css`
  display: flex;
  alignitems: center;
  gap: 8px;
`;

const iconLink = css`
  display: inline-block;
  background: none;

  &:hover {
    background: none;
  }
`;

export const ShareButtons: FC = () => {
  const router = useRouter();
  const path = 'https://iamtk.co' + router.asPath;
  const text = `"${document.title}" by @wordsofteekay`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${path}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${path}`;
  const facebookUrl = `https://www.facebook.com/sharer.php?u=${path}`;

  return (
    <div className={shareButtonsStyle}>
      <a
        className={iconLink}
        href={twitterUrl}
        target="_blank"
        title="twitter share button"
        rel="noreferrer"
      >
        <Icon src="/twitter.svg" />
      </a>
      <a
        className={iconLink}
        href={linkedinUrl}
        target="_blank"
        title="linkedin share button"
        rel="noreferrer"
      >
        <Icon src="/linkedin.svg" />
      </a>
      <a
        className={iconLink}
        href={facebookUrl}
        target="_blank"
        title="facebook share button"
        rel="noreferrer"
      >
        <Icon src="/facebook.svg" />
      </a>
    </div>
  );
};

export default ShareButtons;
