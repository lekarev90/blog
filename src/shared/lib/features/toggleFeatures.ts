import { IFeatureFlags } from '@/shared/types/IFeatureFlags';
import { getFeatureFlag } from './setGetFeatures';

interface IToggleFeaturesOptions<T> {
  name: keyof IFeatureFlags;
  on: () => T;
  off: () => T
}

export const toggleFeatures = <T>({ on, off, name }: IToggleFeaturesOptions<T>) => {
  if (getFeatureFlag(name)) {
    return on();
  }

  return off();
};
