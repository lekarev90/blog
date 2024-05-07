import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchArticleById } from '../services/fetchArticleById';
import { IArticle } from '../types/article';
import { IArticleDetailsSchema } from '../types/articleDetailsSchema';

const initialState: IArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: { },
  extraReducers: (builder) => builder
    .addCase(fetchArticleById.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    })
    .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<IArticle>) => {
      state.error = undefined;
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(fetchArticleById.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }),
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
