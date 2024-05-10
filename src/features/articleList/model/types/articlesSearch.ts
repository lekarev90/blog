import { EArticleTypes } from 'entities/Article/model/types/article';

export interface IArticlesSearch {
  text: string
  type: EArticleTypes
}
