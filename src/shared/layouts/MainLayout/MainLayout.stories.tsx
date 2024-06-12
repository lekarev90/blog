import { Meta } from '@storybook/react';

import { Navbar } from '../../../widgets/Navbar';
import { Sidebar } from '../../../widgets/Sidebar';
import { StoreDecorator } from '../../config/storybook/StoreDecorator/StoreDecorator';

import { MainLayout } from './MainLayout';

export default {
  title: 'shared/layouts/MainLayout',
  component: MainLayout,
  decorators: [StoreDecorator({})],
  args: {
    header: <Navbar />,
    content: 'Some content',
    sidebar: <Sidebar />,
  },
} as Meta<typeof MainLayout>;

export const Default = {};
