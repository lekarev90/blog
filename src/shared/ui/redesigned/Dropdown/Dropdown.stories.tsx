import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import { Button } from '../Button';

import { Dropdown } from './Dropdown';

export default {
  title: 'shared/Dropdown',
  component: Dropdown,
  args: {
    TriggerComponent: <Button variant="outline">Trigger component</Button>,
    items: [{
      value: 'first value',
      onClick: fn(),
    },
    {
      value: 'second value',
      onClick: fn(),
    },
    {
      value: 'third value',
      onClick: fn(),
    },
    ],
  },
  decorators: [NewDesignDecorator(false)],
} as Meta<typeof Dropdown>;

export const Default: StoryObj<typeof Dropdown> = {};
