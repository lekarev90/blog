import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IStateSchema } from '@/app/providers/StoreProvider';

import { IArticle } from '@/entities/Article';

import { IArticlesListSchema } from '../types/articlesListSchema';
import { fetchArticlesList } from '../services/fetchArticlesList';
import { QUANTITY_LIMIT } from '../const/const';

const articlesListAdapter = createEntityAdapter({
  selectId: (comment: IArticle) => comment.id,
});

const initialState = articlesListAdapter.getInitialState<IArticlesListSchema>({
  isLoading: false,
  ids: [],
  error: undefined,
  entities: {},
  page: 0,
  hasMore: true,
});

export const getArticles = articlesListAdapter.getSelectors<IStateSchema>(
  (state) => state.articlesList || initialState,
);

const articlesListSlice = createSlice({
  name: 'articlesListSlice',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setHasMore: (state, action: PayloadAction<boolean>) => {
      state.hasMore = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;

        const { withSetAll } = action.meta.arg || {};

        if (withSetAll) {
          articlesListAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.error = undefined;
        state.isLoading = false;

        state.hasMore = action.payload.length >= QUANTITY_LIMIT;

        const { withSetAll } = action.meta.arg || {};

        const adapterMethod = withSetAll ? 'setAll' : 'addMany';

        articlesListAdapter[adapterMethod](state, action.payload);
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: articlesListActions } = articlesListSlice;
export const { reducer: articlesListReducer } = articlesListSlice;
