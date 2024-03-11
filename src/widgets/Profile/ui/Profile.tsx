import { getValidateTextError } from 'features/EditableProfileCard/model/services/validateProfileData/validateProfileData';
import {
  FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  getIsProfileDataSame,
  getProfileData,
  getProfileErrors,
  getProfileIsLoading,
  profileActions,
  ProfileCard,
  ProfileCardHeader,
  TProfileFieldName,
  updateProfileData,
} from 'features/EditableProfileCard';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';
import { Text, TextVariant } from 'shared/ui/Text/Text';

import styles from './Profile.module.scss';

export const Profile: FC = memo(() => {
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const isProfileDataSame = useSelector(getIsProfileDataSame);
  const profileErrors = useSelector(getProfileErrors);

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

  const onChangeHandler = useCallback(
    (value: string, name: TProfileFieldName) => {
      dispatch(profileActions.setProfileDataValue({ value, name }));
    },
    [dispatch],
  );

  return (
    <div className={styles.container}>
      <ProfileCardHeader
        onToggleEditButton={onToggleEditButton}
        onResetButton={onResetButton}
        onSaveButton={onSaveButton}
        isProfileDataSame={isProfileDataSame}
        isReadonly={isReadonly}
      />

      {profileErrors?.length
        && profileErrors.map((error) => (
          <Text
            key={error}
            text={getValidateTextError(t)[error]}
            variant={TextVariant.ERROR}
          />
        ))}
      <ProfileCard
        isLoading={isLoading}
        isReadonly={isReadonly}
        data={data}
        onChangeHandler={onChangeHandler}
      />
    </div>
  );
});
