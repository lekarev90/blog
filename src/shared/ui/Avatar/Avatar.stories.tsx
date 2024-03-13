import { Meta, StoryObj } from '@storybook/react';

import picture from './storybook.jpg';

import { Avatar } from './Avatar';

export default {
  title: 'shared/Avatar',
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
