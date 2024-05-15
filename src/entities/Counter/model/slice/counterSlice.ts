import { createSlice } from '@reduxjs/toolkit';

import { CounterSchema } from '../types/counterSchema';

export interface CounterState {
  value: number
}

const initialState: CounterSchema = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementAction: (state) => {
      state.value += 1;
    },
    decrementAction: (state) => {
      state.value -= 1;
    },
  },
});

export const { incrementAction, decrementAction } = counterSlice.actions;
export const { reducer: counterReducer } = counterSlice;
