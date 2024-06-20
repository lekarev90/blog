import { memo } from 'react';

import { ToggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/depricated/Skeleton';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

export const CommentCardSkeleton = memo(() => (
  <ToggleFeatures
    feature="isOldDesign"
    on={(
      <VStack gap="16">
        <HStack gap="8">
          <SkeletonDeprecated width={30} height={30} borderRadius="50%" />
          <SkeletonDeprecated width={100} height={16} />
        </HStack>
        <SkeletonDeprecated width="100%" height={50} />
      </VStack>
    )}
    off={(
      <VStack Component={Card} data-testid="CommentCard" gap="8" padding="16">
        <HStack gap="8">
          <Skeleton width={30} height={30} borderRadius="50%" />
          <Skeleton width={100} height={24} />
        </HStack>
        <Skeleton width="70%" height={24} />
      </VStack>
    )}
  />
));
