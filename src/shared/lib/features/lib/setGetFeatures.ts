import { IFeatureFlags } from '@/shared/types/IFeatureFlags';

let featureFlags: IFeatureFlags = {};

export const setFeatureFlags = (newFeatureFlags?: IFeatureFlags) => {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags;
  }
};

export const getFeatureFlag = (flag: keyof IFeatureFlags) => featureFlags[flag];
export const getAllFeatureFlag = () => featureFlags;
