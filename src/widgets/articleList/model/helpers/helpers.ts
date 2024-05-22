import { EArticlesView } from '@/entities/Article';
import { ArticleListItemListSkeleton } from '../../ui/ArticleListItemList/ArticleListItemListSkeleton';
import { ArticleListItemList } from '../../ui/ArticleListItemList/ArticleListItemList';
import { ArticleListItemGridSkeleton } from '../../ui/ArticleListItemGrid/ArticleListItemGridSkeleton';
import { ArticleListItemGrid } from '../../ui/ArticleListItemGrid/ArticleListItemGrid';

export const ARTICLES_LIST_DATA = {
  [EArticlesView.LIST]: {
    SKELETON_QUANTITY: 10,
    COMPONENT_SKELETON: ArticleListItemListSkeleton,
    COMPONENT: ArticleListItemList,
    HAS_MORE_BUTTON: false,
  },
  [EArticlesView.GRID]: {
    SKELETON_QUANTITY: 10,
    COMPONENT_SKELETON: ArticleListItemGridSkeleton,
    COMPONENT: ArticleListItemGrid,
    HAS_MORE_BUTTON: true,
  },
};
