import { createAsyncThunk } from '@reduxjs/toolkit';

import i18n from '@/shared/config/i18n/i18n';
import { IStateSchema, IThunkConfig } from '@/app/providers/StoreProvider';

import { getUserAuthData, IJsonSettings } from '../..';
import { getJsonSettings } from '../selectors/jsonSettings';
import { setJsonSettingsMutation } from '../api/userApi';

export const saveJsonSettings = createAsyncThunk<IJsonSettings, IJsonSettings, IThunkConfig<string>>(
  'user/saveJsonSettings',
  async (newJsonSettings, { getState, rejectWithValue, dispatch }) => {
    const state = getState() as IStateSchema;

    const userData = getUserAuthData(state);
    const currentSettings = getJsonSettings(state);

    if (!userData.authData) {
      return rejectWithValue(i18n.t('translation:serverError'));
    }

    try {
      const response = await dispatch(
        setJsonSettingsMutation({
          userId: userData.authData.id,
          jsonSettings: {
            ...currentSettings,
            ...newJsonSettings,
          },
        }),
      ).unwrap();

      if (!response.jsonSettings) {
        return rejectWithValue(i18n.t('translation:serverError'));
      }

      return response.jsonSettings;
    } catch (e) {
      return rejectWithValue(i18n.t('translation:serverError'));
    }
  },
);
