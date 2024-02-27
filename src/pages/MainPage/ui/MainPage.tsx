import React, { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = memo(() => {
  const { t } = useTranslation();

  return (
    <div>
      {t('translation:mainPage.bodyText')}
    </div>
  );
});

export default MainPage;
