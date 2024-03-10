import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { ErrorPage } from './ErrorPage';

export default {
  title: 'widgets/ErrorPage',
  component: ErrorPage,
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = () => <ErrorPage />;

export const Default = Template.bind({});
