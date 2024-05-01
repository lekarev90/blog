import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';
import { IProfile, ValidateProfileError } from '../../types/profile';

const PROFILE_URL = '/profile';

export const fetchProfileData = createAsyncThunk<IProfile, string, IThunkConfig<ValidateProfileError[]>>(
  'profile/fetchProfileData',
  async (profileId, { extra, rejectWithValue }) => {
    try {
      const { data } = await extra.api.get<IProfile>(`${PROFILE_URL}/${profileId}`);

      if (!data) {
        throw new Error();
      }

      return data;
    } catch (e) {
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  },
);
