import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Default = Template.bind({});

Default.decorators = [StoreDecorator({})];

export const WithAuthData = Template.bind({});

WithAuthData.decorators = [StoreDecorator({ user: { authData: { id: '5', username: 'user' } } })];
