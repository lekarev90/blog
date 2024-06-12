import { rtkApi } from '@/shared/api/rtkApi';

import { NOTIFICATION_REQUEST_URL } from '../const/const';
import { INotificationSchema } from '../types/NotificationSchema';

export const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<INotificationSchema[], null>({
      query: () => ({
        url: NOTIFICATION_REQUEST_URL,
      }),
    }),
  }),
});

export const { useGetNotificationsQuery } = notificationApi;
