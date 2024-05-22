import {
  useCallback, useEffect, useRef, useState,
} from 'react';

interface UseModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  animationDelay?: number;
}

export const useModal = ({ isOpen, onClose, animationDelay = 300 }: UseModalProps) => {
  const [isClosed, setIsClosed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const onCloseHandler = useCallback(() => {
    setIsClosed(true);

    timerRef.current = setTimeout(() => {
      onClose?.();
      setIsClosed(false);
    }, animationDelay);
  }, [onClose, animationDelay]);

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

  return {
    isClosed,
    isMounted,
    onCloseHandler,
  };
};
