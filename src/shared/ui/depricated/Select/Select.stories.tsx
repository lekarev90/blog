import { Meta } from '@storybook/react';

import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  args: {
    name: 'select',
    label: 'label',
    value: 'second value',
    options: [
      {
        value: 'first value',
        content: 'first value',
      },
      {
        value: 'second value',
        content: 'second value',
      },
      {
        value: 'third value',
        content: 'third value',
      },

    ],
    onChange: () => {},
  },
} as Meta<typeof Select>;

export const Default = {};
