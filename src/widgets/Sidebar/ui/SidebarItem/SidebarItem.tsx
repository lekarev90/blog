import { memo } from 'react';
import { useSelector } from 'react-redux';

import classNames from 'classnames/bind';

import { getUserAuthData } from '@/entities/User';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/depricated/AppLink';
import { Icon as IconDeprecated } from '@/shared/ui/depricated/Icon';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';

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
    path, text, Icon: ItemIcon, isAuthOnly,
  } = item;

  if (isAuthOnly && !authData) {
    return null;
  }

  return (
    <ToggleFeatures
      feature="isOldDesign"
      on={(
        <AppLinkDeprecated
          className={cx(styles.menuItem, { collapsed })}
          variant="secondary"
          to={path}
        >
          <IconDeprecated Svg={ItemIcon} width={20} height={20} className={styles.icon} />
          <span className={styles.link}>
            {text}
          </span>
        </AppLinkDeprecated>
)}
      off={(
        <AppLink
          activeClassName={styles.activeLink}
          className={cx(styles.menuItem, { collapsedV2: collapsed })}
          to={path}
        >
          <Icon Svg={ItemIcon} className={styles.iconV2} />
          <span className={styles.link}>
            {text}
          </span>
        </AppLink>
)}
    />
  );
});
