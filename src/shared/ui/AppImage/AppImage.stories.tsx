import { Meta, StoryObj } from '@storybook/react';

import SomeIcon from '@/shared/assets/icons/star.svg';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { Icon } from '../Icon';

import { AppImage } from './AppImage';

export default {
  title: 'shared/AppImage',
  component: AppImage,
  decorators: [StoreDecorator({})],
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
