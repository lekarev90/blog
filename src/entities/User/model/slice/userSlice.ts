import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

import { IUser, IUserSchema } from '../types/userSchema';
import { setFeatureFlags } from '@/shared/lib/features';

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
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

      if (user) {
        const json = JSON.parse(user);

        state.authData = json;
        setFeatureFlags(json.features);
      }

      state.initialized = true;
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { reducer: userReducer, actions: userActions } = userSlice;
