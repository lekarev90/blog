import { IStateSchema } from 'app/providers/StoreProvider';
import { createSelector } from 'reselect';

export const getScroll = (state: IStateSchema) => state.scroll;

export const getScrollByPath = createSelector(
  getScroll,
  (state: IStateSchema, pathname: string) => pathname,
  (scroll, pathname) => scroll.pagesData[pathname as keyof typeof scroll] || 0,
);
