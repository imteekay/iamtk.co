import { useRouter } from 'next/router';
import { FC, CSSProperties } from 'react';
import {
  KBarAnimator,
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarSearch,
} from 'kbar';

import { RenderResults } from './RenderResults';

const positionerStyle: CSSProperties = {
  position: 'fixed',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  inset: '0px',
  padding: '14vh 16px 16px',
  background: 'rgba(0, 0, 0, .8)',
  boxSizing: 'border-box',
};

const animatorStyle: CSSProperties = {
  background: '#1b1b1b',
  maxWidth: '600px',
  width: '100%',
  color: 'white',
  borderRadius: '8px',
  overflow: 'hidden',
};

const searchStyle: CSSProperties = {
  padding: '12px 16px',
  fontSize: '16px',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
  border: 'none',
  margin: 0,
  background: '#1b1b1b',
  color: 'white',
};

const iconStyle: CSSProperties = {
  fontSize: '20px',
  position: 'relative',
  top: '-2px',
};

export const SearchBar: FC = ({ children }) => {
  const router = useRouter();
  const actions = [
    {
      id: 'home',
      name: 'Home',
      shortcut: ['g', 'h'],
      keywords: 'go-home',
      section: 'Go To',
      perform: () => router.push('/'),
      icon: <i className="ri-home-5-line" style={iconStyle} />,
    },
    {
      id: 'articles',
      name: 'Articles',
      shortcut: ['g', 'a'],
      keywords: 'go-articles',
      section: 'Go To',
      perform: () => router.push('/articles'),
      icon: <i className="ri-ball-pen-line" style={iconStyle} />,
    },
    {
      id: 'projects',
      name: 'Projects',
      shortcut: ['g', 'p'],
      keywords: 'go-projects',
      section: 'Go To',
      perform: () => router.push('/projects'),
      icon: <i className="ri-lightbulb-line" style={iconStyle} />,
    },
    {
      id: 'github',
      name: 'Github',
      shortcut: ['f', 'g'],
      keywords: 'go-github',
      section: 'Follow',
      perform: () => window.open('https://github.com/leandrotk', '_blank'),
      icon: <i className="ri-github-line" style={iconStyle} />,
    },
    {
      id: 'twitter',
      name: 'Twitter',
      shortcut: ['f', 't'],
      keywords: 'go-twitter',
      section: 'Follow',
      perform: () => window.open('https://twitter.com/leandrotk_', '_blank'),
      icon: <i className="ri-twitter-line" style={iconStyle} />,
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      shortcut: ['f', 'l'],
      keywords: 'go-linkedin',
      section: 'Follow',
      perform: () => window.open('https://linkedin.com/in/imtk', '_blank'),
      icon: <i className="ri-linkedin-line" style={iconStyle} />,
    },
  ];

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner style={positionerStyle}>
          <KBarAnimator style={animatorStyle}>
            <KBarSearch
              style={searchStyle}
              placeholder="Type a command or search…"
            />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
};
