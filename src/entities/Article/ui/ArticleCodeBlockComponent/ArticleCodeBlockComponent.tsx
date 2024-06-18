import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated } from '@/shared/ui/depricated/Text';
import { Code } from '@/shared/ui/redesigned/Code';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import { IArticleCodeBlock } from '../../model/types/article';

export const ArticleCodeBlockComponent = ({ title, code }: IArticleCodeBlock) => (
  <VStack gap="8" align="center">
    <Code text={code} />
    {title && <ToggleFeatures feature="isOldDesign" on={<TextDeprecated text={title} />} off={<Text text={title} />} />}
  </VStack>
);
