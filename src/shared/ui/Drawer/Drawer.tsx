import { memo, ReactNode } from 'react';
import classNames from 'classnames/bind';

import { useModal } from '@/shared/lib/hooks/useModal';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import styles from './Drawer.module.scss';

const cx = classNames.bind(styles);

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean
}

export const Drawer = memo(({
  className, children, isOpen, onClose, lazy,
}: DrawerProps) => {
  const { onCloseHandler, isMounted, isClosed } = useModal({ isOpen, onClose });

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={cx(styles.container, className, { isOpen, isClosed })}>
        <Overlay onClick={onCloseHandler} />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
});
