import { memo, useCallback, useState } from 'react';

import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { LoginModal } from 'features/AuthByUsername';
import { getUserAuthData, userActions } from 'entities/User';
import { Button, ButtonVariants } from 'shared/ui/Button/Button';

import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);

  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const onCloseAuthModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  const onOpenAuthModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={cx(styles.container, className)}>
        <div className={styles.links}>
          <Button
            variant={ButtonVariants.CLEAR_INVERTED}
            className={styles.links}
            onClick={onLogout}
          >
            {t('translation:navbar.authModalButton.logout')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={cx(styles.container, className)}>
      <div className={styles.links}>
        <Button
          variant={ButtonVariants.CLEAR_INVERTED}
          className={styles.links}
          onClick={onOpenAuthModal}
        >
          {t('translation:navbar.authModalButton.login')}
        </Button>
      </div>
      <LoginModal
        onClose={onCloseAuthModal}
        isOpen={isAuthModalOpen}
      />
    </div>
  );
});
