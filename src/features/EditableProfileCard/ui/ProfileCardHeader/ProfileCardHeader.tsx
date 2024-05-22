import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Button, ButtonVariants } from '@/shared/ui/Button/Button';
import { Text } from '@/shared/ui/Text/Text';
import { HStack } from '@/shared/ui/Stack';

import { EProfileCardTestIdButtons, getProfileCardTestId } from '../../model/const/const';
import { getIsProfileOwner } from '../../model/selectors/profile.selectors';

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
      <HStack justify="between">
        <Text title={t('profile:pageTitle')} />
        {isProfileOwner && (
          <HStack gap="8">
            <Button
              data-testid={getProfileCardTestId(EProfileCardTestIdButtons.EDIT_BUTTON)}
              variant={ButtonVariants.BACKGROUND_INVERTED}
              onClick={editButtonHandler}
            >
              {t(`profile:${editButtonText}Button`)}
            </Button>
            <Button
              data-testid={getProfileCardTestId(EProfileCardTestIdButtons.SAVE_BUTTON)}
              variant={ButtonVariants.OUTLINE}
              onClick={onSaveButton}
              disabled={isProfileDataSame || isReadonly}
            >
              {t('profile:saveButton')}
            </Button>
          </HStack>
        )}
      </HStack>
    );
  },
);
