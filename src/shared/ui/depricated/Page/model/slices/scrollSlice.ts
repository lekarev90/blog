import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IScroll } from '../types/scrollTypes';

const initialState: IScroll = {
  pagesData: {},
};

export const scrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setScroll: (state, { payload }: PayloadAction<{pathname: string, position: number}>) => {
      state.pagesData[payload.pathname] = payload.position;
    },
  },
});

export const { actions: scrollActions } = scrollSlice;
export const { reducer: scrollReducer } = scrollSlice;
