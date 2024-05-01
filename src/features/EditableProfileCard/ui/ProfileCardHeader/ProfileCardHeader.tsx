import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Button, ButtonVariants } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

import { getIsProfileOwner } from '../../model/selectors/profile.selectors';

import styles from './ProfileCardHeader.module.scss';

interface ProfileCardHeaderProps {
  isReadonly: boolean;
  isProfileDataSame: boolean;
  onToggleEditButton: () => void;
  onResetButton: () => void;
  onSaveButton: () => void;
}

export const ProfileCardHeader = memo(
  ({
    isReadonly,
    onToggleEditButton,
    onResetButton,
    onSaveButton,
    isProfileDataSame,
  }: ProfileCardHeaderProps) => {
    const isProfileOwner = useSelector(getIsProfileOwner);

    const { t } = useTranslation('profile');

    const editButtonHandler = isReadonly ? onToggleEditButton : onResetButton;

    const editButtonText = isReadonly ? 'edit' : 'reset';

    return (
      <div className={styles.container}>
        <Text title={t('profile:pageTitle')} />
        {isProfileOwner && (
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
        )}
      </div>
    );
  },
);
