import { StoryContext, StoryFn } from '@storybook/react';
import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (Story: StoryFn, { parameters }: StoryContext) => {
  const { withoutRouter } = parameters;

  const Wrapper = withoutRouter ? Fragment : BrowserRouter;

  return (
    <Wrapper>
      <Story />
    </Wrapper>
  );
};
