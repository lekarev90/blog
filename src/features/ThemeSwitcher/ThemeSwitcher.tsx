import { type FC, memo, useCallback } from 'react';

import { useTheme } from '@/shared/lib/hooks/useTheme';
import { ETheme } from '@/shared/const/ETheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import { saveJsonSettings } from '@/entities/User';

import ThemeIcon from '@/shared/assets/icons/theme.svg';

import { Button, ButtonVariants } from '../../shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon';

export const ThemeSwitcher: FC = memo(() => {
  const { toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

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
      <Icon Svg={ThemeIcon} width={40} height={40} />
    </Button>
  );
});
