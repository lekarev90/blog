import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Dropdown';
import {
  isUserAdmin, isUserManager, IUser, userActions,
} from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';

interface NavbarMenuDropDownProps {
  authData: IUser;
}

export const NavbarMenuDropDown = memo(({ authData }: NavbarMenuDropDownProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const isShowAdminLink = isAdmin || isManager;

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const droDownItems = [
    ...(isShowAdminLink
      ? [
        {
          value: t('translation:navbar.adminLink'),
          to: getRouteAdmin(),
        },
      ]
      : []),
    {
      value: t('translation:navbar.profileLink'),
      to: getRouteProfile(authData.id),
    },
    {
      value: t('translation:navbar.authModalButton.logout'),
      onClick: onLogout,
    },
  ];

  return (
    <Dropdown
      TriggerComponent={(
        <Avatar
          invertedDefaultAvatar
          src={authData.avatar}
          alt={authData.username}
          size={55}
        />
      )}
      items={droDownItems}
    />
  );
});
