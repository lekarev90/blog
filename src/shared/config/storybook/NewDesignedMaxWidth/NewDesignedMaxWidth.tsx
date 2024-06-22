import { StoryFn } from '@storybook/react';

import { HStack } from '@/shared/ui/redesigned/Stack';

export const NewDesignedMaxWidth = (Story: StoryFn) => (
  <HStack justify="center" maxWidth>
    <div style={{ maxWidth: 1200 }}>
      <Story />
    </div>
  </HStack>
);
