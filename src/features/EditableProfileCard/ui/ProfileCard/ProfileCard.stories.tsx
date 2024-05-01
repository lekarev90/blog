import { Meta, StoryObj } from '@storybook/react';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
  title: 'features/ProfileCard',
  component: ProfileCard,
  args: {
    data: {
      id: '1',
      firstName: 'Andrew2',
      lastName: 'Ducalis',
      age: '25',
      currency: Currency.EUR,
      country: Country.USA,
      city: 'Moscow',
      username: 'Ducalis2000',
      avatar: 'https://img.freepik.com/premium-photo/a-cat-wearing-sunglasses-and-a-hat-that-says-cat-on-it_924318-283.jpg',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {};

export const isReadonly: Story = {
  args: {
    isReadonly: true,
  },
};

export const isLoading: Story = {
  args: {
    isLoading: true,
  },
};
