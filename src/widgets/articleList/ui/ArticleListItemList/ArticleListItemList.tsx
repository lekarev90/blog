import { memo } from 'react';

import { IArticle } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';

import { ArticleListItemListDeprecated } from './ArticleListItemListDeprecated/ArticleListItemListDeprecated';
import { ArticleListItemListRedesigned } from './ArticleListItemListRedesigned/ArticleListItemListRedesigned';

export const ArticleListItemList = memo((props: IArticle) => (
  <ToggleFeatures
    feature="isOldDesign"
    on={<ArticleListItemListDeprecated {...props} />}
    off={<ArticleListItemListRedesigned {...props} />}
  />
));
