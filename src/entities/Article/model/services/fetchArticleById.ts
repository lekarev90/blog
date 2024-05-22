import { createAsyncThunk } from '@reduxjs/toolkit';

import i18n from '@/shared/config/i18n/i18n';

import { IThunkConfig } from '@/app/providers/StoreProvider';

import { IArticle } from '../types/article';
import { ARTICLES_REQUEST_URL } from '../const/const';

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
