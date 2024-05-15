import { createAsyncThunk } from '@reduxjs/toolkit';

import { IStateSchema, IThunkConfig } from 'app/providers/StoreProvider';
import { getProfileData } from 'features/EditableProfileCard';
import { validateProfileData } from 'features/EditableProfileCard/model/services/validateProfileData/validateProfileData';

import { IProfile, ValidateProfileError } from '../../types/profile';

const PROFILE_URL = '/profile';

export const updateProfileData = createAsyncThunk<IProfile, void, IThunkConfig<ValidateProfileError[]>>(
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
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  },
);
