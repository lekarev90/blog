import { Meta, StoryObj } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import { Card } from './Card';

export default {
  title: 'shared/Card',
  component: Card,
  args: {
    children: 'some content here',
  },
  decorators: [NewDesignDecorator(false)],
} as Meta<typeof Card>;

export const Default: StoryObj<typeof Card> = {};

export const Outlined: StoryObj<typeof Card> = {
  args: {
    variant: 'outlined',
  },
};

export const Light: StoryObj<typeof Card> = {
  args: {
    variant: 'light',
  },
};

export const Padding0: StoryObj<typeof Card> = {
  args: {
    padding: '0',
  },
};

export const Padding8: StoryObj<typeof Card> = {
  args: {
    padding: '8',
  },
};

export const Padding16: StoryObj<typeof Card> = {
  args: {
    padding: '16',
  },
};

export const Padding24: StoryObj<typeof Card> = {
  args: {
    padding: '24',
  },
};

export const BorderRadiusNormal: StoryObj<typeof Card> = {
  args: {
    borderRadius: 'normal',
  },
};

export const BorderRadiusRounded: StoryObj<typeof Card> = {
  args: {
    borderRadius: 'rounded',
  },
};

export const BorderRadiusPartial: StoryObj<typeof Card> = {
  args: {
    borderRadius: 'partial',
  },
};
