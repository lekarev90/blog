import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});

Default.decorators = [StoreDecorator({
  loginForm: { username: 'admin', password: '123456' },
})];

export const Error = Template.bind({});

Error.decorators = [StoreDecorator({
  loginForm: { username: 'admin', password: '123456', error: 'ERRORRRRR!!!' },
})];

export const Loading = Template.bind({});

Loading.decorators = [StoreDecorator({
  loginForm: { username: 'admin', password: '123456', isLoading: true },
})];
