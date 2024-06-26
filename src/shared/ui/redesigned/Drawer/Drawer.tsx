import {
  memo, ReactNode, useCallback, useEffect,
} from 'react';

import classNames from 'classnames/bind';

import { AnimationProvider, useAnimationLibs } from '@/shared/lib/components/AnimationProvider';
import { toggleFeatures } from '@/shared/lib/features';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import styles from './Drawer.module.scss';

interface IDrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const cx = classNames.bind(styles);

const height = window.innerHeight - 100;

export const DrawerContent = memo(({
  className, children, onClose, isOpen,
}: IDrawerProps) => {
  const { Spring, Gesture } = useAnimationLibs();
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [api, isOpen, openDrawer]);

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    });
  };

  const bind = Gesture.useDrag(
    ({
      last, velocity: [, vy], direction: [, dy], movement: [, my], cancel,
    }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close();
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: my, immediate: true });
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    },
  );

  if (!isOpen) {
    return null;
  }

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  const designedClassname = toggleFeatures({
    name: 'isOldDesign',
    on: () => 'oldDesign',
    off: () => 'newDesign',
  });

  return (
    <Portal element={document.getElementById('app') ?? document.body}>
      <div
        className={cx(styles.container, designedClassname, className)}
      >
        <Overlay onClick={close} />
        <Spring.a.div
          className={styles.content}
          style={{
            display,
            bottom: `calc(-100vh + ${height - 100}px)`,
            y,
          }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
});

const DrawerAsync = (props: IDrawerProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return <DrawerContent {...props} />;
};

export const Drawer = (props: IDrawerProps) => (
  <AnimationProvider>
    <DrawerAsync {...props} />
  </AnimationProvider>
);
