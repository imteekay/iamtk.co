import { CSSProperties, forwardRef } from 'react';

import { ActionImpl } from 'kbar';

type ResultItemProps = {
  action: ActionImpl;
  active: boolean;
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
  color: 'white',
});

export const ResultItem = forwardRef<HTMLInputElement, ResultItemProps>(
  ({ action, active }, ref) => {
    return (
      <div ref={ref} style={getResultStyle(active)}>
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
  },
);

ResultItem.displayName = 'ResultItem';
