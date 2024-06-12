import { EArticlesView } from '@/entities/Article';

import { ArticleListItemGrid } from '../../ui/ArticleListItemGrid/ArticleListItemGrid';
import { ArticleListItemGridSkeleton } from '../../ui/ArticleListItemGrid/ArticleListItemGridSkeleton';
import { ArticleListItemList } from '../../ui/ArticleListItemList/ArticleListItemList';
import { ArticleListItemListSkeleton } from '../../ui/ArticleListItemList/ArticleListItemListSkeleton';

export const QUANTITY_LIMIT = 10;

export const ARTICLES_LIST_DATA = {
  [EArticlesView.LIST]: {
    COMPONENT_SKELETON: ArticleListItemListSkeleton,
    COMPONENT: ArticleListItemList,
    HAS_MORE_BUTTON: false,
  },
  [EArticlesView.GRID]: {
    COMPONENT_SKELETON: ArticleListItemGridSkeleton,
    COMPONENT: ArticleListItemGrid,
    HAS_MORE_BUTTON: true,
  },
};
