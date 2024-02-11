import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  args: {
    isOpen: true,
    children: 'text text text text text text text text text text text text text text text text text text ',
  },
} as ComponentMeta<typeof Modal>;

export const Default: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;
