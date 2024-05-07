import { EntityState } from '@reduxjs/toolkit';
import { IArticle } from '../../../../entities/Article/model/types/article';

export interface IArticlesListSchema extends EntityState<IArticle, IArticle['id']> {
  isLoading?: boolean;
  error?: string;

  page: number;
  hasMore: boolean;
}
