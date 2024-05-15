import { createAsyncThunk } from '@reduxjs/toolkit';

import i18n from 'shared/config/i18n/i18n';

import { IStateSchema, IThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesSearchText, getArticlesSortData } from 'features/articleList';
import { ARTICLES_REQUEST_URL, EArticleTypes, IArticle } from 'entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<IArticle[], void, IThunkConfig<string>>(
  'article/fetchArticleRecommendations',
  async (_, { extra, rejectWithValue, getState }) => {
    const state = getState() as IStateSchema;

    const { sortBy, orderBy } = getArticlesSortData(state) || {};
    const { text, type } = getArticlesSearchText(state) || {};

    try {
      const { data } = await extra.api.get<IArticle[]>(`${ARTICLES_REQUEST_URL}`, {
        params: {
          _expand: 'user',
          _limit: 10,
          _page: Math.floor(Math.random() * (5 - 1 + 1) + 1),
          _sort: sortBy,
          _order: orderBy,
          q: text,
          types_like: type === EArticleTypes.ALL ? undefined : type,
        },
      });

      if (!data) {
        throw new Error();
      }

      return data;
    } catch (e) {
      return rejectWithValue(i18n.t('translation:serverError'));
    }
  },
);
