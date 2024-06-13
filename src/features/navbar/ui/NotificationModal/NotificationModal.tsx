import { memo, useCallback, useState } from 'react';

import { BrowserView, MobileView } from 'react-device-detect';

import { NotificationList } from '@/entities/Notification';
import Notification from '@/shared/assets/icons/notification-20-20.svg';
import { Button } from '@/shared/ui/depricated/Button';
import { Drawer } from '@/shared/ui/depricated/Drawer';
import { Icon } from '@/shared/ui/depricated/Icon';
import { Popover } from '@/shared/ui/depricated/Popover';

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
      height={20}
      width={20}
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
