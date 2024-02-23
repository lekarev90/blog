import React from 'react';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '../../../../app/providers/StoreProvider';

export const StoreDecorator = (state: Partial<StateSchema>) => (Story: Story) => (
  <StoreProvider initialState={state}>
    <Story />
  </StoreProvider>
);
