import { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
} as Meta<typeof LoginForm>;

export const Default: StoryObj<typeof LoginForm> = {
  decorators: [StoreDecorator({
    loginForm: { username: 'admin', password: '123456' },
  })],
};

export const Error = {
  decorators: [StoreDecorator({
    loginForm: { username: 'admin', password: '123456', error: 'ERRORRRRR!!!' },
  })],
};

export const Loading = {
  decorators: [StoreDecorator({
    loginForm: { username: 'admin', password: '123456', isLoading: true },
  })],
};
