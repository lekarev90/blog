import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  args: {
    isOpen: true,
    children: 'text text text text text text text text text text text text text text text text text text ',
  },
} as ComponentMeta<typeof LoginForm>;

export const Default: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;
