import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = memo(() => {
  const { t } = useTranslation();

  return (
    <div>
      {t('translation:mainPage.bodyText')}
    </div>
  );
});

export default MainPage;
