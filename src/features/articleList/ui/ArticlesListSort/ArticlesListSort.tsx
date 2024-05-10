import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';

import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';
import { articlesListActions, fetchArticlesList } from 'widgets/articleList';

import { getArticlesSortData } from '../../selectors/articlesSort.selectors';
import { EArticleSortField, ESortFieldNames } from '../../model/types/articlesSort';
import { articlesSortActions, articlesSortReducer } from '../../model/slices/articlesSortSlice';

import styles from './ArticlesListSort.module.scss';

const reducers = {
  articlesSort: articlesSortReducer,
};

export const ArticlesListSort = memo(() => {
  const { t } = useTranslation('articles');

  const dispatch = useAppDispatch();

  const { orderBy, sortBy } = useSelector(getArticlesSortData) || {};

  const orderOptions = useMemo<SelectOptions[]>(
    () => [
      {
        value: 'asc',
        content: t('articles:sort.orderBy.asc'),
      },
      {
        value: 'desc',
        content: t('articles:sort.orderBy.desc'),
      },
    ],
    [t],
  );

  const sortOptions = useMemo<SelectOptions[]>(
    () => [
      {
        value: EArticleSortField.CREATED,
        content: t('articles:sort.sortBy.created'),
      },
      {
        value: EArticleSortField.VIEWS,
        content: t('articles:sort.sortBy.views'),
      },
      {
        value: EArticleSortField.TITLE,
        content: t('articles:sort.sortBy.title'),
      },
    ],
    [t],
  );

  const { setOrder, setSort } = articlesSortActions;

  // TODO разобраться с any - ActionCreatorWithPayload<any>
  const handlers = useMemo<Record<ESortFieldNames, ActionCreatorWithPayload<any>>>(
    () => ({
      [ESortFieldNames.ORDER_BY]: setOrder,
      [ESortFieldNames.SORT_BY]: setSort,
    }),
    [setOrder, setSort],
  );

  const onSwitchSortHandler = useCallback(
    (value: string, name: ESortFieldNames) => {
      dispatch(handlers[name](value));
      dispatch(articlesListActions.setPage(1));
      dispatch(fetchArticlesList({ withSetAll: true }));
    },
    [dispatch, handlers],
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <div className={styles.container}>
        <Select<ESortFieldNames.SORT_BY>
          options={sortOptions}
          value={sortBy}
          name={ESortFieldNames.SORT_BY}
          onChange={onSwitchSortHandler}
          label={t('articles:sortBy')}
        />
        <Select<ESortFieldNames.ORDER_BY>
          options={orderOptions}
          value={orderBy}
          name={ESortFieldNames.ORDER_BY}
          onChange={onSwitchSortHandler}
          label={t('articles:orderBy')}
        />
      </div>
    </DynamicModuleLoader>
  );
});
