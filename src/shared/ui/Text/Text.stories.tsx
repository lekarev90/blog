import { Meta, StoryObj } from '@storybook/react';
import { Text, TextSize, TextVariant } from './Text';

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
    variant: TextVariant.ERROR,
    title: 'Title hey ya',
    text: 'Some text for presentation',
  },
};

export const SizeS: StoryObj<typeof Text> = {
  args: {
    title: 'Title hey ya',
    text: 'Some text for presentation',
    size: TextSize.S,
  },
};

export const SizeM: StoryObj<typeof Text> = {
  args: {
    title: 'Title hey ya',
    text: 'Some text for presentation',
    size: TextSize.M,
  },
};

export const SizeL: StoryObj<typeof Text> = {
  args: {
    title: 'Title hey ya',
    text: 'Some text for presentation',
    size: TextSize.L,
  },
};
