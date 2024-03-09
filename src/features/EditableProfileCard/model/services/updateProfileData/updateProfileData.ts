import { createAsyncThunk } from '@reduxjs/toolkit';

import { IStateSchema, IThunkConfig } from 'app/providers/StoreProvider';
import { getProfileData } from 'features/EditableProfileCard';
import i18n from 'shared/config/i18n/i18n';

import { IProfile } from '../../types/profile';

const PROFILE_URL = '/profile';

export const updateProfileData = createAsyncThunk<IProfile, void, IThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, { extra, rejectWithValue, getState }) => {
    const profile = getProfileData(getState() as IStateSchema);

    try {
      const { data } = await extra.api.put<IProfile>(PROFILE_URL, profile);

      if (!data) {
        throw new Error();
      }

      return data;
    } catch (e) {
      return rejectWithValue(i18n.t('translation:login.error'));
    }
  },
);
