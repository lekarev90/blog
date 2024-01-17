import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { AppLink, AppLinkColor } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    children: 'link text',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Default = Template.bind({});

export const Secondary = Template.bind({});

Secondary.args = {
  color: AppLinkColor.SECONDARY,
};
