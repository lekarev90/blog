import {
  memo, useCallback, useEffect, useState,
} from 'react';
import { useSelector } from 'react-redux';

import { EArticlesView } from '@/entities/Article';
import { ArticlesListViewSwitcher } from '@/features/articleList';
import { LOCALSTORAGE_ARTICLES_LIST_VIEW_KEY } from '@/shared/const/localstorage';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import { Page } from '@/shared/ui/depricated/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import {
  ArticleListFilters,
  ArticleListHeader,
  ArticlesList,
  fetchNextArticlesListPage,
  getArticles,
  getArticlesListData,
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

  useEffect(() => {
    dispatch(fetchNextArticlesListPage());
  }, [dispatch]);

  return (
    <Page onScrollEnd={onLoadNextPart}>
      <ToggleFeatures
        feature="isOldDesign"
        on={(
          <VStack Component="section" gap="32">
            <ArticleListHeader articlesView={articlesView} onSwitchArticleSwitch={onSwitchArticleSwitch} />
            <ArticlesList articles={articles} isLoading={isLoading} articlesView={articlesView} withMoreButton />
          </VStack>
        )}
        off={(
          <StickyContentLayout
            content={<ArticlesList articles={articles} isLoading={isLoading} articlesView={articlesView} withMoreButton />}
            left={<ArticlesListViewSwitcher onSwitchView={onSwitchArticleSwitch} currentArticleView={articlesView} />}
            right={<ArticleListFilters />}
          />
        )}
      />
    </Page>
  );
});

export default ArticlesPage;
