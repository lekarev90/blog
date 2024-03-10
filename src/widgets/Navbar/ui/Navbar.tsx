import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { LoginModal } from 'features/AuthByUsername';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';
import { Button, ButtonVariants } from 'shared/ui/Button/Button';

import styles from './Navbar.module.scss';

export const Navbar = memo(() => {
  const dispatch = useAppDispatch();
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
      <div className={styles.container}>
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
    <div className={styles.container}>
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
