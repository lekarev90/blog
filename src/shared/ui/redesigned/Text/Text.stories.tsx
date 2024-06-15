import { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
} as Meta<typeof Text>;

export const Common: StoryObj<typeof Text> = {
  args: {
    title: 'Title hey ya',
    text: 'Some text for presentation',
  },
};

export const OnlyTitle: StoryObj<typeof Text> = {
  args: {
    title: 'Only title',
  },
};

export const OnlyDescription: StoryObj<typeof Text> = {
  args: {
    text: 'Only text',
  },
};

export const Error: StoryObj<typeof Text> = {
  args: {
    variant: 'error',
    title: 'Title hey ya',
    text: 'Some text for presentation',
  },
};

export const Accent: StoryObj<typeof Text> = {
  args: {
    variant: 'accent',
    title: 'Title hey ya',
    text: 'Some text for presentation',
  },
};

export const SizeS: StoryObj<typeof Text> = {
  args: {
    title: 'Title hey ya',
    text: 'Some text for presentation',
    size: 's',
  },
};

export const SizeM: StoryObj<typeof Text> = {
  args: {
    title: 'Title hey ya',
    text: 'Some text for presentation',
    size: 'm',
  },
};

export const SizeL: StoryObj<typeof Text> = {
  args: {
    title: 'Title hey ya',
    text: 'Some text for presentation',
    size: 'l',
  },
};
