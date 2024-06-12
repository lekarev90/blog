import { createAsyncThunk } from '@reduxjs/toolkit';

import { IStateSchema, IThunkConfig } from '@/app/providers/StoreProvider';

import { EValidateProfileError } from '../../const/const';
import { getProfileData } from '../../selectors/profile.selectors';
import { IProfile } from '../../types/profileCardSchema';
import { validateProfileData } from '../validateProfileData/validateProfileData';

const PROFILE_URL = '/profile';

export const updateProfileData = createAsyncThunk<IProfile, void, IThunkConfig<EValidateProfileError[]>>(
  'profile/updateProfileData',
  async (_, { extra, rejectWithValue, getState }) => {
    const profile = getProfileData(getState() as IStateSchema);
    const errors = validateProfileData(profile);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      const { data } = await extra.api.put<IProfile>(`${PROFILE_URL}/${profile?.id}`, profile);

      if (!data) {
        throw new Error();
      }

      return data;
    } catch (e) {
      return rejectWithValue([EValidateProfileError.SERVER_ERROR]);
    }
  },
);
