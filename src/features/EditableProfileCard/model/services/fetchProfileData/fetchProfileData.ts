import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';

import { IProfile, ValidateProfileError } from '../../types/profile';

const PROFILE_URL = '/profile';

export const fetchProfileData = createAsyncThunk<IProfile, void, IThunkConfig<ValidateProfileError[]>>(
  'profile/fetchProfileData',
  async (_, { extra, rejectWithValue }) => {
    try {
      const { data } = await extra.api.get<IProfile>(PROFILE_URL);

      if (!data) {
        throw new Error();
      }

      return data;
    } catch (e) {
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  },
);
