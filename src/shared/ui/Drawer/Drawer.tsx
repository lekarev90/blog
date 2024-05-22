import { memo, ReactNode } from 'react';
import classNames from 'classnames/bind';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import styles from './Drawer.module.scss';

const cx = classNames.bind(styles);

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Drawer = memo(({
  className, children, isOpen, onClose,
}: DrawerProps) => (
  <Portal>
    <div className={cx(styles.container, className, { isOpen })}>
      <Overlay onClick={onClose} />
      <div
        className={styles.content}
      >
        {children}
      </div>
    </div>
  </Portal>
));
