import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { Page } from '@/shared/ui/Page';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import {
  ArticlesList, fetchNextArticlesListPage, getArticles, getArticlesListData,
} from '@/widgets/articleList';
import { ArticleListHeader } from '@/features/articleList';

import { VStack } from '@/shared/ui/Stack';

const ArticlesPage = memo(() => {
  const dispatch = useAppDispatch();
  const { isLoading } = useSelector(getArticlesListData) || {};

  const articles = useSelector(getArticles.selectAll);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesListPage());
  }, [dispatch]);

  return (
    <Page onScrollEnd={onLoadNextPart}>
      <VStack Component="section" gap="32">
        <ArticleListHeader />
        <ArticlesList articles={articles} isLoading={isLoading} withMoreButton />
      </VStack>
    </Page>
  );
});

export default ArticlesPage;
