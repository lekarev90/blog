import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import { Button, ButtonVariants } from '@/shared/ui/Button/Button';
import { AppLink, AppLinkColor } from '@/shared/ui/AppLink/AppLink';
import { Text, TextVariant } from '@/shared/ui/Text/Text';
import { HStack } from '@/shared/ui/Stack';

import { NotificationModal } from '@/features/navbar';
import { NavbarMenuDropDown } from '../NavbarMenuDropDown/NavbarMenuDropDown';

import styles from './Navbar.module.scss';
import { RouterPath } from '@/shared/const/router';

export const Navbar = memo(() => {
  const { t } = useTranslation();

  const { authData } = useSelector(getUserAuthData);

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const onCloseAuthModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  const onOpenAuthModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  const userAreaButtons = authData ? (
    <HStack maxWidth justify="between" align="center">
      <AppLink to={RouterPath.article_create} color={AppLinkColor.SECONDARY}>
        {t('translation:navbar.createArticle')}
      </AppLink>
      <HStack gap="16" className={styles.dropdownWrapper}>
        <NotificationModal />
        <NavbarMenuDropDown authData={authData} />
      </HStack>
    </HStack>
  ) : (
    <Button variant={ButtonVariants.CLEAR_INVERTED} className={styles.authButton} onClick={onOpenAuthModal}>
      {t('translation:navbar.authModalButton.login')}
    </Button>
  );

  return (
    <HStack Component="header" align="center" maxWidth className={styles.container}>
      <Text variant={TextVariant.INVERTED} className={styles.mainTitle} title={t('translation:mainTitleLogo')} />
      <div className={styles.links}>
        {userAreaButtons}
      </div>
      <LoginModal onClose={onCloseAuthModal} isOpen={isAuthModalOpen} />
    </HStack>
  );
});
