import {
  FC, memo, useCallback, useState,
} from 'react';
import { useSelector } from 'react-redux';

import {
  getProfileData,
  profileActions,
  ProfileCard,
  updateProfileData,
  ProfileCardHeader,
  getIsProfileDataSame,
  TProfileFieldName,
} from 'features/EditableProfileCard';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch.hook';

import styles from './Profile.module.scss';

export const Profile: FC = memo(() => {
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
      <ProfileCard
        isReadonly={isReadonly}
        data={data}
        onChangeHandler={onChangeHandler}
      />
    </div>
  );
});
