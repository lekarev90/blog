import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkColor } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonVariants } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';

import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const sidebarStateText = t(`translation:sidebar.${collapsed ? 'open' : 'hide'}`);

  const onToggle = (): void => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames({
        className: styles.container,
        additional: [className],
        mods: {
          [styles.collapsed]: collapsed,
        },
      })}
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
        <AppLink
          className={styles.menuItem}
          color={AppLinkColor.SECONDARY}
          to={RouterPath.main}
        >
          <MainIcon className={styles.icon} />
          <span className={styles.link}>
            {t('translation:mainPage')}
          </span>
        </AppLink>
        <AppLink
          className={styles.menuItem}
          color={AppLinkColor.SECONDARY}
          to={RouterPath.about}
        >
          <AboutIcon className={styles.icon} />
          <span className={styles.link}>
            {t('translation:navbar.menu.aboutUs')}
          </span>
        </AppLink>
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
