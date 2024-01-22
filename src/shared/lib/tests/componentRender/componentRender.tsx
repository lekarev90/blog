import { render, type RenderResult } from '@testing-library/react';
import React, { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nTestConfig from 'shared/config/i18n/i18nTest.config';

export interface IComponentRouter {
  route?: string;
}

export const componentRender = (
  Component: ReactNode,
  options: IComponentRouter = {},
): RenderResult => {
  const { route = '/' } = options;

  return render(<MemoryRouter initialEntries={[route]}>
    <I18nextProvider i18n={i18nTestConfig}>
      {Component}
    </I18nextProvider>
  </MemoryRouter>);
};
