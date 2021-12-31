import { useRouter } from 'next/router';
import { FC } from 'react';
import { Icon } from './Icon';

const shareButtonsStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

export const ShareButtons: FC = () => {
  const router = useRouter();
  const path = 'https://iamtk.co' + router.asPath;
  const text = `"${document.title}" by @leandrotk_`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${path}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${path}`;
  const facebookUrl = `https://www.facebook.com/sharer.php?u=${path}`;

  return (
    <div style={shareButtonsStyle}>
      <a
        className="icon"
        href={twitterUrl}
        target="_blank"
        title="twitter share button"
        rel="noreferrer"
      >
        <Icon src="/twitter.svg" />
      </a>
      <a
        className="icon"
        href={linkedinUrl}
        target="_blank"
        title="linkedin share button"
        rel="noreferrer"
      >
        <Icon src="/linkedin.svg" />
      </a>
      <a
        className="icon"
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
