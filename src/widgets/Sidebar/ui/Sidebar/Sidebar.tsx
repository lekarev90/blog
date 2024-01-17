import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonVariants } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';

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
      <Button
        square
        onClick={() => {}}
      >
        some text
      </Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
