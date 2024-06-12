import React, { type ReactNode } from 'react';

import { render, type RenderResult } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';

import i18nTestConfig from '@/shared/config/i18n/i18nTest.config';

// eslint-disable-next-line
export const renderWithTranslation = (Component: ReactNode): RenderResult => render(<I18nextProvider i18n={i18nTestConfig}>{Component}</I18nextProvider>);
