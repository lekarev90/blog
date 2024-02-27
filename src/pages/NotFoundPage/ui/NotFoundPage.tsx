import { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './NotFoundPage.module.scss';

export const NotFoundPage: FC = memo(() => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      {t('translation:notFoundPage.body.mainText')}
    </div>
  );
});
