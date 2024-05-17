import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { Page } from 'shared/ui/Page/Page';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';
import {
  ArticlesList, fetchNextArticlesListPage, getArticlesListData, getArticles,
} from 'widgets/articleList';
import { ArticleListSearch, ArticlesListSort, ArticlesListViewSwitcher } from 'features/articleList';

import { HStack, VStack } from 'shared/ui/Stack';

const ArticlesPage = memo(() => {
  const dispatch = useAppDispatch();
  const { isLoading } = useSelector(getArticlesListData) || {};

  const articles = useSelector(getArticles.selectAll);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesListPage());
  }, [dispatch]);

  return (
    <Page onScrollEnd={onLoadNextPart}>
      <VStack Component="section" gap="16">
        <VStack justify="between" gap="16">
          <HStack justify="between">
            <ArticlesListSort />
            <ArticlesListViewSwitcher />
          </HStack>
          <ArticleListSearch />
        </VStack>
        <ArticlesList articles={articles} isLoading={isLoading} withMoreButton />
      </VStack>
    </Page>
  );
});

export default ArticlesPage;
