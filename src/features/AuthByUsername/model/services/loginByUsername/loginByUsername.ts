import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface ILoginByUsername {
  username: string
  password: string
}

const LOGIN_URL = 'http://localhost:8000/login';

export const loginByUsername = createAsyncThunk<User, ILoginByUsername, { rejectValue: string}>(
  'login/loginByUsername',
  async (authData, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post(LOGIN_URL, authData);

      if (!data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
      dispatch(userActions.setAuthData(data));

      return data;
    } catch (e) {
      return rejectWithValue(i18n.t('translation:login.error'));
    }
  },
);