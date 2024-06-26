import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/authByUsername';
import { NotificationModal } from '@/features/navbar';
import { getRouteArticleCreate } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink } from '@/shared/ui/depricated/AppLink';
import { Button as ButtonDeprecated, ButtonVariants } from '@/shared/ui/depricated/Button';
import { Text, TextVariant } from '@/shared/ui/depricated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';

import { NavbarMenuDropDown } from '../NavbarMenuDropDown/NavbarMenuDropDown';

import styles from './Navbar.module.scss';

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
    <ToggleFeatures
      feature="isOldDesign"
      on={(
        <HStack maxWidth justify="between" align="center">
          <AppLink to={getRouteArticleCreate()} variant="secondary">
            {t('translation:navbar.createArticle')}
          </AppLink>
          <HStack gap="16" align="center" className={styles.dropdownWrapper}>
            <NotificationModal />
            <NavbarMenuDropDown authData={authData} />
          </HStack>
        </HStack>
      )}
      off={(
        <HStack gap="16" align="center" flexWrap={false}>
          <NotificationModal />
          <NavbarMenuDropDown authData={authData} />
        </HStack>
      )}
    />
  ) : (
    <ToggleFeatures
      feature="isOldDesign"
      on={(
        <ButtonDeprecated variant={ButtonVariants.CLEAR_INVERTED} className={styles.authButton} onClick={onOpenAuthModal}>
          {t('translation:navbar.authModalButton.login')}
        </ButtonDeprecated>
      )}
      off={(
        <Button variant="clear" className={styles.authButton} onClick={onOpenAuthModal}>
          {t('translation:navbar.authModalButton.login')}
        </Button>
      )}
    />
  );

  return (
    <ToggleFeatures
      feature="isOldDesign"
      on={(
        <HStack Component="header" align="center" maxWidth className={styles.container}>
          <Text variant={TextVariant.INVERTED} className={styles.mainTitle} title={t('translation:mainTitleLogo')} />
          <div className={styles.links}>
            {userAreaButtons}
          </div>
          <LoginModal onClose={onCloseAuthModal} isOpen={isAuthModalOpen} />
        </HStack>
      )}
      off={(
        <HStack Component="header" align="center" className={styles.containerV2}>
          <div className={styles.links}>
            {userAreaButtons}
          </div>
          <LoginModal onClose={onCloseAuthModal} isOpen={isAuthModalOpen} />
        </HStack>
      )}
    />
  );
});
