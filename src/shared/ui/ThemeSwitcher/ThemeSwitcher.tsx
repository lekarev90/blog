import { type FC, memo } from 'react';

import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg';
import LightThemeIcon from 'shared/assets/icons/theme-light.svg';

import { Button, ButtonVariants } from '../Button/Button';

export const ThemeSwitcher: FC = memo(() => {
  const { theme, toggleTheme } = useTheme();
  const currentIcon = theme === Theme.DARK ? <DarkThemeIcon /> : <LightThemeIcon />;

  return (
    <Button
      onClick={toggleTheme}
      variant={ButtonVariants.CLEAR}
    >
      {currentIcon}
    </Button>
  );
});
