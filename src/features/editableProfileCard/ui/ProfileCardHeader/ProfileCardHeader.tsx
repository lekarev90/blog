import { memo } from 'react';
import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import { ToggleFeatures } from '@/shared/lib/features';
import { Button as ButtonDeprecated, ButtonVariants } from '@/shared/ui/depricated/Button';
import { Text as TextDeprecated } from '@/shared/ui/depricated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

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
    isReadonly, onToggleEditButton, onResetButton, onSaveButton, isProfileDataSame,
  }: ProfileCardHeaderProps) => {
    const isProfileOwner = useSelector(getIsProfileOwner);

    const { t } = useTranslation('profile');

    const editButtonHandler = isReadonly ? onToggleEditButton : onResetButton;

    const editButtonText = isReadonly ? 'edit' : 'reset';

    return (
      <ToggleFeatures
        feature="isOldDesign"
        on={(
          <HStack justify="between">
            <TextDeprecated title={t('profile:pageTitle')} />
            {isProfileOwner && (
              <HStack gap="8">
                <ButtonDeprecated
                  data-testid={getProfileCardTestId(EProfileCardTestIdButtons.EDIT_BUTTON)}
                  variant={ButtonVariants.BACKGROUND_INVERTED}
                  onClick={editButtonHandler}
                >
                  {t(`profile:${editButtonText}Button`)}
                </ButtonDeprecated>
                <ButtonDeprecated
                  data-testid={getProfileCardTestId(EProfileCardTestIdButtons.SAVE_BUTTON)}
                  variant={ButtonVariants.OUTLINE}
                  onClick={onSaveButton}
                  disabled={isProfileDataSame || isReadonly}
                >
                  {t('profile:saveButton')}
                </ButtonDeprecated>
              </HStack>
            )}
          </HStack>
        )}
        off={(
          <HStack justify="between" Component={Card} padding="16" variant="light">
            <Text title={t('profile:pageTitle')} />
            {isProfileOwner && (
              <HStack gap="8">
                <Button
                  data-testid={getProfileCardTestId(EProfileCardTestIdButtons.EDIT_BUTTON)}
                  variant="outline"
                  outlineColor={!isReadonly ? 'error' : undefined}
                  onClick={editButtonHandler}
                >
                  {t(`profile:${editButtonText}Button`)}
                </Button>
                <Button
                  data-testid={getProfileCardTestId(EProfileCardTestIdButtons.SAVE_BUTTON)}
                  variant="outline"
                  outlineColor={!isProfileDataSame ? 'success' : undefined}
                  onClick={onSaveButton}
                  disabled={isProfileDataSame || isReadonly}
                >
                  {t('profile:saveButton')}
                </Button>
              </HStack>
            )}
          </HStack>
        )}
      />
    );
  },
);
