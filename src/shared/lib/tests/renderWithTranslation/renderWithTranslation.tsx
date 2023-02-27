import { render, type RenderResult } from '@testing-library/react'
import React, { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18nTestConfig from 'shared/config/i18n/i18nTest.config'

export const renderWithTranslation = (Component: ReactNode): RenderResult => {
    return render(
        <I18nextProvider i18n={i18nTestConfig}>
            {Component}
        </I18nextProvider>
    )
}
