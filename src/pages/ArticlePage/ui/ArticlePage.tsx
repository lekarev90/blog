import React, { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { Page } from 'shared/ui/Page/Page';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';

import { ARTICLES_LIST_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ARTICLES_LIST_DATA } from '../../../entities/Article/model/const/const';

import { ArticleList, EArticleView } from '../../../entities/Article';
import { getArticlesListHasMore, getArticlesListIsLoading } from '../../../entities/Article/model/selectors/articlesList.selectors';
import { fetchArticlesList } from '../../../entities/Article/model/services/fetchArticlesList';
import { articlesListReducer } from '../../../entities/Article/model/slice/articlesListSlice';

const reducers = {
  articlesList: articlesListReducer,
};

const ArticlePage = memo(() => {
  const dispatch = useAppDispatch();

  const initialArticleListView = (localStorage.getItem(ARTICLES_LIST_VIEW_LOCALSTORAGE_KEY) as EArticleView) || EArticleView.LIST;

  const [articleView, setArticleView] = useState(initialArticleListView);

  const hasMoreArticles = useSelector(getArticlesListHasMore);
  const isLoading = useSelector(getArticlesListIsLoading);

  const onSwitchArticleView = useCallback((view: EArticleView) => {
    setArticleView(view);
    localStorage.setItem(ARTICLES_LIST_VIEW_LOCALSTORAGE_KEY, view);
  }, []);

  const onLoadNextPart = useCallback(() => {
    const quantityLoadItems = ARTICLES_LIST_DATA[articleView].SKELETON_QUANTITY;

    if (hasMoreArticles && !isLoading) {
      dispatch(fetchArticlesList(quantityLoadItems));
    }
  }, [articleView, dispatch, hasMoreArticles, isLoading]);

  return (
    <Page onScrollEnd={onLoadNextPart}>
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
        <ArticleList onLoadNextPart={onLoadNextPart} onSwitchArticleView={onSwitchArticleView} articleView={articleView} />
      </DynamicModuleLoader>
    </Page>
  );
});

export default ArticlePage;
