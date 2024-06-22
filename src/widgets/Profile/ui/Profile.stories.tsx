import { Meta } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { Profile } from './Profile';

export default {
  title: 'widgets/Profile',
  component: Profile,
  decorators: [StoreDecorator({})],
} as Meta<typeof Profile>;

export const Default = {};

export const Redesigned = {
  decorators: [NewDesignDecorator(false)],
};
