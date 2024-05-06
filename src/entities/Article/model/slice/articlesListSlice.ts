import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IStateSchema } from 'app/providers/StoreProvider';

import { IArticle } from '../types/article';
import { IArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { fetchArticlesList } from '../services/fetchArticlesList';

const articlesListAdapter = createEntityAdapter({
  selectId: (comment: IArticle) => comment.id,
});

const initialState = articlesListAdapter.getInitialState<IArticleDetailsCommentsSchema>({
  isLoading: false,
  ids: [],
  error: undefined,
  entities: {},
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

        articlesListAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: articlesListActions } = articlesListSlice;
export const { reducer: articlesListReducer } = articlesListSlice;
