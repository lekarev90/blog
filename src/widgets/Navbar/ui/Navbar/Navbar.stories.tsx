import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  decorators: [StoreDecorator({})],
} as Meta<typeof Navbar>;

export const Default = {};

export const WithAuthData: StoryObj<typeof Navbar> = {
  decorators: [StoreDecorator({ user: { authData: { id: '5', username: 'user' } } })],
};
