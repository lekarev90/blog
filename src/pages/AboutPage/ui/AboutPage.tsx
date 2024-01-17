import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      {t('about:aboutPage.bodyText')}
    </div>
  );
};

export default AboutPage;
