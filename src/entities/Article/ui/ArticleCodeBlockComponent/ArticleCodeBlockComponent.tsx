import { Code } from '@/shared/ui/Code';
import { Text } from '@/shared/ui/Text';

import { VStack } from '@/shared/ui/Stack';
import { IArticleCodeBlock } from '../../model/types/article';

export const ArticleCodeBlockComponent = ({ title, code }: IArticleCodeBlock) => (
  <VStack gap="8" align="center">
    <Code text={code} />
    {title && (
      <Text
        text={title}
      />
    ) }
  </VStack>
);
