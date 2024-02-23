import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Text, TextVariant } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Common = Template.bind({});

Common.args = {
  title: 'Title hey ya',
  text: 'Some text for presentation',
};

export const OnlyTitle = Template.bind({});

OnlyTitle.args = {
  title: 'Only title',
};

export const OnlyDescription = Template.bind({});

OnlyDescription.args = {
  text: 'Only text',
};

export const Error = Template.bind({});

Error.args = {
  variant: TextVariant.ERROR,
  title: 'Title hey ya',
  text: 'Some text for presentation',
};
