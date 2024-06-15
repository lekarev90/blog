import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import {
  isUserAdmin, isUserManager, IUser, userActions,
} from '@/entities/User';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import { Avatar as AvatarDeprecated } from '@/shared/ui/depricated/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/depricated/Dropdown';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Dropdown } from '@/shared/ui/redesigned/Dropdown';

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
    <ToggleFeatures
      feature="isOldDesign"
      on={(
        <DropdownDeprecated
          TriggerComponent={<AvatarDeprecated invertedDefaultAvatar src={authData.avatar} alt={authData.username} size={25} />}
          items={droDownItems}
        />
      )}
      off={(
        <Dropdown
          TriggerComponent={<Avatar src={authData.avatar} alt={authData.username} size={40} />}
          items={droDownItems}
        />
      )}
    />
  );
});
