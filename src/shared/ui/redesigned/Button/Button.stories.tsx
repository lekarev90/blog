import { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  args: {
    children: 'text',
  },
} as Meta<typeof Button>;

export const Clear: StoryObj<typeof Button> = {
  args: {
    variant: 'clear',
  },
};

export const Outline: StoryObj<typeof Button> = {
  args: {
    variant: 'outline',
  },
};

export const Square: StoryObj<typeof Button> = {
  args: {
    variant: 'outline',
    square: true,
  },
};

export const SquareSizeM: StoryObj<typeof Button> = {
  args: {
    children: '<',
    variant: 'outline',
    square: true,
    size: 'm',
  },
};

export const SquareSizeL: StoryObj<typeof Button> = {
  args: {
    children: '<',
    variant: 'outline',
    square: true,
    size: 'l',
  },
};
export const SquareSizeXL: StoryObj<typeof Button> = {
  args: {
    children: '<',
    variant: 'outline',
    square: true,
    size: 'xl',
  },
};

export const Disabled: StoryObj<typeof Button> = {
  args: {
    children: 'disabled',
    variant: 'outline',
    disabled: true,
  },
};
