import { EArticleView } from 'entities/Article';
import { ArticleListItemListSkeleton } from 'widgets/articleList/ui/ArticleListItemList/ArticleListItemListSkeleton';
import { ArticleListItemList } from 'widgets/articleList/ui/ArticleListItemList/ArticleListItemList';
import { ArticleListItemGridSkeleton } from 'widgets/articleList/ui/ArticleListItemGrid/ArticleListItemGridSkeleton';
import { ArticleListItemGrid } from 'widgets/articleList/ui/ArticleListItemGrid/ArticleListItemGrid';

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
