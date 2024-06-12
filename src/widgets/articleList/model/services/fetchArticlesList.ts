import { createAsyncThunk } from '@reduxjs/toolkit';

import { IStateSchema, IThunkConfig } from '@/app/providers/StoreProvider';
import { IArticle, ARTICLES_REQUEST_URL, EArticleTypes } from '@/entities/Article';
import { getArticlesSortData } from '@/features/articleList';
import i18n from '@/shared/config/i18n/i18n';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';

import { QUANTITY_LIMIT } from '../const/const';
import { getArticlesListData } from '../selectors/articlesList.selectors';
import { getArticlesSearchText } from '../selectors/articlesSearch.selectors';

export const fetchArticlesList = createAsyncThunk<IArticle[], {withSetAll: boolean } | undefined, IThunkConfig<string>>(
  'articles/fetchArticlesList',
  async (_, { extra, rejectWithValue, getState }) => {
    const state = getState() as IStateSchema;

    const { page } = getArticlesListData(state) || {};
    const { sortBy, orderBy } = getArticlesSortData(state) || {};
    const { text, type } = getArticlesSearchText(state) || {};

    try {
      addQueryParams({
        _sort: sortBy,
        _order: orderBy,
        q: text,
        types_like: type,
      });

      const { data } = await extra.api.get<IArticle[]>(`${ARTICLES_REQUEST_URL}`, {
        params: {
          _expand: 'user',
          _limit: QUANTITY_LIMIT,
          _page: page,
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
