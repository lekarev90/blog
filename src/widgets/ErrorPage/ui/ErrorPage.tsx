import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import { Button, ButtonVariants } from 'shared/ui/Button/Button';

import styles from './ErrorPage.module.scss';

const cx = classNames.bind(styles);

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation();

  const onReloadButtonClick = (): void => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={cx(styles.container, className)}>
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
