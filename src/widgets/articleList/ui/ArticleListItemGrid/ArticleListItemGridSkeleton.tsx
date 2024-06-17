import { memo } from 'react';

import { ToggleFeatures } from '@/shared/lib/features';

import { ArticleListItemGridSkeletonDeprecated } from './ArticleListItemGridDeprecated/ArticleListItemGridSkeletonDeprecated';
import { ArticleListItemGridSkeletonRedesigned } from './ArticleListItemGridRedesigned/ArticleListItemGridSkeletonRedesigned';

export const ArticleListItemGridSkeleton = memo(() => (
  <ToggleFeatures feature="isOldDesign" on={<ArticleListItemGridSkeletonDeprecated />} off={<ArticleListItemGridSkeletonRedesigned />} />
));
