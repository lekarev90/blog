import { FC, memo } from 'react';

import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { IArticleTextBlock } from '../../model/types/article';

export const ArticleTextBlockComponent: FC<IArticleTextBlock> = memo(({
  title,
  paragraphs,
}) => (
  <VStack gap="4">
    {title && (
      <Text
        title={title}
      />
    )}
    {paragraphs.map((paragraph) => (
      <p key={paragraph}>
        { paragraph }
      </p>
    ))}
  </VStack>
));
