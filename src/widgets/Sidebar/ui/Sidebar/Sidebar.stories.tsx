import { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { Sidebar } from './Sidebar';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
} as Meta<typeof Sidebar>;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  decorators: [StoreDecorator({})],
};
export const WithAuth = {
  decorators: [
    StoreDecorator({
      user: { authData: { id: '123', username: 'kek pek' } },
    }),
  ],
};
