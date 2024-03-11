import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Country } from '../../../entities/Country';
import { Currency } from '../../../entities/Currency';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator/StoreDecorator';

import ProfilePage from './ProfilePage';

const url = `${__API__}/profile`;

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  decorators: [StoreDecorator({})],
  parameters: {
    mockData: [{
      url,
      method: 'GET',
      status: 200,
      response: {
        firstName: 'Andrew2',
        lastName: 'Ducalis',
        age: '25',
        currency: Currency.EUR,
        country: Country.USA,
        city: 'Moscow',
        username: 'Ducalis2000',
        avatar: 'https://img.freepik.com/premium-photo/a-cat-wearing-sunglasses-and-a-hat-that-says-cat-on-it_924318-283.jpg',
      },
    }],
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Default = Template.bind({});

export const Loading = Template.bind({});

Loading.parameters = {
  mockData: [{
    url,
    method: 'GET',
    status: 200,
    delay: 10000 * 10000,
    response: {},
  }],
};
