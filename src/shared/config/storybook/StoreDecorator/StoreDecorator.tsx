import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername';
import React from 'react';
import { Story } from '@storybook/react';

import { IStateSchema, StoreProvider } from '../../../../app/providers/StoreProvider';

const defaultAsyncReducer: Partial<ReducersMapObject<IStateSchema>> = {
  loginForm: loginReducer,
};

export const StoreDecorator = (state: Partial<IStateSchema>) => (Story: Story) => (
  <StoreProvider
    initialState={state}
    asyncReducers={defaultAsyncReducer}
  >
    <Story />
  </StoreProvider>
);
