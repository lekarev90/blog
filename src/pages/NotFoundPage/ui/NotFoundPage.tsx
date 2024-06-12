import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { Page } from '@/shared/ui/Page';

export const NotFoundPage = memo(() => {
  const { t } = useTranslation();

  return (
    <Page data-testid="not-found-page">
      {t('translation:notFoundPage.body.mainText')}
    </Page>
  );
});
