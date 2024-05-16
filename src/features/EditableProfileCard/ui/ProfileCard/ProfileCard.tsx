import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { CountrySelect } from 'entities/Country/ui/CountrySelect/CountrySelect';
import { CurrencySelect } from 'entities/Currency/ui/CurrencySelect/CurrencySelect';

import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';

import { VStack } from 'shared/ui/Stack';
import { IProfile, TProfileFieldName } from '../../model/types/profile';

import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  isReadonly: boolean;
  isLoading?: boolean;
  onChangeHandler: (value: string, name: TProfileFieldName) => void;
  data?: IProfile;
}

export const ProfileCard = memo(({
  isReadonly, isLoading, onChangeHandler, data,
}: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  return (
    <VStack gap="32">
      {isLoading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
        <VStack gap="16" align="center">
          {data?.avatar && (
            <Avatar
              src={data?.avatar}
              alt="profile"
              size={200}
            />
          )}
          <Input<TProfileFieldName>
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
          <Input<TProfileFieldName>
            value={data?.avatar || ''}
            name="avatar"
            placeholder={t('profile:inputsPlaceholder.avatar')}
            disabled={isReadonly}
            onChange={onChangeHandler}
          />
          <CurrencySelect
            value={data?.currency}
            isReadonly={isReadonly}
            onChangeHandler={onChangeHandler}
          />
          <CountrySelect
            value={data?.country}
            isReadonly={isReadonly}
            onChangeHandler={onChangeHandler}
          />
        </VStack>
      )}

    </VStack>
  );
});
