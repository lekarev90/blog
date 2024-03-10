import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Sidebar } from './Sidebar';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = () => <Sidebar />;

export const Default = Template.bind({});
