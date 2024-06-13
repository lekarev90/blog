import { Meta, StoryObj } from '@storybook/react';

import { AppLink } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    children: 'link text',
  },
} as Meta<typeof AppLink>;

export const Default = {};

export const Secondary: StoryObj<typeof AppLink> = {
  args: {
    variant: 'secondary',
  },
};
