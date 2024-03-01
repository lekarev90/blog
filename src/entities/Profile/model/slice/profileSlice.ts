import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

import { IProfile, IProfileSchema } from '../types/profile';

export interface IProfileState {
}

const initialState: IProfileSchema = {
  isLoading: false,
  readonly: true,
  error: undefined,
  data: undefined,
};

export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => builder
    .addCase(fetchProfileData.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    })
    .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
      state.error = undefined;
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(fetchProfileData.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }),
});

export const { reducer: profileReducer, actions: profileActions } = ProfileSlice;
