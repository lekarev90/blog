import { createAsyncThunk } from '@reduxjs/toolkit';

import i18n from '@/shared/config/i18n/i18n';

import { IStateSchema, IThunkConfig } from '@/app/providers/StoreProvider';
import { IComment } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';

import { ARTICLES_COMMENT_REQUEST_URL } from '../const/const';

export const addArticleComment = createAsyncThunk<IComment, { commentText: string; articleId: string }, IThunkConfig<string>>(
  'article/addArticleComment',
  async ({ commentText, articleId }, { extra, rejectWithValue, getState }) => {
    const { authData } = getUserAuthData(getState() as IStateSchema);

    if (!authData) {
      return rejectWithValue('no data');
    }

    try {
      const { data } = await extra.api.post<IComment>(
        `${ARTICLES_COMMENT_REQUEST_URL}`,
        {
          articleId,
          userId: authData.id,
          text: commentText,
        },
        {
          params: {
            articleId,
            _expand: 'user',
          },
        },
      );

      if (!data) {
        throw new Error();
      }

      return data;
    } catch (e) {
      return rejectWithValue(i18n.t('translation:serverError'));
    }
  },
);
