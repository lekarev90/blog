import { IStateSchema } from 'app/providers/StoreProvider';
import { isEqual } from 'lodash';
import { createSelector } from 'reselect';

export const getProfileData = (state: IStateSchema) => state.profile?.data;
export const getProfilePrevData = (state: IStateSchema) => state.profile?.prevData;

export const getProfileError = (state: IStateSchema) => state.profile?.error;

export const getProfileIsLoading = (state: IStateSchema) => state.profile?.isLoading;

export const getIsProfileDataSame = createSelector(
  getProfileData,
  getProfilePrevData,
  (profileData, prevProfileData) => isEqual(profileData, prevProfileData),
);
