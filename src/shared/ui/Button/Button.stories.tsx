import { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSize, ButtonVariants } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  args: {
    children: 'text',
  },
} as Meta<typeof Button>;

export const Clear: StoryObj<typeof Button> = {
  args: {
    variant: ButtonVariants.CLEAR,
  },
};

export const ClearInverted: StoryObj<typeof Button> = {
  args: {
    variant: ButtonVariants.CLEAR_INVERTED,
  },
};

export const Outline: StoryObj<typeof Button> = {
  args: {
    variant: ButtonVariants.OUTLINE,
  },
};

export const BG: StoryObj<typeof Button> = {
  args: {
    variant: ButtonVariants.BACKGROUND,
  },
};

export const BG_INVERTED: StoryObj<typeof Button> = {
  args: {
    variant: ButtonVariants.BACKGROUND_INVERTED,
  },
};

export const Square: StoryObj<typeof Button> = {
  args: {
    variant: ButtonVariants.BACKGROUND_INVERTED,
    square: true,
  },
};

export const SquareSizeM: StoryObj<typeof Button> = {
  args: {
    children: '<',
    variant: ButtonVariants.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
  },
};

export const SquareSizeL: StoryObj<typeof Button> = {
  args: {
    children: '<',
    variant: ButtonVariants.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
};
export const SquareSizeXL: StoryObj<typeof Button> = {
  args: {
    children: '<',
    variant: ButtonVariants.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
};

export const Disabled: StoryObj<typeof Button> = {
  args: {
    children: 'disabled',
    variant: ButtonVariants.OUTLINE,
    disabled: true,
  },
};
