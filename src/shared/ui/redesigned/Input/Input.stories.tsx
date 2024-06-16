import { Meta } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
  args: {
    placeholder: 'some placeholder',
    value: 'some value',
    autofocus: true,
  },
} as Meta<typeof Input>;

export const Default = {};
