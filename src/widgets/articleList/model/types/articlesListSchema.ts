import { EntityState } from '@reduxjs/toolkit';
import { EArticlesView, IArticle } from 'entities/Article';

export interface IArticlesListSchema extends EntityState<IArticle, IArticle['id']> {
  isLoading?: boolean;
  error?: string;
  _inited: boolean;

  quantityLimit: number
  articlesView: EArticlesView
  page: number;
  hasMore: boolean;
}
