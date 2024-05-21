import { Meta, StoryObj } from '@storybook/react';

import { NotificationItem } from './NotificationItem';

export default {
  title: 'entities/Notification',
  component: NotificationItem,
  args: {},
} as Meta<typeof NotificationItem>;

export const Default: StoryObj<typeof NotificationItem> = {};
