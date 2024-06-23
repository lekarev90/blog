import { Meta, StoryObj } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  decorators: [NewDesignDecorator(false)],
  args: {
    children: 'text',
  },
} as Meta<typeof Skeleton>;

export const Default: StoryObj<typeof Skeleton> = {
  args: {
    width: '100%',
    height: 100,
  },
};

export const Circle: StoryObj<typeof Skeleton> = {
// @ts-ignore
  withoutRouter: 'hah',
  args: {
    borderRadius: '50%',
    height: 100,
    width: 100,
  },
};
