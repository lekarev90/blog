import { createAsyncThunk } from '@reduxjs/toolkit';

import i18n from 'shared/config/i18n/i18n';

import { IStateSchema, IThunkConfig } from 'app/providers/StoreProvider';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

import { IArticle, ARTICLES_REQUEST_URL } from 'entities/Article';

import { getArticlesSortData, getArticlesSearchText } from 'features/articleList';
import { getArticlesListData } from '../selectors/articlesList.selectors';

export const fetchArticlesList = createAsyncThunk<IArticle[], {withSetAll: boolean } | undefined, IThunkConfig<string>>(
  'articles/fetchArticlesList',
  async (_, { extra, rejectWithValue, getState }) => {
    const state = getState() as IStateSchema;

    const { quantityLimit, page } = getArticlesListData(state) || {};
    const { sortBy, orderBy } = getArticlesSortData(state) || {};
    const { text } = getArticlesSearchText(state) || { };

    try {
      addQueryParams({
        _sort: sortBy,
        _order: orderBy,
        q: text,
      });

      const { data } = await extra.api.get<IArticle[]>(`${ARTICLES_REQUEST_URL}`, {
        params: {
          _expand: 'user',
          _limit: quantityLimit,
          _page: page,
          _sort: sortBy,
          _order: orderBy,
          q: text,
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
