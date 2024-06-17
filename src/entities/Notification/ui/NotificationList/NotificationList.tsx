import { memo } from 'react';

import { toggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/depricated/Skeleton';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';

import { useGetNotificationsQuery } from '../../model/api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

export const NotificationList = memo(() => {
  const { data, isLoading } = useGetNotificationsQuery(null, {
    pollingInterval: 1000,
  });

  const SkeletonComponent = toggleFeatures({
    name: 'isOldDesign',
    on: () => SkeletonDeprecated,
    off: () => Skeleton,
  });

  const skeletons = (
    <>
      <SkeletonComponent width="100%" height="80px" borderRadius="8px" />
      <SkeletonComponent width="100%" height="80px" borderRadius="8px" />
      <SkeletonComponent width="100%" height="80px" borderRadius="8px" />
    </>
  );

  const content = data?.map((item) => <NotificationItem key={item.id} {...item} />);

  const isContentReady = data && !isLoading;

  return (
    <VStack gap="8">
      {isContentReady ? content : skeletons}
    </VStack>
  );
});
