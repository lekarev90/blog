import { memo } from 'react';

import { Skeleton } from '@/shared/ui/depricated/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';

import { useGetNotificationsQuery } from '../../model/api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

export const NotificationList = memo(() => {
  const { data, isLoading } = useGetNotificationsQuery(null, {
    pollingInterval: 1000,
  });

  const skeletons = (
    <>
      <Skeleton width="100%" height="80px" borderRadius="8px" />
      <Skeleton width="100%" height="80px" borderRadius="8px" />
      <Skeleton width="100%" height="80px" borderRadius="8px" />
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
