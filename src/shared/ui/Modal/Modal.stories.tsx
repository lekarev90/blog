import { Meta } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  args: {
    isOpen: true,
    children: 'text text text text text text text text text text text text text text text text text text ',
  },
} as Meta<typeof Modal>;

export const Default = {};
