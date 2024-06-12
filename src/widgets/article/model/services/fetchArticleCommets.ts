import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from '@/app/providers/StoreProvider';
import { IComment } from '@/entities/Comment';
import i18n from '@/shared/config/i18n/i18n';

import { ARTICLES_COMMENT_REQUEST_URL } from '../const/const';

export const fetchCommentsByArticleId = createAsyncThunk<IComment[], string, IThunkConfig<string>>(
  'article/fetchCommentsByArticleId',
  async (articleId, { extra, rejectWithValue }) => {
    try {
      const { data } = await extra.api.get<IComment[]>(`${ARTICLES_COMMENT_REQUEST_URL}`, {
        params: {
          articleId,
          _expand: 'user',
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
