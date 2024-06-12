import { memo } from 'react';

import { AppLink } from '@/shared/ui/depricated/AppLink';
import { Card } from '@/shared/ui/depricated/Card';
import { Text } from '@/shared/ui/depricated/Text';

import { INotificationSchema } from '../../model/types/NotificationSchema';

export const NotificationItem = memo(({ href, title, description }: INotificationSchema) => {
  const content = (
    <Card>
      <Text text={description} title={title} />
    </Card>
  );

  if (href) {
    return (
      <AppLink to={href} target="_blank">
        {content}
      </AppLink>
    );
  }

  return content;
});
