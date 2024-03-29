import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticleDetailsPage = memo(() => {
  const { t } = useTranslation();

  return (
    <div>
      {t('translation:mainPage.bodyText')}
      ARTICLE DETAILS PAGE
    </div>
  );
});

export default ArticleDetailsPage;
