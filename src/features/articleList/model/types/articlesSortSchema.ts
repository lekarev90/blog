import { TSortOrder } from '@/shared/types/sort';

import { EArticleSortField, ESortFieldNames } from '../const/const';

export interface IArticlesListSortSchema {
  [ESortFieldNames.ORDER_BY]: TSortOrder;
  [ESortFieldNames.SORT_BY]: EArticleSortField;
  initialized?: boolean
}
