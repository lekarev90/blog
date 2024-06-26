import { isEqual } from 'lodash';
import { createSelector } from 'reselect';

import { IStateSchema } from '@/app/providers/StoreProvider';
import { getUserAuthData } from '@/entities/User';

export const getProfileData = (state: IStateSchema) => state.profile?.data;
export const getProfilePrevData = (state: IStateSchema) => state.profile?.prevData;

export const getProfileErrors = (state: IStateSchema) => state.profile?.validateProfileError;

export const getProfileIsLoading = (state: IStateSchema) => state.profile?.isLoading;

export const getIsProfileDataSame = createSelector(
  getProfileData,
  getProfilePrevData,
  (profileData, prevProfileData) => isEqual(profileData, prevProfileData),
);

export const getIsProfileOwner = createSelector(
  getProfileData,
  getUserAuthData,
  (profileData, user) => isEqual(profileData?.id, user.authData?.id),
);
