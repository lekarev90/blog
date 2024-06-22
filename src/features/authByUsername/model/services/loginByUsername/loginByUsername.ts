import i18n from 'i18next';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from '@/app/providers/StoreProvider';
import { IUser, userActions } from '@/entities/User';

interface ILoginByUsername {
  username: string;
  password: string;
}

const LOGIN_URL = 'http://localhost:8000/login';

export const loginByUsername = createAsyncThunk<IUser, ILoginByUsername, IThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, { extra, rejectWithValue, dispatch }) => {
    try {
      const { data } = await extra.api.post<IUser>(LOGIN_URL, authData);
      if (!data) {
        throw new Error();
      }

      dispatch(userActions.setAuthData(data));

      return data;
    } catch (e) {
      return rejectWithValue(i18n.t('translation:serverError'));
    }
  },
);
