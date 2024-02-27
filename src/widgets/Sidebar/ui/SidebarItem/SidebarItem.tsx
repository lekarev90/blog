import { memo } from 'react';

import classNames from 'classnames/bind';

import { AppLink, AppLinkColor } from 'shared/ui/AppLink/AppLink';
import { ISidebarItem } from 'widgets/Sidebar/model/items';

import styles from './SidebarItem.module.scss';

const cx = classNames.bind(styles);

interface SidebarItemProps {
  item: ISidebarItem
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => (
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
));
