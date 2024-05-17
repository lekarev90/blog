import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { LoginModal } from 'features/AuthByUsername';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';
import { Button, ButtonVariants } from 'shared/ui/Button/Button';

import { AppLink, AppLinkColor } from 'shared/ui/AppLink/AppLink';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import { Text, TextVariant } from 'shared/ui/Text/Text';

import { HStack } from 'shared/ui/Stack';
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

  const userAreaButtons = authData ? (
    <>
      <AppLink to={RouterPath.article_create} color={AppLinkColor.SECONDARY}>
        {t('translation:navbar.createArticle')}
      </AppLink>
      <Button variant={ButtonVariants.CLEAR_INVERTED} className={styles.authButton} onClick={onLogout}>
        {t('translation:navbar.authModalButton.logout')}
      </Button>
    </>
  ) : (
    <Button variant={ButtonVariants.CLEAR_INVERTED} className={styles.authButton} onClick={onOpenAuthModal}>
      {t('translation:navbar.authModalButton.login')}
    </Button>
  );

  return (
    <HStack align="center" maxWidth className={styles.container}>
      <Text variant={TextVariant.INVERTED} className={styles.mainTitle} title={t('translation:mainTitleLogo')} />
      <div className={styles.links}>
        {userAreaButtons}
      </div>
      <LoginModal onClose={onCloseAuthModal} isOpen={isAuthModalOpen} />
    </HStack>
  );
});
