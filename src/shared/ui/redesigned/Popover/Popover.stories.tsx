import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import { Icon } from '../Icon';
import { VStack } from '../Stack';
import { Text } from '../Text';

import { Popover } from './Popover';

export default {
  title: 'shared/Popover',
  component: Popover,
  decorators: [NewDesignDecorator(false)],
  args: {
    children: (
      <VStack gap="16">
        <Text text="text" />
        <Text text="text" />
        <Text text="text" />
        <Text text="text" />
        <Text text="text" />
        <Text text="text" />
      </VStack>
    ),
    TriggerComponent: <Icon clickable onClick={fn()} Svg={NotificationIcon} />,
    as: 'div',
  },
} as Meta<typeof Popover>;

export const Default: StoryObj<typeof Popover> = {};
