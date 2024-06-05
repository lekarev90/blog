import { createAsyncThunk } from '@reduxjs/toolkit';

import i18n from '@/shared/config/i18n/i18n';
import { IThunkConfig } from '@/app/providers/StoreProvider';

import { IUser } from '../..';
import { getUserDataByIdQuery } from '../api/userApi';
import { LOCALSTORAGE_USER_KEY } from '@/shared/const/localstorage';

export const initAuthData = createAsyncThunk<IUser, void, IThunkConfig<string>>(
  'user/initAuth',
  async (_, { rejectWithValue, dispatch }) => {
    const userId = localStorage.getItem(LOCALSTORAGE_USER_KEY);

    if (!userId) {
      return rejectWithValue(i18n.t('translation:serverError'));
    }

    try {
      return await dispatch(getUserDataByIdQuery(userId)).unwrap();
    } catch (e) {
      return rejectWithValue(i18n.t('translation:serverError'));
    }
  },
);