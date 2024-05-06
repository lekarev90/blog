import { createAsyncThunk } from '@reduxjs/toolkit';

import i18n from 'shared/config/i18n/i18n';

import { IStateSchema, IThunkConfig } from 'app/providers/StoreProvider';
import { IComment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';

import { getArticleDetailsData } from '../selectors/articleDetails.selectors';
import { ARTICLES_COMMENT_REQUEST_URL } from '../const/const';

export const addArticleComment = createAsyncThunk<IComment, string, IThunkConfig<string>>(
  'article/addArticleComment',
  async (commentText, { extra, rejectWithValue, getState }) => {
    const userData = getUserAuthData(getState() as IStateSchema);
    const article = getArticleDetailsData(getState() as IStateSchema);

    if (!userData || !commentText || !article) {
      return rejectWithValue('no data');
    }

    try {
      const { data } = await extra.api.post<IComment>(`${ARTICLES_COMMENT_REQUEST_URL}`, {
        articleId: article.id,
        userId: userData.id,
        text: commentText,
      }, {
        params: {
          articleId: article.id,
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
