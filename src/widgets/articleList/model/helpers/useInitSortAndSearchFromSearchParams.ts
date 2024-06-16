import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useSearchParams } from 'react-router-dom';

import { articlesSearchActions, articlesSortActions, getArticlesSortData } from '@/features/articleList';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';

import { getArticlesSearchText } from '../selectors/articlesSearch.selectors';

export const useInitSortAndSearchFromSearchParams = () => {
  const actions: Record<string, ActionCreatorWithPayload<any>> = {
    _sort: articlesSortActions.setSort,
    _order: articlesSortActions.setOrder,
    q: articlesSearchActions.setSearch,
    types_like: articlesSearchActions.setType,
  };

  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const { initialized } = useSelector(getArticlesSortData) || {};
  const { sortBy, orderBy } = useSelector(getArticlesSortData) || {};
  const { text, type } = useSelector(getArticlesSearchText) || {};

  useEffect(() => {
    if (!initialized) {
      // @ts-ignore
      searchParams.entries().forEach(([param, value]) => {
        const actionCreator = actions[param];

        if (actionCreator) {
          dispatch(actionCreator(value));
        }
      });

      dispatch(articlesSortActions.init());
    }

    if (initialized && !searchParams.size) {
      addQueryParams({
        _sort: sortBy,
        _order: orderBy,
        q: text,
        types_like: type,
      });
    }
  });
};
