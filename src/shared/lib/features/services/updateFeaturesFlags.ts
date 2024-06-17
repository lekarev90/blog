import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from '@/app/providers/StoreProvider';
import i18n from '@/shared/config/i18n/i18n';
import { IFeatureFlags } from '@/shared/types/IFeatureFlags';

import { updateFeatureFlagsMutation } from '../api/featureFlagApi';
import { getAllFeatureFlag } from '../lib/setGetFeatures';

interface IUpdateFeaturesFlags {
  userId: string;
  newFeatures: Partial<IFeatureFlags>;
}

export const updateFeaturesFlags = createAsyncThunk<void, IUpdateFeaturesFlags, IThunkConfig<string>>(
  'user/initAuth',
  async ({ userId, newFeatures }, { rejectWithValue, dispatch }) => {
    try {
      await dispatch(
        updateFeatureFlagsMutation({
          userId,
          features: { ...getAllFeatureFlag(), ...newFeatures },
        }),
      ).unwrap();

      window.location.reload();

      return undefined;
    } catch (e) {
      return rejectWithValue(i18n.t('translation:serverError'));
    }
  },
);
