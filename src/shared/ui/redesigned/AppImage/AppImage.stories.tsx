import { Meta, StoryObj } from '@storybook/react';

import SomeIcon from '@/shared/assets/icons/article.svg';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { Icon } from '../Icon';

import { AppImage } from './AppImage';

export default {
  title: 'shared/AppImage',
  component: AppImage,
  decorators: [StoreDecorator({}), NewDesignDecorator(false)],
  args: {
    src: 'https://picsum.photos/200/300',
  },
} as Meta<typeof AppImage>;

export const Default = {};

export const ErrorFallBackWithIcon: StoryObj<typeof AppImage> = {
  args: {
    src: undefined,
    errorFallback: <Icon Svg={SomeIcon} />,
  },
};
