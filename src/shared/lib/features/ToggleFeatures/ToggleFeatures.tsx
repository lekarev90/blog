import { ReactElement } from 'react';
import { getFeatureFlag } from '../model/helpers/setGetFeatures';
import { IFeatureFlags } from '@/shared/types/IFeatureFlags';

interface IToggleFeaturesProps {
    feature: keyof IFeatureFlags;
    on: ReactElement;
    off: ReactElement;
}

export const ToggleFeatures = (props: IToggleFeaturesProps) => {
  const { on, off, feature } = props;

  if (getFeatureFlag(feature)) {
    return on;
  }

  return off;
};
