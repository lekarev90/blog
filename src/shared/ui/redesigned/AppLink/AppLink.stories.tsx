import { Meta, StoryObj } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import { AppLink } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    children: 'link text',
  },
  decorators: [NewDesignDecorator(false)],
} as Meta<typeof AppLink>;

export const Primary = {};

export const Red: StoryObj<typeof AppLink> = {
  args: {
    variant: 'red',
  },
};
