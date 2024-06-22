import { LOCALSTORAGE_LAST_DESIGN_KEY } from '@/shared/const/localstorage';
import { IFeatureFlags } from '@/shared/types/IFeatureFlags';

let featureFlags: IFeatureFlags = {
  isOldDesign: localStorage.getItem(LOCALSTORAGE_LAST_DESIGN_KEY) === 'old',
};

export const setFeatureFlags = (newFeatureFlags?: IFeatureFlags) => {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags;
  }
};

export const getFeatureFlag = (flag: keyof IFeatureFlags) => featureFlags[flag];
export const getAllFeatureFlag = () => featureFlags;
