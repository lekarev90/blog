import {
  memo, useCallback, useEffect, useState,
} from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';

import { ARTICLES_LIST_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

import { fetchArticlesList } from '../../model/services/fetchArticlesList';
import { getArticlesListIsLoading } from '../../model/selectors/articlesList.selectors';
import { ArticleListItemViewSwitcher } from './ui/ArticleListItemViewSwitcher/ArticleListItemViewSwitcher';
import { articlesListReducer, getArticles } from '../../model/slice/articlesListSlice';
import { ArticleListItemList } from './ui/ArticleListItemList/ArticleListItemList';
import { ArticleListItemGrid } from './ui/ArticleListItemGrid/ArticleListItemGrid';
import { ArticleListItemListSkeleton } from './ui/ArticleListItemList/ArticleListItemListSkeleton';
import { ArticleListItemGridSkeleton } from './ui/ArticleListItemGrid/ArticleListItemGridSkeleton';

import { EArticleView, IArticle } from '../../model/types/article';

import styles from './ArticleList.module.scss';

const cx = classNames.bind(styles);

interface ArticleListProps {
  className?: string;
  articles?: IArticle[];
  view?: EArticleView;
  isLoading?: boolean;
}

const CARD_COMPONENTS = {
  [EArticleView.LIST]: ArticleListItemList,
  [EArticleView.GRID]: ArticleListItemGrid,
};

const CARD_COMPONENTS_SKELETONS = {
  [EArticleView.LIST]: ArticleListItemListSkeleton,
  [EArticleView.GRID]: ArticleListItemGridSkeleton,
};

const SKELETON_QUANTITY = {
  [EArticleView.LIST]: 9,
  [EArticleView.GRID]: 3,
};

const reducers = {
  articlesList: articlesListReducer,
};

export const ArticleList = memo(({
  className,
}: ArticleListProps) => {
  const initialViewType = localStorage.getItem(ARTICLES_LIST_VIEW_LOCALSTORAGE_KEY) as EArticleView || EArticleView.LIST;
  const dispatch = useAppDispatch();
  const [articleView, setArticleView] = useState(initialViewType);

  const isLoading = useSelector(getArticlesListIsLoading);
  const articles = useSelector(getArticles.selectAll);

  const Component = CARD_COMPONENTS[articleView];
  const ComponentSkeleton = CARD_COMPONENTS_SKELETONS[articleView];
  const skeletonQuantity = SKELETON_QUANTITY[articleView];

  const isContentReady = !isLoading && articles.length > 0;

  const skeletonComponents = Array.from({ length: skeletonQuantity }, (_, index) => <ComponentSkeleton key={index} />);

  const renderComponent = useCallback(() => articles.map((article, index) => (
    <Component key={index} {...article} />
  )), [Component, articles]);

  useEffect(() => {
    dispatch(fetchArticlesList());
  }, [dispatch]);

  const onSwitchView = (view: EArticleView) => {
    setArticleView(view);
    localStorage.setItem(ARTICLES_LIST_VIEW_LOCALSTORAGE_KEY, view);
  };

  return (
    <DynamicModuleLoader reducers={reducers}>
      <ArticleListItemViewSwitcher currentView={articleView} onSwitchView={onSwitchView} />
      <div className={cx(className, { [`view-${articleView}`]: articleView })}>
        {isContentReady ? renderComponent() : skeletonComponents}
      </div>
    </DynamicModuleLoader>
  );
});
