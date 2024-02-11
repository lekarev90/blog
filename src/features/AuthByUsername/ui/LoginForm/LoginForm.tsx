import classNames from 'classnames/bind';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import styles from './LoginForm.module.scss';

const cx = classNames.bind(styles);

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cx(styles.container, className)}>
      <Input
        placeholder={t('translation:authModal.username')}
        autofocus
      />
      <Input placeholder={t('translation:authModal.password')} />
      <Button className={styles.loginBtn}>
        {t('translation:authModal.loginBtn')}
      </Button>
    </div>
  );
};
