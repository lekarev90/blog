import { type FC, memo, useCallback } from 'react';

import { saveJsonSettings } from '@/entities/User';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { ETheme } from '@/shared/const/ETheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Button, ButtonVariants } from '@/shared/ui/depricated/Button';
import { Icon } from '@/shared/ui/depricated/Icon';

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
