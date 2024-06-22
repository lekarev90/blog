import {
  ReactNode, useEffect, useMemo, useState,
} from 'react';

import { ETheme } from '@/shared/const/ETheme';
import { LOCALSTORAGE_THEME_KEY } from '@/shared/const/localstorage';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';

interface IThemeProviderProps {
  children: ReactNode;
  initialTheme?: ETheme;
}

const fallbackTheme = localStorage.getItem(LOCALSTORAGE_THEME_KEY) as ETheme;

export const ThemeProvider = ({ children, initialTheme }: IThemeProviderProps) => {
  const [theme, setTheme] = useState<ETheme>(initialTheme || fallbackTheme || ETheme.LIGHT);
  const [isThemeInitialized, setIsThemeInitialized] = useState(false);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  useEffect(() => {
    if (!isThemeInitialized && initialTheme) {
      setTheme(initialTheme);
      setIsThemeInitialized(true);
    }
  }, [initialTheme, isThemeInitialized]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(LOCALSTORAGE_THEME_KEY, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
