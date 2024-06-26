import { Meta } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import { StarRating } from './StarRating';

export default {
  title: 'shared/StarRating',
  component: StarRating,
  decorators: [NewDesignDecorator(false)],
} as Meta<typeof StarRating>;

export const Default = {};
