import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

import { IProfile, IProfileSchema, TProfileFieldName } from '../types/profileCardSchema';

const initialState: IProfileSchema = {
  isLoading: false,
  validateProfileError: undefined,
  data: undefined,
  prevData: undefined,
};

export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileDataValue: <T extends TProfileFieldName>(state: IProfileSchema, action: PayloadAction<{value: IProfile[T] ; name: T }>) => {
      const { value, name } = action.payload;

      if (state.data) {
        state.data[name] = value;
      }
    },
    restoreProfileData: (state) => {
      state.data = state.prevData;
      state.validateProfileError = undefined;
    },
  },
  extraReducers: (builder) => builder
    .addCase(fetchProfileData.pending, (state) => {
      state.isLoading = true;
      state.validateProfileError = undefined;
    })
    .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
      state.validateProfileError = undefined;
      state.isLoading = false;
      state.data = action.payload;
      state.prevData = action.payload;
    })
    .addCase(fetchProfileData.rejected, (state, action) => {
      state.validateProfileError = action.payload;
      state.isLoading = false;
    })
    .addCase(updateProfileData.pending, (state) => {
      state.isLoading = true;
      state.validateProfileError = undefined;
    })
    .addCase(updateProfileData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.validateProfileError = undefined;
      state.isLoading = false;
    })
    .addCase(updateProfileData.rejected, (state, action) => {
      state.validateProfileError = action.payload;
      state.isLoading = false;
    }),
});

export const { reducer: profileReducer, actions: profileActions } = ProfileSlice;
