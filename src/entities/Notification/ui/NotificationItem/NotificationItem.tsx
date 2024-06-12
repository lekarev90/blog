import { memo } from 'react';

import { AppLink } from '@/shared/ui/AppLink';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';

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
