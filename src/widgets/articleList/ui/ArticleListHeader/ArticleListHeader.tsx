import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Input } from '@/shared/ui/Input';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { ArticlesListSort, ArticlesListTabs, ArticlesListViewSwitcher } from '@/features/articleList';
import { EArticlesView, EArticleTypes } from '@/entities/Article';

import { articlesSearchActions, articlesSearchReducer } from '../../model/slices/articlesSearchSlice';
import { getArticlesSearchText } from '../../model/selectors/articlesSearch.selectors';
import { articlesListActions } from '../../model/slices/articlesListSlice';
import { fetchArticlesList } from '../../model/services/fetchArticlesList';
import { getArticlesListData } from '../../model/selectors/articlesList.selectors';

const reducers = {
  articlesSearch: articlesSearchReducer,
};

export const ArticleListHeader = memo(() => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();

  const { type = EArticleTypes.ALL } = useSelector(getArticlesSearchText) || {};
  const { articlesView = EArticlesView.GRID } = useSelector(getArticlesListData) || {};

  const fetchArticlesWithFullReset = useCallback(() => {
    dispatch(articlesListActions.setPage(1));
    dispatch(fetchArticlesList({ withSetAll: true }));
  }, [dispatch]);

  const onChangeSearchText = useDebounce(useCallback(
    (value) => {
      dispatch(articlesSearchActions.setSearch(value));
      fetchArticlesWithFullReset();
    },
    [dispatch, fetchArticlesWithFullReset],
  ), 1000);

  const onTypeClick = useCallback(({ value }: { value: EArticleTypes }) => {
    dispatch(articlesSearchActions.setType(value));
    fetchArticlesWithFullReset();
  }, [dispatch, fetchArticlesWithFullReset]);

  const onSwitchView = useCallback((view: EArticlesView) => {
    dispatch(articlesListActions.setArticlesView(view));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack justify="between">
        <ArticlesListSort onSwitchSort={fetchArticlesWithFullReset} />
        <ArticlesListViewSwitcher onSwitchView={onSwitchView} currentArticleView={articlesView} />
      </HStack>
      <VStack gap="8">
        <HStack Component={Card}>
          <Input name="search" placeholder={t('articles:search.placeholder')} onChange={onChangeSearchText} />
        </HStack>
        <ArticlesListTabs onTabClick={onTypeClick} currentType={type} />
      </VStack>
    </DynamicModuleLoader>
  );
});
