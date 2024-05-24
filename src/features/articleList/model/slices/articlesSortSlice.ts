import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TSortOrder } from '@/shared/types';
import { IArticlesListSortSchema } from '../types/articlesSortSchema';
import { EArticleSortField } from '../const/const';

const initialState: IArticlesListSortSchema = {
  orderBy: 'asc',
  sortBy: EArticleSortField.CREATED,
  searchText: '',
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
    init: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export const { actions: articlesSortActions } = articlesSortSlice;
export const { reducer: articlesSortReducer } = articlesSortSlice;
