import { memo, useState } from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import { Button, ButtonSize, ButtonVariants } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';

import { getSidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const sidebarStateText = t(`translation:sidebar.${collapsed ? 'open' : 'hide'}`);

  const onToggle = (): void => {
    setCollapsed((prevState) => !prevState);
  };

  const containerClassName = cx(styles.container, className, { collapsed });

  return (
    <div
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
      <div className={styles.menuContainer}>
        {getSidebarItemsList(t).map((item) => (
          <SidebarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
          />
        ))}
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
});
