import React from 'react';
import { Story } from '@storybook/react';

import { loginReducer } from 'features/AuthByUsername';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader';

import { IStateSchema, StoreProvider } from '../../../../app/providers/StoreProvider';

const defaultAsyncReducer: ReducersList = {
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
