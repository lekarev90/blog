import {
  ReactNode, useEffect, useMemo, useState,
} from 'react';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { ETheme } from '@/shared/const/ETheme';

interface IThemeProviderProps {
  children: ReactNode;
  initialTheme?: ETheme;
}

export const ThemeProvider = ({ children, initialTheme }: IThemeProviderProps) => {
  const [theme, setTheme] = useState<ETheme>(initialTheme || ETheme.LIGHT);
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

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
