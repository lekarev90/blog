import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { Input } from 'shared/ui/Input/Input';

export default {
  title: 'shared/Input',
  component: Input,
  args: {
    placeholder: 'some placeholder',
    value: 'some value',
    autofocus: true,
  },
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = (args) => <Input {...args} />;
