import { createAsyncThunk } from '@reduxjs/toolkit';

import i18n from 'shared/config/i18n/i18n';

import { IStateSchema, IThunkConfig } from 'app/providers/StoreProvider';

import { getArticlesListPage } from 'widgets/articleList/model/selectors/articlesList.selectors';
import { IArticle } from '../../../../entities/Article/model/types/article';
import { ARTICLES_REQUEST_URL } from '../../../../entities/Article/model/const/const';

export const fetchArticlesList = createAsyncThunk<IArticle[], number, IThunkConfig<string>>(
  'article/fetchArticlesList',
  async (quantityLimit, { extra, rejectWithValue, getState }) => {
    const page = getArticlesListPage(getState() as IStateSchema);

    try {
      const { data } = await extra.api.get<IArticle[]>(`${ARTICLES_REQUEST_URL}`, {
        params: {
          _expand: 'user',
          _limit: quantityLimit,
          _page: page,
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
