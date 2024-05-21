import { memo } from 'react';

import { Popover } from 'shared/ui/Popover/Popover';
import Notification from 'shared/assets/icons/notification-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notification';

import styles from './NotificationModal.module.scss';

export const NotificationModal = memo(() => (
  <Popover TriggerComponent={<Icon Svg={Notification} className={styles.icon} inverted />}>
    <div className={styles.scrollContainer}>
      <NotificationList />
    </div>
  </Popover>
));
