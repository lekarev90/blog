import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'

const MainPage: FC = () => {
    const { t } = useTranslation()

    return (
        <div>
            {t('translation:mainPage')}
        </div>
    )
}

export default MainPage
