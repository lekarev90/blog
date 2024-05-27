import {
  FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch.hook';
import { Text, TextVariant } from '@/shared/ui/Text';

import { VStack } from '@/shared/ui/Stack';
import {
  getIsProfileDataSame,
  getProfileData,
  getProfileErrors,
  getProfileIsLoading,
  getValidateTextError,
  profileActions,
  ProfileCard,
  ProfileCardHeader,
  TProfileFieldName,
  updateProfileData,
} from '@/features/editableProfileCard';

export const Profile: FC = memo(() => {
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();
  // eslint-disable-next-line no-undef
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
      dispatch(
        profileActions.setProfileDataValue({
          value,
          name,
        }),
      );
    },
    [dispatch],
  );

  return (
    <VStack gap="32">
      <ProfileCardHeader
        onToggleEditButton={onToggleEditButton}
        onResetButton={onResetButton}
        onSaveButton={onSaveButton}
        isProfileDataSame={isProfileDataSame}
        isReadonly={isReadonly}
      />
      {profileErrors?.length
        && profileErrors.map((error) => <Text key={error} text={getValidateTextError(t)[error]} variant={TextVariant.ERROR} />)}
      <ProfileCard isLoading={isLoading} isReadonly={isReadonly} data={data} onChangeHandler={onChangeHandler} />
    </VStack>
  );
});
