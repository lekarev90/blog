import i18n from 'i18next';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from '@/app/providers/StoreProvider';
import { IUser, userActions } from '@/entities/User';

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

interface ILoginByUsername {
  username: string
  password: string
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

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
      dispatch(userActions.setAuthData(data));

      return data;
    } catch (e) {
      return rejectWithValue(i18n.t('translation:serverError'));
    }
  },
);
