import { FC, memo } from 'react';

import { Text } from '@/shared/ui/depricated/Text';
import { VStack } from '@/shared/ui/Stack';

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
