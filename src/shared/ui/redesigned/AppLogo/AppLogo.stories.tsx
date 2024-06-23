import { Meta } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import { AppLogo } from './AppLogo';

export default {
  title: 'shared/AppLogo',
  component: AppLogo,
  args: {
    height: 200,
    width: 200,
  },
  decorators: [NewDesignDecorator(false)],
} as Meta<typeof AppLogo>;

export const Default = {};
