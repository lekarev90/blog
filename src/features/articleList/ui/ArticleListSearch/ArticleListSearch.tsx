import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Input } from 'shared/ui/Input/Input';
import { Card } from 'shared/ui/Card/Card';
import { HStack, VStack } from 'shared/ui/Stack';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';

import { articlesListActions, fetchArticlesList } from 'widgets/articleList';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useDebounce } from 'shared/lib/hooks/useDebounce';

import { ArticlesListTabs } from '../ArticlesListTabs/ArticlesListTabs';
import { articlesSearchActions, articlesSearchReducer } from '../../model/slices/articlesSearchSlice';

const reducers = {
  articlesSearch: articlesSearchReducer,
};

export const ArticleListSearch = memo(() => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();

  const onChangeSearchText = useDebounce(useCallback(
    (value) => {
      dispatch(articlesSearchActions.setSearch(value));
      dispatch(articlesListActions.setPage(1));
      dispatch(fetchArticlesList({ withSetAll: true }));
    },
    [dispatch],
  ), 1000);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack gap="8">
        <HStack Component={Card}>
          <Input name="search" placeholder={t('articles:search.placeholder')} onChange={onChangeSearchText} />
        </HStack>
        <ArticlesListTabs />
      </VStack>
    </DynamicModuleLoader>
  );
});
