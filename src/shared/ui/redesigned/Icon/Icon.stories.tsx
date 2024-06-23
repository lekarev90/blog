import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import SearchIcon from '@/shared/assets/icons/search.svg';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import { Icon } from './Icon';

export default {
  title: 'shared/Icon',
  component: Icon,
  args: {
    Svg: SearchIcon,
  },
  decorators: [NewDesignDecorator(false)],
} as Meta<typeof Icon>;

export const Default: StoryObj<typeof Icon> = {};

export const Clickable: StoryObj<typeof Icon> = {
  args: {
    clickable: true,
    onClick: fn(),
  },
};
