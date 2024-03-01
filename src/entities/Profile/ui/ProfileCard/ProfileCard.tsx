import classNames from 'classnames/bind';
import {
  getProfileData, getProfileReadonly,
} from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, ButtonVariants } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';

import styles from './ProfileCard.module.scss';

const cx = classNames.bind(styles);

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation();
  const data = useSelector(getProfileData);
  const isReadonly = useSelector(getProfileReadonly);
  // const error = useSelector(getProfileError);
  // const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={cx(styles.container, className)}>
      <div className={styles.header}>
        <Text title={t('profile:pageTitle')} />
        <Button
          variant={ButtonVariants.OUTLINE}
          className={styles.button}
        >
          {t('profile:editButton')}
        </Button>
      </div>
      <div className={styles.inputs}>
        <Input
          value={data?.firstName}
          placeholder={t('profile:inputsPlaceholder.firstName')}
          disabled={isReadonly}
        />
        <Input
          value={data?.lastName}
          placeholder={t('profile:inputsPlaceholder.lastName')}
          disabled={isReadonly}
        />
      </div>
    </div>
  );
};
