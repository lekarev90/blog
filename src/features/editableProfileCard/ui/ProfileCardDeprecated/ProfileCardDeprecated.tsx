import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { Avatar } from '@/shared/ui/depricated/Avatar';
import { Input } from '@/shared/ui/depricated/Input';
import { Skeleton } from '@/shared/ui/depricated/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import { EProfileCardTestIdInputs, getProfileCardTestId } from '../../model/const/const';
import { IProfile, TProfileFieldName } from '../../model/types/profileCardSchema';

import styles from './ProfileCardDeprecated.module.scss';

export interface IProfileCardDeprecatedProps {
  isReadonly: boolean;
  onChangeHandler: (value: string, name: TProfileFieldName) => void;
  data?: IProfile;
}

export const SkeletonProfileCardDeprecated = () => (
  <VStack gap="32" maxWidth>
    <HStack justify="center" maxWidth>
      <Skeleton width="200px" height="200px" borderRadius="50%" />
    </HStack>
    <HStack gap="24" align="start" maxWidth>
      <VStack gap="16" className={styles.inputsColumn}>
        <Skeleton width="100%" height="38px" />
        <Skeleton width="100%" height="38px" />
        <Skeleton width="100%" height="38px" />
        <Skeleton width="100%" height="38px" />
      </VStack>
      <VStack gap="16" className={styles.inputsColumn}>
        <Skeleton width="100%" height="38px" />
        <Skeleton width="100%" height="38px" />
        <HStack gap="32" align="start">
          <Skeleton width="200px" height="62px" />
          <Skeleton width="200px" height="62px" />
        </HStack>
      </VStack>
    </HStack>
  </VStack>
);

export const ProfileCardDeprecated = memo(({ isReadonly, onChangeHandler, data }: IProfileCardDeprecatedProps) => {
  const { t } = useTranslation('profile');

  return (
    <VStack gap="32" maxWidth>
      <HStack justify="center" maxWidth>
        <Avatar src={data?.avatar} alt="profile" size={200} />
      </HStack>
      <HStack gap="24" align="start" maxWidth>
        <VStack gap="16" className={styles.inputsColumn}>
          <Input
            value={data?.firstName || ''}
            name="firstName"
            placeholder={t('profile:inputsPlaceholder.firstName')}
            disabled={isReadonly}
            onChange={onChangeHandler}
            data-testid={getProfileCardTestId(EProfileCardTestIdInputs.FIRST_NAME)}
          />
          <Input
            value={data?.lastName || ''}
            name="lastName"
            placeholder={t('profile:inputsPlaceholder.lastName')}
            disabled={isReadonly}
            onChange={onChangeHandler}
            data-testid={getProfileCardTestId(EProfileCardTestIdInputs.LAST_NAME)}
          />
          <Input
            value={data?.age || ''}
            name="age"
            placeholder={t('profile:inputsPlaceholder.age')}
            disabled={isReadonly}
            onChange={onChangeHandler}
            data-testid={getProfileCardTestId(EProfileCardTestIdInputs.AGE)}
          />
          <Input
            value={data?.city || ''}
            name="city"
            placeholder={t('profile:inputsPlaceholder.city')}
            disabled={isReadonly}
            onChange={onChangeHandler}
            data-testid={getProfileCardTestId(EProfileCardTestIdInputs.CITY)}
          />
        </VStack>
        <VStack gap="16" className={styles.inputsColumn}>
          <Input
            value={data?.username || ''}
            name="username"
            placeholder={t('profile:inputsPlaceholder.username')}
            disabled={isReadonly}
            onChange={onChangeHandler}
            data-testid={getProfileCardTestId(EProfileCardTestIdInputs.USERNAME)}
          />
          <Input
            value={data?.avatar || ''}
            name="avatar"
            placeholder={t('profile:inputsPlaceholder.avatar')}
            disabled={isReadonly}
            onChange={onChangeHandler}
          />
          <HStack gap="32">
            <CurrencySelect value={data?.currency} isReadonly={isReadonly} onChange={onChangeHandler} />
            <CountrySelect value={data?.country} isReadonly={isReadonly} onChange={onChangeHandler} />
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
});
