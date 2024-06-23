import { Meta, StoryObj } from '@storybook/react';

import SearchIcon from '@/shared/assets/icons/search.svg';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import { Icon } from '../Icon';

import { Input } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
  decorators: [NewDesignDecorator(false)],
  args: {
    placeholder: 'some placeholder',
    value: 'some value',
    autofocus: true,
  },
} as Meta<typeof Input>;

export const Default: StoryObj<typeof Input> = {};

export const WithLabel: StoryObj<typeof Input> = {
  args: {
    label: 'label',
  },
};

export const DisableLabelArea: StoryObj<typeof Input> = {
  args: {
    disableLabelArea: true,
  },
};

export const HeightS: StoryObj<typeof Input> = {
  args: {
    inputHeight: 's',
  },
};

export const HeightM: StoryObj<typeof Input> = {
  args: {
    inputHeight: 'm',
  },
};

export const HeightL: StoryObj<typeof Input> = {
  args: {
    inputHeight: 'l',
  },
};

export const AddonLeft: StoryObj<typeof Input> = {
  args: {
    addonLeft: <Icon Svg={SearchIcon} />,
  },
};

export const AddonRight: StoryObj<typeof Input> = {
  args: {
    addonRight: <Icon Svg={SearchIcon} />,
  },
};

export const Disabled: StoryObj<typeof Input> = {
  args: {
    disabled: true,
  },
};
