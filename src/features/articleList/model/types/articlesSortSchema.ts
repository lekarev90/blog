import { TSortOrder } from 'shared/types';
import { EArticleSortField, ESortFieldNames } from '../const/const';

export interface IArticlesListSortSchema {
  [ESortFieldNames.ORDER_BY]: TSortOrder;
  [ESortFieldNames.SORT_BY]: EArticleSortField;
  searchText: string;
}
