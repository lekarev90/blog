import React from 'react';

import { StoryFn } from '@storybook/react';

import { IStateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { loginReducer } from '../../../../features/authByUsername';
import { profileReducer } from '../../../../features/editableProfileCard';

const defaultAsyncReducer: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator = (state: Partial<IStateSchema>) => (Story: StoryFn) => (
  <StoreProvider
    initialState={state}
    asyncReducers={defaultAsyncReducer}
  >
    <Story />
  </StoreProvider>
);
