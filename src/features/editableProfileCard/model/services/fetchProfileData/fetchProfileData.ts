import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from '@/app/providers/StoreProvider';

import { EValidateProfileError } from '../../const/const';
import { IProfile } from '../../types/profileCardSchema';

const PROFILE_URL = '/profile';

export const fetchProfileData = createAsyncThunk<IProfile, string, IThunkConfig<EValidateProfileError[]>>(
  'profile/fetchProfileData',
  async (profileId, { extra, rejectWithValue }) => {
    try {
      const { data } = await extra.api.get<IProfile>(`${PROFILE_URL}/${profileId}`);

      if (!data) {
        throw new Error();
      }

      return data;
    } catch (e) {
      return rejectWithValue([EValidateProfileError.SERVER_ERROR]);
    }
  },
);
