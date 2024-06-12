import { memo, useCallback, useState } from 'react';

import { BrowserView, MobileView } from 'react-device-detect';
import { Popover } from '@/shared/ui/Popover';
import Notification from '@/shared/assets/icons/notification-20-20.svg';
import { Icon } from '@/shared/ui/Icon';
import { NotificationList } from '@/entities/Notification';

import { Drawer } from '@/shared/ui/Drawer';
import { Button } from '@/shared/ui/Button';

import styles from './NotificationModal.module.scss';

export const NotificationModal = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const triggerComponent = (
    <Icon
      Svg={Notification}
      className={styles.icon}
      height={25}
      width={25}
      inverted
    />
  );

  return (
    <>
      <BrowserView>
        <Popover TriggerComponent={triggerComponent}>
          <div className={styles.scrollContainer}>
            <NotificationList />
          </div>
        </Popover>
      </BrowserView>
      <MobileView>
        <Button onClick={onOpenDrawer}>
          {triggerComponent}
        </Button>
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </>
  );
});
