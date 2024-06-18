import {
  memo, MutableRefObject, ReactNode, useRef, UIEvent, useLayoutEffect,
} from 'react';
import { useSelector } from 'react-redux';

import classNames from 'classnames/bind';
import { useLocation } from 'react-router';

import { IStateSchema } from '@/app/providers/StoreProvider';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll';
import { ITestId } from '@/shared/types/tests';

import { getScrollByPath } from './model/selectors/scroll.selectors';
import { scrollActions } from './model/slices/scrollSlice';

import styles from './Page.module.scss';

const cx = classNames.bind(styles);

interface PageProps extends ITestId {
  className?: string;
  children?: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo(({
  className, children, onScrollEnd, 'data-testid': dataTestId,
}: PageProps) => {
  const dispatch = useAppDispatch();

  const { pathname } = useLocation();

  const pageScrollPosition = useSelector((state: IStateSchema) => getScrollByPath(state, pathname));

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef: toggleFeatures({
      name: 'isOldDesign',
      on: () => wrapperRef,
      off: () => undefined,
    }),
    callback: onScrollEnd,
  });

  const dispatchScrollDebounced = useDebounce((scrollTop: number) => {
    dispatch(
      scrollActions.setScroll({
        position: scrollTop,
        pathname,
      }),
    );
  }, 100);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const { scrollTop } = e.currentTarget;
    dispatchScrollDebounced(scrollTop);
  };

  useLayoutEffect(() => {
    wrapperRef.current.scrollTop = pageScrollPosition;
  });

  return (
    <ToggleFeatures
      feature="isOldDesign"
      on={(
        <main ref={wrapperRef} className={cx(styles.container, className)} onScroll={handleScroll} data-testid={dataTestId}>
          {children}
          <div ref={triggerRef} />
        </main>
      )}
      off={(
        <main ref={wrapperRef} onScroll={handleScroll} data-testid={dataTestId}>
          {children}
          <div ref={triggerRef} />
        </main>
      )}
    />
  );
});
