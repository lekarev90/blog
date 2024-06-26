import { DeepPartial } from '@/shared/const/types';

import { fetchArticleById } from '../services/fetchArticleById';
import { IArticle } from '../types/article';
import { IArticleDetailsSchema } from '../types/articleDetailsSchema';

import { articleDetailsReducer } from './articleDetailsSlice';

describe('articleDetailsSlice', () => {
  test('fetchArticleById completed', () => {
    const someData = {};

    const initialState: DeepPartial<IArticleDetailsSchema> = {
      isLoading: true,
      error: 'error text',
    };

    const expectedState: DeepPartial<IArticleDetailsSchema> = {
      isLoading: false,
      error: undefined,
      data: someData,
    };

    const result = articleDetailsReducer(initialState as IArticleDetailsSchema, fetchArticleById.fulfilled(someData as IArticle, '', ''));

    expect(result).toEqual(expectedState);
  });

  test('fetchArticleById pending', () => {
    const initialState: DeepPartial<IArticleDetailsSchema> = {
      isLoading: false,
      error: 'error text',
    };

    const expectedState: DeepPartial<IArticleDetailsSchema> = {
      isLoading: true,
      error: undefined,
    };

    const result = articleDetailsReducer(initialState as IArticleDetailsSchema, fetchArticleById.pending('', ''));

    expect(result).toEqual(expectedState);
  });

  test('fetchArticleById rejected', () => {
    const errorText = 'errorText';

    const initialState: DeepPartial<IArticleDetailsSchema> = {
      isLoading: true,
      error: undefined,
    };

    const expectedState: DeepPartial<IArticleDetailsSchema> = {
      isLoading: false,
      error: errorText,
    };

    const result = articleDetailsReducer(initialState as IArticleDetailsSchema, fetchArticleById.rejected(null, '', '', errorText));

    expect(result).toEqual(expectedState);
  });
});
