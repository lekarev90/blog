import { createContext } from 'react';

import { ETheme } from '@/shared/const/ETheme';

export interface ThemeContextProps {
  theme?: ETheme;
  setTheme?: (theme: ETheme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});
