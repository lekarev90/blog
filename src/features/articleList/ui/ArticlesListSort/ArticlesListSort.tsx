import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';

import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import { TSortOrder } from '@/shared/types/sort';
import { Select, SelectOptions } from '@/shared/ui/depricated/Select';
import { HStack } from '@/shared/ui/redesigned/Stack';

import { EArticleSortField, ESortFieldNames } from '../../model/const/const';
import { getArticlesSortData } from '../../model/selectors/articlesSort.selectors';
import { articlesSortActions, articlesSortReducer } from '../../model/slices/articlesSortSlice';

type TSwitchValue = EArticleSortField | TSortOrder;

interface IArticlesListSortProps {
  onSwitchSort: () => void;
}

const reducers = {
  articlesSort: articlesSortReducer,
};

export const ArticlesListSort = memo(({ onSwitchSort }: IArticlesListSortProps) => {
  const { t } = useTranslation('articles');

  const dispatch = useAppDispatch();

  const { orderBy, sortBy } = useSelector(getArticlesSortData) || {};

  const orderOptions = useMemo<SelectOptions<TSortOrder>[]>(
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

  const sortOptions = useMemo<SelectOptions<EArticleSortField>[]>(
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
    (value: TSwitchValue, name: ESortFieldNames) => {
      dispatch(handlers[name](value));
      onSwitchSort();
    },
    [dispatch, handlers, onSwitchSort],
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <HStack gap="8" flexWrap={false}>
        <Select
          options={sortOptions}
          value={sortBy}
          name={ESortFieldNames.SORT_BY}
          onChange={onSwitchSortHandler}
          label={t('articles:sortBy')}
        />
        <Select
          options={orderOptions}
          value={orderBy}
          name={ESortFieldNames.ORDER_BY}
          onChange={onSwitchSortHandler}
          label={t('articles:orderBy')}
        />
      </HStack>
    </DynamicModuleLoader>
  );
});
