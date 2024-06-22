import React from 'react';

import { StoryFn, StoryContext } from '@storybook/react';

import { ThemeProvider } from '../../../../app/providers/ThemeProvider';

export const ThemeDecorator = (Story: StoryFn, context: StoryContext) => {
  const { globals: { theme } } = context;

  document.documentElement.dataset.theme = theme;

  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  );
};
