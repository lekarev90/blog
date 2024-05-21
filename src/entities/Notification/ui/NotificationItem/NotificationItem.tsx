import { memo } from 'react';

import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import { AppLink } from 'shared/ui/AppLink/AppLink';

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