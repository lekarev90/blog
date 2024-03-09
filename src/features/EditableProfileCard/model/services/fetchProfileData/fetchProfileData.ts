import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';
import i18n from 'shared/config/i18n/i18n';

import { IProfile } from '../../types/profile';

const PROFILE_URL = '/profile';

export const fetchProfileData = createAsyncThunk<IProfile, void, IThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, { extra, rejectWithValue }) => {
    try {
      const { data } = await extra.api.get<IProfile>(PROFILE_URL);

      if (!data) {
        throw new Error();
      }

      return data;
    } catch (e) {
      return rejectWithValue(i18n.t('translation:login.error'));
    }
  },
);
