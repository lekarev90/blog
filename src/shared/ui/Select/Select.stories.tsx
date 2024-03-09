import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { Select } from 'shared/ui/Select/Select';

export default {
  title: 'shared/Select',
  component: Select,
  args: {
    placeholder: 'some placeholder',
    value: 'some value',
    autofocus: true,
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {
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
};
