import {
  ReactNode, useEffect, useMemo, useState,
} from 'react';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { ETheme } from '@/shared/const/ETheme';
import { useJsonSettings } from '@/entities/User';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme: defaultTheme = ETheme.LIGHT } = useJsonSettings();

  const [theme, setTheme] = useState<ETheme>(defaultTheme);
  const [isThemeInitialized, setIsThemeInitialized] = useState(false);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  useEffect(() => {
    if (!isThemeInitialized) {
      setTheme(defaultTheme);
      setIsThemeInitialized(true);
    }
  }, [defaultTheme, isThemeInitialized]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
