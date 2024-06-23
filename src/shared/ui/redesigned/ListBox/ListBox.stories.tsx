import { Meta, StoryObj } from '@storybook/react';

// eslint-disable-next-line lekarev/layer-imports
import { ECountrySchema } from '@/entities/Country';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  decorators: [NewDesignDecorator(false)],
  args: {
    items: [
      {
        value: ECountrySchema.RUSSIA,
        content: ECountrySchema.RUSSIA,
      },
      {
        value: ECountrySchema.SPAIN,
        content: ECountrySchema.SPAIN,
      },
      {
        value: ECountrySchema.USA,
        content: ECountrySchema.USA,
      },
      {
        value: ECountrySchema.UKRAINE,
        content: ECountrySchema.UKRAINE,
      },
    ],
    value: ECountrySchema.USA,
    buttonVariant: 'outline',
    label: 'label',
  },
} as Meta<typeof ListBox>;

export const Default: StoryObj<typeof ListBox> = {};

export const WithoutLabel: StoryObj<typeof ListBox> = {
  args: {
    label: undefined,
  },
};

export const HideLabelArea: StoryObj<typeof ListBox> = {
  args: {
    showLabelArea: false,
  },
};

export const ButtonVariantFilled: StoryObj<typeof ListBox> = {
  args: {
    buttonVariant: 'filled',
  },
};

export const Disabled: StoryObj<typeof ListBox> = {
  args: {
    disabled: true,
  },
};
