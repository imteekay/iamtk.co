import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from '@emotion/styled';

import { useSettings } from './SettingsContext';

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

export const SettingsToggle = () => {
  const { toggleSidebar } = useSettings();

  return (
    <Button
      type="button"
      onClick={toggleSidebar}
      aria-label="Open display settings"
    >
      <FontAwesomeIcon icon={faSlidersH} size="sm" />
    </Button>
  );
};
