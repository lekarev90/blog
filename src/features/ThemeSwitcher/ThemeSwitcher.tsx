import { type FC, memo, useCallback } from 'react';

import { useTheme } from '@/shared/lib/hooks/useTheme';
import DarkThemeIcon from '@/shared/assets/icons/theme-dark.svg';
import LightThemeIcon from '@/shared/assets/icons/theme-light.svg';
import { ETheme } from '@/shared/const/ETheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import { saveJsonSettings } from '@/entities/User';

import { Button, ButtonVariants } from '../../shared/ui/Button/Button';

export const ThemeSwitcher: FC = memo(() => {
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();
  const currentIcon = theme === ETheme.DARK ? <DarkThemeIcon /> : <LightThemeIcon />;

  const onToggleThemeHandler = useCallback(
    () => {
      toggleTheme((newTheme: ETheme) => {
        dispatch(saveJsonSettings({ theme: newTheme }));
      });
    },
    [dispatch, toggleTheme],
  );

  return (
    <Button onClick={onToggleThemeHandler} variant={ButtonVariants.CLEAR}>
      {currentIcon}
    </Button>
  );
});
