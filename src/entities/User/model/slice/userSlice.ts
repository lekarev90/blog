import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCALSTORAGE_USER_KEY } from '@/shared/const/localstorage';
import { setFeatureFlags } from '@/shared/lib/features';

import { IUser, IUserSchema } from '../types/userSchema';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { IJsonSettings } from '../types/jsonSettings';
import { initAuthData } from '../services/initAuthData';

const initialState: IUserSchema = {
  initialized: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload;
      setFeatureFlags(action.payload.features);
      localStorage.setItem(LOCALSTORAGE_USER_KEY, action.payload.id);
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(LOCALSTORAGE_USER_KEY);
    },
  },
  extraReducers: (builder) => builder
    .addCase(saveJsonSettings.fulfilled, (state, { payload }: PayloadAction<IJsonSettings>) => {
      if (state.authData) {
        state.authData.jsonSettings = payload;
      }
    })
    .addCase(initAuthData.fulfilled, (state, { payload }: PayloadAction<IUser>) => {
      state.authData = payload;
      setFeatureFlags(payload.features);
      state.initialized = true;
    })
    .addCase(initAuthData.rejected, (state) => {
      state.initialized = true;
    }),
});

export const { reducer: userReducer, actions: userActions } = userSlice;
