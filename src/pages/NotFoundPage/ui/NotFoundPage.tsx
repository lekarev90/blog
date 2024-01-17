import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string
}
export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames({ className: styles.container, additional: [className] })}>
      {t('translation:notFoundPage.body.mainText')}
    </div>
  );
};
