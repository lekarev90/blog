import { createAsyncThunk } from '@reduxjs/toolkit';

import { IStateSchema, IThunkConfig } from '@/app/providers/StoreProvider';

import { articlesListActions } from '../slices/articlesListSlice';
import { fetchArticlesList } from './fetchArticlesList';
import { getArticlesListData } from '../selectors/articlesList.selectors';

export const fetchNextArticlesListPage = createAsyncThunk<void, { withSetAll: boolean } | undefined, IThunkConfig<string>>(
  'articles/fetchNextArticlesListPage',
  async (_, { getState, dispatch }) => {
    const state = getState() as IStateSchema;

    const { page = 0, hasMore, isLoading } = getArticlesListData(state) || {};

    if (hasMore && !isLoading) {
      dispatch(articlesListActions.setPage(page + 1));
      dispatch(fetchArticlesList());
    }
  },
);
