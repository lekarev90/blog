import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { Button, ButtonVariants } from '@/shared/ui/depricated/Button';

import styles from './ErrorPage.module.scss';

export const ErrorPage = memo(() => {
  const { t } = useTranslation();

  const onReloadButtonClick = (): void => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={styles.container}>
      {t('translation:errorPage.mainTitle')}
      <Button
        variant={ButtonVariants.CLEAR}
        onClick={onReloadButtonClick}
      >
        {t('translation:errorPage.reloadButtonText')}
      </Button>
    </div>
  );
});
