import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import picture from './storybook.jpg';

import { Avatar } from './Avatar';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  args: {
    src: picture,
  },

} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Large200 = Template.bind({});

Large200.args = {
  size: 200,
};

export const Small50 = Template.bind({});

Small50.args = {
  size: 50,
};
