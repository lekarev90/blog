import { Story, StoryContext } from '@storybook/react';
import React from 'react';

import { ThemeProvider } from '../../../../app/providers/ThemeProvider';
import { classNames } from '../../../lib/classNames/classNames';

export const ThemeDecorator = (Story: Story, context: StoryContext) => {
  const { globals: { theme } } = context;

  return (
    <ThemeProvider>
      <div className={classNames({ className: 'app', additional: [theme] })}>
        <Story />
      </div>
    </ThemeProvider>
  );
};
