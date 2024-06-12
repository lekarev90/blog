import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { EArticlesView } from '@/entities/Article';
import { LOCALSTORAGE_ARTICLES_LIST_VIEW_KEY } from '@/shared/const/localstorage';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import { Page } from '@/shared/ui/Page';
import { VStack } from '@/shared/ui/Stack';
import {
  ArticleListHeader, ArticlesList, fetchNextArticlesListPage, getArticles, getArticlesListData,
} from '@/widgets/articleList';

const ArticlesPage = memo(() => {
  const dispatch = useAppDispatch();
  const { isLoading } = useSelector(getArticlesListData) || {};
  const initView = (localStorage.getItem(LOCALSTORAGE_ARTICLES_LIST_VIEW_KEY) as EArticlesView) || EArticlesView.LIST;

  const [articlesView, setArticlesView] = useState(initView);

  const articles = useSelector(getArticles.selectAll);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesListPage());
  }, [dispatch]);

  const onSwitchArticleSwitch = (newView: EArticlesView) => {
    setArticlesView(newView);
    localStorage.setItem(LOCALSTORAGE_ARTICLES_LIST_VIEW_KEY, newView);
  };

  return (
    <Page onScrollEnd={onLoadNextPart}>
      <VStack Component="section" gap="32">
        <ArticleListHeader articlesView={articlesView} onSwitchArticleSwitch={onSwitchArticleSwitch} />
        <ArticlesList articles={articles} isLoading={isLoading} articlesView={articlesView} withMoreButton />
      </VStack>
    </Page>
  );
});

export default ArticlesPage;
