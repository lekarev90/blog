import classNames from 'classnames/bind';
import React, {
  ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';

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

const ANIMATION_DELAY = 300;

export const Modal = ({
  className, children, isOpen, onClose, lazy,
}: ModalProps) => {
  const [isClosed, setIsClosed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const onCloseHandler = useCallback(() => {
    if (onClose) {
      setIsClosed(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosed(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCloseHandler();
      }
    },
    [onCloseHandler],
  );

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      clearTimeout(timerRef.current);
    };
  }, [isOpen, onKeyDown]);

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
