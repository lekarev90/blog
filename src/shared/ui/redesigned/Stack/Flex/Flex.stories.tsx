import { Meta, StoryObj } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import { Flex } from './Flex';

export default {
  title: 'shared/Flex',
  decorators: [NewDesignDecorator(false)],
  component: Flex,
  args: {
    gap: '8',
    children: (
      <>
        <div>div</div>
        <div>div</div>
        <div>div</div>
        <div>div</div>
        <div>div</div>
        <div>div</div>
        <div>div</div>
        <div>div</div>
      </>
    ),
  },
} as Meta<typeof Flex>;

export const Row: StoryObj<typeof Flex> = {};

export const Column: StoryObj<typeof Flex> = {
  args: {
    direction: 'column',
  },
};

export const ColumnAlignEnd: StoryObj<typeof Flex> = {
  args: {
    align: 'end',
    direction: 'column',
  },
};

export const RowGap4: StoryObj<typeof Flex> = {
  args: {
    gap: '4',
  },
};

export const RowGap8: StoryObj<typeof Flex> = {
  args: {
    gap: '8',
  },
};

export const RowGap16: StoryObj<typeof Flex> = {
  args: {
    gap: '16',
  },
};

export const RowGap32: StoryObj<typeof Flex> = {
  args: {
    gap: '32',
  },
};

export const ColumnGap16: StoryObj<typeof Flex> = {
  args: {
    direction: 'column',
    gap: '16',
  },
};
