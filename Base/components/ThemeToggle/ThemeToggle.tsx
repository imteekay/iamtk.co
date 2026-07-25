import { useEffect, useState } from 'react';

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from '@emotion/styled';
import { useTheme } from 'next-themes';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid;
  border-radius: 50%;
  background: none;
  color: inherit;
  cursor: pointer;
  padding: 0;

  html[data-theme='light'] & {
    color: #333;
  }
`;

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Button aria-hidden style={{ visibility: 'hidden' }} />;

  const isDark = resolvedTheme === 'dark';

  return (
    <Button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <FontAwesomeIcon icon={isDark ? faSun : faMoon} size="sm" />
    </Button>
  );
};
