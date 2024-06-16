import { memo } from 'react';

import { ToggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/redesigned/Stack';

import { IProfile, TProfileFieldName } from '../../model/types/profileCardSchema';
import { ProfileCardDeprecated, SkeletonProfileCardDeprecated } from '../ProfileCardDeprecated/ProfileCardDeprecated';
import { ProfileCardRedesigned, SkeletonProfileCardRedesigned } from '../ProfileCardRedesigned/ProfileCardRedesigned';

export interface ProfileCardProps {
  isReadonly: boolean;
  isLoading?: boolean;
  onChangeHandler: (value: string, name: TProfileFieldName) => void;
  data?: IProfile;
}

export const ProfileCard = memo(({ isLoading, ...props }: ProfileCardProps) => (
  <VStack gap="32" maxWidth>
    {isLoading
      ? <ToggleFeatures feature="isOldDesign" on={<SkeletonProfileCardDeprecated />} off={<SkeletonProfileCardRedesigned />} />
      : <ToggleFeatures feature="isOldDesign" on={<ProfileCardDeprecated {...props} />} off={<ProfileCardRedesigned {...props} />} />}
  </VStack>
));
