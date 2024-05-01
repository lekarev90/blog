import {
  createSlice,
  createEntityAdapter, PayloadAction,
} from '@reduxjs/toolkit';

import { IComment } from 'entities/Comment';
import { IStateSchema } from 'app/providers/StoreProvider';

import { addArticleComment } from '../services/addArticleCommet';
import { fetchCommentsByArticleId } from '../services/fetchArticleCommets';
import { IArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

const commentsAdapter = createEntityAdapter({
  selectId: (comment: IComment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<IStateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
);

const initialState = commentsAdapter.getInitialState<IArticleDetailsCommentsSchema>({
  isLoading: false,
  ids: ['1', '2'],
  error: undefined,
  entities: {},
});

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<IComment[]>) => {
        state.error = undefined;
        state.isLoading = false;

        commentsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addArticleComment.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(addArticleComment.fulfilled, (state) => {
        state.error = undefined;
        state.isLoading = false;
      })
      .addCase(addArticleComment.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice;
export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
