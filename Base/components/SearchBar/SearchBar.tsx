import { useRouter } from 'next/router';
import { FC, CSSProperties } from 'react';
import {
  KBarAnimator,
  KBarProvider,
  KBarPortal,
  useMatches,
  KBarPositioner,
  KBarSearch,
  KBarResults,
  ActionImpl,
} from 'kbar';

const positionerStyle = {
  position: 'fixed',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  inset: '0px',
  padding: '14vh 16px 16px',
  background: 'rgba(0, 0, 0, .8)',
  boxSizing: 'border-box',
} as const;

const animatorStyle = {
  background: '#1b1b1b',
  maxWidth: '600px',
  width: '100%',
  color: 'white',
  borderRadius: '8px',
  overflow: 'hidden',
} as const;

const searchStyle = {
  padding: '12px 16px',
  fontSize: '16px',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
  border: 'none',
  margin: 0,
  background: '#1b1b1b',
  color: 'white',
} as const;

const groupNameStyle: CSSProperties = {
  padding: '8px 16px',
  fontSize: '10px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  background: '#1b1b1b',
};

const iconStyle: CSSProperties = {
  fontSize: '20px',
  position: 'relative',
  top: '-2px',
};

const kbdStyle: CSSProperties = {
  padding: '4px 8px',
  textTransform: 'uppercase',
  color: 'white',
  background: 'rgba(255, 255, 255, .1)',
  borderRadius: '4px',
  fontSize: '14px',
};

const shortcutStyle: CSSProperties = {
  display: 'grid',
  gridAutoFlow: 'column',
  gap: '4px',
};

const actionStyle: CSSProperties = {
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
};

const actionRowStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
};

const getResultStyle = (active: boolean) => ({
  padding: '8px 16px',
  background: active ? 'rgba(255, 255, 255, 0.1)' : '#1b1b1b',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: 0,
  cursor: 'pointer',
  color: active ? 'white' : 'white',
});

const RenderResults: FC = () => {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div style={groupNameStyle}>{item}</div>
        ) : (
          <ResultItem action={item} active={active} />
        )
      }
    />
  );
};

const ResultItem = ({
  action,
  active,
}: {
  action: ActionImpl;
  active: boolean;
}) => (
  <div style={getResultStyle(active)}>
    <div style={actionStyle}>
      {action.icon && action.icon}
      <div style={actionRowStyle}>
        <span>{action.name}</span>
      </div>
    </div>
    {action.shortcut?.length ? (
      <div aria-hidden style={shortcutStyle}>
        {action.shortcut.map((shortcut) => (
          <kbd key={shortcut} style={kbdStyle}>
            {shortcut}
          </kbd>
        ))}
      </div>
    ) : null}
  </div>
);

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
