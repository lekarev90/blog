import { Meta, StoryObj } from '@storybook/react';

import { ECountrySchema } from '@/entities/Country';
import { ECurrency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import ProfilePage from './ProfilePage';

const url = `${__API__}/profile/1`;

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  decorators: [StoreDecorator({})],
  parameters: {
    mockData: [
      {
        url,
        method: 'GET',
        status: 200,
        response: {
          firstName: 'Andrew2',
          lastName: 'Ducalis',
          age: '25',
          currency: ECurrency.EUR,
          country: ECountrySchema.USA,
          city: 'Moscow',
          username: 'Ducalis2000',
          avatar: 'https://img.freepik.com/premium-photo/a-cat-wearing-sunglasses-and-a-hat-that-says-cat-on-it_924318-283.jpg',
        },
      },
    ],
  },
} as Meta<typeof ProfilePage>;

type Story = StoryObj<typeof ProfilePage>;

export const Default: Story = {};

export const Loading: Story = {
  parameters: {
    mockData: [
      {
        url,
        method: 'GET',
        status: 200,
        delay: 10000 * 10000,
        response: {},
      },
    ],
  },
};
