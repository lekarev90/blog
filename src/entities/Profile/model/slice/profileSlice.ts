import { createSlice } from '@reduxjs/toolkit';

import { IProfileSchema } from '../types/profile';

export interface IProfileState {
}

const initialState: IProfileSchema = {
  isLoading: false,
  readonly: true,
  error: null,
  data: null,
};

export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export const { reducer: profileReducer, actions: profileActions } = ProfileSlice;
