import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/StoreProvider';

import { IArticle } from 'entities/Article';

import { IArticleRecommendationsSchema } from '../types/articleRecommendationsSchema';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations';

const articlesRecommendationsAdapter = createEntityAdapter({
  selectId: (article: IArticle) => article.id,
});

const initialState = articlesRecommendationsAdapter.getInitialState<IArticleRecommendationsSchema>({
  isLoading: false,
  ids: [],
  error: undefined,
  entities: {},
});

export const getArticleRecommendations = articlesRecommendationsAdapter.getSelectors<IStateSchema>(
  (state) => state.articleRecommendations || initialState,
);

const articleRecommendationsSlice = createSlice({
  name: 'articleRecommendationsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArticleRecommendations.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
        state.error = undefined;
        state.isLoading = false;

        articlesRecommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: articleRecommendationsActions } = articleRecommendationsSlice;
export const { reducer: articleRecommendationsReducer } = articleRecommendationsSlice;
