import { memo, useState } from 'react';
import { useSelector } from 'react-redux';

import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import { getUserAuthData } from '@/entities/User';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { UiDesignSwitch } from '@/features/uiDesignSwitch';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button, ButtonSize, ButtonVariants } from '@/shared/ui/depricated/Button';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

export const Sidebar = memo(() => {
  const { t } = useTranslation();

  const [collapsed, setCollapsed] = useState(false);
  const sidebarItems = useSelector(getSidebarItems(t));
  const authData = useSelector(getUserAuthData);

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
          <VStack className={styles.menuContainer} gap="8">
            {sidebarItems.map((item) => (
              <SidebarItem key={item.path} item={item} collapsed={collapsed} />
            ))}
          </VStack>
          <VStack align="center" className={styles.switchers}>
            <ThemeSwitcher />
            <LangSwitcher />
            {!collapsed && <UiDesignSwitch />}
          </VStack>
        </nav>
      )}
      off={(
        <nav data-testid="sidebar" className={containerV2ClassName}>
          <AppLogo width={collapsed ? 45 : 150} height={collapsed ? 45 : 150} />
          <Icon
            data-testid="sidebar-toggle"
            clickable
            className={cx(styles.collapseButton, { collapsed })}
            onClick={onToggle}
            Svg={ArrowIcon}
          />
          <VStack className={styles.menuContainer}>
            {sidebarItems.map((item) => (
              <SidebarItem key={item.path} item={item} collapsed={collapsed} />
            ))}
          </VStack>
          <HStack justify="center" gap="8" className={styles.switchers}>
            <ThemeSwitcher />
            <LangSwitcher />
            {!collapsed && authData && <UiDesignSwitch />}
          </HStack>
        </nav>
      )}
    />
  );
});
