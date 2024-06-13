import { type FC, memo, useCallback } from 'react';

import { saveJsonSettings } from '@/entities/User';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import ThemeIconDeprecated from '@/shared/assets/icons/theme_deprecated.svg';
import { ETheme } from '@/shared/const/ETheme';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Button, ButtonVariants } from '@/shared/ui/depricated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/depricated/Icon';
import { Icon } from '@/shared/ui/redesigned/Icon';

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
    <ToggleFeatures
      feature="isOldDesign"
      on={(
        <Button onClick={onToggleThemeHandler} variant={ButtonVariants.CLEAR}>
          <IconDeprecated Svg={ThemeIconDeprecated} width={40} height={40} />
        </Button>
)}
      off={<Icon Svg={ThemeIcon} onClick={onToggleThemeHandler} clickable />}
    />
  );
});
