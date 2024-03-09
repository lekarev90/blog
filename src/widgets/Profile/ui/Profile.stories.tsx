import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { Profile } from './Profile';

export default {
  title: 'widgets/Profile',
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = () => <Profile />;

export const Default = Template.bind({});

Default.decorators = [StoreDecorator({})];
