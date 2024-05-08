import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IStateSchema } from 'app/providers/StoreProvider';

import { IArticle } from 'entities/Article';

import { IArticlesListSchema } from '../types/articlesListSchema';
import { fetchArticlesList } from '../services/fetchArticlesList';

const articlesListAdapter = createEntityAdapter({
  selectId: (comment: IArticle) => comment.id,
});

const initialState = articlesListAdapter.getInitialState<IArticlesListSchema>({
  isLoading: false,
  ids: [],
  error: undefined,
  entities: {},
  page: 1,
  hasMore: true,
});

export const getArticles = articlesListAdapter.getSelectors<IStateSchema>(
  (state) => state.articlesList || initialState,
);

const articlesListSlice = createSlice({
  name: 'articlesListSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
        state.error = undefined;
        state.isLoading = false;
        state.page += 1;

        if (!action.payload.length) {
          state.hasMore = false;
        }

        articlesListAdapter.addMany(state, action.payload);
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: articlesListActions } = articlesListSlice;
export const { reducer: articlesListReducer } = articlesListSlice;
