import { memo, useState } from 'react';
import { useSelector } from 'react-redux';

import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/AppLogo';
import { Button, ButtonSize, ButtonVariants } from '@/shared/ui/depricated/Button';
import { LangSwitcher } from '@/shared/ui/depricated/LangSwitcher';
import { HStack, VStack } from '@/shared/ui/Stack';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

export const Sidebar = memo(() => {
  const { t } = useTranslation();

  const [collapsed, setCollapsed] = useState(false);
  const sidebarItems = useSelector(getSidebarItems(t));

  const sidebarStateText = t(`translation:sidebar.${collapsed ? 'open' : 'hide'}`);

  const onToggle = (): void => {
    setCollapsed((prevState) => !prevState);
  };

  const containerClassName = cx(styles.container, { collapsed });
  const containerV2ClassName = cx(styles.containerV2, { collapsed });

  return (
    <ToggleFeatures
      feature="isOldDesign"
      on={(
        <nav data-testid="sidebar" className={containerClassName}>
          <Button
            data-testid="sidebar-toggle"
            square
            variant={ButtonVariants.BACKGROUND_INVERTED}
            className={styles.collapseButton}
            onClick={onToggle}
            size={ButtonSize.L}
          >
            {sidebarStateText}
          </Button>
          <VStack className={styles.menuContainer}>
            {sidebarItems.map((item) => (
              <SidebarItem key={item.path} item={item} collapsed={collapsed} />
            ))}
          </VStack>
          <VStack align="center" className={styles.switchers}>
            <ThemeSwitcher />
            <LangSwitcher />
          </VStack>
        </nav>
      )}
      off={(
        <nav data-testid="sidebar" className={containerV2ClassName}>
          <AppLogo className={styles.logo} />
          <Button
            data-testid="sidebar-toggle"
            square
            variant={ButtonVariants.BACKGROUND_INVERTED}
            className={styles.collapseButton}
            onClick={onToggle}
            size={ButtonSize.L}
          >
            {sidebarStateText}
          </Button>
          <VStack className={styles.menuContainer}>
            {sidebarItems.map((item) => (
              <SidebarItem key={item.path} item={item} collapsed={collapsed} />
            ))}
          </VStack>
          <HStack justify="center" gap="8" className={styles.switchers}>
            <ThemeSwitcher />
            <LangSwitcher />
          </HStack>
        </nav>
      )}
    />
  );
});
