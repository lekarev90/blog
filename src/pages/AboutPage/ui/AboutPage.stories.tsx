import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import AboutPage from './AboutPage';

export default {
  title: 'pages/AboutPage',
  component: AboutPage,
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const Default = Template.bind({});
