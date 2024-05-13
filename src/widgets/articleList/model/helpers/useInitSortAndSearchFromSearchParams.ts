import { useLayoutEffect } from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useSearchParams } from 'react-router-dom';

import { articlesSortActions } from 'features/articleList/model/slices/articlesSortSlice';
import { articlesSearchActions } from 'features/articleList/model/slices/articlesSearchSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';

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
