import { EArticleTypes } from 'entities/Article';

export interface IArticlesSearch {
  text: string
  type: EArticleTypes
}
