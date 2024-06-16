import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TSortOrder } from '@/shared/types/sort';

import { EArticleSortField } from '../const/const';
import { IArticlesListSortSchema } from '../types/articlesSortSchema';

const initialState: IArticlesListSortSchema = {
  orderBy: 'asc',
  sortBy: EArticleSortField.CREATED,
  initialized: false,
};

export const articlesSortSlice = createSlice({
  name: 'articlesSort',
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<TSortOrder>) => {
      state.orderBy = action.payload;
    },
    setSort: (state, action: PayloadAction<EArticleSortField>) => {
      state.sortBy = action.payload;
    },
    init: (state) => {
      state.initialized = true;
    },
  },
});

export const { actions: articlesSortActions } = articlesSortSlice;
export const { reducer: articlesSortReducer } = articlesSortSlice;
