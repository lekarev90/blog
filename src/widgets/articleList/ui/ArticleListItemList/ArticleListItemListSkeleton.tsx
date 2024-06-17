import { memo } from 'react';

import { ToggleFeatures } from '@/shared/lib/features';

import { ArticleListItemListSkeletonDeprecated } from './ArticleListItemListDeprecated/ArticleListItemListSkeletonDeprecated';
import { ArticleListItemListSkeletonRedesigned } from './ArticleListItemListRedesigned/ArticleListItemListSkeletonRedesigned';

export const ArticleListItemListSkeleton = memo(() => (
  <ToggleFeatures feature="isOldDesign" on={<ArticleListItemListSkeletonDeprecated />} off={<ArticleListItemListSkeletonRedesigned />} />
));
