import { TSortOrder } from 'shared/types';

export enum EArticleSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'createdAt',
}

export enum ESortFieldNames {
  SORT_BY = 'sortBy',
  ORDER_BY = 'orderBy',
}
export interface IArticlesListSortSchema {
  [ESortFieldNames.ORDER_BY]: TSortOrder;
  [ESortFieldNames.SORT_BY]: EArticleSortField;
  searchText: string;
}
