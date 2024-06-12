import { Meta, StoryObj } from '@storybook/react';

import { NOTIFICATION_REQUEST_URL } from '@/entities/Notification';
import { PaddingsDecorator } from '@/shared/config/storybook/PaddingsDecorator/PaddingsDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { NotificationModal } from './NotificationModal';

export default {
  title: 'features/navbar/NotificationModal',
  component: NotificationModal,
  decorators: [StoreDecorator({}), PaddingsDecorator],
  parameters: {
    mockData: [
      {
        url: `${__API__}${NOTIFICATION_REQUEST_URL}`,
        method: 'GET',
        status: 200,
        response: [{
          id: '1',
          title: 'Уведомление 1',
          description: 'Произошло какое-то событие',
          userId: '1',
        },
        {
          id: '2',
          title: 'Уведомление 2',
          description: 'Произошло какое-то событие',
          userId: '1',
          href: 'http://localhost:3000/admin',
        },
        {
          id: '3',
          title: 'Уведомление 3',
          description: 'Произошло какое-то событие',
          userId: '1',
          href: 'http://localhost:3000/admin',
        },
        {
          id: '4',
          title: 'Уведомление 4',
          description: 'Произошло какое-то событие',
          userId: '1',
        },
        {
          id: '5',
          title: 'Уведомление 1',
          description: 'Произошло какое-то событие',
          userId: '2',
        },
        ],
      },
    ],
  },
} as Meta<typeof NotificationModal>;

export
const Default
:
StoryObj<typeof NotificationModal> = {};
