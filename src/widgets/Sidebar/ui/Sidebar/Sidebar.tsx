import { memo, useState } from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Button, ButtonSize, ButtonVariants } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { VStack } from 'shared/ui/Stack';

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

  return (
    <nav
      data-testid="sidebar"
      className={containerClassName}
    >
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
          <SidebarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
          />
        ))}
      </VStack>
      <VStack align="center" className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </VStack>
    </nav>
  );
});
