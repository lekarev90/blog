import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import { EArticlesView, EArticleTypes } from '@/entities/Article';
import {
  ArticlesListSort, ArticlesListTabs, ArticlesListViewSwitcher, articlesSearchActions,
} from '@/features/articleList';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { Card } from '@/shared/ui/depricated/Card';
import { Input } from '@/shared/ui/depricated/Input';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import { articlesListActions } from '../..';
import { getArticlesSearchText } from '../../model/selectors/articlesSearch.selectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList';

interface IArticleListHeaderProps {
  articlesView: EArticlesView;
  onSwitchArticleSwitch: (newView: EArticlesView) => void;
}

export const ArticleListHeader = memo(({ articlesView, onSwitchArticleSwitch }: IArticleListHeaderProps) => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();

  const { type = EArticleTypes.ALL } = useSelector(getArticlesSearchText) || {};
  const { text = '' } = useSelector(getArticlesSearchText) || {};

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

  return (
    // <DynamicModuleLoader reducers={reducers}>
    <>
      <HStack justify="between">
        <ArticlesListSort onSwitchSort={fetchArticlesWithFullReset} />
        <ArticlesListViewSwitcher onSwitchView={onSwitchArticleSwitch} currentArticleView={articlesView} />
      </HStack>
      <VStack gap="8">
        <HStack Component={Card}>
          <Input name="search" placeholder={t('articles:search.placeholder')} onChange={onChangeSearchText} value={text} />
        </HStack>
        <ArticlesListTabs onTabClick={onTypeClick} currentType={type} />
      </VStack>
    </>
    // </DynamicModuleLoader>
  );
});
