import { memo, useCallback } from 'react';
import classNames from 'classnames/bind';

import { ArticleListItemList } from './ui/ArticleListItemList/ArticleListItemList';
import { ArticleListItemGrid } from './ui/ArticleListItemGrid/ArticleListItemGrid';
import { ArticleListItemListSkeleton } from './ui/ArticleListItemList/ArticleListItemListSkeleton';
import { ArticleListItemGridSkeleton } from './ui/ArticleListItemGrid/ArticleListItemGridSkeleton';

import { EArticleView, IArticle } from '../../model/types/article';

import { articlesMock1 } from './model/mock/articlesMock';

import styles from './ArticleList.module.scss';

const cx = classNames.bind(styles);

interface ArticleListProps {
  className?: string;
  articles?: IArticle[];
  view?: EArticleView;
  isLoading?: boolean;
}

const mockData = new Array(9).fill(articlesMock1);

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

export const ArticleList = memo(({
  className,
  articles = mockData,
  view = EArticleView.LIST,
  isLoading,
}: ArticleListProps) => {
  const Component = CARD_COMPONENTS[view];
  const ComponentSkeleton = CARD_COMPONENTS_SKELETONS[view];
  const skeletonQuantity = SKELETON_QUANTITY[view];

  const renderComponent = useCallback(() => articles.length && articles.map((article, index) => (
    <Component key={index} {...article} />
  )), [Component, articles]);

  const skeletonComponents = new Array(skeletonQuantity).fill(<ComponentSkeleton />);

  return (
    <div className={cx(className, { [`view-${view}`]: view })}>
      {isLoading ? skeletonComponents : renderComponent()}
    </div>
  );
});
