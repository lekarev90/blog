import { memo } from 'react';

import { IArticle } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';

import { ArticleListItemGridDeprecated } from './ArticleListItemGridDeprecated/ArticleListItemGridDeprecated';
import { ArticleListItemGridRedesigned } from './ArticleListItemGridRedesigned/ArticleListItemGridRedesigned';

export const ArticleListItemGrid = memo((props: IArticle) => (
  <ToggleFeatures
    feature="isOldDesign"
    on={<ArticleListItemGridDeprecated {...props} />}
    off={<ArticleListItemGridRedesigned {...props} />}
  />
));
