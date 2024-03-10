import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { CountrySelect } from 'entities/Country/ui/CountrySelect/CountrySelect';
import { CurrencySelect } from 'entities/Currency/ui/CurrencySelect/CurrencySelect';

import { IProfile, TProfileFieldName } from 'features/EditableProfileCard';

import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';

import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  isReadonly: boolean;
  onChangeHandler: (value: string, name: TProfileFieldName) => void;
  data?: IProfile;
}

export const ProfileCard = memo(({ isReadonly, onChangeHandler, data }: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  return (
    <div className={styles.container}>
      {data?.avatar && (
        <Avatar
          src={data?.avatar}
          alt="profile"
          size={200}
        />
      )}

      <div className={styles.inputs}>
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
      </div>
    </div>
  );
});
