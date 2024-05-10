import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IArticlesSearch } from '../types/articlesSearch';

const initialState: IArticlesSearch = {
  text: '',
};

export const articlesSearchSlice = createSlice({
  name: 'articlesSearch',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { actions: articlesSearchActions } = articlesSearchSlice;
export const { reducer: articlesSearchReducer } = articlesSearchSlice;
