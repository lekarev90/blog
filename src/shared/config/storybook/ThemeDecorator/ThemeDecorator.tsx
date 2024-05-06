import { StoryFn, StoryContext } from '@storybook/react';
import React from 'react';

import { ThemeProvider } from '../../../../app/providers/ThemeProvider';

export const ThemeDecorator = (Story: StoryFn, context: StoryContext) => {
  const { globals: { theme } } = context;

  document.documentElement.dataset.theme = theme;

  return (
    <ThemeProvider>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
};
