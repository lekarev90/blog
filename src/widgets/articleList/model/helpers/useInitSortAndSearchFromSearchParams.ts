import { useLayoutEffect } from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useSearchParams } from 'react-router-dom';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import { articlesSortActions, articlesSearchActions } from '@/features/articleList';

export const useInitSortAndSearchFromSearchParams = () => {
  const actions: Record<string, ActionCreatorWithPayload<any>> = {
    _sort: articlesSortActions.setSort,
    _order: articlesSortActions.setOrder,
    q: articlesSearchActions.setSearch,
  };

  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  useLayoutEffect(() => {
  // @ts-ignore
    searchParams.entries().forEach(([param, value]) => {
      const actionCreator = actions[param];

      if (actionCreator) {
        dispatch(actionCreator(value));
      }
    });
  });
};
