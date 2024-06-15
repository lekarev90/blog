import { memo, useCallback, useState } from 'react';

import { BrowserView, MobileView } from 'react-device-detect';

import { NotificationList } from '@/entities/Notification';
import NotificationIconDeprecated from '@/shared/assets/icons/notification-20-20.svg';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button as DeprecatedButton } from '@/shared/ui/depricated/Button';
import { Drawer } from '@/shared/ui/depricated/Drawer';
import { Icon as IconDeprecated } from '@/shared/ui/depricated/Icon';
import { Popover as PopoverDeprecated } from '@/shared/ui/depricated/Popover';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popover';

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
    <ToggleFeatures
      feature="isOldDesign"
      on={<IconDeprecated Svg={NotificationIconDeprecated} className={styles.icon} height={20} width={20} inverted />}
      off={(
        <Icon
          clickable
          onClick={onOpenDrawer}
          Svg={NotificationIcon}
          className={styles.icon}
          height={20}
          width={20}
        />
)}
    />
  );

  return (
    <>
      <BrowserView>
        <ToggleFeatures
          feature="isOldDesign"
          on={(
            <PopoverDeprecated TriggerComponent={triggerComponent}>
              <div className={styles.scrollContainer}>
                <NotificationList />
              </div>
            </PopoverDeprecated>
          )}
          off={(
            <Popover TriggerComponent={triggerComponent}>
              <div className={styles.scrollContainer}>
                <NotificationList />
              </div>
            </Popover>
          )}
        />
      </BrowserView>
      <MobileView>
        <ToggleFeatures
          feature="isOldDesign"
          on={(
            <>
              <DeprecatedButton onClick={onOpenDrawer}>
                {triggerComponent}
              </DeprecatedButton>
              <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                <NotificationList />
              </Drawer>
            </>
          )}
          off={(
            <>
              {triggerComponent}
              <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                <NotificationList />
              </Drawer>
            </>
          )}
        />
      </MobileView>
    </>
  );
});
