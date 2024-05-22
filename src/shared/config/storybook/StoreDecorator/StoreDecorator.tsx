import React from 'react';
import { StoryFn } from '@storybook/react';

import { profileReducer } from '@/features/EditableProfileCard';
import { loginReducer } from '@/features/AuthByUsername';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { IStateSchema, StoreProvider } from '../../../../app/providers/StoreProvider';

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
