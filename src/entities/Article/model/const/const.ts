import { EArticleView } from 'entities/Article';
import { ArticleListItemListSkeleton } from 'entities/Article/ui/ArticleList/ui/ArticleListItemList/ArticleListItemListSkeleton';
import { ArticleListItemList } from 'entities/Article/ui/ArticleList/ui/ArticleListItemList/ArticleListItemList';
import { ArticleListItemGridSkeleton } from 'entities/Article/ui/ArticleList/ui/ArticleListItemGrid/ArticleListItemGridSkeleton';
import { ArticleListItemGrid } from 'entities/Article/ui/ArticleList/ui/ArticleListItemGrid/ArticleListItemGrid';

export const ARTICLES_REQUEST_URL = '/articles';
export const ARTICLES_COMMENT_REQUEST_URL = '/comments';

export const ARTICLES_LIST_DATA = {
  [EArticleView.LIST]: {
    SKELETON_QUANTITY: 9,
    COMPONENT_SKELETON: ArticleListItemListSkeleton,
    COMPONENT: ArticleListItemList,
    HAS_MORE_BUTTON: true,
  },
  [EArticleView.GRID]: {
    SKELETON_QUANTITY: 3,
    COMPONENT_SKELETON: ArticleListItemGridSkeleton,
    COMPONENT: ArticleListItemGrid,
    HAS_MORE_BUTTON: false,
  },
};
