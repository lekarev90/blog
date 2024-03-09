import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateProfileData } from 'features/EditableProfileCard/model/services/updateProfileData/updateProfileData';

import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

import { IProfile, IProfileSchema, TProfileFieldName } from '../types/profile';

const initialState: IProfileSchema = {
  isLoading: false,
  error: undefined,
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
    setProfileData: (state) => {
      state.data = state.prevData;
    },
    restoreProfileData: (state) => {
      state.data = state.prevData;
    },
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
      state.prevData = action.payload;
    })
    .addCase(fetchProfileData.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    })
    .addCase(updateProfileData.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    })
    .addCase(updateProfileData.fulfilled, (state) => {
      state.error = undefined;
      state.isLoading = false;
    })
    .addCase(updateProfileData.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }),
});

export const { reducer: profileReducer, actions: profileActions } = ProfileSlice;
