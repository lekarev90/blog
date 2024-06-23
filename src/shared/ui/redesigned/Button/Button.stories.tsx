import { Meta, StoryObj } from '@storybook/react';

import SearchIcon from '@/shared/assets/icons/search.svg';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import { Icon } from '../Icon';

import { Button } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  args: {
    children: 'text',
  },
  decorators: [NewDesignDecorator(false)],
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

export const Filled: StoryObj<typeof Button> = {
  args: {
    variant: 'filled',
  },
};

export const Dark: StoryObj<typeof Button> = {
  args: {
    variant: 'dark',
  },
};

export const OutlineDefault: StoryObj<typeof Button> = {
  args: {
    variant: 'outline',
  },
};

export const OutlineSuccess: StoryObj<typeof Button> = {
  args: {
    variant: 'outline',
    outlineColor: 'success',
  },
};

export const OutlineError: StoryObj<typeof Button> = {
  args: {
    variant: 'outline',
    outlineColor: 'error',
  },
};

export const SizeM: StoryObj<typeof Button> = {
  args: {
    variant: 'outline',
    size: 'm',
  },
};

export const SizeL: StoryObj<typeof Button> = {
  args: {
    variant: 'outline',
    size: 'l',
  },
};

export const SizeXL: StoryObj<typeof Button> = {
  args: {
    variant: 'outline',
    size: 'xl',
  },
};

export const Wide: StoryObj<typeof Button> = {
  args: {
    variant: 'outline',
    isWide: true,
  },
};

export const AddonLeft: StoryObj<typeof Button> = {
  args: {
    variant: 'outline',
    addonLeft: <Icon Svg={SearchIcon} />,
  },
};

export const AddonRight: StoryObj<typeof Button> = {
  args: {
    variant: 'outline',
    addonRight: <Icon Svg={SearchIcon} />,
  },
};

export const Disabled: StoryObj<typeof Button> = {
  args: {
    children: 'disabled',
    variant: 'outline',
    disabled: true,
  },
};
