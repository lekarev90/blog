import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { LoginModal } from 'features/AuthByUsername';
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';
import { Button, ButtonVariants } from 'shared/ui/Button/Button';

import { AppLink, AppLinkColor } from 'shared/ui/AppLink/AppLink';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import { Text, TextVariant } from 'shared/ui/Text/Text';

import { HStack } from 'shared/ui/Stack';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';

import styles from './Navbar.module.scss';

export const Navbar = memo(() => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const { authData } = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const isShowAdminLink = isAdmin || isManager;

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
    <HStack maxWidth justify="between" align="center">
      <AppLink to={RouterPath.article_create} color={AppLinkColor.SECONDARY}>
        {t('translation:navbar.createArticle')}
      </AppLink>
      <div className={styles.dropdownWrapper}>
        <Dropdown
          TriggerComponent={<Avatar src={authData.avatar} alt={authData.username} size={55} />}
          items={[
            ...(isShowAdminLink
              ? [
                {
                  value: t('translation:navbar.adminLink'),
                  to: `${RouterPath.admin_panel}`,
                },
              ]
              : []),
            {
              value: t('translation:navbar.profileLink'),
              to: `${RouterPath.profile}/${authData.id}`,
            },
            {
              value: t('translation:navbar.authModalButton.logout'),
              onClick: onLogout,
            },
          ]}
        />
      </div>
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
