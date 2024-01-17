import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { Button, ButtonSize, ButtonVariants } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'text',
};

export const Clear = Template.bind({});

Clear.args = {
  children: 'text',
  variant: ButtonVariants.CLEAR,
};

export const Outline = Template.bind({});

Outline.args = {
  children: 'text',
  variant: ButtonVariants.OUTLINE,
};

export const BG = Template.bind({});

BG.args = {
  children: 'text',
  variant: ButtonVariants.BACKGROUND,
};

export const BG_INVERTED = Template.bind({});

BG_INVERTED.args = {
  children: 'text',
  variant: ButtonVariants.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});

Square.args = {
  children: 'text',
  variant: ButtonVariants.BACKGROUND_INVERTED,
  square: true,
};

export const SquareSizeM = Template.bind({});

SquareSizeM.args = {
  children: '<',
  variant: ButtonVariants.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.M,
};

export const SquareSizeL = Template.bind({});

SquareSizeL.args = {
  children: '<',
  variant: ButtonVariants.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L,
};

export const SquareSizeXL = Template.bind({});

SquareSizeXL.args = {
  children: '<',
  variant: ButtonVariants.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL,
};
