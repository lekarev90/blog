import { memo } from 'react';

import { getRouteProfile } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/depricated/AppLink';
import { Avatar as AvatarDeprecated } from '@/shared/ui/depricated/Avatar';
import { Text as TextDeprecated } from '@/shared/ui/depricated/Text';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import { IComment } from '../../model/types/comment';

export const CommentCard = memo(({ user, text }: IComment) => {
  const { username, avatar, id: userId } = user;

  return (
    <ToggleFeatures
      feature="isOldDesign"
      on={(
        <VStack gap="8" data-testid="CommentCard">
          <HStack gap="8" Component={AppLinkDeprecated} to={getRouteProfile(userId)}>
            <AvatarDeprecated src={avatar} alt={username} size={30} />
            <TextDeprecated title={username} />
          </HStack>
          <TextDeprecated text={text} textDataTestId="CommentCard.Text" />
        </VStack>
      )}
      off={(
        <VStack Component={Card} data-testid="CommentCard" gap="8" padding="16">
          <HStack gap="8" Component={AppLink} to={getRouteProfile(userId)} align="center">
            <Avatar src={avatar} alt={username} size={30} />
            <Text boldText text={username} />
          </HStack>
          <Text text={text} textDataTestId="CommentCard.Text" />
        </VStack>
      )}
    />
  );
});
