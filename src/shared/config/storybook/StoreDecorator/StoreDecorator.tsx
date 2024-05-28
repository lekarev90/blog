import React from 'react';
import { StoryFn } from '@storybook/react';

// eslint-disable-next-line lekarev/layer-imports
import { profileReducer } from '@/features/editableProfileCard';
// eslint-disable-next-line lekarev/layer-imports
import { loginReducer } from '@/features/authByUsername';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { IStateSchema, StoreProvider } from '@/app/providers/StoreProvider';

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
