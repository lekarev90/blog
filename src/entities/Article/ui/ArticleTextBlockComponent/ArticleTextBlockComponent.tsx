import { FC, memo } from 'react';

import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated } from '@/shared/ui/depricated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import { IArticleTextBlock } from '../../model/types/article';

export const ArticleTextBlockComponent: FC<IArticleTextBlock> = memo(({ title, paragraphs }) => (
  <VStack gap="4">
    {title && <ToggleFeatures feature="isOldDesign" on={<TextDeprecated title={title} />} off={<Text title={title} />} />}
    {paragraphs.map((paragraph) => (
      <ToggleFeatures key={paragraph} feature="isOldDesign" on={<TextDeprecated text={paragraph} />} off={<Text text={paragraph} />} />
    ))}
  </VStack>
));
