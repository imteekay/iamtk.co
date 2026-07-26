import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

const STORAGE_KEY = 'settings';

export const FONT_SIZE_MIN = 14;
export const FONT_SIZE_MAX = 22;
export const FONT_SIZE_DEFAULT = 15;

export const CONTENT_WIDTH_MIN = 680;
export const CONTENT_WIDTH_MAX = 1200;
export const CONTENT_WIDTH_DEFAULT = 680;

export const FADE_IN_DEFAULT = true;

interface Settings {
  fontSize: number;
  fadeIn: boolean;
  contentWidth: number;
}

const DEFAULT_SETTINGS: Settings = {
  fontSize: FONT_SIZE_DEFAULT,
  fadeIn: FADE_IN_DEFAULT,
  contentWidth: CONTENT_WIDTH_DEFAULT,
};

interface SettingsContextValue {
  settings: Settings;
  isOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
  setFontSize: (fontSize: number) => void;
  setFadeIn: (fadeIn: boolean) => void;
  setContentWidth: (contentWidth: number) => void;
  resetSettings: () => void;
}

const SettingsContext = createContext<SettingsContextValue | undefined>(
  undefined,
);

function readStoredSettings(): Settings {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return DEFAULT_SETTINGS;

    return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export const SettingsProvider: FC = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setSettings(readStoredSettings());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // Ignore write failures (e.g. private browsing / storage full).
    }
  }, [settings, mounted]);

  const updateSettings = useCallback((partial: Partial<Settings>) => {
    setSettings((current) => ({ ...current, ...partial }));
  }, []);

  const value: SettingsContextValue = {
    settings,
    isOpen,
    openSidebar: () => setIsOpen(true),
    closeSidebar: () => setIsOpen(false),
    toggleSidebar: () => setIsOpen((current) => !current),
    setFontSize: (fontSize) => updateSettings({ fontSize }),
    setFadeIn: (fadeIn) => updateSettings({ fadeIn }),
    setContentWidth: (contentWidth) => updateSettings({ contentWidth }),
    resetSettings: () => setSettings(DEFAULT_SETTINGS),
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }

  return context;
};
