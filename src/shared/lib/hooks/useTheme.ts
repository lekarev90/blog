import { useContext } from 'react';

import { ETheme } from '../../const/ETheme';
import { ThemeContext } from '../context/ThemeContext';

interface UseThemeResult {
  toggleTheme: (saveAction?: (theme: ETheme) => void) => void;
  theme: ETheme;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (saveAction?: (theme: ETheme) => void): void => {
    let newTheme: ETheme;

    switch (theme) {
      case ETheme.DARK:
        newTheme = ETheme.LIGHT;
        break;
      case ETheme.LIGHT:
        newTheme = ETheme.ORANGE;
        break;
      case ETheme.ORANGE:
        newTheme = ETheme.DARK;
        break;
      default:
        newTheme = ETheme.LIGHT;
    }

    if (setTheme) {
      setTheme(newTheme);
    }

    saveAction?.(newTheme);
  };

  return {
    theme: theme || ETheme.LIGHT,
    toggleTheme,
  };
};
