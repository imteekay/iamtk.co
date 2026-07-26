import { useEffect, useState } from 'react';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';

import {
  CONTENT_WIDTH_MAX,
  CONTENT_WIDTH_MIN,
  FONT_SIZE_MAX,
  FONT_SIZE_MIN,
  useSettings,
} from './SettingsContext';

const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

const Panel = styled(motion.aside)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(320px, 100%);
  background: black;
  border-left: 1px solid #333;
  z-index: 101;
  padding: 24px;
  overflow-y: auto;

  html[data-theme='light'] & {
    background: white;
    border-left: 1px solid #ddd;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 1.1rem;
  margin: 0;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid;
  border-radius: 50%;
  background: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
`;

const Field = styled.div`
  margin-bottom: 24px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
  margin-bottom: 8px;
`;

const Range = styled.input`
  width: 100%;
`;

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
  cursor: pointer;
`;

const ResetButton = styled.button`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid;
  background: none;
  color: inherit;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.85rem;
`;

export const SettingsSidebar = () => {
  const {
    settings,
    isOpen,
    closeSidebar,
    setFontSize,
    setFadeIn,
    setContentWidth,
    resetSettings,
  } = useSettings();

  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Backdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSidebar}
          />
          <Panel
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            role="dialog"
            aria-label="Display settings"
          >
            <Header>
              <Title>Settings</Title>
              <CloseButton
                type="button"
                onClick={closeSidebar}
                aria-label="Close settings"
              >
                <FontAwesomeIcon icon={faTimes} size="sm" />
              </CloseButton>
            </Header>

            <Field>
              <Label htmlFor="settings-font-size">
                <span>Text size</span>
                <span>{settings.fontSize}px</span>
              </Label>
              <Range
                id="settings-font-size"
                type="range"
                min={FONT_SIZE_MIN}
                max={FONT_SIZE_MAX}
                step={1}
                value={settings.fontSize}
                onChange={(event) => setFontSize(Number(event.target.value))}
              />
            </Field>

            <Field>
              <Label htmlFor="settings-content-width">
                <span>Page width</span>
                <span>
                  {settings.contentWidth === CONTENT_WIDTH_MAX
                    ? '100%'
                    : `${settings.contentWidth}px`}
                </span>
              </Label>
              <Range
                id="settings-content-width"
                type="range"
                min={CONTENT_WIDTH_MIN}
                max={CONTENT_WIDTH_MAX}
                step={10}
                value={settings.contentWidth}
                onChange={(event) =>
                  setContentWidth(Number(event.target.value))
                }
              />
            </Field>

            <Field>
              <SwitchLabel htmlFor="settings-fade-in">
                <span>Fade-in animation</span>
                <input
                  id="settings-fade-in"
                  type="checkbox"
                  checked={settings.fadeIn}
                  onChange={(event) => setFadeIn(event.target.checked)}
                />
              </SwitchLabel>
            </Field>

            <Field>
              <SwitchLabel htmlFor="settings-dark-mode">
                <span>Dark mode</span>
                <input
                  id="settings-dark-mode"
                  type="checkbox"
                  checked={isDark}
                  onChange={(event) =>
                    setTheme(event.target.checked ? 'dark' : 'light')
                  }
                />
              </SwitchLabel>
            </Field>

            <ResetButton type="button" onClick={resetSettings}>
              Reset to defaults
            </ResetButton>
          </Panel>
        </>
      )}
    </AnimatePresence>
  );
};
