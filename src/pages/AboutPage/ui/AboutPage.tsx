import React, { type FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

const AboutPage: FC = memo(() => {
  const { t } = useTranslation();

  return (
    <div>
      {t('translation:aboutPage.bodyText')}
    </div>
  );
});

export default AboutPage;
