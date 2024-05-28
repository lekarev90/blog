import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { AppImage } from './AppImage';
import { Icon } from '../Icon';

import SomeIcon from '@/shared/assets/icons/star.svg';

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
