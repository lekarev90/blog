import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Avatar } from 'shared/ui/Avatar/Avatar';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { useSelector } from 'react-redux';
import {
  isUserAdmin, isUserManager, IUser, userActions,
} from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';

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
  ];

  return (
    <Dropdown
      TriggerComponent={(
        <Avatar
          src={authData.avatar}
          alt={authData.username}
          size={55}
        />
      )}
      items={droDownItems}
    />
  );
});
