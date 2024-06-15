import { memo } from 'react';

import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/depricated/AppLink';
import { Card as CardDeprecated } from '@/shared/ui/depricated/Card';
import { Text as TextDeprecated } from '@/shared/ui/depricated/Text';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

import { INotificationSchema } from '../../model/types/NotificationSchema';

export const NotificationItem = memo(({ href, title, description }: INotificationSchema) => {
  const content = (
    <ToggleFeatures
      feature="isOldDesign"
      on={(
        <CardDeprecated>
          <TextDeprecated text={description} title={title} />
        </CardDeprecated>
)}
      off={(
        <Card>
          <Text text={description} title={title} />
        </Card>
)}
    />
  );

  if (href) {
    return (
      <ToggleFeatures
        feature="isOldDesign"
        on={(
          <AppLinkDeprecated to={href} target="_blank">
            {content}
          </AppLinkDeprecated>
)}
        off={(
          <AppLink to={href} target="_blank">
            {content}
          </AppLink>
)}
      />
    );
  }

  return content;
});
