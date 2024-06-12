import { ReactNode } from 'react';

import classNames from 'classnames/bind';

import { useModal } from '@/shared/lib/hooks/useModal';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal = ({
  className, children, isOpen, onClose, lazy,
}: ModalProps) => {
  const { isClosed, isMounted, onCloseHandler } = useModal({ isOpen, onClose });

  const mods: Record<string, boolean | undefined> = {
    isOpen,
    isClosed,
  };

  const containerClassNames = cx(styles.container, className, mods);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={containerClassNames}>
        <Overlay onClick={onCloseHandler} />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
