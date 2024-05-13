import { EntityState } from '@reduxjs/toolkit';
import { IArticle } from 'entities/Article';

export interface IArticleRecommendationsSchema extends EntityState<IArticle, IArticle['id']> {
  isLoading?: boolean;
  error?: string;
}
