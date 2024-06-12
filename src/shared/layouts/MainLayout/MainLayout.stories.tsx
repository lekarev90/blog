import { Meta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { MainLayout } from './MainLayout';
// eslint-disable-next-line lekarev/layer-imports
import { Navbar } from '@/widgets/Navbar';
// eslint-disable-next-line lekarev/layer-imports
import { Sidebar } from '@/widgets/Sidebar';

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
