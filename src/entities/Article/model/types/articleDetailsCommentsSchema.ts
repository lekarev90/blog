import { IComment } from 'entities/Comment';
import { EntityState } from '@reduxjs/toolkit';

export interface IArticleDetailsCommentsSchema extends EntityState<IComment, IComment['id']>{
  isLoading?: boolean
  error?: string
}
