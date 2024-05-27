import { memo } from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';

import { AppLink, AppLinkColor } from '@/shared/ui/AppLink';

import { ISidebarItem } from '../../model/types/types';

import styles from './SidebarItem.module.scss';

const cx = classNames.bind(styles);

interface SidebarItemProps {
  item: ISidebarItem
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { authData } = useSelector(getUserAuthData);

  if (item.isAuthOnly && !authData) {
    return null;
  }

  return (
    <AppLink
      className={cx(styles.menuItem, { collapsed })}
      color={AppLinkColor.SECONDARY}
      to={item.path}
    >
      <item.Icon className={styles.icon} />
      <span className={styles.link}>
        {item.text}
      </span>
    </AppLink>
  );
});
