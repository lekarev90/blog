import { memo } from 'react';
import { useSelector } from 'react-redux';

import classNames from 'classnames/bind';

import { getUserAuthData } from '@/entities/User';
import { AppLink, AppLinkColor } from '@/shared/ui/depricated/AppLink';

import { ISidebarItem } from '../../model/types/types';

import styles from './SidebarItem.module.scss';

const cx = classNames.bind(styles);

interface SidebarItemProps {
  item: ISidebarItem
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { authData } = useSelector(getUserAuthData);

  const {
    path, text, Icon, isAuthOnly,
  } = item;

  if (isAuthOnly && !authData) {
    return null;
  }

  return (
    <AppLink
      className={cx(styles.menuItem, { collapsed })}
      color={AppLinkColor.SECONDARY}
      to={path}
    >
      <Icon width={20} height={20} className={styles.icon} />
      <span className={styles.link}>
        {text}
      </span>
    </AppLink>
  );
});
