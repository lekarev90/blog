import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = () => <Sidebar />;

export const Default = Template.bind({});

Default.decorators = [StoreDecorator({})];

export const WithAuth = Template.bind({});

WithAuth.decorators = [StoreDecorator({ user: { authData: { id: '123', username: 'kek pek' } } })];
