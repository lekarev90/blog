import { StoryFn } from '@storybook/react';

import { setFeatureFlags } from '@/shared/lib/features';
import { getAllFeatureFlag } from '@/shared/lib/features/lib/setGetFeatures';

export const NewDesignDecorator = (isOldDesign = true) => (Story: StoryFn) => {
  setFeatureFlags({ ...getAllFeatureFlag(), isOldDesign });

  return (
    <div className={isOldDesign ? 'app' : 'app_v2'}>
      <Story />
    </div>
  );
};
