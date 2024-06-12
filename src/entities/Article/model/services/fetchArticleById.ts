import i18n from 'i18next';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from '@/app/providers/StoreProvider';

import { ARTICLES_REQUEST_URL } from '../const/const';
import { IArticle } from '../types/article';

export const fetchArticleById = createAsyncThunk<IArticle, string, IThunkConfig<string>>(
  'article/fetchArticleById',
  async (articleId, { extra, rejectWithValue }) => {
    try {
      const { data } = await extra.api.get<IArticle>(`${ARTICLES_REQUEST_URL}/${articleId}`, {
        params: { _expand: 'user' },
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
