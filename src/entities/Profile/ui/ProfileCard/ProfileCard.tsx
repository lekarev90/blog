import classNames from 'classnames/bind';
import { getProfileData, profileActions, updateProfileData } from 'entities/Profile';
import { getIsProfileDataSame } from 'entities/Profile/model/selectors/profile.selectors';
import { TProfileFieldName } from 'entities/Profile/model/types/profile';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';
import { Button, ButtonVariants } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';

import styles from './ProfileCard.module.scss';

const cx = classNames.bind(styles);

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();
  const data = useSelector(getProfileData);
  const isProfileDataSame = useSelector(getIsProfileDataSame);

  const [isReadonly, setIsReadonly] = useState(true);

  const onToggleEditButton = useCallback(() => {
    setIsReadonly((prevData) => !prevData);
  }, []);

  const onResetButton = useCallback(() => {
    dispatch(profileActions.restoreProfileData());
    setIsReadonly(true);
  }, [dispatch]);

  const onSaveButton = useCallback(() => {
    dispatch(updateProfileData());
    setIsReadonly(true);
  }, [dispatch]);

  const editButtonHandler = isReadonly ? onToggleEditButton : onResetButton;

  const editButtonText = isReadonly ? 'edit' : 'reset';

  const onChangeHandler = useCallback(
    (value: string, name: TProfileFieldName) => {
      dispatch(profileActions.setProfileDataValue({ value, name }));
    },
    [dispatch],
  );

  return (
    <div className={cx(styles.container, className)}>
      <div className={styles.header}>
        <Text title={t('profile:pageTitle')} />
        <div className={styles.buttonContainer}>
          <Button
            variant={ButtonVariants.BACKGROUND_INVERTED}
            className={styles.button}
            onClick={editButtonHandler}
          >
            {t(`profile:${editButtonText}Button`)}
          </Button>
          <Button
            variant={ButtonVariants.OUTLINE}
            className={styles.button}
            onClick={onSaveButton}
            disabled={isProfileDataSame || isReadonly}
          >
            {t('profile:saveButton')}
          </Button>
        </div>
      </div>
      <div className={styles.inputs}>
        <Input
          value={data?.firstName || ''}
          name="firstName"
          placeholder={t('profile:inputsPlaceholder.firstName')}
          disabled={isReadonly}
          onChange={onChangeHandler}
        />
        <Input<TProfileFieldName>
          value={data?.lastName || ''}
          name="lastName"
          placeholder={t('profile:inputsPlaceholder.lastName')}
          disabled={isReadonly}
          onChange={onChangeHandler}
        />
        <Input<TProfileFieldName>
          value={data?.age || ''}
          name="age"
          placeholder={t('profile:inputsPlaceholder.age')}
          disabled={isReadonly}
          onChange={onChangeHandler}
        />
        <Input<TProfileFieldName>
          value={data?.username || ''}
          name="username"
          placeholder={t('profile:inputsPlaceholder.username')}
          disabled={isReadonly}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
};
