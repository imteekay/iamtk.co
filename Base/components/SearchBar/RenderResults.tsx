import { FC, CSSProperties } from 'react';

import { useMatches, KBarResults } from 'kbar';

import { ResultItem } from './ResultItem';

const groupNameStyle: CSSProperties = {
  padding: '8px 16px',
  fontSize: '10px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  background: '#1b1b1b',
};

export const RenderResults: FC = () => {
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
