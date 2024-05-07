import {
  memo, MutableRefObject, ReactNode, useRef,
} from 'react';
import classNames from 'classnames/bind';

import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';

import styles from './Page.module.scss';

const cx = classNames.bind(styles);

interface PageProps {
  className?: string;
  children?: ReactNode;
  onScrollEnd?: () => void
}

export const Page = memo(({ className, children, onScrollEnd }: PageProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section ref={wrapperRef} className={cx(styles.container, className)}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
