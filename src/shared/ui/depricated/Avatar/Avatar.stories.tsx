import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';
import picture from './storybook.jpg';

export default {
  title: 'deprecated/shared/Avatar',
  component: Avatar,
  args: {
    src: picture,
  },

} as Meta<typeof Avatar>;

export const Large200: StoryObj<typeof Avatar> = {
  args: {
    size: 200,
  },
};

export const Small50: StoryObj<typeof Avatar> = {
  args: {
    size: 50,
  },
};
