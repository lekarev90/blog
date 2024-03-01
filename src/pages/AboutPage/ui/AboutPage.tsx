import React, { memo } from 'react';

import { useTranslation } from 'react-i18next';

const AboutPage = memo(() => {
  const { t } = useTranslation();

  return (
    <div>
      {t('translation:aboutPage.bodyText')}
    </div>
  );
});

export default AboutPage;
