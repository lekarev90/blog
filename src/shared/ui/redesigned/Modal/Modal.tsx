import { ReactNode } from 'react';

import classNames from 'classnames/bind';

import { toggleFeatures } from '@/shared/lib/features';
import { useModal } from '@/shared/lib/hooks/useModal';

import { Overlay } from '../Overlay';
import { Portal } from '../Portal';

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

  const designedClassname = toggleFeatures({
    name: 'isOldDesign',
    on: () => 'oldDesign',
    off: () => 'newDesign',
  });

  const containerClassNames = cx(styles.container, designedClassname, className, mods);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal element={document.getElementById('app') ?? document.body}>
      <div className={containerClassNames}>
        <Overlay onClick={onCloseHandler} />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
