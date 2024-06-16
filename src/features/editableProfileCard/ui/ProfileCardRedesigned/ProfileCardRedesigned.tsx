import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import { EProfileCardTestIdInputs, getProfileCardTestId } from '../../model/const/const';
import { IProfile, TProfileFieldName } from '../../model/types/profileCardSchema';

import styles from './ProfileCardRedesigned.module.scss';

export interface IProfileCardRedesignedProps {
  isReadonly: boolean;
  onChangeHandler: (value: string, name: TProfileFieldName) => void;
  data?: IProfile;
}

export const SkeletonProfileCardRedesigned = () => (
  <VStack gap="32" maxWidth>
    <HStack justify="center" maxWidth>
      <Skeleton width="200px" height="200px" borderRadius="50%" />
    </HStack>
    <HStack gap="24" align="start" maxWidth Component={Card}>
      <VStack gap="16" className={styles.inputsColumn}>
        <HStack gap="4">
          <Skeleton width="20%" height="20px" />
          <Skeleton width="100%" height="38px" />
        </HStack>
        <HStack gap="4">
          <Skeleton width="20%" height="20px" />
          <Skeleton width="100%" height="38px" />
        </HStack>
        <HStack gap="4">
          <Skeleton width="20%" height="20px" />
          <Skeleton width="100%" height="38px" />
        </HStack>
        <HStack gap="4">
          <Skeleton width="20%" height="20px" />
          <Skeleton width="100%" height="38px" />
        </HStack>
      </VStack>
      <VStack gap="16" className={styles.inputsColumn}>
        <HStack gap="4">
          <Skeleton width="20%" height="20px" />
          <Skeleton width="100%" height="38px" />
        </HStack>
        <HStack gap="4">
          <Skeleton width="20%" height="20px" />
          <Skeleton width="100%" height="38px" />
        </HStack>
        <HStack gap="4">
          <Skeleton width="20%" height="20px" />
          <Skeleton width="100%" height="32px" />
        </HStack>
        <HStack gap="4">
          <Skeleton width="20%" height="20px" />
          <Skeleton width="100%" height="32px" />
        </HStack>
      </VStack>
    </HStack>
  </VStack>
);

export const ProfileCardRedesigned = memo(({
  isReadonly, onChangeHandler, data,
}: IProfileCardRedesignedProps) => {
  const { t } = useTranslation('profile');

  return (
    <VStack gap="32" maxWidth>
      <HStack justify="center" maxWidth>
        <Avatar src={data?.avatar} alt="profile-image" size={200} />
      </HStack>
      <HStack
        gap="24"
        align="start"
        maxWidth
        Component={Card}
        variant="light"
        padding="16"
      >
        <VStack gap="16" className={styles.inputsColumn}>
          <Input
            value={data?.firstName || ''}
            name="firstName"
            placeholder={t('profile:inputsPlaceholder.firstName')}
            label={t('profile:inputLabels.firstName')}
            disabled={isReadonly}
            onChange={onChangeHandler}
            data-testid={getProfileCardTestId(EProfileCardTestIdInputs.FIRST_NAME)}
          />
          <Input
            value={data?.lastName || ''}
            name="lastName"
            placeholder={t('profile:inputsPlaceholder.lastName')}
            label={t('profile:inputLabels.lastName')}
            disabled={isReadonly}
            onChange={onChangeHandler}
            data-testid={getProfileCardTestId(EProfileCardTestIdInputs.LAST_NAME)}
          />
          <Input
            value={data?.age || ''}
            name="age"
            label={t('profile:inputLabels.age')}
            placeholder={t('profile:inputsPlaceholder.age')}
            disabled={isReadonly}
            onChange={onChangeHandler}
            data-testid={getProfileCardTestId(EProfileCardTestIdInputs.AGE)}
          />
          <Input
            value={data?.city || ''}
            name="city"
            label={t('profile:inputLabels.city')}
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
            label={t('profile:inputLabels.username')}
            placeholder={t('profile:inputsPlaceholder.username')}
            disabled={isReadonly}
            onChange={onChangeHandler}
            data-testid={getProfileCardTestId(EProfileCardTestIdInputs.USERNAME)}
          />
          <Input
            value={data?.avatar || ''}
            name="avatar"
            label={t('profile:inputLabels.avatar')}
            placeholder={t('profile:inputsPlaceholder.avatar')}
            disabled={isReadonly}
            onChange={onChangeHandler}
          />
          <CurrencySelect value={data?.currency} isReadonly={isReadonly} onChange={onChangeHandler} />
          <CountrySelect value={data?.country} isReadonly={isReadonly} onChange={onChangeHandler} />
        </VStack>
      </HStack>
    </VStack>
  );
});
