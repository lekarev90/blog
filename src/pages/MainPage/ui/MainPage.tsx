import React, { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { Page } from '@/shared/ui/depricated/Page';

const MainPage = memo(() => {
  const { t } = useTranslation();

  return (
    <Page data-testid="main-page">
      {t('translation:mainPage.bodyText')}
    </Page>
  );
});

export default MainPage;
