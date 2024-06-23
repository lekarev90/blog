import { Meta } from '@storybook/react';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  decorators: [NewDesignDecorator(false)],
  args: {
    isOpen: true,
    children: 'text text text text text text text text text text text text text text text text text text ',
  },
} as Meta<typeof Modal>;

export const Default = {};
