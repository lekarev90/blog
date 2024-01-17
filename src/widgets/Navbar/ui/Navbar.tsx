import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkColor } from 'shared/ui/AppLink/AppLink';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames({ className: styles.container, additional: [className] })}>
      <div className={styles.links}>
        <AppLink
          color={AppLinkColor.SECONDARY}
          to="/"
        >
          {t('translation:mainPage')}
        </AppLink>
        <AppLink
          color={AppLinkColor.SECONDARY}
          to="/about"
        >
          {t('translation:navbar.menu.aboutUs')}
        </AppLink>
      </div>
    </div>
  );
};
