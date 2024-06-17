import { ReactElement } from 'react';

import { IFeatureFlags } from '@/shared/types/IFeatureFlags';

import { getFeatureFlag } from '../../lib/setGetFeatures';

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
