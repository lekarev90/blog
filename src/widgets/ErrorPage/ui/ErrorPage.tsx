import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonVariants } from 'shared/ui/Button/Button';

import styles from './ErrorPage.module.scss';

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage: FC<ErrorPageProps> = ({ className }) => {
  const { t } = useTranslation();

  const onReloadButtonClick = (): void => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames({ className: styles.container, additional: [className] })}>
      {t('translation:errorPage.mainTitle')}
      <Button
        variant={ButtonVariants.CLEAR}
        onClick={onReloadButtonClick}
      >
        {t('translation:errorPage.reloadButtonText')}
      </Button>
    </div>
  );
};
