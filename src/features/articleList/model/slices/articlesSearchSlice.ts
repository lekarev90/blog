import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { EArticleTypes } from 'entities/Article';

import { IArticlesSearch } from '../types/articlesSearchSchema';

const initialState: IArticlesSearch = {
  text: '',
  type: EArticleTypes.ALL,
};

export const articlesSearchSlice = createSlice({
  name: 'articlesSearch',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    setType: (state, action: PayloadAction<EArticleTypes>) => {
      state.type = action.payload;
    },

  },
});

export const { actions: articlesSearchActions } = articlesSearchSlice;
export const { reducer: articlesSearchReducer } = articlesSearchSlice;
