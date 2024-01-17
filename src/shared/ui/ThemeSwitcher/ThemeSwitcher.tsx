import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { type FC } from 'react';
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg';
import LightThemeIcon from 'shared/assets/icons/theme-light.svg';
import { Button, ButtonVariants } from 'shared/ui/Button/Button';

export const ThemeSwitcher: FC = () => {
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
};
