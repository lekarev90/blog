import { type ReactNode } from 'react';

import { render, type RenderResult } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { IStateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import i18nTestConfig from '@/shared/config/i18n/i18nTest.config';

import { ReducersList } from '../../components/DynamicModuleLoader/DynamicModuleLoader';

export interface IComponentRouter {
  route?: string;
  initialState?: Partial<IStateSchema>
  asyncReducers?: ReducersList
}

export const componentRender = (
  Component: ReactNode,
  options: IComponentRouter = {},
): RenderResult => {
  const { route = '/', initialState, asyncReducers } = options;

  return render(
    <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nTestConfig}>
          {Component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
};
